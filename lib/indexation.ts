// Pages volontairement sorties de l'index des moteurs (noindex, follow) et du sitemap.
// Décision de l'audit SEO de novembre 2026 : Google avait exploré puis refusé d'indexer ces pages
// (articles SEO généralistes) ou les classait au-delà de la 70e place sans aucun clic (villes hors Grand Ouest).
// Elles restent en ligne et lisibles. Pour réindexer une page : la retirer de la liste.
import type { Metadata } from 'next'

const BLOG_NOINDEX = [
  '10-secrets-seo',
  'analyse-logs-seo',
  'apprendre-le-seo-principes-debutants',
  'balise-canonique',
  'calendrier-editorial',
  'choisir-mots-cles-seo',
  'codes-http-seo',
  'copywriter-eviter-syndrome-page-blanche',
  'crawler-seo',
  'devenir-consultant-seo-freelance',
  'donnees-structurees-schema-org',
  'erreurs-seo-frequentes',
  'fautes-orthographe-redaction-web',
  'fil-ariane-seo',
  'fonctionnement-moteurs-recherche',
  'formes-contenus-redaction-web',
  'google-eeat',
  'google-search-console',
  'indexabilite-seo',
  'lexique-seo',
  'optimiser-profil-malt',
  'page-orpheline-seo',
  'pagination-seo',
  'quest-ce-que-le-seo',
  'rediger-bon-article-blog',
  'rediger-titre-seo',
  'robots-txt-meta-robots',
  'seo-on-page-optimisation',
  'seo-startups',
  'seo-technique-core-web-vitals',
  'serp-typologies-intentions-recherche',
  'techniques-redaction-web',
]

// Bordeaux reste indexée : la page reçoit un lien externe (échange Digital 64).
const VILLES_NOINDEX = ['paris', 'lyon', 'marseille', 'lille', 'toulouse', 'nice', 'strasbourg', 'montpellier', 'caen']

export const NOINDEX_PATHS = new Set<string>([
  ...BLOG_NOINDEX.map((s) => `/blog/${s}`),
  ...VILLES_NOINDEX.map((v) => `/consultant-seo-${v}`),
])

export function isNoindex(path: string): boolean {
  return NOINDEX_PATHS.has(path)
}

/** À étaler dans l'objet metadata d'une page : n'ajoute la consigne robots que si la page est listée. */
export function robotsFor(path: string): Pick<Metadata, 'robots'> {
  return isNoindex(path) ? { robots: { index: false, follow: true } } : {}
}
