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
    title: 'Audit GEO',
    pitch: "Les IA vous citent-elles ? Relevé des réponses de ChatGPT, Perplexity, Gemini et Google, part de voix, sites cités, plan d'action.",
    href: '/prestations/audit-geo',
  },
  {
    icon: '🗂️',
    title: 'Chef de Projet Digital',
    pitch: "Coordination de projets web et digitaux transversaux : refonte, migration SEO, déploiement d'outils, reporting. Du diagnostic à l'exécution.",
    href: '/prestations/chef-de-projet-digital',
  },
  {
    icon: '🎓',
    title: 'Formations SEO et GEO',
    pitch: "Former vos équipes au référencement et à la visibilité dans les IA, sur votre propre site. En individuel ou en équipe, à Rennes ou à distance.",
    href: '/formation-seo',
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
