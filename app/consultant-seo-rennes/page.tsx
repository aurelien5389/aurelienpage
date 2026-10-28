import type { Metadata } from 'next'
import FicheLayout, { type FicheData } from '@/components/FicheLayout'
import { getContentDates } from '@/lib/content-dates'
import { getCityLinks } from '@/lib/internal-links'
import { SRC, PARCOURS, BALISE, METHODE, DIAGNOSTIC, DEMARRAGE, FINANCEMENT_CONSEIL } from '@/lib/fiche-commun'

const PATH = '/consultant-seo-rennes'
const URL = `https://aurelienpage.fr${PATH}`
const TITLE = 'Consultant SEO à Rennes : audit, suivi mensuel, GEO · Aurélien PAGE'
const DESCRIPTION =
  "Quel consultant SEO à Rennes ? Consultant SEO et GEO freelance basé à Rennes : audit SEO et GEO de 800 à 2 500 €, suivi mensuel dès 500 €, sur place ou à distance. Diagnostic offert."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
}

// Villes proches (maillage entre pages locales) + villes bretonnes et voisines
const ZONES = [
  ...getCityLinks('rennes').map((l) => ({ href: l.href, label: l.label.replace('Consultant SEO à ', '') })),
  { href: '/consultant-seo-nantes', label: 'Nantes' },
  { href: '/consultant-seo-laval', label: 'Laval' },
  { href: '/consultant-seo-lorient', label: 'Lorient' },
  { href: '/consultant-seo-quimper', label: 'Quimper' },
  { href: '/consultant-seo-dinard', label: 'Dinard' },
  { href: '/consultant-seo-bretagne', label: 'Toute la Bretagne' },
  { href: '/consultant-seo-pays-de-la-loire', label: 'Pays de la Loire' },
  { href: '/zones-intervention', label: "Toutes les zones d'intervention" },
]

const data: FicheData = {
  path: PATH,
  parent: { name: 'Consultant SEO & GEO', path: '/prestations/consultant-seo-geo' },
  nom: 'Rennes',
  h1: 'Consultant SEO à Rennes',
  resume:
    "**Quel consultant SEO à Rennes ?** Je suis **consultant SEO et GEO freelance, basé à Rennes**, disponible sur place en Ille-et-Vilaine comme à distance. Audit SEO et GEO de 800 à 2 500 € selon la taille du site, suivi mensuel de 500 à 2 000 €, formations sur devis. Premier échange : un diagnostic offert de 30 minutes, en visioconférence ou autour d'un café à Rennes.",
  identite: [
    { label: 'Public', valeur: 'Entreprises rennaises et bretonnes : PME, e-commerce, organismes de formation, cabinets, médias, collectivités' },
    { label: 'Prérequis', valeur: 'Un site en ligne' },
    { label: 'Durée', valeur: 'Audit : délai précisé dans le devis selon la taille du site. Suivi : mensuel, sans contrat annuel imposé' },
    { label: 'Format', valeur: 'Sur place à Rennes et dans un rayon d’une heure (Saint-Malo, Vitré, Fougères, Redon…), ou à distance' },
    { label: 'Zone', valeur: 'Rennes, Ille-et-Vilaine, Bretagne. Au-delà : à distance, ou en déplacement avec frais en supplément' },
    {
      label: 'Tarif',
      valeur:
        '**Audit SEO et GEO : 800 à 2 500 €** selon la taille du site. **Suivi mensuel : 500 à 2 000 € par mois**, au-delà sur devis. Formations SEO et GEO : sur devis. Devis détaillé avant toute intervention',
    },
    { label: 'Financement', valeur: FINANCEMENT_CONSEIL },
    {
      label: 'Livrables',
      valeur:
        "Rapport d'audit avec actions classées par priorité, relevé de visibilité dans les IA, plan d'action. En suivi : optimisations ou recommandations prêtes à appliquer, reporting mensuel",
    },
  ],
  pourquoiTitre: 'Pourquoi un consultant SEO à Rennes',
  pourquoi: [
    "Pour se voir. Un audit se restitue mieux autour d'une table, avec votre équipe technique et vos rédacteurs, qu'en pièce jointe. Je me déplace dans vos locaux à Rennes et en Ille-et-Vilaine pour la restitution et les points importants, le reste se fait à distance.",
    `Pour choisir en connaissance de cause. Google conseille de demander à un prestataire SEO des exemples de travaux, s'il respecte les Google Search Essentials et quels résultats il attend, dans quel délai ([Google Search Central](${SRC.googleSeo.href})). Le diagnostic offert sert à cela, et je ne promets ni position ni nombre de citations.`,
    `Pour couvrir Google et les IA en même temps. Les entreprises rennaises que je rencontre sont souvent bien placées sur Google et absentes des réponses de ChatGPT ou de Perplexity. Google rappelle qu'aucune optimisation spéciale n'est nécessaire pour ses fonctionnalités IA : une page indexée et éligible à un extrait suffit ([Google Search Central](${SRC.googleIa.href})). Le reste se joue sur l'accès des robots des IA et le format des pages, ce que l'audit vérifie.`,
  ],
  derouleTitre: 'Déroulé de la mission',
  deroule: [
    {
      titre: 'Diagnostic offert',
      duree: '30 minutes',
      livrable: "premières pistes et périmètre de l'audit",
      texte: "En visioconférence ou à Rennes. Nous regardons votre site, vos objectifs et vos concurrents locaux et nationaux. Je vous dis si un audit est utile et ce qu'il couvrira.",
    },
    {
      titre: 'Audit SEO et GEO',
      duree: 'selon la taille du site, précisée dans le devis',
      livrable: 'liste des blocages classés par priorité, carte des mots-clés, relevé de visibilité dans les IA',
      texte:
        "Exploration du site, indexation, Core Web Vitals, accès des robots de Google, de Bing et des IA ; requêtes qui comptent pour votre activité, y compris les requêtes locales (« à Rennes », « en Bretagne ») ; relevé de qui est cité par ChatGPT, Perplexity, Gemini et Google sur les questions de vos clients.",
    },
    {
      titre: "Restitution et plan d'action",
      duree: 'une réunion, dans vos locaux à Rennes ou à distance',
      livrable: "plan d'action classé par impact et par effort",
      texte: 'Je vous présente les résultats et les actions à mener. Vous pouvez les appliquer seul, avec votre équipe ou avec moi.',
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
    PARCOURS,
    "Je vis et je travaille à Rennes. Mes formations en marketing et en SEO ont été suivies ici (IEP de Rennes, Université Rennes 1), et c'est ici que j'ai fondé Audiaa, l'agence IA et No Code qui porte mes activités hors SEO.",
    METHODE,
    BALISE,
  ],
  outils: ['Google Search Console', 'Google Analytics 4', 'Google Business Profile', 'Screaming Frog', 'Semrush', 'Ahrefs', 'Looker Studio', 'Balise'],
  exemplesMissions:
    "SEO de sites média à fort trafic pour un groupe de presse professionnelle. Audits SEO complets (technique, contenu, popularité) et déploiement de la stratégie. Stratégie SEO, cocons sémantiques et campagnes Google Ads pour un organisme de formation.",
  modalites: [
    DIAGNOSTIC,
    'Devis détaillé envoyé après le diagnostic, avant toute intervention.',
    DEMARRAGE,
    'Rendez-vous dans vos locaux à Rennes et en Ille-et-Vilaine sans frais de déplacement ; au-delà, frais en supplément ou visioconférence.',
  ],
  zones: { titre: "J'interviens aussi à", liens: ZONES },
  faq: [
    {
      q: 'Quel consultant SEO choisir à Rennes ?',
      a: `Un consultant que vous pouvez interroger. Google conseille de demander des exemples de travaux, le respect des Google Search Essentials et les résultats attendus avec leur délai ([Google Search Central](${SRC.googleSeo.href})). Je réponds à ces questions lors du diagnostic offert, et je ne garantis ni position ni citation.`,
    },
    {
      q: 'Combien coûte un consultant SEO à Rennes ?',
      a: "Chez moi, un audit SEO et GEO coûte de 800 à 2 500 € selon la taille du site, et un suivi mensuel de 500 à 2 000 € par mois selon le périmètre. Les rendez-vous à Rennes et en Ille-et-Vilaine sont sans frais de déplacement. Le détail est dans [combien coûte un audit SEO](/reponses/combien-coute-un-audit-seo).",
    },
    {
      q: 'Vous déplacez-vous dans nos locaux ?',
      a: "Oui, à Rennes et dans un rayon d'une heure environ, pour le diagnostic, la restitution de l'audit et les réunions importantes. Le travail courant se fait à distance, avec un accès à vos outils et une réunion mensuelle en visioconférence si vous le préférez.",
    },
    {
      q: 'Travaillez-vous le SEO local (fiche Google Business Profile) ?',
      a: "Oui, quand votre activité dépend de requêtes locales : fiche d'établissement, cohérence des coordonnées sur les annuaires, pages locales, avis. L'audit le couvre si c'est pertinent pour vous. Les principes sont dans [SEO local et Google My Business](/blog/seo-local-google-my-business).",
    },
    {
      q: 'Faites-vous aussi du GEO à Rennes ?',
      a: "Oui. L'audit SEO et GEO relève si ChatGPT, Perplexity, Gemini et Google citent votre site sur les questions de vos clients, et qui ils citent à votre place. La page [consultant GEO à Rennes](/consultant-geo-rennes) décrit ce volet, et la méthode est dans [comment être cité par ChatGPT et Perplexity](/reponses/comment-etre-cite-par-chatgpt-et-perplexity).",
    },
    {
      q: 'Proposez-vous une formation SEO à Rennes ?',
      a: "Oui, dans vos locaux ou à distance, en individuel ou en équipe de 2 à 8 personnes, sur votre propre site. Modules de 2 à 4 heures, tarif sur devis, non finançable par le CPF ni par un OPCO. Détails sur la fiche [formation SEO](/formation-seo).",
    },
  ],
  liens: [
    { href: '/consultant-geo-rennes', label: 'Consultant GEO à Rennes : être cité par ChatGPT et les IA' },
    { href: '/reponses/combien-coute-un-audit-seo', label: 'Combien coûte un audit SEO ?' },
    { href: '/formation-seo', label: 'Formation SEO à Rennes ou à distance' },
    { href: '/blog/seo-local-google-my-business', label: 'SEO local et Google My Business' },
    { href: '/consultant-seo-freelance', label: 'Consultant SEO freelance : tarifs et déroulé' },
  ],
  sources: [SRC.googleSeo, SRC.googleIa],
  schema: {
    '@type': 'Service',
    name: 'Consultant SEO à Rennes',
    serviceType: 'Audit et accompagnement SEO et GEO',
    areaServed: [
      { '@type': 'City', name: 'Rennes' },
      { '@type': 'AdministrativeArea', name: 'Ille-et-Vilaine' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ],
    offers: [
      {
        '@type': 'Offer',
        name: 'Audit SEO et GEO',
        priceCurrency: 'EUR',
        priceSpecification: { '@type': 'PriceSpecification', minPrice: 800, maxPrice: 2500, priceCurrency: 'EUR' },
      },
      {
        '@type': 'Offer',
        name: 'Suivi SEO mensuel',
        priceCurrency: 'EUR',
        priceSpecification: { '@type': 'UnitPriceSpecification', minPrice: 500, maxPrice: 2000, priceCurrency: 'EUR', unitText: 'mois' },
      },
    ],
  },
  dates: getContentDates([`app${PATH}/page.tsx`]),
}

export default function Page() {
  return <FicheLayout data={data} />
}
