import type { Metadata } from 'next'
import FicheLayout, { type FicheData } from '@/components/FicheLayout'
import { getContentDates } from '@/lib/content-dates'
import { PARCOURS, BALISE, METHODE, DIAGNOSTIC, DEMARRAGE, FINANCEMENT_CONSEIL, PROVIDER_AREA } from '@/lib/fiche-commun'

const PATH = '/accompagnement-seo'
const URL = `https://aurelienpage.fr${PATH}`
const TITLE = 'Accompagnement SEO mensuel par un consultant freelance · Aurélien PAGE'
const DESCRIPTION =
  'Suivi SEO et GEO mensuel de 500 à 2 000 € par mois, sans contrat annuel imposé. Un seul interlocuteur, du premier audit au reporting. Rennes ou à distance.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
}

const data: FicheData = {
  path: PATH,
  parent: { name: 'Prestations', path: '/prestations' },
  nom: 'Accompagnement SEO mensuel',
  h1: 'Accompagnement SEO mensuel',
  resume:
    "Je suis votre **consultant SEO freelance** au mois, depuis Rennes ou à distance. Chaque mois : optimisations, contenus, suivi des positions et des citations dans les IA, reporting. **De 500 à 2 000 € par mois** selon le périmètre, sans contrat annuel imposé, après un audit SEO et GEO initial.",
  identite: [
    { label: 'Public', valeur: 'Entreprises B2B et B2C, e-commerce, services, professions libérales, collectivités' },
    { label: 'Prérequis', valeur: 'Un audit SEO et GEO initial, qui sert de base à la stratégie' },
    { label: 'Durée', valeur: "Mensuelle, sans contrat annuel imposé, résiliable avec un préavis d'un mois. Je recommande 6 mois au minimum pour juger les résultats" },
    { label: 'Format', valeur: 'À distance, avec une réunion mensuelle en visioconférence ou sur place à Rennes' },
    {
      label: 'Tarif',
      valeur:
        "**500 à 2 000 € par mois** selon le périmètre, au-delà sur devis. Audit initial : 800 à 2 500 € selon la taille du site. Devis détaillé avant toute intervention",
    },
    { label: 'Financement', valeur: FINANCEMENT_CONSEIL },
    {
      label: 'Livrables',
      valeur: "Plan d'action sur 6 à 12 mois, optimisations ou recommandations prêtes à appliquer, contenus ou briefs, reporting mensuel",
    },
  ],
  pourquoiTitre: 'Pourquoi un accompagnement plutôt qu\'un audit seul',
  pourquoi: [
    "Un audit identifie les problèmes. Beaucoup restent ensuite dans un tiroir : l'équipe manque de temps, les priorités changent, le rapport vieillit. L'accompagnement sert à les résoudre, mois après mois, et à continuer de construire votre visibilité.",
    "Ce n'est pas un abonnement à des exports de positions. Chaque mois, il y a du travail réel sur votre site : technique, contenus, liens, et la visibilité dans les réponses des IA, qui bouge vite.",
  ],
  derouleTitre: "Déroulé de l'accompagnement",
  deroule: [
    {
      titre: 'Audit initial',
      duree: 'selon la taille du site, précisée dans le devis',
      livrable: "rapport d'audit SEO et GEO avec priorités",
      texte: "Diagnostic technique, sémantique et de popularité, analyse des concurrents, relevé de votre visibilité dans les IA. Voir l'[audit SEO et GEO](/prestations/consultant-seo-geo).",
    },
    {
      titre: 'Stratégie',
      duree: 'premier mois',
      livrable: "plan d'action sur 6 à 12 mois, validé avec vous",
      texte: 'Mots-clés cibles, architecture de contenu, actions techniques prioritaires, objectifs de trafic, de positions et de citations.',
    },
    {
      titre: 'Exécution mensuelle',
      duree: 'chaque mois',
      livrable: 'optimisations réalisées ou recommandations prêtes à appliquer',
      texte:
        "Optimisation des pages existantes, production de contenus ou briefs pour vos équipes, suivi technique (indexation, Core Web Vitals, erreurs d'exploration), liens depuis des sources pertinentes de votre secteur, structuration des contenus pour les IA.",
    },
    {
      titre: 'Reporting et ajustement',
      duree: 'fin de chaque mois',
      livrable: 'compte rendu mensuel et plan du mois suivant',
      texte: 'Évolution des positions, du trafic organique et des citations dans les IA, actions menées, points de blocage. La stratégie suit les données.',
    },
  ],
  pourquoiMoi: [
    PARCOURS,
    "Vous avez un seul interlocuteur. La personne qui audite est celle qui optimise et qui vous rend compte, sans perte d'information entre un commercial, un chef de projet et un consultant.",
    METHODE,
    BALISE,
  ],
  outils: ['Google Search Console', 'Google Analytics 4', 'Screaming Frog', 'Semrush', 'Ahrefs', 'Looker Studio', 'Balise'],
  exemplesMissions:
    "Suivi SEO de sites média à fort trafic pour un groupe de presse professionnelle, avec tableaux de bord GA4, Search Console et Looker Studio. Stratégie SEO continue pour un organisme de formation : mots-clés de longue traîne, cocons sémantiques, optimisation des pages formations, reporting mensuel.",
  modalites: [
    DIAGNOSTIC,
    "Audit initial, puis devis détaillé de l'accompagnement avant toute intervention.",
    DEMARRAGE,
    "J'interviens directement sur votre site (accès CMS) ou je transmets des recommandations à votre équipe technique : nous le décidons au départ.",
    "Préavis d'un mois pour arrêter, sans pénalité.",
  ],
  faq: [
    {
      q: 'Combien coûte un consultant SEO freelance ?',
      a: "Pour un suivi mensuel, je facture de 500 à 2 000 € par mois selon le périmètre, au-delà sur devis. L'audit initial coûte de 800 à 2 500 € selon la taille du site. Pour des repères plus larges, voir [combien coûte une prestation SEO](/cout-prestation-seo).",
    },
    {
      q: 'Combien coûte un accompagnement SEO mensuel ?',
      a: "Chez moi, de 500 à 2 000 € par mois. Le montant dépend du nombre de pages à travailler, du volume de contenus à produire et de la concurrence sur vos requêtes. Il est fixé dans un devis après l'audit initial.",
    },
    {
      q: "Y a-t-il un engagement de durée ?",
      a: "Non. Pas de contrat annuel imposé : l'accompagnement est résiliable avec un préavis d'un mois. Je recommande 6 mois au minimum pour juger des résultats.",
    },
    {
      q: 'Intervenez-vous directement sur mon site ?',
      a: "Les deux sont possibles. Si vous avez une équipe technique, je lui transmets des recommandations prêtes à appliquer. Sinon, j'interviens directement avec un accès à votre CMS.",
    },
    {
      q: 'Peut-on combiner accompagnement et formation ?',
      a: "Oui. Certains clients choisissent un accompagnement allégé et une [formation SEO](/formation-seo) de leur équipe, pour reprendre la main sur une partie des tâches.",
    },
  ],
  liens: [
    { href: '/reponses/combien-de-temps-resultats-seo', label: 'Combien de temps faut-il pour voir les résultats du SEO ?' },
    { href: '/prestations/consultant-seo-geo', label: 'Audit SEO et GEO : le point de départ' },
    { href: '/blog/reporting-seo-kpis', label: 'Reporting SEO : les indicateurs qui comptent' },
    { href: '/cout-prestation-seo', label: 'Combien coûte une prestation SEO ?' },
  ],
  sources: [],
  schema: {
    '@type': 'Service',
    name: 'Accompagnement SEO mensuel',
    serviceType: 'Accompagnement SEO et GEO mensuel',
    areaServed: PROVIDER_AREA,
    offers: {
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
  },
  dates: getContentDates([`app${PATH}/page.tsx`]),
}

export default function Page() {
  return <FicheLayout data={data} />
}
