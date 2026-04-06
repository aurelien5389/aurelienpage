import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Prestations freelance · SEO, SEA, IA, No Code · Aurélien PAGE',
  description:
    "SEO & GEO, SEA, Consultant IA, Chef de Projet Digital, Formateur No Code & IA : 5 prestations complémentaires pour votre stratégie digitale. Basé à Rennes, remote.",
  alternates: { canonical: 'https://aurelienpage.fr/prestations' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://aurelienpage.fr/prestations',
    title: 'Prestations freelance · SEO, SEA, IA, No Code · Aurélien PAGE',
    description: "5 prestations complémentaires : SEO & GEO, SEA, IA, Chef de Projet Digital, Formateur No Code.",
    siteName: 'Aurélien PAGE',
  },
}

const PRESTATIONS = [
  {
    icon: '🔍',
    title: 'Consultant SEO & GEO',
    pitch: "Une visibilité organique qui dure — sur les moteurs de recherche comme dans les IA génératives.",
    pourQui: "Entreprises B2B, organismes de formation, médias, e-commerce",
    missions: [
      "Audit technique complet (crawl, Core Web Vitals, structure)",
      "Stratégie éditoriale & cocons sémantiques",
      "Optimisation on-page (balises, maillage, Schema)",
      "Optimisation GEO : visibilité dans ChatGPT, Perplexity, Google AI Overviews",
      "Audit de visibilité dans les outils IA génératifs",
      "Stratégie de contenu orientée E-E-A-T",
      "Suivi de positions & reporting mensuel",
    ],
    outils: ["SEMrush", "Ahrefs", "Screaming Frog", "Search Console", "Looker Studio", "ChatGPT", "Perplexity"],
    formats: ["Mission ponctuelle (audit)", "Suivi mensuel", "Accompagnement projet"],
  },
  {
    icon: '📣',
    title: 'Traffic Manager (SEA)',
    pitch: "Des campagnes cohérentes avec votre stratégie globale — chaque euro investi est tracé.",
    pourQui: "PME, e-commerce, organismes de formation avec budget paid",
    missions: [
      "Audit et restructuration de comptes Google Ads existants",
      "Création de campagnes Search, Display, Shopping, Performance Max",
      "Campagnes Meta Ads (Facebook/Instagram)",
      "Conception de landing pages dédiées à la conversion",
      "Paramétrage du suivi des conversions (GA4, GTM)",
      "Reporting et optimisation continue",
    ],
    outils: ["Google Ads", "Meta Ads Manager", "GTM", "GA4", "Looker Studio"],
    formats: ["Lancement de compte", "Gestion mensuelle", "Audit & recommandations"],
  },
  {
    icon: '🤖',
    title: 'Consultant IA',
    pitch: "L'IA générative intégrée dans vos workflows — des gains concrets, sans jargon.",
    pourQui: "Équipes marketing, responsables contenus, DSI, organismes de formation",
    missions: [
      "Audit des usages IA existants et identification des opportunités métier",
      "Déploiement d'agents IA dans les workflows éditoriaux (Claude AI, ChatGPT)",
      "Construction de pipelines contenu IA via Make",
      "Prompting avancé et ingénierie de prompts métier",
      "Accompagnement à la transformation des pratiques marketing avec l'IA",
      "Veille automatisée sur les réponses IA génératives",
    ],
    outils: ["Claude AI (Anthropic)", "ChatGPT", "Make", "Airtable", "Notion", "Google Sheets"],
    formats: ["Mission d'intégration", "Accompagnement stratégique", "Formation"],
  },
  {
    icon: '🗂️',
    title: 'Chef de Projet Digital',
    pitch: "Du cadrage à l'exécution — coordination, pilotage et reporting pour vos projets digitaux.",
    pourQui: "PME, organisations en transformation digitale, équipes sans chef de projet dédié",
    missions: [
      "Cadrage et pilotage de projets web (refonte, migration SEO, lancement)",
      "Coordination des prestataires et équipes internes",
      "Définition des KPI et mise en place du reporting",
      "Déploiement d'outils digitaux et accompagnement au changement",
      "Gestion de projet en méthode Agile",
    ],
    outils: ["Notion", "Airtable", "Looker Studio", "Google Workspace"],
    formats: ["Mission longue durée", "Pilotage de projet", "Conseil ponctuel"],
  },
  {
    icon: '⚡',
    title: 'Formateur No Code & IA',
    pitch: "Des formations actionnables pour vos équipes — sans prérequis technique, avec des cas d'usage réels.",
    pourQui: "Équipes marketing non-techniques, TPE/PME, organismes de formation, managers",
    missions: [
      "Formation à Make : automatisation de workflows sans code",
      "Formation à Airtable : bases de données et CRM métier",
      "Formation à Claude AI et ChatGPT : prompting, agents, cas d'usage métier",
      "Ateliers pratiques « IA dans le marketing digital »",
      "Construction de ressources pédagogiques sur-mesure",
      "Accompagnement post-formation (support, documentation)",
    ],
    outils: ["Make", "Airtable", "Notion", "Claude AI", "ChatGPT", "Google Sheets"],
    formats: ["Présentiel Rennes", "Distanciel", "Intra-entreprise", "Demi-journée / Journée / Multi-sessions"],
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
                5 expertises complémentaires
              </h1>
              <p className="text-gray-secondary text-lg leading-relaxed mb-10">
                SEO & GEO, SEA, IA, Chef de Projet, Formation — pensées ensemble, pas en silos.
                Chaque prestation s&apos;adapte à votre contexte : mission ponctuelle, accompagnement mensuel ou formation de vos équipes.
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

        {/* Prestations */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
            {PRESTATIONS.map((p, i) => (
              <article key={p.title} id={`prestation-${i + 1}`} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Description */}
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="text-4xl mb-5" aria-hidden="true">{p.icon}</div>
                  <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-off-white mb-2">
                    {p.title}
                  </h2>
                  <p className="text-cyan font-medium mb-5">{p.pitch}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-steel/20 border border-steel/40 rounded-lg text-xs text-gray-secondary mb-6">
                    <span aria-hidden="true">👥</span>
                    <span>Pour qui : {p.pourQui}</span>
                  </div>
                </div>

                {/* Détails */}
                <div className={`space-y-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {/* Missions */}
                  <div className="p-6 bg-steel/15 border border-steel/40 rounded-2xl">
                    <h3 className="font-space-grotesk font-semibold text-off-white text-xs uppercase tracking-wider mb-4">
                      Ce que j&apos;apporte
                    </h3>
                    <ul className="space-y-2.5">
                      {p.missions.map((m) => (
                        <li key={m} className="flex items-start gap-3 text-sm text-gray-secondary">
                          <span className="text-cyan mt-0.5 shrink-0" aria-hidden="true">✓</span>
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
                          <span key={o} className="px-2.5 py-1 text-xs bg-steel/30 text-gray-secondary rounded-lg border border-steel/40">
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
                          <span key={f} className="px-2.5 py-1 text-xs bg-cyan/10 text-cyan rounded-lg border border-cyan/20">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 text-sm text-cyan font-medium hover:gap-3 transition-all duration-200"
                  >
                    Me contacter pour cette prestation <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 sm:py-28 border-t border-steel/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-cyan font-space-grotesk font-semibold text-sm tracking-widest uppercase mb-4">
              Passons à l&apos;action
            </p>
            <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-off-white mb-5">
              Vous avez un projet en tête ?
            </h2>
            <p className="text-gray-secondary text-lg max-w-xl mx-auto mb-10">
              Décrivez-moi votre contexte et vos objectifs. Je vous propose une approche adaptée, sans jargon inutile.
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
