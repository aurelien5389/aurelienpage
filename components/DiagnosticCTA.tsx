'use client'

import { motion } from 'framer-motion'

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
        className="mt-6 inline-flex flex-wrap items-center gap-3 px-5 py-3.5 bg-steel/20 border border-cyan/20 rounded-xl"
      >
        <span className="text-sm text-gray-secondary">
          Pas encore sûr par où commencer ?
        </span>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-cyan hover:text-cyan-hover transition-colors duration-200 whitespace-nowrap"
        >
          Diagnostic offert 30 min →
        </a>
      </motion.div>
    )
  }

  if (variant === 'banner') {
    return (
      <div className="p-5 sm:p-6 bg-steel/20 border border-cyan/20 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <div className="flex-1 min-w-0">
          <p className="font-space-grotesk font-semibold text-off-white text-base mb-1">
            Pas encore sûr par où commencer ?
          </p>
          <p className="text-gray-secondary text-sm">
            Échangeons 30 minutes sur votre projet. Gratuit, sans engagement.
          </p>
        </div>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-cyan text-navy font-space-grotesk font-semibold text-sm rounded-xl hover:bg-cyan-hover transition-colors duration-200"
        >
          Réserver mon diagnostic offert
        </a>
      </div>
    )
  }

  // variant === 'section' (default)
  return (
    <div className="p-7 sm:p-10 bg-steel/20 border border-cyan/20 rounded-2xl">
      <p className="font-space-grotesk font-bold text-xl sm:text-2xl text-off-white mb-2">
        Pas encore sûr par où commencer ?
      </p>
      <p className="text-gray-secondary text-base mb-6">
        Échangeons 30 minutes sur votre projet. Gratuit, sans engagement.
      </p>

      <ul className="space-y-2.5 mb-8">
        {BULLETS.map((b) => (
          <li key={b} className="flex items-start gap-3 text-sm text-gray-secondary">
            <span className="text-cyan shrink-0 mt-0.5" aria-hidden="true">·</span>
            {b}
          </li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-cyan text-navy font-space-grotesk font-semibold rounded-xl hover:bg-cyan-hover transition-colors duration-200"
        >
          Réserver mon diagnostic offert
        </a>
        <span className="text-xs text-gray-secondary">
          30 min · Visio ou téléphone · Gratuit
        </span>
      </div>
    </div>
  )
}
