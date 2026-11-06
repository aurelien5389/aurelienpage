import type { Metadata } from 'next'
import { seoTitle } from '@/lib/titles'
import FicheLayout, { type FicheData } from '@/components/FicheLayout'
import { getContentDates } from '@/lib/content-dates'
import { PARCOURS, BALISE, METHODE, DIAGNOSTIC, DEMARRAGE, FINANCEMENT_CONSEIL, PROVIDER_AREA } from '@/lib/fiche-commun'

const PATH = '/accompagnement-seo'
const URL = `https://aurelienpage.fr${PATH}`
const TITLE = 'Accompagnement SEO mensuel : suivi, reporting et tarifs'
const DESCRIPTION =
  'Suivi SEO et GEO mensuel de 500 à 2 000 € par mois, sans contrat annuel imposé. Un seul interlocuteur, du premier audit au reporting mensuel. Laval, Rennes ou à distance.'

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: seoTitle(TITLE), description: DESCRIPTION, url: URL },
}

const data: FicheData = {
  path: PATH,
  parent: { name: 'Prestations', path: '/prestations' },
  nom: 'Accompagnement SEO mensuel',
  h1: 'Accompagnement SEO mensuel',
  resume:
    "Je suis votre **consultant SEO freelance** au mois, depuis Laval et Rennes ou à distance. Chaque mois : optimisations, contenus, suivi des positions et des citations dans les IA, reporting. **De 500 à 2 000 € par mois** selon le périmètre, sans contrat annuel imposé, après un audit SEO et GEO initial.",
  identite: [
    { label: 'Public', valeur: 'Entreprises B2B et B2C, e-commerce, services, professions libérales, collectivités' },
    { label: 'Prérequis', valeur: 'Un audit SEO et GEO initial, qui sert de base à la stratégie' },
    { label: 'Durée', valeur: "Mensuelle, sans contrat annuel imposé, résiliable avec un préavis d'un mois. Je recommande 6 mois au minimum pour juger les résultats" },
    { label: 'Format', valeur: 'À distance, avec une réunion mensuelle en visioconférence, ou sur place à Laval et à Rennes' },
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
  pourquoiTitre: 'Pourquoi un accompagnement plutôt qu\'un audit seul ?',
  pourquoi: [
    "Un audit identifie les problèmes. Beaucoup restent ensuite dans un tiroir : l'équipe manque de temps, les priorités changent, le rapport vieillit. L'accompagnement sert à les résoudre, mois après mois, et à continuer de construire votre visibilité.",
    "Ce n'est pas un abonnement à des exports de positions. Chaque mois, il y a du travail réel sur votre site : technique, contenus, liens, et la visibilité dans les réponses des IA, qui bouge vite.",
  ],
  sections: [
    {
      id: 'definition',
      titre: "Qu'est-ce qu'un accompagnement SEO mensuel ?",
      paragraphes: [
        "Un **accompagnement SEO mensuel** est une mission de référencement naturel menée dans la durée : chaque mois, un consultant applique ou fait appliquer les actions prévues, mesure leurs effets et ajuste le plan. Il fait suite à un audit, qui a dit quoi corriger et dans quel ordre.",
        "On parle aussi de **suivi SEO mensuel**. La différence avec un audit tient en un mot : l'audit décrit, l'accompagnement fait.",
      ],
    },
    {
      id: 'contenu',
      titre: 'Que contient un mois de suivi SEO ?',
      paragraphes: ["Cinq volets, dont le poids change selon le mois et selon ce que l'audit a montré."],
      tableau: {
        colonnes: ['Volet', 'Ce qui est fait', 'Ce que vous recevez'],
        lignes: [
          ['Technique', "Indexation, erreurs d'exploration, redirections, Core Web Vitals, données structurées", 'Corrections faites, ou tickets prêts pour votre développeur'],
          ['Contenus', 'Pages existantes reprises, nouvelles pages, maillage interne', 'Pages publiées, ou briefs détaillés pour vos rédacteurs'],
          ['Popularité', 'Liens depuis des sites pertinents de votre secteur, mentions, annuaires utiles', 'Liste des liens obtenus et des demandes en cours'],
          ['Visibilité dans les IA', 'Relevé des réponses de ChatGPT, Perplexity, Gemini et Google sur vos questions', 'Part de voix du mois, comparée au mois précédent'],
          ['Pilotage', 'Analyse des données, choix des priorités du mois suivant', 'Reporting mensuel et réunion de suivi'],
        ],
      },
    },
    {
      id: 'reporting',
      titre: 'Que contient le reporting SEO mensuel ?',
      paragraphes: ['Le reporting tient en quelques pages, et il se lit sans connaître le SEO.'],
      liste: [
        '**Impressions et clics par page**, relevés dans la Search Console, comparés au mois précédent et à la même période un an plus tôt.',
        '**Positions** sur les requêtes choisies ensemble au départ.',
        '**Trafic organique et demandes reçues** (formulaires, appels, ventes), relevés dans Google Analytics 4.',
        '**Citations dans les IA**, mesurées sur la même liste de questions chaque mois.',
        '**Actions menées**, avec leur date, pour relier une évolution à sa cause.',
        '**Plan du mois suivant**.',
      ],
      suite: ['Le choix des indicateurs est expliqué dans [reporting SEO : les KPIs qui comptent](/blog/reporting-seo-kpis).'],
    },
    {
      id: 'prix',
      titre: "Qu'est-ce qui fait varier le prix d'un accompagnement SEO ?",
      paragraphes: ["Trois choses, que l'audit initial permet de mesurer avant le devis."],
      tableau: {
        colonnes: ['Critère', 'Vers 500 € par mois', 'Vers 2 000 € par mois'],
        lignes: [
          ['Taille du site', 'Site vitrine, quelques dizaines de pages', 'Site e-commerce ou éditorial, plusieurs centaines de pages'],
          ['Mise en œuvre', 'Votre équipe applique mes recommandations', "J'interviens directement sur le site et je produis les contenus"],
          ['Concurrence', 'Marché local ou de niche', 'Marché national disputé'],
        ],
      },
    },
    {
      id: 'e-commerce',
      titre: 'Et pour un site e-commerce ?',
      paragraphes: [
        "L'accompagnement SEO d'un site e-commerce suit le même déroulé, avec des priorités propres : les pages de catégories, qui portent l'essentiel des recherches ; les fiches produits qui se ressemblent ou se concurrencent ; les filtres et les tris, qui créent des milliers d'adresses inutiles à explorer ; les produits épuisés ou saisonniers.",
        'Le calendrier compte aussi : une catégorie se prépare plusieurs mois avant sa saison, pas pendant.',
      ],
    },
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
      q: 'Quelle différence entre un audit SEO et un accompagnement SEO ?',
      a: "L'audit est ponctuel : il mesure le site et classe les actions à mener. L'accompagnement est mensuel : il applique ces actions, mesure leurs effets et ajuste. Le premier précède toujours le second. Voir l'[audit SEO : méthode complète](/blog/audit-seo).",
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
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
    { href: '/consultant-seo-laval', label: 'Consultant SEO à Laval' },
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
