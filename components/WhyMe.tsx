'use client'

import { motion } from 'framer-motion'

const ARGUMENTS = [
  {
    icon: '🛠️',
    title: 'Praticien, pas théoricien',
    text: "Actuellement en poste chez un organisme de formation certifié Qualiopi, j'expérimente en conditions réelles ce que je recommande.",
  },
  {
    icon: '🎓',
    title: 'Pédagogue avant tout',
    text: "Chaque recommandation est expliquée et contextualisée. Vos équipes comprennent les choix réalisés et montent en compétences.",
  },
  {
    icon: '🔗',
    title: 'Pluridisciplinaire & cohérent',
    text: "SEO, SEA, IA, no-code : des expertises complémentaires pensées ensemble, pas des silos juxtaposés.",
  },
]

export default function WhyMe() {
  return (
    <section className="py-24 sm:py-32 bg-steel/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-space-grotesk font-bold text-4xl sm:text-5xl text-off-white mb-4">
            Pourquoi travailler avec moi
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {ARGUMENTS.map((arg, i) => (
            <motion.div
              key={arg.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
              className="p-8 bg-steel/15 border border-steel/40 rounded-2xl hover:border-cyan/30 transition-colors duration-300"
            >
              <div className="text-3xl mb-5" aria-hidden="true">{arg.icon}</div>
              <h3 className="font-space-grotesk font-bold text-lg text-off-white mb-3">
                {arg.title}
              </h3>
              <p className="text-gray-secondary text-sm leading-relaxed">
                {arg.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
