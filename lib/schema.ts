// Données structurées partagées (JSON-LD). Rendues côté serveur via <JsonLd />.

export const SITE_URL = 'https://aurelienpage.fr'
export const PERSON_ID = `${SITE_URL}/#person`
export const SERVICE_ID = `${SITE_URL}/#service`
export const WEBSITE_ID = `${SITE_URL}/#website`
// @id utilisés par audiaa.fr : on les réutilise pour relier les deux sites
export const AUDIAA_ORG_ID = 'https://www.audiaa.fr/#organisation'

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

export const professionalServiceNode = {
  '@type': 'ProfessionalService',
  '@id': SERVICE_ID,
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

export const siteGraph = {
  '@context': 'https://schema.org',
  '@graph': [websiteNode, personNode, professionalServiceNode, audiaaNode],
}

export interface Crumb {
  name: string
  path: string
}

// Fil d'Ariane : l'accueil est ajouté automatiquement en tête
export function breadcrumbSchema(items: Crumb[]) {
  const all = [{ name: 'Accueil', path: '/' }, ...items]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path === '/' ? '' : c.path}`,
    })),
  }
}
