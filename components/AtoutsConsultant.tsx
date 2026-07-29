'use client'

import { motion } from 'framer-motion'
import styles from './AtoutsConsultant.module.css'

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

export default function AtoutsConsultant() {
  return (
    <section className={styles.atoutsSection}>
      <div className={styles.atoutsInner}>
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className={styles.atoutsIntro}
        >
          <h2 className={styles.atoutsTitre}>Pourquoi travailler avec moi ?</h2>
        </motion.header>

        <ul className={styles.atoutsListe}>
          {ARGUMENTS.map((arg, i) => (
            <motion.li
              key={arg.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
              className={styles.atoutItem}
            >
              <div className={styles.atoutSymbole} aria-hidden="true">{arg.icon}</div>
              <h3 className={styles.atoutNom}>{arg.title}</h3>
              <p className={styles.atoutDescription}>{arg.text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
