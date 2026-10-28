import type { Metadata } from 'next'
import FicheLayout, { type FicheData } from '@/components/FicheLayout'
import { getContentDates } from '@/lib/content-dates'
import { REGIONS } from '@/lib/zones'
import { SRC, PARCOURS, BALISE, METHODE, DIAGNOSTIC, DEMARRAGE, FINANCEMENT_CONSEIL, DEROULE_ZONE, TARIF_ZONE, OUTILS_ZONE } from '@/lib/fiche-commun'

const PATH = '/zones-intervention'
const URL = `https://aurelienpage.fr${PATH}`
const TITLE = "Zones d'intervention : Rennes, Bretagne, Pays de la Loire et à distance · Aurélien PAGE"
const DESCRIPTION =
  "Consultant SEO et GEO basé à Rennes : sur place sans frais à Rennes et alentours, en Bretagne et en Pays de la Loire avec déplacement, partout en France à distance."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
}

const data: FicheData = {
  path: PATH,
  parent: { name: 'Consultant SEO & GEO', path: '/prestations/consultant-seo-geo' },
  nom: "Zones d'intervention",
  h1: "Zones d'intervention",
  resume:
    "Je suis **consultant SEO et GEO basé à Rennes**. J'interviens **sur place sans frais à Rennes, Saint-Malo et Dinard**, **en Bretagne et en Pays de la Loire** avec des frais de déplacement, et **partout en France à distance**. Le travail courant d'un audit ou d'un suivi se fait à distance ; les rencontres servent au diagnostic, à la restitution et aux décisions.",
  identite: [
    { label: 'Base', valeur: 'Rennes (Ille-et-Vilaine, Bretagne)' },
    { label: 'Sans frais de déplacement', valeur: 'Rennes et un rayon d’une heure environ : Saint-Malo, Dinard, Vitré, Fougères, Redon' },
    { label: 'Avec déplacement', valeur: '[Bretagne](/consultant-seo-bretagne) (Vannes, Lorient, Quimper, Brest) et [Pays de la Loire](/consultant-seo-pays-de-la-loire) (Nantes, Saint-Nazaire, Angers, Laval, Le Mans), frais précisés dans le devis' },
    { label: 'À distance', valeur: '[France entière](/consultant-seo-a-distance) : visioconférence, accès à vos outils, documents partagés' },
    { label: 'Tarif', valeur: TARIF_ZONE },
    { label: 'Financement', valeur: FINANCEMENT_CONSEIL },
    { label: 'Livrables', valeur: "Identiques à distance et sur place : rapport d'audit, relevé de visibilité dans les IA, plan d'action, reporting mensuel" },
  ],
  pourquoiTitre: 'Pourquoi le lieu compte peu en SEO et en GEO',
  pourquoi: [
    "Un audit SEO se fait avec un robot d'exploration, la Search Console et vos outils d'analyse. Un relevé GEO se fait en posant des questions à ChatGPT, Perplexity, Claude, Gemini et Google. Rien de tout cela ne dépend de l'endroit où je me trouve.",
    "Ce qui dépend du lieu, c'est la relation de travail. Un diagnostic autour d'une table, une restitution devant votre équipe, une décision à prendre ensemble : ces moments gagnent à se faire en personne quand c'est possible. C'est pourquoi je me déplace en Bretagne et en Pays de la Loire, et que je travaille à distance ailleurs.",
    `Avant de choisir un prestataire, où qu'il soit, Google conseille de lui demander des exemples de travaux, s'il respecte les consignes de Google et quels résultats il attend, dans quel délai ([Google Search Central](${SRC.googleSeo.href})). Le diagnostic offert sert à cela. Les autres critères sont dans [comment choisir un consultant SEO ou GEO](/blog/choisir-consultant-seo-geo).`,
  ],
  derouleTitre: 'Comment se déroule une mission',
  deroule: DEROULE_ZONE,
  pourquoiMoi: [PARCOURS, METHODE, BALISE],
  outils: OUTILS_ZONE,
  modalites: [
    DIAGNOSTIC,
    'Devis détaillé, frais de déplacement compris le cas échéant, envoyé après le diagnostic.',
    DEMARRAGE,
    'Réunion mensuelle en visioconférence ou sur place pour les suivis.',
  ],
  zones: {
    titre: 'Régions et villes',
    liens: [
      { href: '/consultant-seo-rennes', label: 'Rennes' },
      ...REGIONS.map((r) => ({ href: r.path, label: r.nom })),
    ],
  },
  faq: [
    {
      q: 'Intervenez-vous en dehors de la Bretagne et des Pays de la Loire ?',
      a: "Oui, à distance. Paris, Lyon, Bordeaux, Lille, Toulouse ou toute autre ville : l'audit, le suivi mensuel et les formations se font en visioconférence, avec les mêmes livrables. Un déplacement ponctuel reste possible sur devis, frais compris. Le détail est sur la page [consultant SEO à distance](/consultant-seo-a-distance).",
    },
    {
      q: 'Le travail à distance change-t-il la qualité de la mission ?',
      a: "Non. Les données d'un audit viennent de votre site, de la Search Console et des réponses des IA, pas d'une visite sur place. Ce qui change, c'est le format des réunions. Les livrables sont identiques.",
    },
    {
      q: 'Combien coûtent les déplacements ?',
      a: "Rien à Rennes et dans un rayon d'une heure environ. Ailleurs en Bretagne et en Pays de la Loire, les frais de déplacement sont ajoutés au devis, au réel. Ils ne modifient pas le prix de la prestation : voir [combien coûte un audit SEO](/reponses/combien-coute-un-audit-seo).",
    },
    {
      q: 'Pourquoi des pages par ville ?',
      a: "Parce que les entreprises cherchent souvent un consultant SEO près de chez elles. Chaque page précise les modalités de rencontre propres à la ville. La fiche de référence reste [consultant SEO et GEO](/prestations/consultant-seo-geo).",
    },
  ],
  liens: [
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
    { href: '/consultant-seo-bretagne', label: 'Consultant SEO en Bretagne' },
    { href: '/consultant-seo-pays-de-la-loire', label: 'Consultant SEO en Pays de la Loire' },
    { href: '/consultant-seo-a-distance', label: 'Consultant SEO à distance, partout en France' },
    { href: '/blog/choisir-consultant-seo-geo', label: 'Comment choisir un consultant SEO ou GEO ?' },
    { href: '/prestations/consultant-seo-geo', label: 'Consultant SEO et GEO : la fiche complète' },
  ],
  sources: [SRC.googleSeo],
  schema: {
    '@type': 'Service',
    name: 'Consultant SEO et GEO : zones d’intervention',
    serviceType: 'Audit et accompagnement SEO et GEO',
    areaServed: [
      { '@type': 'City', name: 'Rennes' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
      { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
      { '@type': 'Country', name: 'France' },
    ],
  },
  dates: getContentDates([`app${PATH}/page.tsx`]),
}

export default function Page() {
  return <FicheLayout data={data} />
}
