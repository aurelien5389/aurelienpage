'use client'

import { useState, type FormEvent } from 'react'
import { useAntiRobot } from './useAntiRobot'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './RessourcesEmail.module.css'
import { suivre } from '@/components/SourceTracker'

type Etat = 'repos' | 'envoi' | 'ok' | 'erreur'

// Bloc « recevoir les ressources GEO par e-mail » : envoi unique, liste seulement avec consentement
export default function RessourcesEmail() {
  const pathname = usePathname()
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [website, setWebsite] = useState('')
  const [etat, setEtat] = useState<Etat>('repos')
  const antiRobot = useAntiRobot()

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setEtat('envoi')
    try {
      const res = await fetch('/api/ressources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, consent, page: pathname, website, ...(await antiRobot.donnees()) }),
      })
      setEtat(res.ok ? 'ok' : 'erreur')
      if (res.ok) suivre('ressources_email')
    } catch {
      setEtat('erreur')
    }
  }

  return (
    <section className={styles.reSection} aria-labelledby="re-titre">
      <div className={styles.reInner}>
        <h2 id="re-titre" className={styles.reTitre}>Recevoir les ressources GEO par e-mail</h2>
        <p className={styles.reSous}>
          La checklist, le modèle de relevé, les questions par secteur et le plan en 30 jours, réunis dans un seul
          e-mail pour les garder sous la main.
        </p>

        {etat === 'ok' ? (
          <p className={styles.reOk} role="status">
            C&apos;est envoyé. Vérifiez votre boîte de réception (et les indésirables) dans quelques minutes.
          </p>
        ) : (
          <form onSubmit={onSubmit} onFocus={antiRobot.demarrer} onPointerDown={antiRobot.demarrer} className={styles.reForm}>
            <div className={styles.reLigne}>
              <label htmlFor="re-email" className={styles.reLabel}>Votre adresse e-mail</label>
              <input
                id="re-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.reChamp}
                placeholder="vous@entreprise.fr"
              />
              <button type="submit" className="btn btn-primaire" disabled={etat === 'envoi'}>
                {etat === 'envoi' ? 'Envoi…' : 'Recevoir les ressources'}
              </button>
            </div>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className={styles.rePiege}
            />
            <div ref={antiRobot.zone} />
            <label className={styles.reConsent}>
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
              <span>
                J&apos;accepte aussi de recevoir les nouvelles ressources GEO par e-mail. Facultatif, désinscription
                en un clic.
              </span>
            </label>
            <p className={styles.reMention}>
              Votre adresse sert à vous envoyer ces ressources et n&apos;est jamais transmise à des tiers. Voir les{' '}
              <Link href="/mentions-legales">mentions légales</Link>.
            </p>
            {etat === 'erreur' && (
              <p className={styles.reErreur} role="alert">
                L&apos;envoi n&apos;a pas fonctionné. Réessayez, ou écrivez-moi depuis la page{' '}
                <Link href="/contact">contact</Link>.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
