import type { Metadata } from 'next'
import Link from 'next/link'
import PrestationDetail, { type PrestationData } from '@/components/PrestationDetail'
import JsonLd from '@/components/JsonLd'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Consultant SEO & GEO Rennes · Aurélien PAGE',
  description:
    'Audit SEO technique, cocons sémantiques, optimisation GEO pour les moteurs IA. Freelance basé à Rennes, interventions remote. Diagnostic offert.',
  alternates: { canonical: 'https://aurelienpage.fr/prestations/consultant-seo-geo' },
  openGraph: {
    title: 'Consultant SEO & GEO Rennes · Aurélien PAGE',
    description: 'Audit SEO technique, cocons sémantiques, optimisation GEO pour les moteurs IA. Freelance basé à Rennes. Diagnostic offert.',
    url: 'https://aurelienpage.fr/prestations/consultant-seo-geo',
  },
}

const data: PrestationData = {
  icon: '🔍',
  h1: 'Consultant SEO & GEO : audit, stratégie et visibilité organique',
  pitch:
    'Une visibilité organique durable, sur les moteurs de recherche comme dans les IA génératives (ChatGPT, Perplexity, Google AI Overviews).',
  pourQui: 'Entreprises B2B, organismes de formation, médias, e-commerce',
  missions: [
    'Audit technique complet (crawl, Core Web Vitals, structure)',
    'Stratégie éditoriale & cocons sémantiques',
    'Optimisation on-page (balises, maillage, Schema)',
    'Optimisation GEO : visibilité dans ChatGPT, Perplexity, Google AI Overviews',
    'Audit de visibilité dans les outils IA génératifs',
    'Stratégie de contenu orientée E-E-A-T',
    'Suivi de positions & reporting mensuel',
  ],
  outils: ['SEMrush', 'Ahrefs', 'Screaming Frog', 'Search Console', 'Looker Studio', 'ChatGPT', 'Perplexity'],
  formats: ['Audit ponctuel', 'Suivi mensuel', 'Prestation projet'],
  serviceSchema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Consultant SEO & GEO',
    provider: { '@type': 'Person', name: 'Aurélien PAGE', url: 'https://aurelienpage.fr' },
    areaServed: 'France',
    url: 'https://aurelienpage.fr/prestations/consultant-seo-geo',
    description:
      'Audit SEO technique, stratégie de contenus, cocons sémantiques et optimisation GEO pour les moteurs IA génératifs.',
  },
}

const LOCAL_PAGES = [
  { href: '/consultant-seo-rennes', label: 'Rennes' },
  { href: '/consultant-seo-nantes', label: 'Nantes' },
  { href: '/consultant-seo-paris', label: 'Paris' },
  { href: '/consultant-seo-lyon', label: 'Lyon' },
  { href: '/consultant-seo-bordeaux', label: 'Bordeaux' },
  { href: '/consultant-seo-marseille', label: 'Marseille' },
  { href: '/consultant-seo-toulouse', label: 'Toulouse' },
  { href: '/consultant-seo-lille', label: 'Lille' },
  { href: '/consultant-seo-brest', label: 'Brest' },
  { href: '/consultant-seo-montpellier', label: 'Montpellier' },
  { href: '/consultant-seo-nice', label: 'Nice' },
  { href: '/consultant-seo-strasbourg', label: 'Strasbourg' },
  { href: '/consultant-seo-caen', label: 'Caen' },
  { href: '/consultant-seo-vannes', label: 'Vannes' },
  { href: '/consultant-seo-lorient', label: 'Lorient' },
  { href: '/consultant-seo-quimper', label: 'Quimper' },
  { href: '/consultant-seo-saint-malo', label: 'Saint-Malo' },
  { href: '/consultant-seo-dinard', label: 'Dinard' },
  { href: '/consultant-seo-saint-nazaire', label: 'Saint-Nazaire' },
  { href: '/consultant-seo-laval', label: 'Laval' },
  { href: '/consultant-seo-le-mans', label: 'Le Mans' },
  { href: '/consultant-seo-angers', label: 'Angers' },
]

const RESOURCE_LINKS = [
  { href: '/pourquoi-consultant-seo', label: 'Pourquoi faire appel à un consultant SEO ?' },
  { href: '/cout-prestation-seo', label: 'Combien coûte une prestation SEO ?' },
  { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
  { href: '/blog/geo-ia-search-ai-overviews', label: 'GEO et AI Overviews : optimiser pour l\'IA Search' },
  { href: '/blog', label: 'Blog SEO : tous les guides' },
]

export default function Page() {
  return (
    <>
      <PrestationDetail data={data} />

      {/* Local pages cluster */}
      <section className={styles.geoCluster}>
        <div className={styles.geoInner}>
          <p className={styles.geoTitre}>
            Consultant SEO par ville
          </p>
          <ul className={styles.geoVilles}>
            {LOCAL_PAGES.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className={styles.geoVilleLien}>
                  <span className={styles.geoVillePin} aria-hidden="true">📍</span>
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Resources */}
      <section className={styles.geoCluster}>
        <div className={styles.geoInner}>
          <p className={styles.geoTitre}>
            Ressources SEO
          </p>
          <ul className={styles.geoRessources}>
            {RESOURCE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.geoRessourceLien}>
                  <span className={styles.geoRessourceFleche} aria-hidden="true">→</span>
                  <span className={styles.geoRessourceLabel}>
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
