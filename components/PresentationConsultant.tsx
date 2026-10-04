'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import DiagnosticCTA from '@/components/DiagnosticCTA'
import AvailabilityBadge from '@/components/AvailabilityBadge'
import styles from './PresentationConsultant.module.css'

const ROLES = [
  'Consultant SEO & GEO',
  'Traffic Manager (SEA)',
  'Chef de Projet Digital',
  'Formateur SEO & GEO',
]

function useTypewriter(texts: string[]) {
  const prefersReducedMotion = useReducedMotion()
  const [textIndex, setTextIndex] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [pausing, setPausing] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) return
    const current = texts[textIndex]
    if (pausing) {
      const t = setTimeout(() => { setPausing(false); setDeleting(true) }, 2000)
      return () => clearTimeout(t)
    }
    if (!deleting) {
      if (charCount < current.length) {
        const t = setTimeout(() => setCharCount((c) => c + 1), 75)
        return () => clearTimeout(t)
      } else {
        setPausing(true)
      }
    } else {
      if (charCount > 0) {
        const t = setTimeout(() => setCharCount((c) => c - 1), 40)
        return () => clearTimeout(t)
      } else {
        setDeleting(false)
        setTextIndex((i) => (i + 1) % texts.length)
      }
    }
  }, [textIndex, charCount, deleting, pausing, texts, prefersReducedMotion])

  if (prefersReducedMotion) return texts[0]
  return texts[textIndex].slice(0, charCount)
}

export default function PresentationConsultant() {
  const prefersReducedMotion = useReducedMotion()
  const displayText = useTypewriter(ROLES)

  const fadeUp = {
    hidden: prefersReducedMotion ? {} : { opacity: 0, y: 28 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
    }),
  }

  return (
    <section id="hero" className={styles.presentationSection}>
      <div className={styles.presentationFond} />
      <div className={styles.halo1} />
      <div className={styles.halo2} />

      <div className={styles.presentationContenu}>
        <div className={styles.presentationColonne}>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className={styles.presentationLieu}
          >
            <span aria-hidden="true">📍</span>
            <span>Rennes · Télétravail &amp; déplacements</span>
          </motion.div>

          {/* Rendu sans animation : visible sans JavaScript et affiché dès le premier rendu (LCP) */}
          <h1 className={styles.presentationNom}>
            Aurélien{' '}
            <span className={styles.nomAccent}>PAGE</span>
            <span className={styles.srOnly}>, </span>
            <span className={styles.nomMetier}>Consultant SEO, GEO et SEA à Rennes</span>
          </h1>

          <motion.div
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className={styles.presentationDispo}
          >
            <AvailabilityBadge />
          </motion.div>

          <motion.div
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className={styles.roleDefilant}
            aria-live="polite"
            aria-atomic="true"
            aria-label="Rôle professionnel"
          >
            <span className={styles.roleTexte}>
              {displayText}
              <span className={styles.roleCurseur} aria-hidden="true" />
            </span>
          </motion.div>

          <p className={styles.presentationPitch}>
            J&apos;aide les entreprises à être trouvées sur Google et citées par ChatGPT, Perplexity,
            Gemini et les AI Overviews. <span className={styles.pitchFort}>Audit SEO et GEO de 800 à
            2 500 €, accompagnement dès 500 € par mois</span>, campagnes Google Ads et formations SEO.
            À Rennes, en télétravail ou en déplacement. Premier échange : un diagnostic offert de 30 minutes.
          </p>

          <motion.div
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className={styles.presentationActions}
          >
            <Link href="/#contact" className={styles.ctaPrimaire}>
              Discutons de votre projet
            </Link>
            <Link href="/prestations" className={styles.ctaSecondaire}>
              Voir mes prestations
              <span aria-hidden="true">→</span>
            </Link>
            <a href="/cv-aurelien-page.pdf.pdf" download className={styles.ctaSecondaire}>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.ctaIcone} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
              Télécharger mon CV
            </a>
          </motion.div>

          <DiagnosticCTA variant="compact" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className={styles.indicateurScroll}
        aria-hidden="true"
      >
        <span className={styles.scrollLabel}>scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className={styles.scrollSouris}
        >
          <div className={styles.scrollMolette} />
        </motion.div>
      </motion.div>
    </section>
  )
}
