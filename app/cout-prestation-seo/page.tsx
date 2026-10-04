import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticCTA from '@/components/DiagnosticCTA'
import JsonLd from '@/components/JsonLd'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import SimulateurSeo from '@/components/SimulateurSeo'
import { parseDraft } from '@/lib/draft-parser'
import { breadcrumbSchema } from '@/lib/schema'
import styles from './page.module.css'

const draft = parseDraft('cout-prestation-seo.md')

export const metadata: Metadata = {
  title: 'Tarifs SEO 2026 : prix audit, freelance et agence · Aurélien PAGE',
  description:
    'Prix du SEO en 2026 : tarif horaire freelance (50–200 €/h), audit SEO (800–10 000 €), forfait mensuel (500–20 000 €/mois). Comparatif consultant freelance vs agence.',
  alternates: { canonical: 'https://aurelienpage.fr/cout-prestation-seo' },
  openGraph: {
    title: 'Tarifs SEO 2026 : prix audit, freelance et agence · Aurélien PAGE',
    description: 'Prix du SEO en 2026 : tarif horaire, audit, forfait mensuel. Comparatif consultant freelance vs agence SEO.',
    url: 'https://aurelienpage.fr/cout-prestation-seo',
  },
}

const COMPARATIF = [
  {
    critere: 'Tarif horaire',
    freelance: '50 – 200 €/h',
    agence: '100 – 250 €/h',
  },
  {
    critere: 'Forfait mensuel courant',
    freelance: '500 – 8 000 €/mois',
    agence: '1 500 – 20 000 €/mois',
  },
  {
    critere: 'Interlocuteur',
    freelance: 'L’expert lui-même',
    agence: 'Chef de projet, équipe variable',
  },
  {
    critere: 'Périmètre',
    freelance: 'Sur mesure, ajustable',
    agence: 'Large, packagé',
  },
  {
    critere: 'Adapté si',
    freelance: 'TPE/PME, besoin d’expertise directe',
    agence: 'Grand compte, besoin de volume',
  },
]

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Prestations SEO · Aurélien PAGE',
  serviceType: 'Référencement naturel (SEO)',
  provider: {
    '@type': 'Person',
    '@id': 'https://aurelienpage.fr/#person',
    name: 'Aurélien PAGE',
    jobTitle: 'Consultant SEO & GEO',
    url: 'https://aurelienpage.fr',
  },
  areaServed: { '@type': 'Country', name: 'France' },
  offers: [
    {
      '@type': 'Offer',
      name: 'Audit SEO et GEO',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: 800,
        maxPrice: 2500,
        priceCurrency: 'EUR',
      },
    },
    {
      '@type': 'Offer',
      name: 'Accompagnement SEO mensuel',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        minPrice: 500,
        maxPrice: 2000,
        priceCurrency: 'EUR',
        unitText: 'mois',
      },
    },
    {
      '@type': 'Offer',
      name: 'Formation SEO (module de 3 à 4 heures)',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: 450,
        maxPrice: 600,
        priceCurrency: 'EUR',
      },
    },
  ],
}


const RELATED_LINKS = [
  { href: '/pourquoi-consultant-seo', label: 'Pourquoi faire appel à un consultant SEO ?' },
  { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
  { href: '/prestations/consultant-seo-geo', label: 'Consultant SEO & GEO : mes prestations' },
  { href: '/blog/geo-ia-search-ai-overviews', label: 'GEO : optimiser pour la recherche IA' },
]

export default function Page() {
  return (
    <>
      <Header />
      <JsonLd schema={schemaService} />
      <JsonLd schema={breadcrumbSchema([{ name: 'Combien coûte une prestation SEO ?', path: '/cout-prestation-seo' }])} />
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
                Devis gratuit →
              </a>
              <a href="#simulateur" className={styles.artBtnSec}>
                Simuler mon budget →
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
          </div>
        </article>

        {/* Simulateur de budget */}
        <SimulateurSeo />

        {/* Comparatif freelance / agence */}
        <section className={styles.artComparatif}>
          <div className={styles.artInner}>
            <h2 className={styles.artComparatifTitre}>
              Consultant freelance ou agence SEO : le comparatif des tarifs
            </h2>
            <p className={styles.artComparatifIntro}>
              À prestation équivalente, l’écart de prix vient surtout de la structure de coûts
              et de la personne qui travaille réellement sur votre site.
            </p>
            <div className={styles.artTableWrap}>
              <table className={styles.artTable}>
                <thead>
                  <tr>
                    <th scope="col">Critère</th>
                    <th scope="col">Consultant freelance</th>
                    <th scope="col">Agence SEO</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARATIF.map((ligne) => (
                    <tr key={ligne.critere}>
                      <th scope="row">{ligne.critere}</th>
                      <td>{ligne.freelance}</td>
                      <td>{ligne.agence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

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
