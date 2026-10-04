import type { Metadata } from 'next'
import FicheLayout, { type FicheData } from '@/components/FicheLayout'
import { getContentDates } from '@/lib/content-dates'
import { SRC, PARCOURS, DEMARRAGE, FINANCEMENT_FORMATION } from '@/lib/fiche-commun'

const PATH = '/formation-seo'
const URL = `https://aurelienpage.fr${PATH}`
const TITLE = 'Formation SEO à Rennes ou à distance, en individuel ou en équipe · Aurélien PAGE'
const DESCRIPTION =
  "Formation SEO sur votre site : fondamentaux, technique, contenus, GEO, reporting. 300 € les 2 h, 450 à 600 € le module. Individuel ou équipe, Rennes ou à distance."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
}

const data: FicheData = {
  path: PATH,
  parent: { name: 'Prestations', path: '/prestations' },
  nom: 'Formation SEO',
  h1: 'Formation SEO',
  resume:
    "**Formation SEO** individuelle ou en équipe (2 à 8 personnes), à Rennes, dans vos locaux ou à distance. Fondamentaux, SEO technique, mots-clés et contenus, GEO, reporting : modules de 2 à 4 heures, construits sur votre site. **300 € les 2 heures, 450 à 600 € le module.** Non finançable par le CPF ni par un OPCO.",
  identite: [
    {
      label: 'Public',
      valeur:
        'Responsables marketing, chefs de projet digital, entrepreneurs et indépendants, rédacteurs et content managers, équipes techniques, dirigeants de PME',
    },
    { label: 'Prérequis', valeur: 'Aucun. Le niveau est calé lors d\'un échange préalable de 15 minutes' },
    { label: 'Durée', valeur: 'Modules de 2 à 4 heures. Atelier pratique en demi-journée. Formation-action sur 1 à 3 mois' },
    {
      label: 'Format',
      valeur:
        'Individuel ou en équipe (2 à 8 personnes). À distance en visioconférence, ou sur place à Rennes, en Bretagne et dans les grandes villes (frais de déplacement en supplément)',
    },
    {
      label: 'Tarif',
      valeur:
        "**300 € la session individuelle de 2 heures. 450 à 600 € le module de 3 à 4 heures.** Parcours sur mesure et formation en équipe sur devis, selon le nombre de participants et la durée",
    },
    { label: 'Financement', valeur: FINANCEMENT_FORMATION },
    { label: 'Livrables', valeur: "Supports (diaporama, ressources, listes de contrôle) envoyés après chaque session, liste d'actions prioritaires sur votre site" },
  ],
  pourquoiTitre: 'Pourquoi se former au SEO',
  pourquoi: [
    "Comprendre le SEO vous rend autonome. Vous savez évaluer le travail de votre agence ou de votre consultant, poser les bonnes questions à vos développeurs, prendre de meilleures décisions éditoriales. Et si vous gérez le SEO en interne, vous évitez les erreurs qui coûtent des mois de trafic.",
    "Les ressources gratuites expliquent le SEO en général. En formation, nous travaillons sur votre site, vos requêtes et vos concurrents : vous repartez avec un plan d'action applicable le lendemain.",
  ],
  derouleTitre: 'Programme',
  deroule: [
    {
      titre: 'Fondamentaux SEO',
      duree: '2 à 3 heures',
      livrable: "supports et liste d'actions sur votre site",
      texte:
        'Fonctionnement des moteurs de recherche : exploration, index, classement. Les trois piliers : technique, contenu, popularité. Lecture de la Google Search Console.',
    },
    {
      titre: 'SEO technique',
      duree: '3 à 4 heures',
      livrable: "supports et liste d'actions sur votre site",
      texte:
        'Core Web Vitals (LCP, INP, CLS), exploration et indexation, redirections et codes HTTP, données structurées Schema.org, robots.txt et balises meta robots.',
    },
    {
      titre: 'Stratégie de mots-clés et de contenu',
      duree: '3 à 4 heures',
      livrable: "supports et liste d'actions sur votre site",
      texte:
        "Requêtes à fort potentiel pour votre marché, intention de recherche, cocon sémantique, briefs de contenus SEO, optimisation des pages existantes.",
    },
    {
      titre: 'GEO et moteurs IA',
      duree: '2 à 3 heures',
      livrable: "supports et liste d'actions sur votre site",
      texte:
        "Comprendre le GEO, structurer ses contenus pour les AI Overviews et Perplexity, renforcer ses signaux de confiance, mesurer sa visibilité dans les réponses des IA. Version détaillée : [formation GEO](/formation-geo).",
    },
    {
      titre: 'Reporting et pilotage SEO',
      duree: '2 heures',
      livrable: "supports et liste d'actions sur votre site",
      texte:
        "Les indicateurs qui comptent, lecture de la Search Console et d'Analytics, évaluation d'un prestataire SEO, construction d'un reporting mensuel exploitable.",
    },
  ],
  pourquoiMoi: [
    PARCOURS,
    "Je forme avec mes outils et mes cas de travail, pas avec un programme générique. J'ai aussi encadré une équipe de rédacteurs (brief, relecture, validation) : expliquer le SEO à des non-spécialistes fait partie de mon quotidien.",
    "Chaque session part de votre situation et se termine par une liste d'actions classées par impact et par facilité. Après la formation, vous pouvez me poser vos questions.",
  ],
  outils: ['Google Search Console', 'Google Analytics 4', 'Screaming Frog', 'Semrush', 'Looker Studio', 'Balise'],
  modalites: [
    'Premier contact : un **échange préalable de 15 minutes** pour caler le niveau et les objectifs.',
    "En équipe : programme construit en amont à partir d'un questionnaire.",
    'Devis détaillé avant la formation.',
    DEMARRAGE,
    'Modules suivis séparément ou combinés en parcours sur mesure.',
  ],
  faq: [
    {
      q: 'Quelle formation SEO suivre à Rennes ou à distance ?',
      a: "Je propose une formation SEO en modules de 2 à 4 heures, à Rennes, dans vos locaux ou à distance en visioconférence. Elle se fait sur votre propre site : fondamentaux, technique, mots-clés et contenus, GEO, reporting. 300 € les 2 heures, 450 à 600 € le module.",
    },
    {
      q: 'Qui peut former une équipe marketing au SEO en intra-entreprise ?',
      a: "Je forme des équipes de 2 à 8 personnes dans vos locaux ou à distance. Le programme est construit en amont à partir d'un questionnaire, puis adapté à vos outils et à votre site. Le tarif dépend du nombre de participants et de la durée.",
    },
    {
      q: 'Une formation SEO est-elle finançable par le CPF ou l\'OPCO ?',
      a: `Pas les miennes. L'article L6316-1 du Code du travail réserve les financements des OPCO, du CPF, de France Travail, de l'État et des régions aux organismes certifiés sur des critères qualité (certification Qualiopi). Je ne suis pas certifié à ce jour : la formation se finance sur le budget propre de l'entreprise ([Légifrance](${SRC.l6316.href})).`,
    },
    {
      q: 'Quel niveau faut-il pour suivre la formation ?',
      a: "Aucun prérequis. J'adapte le contenu au niveau de départ, du débutant au profil marketing qui veut approfondir, lors d'un échange préalable de 15 minutes.",
    },
    {
      q: 'En combien de temps devient-on autonome en SEO ?',
      a: "Sur les fondamentaux (Search Console, optimisations de base, choix des mots-clés), une à deux journées de formation suffisent en général. Sur l'ensemble du SEO, c'est un apprentissage continu : la formation donne la méthode, la pratique fait le reste.",
    },
  ],
  liens: [
    { href: '/reponses/formation-seo-cpf-opco', label: "Une formation SEO est-elle finançable par le CPF ou l'OPCO ?" },
    { href: '/reponses/combien-de-mots-article-seo', label: 'Combien de mots doit contenir un article pour le SEO ?' },
    { href: '/formation-geo', label: 'Formation GEO pour les équipes marketing' },
    { href: '/blog/apprendre-le-seo-principes-debutants', label: 'Apprendre le SEO : les principes de base' },
    { href: '/blog/google-search-console', label: 'Google Search Console : le guide' },
  ],
  sources: [SRC.l6316],
  schema: {
    '@type': 'Course',
    name: 'Formation SEO',
    inLanguage: 'fr-FR',
    educationalLevel: 'Débutant à intermédiaire',
    hasCourseInstance: [
      { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'PT2H' },
      { '@type': 'CourseInstance', courseMode: 'onsite', location: 'Rennes', courseWorkload: 'PT2H' },
    ],
    offers: [
      { '@type': 'Offer', name: 'Session individuelle de 2 heures', price: 300, priceCurrency: 'EUR', category: 'Paid' },
      {
        '@type': 'Offer',
        name: 'Module de 3 à 4 heures',
        priceCurrency: 'EUR',
        category: 'Paid',
        priceSpecification: { '@type': 'PriceSpecification', minPrice: 450, maxPrice: 600, priceCurrency: 'EUR' },
      },
    ],
  },
  dates: getContentDates([`app${PATH}/page.tsx`]),
}

export default function Page() {
  return <FicheLayout data={data} />
}
