import { MetadataRoute } from 'next'

const siteUrl = 'https://aurelienpage.fr'

const BLOG_SLUGS = [
  'fonctionnement-moteurs-recherche',
  'apprendre-le-seo-principes-debutants',
  'serp-typologies-intentions-recherche',
  'seo-technique-core-web-vitals',
  'crawler-seo',
  'indexabilite-seo',
  'robots-txt-meta-robots',
  'balise-canonique',
  'codes-http-seo',
  'donnees-structurees-schema-org',
  'fil-ariane-seo',
  'page-orpheline-seo',
  'analyse-logs-seo',
  'google-search-console',
  'strategie-contenu-seo',
  'choisir-mots-cles-seo',
  'seo-on-page-optimisation',
  'cocon-semantique-maillage-interne',
  'rediger-bon-article-blog',
  'calendrier-editorial',
  'netlinking-backlinks-pagerank',
  'netlinking-avance',
  'geo-ia-search-ai-overviews',
  'ia-search-moteurs-reponses',
  'google-eeat',
  'seo-local-google-my-business',
  'audit-seo',
  'devenir-consultant-seo-freelance',
  // Articles ajoutés lors de la correction des 404
  'geo-vs-seo',
  'mesurer-visibilite-geo',
  'structurer-contenu-geo',
  'perplexity-citation-geo',
  'seo-startups',
  'tendances-seo-2026',
  'fautes-orthographe-redaction-web',
  'optimiser-profil-malt',
  'copywriter-eviter-syndrome-page-blanche',
  'erreurs-seo-frequentes',
  'formes-contenus-redaction-web',
  'rediger-titre-seo',
  'optimiser-liens-internes',
  'techniques-redaction-web',
  'canva-creation-contenus',
  'pagination-seo',
  'erreurs-seo-critiques',
  'lexique-seo',
  'quest-ce-que-le-seo',
  '10-secrets-seo',
  // Nouveaux articles
  'chatgpt-search-geo',
  'reporting-seo-kpis',
  'automatisation-ia-no-code-entreprise',
]

const LOCAL_SLUGS = [
  'rennes', 'nantes', 'bordeaux', 'brest', 'caen',
  'laval', 'le-mans', 'lorient', 'marseille', 'montpellier',
  'nice', 'quimper', 'saint-malo', 'saint-nazaire',
  'strasbourg', 'vannes', 'angers', 'lille', 'dinard', 'paris',
  'lyon', 'toulouse',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/prestations`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/prestations/consultant-seo-geo`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/prestations/traffic-manager-sea`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/prestations/consultant-ia`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/prestations/chef-de-projet-digital`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/prestations/formateur-no-code-ia`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/pourquoi-consultant-seo`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/cout-prestation-seo`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/redaction-web`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/accompagnement-seo`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/consultant-geo-rennes`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/redacteur-web-rennes`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/redacteur-web-juridique`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/consultant-seo-freelance`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/formation-seo`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${siteUrl}/mentions-legales`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const localPages: MetadataRoute.Sitemap = LOCAL_SLUGS.map((slug) => ({
    url: `${siteUrl}/consultant-seo-${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages, ...localPages]
}
