'use client'

import { motion } from 'framer-motion'

const SERVICES = [
  {
    icon: '🔍',
    title: 'Visibilité SEO',
    description:
      'Audit technique, stratégie de contenus, cocons sémantiques, optimisation longue traîne. Structurer une présence organique durable.',
  },
  {
    icon: '📣',
    title: 'Activation SEA',
    description:
      'Google Ads, Meta Ads, landing pages dédiées, suivi des conversions. Des campagnes cohérentes avec la stratégie globale.',
  },
  {
    icon: '🤖',
    title: 'GEO & IA',
    description:
      "Positionnement dans les environnements IA génératifs. Prompts, agents, veille automatisée. Être visible là où les usages se déplacent.",
  },
  {
    icon: '⚡',
    title: 'Automatisation No-code',
    description:
      'Pipelines avec Make, Airtable, Claude AI. Workflows qui font réellement gagner du temps aux équipes sans écrire une ligne de code.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-space-grotesk font-bold text-4xl sm:text-5xl text-off-white mb-4">
            Ce que j&apos;apporte
          </h2>
          <p className="text-gray-secondary text-lg max-w-xl">
            Des expertises complémentaires pour une stratégie digitale cohérente.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.09, ease: 'easeOut' }}
              className="group p-8 bg-steel/15 border border-steel/40 rounded-2xl hover:border-cyan/40 hover:bg-steel/25 transition-all duration-300"
            >
              <div className="text-4xl mb-5" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="font-space-grotesk font-bold text-lg sm:text-xl text-off-white mb-3 group-hover:text-cyan transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-gray-secondary leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
