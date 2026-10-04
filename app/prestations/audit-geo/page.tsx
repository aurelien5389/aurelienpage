import type { Metadata } from 'next'
import FicheLayout, { type FicheData } from '@/components/FicheLayout'
import { getContentDates } from '@/lib/content-dates'
import { SRC, PARCOURS, BALISE, METHODE, DIAGNOSTIC, DEMARRAGE, FINANCEMENT_CONSEIL, PROVIDER_AREA } from '@/lib/fiche-commun'

const PATH = '/prestations/audit-geo'
const URL = `https://aurelienpage.fr${PATH}`
const TITLE = 'Audit GEO : votre visibilité dans ChatGPT, Perplexity et les AI Overviews · Aurélien PAGE'
const DESCRIPTION =
  "Audit GEO : les IA vous citent-elles ? Relevé des réponses, part de voix, sites cités, plan d'action. Inclus dans l'audit SEO et GEO, de 800 à 2 500 €."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
}

const data: FicheData = {
  path: PATH,
  parent: { name: 'Prestations', path: '/prestations' },
  nom: 'Audit GEO',
  h1: 'Audit GEO',
  resume:
    "L'**audit GEO** mesure si ChatGPT, Perplexity, Gemini, Claude et les AI Overviews de Google citent votre site quand on leur pose les questions de vos clients, et qui ils citent à votre place. Je le réalise dans le cadre d'un **audit SEO et GEO, de 800 à 2 500 €** selon la taille du site, depuis Rennes ou à distance.",
  identite: [
    { label: 'Public', valeur: 'Entreprises B2B, PME, organismes de formation, sites de services ou e-commerce qui veulent être recommandés par les IA' },
    { label: 'Prérequis', valeur: 'Un site en ligne et une liste de vos offres principales. Les questions de vos clients sont construites ensemble' },
    { label: 'Durée', valeur: "Selon le nombre de questions et la taille du site, précisée dans le devis" },
    { label: 'Format', valeur: 'À distance, restitution en visioconférence ou sur place à Rennes' },
    {
      label: 'Tarif',
      valeur: "**Inclus dans l'audit SEO et GEO : 800 à 2 500 €** selon la taille du site. L'audit GEO n'est pas vendu seul",
    },
    { label: 'Financement', valeur: FINANCEMENT_CONSEIL },
    {
      label: 'Livrables',
      valeur: "Liste des questions testées, relevé des réponses des IA, part de voix, sites cités à votre place, analyse des pages qui gagnent, plan d'action",
    },
  ],
  pourquoiTitre: 'Pourquoi un audit GEO',
  pourquoi: [
    "Vos clients ne tapent plus seulement des mots-clés dans Google. Ils demandent à une IA quel prestataire choisir, combien ça coûte, ce qu'il faut savoir avant de se lancer. Si la réponse cite trois concurrents, vous n'êtes pas dans la course, et la Search Console ne vous dira pas qui est cité à votre place.",
    `Certaines causes sont techniques. OpenAI précise qu'un site qui bloque son robot **OAI-SearchBot** n'apparaît pas dans les réponses de recherche de ChatGPT ([OpenAI](${SRC.openai.href})). Anthropic et Perplexity documentent aussi leurs robots de recherche, Claude-SearchBot et PerplexityBot ([Anthropic](${SRC.anthropic.href}), [Perplexity](${SRC.perplexity.href})). Côté Google, une page doit être indexée et éligible à un extrait pour apparaître dans les AI Overviews ([Google Search Central](${SRC.googleIa.href})).`,
    "Les autres causes tiennent aux contenus : pas de réponse directe à la question, pas de source, pas d'auteur identifié, ou des concurrents mieux cités ailleurs sur le web.",
  ],
  derouleTitre: "Méthode de l'audit GEO",
  deroule: [
    {
      titre: 'Liste de questions',
      duree: 'début de mission',
      livrable: 'liste des questions validée avec vous',
      texte: 'Les questions que vos clients posent aux IA : choix d\'un prestataire, prix, comparaisons, définitions. Construites avec vous à partir de vos offres.',
    },
    {
      titre: 'Accès des robots',
      duree: 'en parallèle',
      livrable: 'état des accès robot par robot',
      texte: "Contrôle du robots.txt, du pare-feu et du rendu des pages pour les robots de Google, Bing, OpenAI, Anthropic et Perplexity.",
    },
    {
      titre: 'Relevé des réponses des IA',
      duree: 'selon le nombre de questions',
      livrable: 'relevé question par question',
      texte: 'Chaque question est posée à ChatGPT, Perplexity, Gemini, Claude et Google. Je note les marques et les sites cités.',
    },
    {
      titre: 'Part de voix et sites cités',
      duree: 'après le relevé',
      livrable: 'part de voix par IA et par thème, liste des sites cités à votre place',
      texte: 'La part de voix, c\'est la proportion de réponses où vous êtes cité. Elle se compare à celle de vos concurrents.',
    },
    {
      titre: 'Analyse des pages qui gagnent',
      duree: 'après le relevé',
      livrable: 'ce que ces pages ont et que vous n\'avez pas',
      texte: 'Format, réponse directe, sources, fraîcheur, auteur, présence sur d\'autres sites : ce qui fait qu\'une IA choisit une page plutôt qu\'une autre.',
    },
    {
      titre: "Plan d'action",
      duree: 'restitution',
      livrable: "plan d'action classé par impact et par effort",
      texte: "Pages à créer ou à reprendre, corrections techniques, sites tiers où être présent. Le suivi peut se faire dans l'[accompagnement SEO mensuel](/accompagnement-seo).",
    },
  ],
  pourquoiMoi: [PARCOURS, BALISE, METHODE],
  outils: ['Balise', 'ChatGPT', 'Perplexity', 'Gemini', 'Claude', 'Google Search Console', 'Screaming Frog'],
  modalites: [
    DIAGNOSTIC,
    "Devis de l'audit SEO et GEO envoyé après le diagnostic, avant toute intervention.",
    DEMARRAGE,
  ],
  faq: [
    {
      q: 'Qui peut réaliser un audit GEO de mon site ?',
      a: "Un consultant qui maîtrise le SEO technique et qui sait mesurer les réponses des IA de façon reproductible. Je réalise l'audit GEO dans le cadre de l'audit SEO et GEO, avec Balise, l'outil de relevé que j'ai construit.",
    },
    {
      q: 'Quelle différence entre un audit SEO et un audit GEO ?',
      a: "L'audit SEO regarde comment Google explore, comprend et classe vos pages. L'audit GEO regarde si les IA vous citent sur les questions de vos clients, et quels sites elles citent à votre place. Les deux se complètent : sans pages bien indexées, pas de citation.",
    },
    {
      q: "Qu'est-ce que la part de voix dans les IA ?",
      a: "C'est la proportion de réponses, sur une liste de questions, où votre marque ou votre site est cité. On la mesure IA par IA et on la compare à celle des concurrents.",
    },
    {
      q: 'Quels robots d\'IA explorent mon site ?',
      a: `Les principaux sont OAI-SearchBot, ChatGPT-User et GPTBot (OpenAI), Claude-SearchBot, Claude-User et ClaudeBot (Anthropic), PerplexityBot et Perplexity-User (Perplexity). Chaque éditeur documente leur rôle : recherche, visite à la demande d'un utilisateur ou entraînement ([OpenAI](${SRC.openai.href}), [Anthropic](${SRC.anthropic.href}), [Perplexity](${SRC.perplexity.href})).`,
    },
    {
      q: "L'audit GEO garantit-il d'être cité ?",
      a: 'Non. Les IA choisissent leurs sources elles-mêmes. L\'audit montre où vous en êtes et ce qui vous manque ; la mesure suivante dit si les actions ont porté.',
    },
  ],
  liens: [
    { href: '/reponses/difference-audit-seo-audit-geo', label: 'Quelle différence entre un audit SEO et un audit GEO ?' },
    { href: '/reponses/robots-ia-faut-il-les-bloquer', label: "Quels robots d'IA explorent mon site et faut-il les bloquer ?" },
    { href: '/reponses/part-de-voix-dans-les-ia', label: "Qu'est-ce que la part de voix dans les IA ?" },
  ],
  sources: [SRC.openai, SRC.anthropic, SRC.perplexity, SRC.googleIa],
  schema: {
    '@type': 'Service',
    name: 'Audit GEO',
    serviceType: 'Audit de visibilité dans les moteurs de réponse IA',
    areaServed: PROVIDER_AREA,
    isRelatedTo: { '@type': 'Service', name: 'Consultant SEO et GEO', url: 'https://aurelienpage.fr/prestations/consultant-seo-geo' },
    offers: {
      '@type': 'Offer',
      name: "Audit SEO et GEO (inclut l'audit GEO)",
      priceCurrency: 'EUR',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 800, maxPrice: 2500, priceCurrency: 'EUR' },
    },
  },
  dates: getContentDates([`app${PATH}/page.tsx`]),
}

export default function Page() {
  return <FicheLayout data={data} />
}
