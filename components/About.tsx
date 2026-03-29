'use client'

import { motion } from 'framer-motion'

const STATS = [
  { value: '10+', label: "ans d'expérience" },
  { value: 'Millions', label: 'sessions/mois gérées' },
  { value: 'SEO · SEA\nGEO · IA', label: 'Expertises' },
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-steel/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Texte de présentation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <h2 className="font-space-grotesk font-bold text-4xl sm:text-5xl text-off-white mb-8">
              À propos
            </h2>
            <div className="space-y-5 text-gray-secondary leading-relaxed text-base sm:text-lg">
              <p>
                Plus de 10 ans d&apos;expérience en marketing digital. Mon parcours a démarré
                par le journalisme et la rédaction web — ce qui structure encore ma façon
                d&apos;aborder le SEO : partir du contenu, du sens et des usages avant la
                technique.
              </p>
              <p>
                Aujourd&apos;hui je coordonne des projets digitaux transversaux — refonte de
                site, stratégie de contenu, automatisation de workflows — en environnement
                salarié comme en freelance.
              </p>
              <p>
                J&apos;accorde une importance centrale à la pédagogie dans mes missions. Chaque
                constat, chaque recommandation est expliqué et contextualisé pour que les
                équipes comprennent les choix réalisés et montent en compétences.
              </p>
            </div>
          </motion.div>

          {/* Chiffres clés */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                className="p-6 bg-steel/30 border border-steel/50 rounded-2xl hover:border-cyan/40 transition-colors duration-300"
              >
                <div className="font-space-grotesk font-bold text-2xl sm:text-3xl text-cyan whitespace-pre-line leading-tight">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-gray-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
