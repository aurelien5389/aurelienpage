import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticCTA from '@/components/DiagnosticCTA'
import JsonLd from '@/components/JsonLd'
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

const CLUSTERS = [
  {
    label: 'Fondamentaux SEO',
    color: 'cyan',
    articles: [
      { slug: 'fonctionnement-moteurs-recherche', title: 'Comment fonctionnent les moteurs de recherche : crawl, indexation et ranking' },
      { slug: 'apprendre-le-seo-principes-debutants', title: 'Apprendre le SEO : les principes fondamentaux pour bien débuter' },
      { slug: 'serp-typologies-intentions-recherche', title: 'SERP : définition, typologies et intentions de recherche expliquées' },
    ],
  },
  {
    label: 'SEO Technique',
    color: 'cyan',
    articles: [
      { slug: 'seo-technique-core-web-vitals', title: 'SEO technique : les fondations indispensables d\'un site bien référencé' },
      { slug: 'crawler-seo', title: 'Crawler SEO : fonctionnement, profondeur de crawl et optimisation' },
      { slug: 'indexabilite-seo', title: 'Indexabilité SEO : pages indexables, non indexables et stratégie de crawl budget' },
      { slug: 'robots-txt-meta-robots', title: 'Robots.txt et meta robots : contrôler le crawl et l\'indexation' },
      { slug: 'balise-canonique', title: 'Balise canonique : définition, utilité et bonnes pratiques SEO' },
      { slug: 'codes-http-seo', title: 'Codes HTTP et SEO : 200, 301, 404, 410 et leur impact' },
      { slug: 'donnees-structurees-schema-org', title: 'Données structurées et Schema.org : rich results et IA Search' },
      { slug: 'fil-ariane-seo', title: 'Fil d\'Ariane SEO : définition, bénéfices et implémentation' },
      { slug: 'page-orpheline-seo', title: 'Page orpheline en SEO : définition, impact et comment les identifier' },
      { slug: 'analyse-logs-seo', title: 'Analyse de logs SEO : comprendre le comportement de Googlebot' },
      { slug: 'google-search-console', title: 'Google Search Console : le guide complet pour piloter votre SEO' },
    ],
  },
  {
    label: 'Stratégie de contenu',
    color: 'cyan',
    articles: [
      { slug: 'strategie-contenu-seo', title: 'Stratégie de contenu SEO : produire du contenu qui génère du trafic' },
      { slug: 'choisir-mots-cles-seo', title: 'Comment choisir les bons mots-clés en SEO : méthode en 4 étapes' },
      { slug: 'seo-on-page-optimisation', title: 'SEO on-page : les éléments clés à optimiser sur chaque page' },
      { slug: 'cocon-semantique-maillage-interne', title: 'Cocon sémantique : structurer son site pour dominer les SERPs' },
      { slug: 'rediger-bon-article-blog', title: 'Rédiger un bon article de blog : structure, méthode et optimisation SEO' },
      { slug: 'calendrier-editorial', title: 'Calendrier éditorial : comment planifier sa stratégie de contenu' },
    ],
  },
  {
    label: 'Netlinking & Autorité',
    color: 'cyan',
    articles: [
      { slug: 'netlinking-backlinks-pagerank', title: 'Netlinking et backlinks : comment construire votre autorité SEO' },
      { slug: 'netlinking-avance', title: 'Netlinking avancé : PageRank sculpting, stratégies et outils pros' },
    ],
  },
  {
    label: 'GEO & IA Search',
    color: 'cyan',
    articles: [
      { slug: 'geo-ia-search-ai-overviews', title: 'GEO : optimiser son contenu pour la recherche IA et les AI Overviews' },
      { slug: 'ia-search-moteurs-reponses', title: 'IA Search : comment fonctionnent vraiment les moteurs de réponses' },
      { slug: 'google-eeat', title: 'Google EEAT : définition, critères et comment l\'améliorer concrètement' },
    ],
  },
  {
    label: 'SEO Local',
    color: 'cyan',
    articles: [
      { slug: 'seo-local-google-my-business', title: 'SEO local et Google My Business : dominer les recherches de proximité' },
    ],
  },
  {
    label: 'Audit & Méthode',
    color: 'cyan',
    articles: [
      { slug: 'audit-seo', title: 'Audit SEO : méthode complète pour diagnostiquer et corriger votre référencement' },
    ],
  },
  {
    label: 'Métier & Carrière',
    color: 'cyan',
    articles: [
      { slug: 'devenir-consultant-seo-freelance', title: 'Devenir consultant SEO freelance en 2025 : guide complet' },
    ],
  },
  {
    label: 'IA & Automatisation',
    color: 'cyan',
    articles: [
      { slug: 'automatisation-ia-no-code-entreprise', title: 'Automatisation IA & No-Code en entreprise : la méthode pour démarrer' },
    ],
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog SEO · Aurélien PAGE',
  url: 'https://aurelienpage.fr/blog',
  author: {
    '@type': 'Person',
    name: 'Aurélien PAGE',
    url: 'https://aurelienpage.fr',
  },
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <JsonLd schema={schema} />
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
                Ressources approfondies sur le référencement naturel, le GEO, l&apos;IA Search et la stratégie de contenu.
                Par un consultant qui pratique, pas par un agrégateur de conseils génériques.
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
