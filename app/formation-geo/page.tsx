import type { Metadata } from 'next'
import FicheLayout, { type FicheData } from '@/components/FicheLayout'
import { getContentDates } from '@/lib/content-dates'
import { SRC, PARCOURS, BALISE, DEMARRAGE, FINANCEMENT_FORMATION } from '@/lib/fiche-commun'

const PATH = '/formation-geo'
const URL = `https://aurelienpage.fr${PATH}`
const TITLE = 'Formation GEO pour équipes marketing : être cité par les IA · Aurélien PAGE'
const DESCRIPTION =
  "Formation GEO de 2 à 3 h ou atelier d'une demi-journée : comment les IA choisissent leurs sources, contenus citables, mesure. Rennes ou à distance, sur devis."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
}

const data: FicheData = {
  path: PATH,
  parent: { name: 'Prestations', path: '/prestations' },
  nom: 'Formation GEO',
  h1: 'Formation GEO',
  resume:
    "**Formation GEO** pour équipes marketing et éditoriales : comprendre comment ChatGPT, Perplexity, Gemini et les AI Overviews choisissent leurs sources, écrire des contenus qu'ils citent, mesurer le résultat. Module de 2 à 3 heures ou atelier d'une demi-journée, à Rennes, dans vos locaux ou à distance. **Tarif sur devis**, selon le format et le nombre de participants.",
  identite: [
    { label: 'Public', valeur: 'Équipes marketing, rédacteurs et content managers, responsables SEO, dirigeants' },
    { label: 'Prérequis', valeur: "Aucun. Connaître les bases du SEO aide ; sinon, voir la [formation SEO](/formation-seo)" },
    { label: 'Durée', valeur: "Module de 2 à 3 heures. Atelier pratique d'une demi-journée sur votre site" },
    {
      label: 'Format',
      valeur: 'Individuel ou en équipe (2 à 8 personnes). À distance, ou sur place à Rennes, en Bretagne et dans les grandes villes (frais de déplacement en supplément)',
    },
    {
      label: 'Tarif',
      valeur: "**Sur devis**, selon le format (session de 2 heures, module de 3 heures, atelier d'une demi-journée) et le nombre de participants",
    },
    { label: 'Financement', valeur: FINANCEMENT_FORMATION },
    { label: 'Livrables', valeur: "Supports envoyés après la session, liste de contrôle des contenus citables, liste d'actions sur votre site" },
  ],
  pourquoiTitre: 'Pourquoi former votre équipe au GEO',
  pourquoi: [
    "Votre équipe produit des contenus pour Google. Une partie de vos clients pose maintenant ses questions à une IA, qui répond en citant quelques sources. Les réflexes SEO restent utiles, mais ils ne suffisent pas à expliquer pourquoi un concurrent est cité et pas vous.",
    `La base est connue. Google indique qu'aucun fichier ni balisage spécial n'est nécessaire pour apparaître dans ses fonctionnalités IA : une page indexée et éligible à un extrait suffit ([Google Search Central](${SRC.googleIa.href})). Le reste se joue sur la façon d'écrire, de sourcer et de mesurer : c'est l'objet de la formation.`,
  ],
  derouleTitre: 'Programme',
  deroule: [
    {
      titre: 'Comprendre le GEO',
      duree: 'environ 30 minutes',
      livrable: 'vocabulaire commun pour l\'équipe',
      texte: "Ce qui change entre un classement Google et une réponse d'IA. Comment ChatGPT, Perplexity, Gemini et les AI Overviews trouvent et choisissent leurs sources, d'après la documentation des éditeurs.",
    },
    {
      titre: 'Structurer ses contenus pour les IA',
      duree: 'environ 1 heure',
      livrable: 'liste de contrôle des contenus citables',
      texte: 'Réponse directe sous le titre, titres en questions, tableaux, sources primaires, données structurées. Exercice sur une page de votre site.',
    },
    {
      titre: 'Renforcer les signaux de confiance',
      duree: 'environ 30 minutes',
      livrable: 'actions sur les pages auteur et à propos',
      texte: 'Auteur identifié, expérience démontrée, dates de mise à jour, cohérence de votre présentation sur le web.',
    },
    {
      titre: 'Mesurer sa visibilité dans les IA',
      duree: 'environ 30 minutes',
      livrable: 'liste de questions à suivre',
      texte: 'Construire une liste de questions, relever les réponses, calculer une part de voix. Démonstration avec Balise.',
    },
  ],
  pourquoiMoi: [
    PARCOURS,
    BALISE,
    "Je forme avec ce que j'applique sur mon propre site et sur ceux que je suis : pas de recette miracle, des pratiques reliées aux sources officielles et mesurées.",
  ],
  outils: ['ChatGPT', 'Perplexity', 'Gemini', 'Claude', 'Google Search Console', 'Balise'],
  modalites: [
    'Premier contact : un **échange préalable de 15 minutes** pour caler le niveau et les objectifs.',
    "En équipe : programme construit en amont à partir d'un questionnaire.",
    'Devis détaillé avant la formation.',
    DEMARRAGE,
  ],
  faq: [
    {
      q: 'Quelle formation GEO pour une équipe marketing ?',
      a: "Un module de 2 à 3 heures pour comprendre et appliquer les bases, ou un atelier d'une demi-journée sur votre site. Je forme des équipes de 2 à 8 personnes, dans vos locaux ou à distance, avec un programme construit à partir d'un questionnaire.",
    },
    {
      q: 'Faut-il connaître le SEO avant de se former au GEO ?',
      a: "C'est utile, pas obligatoire. Le GEO s'appuie sur des pages bien indexées. Si votre équipe débute, je conseille de commencer par la [formation SEO](/formation-seo) ou de combiner les deux.",
    },
    {
      q: 'Une formation GEO est-elle finançable par le CPF ou l\'OPCO ?',
      a: `Pas les miennes : l'article L6316-1 du Code du travail réserve ces financements aux organismes certifiés sur des critères qualité (Qualiopi), ce que je ne suis pas à ce jour ([Légifrance](${SRC.l6316.href})). La formation se finance sur le budget propre de l'entreprise.`,
    },
    {
      q: 'Faut-il créer un fichier llms.txt ?',
      a: `Ce n'est pas nécessaire pour Google, qui écrit qu'aucun fichier spécial n'est requis pour ses fonctionnalités IA ([Google Search Central](${SRC.googleIa.href})). Le format llms.txt reste une proposition ; je n'ai trouvé aucune documentation d'OpenAI, d'Anthropic ou de Perplexity indiquant qu'ils l'utilisent. Nous en parlons en formation, sans en faire une priorité.`,
    },
  ],
  liens: [
    { href: '/reponses/faut-il-creer-un-fichier-llms-txt', label: 'Faut-il créer un fichier llms.txt ?' },
    { href: '/reponses/contenu-ia-penalise-par-google', label: "Le contenu rédigé avec l'IA est-il pénalisé par Google ?" },
    { href: '/reponses/qu-est-ce-que-le-geo', label: "Qu'est-ce que le GEO (Generative Engine Optimization) ?" },
  ],
  sources: [SRC.googleIa, SRC.l6316],
  schema: {
    '@type': 'Course',
    name: 'Formation GEO',
    inLanguage: 'fr-FR',
    educationalLevel: 'Débutant à intermédiaire',
    hasCourseInstance: [
      { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'PT2H' },
      { '@type': 'CourseInstance', courseMode: 'onsite', location: 'Rennes', courseWorkload: 'PT2H' },
    ],
    offers: { '@type': 'Offer', category: 'Paid', description: 'Sur devis, selon le format et le nombre de participants' },
  },
  dates: getContentDates([`app${PATH}/page.tsx`]),
}

export default function Page() {
  return <FicheLayout data={data} />
}
