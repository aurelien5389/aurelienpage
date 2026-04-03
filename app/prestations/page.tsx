import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Prestations · Aurélien PAGE · Consultant SEO & Chef de Projet Digital',
  description:
    "Découvrez mes prestations SEO, SEA, GEO & IA et automatisation no-code. Des missions sur mesure pour développer votre visibilité et vos leads. Basé à Rennes, remote.",
  alternates: {
    canonical: 'https://aurelienpage.fr/prestations',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://aurelienpage.fr/prestations',
    title: 'Prestations · Aurélien PAGE',
    description:
      "SEO, SEA, GEO & IA, automatisation no-code : des expertises complémentaires pour une stratégie digitale cohérente.",
    siteName: 'Aurélien PAGE',
  },
}

const PRESTATIONS = [
  {
    icon: '🔍',
    title: 'Visibilité SEO',
    tagline: 'Construire une présence organique durable',
    description:
      "Le SEO ne s'improvise pas. J'interviens sur l'ensemble du spectre : audit technique approfondi, stratégie éditoriale, cocons sémantiques et optimisation de la longue traîne. L'objectif est une visibilité qui dure et qui convertit.",
    missions: [
      'Audit technique complet (crawl, Core Web Vitals, structure)',
      'Stratégie de contenus & cocons sémantiques',
      'Optimisation des pages existantes (balises, maillage, balisage Schema)',
      'Suivi de positions et reporting mensuel',
      'Accompagnement rédactionnel & briefings SEO',
    ],
    outils: ['SEMrush', 'Ahrefs', 'Screaming Frog', 'Search Console', 'Looker Studio'],
    formats: ['Mission ponctuelle (audit)', 'Suivi mensuel', 'Prestation projet'],
  },
  {
    icon: '📣',
    title: 'Activation SEA',
    tagline: 'Des campagnes cohérentes avec votre stratégie',
    description:
      "Le paid search est un levier puissant mais coûteux si mal piloté. J'interviens sur la création, l'optimisation et le suivi de campagnes Google Ads et Meta Ads, avec une attention particulière au suivi des conversions et à la cohérence des landing pages.",
    missions: [
      'Audit et restructuration de comptes Google Ads existants',
      'Création de campagnes Search, Display, Shopping, Performance Max',
      'Campagnes Meta Ads (Facebook/Instagram)',
      'Conception de landing pages dédiées',
      'Paramétrage du suivi des conversions (GA4, GTM)',
      'Reporting et optimisation continue',
    ],
    outils: ['Google Ads', 'Meta Ads Manager', 'Google Tag Manager', 'GA4', 'Looker Studio'],
    formats: ['Lancement de compte', 'Gestion mensuelle', 'Audit & recommandations'],
  },
  {
    icon: '🤖',
    title: 'GEO & IA',
    tagline: "Être visible là où les usages se déplacent",
    description:
      "Les moteurs IA (ChatGPT, Perplexity, Google AI Overviews) changent profondément les comportements de recherche. Le GEO (Generative Engine Optimization) consiste à optimiser votre présence dans ces nouveaux espaces. J'accompagne entreprises et organismes de formation à comprendre ces enjeux et à s'y positionner.",
    missions: [
      'Audit de visibilité dans les outils IA génératifs',
      'Stratégie de contenu orientée GEO',
      'Optimisation du balisage sémantique & E-E-A-T',
      'Veille automatisée sur les réponses IA',
      'Formation & sensibilisation des équipes',
    ],
    outils: ['ChatGPT', 'Perplexity', 'Google AI Overviews', 'Claude AI', 'Make'],
    formats: ['Audit GEO', 'Accompagnement stratégique', 'Formation'],
  },
  {
    icon: '⚡',
    title: 'Automatisation No-code',
    tagline: 'Des workflows qui font vraiment gagner du temps',
    description:
      "Les équipes marketing passent trop de temps sur des tâches répétitives. J'automatise les processus avec Make, Airtable et Claude AI pour libérer du temps à valeur ajoutée. Sans écrire une seule ligne de code.",
    missions: [
      'Audit des process manuels & identification des gains',
      'Conception et déploiement de workflows Make',
      'Bases de données Airtable (CRM, suivi de projets, reporting)',
      "Intégration d'agents IA (Claude AI, GPT) dans les workflows",
      'Formation des équipes aux outils no-code',
      'Documentation & maintenance',
    ],
    outils: ['Make (Zapier)', 'Airtable', 'Claude AI', 'Notion', 'Google Sheets'],
    formats: ["Mission d'automatisation", 'Formation', 'Support continu'],
  },
]

export default function PrestationsPage() {
  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20">
        {/* Hero */}
        <section className="py-20 sm:py-28 border-b border-steel/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-cyan font-space-grotesk font-semibold text-sm tracking-widest uppercase mb-4">
                Prestations
              </p>
              <h1 className="font-space-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl text-off-white leading-tight mb-6">
                Des expertises complémentaires pour une stratégie cohérente
              </h1>
              <p className="text-gray-secondary text-lg leading-relaxed mb-10">
                SEO, SEA, GEO & IA, automatisation no-code. Chaque prestation s'adapte à votre contexte : mission ponctuelle, accompagnement mensuel ou formation de vos équipes.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-navy font-space-grotesk font-semibold rounded-xl hover:bg-cyan-hover transition-colors duration-200"
              >
                Discutons de votre projet
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Prestations détaillées */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
            {PRESTATIONS.map((p, i) => (
              <article
                key={p.title}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                  i % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Contenu */}
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="text-4xl mb-5" aria-hidden="true">
                    {p.icon}
                  </div>
                  <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-off-white mb-2">
                    {p.title}
                  </h2>
                  <p className="text-cyan font-medium mb-5">{p.tagline}</p>
                  <p className="text-gray-secondary leading-relaxed text-base sm:text-lg">
                    {p.description}
                  </p>
                </div>

                {/* Détails */}
                <div className={`space-y-6 ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  {/* Missions */}
                  <div className="p-6 bg-steel/15 border border-steel/40 rounded-2xl">
                    <h3 className="font-space-grotesk font-semibold text-off-white text-sm uppercase tracking-wider mb-4">
                      Ce que j'interviens
                    </h3>
                    <ul className="space-y-2.5">
                      {p.missions.map((m) => (
                        <li key={m} className="flex items-start gap-3 text-sm text-gray-secondary">
                          <span className="text-cyan mt-0.5 shrink-0" aria-hidden="true">
                            ✓
                          </span>
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outils & Formats */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-steel/10 border border-steel/30 rounded-xl">
                      <h3 className="font-space-grotesk font-semibold text-off-white text-xs uppercase tracking-wider mb-3">
                        Outils
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {p.outils.map((o) => (
                          <span
                            key={o}
                            className="px-2.5 py-1 text-xs bg-steel/30 text-gray-secondary rounded-lg border border-steel/40"
                          >
                            {o}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-5 bg-steel/10 border border-steel/30 rounded-xl">
                      <h3 className="font-space-grotesk font-semibold text-off-white text-xs uppercase tracking-wider mb-3">
                        Formats
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {p.formats.map((f) => (
                          <span
                            key={f}
                            className="px-2.5 py-1 text-xs bg-cyan/10 text-cyan rounded-lg border border-cyan/20"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 sm:py-28 border-t border-steel/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-cyan font-space-grotesk font-semibold text-sm tracking-widest uppercase mb-4">
              Passons à l'action
            </p>
            <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-off-white mb-5">
              Vous avez un projet en tête ?
            </h2>
            <p className="text-gray-secondary text-lg max-w-xl mx-auto mb-10">
              Décrivez-moi votre contexte et vos objectifs. Je vous propose une approche adaptée à votre situation, sans jargon inutile.
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
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
