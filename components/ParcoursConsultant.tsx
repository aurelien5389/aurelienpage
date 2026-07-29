'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './ParcoursConsultant.module.css'

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

export default function ParcoursConsultant() {
  return (
    <section id="about" className={styles.parcoursSection}>
      <div className={styles.parcoursLargeur}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className={styles.parcoursEntete}
        >
          <div className={styles.parcoursPortrait}>
            <Image
              src="/photo.jpg"
              alt="Aurélien PAGE"
              fill
              className={styles.portraitImg}
              sizes="80px"
            />
          </div>
          <h2 className={styles.parcoursTitre}>À propos</h2>
        </motion.div>

        <div className={styles.parcoursColonnes}>
          {/* Récit du parcours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className={styles.parcoursRecit}
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
              de veille automatisée, agents IA, scénarios no-code avec Make, Airtable, Claude AI
              et d&apos;autres. Mon objectif : concevoir et piloter des solutions qui font réellement
              gagner du temps aux équipes.
            </p>
            <p>
              J&apos;accorde une importance centrale à la pédagogie dans mes missions. Les constats,
              les recommandations et les actions sont toujours expliqués et contextualisés, afin
              que les équipes comprennent les choix réalisés et montent en compétences.
            </p>

            <ul className={styles.parcoursValeurs}>
              {VALUES.map((v) => (
                <li key={v}>
                  <span className={styles.valeurCoche} aria-hidden="true">✓</span>
                  {v}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Chiffres clés */}
          <div className={styles.parcoursChiffres}>
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                className={styles.chiffreCarte}
              >
                <div className={styles.chiffreValeur}>{stat.value}</div>
                <div className={styles.chiffreLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
