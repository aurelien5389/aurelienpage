import Icon from '@/components/Icon'
import styles from './DiagnosticCTA.module.css'

export const CALENDLY_URL = 'https://calendly.com/aurelienpage89/diagnostic-offert-30-min'

const BULLETS = [
  'Votre situation actuelle et vos objectifs',
  'Les leviers prioritaires à activer (SEO, SEA, IA, no-code)',
  'Une première orientation concrète, immédiatement actionnable',
]

interface Props {
  /** section : bandeau sombre complet (bas de page)
   *  banner : encart clair compact (hubs, index)
   *  compact : une ligne de texte avec lien */
  variant?: 'section' | 'banner' | 'compact'
}

export default function DiagnosticCTA({ variant = 'section' }: Props) {
  if (variant === 'compact') {
    return (
      <p className={styles.diagCompact}>
        Pas encore sûr par où commencer ?{' '}
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="lien-fleche">
          Diagnostic offert 30 min <Icon name="arrow" size={18} />
        </a>
      </p>
    )
  }

  if (variant === 'banner') {
    return (
      <div className={styles.diagBandeau}>
        <div>
          <p className={styles.diagBandeauTitre}>Pas encore sûr par où commencer ?</p>
          <p className={styles.diagBandeauSous}>Échangeons 30 minutes sur votre projet. Gratuit, sans engagement.</p>
        </div>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primaire">
          Réserver mon diagnostic offert
        </a>
      </div>
    )
  }

  return (
    <section className={styles.diagSection} aria-labelledby="diag-titre">
      <div className={styles.diagSectionInner}>
        <div>
          <h2 id="diag-titre" className={styles.diagSectionTitre}>Pas encore sûr par où commencer ?</h2>
          <p className={styles.diagSectionSous}>Échangeons 30 minutes sur votre projet. Gratuit, sans engagement.</p>
          <ul className={styles.diagListe}>
            {BULLETS.map((b) => (
              <li key={b} className={styles.diagPoint}>
                <Icon name="check" size={20} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.diagSectionActions}>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-sombre">
            Réserver mon diagnostic offert
          </a>
          <span className={styles.diagMention}>30 min · Visio ou téléphone · Gratuit</span>
        </div>
      </div>
    </section>
  )
}
