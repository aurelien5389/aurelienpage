'use client'

import { motion } from 'framer-motion'
import styles from './FormationsConsultant.module.css'

const CERTIFIANTES = [
  {
    degree: 'Expert SEO + Media Buying (Google Ads, Meta Ads)',
    school: '301 Ades Bootcamp',
    year: '2021-2022 & 2024',
    url: 'https://www.adesbootcamp.com/',
  },
  {
    degree: 'Chef de Projet en Transformation Digitale',
    school: 'Formation continue',
    year: '2019',
    url: null,
  },
  {
    degree: 'Master 2 Droit du Numérique',
    school: 'Université de Strasbourg',
    year: '2014-2015',
    url: null,
  },
  {
    degree: 'Master 2 Management des Médias',
    school: 'IEP Rennes / Université Rennes 1',
    year: '2011-2012',
    url: null,
  },
]

const SPECIALISEES = [
  {
    degree: 'AI Search & GEO',
    school: 'FormasSEO',
    url: 'https://www.formaseo.fr/formation-ai-search-geo/',
    badge: null,
  },
  {
    degree: 'Domaines expirés & SEO',
    school: 'FormasSEO',
    url: 'https://www.formaseo.fr/ndd-expires/',
    badge: null,
  },
  {
    degree: 'Formation Claude IA',
    school: 'Ottho',
    url: 'https://claude.ottho.co/',
    badge: 'En cours',
  },
  {
    degree: 'No Code & Automatisation',
    school: 'Contournement University',
    url: 'https://www.contournement.university/',
    badge: 'En cours',
  },
]

export default function FormationsConsultant() {
  return (
    <section id="formations" className={styles.formationsSection}>
      <div className={styles.formationsInner}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className={styles.formationsIntro}
        >
          <h2 className={styles.formationsTitre}>Formations</h2>
        </motion.div>

        <div className={styles.formationsGroupe}>
          <h3 className={styles.formationsGroupeLabel}>
            Formations certifiantes &amp; diplômantes
          </h3>
          <div className={styles.formationsGrille}>
            {CERTIFIANTES.map((edu, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={styles.diplomeCarte}
              >
                <span className={styles.diplomeAnnee}>{edu.year}</span>
                <h4 className={styles.diplomeIntitule}>{edu.degree}</h4>
                {edu.url ? (
                  <a
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.diplomeEcoleLien}
                  >
                    {edu.school} ↗
                  </a>
                ) : (
                  <p className={styles.diplomeEcole}>{edu.school}</p>
                )}
              </motion.article>
            ))}
          </div>
        </div>

        <div className={styles.formationsGroupe}>
          <h3 className={styles.formationsGroupeLabel}>
            Formations spécialisées suivies ou en cours
          </h3>
          <div className={styles.formationsGrille}>
            {SPECIALISEES.map((edu, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={styles.diplomeCarte}
              >
                <div className={styles.diplomeBadgeRangee}>
                  {edu.badge && <span className={styles.specBadge}>{edu.badge}</span>}
                </div>
                <h4 className={styles.diplomeIntitule}>{edu.degree}</h4>
                <a
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.diplomeEcoleLien}
                >
                  {edu.school} ↗
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
