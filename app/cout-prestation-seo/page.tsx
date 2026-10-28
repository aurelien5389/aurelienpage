import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticCTA from '@/components/DiagnosticCTA'
import JsonLd from '@/components/JsonLd'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import QuiRepond from '@/components/QuiRepond'
import { parseDraft, extractFaq } from '@/lib/draft-parser'
import { draftDates, formatMonthYear } from '@/lib/content-dates'
import { breadcrumbSchema, pageGraph, personRef, faqNode, webPageNode } from '@/lib/schema'
import { CALENDLY_URL } from '@/components/DiagnosticCTA'
import styles from './page.module.css'

const PATH = '/cout-prestation-seo'
const SLUG = 'cout-prestation-seo'
const draft = parseDraft(`${SLUG}.md`)
const TITLE = 'Combien coûte une prestation SEO ? Mes tarifs · Aurélien PAGE'
const DESCRIPTION =
  'Mes tarifs SEO et GEO : audit de 800 à 2 500 €, accompagnement mensuel de 500 à 2 000 €, article de blog de 150 à 350 €, formations et Google Ads sur devis. Diagnostic offert.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `https://aurelienpage.fr${PATH}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `https://aurelienpage.fr${PATH}` },
}

// Offres balisées = tarifs visibles sur la page (aucun prix « marché »)
const schemaService = {
  '@type': 'Service',
  '@id': `https://aurelienpage.fr${PATH}#offre`,
  name: 'Prestations SEO et GEO · Aurélien PAGE',
  serviceType: 'Référencement naturel (SEO) et GEO',
  provider: personRef,
  areaServed: { '@type': 'Country', name: 'France' },
  offers: [
    {
      '@type': 'Offer',
      name: 'Audit SEO et GEO',
      priceCurrency: 'EUR',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 800, maxPrice: 2500, priceCurrency: 'EUR' },
    },
    {
      '@type': 'Offer',
      name: 'Accompagnement SEO mensuel',
      priceCurrency: 'EUR',
      priceSpecification: { '@type': 'UnitPriceSpecification', minPrice: 500, maxPrice: 2000, priceCurrency: 'EUR', unitText: 'mois' },
    },
    {
      '@type': 'Offer',
      name: 'Rédaction d’un article de blog SEO',
      priceCurrency: 'EUR',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 150, maxPrice: 350, priceCurrency: 'EUR' },
    },
  ],
}

const RELATED_LINKS = [
  { href: '/reponses/combien-coute-un-audit-seo', label: 'Combien coûte un audit SEO ?' },
  { href: '/consultant-seo-freelance', label: 'Combien coûte un consultant SEO freelance ?' },
  { href: '/accompagnement-seo', label: 'Accompagnement SEO mensuel' },
  { href: '/pourquoi-consultant-seo', label: 'Pourquoi faire appel à un consultant SEO ?' },
  { href: '/prestations/consultant-seo-geo', label: 'Consultant SEO & GEO : mes prestations' },
]

export default function Page() {
  const dates = draftDates(SLUG, `app${PATH}/page.tsx`)
  const graph = pageGraph(
    webPageNode(PATH, draft.h1, dates, { mainEntity: { '@id': `https://aurelienpage.fr${PATH}#offre` } }),
    schemaService,
    faqNode(extractFaq(draft.body)),
    breadcrumbSchema([{ name: 'Combien coûte une prestation SEO ?', path: PATH }])
  )

  return (
    <>
      <Header />
      <JsonLd schema={graph} />
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
              <span className={styles.artFilActuel}>Tarifs SEO</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className={styles.artHero}>
          <div className={styles.artInner}>
            <h1 className={styles.artH1}>{draft.h1}</h1>
            <p className={styles.artComparatifIntro}>
              <Link href="/a-propos" className={styles.artLien}>Aurélien Page</Link> ·{' '}
              <time dateTime={dates.modified}>Mis à jour en {formatMonthYear(dates.modified)}</time>
            </p>
            <div className={styles.artActions}>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={styles.artBtnPrim}>
                Réserver mon diagnostic offert →
              </a>
              <Link href="/pourquoi-consultant-seo" className={styles.artBtnSec}>
                Pourquoi un consultant SEO ?
              </Link>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className={styles.artArticle}>
          <div className={styles.artInner}>
            <MarkdownRenderer content={draft.body} />
            <QuiRepond />
          </div>
        </article>

        {/* Related links */}
        <section className={styles.artConnexes}>
          <div className={styles.artInner}>
            <p className={styles.artConnexesTitre}>À lire aussi</p>
            <ul className={styles.artListe}>
              {RELATED_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.artLien}>
                    <span className={styles.artFleche} aria-hidden="true">→</span>
                    <span className={styles.artLabel}>{link.label}</span>
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
