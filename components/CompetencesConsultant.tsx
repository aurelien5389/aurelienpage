'use client'

import { motion } from 'framer-motion'
import styles from './CompetencesConsultant.module.css'

const SKILL_GROUPS = [
  {
    category: 'SEO & Visibilité',
    skills: [
      'SEO technique',
      'Cocons sémantiques',
      'Netlinking',
      'Audit SEO',
      'SEMrush',
      'Ahrefs',
      'Screaming Frog',
      'SEObserver',
      'Yourtextguru',
    ],
  },
  {
    category: 'SEA & Paid',
    skills: ['Google Ads', 'Meta Ads', 'CRO', 'Landing pages', 'GTM'],
  },
  {
    category: 'Analytics',
    skills: ['GA4', 'Search Console', 'Looker Studio'],
  },
  {
    category: 'Contenu & Stratégie',
    skills: [
      'Stratégie de contenu',
      'Content marketing',
      'Copywriting',
      'Community management',
    ],
  },
  {
    category: 'Tech & CMS',
    skills: ['WordPress', 'Divi', 'HTML/CSS', 'No-code'],
  },
  {
    category: 'IA & Automatisation',
    skills: ['Make', 'Airtable', 'Notion', 'Claude AI', 'ChatGPT', 'GEO'],
  },
  {
    category: 'Gestion de projet',
    skills: ["Agile", "Coordination d'équipe", 'Reporting', 'Gestion de projet'],
  },
]

export default function CompetencesConsultant() {
  return (
    <section id="skills" className={styles.compSection}>
      <div className={styles.compInner}>
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className={styles.compIntro}
        >
          <h2 className={styles.compTitre}>Compétences</h2>
        </motion.header>

        <div className={styles.compGroupes}>
          {SKILL_GROUPS.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: groupIdx * 0.04 }}
            >
              <h3 className={styles.compGroupeTitre}>{group.category}</h3>
              <div className={styles.compTags}>
                {group.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: groupIdx * 0.04 + skillIdx * 0.025,
                    }}
                    className={styles.compTag}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
