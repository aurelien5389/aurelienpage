'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const ITEMS = [
  { icon: '🔍', label: 'Visibilité SEO' },
  { icon: '📣', label: 'Activation SEA' },
  { icon: '🤖', label: 'GEO & IA' },
  { icon: '⚡', label: 'Automatisation No-code' },
]

export default function PrestationsTeaser() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Texte */}
          <div>
            <h2 className="font-space-grotesk font-bold text-4xl sm:text-5xl text-off-white mb-5">
              Ce que j&apos;apporte
            </h2>
            <p className="text-gray-secondary text-lg leading-relaxed mb-8">
              SEO, SEA, GEO & IA, automatisation no-code : des expertises complémentaires
              pour une stratégie digitale cohérente, du diagnostic à l&apos;exécution.
            </p>
            <Link
              href="/prestations"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-navy font-space-grotesk font-semibold rounded-xl hover:bg-cyan-hover transition-colors duration-200"
            >
              Voir le détail des prestations
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Pills */}
          <div className="grid grid-cols-2 gap-4">
            {ITEMS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                className="p-5 bg-steel/15 border border-steel/40 rounded-2xl hover:border-cyan/40 hover:bg-steel/25 transition-all duration-300"
              >
                <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                <p className="font-space-grotesk font-semibold text-off-white text-sm sm:text-base">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
