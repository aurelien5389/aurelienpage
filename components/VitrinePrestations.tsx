'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './VitrinePrestations.module.css'

const CARDS = [
  {
    icon: '🔍',
    title: 'Consultant SEO & GEO',
    pitch: "Audit, stratégie, cocons sémantiques, optimisation GEO pour les moteurs IA. Une visibilité organique qui dure.",
    href: '/prestations/consultant-seo-geo',
  },
  {
    icon: '📣',
    title: 'Traffic Manager (SEA)',
    pitch: "Campagnes Google Ads & Meta Ads créées, pilotées et optimisées. Chaque euro investi est tracé.",
    href: '/prestations/traffic-manager-sea',
  },
  {
    icon: '🤖',
    title: 'Consultant IA',
    pitch: "Intégration de l'IA générative dans vos workflows marketing et éditoriaux. Claude AI, ChatGPT, Make : des gains concrets sans jargon.",
    href: '/prestations/consultant-ia',
  },
  {
    icon: '🗂️',
    title: 'Chef de Projet Digital',
    pitch: "Coordination de projets web et digitaux transversaux : refonte, migration SEO, déploiement d'outils, reporting. Du diagnostic à l'exécution.",
    href: '/prestations/chef-de-projet-digital',
  },
  {
    icon: '⚡',
    title: 'Formateur No Code & IA',
    pitch: "Formation de vos équipes aux outils no-code (Make, Airtable, Notion) et à l'IA générative. Des formations actionnables, sans prérequis technique.",
    href: '/prestations/formateur-no-code-ia',
  },
]

export default function VitrinePrestations() {
  return (
    <section id="services" className={styles.vitrineSection}>
      <div className={styles.vitrineConteneur}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className={styles.vitrineEntete}
        >
          <h2 className={styles.vitrineTitre}>Mes prestations</h2>
          <p className={styles.vitrineAccroche}>
            Des expertises complémentaires pensées ensemble, pas des silos juxtaposés.
          </p>
        </motion.div>

        <div className={styles.vitrineGrille}>
          {CARDS.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
              className={styles.offreCarte}
            >
              <div className={styles.offrePicto} aria-hidden="true">{card.icon}</div>
              <h3 className={styles.offreTitre}>{card.title}</h3>
              <p className={styles.offrePitch}>{card.pitch}</p>
              <Link href={card.href} className={styles.offreLien}>
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
          className={styles.vitrinePied}
        >
          <Link href="/prestations" className={styles.vitrineToutVoir}>
            Voir toutes les prestations en détail <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
