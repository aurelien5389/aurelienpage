import type { Metadata } from 'next'
import FicheLayout, { type FicheData } from '@/components/FicheLayout'
import { getContentDates } from '@/lib/content-dates'
import { availability } from '@/config/availability'

const PATH = '/prestations/consultant-seo-geo'
const URL = `https://aurelienpage.fr${PATH}`
const TITLE = 'Consultant SEO et GEO à Rennes · Aurélien PAGE'
const DESCRIPTION =
  "Audit SEO et GEO de 800 à 2 500 € et suivi dès 500 €/mois. Être trouvé sur Google et cité par ChatGPT, Perplexity, Gemini. Rennes ou à distance."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
}

const LOCAL_PAGES = [
  ['rennes', 'Rennes'], ['nantes', 'Nantes'], ['paris', 'Paris'], ['lyon', 'Lyon'],
  ['bordeaux', 'Bordeaux'], ['marseille', 'Marseille'], ['toulouse', 'Toulouse'], ['lille', 'Lille'],
  ['brest', 'Brest'], ['montpellier', 'Montpellier'], ['nice', 'Nice'], ['strasbourg', 'Strasbourg'],
  ['caen', 'Caen'], ['vannes', 'Vannes'], ['lorient', 'Lorient'], ['quimper', 'Quimper'],
  ['saint-malo', 'Saint-Malo'], ['dinard', 'Dinard'], ['saint-nazaire', 'Saint-Nazaire'],
  ['laval', 'Laval'], ['le-mans', 'Le Mans'], ['angers', 'Angers'],
].map(([slug, label]) => ({ href: `/consultant-seo-${slug}`, label }))

const SRC_GOOGLE_IA = 'https://developers.google.com/search/docs/appearance/ai-features'
const SRC_OPENAI = 'https://developers.openai.com/api/docs/bots'
const SRC_GOOGLE_SEO = 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo'

const data: FicheData = {
  path: PATH,
  parent: { name: 'Prestations', path: '/prestations' },
  nom: 'Consultant SEO et GEO',
  h1: 'Consultant SEO et GEO',
  resume:
    "Consultant **SEO et GEO** basé à Rennes, j'interviens sur place ou à distance. J'audite votre site et vous aide à être trouvé sur Google et cité par ChatGPT, Perplexity, Gemini et les AI Overviews. **Audit de 800 à 2 500 €** selon la taille du site, délai fixé dans le devis ; suivi dès 500 € par mois.",
  identite: [
    { label: 'Public', valeur: 'Entreprises B2B, PME, organismes de formation, médias, sites e-commerce' },
    { label: 'Prérequis', valeur: 'Un site en ligne' },
    { label: 'Durée', valeur: 'Audit : selon la taille du site, précisée dans le devis. Suivi : mensuel, sans contrat annuel imposé' },
    { label: 'Format', valeur: 'Sur place à Rennes et en déplacement, ou à distance' },
    {
      label: 'Tarif',
      valeur:
        '**Audit SEO et GEO : 800 à 2 500 €** selon la taille du site. **Suivi : 500 à 2 000 € par mois**, au-delà sur devis. Devis détaillé avant toute intervention',
    },
    { label: 'Financement', valeur: "Prestation de conseil, pas une formation : non éligible au CPF" },
    {
      label: 'Livrables',
      valeur:
        "Rapport d'audit avec actions classées par priorité, relevé de visibilité dans les IA (questions testées, part de voix, sites cités), plan d'action. En suivi : reporting mensuel",
    },
  ],
  pourquoiTitre: 'Pourquoi un audit SEO et GEO',
  pourquoi: [
    "Je vois souvent des sites bien placés sur Google et absents des réponses de ChatGPT ou de Perplexity. Le prospect pose sa question à une IA, lit une réponse qui cite trois concurrents, et ne visite jamais votre site.",
    `Le point de départ reste le SEO. Google l'écrit : pour apparaître dans ses fonctionnalités IA (AI Overviews, AI Mode), une page doit être **indexée et éligible à un extrait** dans la recherche, sans exigence technique supplémentaire ([Google Search Central](${SRC_GOOGLE_IA})). Côté ChatGPT, OpenAI précise que les sites qui bloquent son robot **OAI-SearchBot** n'apparaissent pas dans les réponses de recherche ([documentation OpenAI](${SRC_OPENAI})).`,
    "L'audit croise donc les deux : ce qui empêche Google d'explorer et de comprendre vos pages, et ce qui empêche les IA de vous citer.",
  ],
  derouleTitre: 'Déroulé de la mission',
  deroule: [
    {
      titre: 'Diagnostic offert',
      duree: '30 minutes',
      livrable: "premières pistes et périmètre de l'audit",
      texte:
        "Nous regardons ensemble votre site, vos objectifs et vos concurrents. Je vous dis si un audit est utile et ce qu'il couvrira.",
    },
    {
      titre: 'Audit technique',
      duree: 'selon la taille du site',
      livrable: 'liste des blocages techniques classés par priorité',
      texte:
        "Exploration du site, indexation, Core Web Vitals, structure des URL, données structurées, accès des robots de Google, de Bing et des IA.",
    },
    {
      titre: 'Audit des contenus et des mots-clés',
      duree: 'selon la taille du site',
      livrable: 'carte des mots-clés et des pages à créer ou à reprendre',
      texte:
        'Requêtes qui comptent pour votre activité, pages qui y répondent, contenus manquants, maillage interne.',
    },
    {
      titre: 'Audit GEO',
      duree: 'selon la taille du site',
      livrable: 'relevé de visibilité dans les IA : part de voix et sites cités',
      texte:
        "Je pose à ChatGPT, Perplexity, Gemini et Google une liste de questions que se posent vos clients. Je relève qui est cité, à quelle fréquence, et j'analyse les pages qui gagnent.",
    },
    {
      titre: "Restitution et plan d'action",
      duree: 'selon la taille du site',
      livrable: "plan d'action classé par impact et par effort",
      texte:
        'Je vous présente les résultats et les actions à mener. Vous pouvez les appliquer seul, avec votre équipe ou avec moi.',
    },
    {
      titre: 'Suivi mensuel (optionnel)',
      duree: 'mensuelle, sans contrat annuel imposé',
      livrable: 'reporting mensuel',
      texte:
        "Mise en œuvre, suivi des positions et des citations dans les IA, ajustements. Détails sur la page [accompagnement SEO mensuel](/accompagnement-seo).",
    },
  ],
  pourquoiMoi: [
    "Je fais du **SEO et du SEA depuis 2020**, en agence, pour un groupe de presse professionnelle et en freelance. Avant cela, j'ai été journaliste web et rédacteur de 2012 à 2019 : écrire des contenus que l'on lit et que l'on reprend, c'est mon premier métier.",
    "Chaque recommandation s'appuie sur la documentation officielle de Google, Bing, OpenAI, Anthropic ou Perplexity, ou sur une mesure faite sur votre site. Je ne promets ni position ni nombre de citations.",
    "Pour mesurer la visibilité dans les IA, j'utilise **Balise**, un outil que j'ai construit. Il relève les réponses des IA sur vos questions, les croise avec les données de la Search Console et de DataForSEO, et suit leur évolution dans le temps.",
  ],
  outils: ['Google Search Console', 'Screaming Frog', 'Semrush', 'Ahrefs', 'Looker Studio', 'Balise'],
  exemplesMissions:
    "SEO de sites média à fort trafic pour un groupe de presse professionnelle. Audits SEO complets (technique, contenu, popularité) et déploiement de la stratégie. Stratégie SEO, cocons sémantiques et campagnes Google Ads pour un organisme de formation.",
  modalites: [
    'Premier contact : un **diagnostic offert de 30 minutes**, à réserver en ligne.',
    'Devis détaillé envoyé après le diagnostic, avant toute intervention.',
    `Démarrage : ${availability.detail.charAt(0).toLowerCase()}${availability.detail.slice(1)}.`,
    'Sur place à Rennes et en déplacement, ou à distance.',
  ],
  zones: { titre: "J'interviens aussi à", liens: LOCAL_PAGES },
  faq: [
    {
      q: 'Quel consultant SEO choisir à Rennes ?',
      a: `Je suis consultant SEO et GEO basé à Rennes : je me déplace et je travaille aussi à distance. Avant de choisir, Google conseille de demander au consultant des exemples de travaux, s'il respecte les Google Search Essentials et quels résultats il attend, dans quel délai ([Google Search Central](${SRC_GOOGLE_SEO})). Voir aussi la page [consultant SEO à Rennes](/consultant-seo-rennes).`,
    },
    {
      q: 'Quel consultant GEO pour être cité par ChatGPT et les IA ?',
      a: "Un consultant GEO travaille sur deux plans : l'accès des robots des IA à votre site, et des contenus que les IA peuvent reprendre (réponses directes, sources, auteur identifié). Je fais les deux et je mesure le résultat question par question avec Balise. Personne ne peut garantir une citation : les IA choisissent leurs sources elles-mêmes.",
    },
    {
      q: 'Combien coûte un audit SEO ?',
      a: "Mon audit SEO et GEO coûte entre 800 et 2 500 € selon la taille du site et la profondeur d'analyse. Le prix est fixé dans un devis après le diagnostic offert. Pour des repères plus larges, voir [combien coûte une prestation SEO](/cout-prestation-seo).",
    },
    {
      q: 'Quelle différence entre un audit SEO et un audit GEO ?',
      a: "L'audit SEO regarde comment Google explore, comprend et classe vos pages. L'audit GEO regarde si les IA vous citent quand on leur pose les questions de vos clients, et quels sites elles citent à votre place. Chez moi, l'audit GEO fait partie de l'audit SEO et GEO : il n'est pas vendu seul.",
    },
    {
      q: 'Qui peut réaliser un audit GEO de mon site ?',
      a: "Un consultant qui maîtrise le SEO technique et qui sait mesurer les réponses des IA. Je réalise l'audit GEO dans le cadre de l'audit SEO et GEO : relevé des réponses sur une liste de questions, part de voix, sites cités, analyse des pages qui gagnent, plan d'action.",
    },
  ],
  liens: [
    { href: '/reponses/qu-est-ce-que-le-geo', label: "Qu'est-ce que le GEO (Generative Engine Optimization) ?" },
    { href: '/reponses/difference-seo-geo', label: 'Quelle différence entre SEO et GEO ?' },
    { href: '/reponses/difference-audit-seo-audit-geo', label: 'Quelle différence entre un audit SEO et un audit GEO ?' },
  ],
  sources: [
    { href: SRC_GOOGLE_IA, label: 'Google Search Central : fonctionnalités IA et votre site' },
    { href: SRC_OPENAI, label: 'OpenAI : robots et user-agents' },
    { href: SRC_GOOGLE_SEO, label: "Google Search Central : faire appel à un expert SEO" },
  ],
  schema: {
    '@type': 'Service',
    name: 'Consultant SEO et GEO',
    serviceType: 'Audit et accompagnement SEO et GEO',
    areaServed: { '@type': 'Country', name: 'France' },
    offers: [
      {
        '@type': 'Offer',
        name: 'Audit SEO et GEO',
        priceCurrency: 'EUR',
        priceSpecification: { '@type': 'PriceSpecification', minPrice: 800, maxPrice: 2500, priceCurrency: 'EUR' },
      },
      {
        '@type': 'Offer',
        name: 'Accompagnement SEO mensuel',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          minPrice: 500,
          maxPrice: 2000,
          priceCurrency: 'EUR',
          unitText: 'mois',
        },
      },
    ],
  },
  dates: getContentDates([`app${PATH}/page.tsx`]),
}

export default function Page() {
  return <FicheLayout data={data} />
}
