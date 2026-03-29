'use client'

import { motion } from 'framer-motion'

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

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-space-grotesk font-bold text-4xl sm:text-5xl text-off-white mb-4">
            Compétences
          </h2>
        </motion.div>

        <div className="space-y-10">
          {SKILL_GROUPS.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: groupIdx * 0.04 }}
            >
              <h3 className="font-space-grotesk font-semibold text-xs text-cyan uppercase tracking-[0.15em] mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
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
                    className="font-mono text-xs sm:text-sm px-3 py-1.5 bg-steel/30 border border-steel/50 text-gray-secondary rounded-lg hover:border-cyan/50 hover:text-off-white hover:bg-steel/50 transition-all duration-200 cursor-default select-none"
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
