'use client'

import { useMemo, useState } from 'react'
import Icon from '@/components/Icon'
import { CALENDLY_URL } from '@/components/DiagnosticCTA'
import styles from './TestGeo.module.css'

// Test en une minute : le visiteur formule la question que poserait son client,
// puis l'ouvre dans ChatGPT, Perplexity ou le mode IA de Google.
// Rien n'est envoyé à aurelienpage.fr : la question part directement vers l'outil choisi.

const OUTILS = [
  { id: 'chatgpt', nom: 'Demander à ChatGPT', url: (q: string) => `https://chatgpt.com/?q=${encodeURIComponent(q)}` },
  { id: 'perplexity', nom: 'Demander à Perplexity', url: (q: string) => `https://www.perplexity.ai/search?q=${encodeURIComponent(q)}` },
  { id: 'google', nom: 'Demander au mode IA de Google', url: (q: string) => `https://www.google.com/search?udm=50&q=${encodeURIComponent(q)}` },
]

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export default function TestGeo({ villeParDefaut = 'Laval' }: { villeParDefaut?: string }) {
  const [metier, setMetier] = useState('')
  const [ville, setVille] = useState(villeParDefaut)

  const question = useMemo(() => {
    const m = metier.trim() || 'expert-comptable'
    const v = ville.trim() || villeParDefaut
    return `Quel ${m} me recommandes-tu à ${v} ? Cite tes sources.`
  }, [metier, ville, villeParDefaut])

  const suivre = (outil: string) => {
    window.gtag?.('event', 'test_geo', { outil })
  }

  return (
    <div className={styles.test}>
      <ol className={styles.etapes}>
        <li className={styles.etape}>
          <span className={styles.num} aria-hidden="true">1</span>
          <div className={styles.champs}>
            <p className={styles.etapeTitre}>Votre métier et votre ville</p>
            <div className={styles.ligne}>
              <label className={styles.champ}>
                <span className={styles.label}>Métier</span>
                <input
                  type="text"
                  value={metier}
                  onChange={(e) => setMetier(e.target.value)}
                  placeholder="expert-comptable"
                  autoComplete="organization-title"
                  className={styles.input}
                />
              </label>
              <label className={styles.champ}>
                <span className={styles.label}>Ville</span>
                <input
                  type="text"
                  value={ville}
                  onChange={(e) => setVille(e.target.value)}
                  autoComplete="address-level2"
                  className={styles.input}
                />
              </label>
            </div>
          </div>
        </li>

        <li className={styles.etape}>
          <span className={styles.num} aria-hidden="true">2</span>
          <div>
            <p className={styles.etapeTitre}>La question de votre client</p>
            <p className={styles.bulle} aria-live="polite">{question}</p>
            <div className={styles.outils}>
              {OUTILS.map((o) => (
                <a
                  key={o.id}
                  href={o.url(question)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.outil}
                  onClick={() => suivre(o.id)}
                >
                  {o.nom}
                  <Icon name="external" size={16} />
                  <span className={styles.srOnly}> (nouvel onglet)</span>
                </a>
              ))}
            </div>
          </div>
        </li>

        <li className={styles.etape}>
          <span className={styles.num} aria-hidden="true">3</span>
          <div>
            <p className={styles.etapeTitre}>Regardez les sources citées</p>
            <p className={styles.texte}>
              Votre site apparaît-il ? Et vos concurrents ? Si la réponse vous surprend,{' '}
              <span className="surligne">c&apos;est exactement ce que l&apos;on regarde ensemble pendant le diagnostic.</span>
            </p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primaire">
              En parler 30 min avec moi
              <span className={styles.srOnly}> (ouvre Calendly dans un nouvel onglet)</span>
            </a>
          </div>
        </li>
      </ol>
      <p className={styles.note}>
        <Icon name="shield" size={16} />
        Rien n&apos;est envoyé à ce site : la question part directement vers l&apos;outil choisi.
      </p>
    </div>
  )
}
