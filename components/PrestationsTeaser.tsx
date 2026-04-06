'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const CARDS = [
  {
    icon: '🔍',
    title: 'Consultant SEO & GEO',
    pitch: "Audit, stratégie, cocons sémantiques, optimisation GEO pour les moteurs IA. Une visibilité organique qui dure.",
  },
  {
    icon: '📣',
    title: 'Traffic Manager (SEA)',
    pitch: "Campagnes Google Ads & Meta Ads créées, pilotées et optimisées. Chaque euro investi est tracé.",
  },
  {
    icon: '🤖',
    title: 'Consultant IA',
    pitch: "Intégration de l'IA générative dans vos workflows marketing et éditoriaux. Claude AI, ChatGPT, Make — des gains concrets sans jargon.",
  },
  {
    icon: '🗂️',
    title: 'Chef de Projet Digital',
    pitch: "Coordination de projets web et digitaux transversaux : refonte, migration SEO, déploiement d'outils, reporting. Du diagnostic à l'exécution.",
  },
  {
    icon: '⚡',
    title: 'Formateur No Code & IA',
    pitch: "Formation de vos équipes aux outils no-code (Make, Airtable, Notion) et à l'IA générative. Des formations actionnables, sans prérequis technique.",
  },
]

export default function PrestationsTeaser() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-steel/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-space-grotesk font-bold text-4xl sm:text-5xl text-off-white mb-4">
            Mes prestations
          </h2>
          <p className="text-gray-secondary text-lg max-w-xl">
            Des expertises complémentaires pensées ensemble, pas des silos juxtaposés.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CARDS.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
              className="group flex flex-col p-7 bg-steel/15 border border-steel/40 rounded-2xl hover:border-cyan/40 hover:bg-steel/25 transition-all duration-300"
            >
              <div className="text-3xl mb-4" aria-hidden="true">{card.icon}</div>
              <h3 className="font-space-grotesk font-bold text-base sm:text-lg text-off-white mb-3 group-hover:text-cyan transition-colors duration-200">
                {card.title}
              </h3>
              <p className="text-gray-secondary text-sm leading-relaxed flex-1">
                {card.pitch}
              </p>
              <Link
                href="/prestations"
                className="mt-5 inline-flex items-center gap-1.5 text-sm text-cyan font-medium hover:gap-2.5 transition-all duration-200"
              >
                En savoir plus <span aria-hidden="true">→</span>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            href="/prestations"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-steel/50 text-off-white font-space-grotesk font-semibold rounded-xl hover:border-cyan/40 hover:text-cyan transition-colors duration-200"
          >
            Voir toutes les prestations en détail
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
