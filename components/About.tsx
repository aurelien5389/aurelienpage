'use client'

import { motion } from 'framer-motion'

const VALUES = [
  "Améliorer la visibilité SEO et structurer des contenus clairs et utiles",
  "Activer le SEA de manière cohérente avec la stratégie globale",
  "Se positionner dans les environnements IA génératifs (GEO)",
  "Automatiser les workflows marketing grâce au no-code",
]

const STATS = [
  { value: '8+', label: "ans d'expérience" },
  { value: 'SEO · SEA\nGEO · IA', label: 'Expertises' },
  { value: 'Rennes\nRemote', label: '& déplacements' },
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-space-grotesk font-bold text-4xl sm:text-5xl text-off-white mb-4">
            À propos
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 space-y-5 text-gray-secondary leading-relaxed text-base sm:text-lg"
          >
            <p>
              J&apos;ai aujourd&apos;hui plus de 8 ans d&apos;expérience en marketing digital,
              avec une spécialisation progressive en SEO, SEA et pilotage de projets d&apos;acquisition.
            </p>
            <p>
              Mon parcours a commencé par la rédaction web et le journalisme. Cette première
              partie de carrière a structuré ma manière d&apos;aborder le SEO : partir du contenu,
              du sens et des usages avant la technique.
            </p>
            <p>
              Avec le temps, je me suis orienté vers des missions plus stratégiques : audits SEO,
              définition de stratégies de contenus, structuration sémantique, puis création et
              pilotage de campagnes Google Ads. Je coordonne aujourd&apos;hui des projets digitaux
              transversaux (refonte de site, stratégie de contenu, automatisation des workflows)
              en environnement salarié comme en freelance.
            </p>
            <p>
              J&apos;ai eu l&apos;occasion de collaborer à plusieurs reprises avec des organismes
              de formation, et c&apos;est un univers dans lequel je me reconnais particulièrement.
              La transmission, la montée en compétences et la clarté des messages font écho à ma
              façon de travailler.
            </p>
            <p>
              En parallèle, je me forme activement aux usages de l&apos;IA et de l&apos;automatisation
              appliqués au marketing. Je construis et expérimente des outils concrets : pipelines
              de veille automatisée, agents IA, scénarios no-code — avec Make, Airtable, Claude AI
              et d&apos;autres. Mon objectif : concevoir et piloter des solutions qui font réellement
              gagner du temps aux équipes.
            </p>
            <p>
              J&apos;accorde une importance centrale à la pédagogie dans mes missions. Les constats,
              les recommandations et les actions sont toujours expliqués et contextualisés, afin
              que les équipes comprennent les choix réalisés et montent en compétences.
            </p>

            {/* Points de valeur */}
            <ul className="mt-6 space-y-3 pt-2 border-t border-steel/30">
              {VALUES.map((v) => (
                <li key={v} className="flex items-start gap-3 text-base text-off-white/80">
                  <span className="text-cyan shrink-0 mt-0.5 font-bold">✓</span>
                  {v}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Stats */}
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
