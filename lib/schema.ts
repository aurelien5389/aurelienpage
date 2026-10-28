// Données structurées partagées (JSON-LD). Rendues côté serveur via <JsonLd />.
// Chaque page publie UN SEUL graphe (@graph) : les nœuds du site (WebSite, Person,
// ProfessionalService, Organization) + les nœuds propres à la page (Article, Service,
// FAQPage, BreadcrumbList…). Les nœuds de page référencent la personne par son @id
// au lieu de la redéclarer.

export const SITE_URL = 'https://aurelienpage.fr'
export const PERSON_ID = `${SITE_URL}/#person`
export const BUSINESS_ID = `${SITE_URL}/#business`
export const WEBSITE_ID = `${SITE_URL}/#website`
// @id utilisés par audiaa.fr : on les réutilise pour relier les deux sites
export const AUDIAA_ORG_ID = 'https://www.audiaa.fr/#organisation'

// Aucune adresse postale publique n'est affichée sur le site : ville et région seulement
const address = {
  '@type': 'PostalAddress',
  addressLocality: 'Rennes',
  addressRegion: 'Bretagne',
  addressCountry: 'FR',
}

export const personNode = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Aurélien Page',
  alternateName: 'Aurélien PAGE',
  url: SITE_URL,
  image: `${SITE_URL}/photo.jpg`,
  jobTitle: 'Consultant SEO, GEO et SEA, formateur SEO et GEO',
  telephone: '+33781981114',
  email: 'aurelienpage89@gmail.com',
  address,
  knowsAbout: [
    'SEO',
    'GEO (Generative Engine Optimization)',
    'SEA',
    'Google Ads',
    'Formation SEO',
    'Formation GEO',
  ],
  // Profils présents sur le site : LinkedIn (contact, bio auteur) et audiaa.fr (à propos)
  sameAs: ['https://www.linkedin.com/in/aurelienpage', 'https://www.audiaa.fr/apropos.html'],
  worksFor: { '@id': AUDIAA_ORG_ID },
  mainEntityOfPage: `${SITE_URL}/a-propos`,
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'IEP de Rennes' },
    { '@type': 'CollegeOrUniversity', name: 'Université Rennes 1' },
    { '@type': 'CollegeOrUniversity', name: 'Université de Strasbourg' },
  ],
}

export const audiaaNode = {
  '@type': 'Organization',
  '@id': AUDIAA_ORG_ID,
  name: 'Audiaa',
  url: 'https://www.audiaa.fr',
  description: 'Agence IA et No Code à Rennes.',
  founder: { '@id': PERSON_ID },
}

export const businessNode = {
  '@type': 'ProfessionalService',
  '@id': BUSINESS_ID,
  name: 'Aurélien Page, consultant SEO, GEO et SEA',
  url: SITE_URL,
  image: `${SITE_URL}/photo.jpg`,
  telephone: '+33781981114',
  email: 'aurelienpage89@gmail.com',
  address,
  areaServed: { '@type': 'Country', name: 'France' },
  founder: { '@id': PERSON_ID },
  employee: { '@id': PERSON_ID },
  knowsAbout: personNode.knowsAbout,
}

export const websiteNode = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: 'Aurélien Page',
  inLanguage: 'fr-FR',
  publisher: { '@id': PERSON_ID },
}

/** Référence courte vers la personne, à utiliser dans author, provider, publisher… */
export const personRef = { '@id': PERSON_ID }

const SITE_NODES = [websiteNode, personNode, businessNode, audiaaNode]

type Node = Record<string, unknown>

/**
 * Graphe JSON-LD unique d'une page : nœuds du site + nœuds de la page.
 * Les @context éventuels des nœuds sont retirés (un seul @context en tête).
 */
export function pageGraph(...nodes: (Node | null | undefined | false)[]) {
  const own = nodes
    .filter((n): n is Node => Boolean(n))
    .map(({ '@context': _ctx, ...rest }) => rest)
  return { '@context': 'https://schema.org', '@graph': [...SITE_NODES, ...own] }
}

export interface Crumb {
  name: string
  path: string
}

// Fil d'Ariane : l'accueil est ajouté automatiquement en tête
export function breadcrumbSchema(items: Crumb[]) {
  const all = [{ name: 'Accueil', path: '/' }, ...items]
  return {
    '@type': 'BreadcrumbList',
    itemListElement: all.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path === '/' ? '' : c.path}`,
    })),
  }
}

/** Nœud WebPage daté (date visible = dateModified) */
export function webPageNode(path: string, name: string, dates: { published: string; modified: string }, extra: Node = {}) {
  const url = `${SITE_URL}${path === '/' ? '' : path}`
  return {
    '@type': 'WebPage',
    '@id': url,
    url,
    name,
    inLanguage: 'fr-FR',
    isPartOf: { '@id': WEBSITE_ID },
    datePublished: dates.published,
    dateModified: dates.modified,
    author: personRef,
    publisher: personRef,
    ...extra,
  }
}

/** FAQPage à partir des questions visibles (texte brut, sans Markdown) */
export function faqNode(faq: { q: string; a: string }[]) {
  if (faq.length === 0) return null
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: plainText(f.a) },
    })),
  }
}

/** Retire le Markdown en ligne : liens, gras, italique, code */
export function plainText(s: string): string {
  return s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*`]/g, '')
}
