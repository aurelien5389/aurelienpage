// Zones d'intervention : page mère /zones-intervention, une page par région, les pages villes dessous.
// Modalités validées par Aurélien : siège à Laval, présent à Rennes. Sans frais à Laval, Rennes et
// dans leurs environs, avec frais de déplacement ailleurs dans le Grand Ouest, à distance ailleurs
// (déplacement ponctuel sur devis).
import type { InternalLink } from '@/lib/internal-links'

export type Modalite = 'sans-frais' | 'deplacement' | 'distance'

export interface Ville {
  slug: string
  nom: string
  modalite: Modalite
}

export interface Region {
  id: string
  path: string
  /** Nom court (fil d'Ariane) */
  nom: string
  /** Libellé de lien */
  label: string
  villes: Ville[]
}

export const ZONES_PATH = '/zones-intervention'

export const REGIONS: Region[] = [
  {
    id: 'bretagne',
    path: '/consultant-seo-bretagne',
    nom: 'Bretagne',
    label: 'Consultant SEO en Bretagne',
    villes: [
      { slug: 'rennes', nom: 'Rennes', modalite: 'sans-frais' },
      { slug: 'saint-malo', nom: 'Saint-Malo', modalite: 'sans-frais' },
      { slug: 'dinard', nom: 'Dinard', modalite: 'sans-frais' },
      { slug: 'cancale', nom: 'Cancale', modalite: 'sans-frais' },
      { slug: 'dinan', nom: 'Dinan', modalite: 'sans-frais' },
      { slug: 'vitre', nom: 'Vitré', modalite: 'sans-frais' },
      { slug: 'fougeres', nom: 'Fougères', modalite: 'sans-frais' },
      { slug: 'saint-brieuc', nom: 'Saint-Brieuc', modalite: 'deplacement' },
      { slug: 'lannion', nom: 'Lannion', modalite: 'deplacement' },
      { slug: 'vannes', nom: 'Vannes', modalite: 'deplacement' },
      { slug: 'lorient', nom: 'Lorient', modalite: 'deplacement' },
      { slug: 'quimper', nom: 'Quimper', modalite: 'deplacement' },
      { slug: 'brest', nom: 'Brest', modalite: 'deplacement' },
    ],
  },
  {
    id: 'pays-de-la-loire',
    path: '/consultant-seo-pays-de-la-loire',
    nom: 'Pays de la Loire',
    label: 'Consultant SEO en Pays de la Loire',
    villes: [
      { slug: 'laval', nom: 'Laval', modalite: 'sans-frais' },
      { slug: 'mayenne', nom: 'Mayenne', modalite: 'sans-frais' },
      { slug: 'chateau-gontier', nom: 'Château-Gontier', modalite: 'sans-frais' },
      { slug: 'nantes', nom: 'Nantes', modalite: 'deplacement' },
      { slug: 'saint-nazaire', nom: 'Saint-Nazaire', modalite: 'deplacement' },
      { slug: 'la-baule', nom: 'La Baule', modalite: 'deplacement' },
      { slug: 'angers', nom: 'Angers', modalite: 'deplacement' },
      { slug: 'cholet', nom: 'Cholet', modalite: 'deplacement' },
      { slug: 'saumur', nom: 'Saumur', modalite: 'deplacement' },
      { slug: 'le-mans', nom: 'Le Mans', modalite: 'deplacement' },
    ],
  },
  {
    id: 'distance',
    path: '/consultant-seo-a-distance',
    nom: 'France, à distance',
    label: 'Consultant SEO à distance, partout en France',
    villes: [
      { slug: 'paris', nom: 'Paris', modalite: 'distance' },
      { slug: 'lyon', nom: 'Lyon', modalite: 'distance' },
      { slug: 'bordeaux', nom: 'Bordeaux', modalite: 'distance' },
      { slug: 'lille', nom: 'Lille', modalite: 'distance' },
      { slug: 'toulouse', nom: 'Toulouse', modalite: 'distance' },
      { slug: 'marseille', nom: 'Marseille', modalite: 'distance' },
      { slug: 'nice', nom: 'Nice', modalite: 'distance' },
      { slug: 'montpellier', nom: 'Montpellier', modalite: 'distance' },
      { slug: 'strasbourg', nom: 'Strasbourg', modalite: 'distance' },
      { slug: 'caen', nom: 'Caen', modalite: 'distance' },
    ],
  },
]

/** « à Nantes », « au Mans » */
export function aLaVille(nom: string): string {
  return nom === 'Le Mans' ? 'au Mans' : `à ${nom}`
}

const majuscule = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

/** Nom affiché d'une page ville à partir de son adresse */
export function nomDeVille(href: string): string | undefined {
  for (const r of REGIONS) {
    const v = r.villes.find((x) => villePath(x) === href)
    if (v) return v.nom
  }
  return undefined
}

export const villePath = (v: Ville) => `/consultant-seo-${v.slug}`

export function villesLiens(region: Region, sauf?: string): InternalLink[] {
  return region.villes.filter((v) => villePath(v) !== sauf).map((v) => ({ href: villePath(v), label: v.nom }))
}

export function getRegionDeVille(path: string): { region: Region; ville: Ville } | undefined {
  for (const region of REGIONS) {
    const ville = region.villes.find((v) => villePath(v) === path)
    if (ville) return { region, ville }
  }
  return undefined
}

/** Phrase de modalités affichée sur la page d'une ville */
export function modaliteTexte(ville: Ville): string {
  switch (ville.modalite) {
    case 'sans-frais':
      return `${majuscule(aLaVille(ville.nom))}, je me déplace sans frais : ${ville.nom === 'Laval' ? 'mon siège est à Laval' : ville.nom === 'Rennes' ? 'je travaille aussi depuis Rennes' : 'la ville est proche de Laval ou de Rennes, d’où je travaille'}. Le diagnostic, la restitution et les réunions importantes peuvent se faire en face à face.`
    case 'deplacement':
      return `${majuscule(aLaVille(ville.nom))}, je viens sur place pour les moments qui comptent (diagnostic, restitution, atelier), avec des frais de déplacement ajoutés au devis, au réel. Le travail courant se fait à distance.`
    case 'distance':
      return `${majuscule(aLaVille(ville.nom))}, je travaille à distance : visioconférence, documents partagés, accès à vos outils. Les livrables sont les mêmes que sur place. Un déplacement ponctuel reste possible, sur devis, frais compris.`
  }
}

/** Villes voisines affichées sur chaque page ville (maillage de proximité). Laval et Rennes,
 *  les deux bases, reviennent souvent : ce sont les pages à faire monter en priorité. */
export const VOISINS: Record<string, string[]> = {
  laval: ['mayenne', 'chateau-gontier', 'vitre', 'rennes', 'le-mans', 'angers'],
  mayenne: ['laval', 'chateau-gontier', 'fougeres', 'le-mans'],
  'chateau-gontier': ['laval', 'mayenne', 'angers', 'vitre'],
  rennes: ['laval', 'vitre', 'fougeres', 'saint-malo', 'nantes', 'vannes'],
  vitre: ['rennes', 'laval', 'fougeres', 'chateau-gontier'],
  fougeres: ['rennes', 'vitre', 'laval', 'mayenne'],
  'saint-malo': ['dinard', 'cancale', 'dinan', 'rennes'],
  dinard: ['saint-malo', 'dinan', 'cancale', 'rennes'],
  cancale: ['saint-malo', 'dinard', 'dinan', 'rennes'],
  dinan: ['dinard', 'saint-malo', 'saint-brieuc', 'rennes'],
  'saint-brieuc': ['lannion', 'dinan', 'rennes', 'brest'],
  lannion: ['saint-brieuc', 'brest', 'dinan', 'rennes'],
  brest: ['quimper', 'lannion', 'lorient', 'rennes'],
  quimper: ['brest', 'lorient', 'vannes', 'rennes'],
  lorient: ['vannes', 'quimper', 'brest', 'rennes'],
  vannes: ['lorient', 'rennes', 'nantes', 'saint-nazaire'],
  nantes: ['saint-nazaire', 'la-baule', 'angers', 'cholet', 'rennes', 'laval'],
  'saint-nazaire': ['la-baule', 'nantes', 'vannes', 'rennes'],
  'la-baule': ['saint-nazaire', 'nantes', 'vannes', 'dinard'],
  angers: ['saumur', 'cholet', 'chateau-gontier', 'laval', 'nantes', 'le-mans'],
  cholet: ['angers', 'nantes', 'saumur', 'laval'],
  saumur: ['angers', 'cholet', 'le-mans', 'laval'],
  'le-mans': ['laval', 'angers', 'mayenne', 'saumur'],
}

/** Liens « Consultant SEO à … » vers les villes voisines d'une ville */
export function voisinsLiens(slug: string): InternalLink[] {
  const villes = REGIONS.flatMap((r) => r.villes)
  return (VOISINS[slug] ?? [])
    .map((s) => villes.find((v) => v.slug === s))
    .filter((v): v is Ville => Boolean(v))
    .map((v) => ({ href: villePath(v), label: `Consultant SEO ${aLaVille(v.nom)}` }))
}
