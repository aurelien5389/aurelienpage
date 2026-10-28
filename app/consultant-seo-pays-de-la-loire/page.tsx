import type { Metadata } from 'next'
import FicheLayout, { type FicheData } from '@/components/FicheLayout'
import { getContentDates } from '@/lib/content-dates'
import { REGIONS, villesLiens } from '@/lib/zones'
import { SRC, PARCOURS, BALISE, METHODE, DIAGNOSTIC, DEMARRAGE, FINANCEMENT_CONSEIL, DEROULE_ZONE, TARIF_ZONE, OUTILS_ZONE } from '@/lib/fiche-commun'

const PATH = '/consultant-seo-pays-de-la-loire'
const URL = `https://aurelienpage.fr${PATH}`
const TITLE = 'Consultant SEO et GEO en Pays de la Loire : Laval, Nantes, Angers, Le Mans · Aurélien PAGE'
const DESCRIPTION =
  "Consultant SEO et GEO avec siège à Laval : sans frais en Mayenne, en déplacement à Nantes, Angers, Le Mans, Cholet, Saumur et La Baule. Audit de 800 à 2 500 €, suivi dès 500 € par mois."
const REGION = REGIONS.find((r) => r.id === 'pays-de-la-loire')!

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
}

const data: FicheData = {
  path: PATH,
  parent: { name: "Zones d'intervention", path: '/zones-intervention' },
  nom: 'Pays de la Loire',
  h1: 'Consultant SEO en Pays de la Loire',
  resume:
    "**Quel consultant SEO en Pays de la Loire ?** Je suis **consultant SEO et GEO, avec mon siège à Laval** et une présence à Rennes. J'interviens **sans frais à Laval, Mayenne et Château-Gontier**, et je me déplace à **Nantes, Saint-Nazaire, La Baule, Angers, Cholet, Saumur et Le Mans** pour les moments clés d'une mission, frais de déplacement en supplément. Audit SEO et GEO de 800 à 2 500 €, suivi mensuel de 500 à 2 000 €. Premier échange : un diagnostic offert de 30 minutes.",
  identite: [
    { label: 'Public', valeur: 'Entreprises ligériennes : PME industrielles et de services, e-commerce, organismes de formation, cabinets' },
    { label: 'Prérequis', valeur: 'Un site en ligne' },
    { label: 'Sans frais de déplacement', valeur: '[Laval](/consultant-seo-laval) (siège), [Mayenne](/consultant-seo-mayenne), [Château-Gontier](/consultant-seo-chateau-gontier) et la Mayenne' },
    { label: 'Avec déplacement', valeur: '[Nantes](/consultant-seo-nantes), [Saint-Nazaire](/consultant-seo-saint-nazaire), [La Baule](/consultant-seo-la-baule), [Angers](/consultant-seo-angers), [Cholet](/consultant-seo-cholet), [Saumur](/consultant-seo-saumur), [Le Mans](/consultant-seo-le-mans) : frais au réel, précisés dans le devis' },
    { label: 'Format', valeur: 'Travail courant à distance ; diagnostic, restitution et ateliers sur place, frais de déplacement au réel précisés dans le devis' },
    { label: 'Tarif', valeur: TARIF_ZONE },
    { label: 'Financement', valeur: FINANCEMENT_CONSEIL },
    { label: 'Livrables', valeur: "Rapport d'audit, relevé de visibilité dans les IA, plan d'action, reporting mensuel" },
  ],
  pourquoiTitre: 'Pourquoi un consultant du Grand Ouest pour une entreprise ligérienne',
  pourquoi: [
    "Mon siège est à Laval : la Mayenne est ma zone de proximité, sans frais de déplacement. Nantes, Angers et Le Mans sont assez proches pour venir dans vos locaux quand une réunion le justifie, sans facturer une journée de voyage. Le reste de la mission (exploration du site, analyse de la Search Console, relevé des réponses des IA) se fait à distance, comme pour n'importe quel consultant.",
    "Sur les recherches locales, Google classe les établissements selon la **pertinence**, la **distance** et la **proéminence** ([Google](" + SRC.gbpLocal.href + ")). Pour une entreprise nantaise ou angevine, cela veut dire une fiche d'établissement complète, des pages qui nomment clairement la ville et les services, et une présence dans les annuaires et médias de la région.",
    "Côté IA, la logique est la même : ChatGPT, Perplexity ou Claude citent les sources qu'ils trouvent sur le web. Une entreprise absente des sites qu'ils consultent n'est pas recommandée, même si son site est bien fait. La méthode est dans [comment une entreprise locale peut-elle être recommandée par les IA](/blog/entreprise-locale-recommandee-par-ia).",
  ],
  derouleTitre: 'Comment se déroule une mission en Pays de la Loire',
  deroule: DEROULE_ZONE,
  pourquoiMoi: [PARCOURS, METHODE, BALISE],
  outils: OUTILS_ZONE,
  modalites: [
    DIAGNOSTIC,
    'Devis détaillé, frais de déplacement compris, envoyé après le diagnostic.',
    DEMARRAGE,
  ],
  zones: { titre: 'Villes des Pays de la Loire avec une page dédiée', liens: villesLiens(REGION) },
  faq: [
    {
      q: 'Vous déplacez-vous à Nantes ?',
      a: "Oui, pour le diagnostic, la restitution ou un atelier, avec des frais de déplacement ajoutés au devis, au réel. Le travail courant se fait à distance.",
    },
    {
      q: 'Pourquoi ne pas choisir un consultant installé à Nantes ou à Angers ?',
      a: "C'est une bonne option si la proximité est votre premier critère. Les autres critères comptent autant : méthode, exemples de travaux, transparence sur les résultats attendus. Voir [comment choisir un consultant SEO ou GEO](/blog/choisir-consultant-seo-geo).",
    },
    {
      q: 'Les frais de déplacement changent-ils le prix de l’audit ?',
      a: "Non. Le prix de l'audit dépend de la taille du site (800 à 2 500 €). Les frais de déplacement s'ajoutent à part, au réel, et seulement pour les rencontres sur place que vous demandez.",
    },
  ],
  liens: [
    { href: '/consultant-seo-laval', label: 'Consultant SEO à Laval' },
    { href: '/consultant-geo-laval', label: 'Consultant GEO à Laval' },
    { href: '/consultant-seo-nantes', label: 'Consultant SEO à Nantes' },
    { href: '/consultant-seo-bretagne', label: 'Consultant SEO en Bretagne' },
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
    { href: '/blog/choisir-consultant-seo-geo', label: 'Comment choisir un consultant SEO ou GEO ?' },
    { href: '/reponses/combien-coute-un-audit-seo', label: 'Combien coûte un audit SEO ?' },
    { href: '/zones-intervention', label: "Toutes mes zones d'intervention" },
  ],
  sources: [SRC.gbpLocal],
  schema: {
    '@type': 'Service',
    name: 'Consultant SEO et GEO en Pays de la Loire',
    serviceType: 'Audit et accompagnement SEO et GEO',
    areaServed: [{ '@type': 'AdministrativeArea', name: 'Pays de la Loire' }, ...REGION.villes.map((v) => ({ '@type': 'City', name: v.nom }))],
  },
  dates: getContentDates([`app${PATH}/page.tsx`]),
}

export default function Page() {
  return <FicheLayout data={data} />
}
