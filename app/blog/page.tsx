import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticCTA from '@/components/DiagnosticCTA'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { getBlogDrafts } from '@/lib/draft-parser'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Blog SEO : guides, méthodes et stratégies · Aurélien PAGE',
  description:
    'Articles de référence sur le SEO technique, la stratégie de contenu, le netlinking, le GEO et l\'IA Search. Par Aurélien PAGE, consultant SEO/GEO freelance.',
  alternates: { canonical: 'https://aurelienpage.fr/blog' },
  openGraph: {
    title: 'Blog SEO : guides, méthodes et stratégies · Aurélien PAGE',
    description: 'Articles de référence sur le SEO technique, la stratégie de contenu, le netlinking, le GEO et l\'IA Search.',
    url: 'https://aurelienpage.fr/blog',
  },
}

// Rubriques du blog : seuls les slugs sont listés ici, les titres viennent des articles.
// Tout article absent de ces rubriques apparaît automatiquement dans « Autres guides ».
const RUBRIQUES: { label: string; slugs: string[] }[] = [
  {
    label: 'GEO et recherche par IA',
    slugs: [
      'geo-ia-search-ai-overviews',
      'chatgpt-search-geo',
      'ia-search-moteurs-reponses',
      'structurer-contenu-geo',
      'mesurer-visibilite-geo',
      'google-eeat',
    ],
  },
  {
    label: 'Fondamentaux SEO',
    slugs: ['quest-ce-que-le-seo', 'fonctionnement-moteurs-recherche', 'apprendre-le-seo-principes-debutants', 'serp-typologies-intentions-recherche', 'lexique-seo'],
  },
  {
    label: 'SEO technique',
    slugs: [
      'seo-technique-core-web-vitals',
      'crawler-seo',
      'indexabilite-seo',
      'robots-txt-meta-robots',
      'balise-canonique',
      'codes-http-seo',
      'donnees-structurees-schema-org',
      'fil-ariane-seo',
      'page-orpheline-seo',
      'pagination-seo',
      'analyse-logs-seo',
      'google-search-console',
    ],
  },
  {
    label: 'Stratégie de contenu et rédaction',
    slugs: [
      'strategie-contenu-seo',
      'choisir-mots-cles-seo',
      'seo-on-page-optimisation',
      'cocon-semantique-maillage-interne',
      'optimiser-liens-internes',
      'rediger-bon-article-blog',
      'rediger-titre-seo',
      'techniques-redaction-web',
      'formes-contenus-redaction-web',
      'fautes-orthographe-redaction-web',
      'copywriter-eviter-syndrome-page-blanche',
      'calendrier-editorial',
    ],
  },
  { label: 'Netlinking et autorité', slugs: ['netlinking-backlinks-pagerank', 'netlinking-avance'] },
  {
    label: 'Audit, pilotage et stratégie',
    slugs: ['audit-seo', 'erreurs-seo-frequentes', '10-secrets-seo', 'reporting-seo-kpis', 'seo-startups', 'seo-local-google-my-business', 'tendances-seo-2026'],
  },
  { label: 'Métier', slugs: ['devenir-consultant-seo-freelance', 'optimiser-profil-malt'] },
  { label: 'IA et automatisation', slugs: ['automatisation-ia-no-code-entreprise'] },
]

function getClusters() {
  const drafts = getBlogDrafts()
  const titles = new Map(drafts.map((d) => [d.slug.replace('/blog/', ''), d.h1 || d.title]))
  const listed = new Set(RUBRIQUES.flatMap((r) => r.slugs))
  const autres = Array.from(titles.keys()).filter((slug) => !listed.has(slug))
  return [...RUBRIQUES, ...(autres.length ? [{ label: 'Autres guides', slugs: autres }] : [])].map((r) => ({
    label: r.label,
    articles: r.slugs.filter((slug) => titles.has(slug)).map((slug) => ({ slug, title: titles.get(slug) as string })),
  }))
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog SEO · Aurélien PAGE',
  url: 'https://aurelienpage.fr/blog',
  author: {
    '@type': 'Person',
    '@id': 'https://aurelienpage.fr/#person',
    name: 'Aurélien PAGE',
    url: 'https://aurelienpage.fr',
  },
}

export default function BlogPage() {
  const CLUSTERS = getClusters()
  return (
    <>
      <Header />
      <JsonLd schema={schema} />
      <JsonLd schema={breadcrumbSchema([{ name: 'Blog SEO', path: '/blog' }])} />
      <main className={styles.blogIdxMain}>
        {/* Breadcrumb */}
        <div className={styles.blogIdxFil}>
          <div className={styles.blogIdxFilInner}>
            <nav aria-label="Fil d'Ariane" className={styles.blogIdxFilNav}>
              <Link href="/" className={styles.blogIdxFilLien}>Accueil</Link>
              <span aria-hidden="true">›</span>
              <span className={styles.blogIdxFilActuel}>Blog SEO</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className={styles.blogIdxHero}>
          <div className={styles.blogIdxInner}>
            <div className={styles.blogIdxHeroBloc}>
              <p className={styles.blogIdxEyebrow}>
                Blog SEO
              </p>
              <h1 className={styles.blogIdxH1}>
                Guides SEO, méthodes et stratégies
              </h1>
              <p className={styles.blogIdxChapo}>
                Méthodes de référencement naturel, de GEO et de stratégie de contenu, avec leurs sources officielles.
                Pour les réponses courtes, voir la rubrique <Link href="/reponses" className={styles.blogIdxFilLien}>Réponses SEO et GEO</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Clusters */}
        <section className={styles.blogIdxClusters}>
          <div className={styles.blogIdxClustersInner}>
            {CLUSTERS.map((cluster) => (
              <div key={cluster.label}>
                <h2 className={styles.blogIdxClusterTitre}>
                  {cluster.label}
                </h2>
                <ul className={styles.blogIdxGrille}>
                  {cluster.articles.map((article) => (
                    <li key={article.slug}>
                      <Link href={`/blog/${article.slug}`} className={styles.blogIdxCarte}>
                        <span className={styles.blogIdxFleche} aria-hidden="true">→</span>
                        <span className={styles.blogIdxCarteTitre}>
                          {article.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Link to prestation hub */}
        <section className={styles.blogIdxPresta}>
          <div className={styles.blogIdxInner}>
            <p className={styles.blogIdxPrestaTitre}>
              Mes prestations
            </p>
            <div className={styles.blogIdxPrestaListe}>
              <Link href="/prestations/consultant-seo-geo" className={styles.blogIdxPrestaLien}>
                → Consultant SEO & GEO
              </Link>
              <Link href="/pourquoi-consultant-seo" className={styles.blogIdxPrestaLien}>
                → Pourquoi faire appel à un consultant SEO ?
              </Link>
              <Link href="/cout-prestation-seo" className={styles.blogIdxPrestaLien}>
                → Tarifs SEO 2025
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.blogIdxCta}>
          <div className={styles.blogIdxInner}>
            <DiagnosticCTA variant="banner" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
