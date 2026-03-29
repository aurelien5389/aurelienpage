'use client'

import { motion } from 'framer-motion'

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

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-steel/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-space-grotesk font-bold text-4xl sm:text-5xl text-off-white mb-4">
            Expériences
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale — visible à partir de sm */}
          <div
            className="absolute left-[22px] top-2 bottom-2 w-px bg-steel/50 hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
                className="relative sm:pl-16"
              >
                {/* Dot de timeline */}
                <div
                  className="hidden sm:flex absolute left-0 top-1 w-11 h-11 items-center justify-center bg-navy border border-steel rounded-full"
                  aria-hidden="true"
                >
                  <span
                    className={`w-3 h-3 rounded-full ${
                      exp.current ? 'bg-cyan animate-pulse' : 'bg-steel'
                    }`}
                  />
                </div>

                <div className="p-6 sm:p-8 bg-steel/15 border border-steel/40 rounded-2xl hover:border-cyan/30 transition-colors duration-300">
                  {/* En-tête */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="font-space-grotesk font-bold text-lg sm:text-xl text-off-white leading-snug">
                        {exp.title}
                      </h3>
                      <p className="text-cyan font-medium text-sm mt-1.5">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1.5 shrink-0 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          exp.current
                            ? 'bg-cyan/15 text-cyan border-cyan/30'
                            : 'bg-steel/30 text-gray-secondary border-steel/40'
                        }`}
                      >
                        {exp.period}
                      </span>
                      <span className="text-gray-secondary text-xs px-1">{exp.location}</span>
                    </div>
                  </div>

                  {/* Liste des missions */}
                  <ul className="space-y-2.5" aria-label="Missions">
                    {exp.tasks.map((task, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm sm:text-base text-gray-secondary leading-relaxed"
                      >
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan/70 shrink-0"
                          aria-hidden="true"
                        />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
