'use client'

import { motion } from 'framer-motion'

const EDUCATION = [
  {
    degree: 'Expert SEO + Media Buying (Google Ads, Meta Ads)',
    school: '301 Ades Bootcamp',
    year: '2021-2022 & 2024',
  },
  {
    degree: 'Chef de Projet en Transformation Digitale',
    school: 'Formation continue',
    year: '2019',
  },
  {
    degree: 'Master 2 Droit du Numérique',
    school: 'Université de Strasbourg',
    year: '2014-2015',
  },
  {
    degree: 'Master 2 Management des Médias',
    school: 'IEP Rennes / Université Rennes 1',
    year: '2011-2012',
  },
  {
    degree: 'Master 1 Science Politique',
    school: 'Université Rennes 1',
    year: '2010-2011',
  },
  {
    degree: 'Licence de Droit',
    school: 'Université du Maine',
    year: '2007-2010',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 bg-steel/10">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {EDUCATION.map((edu, i) => (
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
              <h3 className="font-space-grotesk font-semibold text-off-white text-sm sm:text-base leading-snug mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-secondary text-sm">{edu.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
