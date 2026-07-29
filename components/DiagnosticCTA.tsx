'use client'

import { motion } from 'framer-motion'
import styles from './DiagnosticCTA.module.css'

const CALENDLY_URL = 'https://calendly.com/aurelienpage89/diagnostic-offert-30-min'

const BULLETS = [
  'Votre situation actuelle et vos objectifs',
  'Les leviers prioritaires à activer (SEO, SEA, IA, no-code)',
  'Une première orientation concrète, immédiatement actionnable',
]

interface Props {
  /** banner : compact horizontal (hub /prestations)
   *  compact : inline sous les CTAs hero
   *  section : bloc complet (bas de prestation, contact) */
  variant?: 'section' | 'banner' | 'compact'
}

export default function DiagnosticCTA({ variant = 'section' }: Props) {
  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className={styles.diagCompact}
      >
        <span className={styles.diagCompactTexte}>
          Pas encore sûr par où commencer ?
        </span>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.diagCompactLien}
        >
          Diagnostic offert 30 min →
        </a>
      </motion.div>
    )
  }

  if (variant === 'banner') {
    return (
      <div className={styles.diagBandeau}>
        <div className={styles.diagBandeauTexte}>
          <p className={styles.diagBandeauTitre}>
            Pas encore sûr par où commencer ?
          </p>
          <p className={styles.diagBandeauSous}>
            Échangeons 30 minutes sur votre projet. Gratuit, sans engagement.
          </p>
        </div>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.diagBandeauBtn}
        >
          Réserver mon diagnostic offert
        </a>
      </div>
    )
  }

  // variant === 'section' (default)
  return (
    <div className={styles.diagSection}>
      <p className={styles.diagSectionTitre}>
        Pas encore sûr par où commencer ?
      </p>
      <p className={styles.diagSectionSous}>
        Échangeons 30 minutes sur votre projet. Gratuit, sans engagement.
      </p>

      <ul className={styles.diagListe}>
        {BULLETS.map((b) => (
          <li key={b} className={styles.diagPoint}>
            <span className={styles.diagPuce} aria-hidden="true">·</span>
            {b}
          </li>
        ))}
      </ul>

      <div className={styles.diagSectionActions}>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.diagSectionBtn}
        >
          Réserver mon diagnostic offert
        </a>
        <span className={styles.diagMention}>
          30 min · Visio ou téléphone · Gratuit
        </span>
      </div>
    </div>
  )
}
