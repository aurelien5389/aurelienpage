import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticCTA from '@/components/DiagnosticCTA'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Prestations · SEO, SEA, IA, No Code · Aurélien PAGE',
  description:
    "5 expertises complémentaires : SEO & GEO, SEA, IA, chef de projet digital, formation no-code. Freelance à Rennes.",
  alternates: { canonical: 'https://aurelienpage.fr/prestations' },
  openGraph: {
    title: 'Prestations · SEO, SEA, IA, No Code · Aurélien PAGE',
    description: "5 expertises complémentaires : SEO & GEO, SEA, IA, chef de projet digital, formation no-code. Freelance à Rennes.",
    url: 'https://aurelienpage.fr/prestations',
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
      <main className={styles.hubMain}>
        {/* Hero */}
        <section className={styles.hubHero}>
          <div className={styles.hubInner}>
            <div className={styles.hubHeroBloc}>
              <p className={styles.hubEyebrow}>
                Prestations
              </p>
              <h1 className={styles.hubH1}>
                5 expertises complémentaires
              </h1>
              <p className={styles.hubChapo}>
                SEO & GEO, SEA, IA, Chef de Projet, Formation, pensées ensemble, pas en silos.
                Chaque prestation s&apos;adapte à votre contexte : mission ponctuelle, accompagnement mensuel ou formation.
              </p>
            </div>
            <DiagnosticCTA variant="banner" />
          </div>
        </section>

        {/* Cards */}
        <section className={styles.hubCartes}>
          <div className={styles.hubInner}>
            <div className={styles.hubGrille}>
              {PRESTATIONS.map((p) => (
                <Link key={p.href} href={p.href} className={styles.hubCarte}>
                  <div className={styles.hubCartePicto} aria-hidden="true">{p.icon}</div>
                  <h2 className={styles.hubCarteTitre}>
                    {p.title}
                  </h2>
                  <p className={styles.hubCartePitch}>
                    {p.pitch}
                  </p>
                  <span className={styles.hubCarteLien}>
                    En savoir plus <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className={styles.hubFinal}>
          <div className={styles.hubFinalInner}>
            <h2 className={styles.hubFinalTitre}>
              Vous avez un projet en tête ?
            </h2>
            <p className={styles.hubFinalChapo}>
              Décrivez-moi votre contexte. Je vous propose une approche adaptée, sans jargon.
            </p>
            <div className={styles.hubFinalActions}>
              <Link href="/#contact" className={styles.hubBtnPrim}>
                Me contacter
              </Link>
              <a
                href="https://linkedin.com/in/aurelienpage"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.hubBtnSec}
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
