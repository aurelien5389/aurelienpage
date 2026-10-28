import type { Metadata } from 'next'
import FicheLayout, { type FicheData } from '@/components/FicheLayout'
import { getContentDates } from '@/lib/content-dates'
import { SRC, PARCOURS, BALISE, METHODE, DIAGNOSTIC, DEMARRAGE, FINANCEMENT_CONSEIL } from '@/lib/fiche-commun'

const PATH = '/zones-intervention'
const URL = `https://aurelienpage.fr${PATH}`
const TITLE = "Zones d'intervention : Rennes, Bretagne, Grand Ouest et à distance · Aurélien PAGE"
const DESCRIPTION =
  "Consultant SEO et GEO basé à Rennes. Sur place à Rennes et en Ille-et-Vilaine sans frais, en Bretagne et dans le Grand Ouest avec déplacement, partout en France à distance."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
}

// Villes avec une page dédiée (déplacements réels)
const VILLES = [
  ['rennes', 'Rennes'], ['saint-malo', 'Saint-Malo'], ['dinard', 'Dinard'], ['vannes', 'Vannes'],
  ['lorient', 'Lorient'], ['quimper', 'Quimper'], ['brest', 'Brest'],
  ['nantes', 'Nantes'], ['saint-nazaire', 'Saint-Nazaire'], ['laval', 'Laval'], ['le-mans', 'Le Mans'], ['angers', 'Angers'],
].map(([slug, label]) => ({ href: `/consultant-seo-${slug}`, label }))

const data: FicheData = {
  path: PATH,
  parent: { name: 'Consultant SEO & GEO', path: '/prestations/consultant-seo-geo' },
  nom: "Zones d'intervention",
  h1: "Zones d'intervention",
  resume:
    "Je suis **consultant SEO et GEO basé à Rennes**. J'interviens **sur place à Rennes et en Ille-et-Vilaine** sans frais de déplacement, **en Bretagne et dans le Grand Ouest** avec des frais en supplément, et **partout en France à distance**. Le travail courant d'un audit ou d'un suivi mensuel se fait à distance ; les rencontres servent au diagnostic, à la restitution et aux décisions.",
  identite: [
    { label: 'Base', valeur: 'Rennes (Ille-et-Vilaine, Bretagne)' },
    { label: 'Sans frais de déplacement', valeur: 'Rennes et un rayon d’une heure environ : Saint-Malo, Dinard, Vitré, Fougères, Redon' },
    { label: 'Avec déplacement', valeur: 'Bretagne (Vannes, Lorient, Quimper, Brest) et Grand Ouest (Nantes, Saint-Nazaire, Laval, Le Mans, Angers), frais de déplacement en supplément, précisés dans le devis' },
    { label: 'À distance', valeur: 'France entière : visioconférence, accès à vos outils, documents partagés' },
    {
      label: 'Tarif',
      valeur:
        '**Audit SEO et GEO : 800 à 2 500 €** selon la taille du site. **Suivi mensuel : 500 à 2 000 € par mois**, au-delà sur devis. Formations et Google Ads : sur devis. Le lieu ne change pas le prix, seuls les frais de déplacement s’ajoutent',
    },
    { label: 'Financement', valeur: FINANCEMENT_CONSEIL },
    { label: 'Livrables', valeur: "Identiques à distance et sur place : rapport d'audit, relevé de visibilité dans les IA, plan d'action, reporting mensuel" },
  ],
  pourquoiTitre: 'Pourquoi le lieu compte peu en SEO et en GEO',
  pourquoi: [
    "Un audit SEO se fait avec un robot d'exploration, la Search Console et vos outils d'analyse. Un relevé GEO se fait en posant des questions à ChatGPT, Perplexity, Gemini et Google. Rien de tout cela ne dépend de l'endroit où je me trouve.",
    "Ce qui dépend du lieu, c'est la relation de travail. Un diagnostic autour d'une table, une restitution devant votre équipe technique et vos rédacteurs, une décision à prendre ensemble : ces moments gagnent à se faire en personne quand c'est possible. C'est pourquoi je me déplace à Rennes et dans le Grand Ouest, et que je travaille à distance ailleurs.",
    `Avant de choisir un prestataire, où qu'il soit, Google conseille de lui demander des exemples de travaux, s'il respecte les Google Search Essentials et quels résultats il attend, dans quel délai ([Google Search Central](${SRC.googleSeo.href})). Le diagnostic offert sert à cela, en visioconférence ou en face à face.`,
  ],
  derouleTitre: 'Comment se déroule une mission à distance',
  deroule: [
    {
      titre: 'Diagnostic offert',
      duree: '30 minutes',
      livrable: "premières pistes et périmètre de l'audit",
      texte: 'En visioconférence, ou à Rennes si vous êtes dans la région. Nous regardons votre site, vos objectifs et vos concurrents.',
    },
    {
      titre: 'Accès aux outils',
      duree: 'au démarrage',
      livrable: 'liste des accès nécessaires',
      texte: 'Google Search Console, outil d’audience, CMS si j’interviens directement. Les accès sont donnés en lecture ou en écriture selon ce que nous décidons.',
    },
    {
      titre: 'Audit SEO et GEO',
      duree: 'selon la taille du site, précisée dans le devis',
      livrable: 'rapport d’audit et relevé de visibilité dans les IA',
      texte: 'Exploration, indexation, accès des robots de Google, de Bing et des IA, mots-clés, contenus, relevé de qui est cité par les IA sur les questions de vos clients.',
    },
    {
      titre: "Restitution et plan d'action",
      duree: 'une réunion',
      livrable: "plan d'action classé par impact et par effort",
      texte: 'En visioconférence ou dans vos locaux. Vous appliquez les actions seul, avec votre équipe ou avec moi en suivi mensuel.',
    },
  ],
  pourquoiMoi: [PARCOURS, METHODE, BALISE],
  outils: ['Google Search Console', 'Google Analytics 4', 'Screaming Frog', 'Semrush', 'Ahrefs', 'Looker Studio', 'Balise'],
  modalites: [
    DIAGNOSTIC,
    'Devis détaillé, frais de déplacement compris le cas échéant, envoyé après le diagnostic.',
    DEMARRAGE,
    'Réunion mensuelle en visioconférence pour les suivis à distance.',
  ],
  zones: { titre: 'Villes avec une page dédiée', liens: VILLES },
  faq: [
    {
      q: 'Intervenez-vous en dehors de la Bretagne et du Grand Ouest ?',
      a: "Oui, à distance. Paris, Lyon, Bordeaux, Lille, Toulouse, Marseille ou toute autre ville : l'audit, le suivi mensuel et les formations se font en visioconférence, avec les mêmes livrables. Un déplacement ponctuel reste possible sur devis, frais compris.",
    },
    {
      q: 'Le travail à distance change-t-il la qualité de la mission ?',
      a: "Non. Les données d'un audit viennent de votre site, de la Search Console et des réponses des IA, pas d'une visite sur place. Ce qui change, c'est le format des réunions : visioconférence au lieu d'une salle. Les livrables sont identiques.",
    },
    {
      q: 'Combien coûtent les déplacements ?',
      a: "Rien à Rennes et en Ille-et-Vilaine. Ailleurs en Bretagne et dans le Grand Ouest, les frais de déplacement sont ajoutés au devis, au réel. Ils ne modifient pas le prix de la prestation elle-même : voir [combien coûte un audit SEO](/reponses/combien-coute-un-audit-seo).",
    },
    {
      q: 'Pourquoi des pages par ville ?',
      a: "Parce que les entreprises cherchent souvent un consultant SEO près de chez elles. Chaque page décrit la même prestation, avec les modalités de rencontre propres à la ville. La fiche de référence reste [consultant SEO et GEO](/prestations/consultant-seo-geo).",
    },
  ],
  liens: [
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
    { href: '/prestations/consultant-seo-geo', label: 'Consultant SEO et GEO : la fiche complète' },
    { href: '/consultant-seo-freelance', label: 'Consultant SEO freelance : tarifs et déroulé' },
    { href: '/formation-seo', label: 'Formation SEO à Rennes ou à distance' },
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
    availableChannel: { '@type': 'ServiceChannel', serviceLocation: { '@type': 'Place', name: 'À distance (visioconférence)' } },
  },
  dates: getContentDates([`app${PATH}/page.tsx`]),
}

export default function Page() {
  return <FicheLayout data={data} />
}
