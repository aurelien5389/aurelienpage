import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticCTA from '@/components/DiagnosticCTA'
import JsonLd from '@/components/JsonLd'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { parseDraft } from '@/lib/draft-parser'
import styles from './page.module.css'

const draft = parseDraft('pourquoi-consultant-seo.md')

export const metadata: Metadata = {
  title: 'Pourquoi faire appel à un consultant SEO ? · Aurélien PAGE',
  description:
    'Découvrez ce qu\'un consultant SEO apporte concrètement : diagnostic précis, stratégie sur-mesure, gain de temps. Consultant SEO freelance vs agence.',
  alternates: { canonical: 'https://aurelienpage.fr/pourquoi-consultant-seo' },
  openGraph: {
    title: 'Pourquoi faire appel à un consultant SEO ? · Aurélien PAGE',
    description: 'Ce qu\'un consultant SEO apporte concrètement : diagnostic précis, stratégie sur-mesure, gain de temps.',
    url: 'https://aurelienpage.fr/pourquoi-consultant-seo',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Pourquoi faire appel à un consultant SEO ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un consultant SEO apporte un diagnostic précis, une stratégie adaptée à vos objectifs, l\'évitement des erreurs techniques coûteuses, et un suivi rigoureux des résultats. Il vous libère pour vous concentrer sur votre cœur de métier.',
      },
    },
    {
      '@type': 'Question',
      name: 'Consultant SEO freelance ou agence : quelle différence ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un consultant SEO freelance offre un interlocuteur unique qui maîtrise tout le dossier, une relation directe, des décisions rapides et une personnalisation maximale. Idéal pour les PME qui souhaitent un regard expert sans les structures d\'une agence.',
      },
    },
  ],
}

const RELATED_LINKS = [
  { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
  { href: '/cout-prestation-seo', label: 'Combien coûte une prestation SEO ?' },
  { href: '/prestations/consultant-seo-geo', label: 'Consultant SEO & GEO : mes prestations' },
  { href: '/blog/geo-ia-search-ai-overviews', label: 'GEO : optimiser pour la recherche IA' },
]

export default function Page() {
  return (
    <>
      <Header />
      <JsonLd schema={schema} />
      <main className={styles.artMain}>
        {/* Breadcrumb */}
        <div className={styles.artFil}>
          <div className={styles.artFilInner}>
            <nav aria-label="Fil d'Ariane" className={styles.artFilNav}>
              <Link href="/" className={styles.artFilLien}>Accueil</Link>
              <span aria-hidden="true">›</span>
              <Link href="/prestations/consultant-seo-geo" className={styles.artFilLien}>
                Consultant SEO & GEO
              </Link>
              <span aria-hidden="true">›</span>
              <span className={styles.artFilActuel}>Pourquoi un consultant SEO</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className={styles.artHero}>
          <div className={styles.artInner}>
            <h1 className={styles.artH1}>
              {draft.h1}
            </h1>
            <div className={styles.artActions}>
              <a
                href="https://calendly.com/aurelienpage89/diagnostic-offert-30-min"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.artBtnPrim}
              >
                Diagnostic offert →
              </a>
              <Link href="/cout-prestation-seo" className={styles.artBtnSec}>
                Voir les tarifs SEO
              </Link>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className={styles.artArticle}>
          <div className={styles.artInner}>
            <MarkdownRenderer content={draft.body} />
          </div>
        </article>

        {/* Related links */}
        <section className={styles.artConnexes}>
          <div className={styles.artInner}>
            <p className={styles.artConnexesTitre}>
              À lire aussi
            </p>
            <ul className={styles.artListe}>
              {RELATED_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.artLien}>
                    <span className={styles.artFleche} aria-hidden="true">→</span>
                    <span className={styles.artLabel}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.artCta}>
          <div className={styles.artInner}>
            <DiagnosticCTA variant="section" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
