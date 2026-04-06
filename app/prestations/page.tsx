import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticCTA from '@/components/DiagnosticCTA'

export const metadata: Metadata = {
  title: 'Prestations freelance · SEO, SEA, IA, No Code · Aurélien PAGE',
  description:
    "SEO & GEO, SEA, Consultant IA, Chef de Projet Digital, Formateur No Code & IA : 5 prestations complémentaires. Basé à Rennes, remote.",
  alternates: { canonical: 'https://aurelienpage.fr/prestations' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://aurelienpage.fr/prestations',
    title: 'Prestations freelance · SEO, SEA, IA, No Code · Aurélien PAGE',
    description: '5 expertises complémentaires : SEO & GEO, SEA, IA, Chef de Projet, Formateur No Code.',
    siteName: 'Aurélien PAGE',
  },
}

const PRESTATIONS = [
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
    pitch: "Intégration de l'IA générative dans vos workflows marketing et éditoriaux. Des gains concrets sans jargon.",
    href: '/prestations/consultant-ia',
  },
  {
    icon: '🗂️',
    title: 'Chef de Projet Digital',
    pitch: "Coordination de projets web transversaux : refonte, migration SEO, déploiement d'outils. Du diagnostic à l'exécution.",
    href: '/prestations/chef-de-projet-digital',
  },
  {
    icon: '⚡',
    title: 'Formateur No Code & IA',
    pitch: "Formation de vos équipes aux outils no-code (Make, Airtable) et à l'IA générative. Actionnables, sans prérequis.",
    href: '/prestations/formateur-no-code-ia',
  },
]

export default function PrestationsPage() {
  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20">
        {/* Hero */}
        <section className="py-16 sm:py-24 border-b border-steel/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <p className="text-cyan font-space-grotesk font-semibold text-sm tracking-widest uppercase mb-4">
                Prestations
              </p>
              <h1 className="font-space-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl text-off-white leading-tight mb-6">
                5 expertises complémentaires
              </h1>
              <p className="text-gray-secondary text-lg leading-relaxed">
                SEO & GEO, SEA, IA, Chef de Projet, Formation — pensées ensemble, pas en silos.
                Chaque prestation s&apos;adapte à votre contexte : mission ponctuelle, accompagnement mensuel ou formation.
              </p>
            </div>
            <DiagnosticCTA variant="banner" />
          </div>
        </section>

        {/* Cards */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PRESTATIONS.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group flex flex-col p-7 bg-steel/15 border border-steel/40 rounded-2xl hover:border-cyan/40 hover:bg-steel/25 transition-all duration-300"
                >
                  <div className="text-3xl mb-4" aria-hidden="true">{p.icon}</div>
                  <h2 className="font-space-grotesk font-bold text-base sm:text-lg text-off-white mb-3 group-hover:text-cyan transition-colors duration-200">
                    {p.title}
                  </h2>
                  <p className="text-gray-secondary text-sm leading-relaxed flex-1">
                    {p.pitch}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-cyan font-medium group-hover:gap-2.5 transition-all duration-200">
                    En savoir plus <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 sm:py-20 border-t border-steel/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-off-white mb-5">
              Vous avez un projet en tête ?
            </h2>
            <p className="text-gray-secondary text-lg max-w-xl mx-auto mb-10">
              Décrivez-moi votre contexte. Je vous propose une approche adaptée, sans jargon.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="px-7 py-3.5 bg-cyan text-navy font-space-grotesk font-semibold rounded-xl hover:bg-cyan-hover transition-colors duration-200"
              >
                Me contacter
              </Link>
              <a
                href="https://linkedin.com/in/aurelienpage"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 border border-steel/50 text-off-white font-space-grotesk font-medium rounded-xl hover:border-cyan/40 hover:text-cyan transition-colors duration-200"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
