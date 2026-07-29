'use client'

import { motion } from 'framer-motion'
import styles from './ExperiencesPro.module.css'

const EXPERIENCES = [
  {
    title: 'Chargé de Web Marketing & Contenu',
    company: 'Compétences Prévention',
    location: 'Rennes / Télétravail',
    period: 'Sept. 2024 → Présent',
    current: true,
    tasks: [
      'Stratégie SEO complète : audit, mots-clés longue traîne, cocons sémantiques, optimisation pages formations',
      'Création et gestion de campagnes Google Ads · landing pages dédiées · suivi conversions',
      'Production de contenus SEO (articles, livres blancs, newsletters, réseaux sociaux)',
      'Automatisations no-code avec Make : veille réglementaire, pipelines de contenu IA',
      'Gestion WordPress / Divi · refonte arborescence · reporting Looker Studio',
    ],
  },
  {
    title: 'Consultant SEO & SEA, Freelance & Salarié',
    company: 'Useweb / Infopro Digital / 410 Gone',
    location: 'France (remote)',
    period: 'Fév. 2020 → Déc. 2024',
    current: false,
    tasks: [
      'SEO de sites à fort trafic : Usine Digitale, Usine Nouvelle (plusieurs millions de sessions/mois)',
      'Audits SEO complets (technique, contenu, popularité) · définition et déploiement de stratégies',
      'Création, gestion et optimisation de campagnes Google Ads & Meta Ads',
      'Suivi des performances : GA4 · Search Console · tableaux de bord Looker Studio',
    ],
  },
  {
    title: 'Journaliste web · Rédacteur web · Content Manager',
    company: 'Ouest-France / EGAP / ASCOR',
    location: 'Rennes',
    period: 'Sept. 2012 → Juil. 2019',
    current: false,
    tasks: [
      "Stratégie éditoriale et calendrier éditorial · rédaction SEO tous formats",
      "Management d'une équipe de rédacteurs : briefing, relecture, validation",
      'Optimisation SEO on-page · suivi analytics',
    ],
  },
]

export default function ExperiencesPro() {
  return (
    <section id="experience" className={styles.xpSection}>
      <div className={styles.xpInner}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className={styles.xpIntro}
        >
          <h2 className={styles.xpTitre}>Expériences</h2>
        </motion.div>

        <div className={styles.xpTimeline}>
          <div className={styles.xpFil} aria-hidden="true" />

          <ol className={styles.xpListe}>
            {EXPERIENCES.map((exp, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
                className={styles.xpJalon}
              >
                <div className={styles.jalonPastille} aria-hidden="true">
                  <span
                    className={`${styles.jalonPoint} ${exp.current ? styles.jalonPointActif : ''}`}
                  />
                </div>

                <article className={styles.xpCarte}>
                  <header className={styles.xpEntete}>
                    <div>
                      <h3 className={styles.xpPoste}>{exp.title}</h3>
                      <p className={styles.xpEntreprise}>{exp.company}</p>
                    </div>
                    <div className={styles.xpMeta}>
                      <span
                        className={`${styles.periode} ${exp.current ? styles.periodeActive : ''}`}
                      >
                        {exp.period}
                      </span>
                      <span className={styles.xpLieu}>{exp.location}</span>
                    </div>
                  </header>

                  <ul className={styles.xpMissions} aria-label="Missions">
                    {exp.tasks.map((task, j) => (
                      <li key={j} className={styles.xpMission}>
                        <span className={styles.missionPuce} aria-hidden="true" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
