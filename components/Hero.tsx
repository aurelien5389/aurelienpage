'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import DiagnosticCTA from '@/components/DiagnosticCTA'
import AvailabilityBadge from '@/components/AvailabilityBadge'

const ROLES = [
  'Consultant SEO & GEO',
  'Traffic Manager (SEA)',
  'Consultant IA',
  'Chef de Projet Digital',
  'Formateur No Code & IA',
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

export default function Hero() {
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
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-steel/20 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-24 w-80 h-80 bg-steel/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 min-w-0">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-steel/40 border border-steel/60 rounded-full text-sm text-gray-secondary"
          >
            <span aria-hidden="true">📍</span>
            <span>Rennes · Télétravail &amp; déplacements</span>
          </motion.div>

          <motion.h1
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-space-grotesk font-bold text-5xl sm:text-7xl lg:text-8xl text-off-white leading-[1.05] mb-4"
          >
            Aurélien{' '}
            <span className="text-cyan">PAGE</span>
          </motion.h1>

          <motion.div
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <AvailabilityBadge />
          </motion.div>

          <motion.div
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="h-12 sm:h-14 flex items-center mb-8"
            aria-live="polite"
            aria-atomic="true"
            aria-label="Rôle professionnel"
          >
            <span className="font-space-grotesk font-bold text-xl sm:text-2xl lg:text-3xl text-cyan">
              {displayText}
              <span className="inline-block w-0.5 h-6 sm:h-7 bg-cyan ml-1 align-middle animate-pulse" aria-hidden="true" />
            </span>
          </motion.div>

          <motion.p
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-2xl text-base sm:text-lg text-gray-secondary leading-relaxed mb-10"
          >
            J&apos;accompagne les entreprises et organismes de formation à améliorer leur visibilité,
            structurer leurs contenus, activer le SEA et automatiser leurs workflows marketing —{' '}
            <span className="text-off-white font-medium">avec une approche pédagogique et opérationnelle.</span>
          </motion.p>

          <motion.div
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-cyan text-navy font-semibold text-base rounded-xl hover:bg-cyan-hover transition-all duration-200 hover:scale-105 active:scale-100"
            >
              Discutons de votre projet
            </Link>
            <Link
              href="/prestations"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-steel text-off-white font-semibold text-base rounded-xl hover:border-cyan hover:text-cyan transition-all duration-200"
            >
              Voir mes prestations
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href="/cv-aurelien-page.pdf.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-steel text-off-white font-semibold text-base rounded-xl hover:border-cyan hover:text-cyan transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
              Télécharger mon CV
            </a>
          </motion.div>

          <DiagnosticCTA variant="compact" />
        </div>

        <motion.div
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex-shrink-0"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-steel/60 ring-4 ring-cyan/20 shadow-2xl">
            <Image
              src="/photo.jpg"
              alt="Aurélien PAGE"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs text-gray-secondary/60 font-mono tracking-wider">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-5 h-8 border border-steel/60 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-cyan/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
