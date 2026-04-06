'use client'

import { motion } from 'framer-motion'

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

export default function Education() {
  return (
    <section id="formations" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-space-grotesk font-bold text-4xl sm:text-5xl text-off-white mb-4">
            Formations
          </h2>
        </motion.div>

        {/* Certifiantes & diplômantes */}
        <div className="mb-14">
          <h3 className="font-space-grotesk font-semibold text-xs text-cyan uppercase tracking-[0.15em] mb-6">
            Formations certifiantes &amp; diplômantes
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {CERTIFIANTES.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="p-6 bg-steel/15 border border-steel/40 rounded-2xl hover:border-cyan/30 transition-colors duration-300"
              >
                <span className="inline-block font-mono text-xs px-2.5 py-1 bg-cyan/10 text-cyan border border-cyan/20 rounded mb-4">
                  {edu.year}
                </span>
                <h4 className="font-space-grotesk font-semibold text-off-white text-sm sm:text-base leading-snug mb-2">
                  {edu.degree}
                </h4>
                {edu.url ? (
                  <a
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-secondary text-sm hover:text-cyan transition-colors duration-200"
                  >
                    {edu.school} ↗
                  </a>
                ) : (
                  <p className="text-gray-secondary text-sm">{edu.school}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Spécialisées */}
        <div>
          <h3 className="font-space-grotesk font-semibold text-xs text-cyan uppercase tracking-[0.15em] mb-6">
            Formations spécialisées suivies ou en cours
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {SPECIALISEES.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="p-6 bg-steel/15 border border-steel/40 rounded-2xl hover:border-cyan/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  {edu.badge && (
                    <span className="inline-block font-mono text-xs px-2.5 py-1 bg-steel/40 text-gray-secondary border border-steel/50 rounded">
                      {edu.badge}
                    </span>
                  )}
                </div>
                <h4 className="font-space-grotesk font-semibold text-off-white text-sm sm:text-base leading-snug mb-2">
                  {edu.degree}
                </h4>
                <a
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-secondary text-sm hover:text-cyan transition-colors duration-200"
                >
                  {edu.school} ↗
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
