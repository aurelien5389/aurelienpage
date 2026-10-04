'use client'

import { useMemo, useState } from 'react'
import styles from './SimulateurSeo.module.css'

/**
 * Simulateur de budget SEO.
 *
 * IMPORTANT : toutes les fourchettes proviennent des grilles publiées sur
 * /cout-prestation-seo (_drafts/cout-prestation-seo.md). Ne pas inventer de
 * montants ici — si une grille change, la mettre à jour aux deux endroits.
 */

type PrestationId = 'audit' | 'accompagnement' | 'motscles' | 'migration'
type TailleId = 'vitrine' | 'moyen' | 'grand'
type ConcurrenceId = 'faible' | 'moyenne' | 'forte'

type Fourchette = { min: number; max: number }

const PRESTATIONS: { id: PrestationId; label: string; unite: string }[] = [
  { id: 'audit', label: 'Audit SEO', unite: 'prestation ponctuelle' },
  { id: 'accompagnement', label: 'Accompagnement mensuel', unite: 'par mois' },
  { id: 'motscles', label: 'Stratégie de mots-clés', unite: 'prestation ponctuelle' },
  { id: 'migration', label: 'Migration SEO / refonte', unite: 'prestation ponctuelle' },
]

const TAILLES: { id: TailleId; label: string; detail: string }[] = [
  { id: 'vitrine', label: 'Site vitrine', detail: 'moins de 50 pages' },
  { id: 'moyen', label: 'Site moyen', detail: '50 à 500 pages' },
  { id: 'grand', label: 'Grand site / e-commerce', detail: 'plus de 500 pages' },
]

const CONCURRENCES: { id: ConcurrenceId; label: string; detail: string }[] = [
  { id: 'faible', label: 'Faible', detail: 'marché local ou de niche' },
  { id: 'moyenne', label: 'Moyenne', detail: 'PME, concurrence régionale' },
  { id: 'forte', label: 'Forte', detail: 'marché national très disputé' },
]

// Audit SEO : dépend uniquement de la taille du site.
const AUDIT: Record<TailleId, Fourchette> = {
  vitrine: { min: 800, max: 2000 },
  moyen: { min: 2000, max: 5000 },
  grand: { min: 4000, max: 10000 },
}

// Accompagnement mensuel : paliers croisant taille et concurrence.
const PALIERS_MENSUELS: Fourchette[] = [
  { min: 500, max: 1000 },
  { min: 1000, max: 3000 },
  { min: 3000, max: 8000 },
  { min: 8000, max: 20000 },
]

const INDEX_PALIER: Record<TailleId, Record<ConcurrenceId, number>> = {
  vitrine: { faible: 0, moyenne: 1, forte: 1 },
  moyen: { faible: 1, moyenne: 1, forte: 2 },
  grand: { faible: 2, moyenne: 2, forte: 3 },
}

// Stratégie de mots-clés : 800 à 2 500 € selon la profondeur de l'analyse.
const MOTSCLES: Record<TailleId, Fourchette> = {
  vitrine: { min: 800, max: 1500 },
  moyen: { min: 1200, max: 2000 },
  grand: { min: 1800, max: 2500 },
}

// Migration SEO : 1 500 à 8 000 € selon la taille du site.
const MIGRATION: Record<TailleId, Fourchette> = {
  vitrine: { min: 1500, max: 3000 },
  moyen: { min: 3000, max: 5000 },
  grand: { min: 5000, max: 8000 },
}

function calculer(
  prestation: PrestationId,
  taille: TailleId,
  concurrence: ConcurrenceId
): Fourchette {
  switch (prestation) {
    case 'audit':
      return AUDIT[taille]
    case 'accompagnement':
      return PALIERS_MENSUELS[INDEX_PALIER[taille][concurrence]]
    case 'motscles':
      return MOTSCLES[taille]
    case 'migration':
      return MIGRATION[taille]
  }
}

const euro = (n: number) => n.toLocaleString('fr-FR') + ' €'

function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  const w = window as unknown as { gtag?: (...args: unknown[]) => void }
  if (typeof w.gtag === 'function') w.gtag('event', event, params)
}

export default function SimulateurSeo() {
  const [prestation, setPrestation] = useState<PrestationId>('accompagnement')
  const [taille, setTaille] = useState<TailleId>('moyen')
  const [concurrence, setConcurrence] = useState<ConcurrenceId>('moyenne')

  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [site, setSite] = useState('')
  const [envoi, setEnvoi] = useState<'idle' | 'envoi' | 'ok' | 'erreur'>('idle')
  const [messageErreur, setMessageErreur] = useState('')

  const fourchette = useMemo(
    () => calculer(prestation, taille, concurrence),
    [prestation, taille, concurrence]
  )

  const presta = PRESTATIONS.find((p) => p.id === prestation)!
  const estMensuel = prestation === 'accompagnement'
  const concurrencePertinente = prestation === 'accompagnement'

  async function envoyer(e: React.FormEvent) {
    e.preventDefault()
    setEnvoi('envoi')
    setMessageErreur('')

    const recap = [
      `Simulation de budget SEO depuis /cout-prestation-seo`,
      ``,
      `Prestation : ${presta.label}`,
      `Taille du site : ${TAILLES.find((t) => t.id === taille)!.label}`,
      concurrencePertinente
        ? `Concurrence : ${CONCURRENCES.find((c) => c.id === concurrence)!.label}`
        : null,
      `Estimation affichée : ${euro(fourchette.min)} à ${euro(fourchette.max)}${
        estMensuel ? ' par mois' : ''
      }`,
      site ? `Site à analyser : ${site}` : null,
      ``,
      `Demande d'échange suite à la simulation.`,
    ]
      .filter(Boolean)
      .join('\n')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nom,
          email,
          subject: `Simulation budget SEO : ${presta.label}`,
          message: recap,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Envoi impossible')
      }

      setEnvoi('ok')
      track('generate_lead', {
        source: 'simulateur_seo',
        prestation,
        taille,
        concurrence: concurrencePertinente ? concurrence : undefined,
        value: fourchette.min,
        currency: 'EUR',
      })
    } catch (err) {
      setEnvoi('erreur')
      setMessageErreur(
        err instanceof Error ? err.message : 'Une erreur est survenue.'
      )
    }
  }

  return (
    <section className={styles.simu} id="simulateur">
      <div className={styles.inner}>
        <h2 className={styles.titre}>Simulateur : estimez votre budget SEO</h2>
        <p className={styles.intro}>
          Trois réponses pour obtenir une fourchette réaliste, basée sur les
          grilles tarifaires détaillées ci-dessus. Aucune inscription requise.
        </p>

        <div className={styles.grille}>
          <fieldset className={styles.champ}>
            <legend className={styles.legende}>Quelle prestation ?</legend>
            <div className={styles.options}>
              {PRESTATIONS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  aria-pressed={prestation === p.id}
                  className={
                    prestation === p.id
                      ? `${styles.option} ${styles.optionActive}`
                      : styles.option
                  }
                  onClick={() => {
                    setPrestation(p.id)
                    track('simulateur_interaction', { champ: 'prestation', valeur: p.id })
                  }}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className={styles.champ}>
            <legend className={styles.legende}>Quelle taille de site ?</legend>
            <div className={styles.options}>
              {TAILLES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  aria-pressed={taille === t.id}
                  className={
                    taille === t.id
                      ? `${styles.option} ${styles.optionActive}`
                      : styles.option
                  }
                  onClick={() => {
                    setTaille(t.id)
                    track('simulateur_interaction', { champ: 'taille', valeur: t.id })
                  }}
                >
                  <span>{t.label}</span>
                  <span className={styles.optionDetail}>{t.detail}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset
            className={
              concurrencePertinente
                ? styles.champ
                : `${styles.champ} ${styles.champInactif}`
            }
          >
            <legend className={styles.legende}>
              Quel niveau de concurrence ?
              {!concurrencePertinente && (
                <span className={styles.legendeNote}>
                  {' '}
                  (sans effet sur cette prestation)
                </span>
              )}
            </legend>
            <div className={styles.options}>
              {CONCURRENCES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  disabled={!concurrencePertinente}
                  aria-pressed={concurrence === c.id}
                  className={
                    concurrence === c.id
                      ? `${styles.option} ${styles.optionActive}`
                      : styles.option
                  }
                  onClick={() => {
                    setConcurrence(c.id)
                    track('simulateur_interaction', { champ: 'concurrence', valeur: c.id })
                  }}
                >
                  <span>{c.label}</span>
                  <span className={styles.optionDetail}>{c.detail}</span>
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className={styles.resultat} role="status" aria-live="polite">
          <p className={styles.resultatLabel}>Budget estimé pour {presta.label}</p>
          <p className={styles.resultatPrix}>
            {euro(fourchette.min)} <span className={styles.resultatSep}>à</span>{' '}
            {euro(fourchette.max)}
            {estMensuel && <span className={styles.resultatUnite}> / mois</span>}
          </p>
          <p className={styles.resultatNote}>
            Fourchette indicative issue des tarifs pratiqués sur le marché
            français en 2026. Le devis final dépend de l’état réel du site et
            des objectifs fixés.
          </p>
        </div>

        {envoi === 'ok' ? (
          <div className={styles.succes} role="status">
            <p className={styles.succesTitre}>Demande envoyée.</p>
            <p>
              Je reviens vers vous sous 24 h ouvrées avec une estimation
              affinée. Vous pouvez aussi réserver directement un créneau :
            </p>
            <a
              href="https://calendly.com/aurelienpage89/diagnostic-offert-30-min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrim}
            >
              Réserver mon diagnostic offert →
            </a>
          </div>
        ) : (
          <form className={styles.form} onSubmit={envoyer}>
            <p className={styles.formTitre}>
              Recevoir une estimation personnalisée pour votre site
            </p>
            <div className={styles.formGrille}>
              <label className={styles.label}>
                <span>Prénom et nom</span>
                <input
                  type="text"
                  required
                  minLength={2}
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  className={styles.input}
                  autoComplete="name"
                />
              </label>
              <label className={styles.label}>
                <span>Email professionnel</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                  autoComplete="email"
                />
              </label>
              <label className={`${styles.label} ${styles.labelLarge}`}>
                <span>
                  Adresse du site <span className={styles.optionnel}>(facultatif)</span>
                </span>
                <input
                  type="text"
                  value={site}
                  onChange={(e) => setSite(e.target.value)}
                  className={styles.input}
                  placeholder="exemple.fr"
                />
              </label>
            </div>
            <button
              type="submit"
              className={styles.btnPrim}
              disabled={envoi === 'envoi'}
            >
              {envoi === 'envoi' ? 'Envoi…' : 'Recevoir mon estimation →'}
            </button>
            {envoi === 'erreur' && (
              <p className={styles.erreur} role="alert">
                {messageErreur} Vous pouvez me joindre via la{' '}
                <a href="/contact">page contact</a>.
              </p>
            )}
            <p className={styles.mentions}>
              Vos données servent uniquement à répondre à votre demande. Aucun
              partage, aucune inscription à une liste.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
