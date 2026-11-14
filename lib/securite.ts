import { NextRequest, NextResponse } from 'next/server'

/**
 * Protection commune des formulaires (contact, ressources).
 *
 * Contrôles, dans l'ordre :
 *   1. Origine : la requête doit venir du site (en-tête Origin).
 *   2. Limite d'envois par adresse IP (mémoire de l'instance : filet de sécurité,
 *      à doubler d'une règle de limitation dans le pare-feu Vercel).
 *   3. Champ piège « website » et durée de remplissage (robots : faux succès silencieux).
 *   4. Liste de blocage facultative (EXPEDITEURS_BLOQUES).
 *   5. Cloudflare Turnstile, vérifié côté serveur.
 *
 * Variables d'environnement :
 *   TURNSTILE_SECRET_KEY : clé secrète Turnstile. Tant qu'elle n'est pas définie, l'étape 5 est ignorée.
 *   TURNSTILE_MODE       : par défaut, Turnstile est en mode OBSERVATION (un échec est journalisé avec sa raison,
 *                          mais l'envoi passe). Mettre « bloquant » seulement après un test humain réussi.
 *   EXPEDITEURS_BLOQUES  : facultatif, liste séparée par des virgules (noms, e-mails, domaines, mots).
 */

export const origineDuSite = (origin: string | null) =>
  !!origin &&
  (/^https:\/\/(www\.)?aurelienpage\.fr$/.test(origin) ||
    /^https:\/\/aurelienpage[a-z0-9-]*\.vercel\.app$/.test(origin) ||
    /^http:\/\/localhost(:\d+)?$/.test(origin))

export const ipDe = (request: NextRequest) =>
  (request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '').split(',')[0].trim() || 'inconnue'

const FENETRE_MS = 10 * 60 * 1000
const MAX_ENVOIS = 5
const compteurs = new Map<string, number[]>()

function tropDEnvois(cle: string) {
  const maintenant = Date.now()
  const recents = (compteurs.get(cle) || []).filter((t) => maintenant - t < FENETRE_MS)
  recents.push(maintenant)
  compteurs.set(cle, recents)
  if (compteurs.size > 5000) compteurs.clear()
  return recents.length > MAX_ENVOIS
}

async function turnstileValide(jeton: unknown, ip: string): Promise<{ ok: boolean; raison?: string }> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    console.warn('[securite] TURNSTILE_SECRET_KEY non configurée : vérification Turnstile ignorée.')
    return { ok: true }
  }
  if (typeof jeton !== 'string' || !jeton) return { ok: false, raison: "jeton absent (le widget n'a rien délivré au navigateur)" }
  if (jeton.length > 2048) return { ok: false, raison: 'jeton trop long' }
  try {
    const params = new URLSearchParams({ secret, response: jeton })
    if (ip !== 'inconnue') params.set('remoteip', ip)
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: params })
    const json = (await r.json()) as { success?: boolean; hostname?: string; 'error-codes'?: string[] }
    if (json.success === true) return { ok: true }
    return { ok: false, raison: `siteverify refuse : ${JSON.stringify(json['error-codes'] ?? [])} hostname=${json.hostname ?? ''}` }
  } catch (e) {
    // Panne de Cloudflare : on refuse plutôt que d'ouvrir le formulaire aux robots.
    console.error('[securite] Turnstile injoignable :', e instanceof Error ? e.message : e)
    return { ok: false, raison: 'siteverify injoignable' }
  }
}

/** Renvoie une réponse à retourner telle quelle si l'envoi est refusé, sinon null. */
export async function controler(
  request: NextRequest,
  body: Record<string, unknown>,
  nom: string
): Promise<NextResponse | null> {
  if (!origineDuSite(request.headers.get('origin'))) {
    return NextResponse.json({ error: 'Origine non autorisée' }, { status: 403 })
  }

  const ip = ipDe(request)
  if (tropDEnvois(`${nom}:${ip}`)) {
    return NextResponse.json({ error: 'Trop de demandes. Réessayez dans quelques minutes.' }, { status: 429 })
  }

  const duree = Number(body.dureeMs)
  if (body.website || (Number.isFinite(duree) && duree < 3000)) {
    console.warn(`[${nom}] Envoi bloqué (robot probable)`, { ip, duree: body.dureeMs, piege: !!body.website })
    return NextResponse.json({ success: true })
  }

  const bloques = (process.env.EXPEDITEURS_BLOQUES || '')
    .toLowerCase()
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)
  if (bloques.length) {
    const texte = ['name', 'email', 'subject', 'message']
      .map((c) => (typeof body[c] === 'string' ? (body[c] as string) : ''))
      .join(' ')
      .toLowerCase()
    const trouve = bloques.find((t) => texte.includes(t))
    if (trouve) {
      console.warn(`[${nom}] Envoi bloqué (expéditeur en liste de blocage)`, { ip, terme: trouve })
      return NextResponse.json({ success: true })
    }
  }

  const verif = await turnstileValide(body.turnstile, ip)
  if (!verif.ok) {
    const bloquant = process.env.TURNSTILE_MODE === 'bloquant'
    console.warn(`[${nom}] Turnstile en échec (${bloquant ? 'bloqué' : 'observation : envoi accepté'}) : ${verif.raison}`, { ip })
    if (!bloquant) return null
    return NextResponse.json(
      { error: 'La vérification anti-robot a échoué. Rechargez la page et réessayez.' },
      { status: 403 }
    )
  }
  return null
}
