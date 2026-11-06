import type { Metadata } from 'next'
import { seoTitle } from '@/lib/titles'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticCTA, { CALENDLY_URL } from '@/components/DiagnosticCTA'
import Icon from '@/components/Icon'
import { CONTACT } from '@/config/contact'
import { availability } from '@/config/availability'
import JsonLd from '@/components/JsonLd'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { parseDraft } from '@/lib/draft-parser'
import { breadcrumbSchema, pageGraph } from '@/lib/schema'
import styles from './page.module.css'

const draft = parseDraft('pourquoi-consultant-seo.md')

export const metadata: Metadata = {
  title: seoTitle('Pourquoi faire appel à un consultant SEO ?'),
  description:
    'Découvrez ce qu\'un consultant SEO apporte concrètement : diagnostic précis, stratégie sur-mesure, gain de temps. Consultant SEO freelance vs agence.',
  alternates: { canonical: 'https://aurelienpage.fr/pourquoi-consultant-seo' },
  openGraph: {
    title: seoTitle('Pourquoi faire appel à un consultant SEO ?'),
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
      <JsonLd schema={pageGraph(schema, breadcrumbSchema([{ name: 'Pourquoi faire appel à un consultant SEO ?', path: '/pourquoi-consultant-seo' }]))} />
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
            <div className={styles.artActions} data-cta-principal>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primaire">
                Réserver mon diagnostic offert
                <span className={styles.srOnly}> (ouvre Calendly dans un nouvel onglet)</span>
              </a>
              <a href={CONTACT.telHref} className="btn btn-secondaire">
                <Icon name="phone" size={18} /> {CONTACT.telAffiche}
              </a>
            </div>
            <p className={styles.artReassurance}>
              30 min · Visio ou téléphone · Gratuit{availability.reponseSous ? ` · ${availability.reponseSous}` : ''} ·{' '}
              <Link href="/cout-prestation-seo" className={styles.artMajLien}>Voir les tarifs</Link>
            </p>
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
