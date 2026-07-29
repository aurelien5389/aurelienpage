'use client'

import { motion } from 'framer-motion'
import styles from './ApportsConsultant.module.css'

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

export default function ApportsConsultant() {
  return (
    <section id="services" className={styles.apportsSection}>
      <div className={styles.apportsInner}>
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className={styles.apportsIntro}
        >
          <h2 className={styles.apportsTitre}>Ce que j&apos;apporte</h2>
          <p className={styles.apportsAccroche}>
            Des expertises complémentaires pour une stratégie digitale cohérente.
          </p>
        </motion.header>

        <div className={styles.apportsGrille}>
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.09, ease: 'easeOut' }}
              className={styles.apportItem}
            >
              <div className={styles.apportPicto} aria-hidden="true">
                {service.icon}
              </div>
              <h3 className={styles.apportTitre}>{service.title}</h3>
              <p className={styles.apportTexte}>{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
