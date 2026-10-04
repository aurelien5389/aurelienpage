import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticCTA from '@/components/DiagnosticCTA'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Prestations · SEO, GEO, SEA et formation · Aurélien PAGE',
  description:
    "SEO et GEO, audit GEO, accompagnement mensuel, Google Ads, chef de projet digital, formations SEO et GEO. Freelance à Rennes.",
  alternates: { canonical: 'https://aurelienpage.fr/prestations' },
  openGraph: {
    title: 'Prestations · SEO, GEO, SEA et formation · Aurélien PAGE',
    description: "SEO et GEO, audit GEO, accompagnement mensuel, Google Ads, chef de projet digital, formations SEO et GEO. Freelance à Rennes.",
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
    title: 'Audit GEO',
    pitch: "Les IA vous citent-elles ? Relevé des réponses de ChatGPT, Perplexity, Gemini et Google, part de voix, plan d'action.",
    href: '/prestations/audit-geo',
  },
  {
    icon: '📈',
    title: 'Accompagnement SEO mensuel',
    pitch: "Un consultant SEO au mois : optimisations, contenus, suivi des positions et des citations dans les IA.",
    href: '/accompagnement-seo',
  },
  {
    icon: '🗂️',
    title: 'Chef de Projet Digital',
    pitch: "Coordination de projets web transversaux : refonte, migration SEO, déploiement d'outils. Du diagnostic à l'exécution.",
    href: '/prestations/chef-de-projet-digital',
  },
  {
    icon: '🎓',
    title: 'Formation SEO',
    pitch: "Modules de 2 à 4 heures sur votre site, en individuel ou en équipe, à Rennes ou à distance.",
    href: '/formation-seo',
  },
  {
    icon: '⚡',
    title: 'Formation GEO',
    pitch: "Former votre équipe marketing à écrire des contenus que les IA citent, et à mesurer le résultat.",
    href: '/formation-geo',
  },
]

export default function PrestationsPage() {
  return (
    <>
      <Header />
      <JsonLd schema={breadcrumbSchema([{ name: 'Prestations', path: '/prestations' }])} />
      <main className={styles.hubMain}>
        {/* Hero */}
        <section className={styles.hubHero}>
          <div className={styles.hubInner}>
            <div className={styles.hubHeroBloc}>
              <p className={styles.hubEyebrow}>
                Prestations
              </p>
              <h1 className={styles.hubH1}>
                SEO, GEO, SEA et formation
              </h1>
              <p className={styles.hubChapo}>
                Être trouvé sur Google, cité par les IA et visible en publicité : je travaille ces leviers ensemble.
                Mission ponctuelle, accompagnement mensuel ou formation. Pour l&apos;IA appliquée, le No Code et l&apos;automatisation, voir{' '}
                <a href="https://www.audiaa.fr" className={styles.hubLienAudiaa}>Audiaa</a>, l&apos;agence que j&apos;ai fondée.
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
