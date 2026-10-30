import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { consignesChatbot } from '@/lib/chatbot-consignes'

// Chatbot du site : remplace le webhook n8n (n8n.audiaa.fr).
// Fournisseur, dans l'ordre :
// 1. ANTHROPIC_API_KEY (variable Vercel) : API Anthropic en direct ;
// 2. sinon Vercel AI Gateway, authentifié par AI_GATEWAY_API_KEY ou par le jeton OIDC fourni par Vercel.

const MODELE_ANTHROPIC = 'claude-haiku-5-5'
const MODELE_GATEWAY = 'anthropic/claude-haiku-5.5'
// Large marge : une partie du budget peut servir à la réflexion du modèle avant la réponse.
// La longueur visible est tenue par les consignes (90 mots).
const MAX_TOKENS = 2000

const schema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(['user', 'assistant']),
        content: z.string().trim().min(1).max(1500),
      })
    )
    .min(1)
    .max(30),
})

// Origines autorisées : le site, ses domaines Vercel, le poste local
const origineAutorisee = (origin: string | null) =>
  !origin ||
  /^https:\/\/(www\.)?aurelienpage\.fr$/.test(origin) ||
  /^https:\/\/aurelienpage[a-z0-9-]*\.vercel\.app$/.test(origin) ||
  /^http:\/\/localhost(:\d+)?$/.test(origin)

// Limite simple par adresse IP (best effort : la mémoire est propre à chaque instance)
const FENETRE_MS = 10 * 60 * 1000
const MAX_REQUETES = 20
const compteurs = new Map<string, number[]>()
function tropDeRequetes(ip: string) {
  const maintenant = Date.now()
  const recents = (compteurs.get(ip) || []).filter((t) => maintenant - t < FENETRE_MS)
  recents.push(maintenant)
  compteurs.set(ip, recents)
  if (compteurs.size > 5000) compteurs.clear()
  return recents.length > MAX_REQUETES
}

const REPONSE_SECOURS =
  "Petit souci technique de mon côté. Vous pouvez réserver un échange de 30 minutes ou m'écrire via https://aurelienpage.fr/contact"

type Message = { role: 'user' | 'assistant'; content: string }

async function viaAnthropic(cle: string, systeme: string, messages: Message[]) {
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': cle,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({ model: MODELE_ANTHROPIC, max_tokens: MAX_TOKENS, system: systeme, messages }),
  })
  if (!r.ok) throw new Error(`Anthropic ${r.status} ${(await r.text()).slice(0, 300)}`)
  const data = await r.json()
  if (data.stop_reason && data.stop_reason !== 'end_turn') {
    console.warn('[chat] arrêt', data.stop_reason, (data.content || []).map((b: { type: string }) => b.type).join(','))
  }
  return (data.content || [])
    .filter((b: { type: string }) => b.type === 'text')
    .map((b: { text: string }) => b.text)
    .join('\n')
    .trim()
}

async function viaGateway(jeton: string, systeme: string, messages: Message[]) {
  const r = await fetch('https://ai-gateway.vercel.sh/v1/chat/completions', {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${jeton}` },
    body: JSON.stringify({
      model: MODELE_GATEWAY,
      max_tokens: MAX_TOKENS,
      messages: [{ role: 'system', content: systeme }, ...messages],
    }),
  })
  if (!r.ok) throw new Error(`AI Gateway ${r.status} ${(await r.text()).slice(0, 300)}`)
  const data = await r.json()
  return String(data.choices?.[0]?.message?.content || '').trim()
}

export async function POST(request: NextRequest) {
  if (!origineAutorisee(request.headers.get('origin'))) {
    return NextResponse.json({ error: 'Origine non autorisée' }, { status: 403 })
  }

  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'inconnue'
  if (tropDeRequetes(ip)) {
    return NextResponse.json(
      { reply: "Vous m'avez posé beaucoup de questions d'un coup. Pour aller plus loin, réservons 30 minutes : https://aurelienpage.fr/contact" },
      { status: 429 }
    )
  }

  let messages: Message[]
  try {
    const parsed = schema.safeParse(await request.json())
    if (!parsed.success) return NextResponse.json({ error: 'Message invalide' }, { status: 400 })
    // On garde les 12 derniers échanges, en commençant par un message de l'utilisateur
    messages = parsed.data.messages.slice(-12)
    while (messages.length && messages[0].role !== 'user') messages = messages.slice(1)
    if (!messages.length || messages[messages.length - 1].role !== 'user') {
      return NextResponse.json({ error: 'Message invalide' }, { status: 400 })
    }
  } catch {
    return NextResponse.json({ error: 'Message invalide' }, { status: 400 })
  }

  const systeme = consignesChatbot()
  const cleAnthropic = process.env.ANTHROPIC_API_KEY
  const jetonGateway =
    process.env.AI_GATEWAY_API_KEY || request.headers.get('x-vercel-oidc-token') || process.env.VERCEL_OIDC_TOKEN

  try {
    let reply = ''
    if (cleAnthropic) reply = await viaAnthropic(cleAnthropic, systeme, messages)
    else if (jetonGateway) reply = await viaGateway(jetonGateway, systeme, messages)
    else throw new Error('Aucun fournisseur configuré (ANTHROPIC_API_KEY, AI_GATEWAY_API_KEY ou OIDC Vercel)')
    return NextResponse.json({ reply: reply || REPONSE_SECOURS })
  } catch (e) {
    console.error('[chat]', e instanceof Error ? e.message : e)
    return NextResponse.json({ reply: REPONSE_SECOURS }, { status: 502 })
  }
}
