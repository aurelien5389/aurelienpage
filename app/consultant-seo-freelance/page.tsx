import type { Metadata } from 'next'
import FicheLayout, { type FicheData } from '@/components/FicheLayout'
import { getContentDates } from '@/lib/content-dates'
import { SRC, PARCOURS, BALISE, METHODE, DIAGNOSTIC, DEMARRAGE, FINANCEMENT_CONSEIL, PROVIDER_AREA } from '@/lib/fiche-commun'

const PATH = '/consultant-seo-freelance'
const URL = `https://aurelienpage.fr${PATH}`
const TITLE = 'Consultant SEO freelance : tarifs, déroulé, zone d’intervention · Aurélien PAGE'
const DESCRIPTION =
  "Combien coûte un consultant SEO freelance ? Mes tarifs : audit SEO et GEO de 800 à 2 500 €, suivi mensuel de 500 à 2 000 €, sans contrat annuel. Rennes ou à distance."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
}

const data: FicheData = {
  path: PATH,
  parent: { name: 'Prestations', path: '/prestations' },
  nom: 'Consultant SEO freelance',
  h1: 'Consultant SEO freelance',
  resume:
    "**Combien coûte un consultant SEO freelance ?** Chez moi : un **audit SEO et GEO de 800 à 2 500 €** selon la taille du site, puis un **suivi mensuel de 500 à 2 000 €**, sans contrat annuel imposé. Ce sont mes tarifs, fixés dans un devis après un diagnostic offert de 30 minutes. Basé à Rennes, j'interviens à distance et en déplacement.",
  identite: [
    { label: 'Public', valeur: 'PME et ETI, e-commerce, organismes de formation, médias, indépendants, agences qui ont besoin d’un renfort SEO' },
    { label: 'Prérequis', valeur: 'Un site en ligne. Pour le suivi mensuel : un audit SEO et GEO initial' },
    { label: 'Durée', valeur: 'Audit : délai précisé dans le devis selon la taille du site. Suivi : mensuel, résiliable avec un préavis d’un mois' },
    { label: 'Format', valeur: 'À distance (visioconférence, accès à vos outils), ou sur place à Rennes, en Bretagne et dans les grandes villes (frais de déplacement en supplément)' },
    {
      label: 'Tarif',
      valeur:
        '**Audit SEO et GEO : 800 à 2 500 €** selon la taille du site. **Suivi mensuel : 500 à 2 000 € par mois**, au-delà sur devis. Google Ads, formation, chef de projet : sur devis. Devis détaillé avant toute intervention',
    },
    { label: 'Financement', valeur: FINANCEMENT_CONSEIL },
    {
      label: 'Livrables',
      valeur:
        "Rapport d'audit avec actions classées par priorité, relevé de visibilité dans les IA, plan d'action. En suivi : optimisations ou recommandations prêtes à appliquer, reporting mensuel",
    },
  ],
  pourquoiTitre: 'Pourquoi un consultant SEO freelance plutôt qu’une agence',
  pourquoi: [
    "Vous avez un seul interlocuteur. La personne qui audite votre site est celle qui écrit les recommandations, les applique ou les explique à votre équipe, et vous rend compte chaque mois. Rien ne se perd entre un commercial, un chef de projet et un consultant.",
    `Vous payez le temps d'un consultant, pas une structure. Avant de choisir, Google conseille de demander au prestataire des exemples de travaux, s'il respecte les Google Search Essentials et quels résultats il attend, dans quel délai ([Google Search Central](${SRC.googleSeo.href})). Posez-moi ces questions lors du diagnostic offert : c'est à cela qu'il sert.`,
    "Le périmètre reste à votre main. Un audit seul, un suivi de quelques mois, une formation de votre équipe pour reprendre le SEO en interne : chaque format a son devis, et vous pouvez arrêter avec un préavis d'un mois.",
  ],
  derouleTitre: 'Déroulé de la mission',
  deroule: [
    {
      titre: 'Diagnostic offert',
      duree: '30 minutes',
      livrable: "premières pistes et périmètre de l'audit",
      texte: "Nous regardons ensemble votre site, vos objectifs et vos concurrents. Je vous dis si un audit est utile et ce qu'il couvrira.",
    },
    {
      titre: 'Audit SEO et GEO',
      duree: 'selon la taille du site, précisée dans le devis',
      livrable: 'liste des blocages classés par priorité, carte des mots-clés, relevé de visibilité dans les IA',
      texte:
        "Exploration du site, indexation, Core Web Vitals, accès des robots de Google, de Bing et des IA ; requêtes qui comptent pour votre activité ; relevé de qui est cité par ChatGPT, Perplexity, Gemini et Google sur les questions de vos clients.",
    },
    {
      titre: "Restitution et plan d'action",
      duree: 'une réunion',
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
  pourquoiMoi: [PARCOURS, METHODE, BALISE],
  outils: ['Google Search Console', 'Google Analytics 4', 'Screaming Frog', 'Semrush', 'Ahrefs', 'Looker Studio', 'Balise'],
  exemplesMissions:
    "SEO de sites média à fort trafic pour un groupe de presse professionnelle. Audits SEO complets (technique, contenu, popularité) et déploiement de la stratégie. Stratégie SEO, cocons sémantiques et campagnes Google Ads pour un organisme de formation.",
  modalites: [
    DIAGNOSTIC,
    'Devis détaillé envoyé après le diagnostic, avant toute intervention.',
    DEMARRAGE,
    'À distance, ou sur place à Rennes et en déplacement.',
    "Préavis d'un mois pour arrêter un suivi mensuel, sans pénalité.",
  ],
  faq: [
    {
      q: 'Combien coûte un consultant SEO freelance ?',
      a: "Chez moi, un audit SEO et GEO coûte de 800 à 2 500 € selon la taille du site, et un suivi mensuel de 500 à 2 000 € par mois selon le périmètre, au-delà sur devis. Ce sont mes tarifs, pas une moyenne du marché. Les repères plus larges sont dans [combien coûte une prestation SEO](/cout-prestation-seo).",
    },
    {
      q: 'Facturez-vous à la journée ou au projet ?',
      a: "Au projet pour l'audit, au mois pour le suivi. Je n'affiche pas de tarif journalier : une mission ponctuelle (migration, chute de trafic, formation d'une équipe) fait l'objet d'un devis après le diagnostic offert, avec un périmètre et des livrables précis.",
    },
    {
      q: 'Travaillez-vous en dehors de Rennes ?',
      a: "Oui. La plupart des missions se font à distance, avec une réunion mensuelle en visioconférence. Je me déplace à Rennes, en Bretagne et dans les grandes villes, avec des frais de déplacement en supplément. La page [consultant SEO à Rennes](/consultant-seo-rennes) décrit l'intervention sur place.",
    },
    {
      q: "Y a-t-il une durée minimale d'engagement ?",
      a: "Non. Pas de contrat annuel : le suivi mensuel est résiliable avec un préavis d'un mois. Je recommande 6 mois au minimum pour juger des résultats, car les actions SEO mettent du temps à produire leurs effets : voir [combien de temps pour voir les résultats du SEO](/reponses/combien-de-temps-resultats-seo).",
    },
    {
      q: 'Combien coûte un audit SEO ?',
      a: "De 800 à 2 500 € selon la taille du site, la profondeur demandée et le volet GEO. Le prix est fixé dans un devis après le diagnostic offert. Ce qui fait varier le prix est détaillé dans [combien coûte un audit SEO](/reponses/combien-coute-un-audit-seo).",
    },
    {
      q: 'Proposez-vous aussi le GEO et Google Ads ?',
      a: "Oui. L'audit couvre le SEO et le GEO (visibilité dans ChatGPT, Perplexity, Gemini et les AI Overviews), et je pilote des campagnes Google Ads sur devis : voir [traffic manager SEA](/prestations/traffic-manager-sea). Les formations SEO et GEO se font sur votre site, en individuel ou en équipe.",
    },
  ],
  liens: [
    { href: '/consultant-seo-a-distance', label: 'Consultant SEO à distance, partout en France' },
    { href: '/blog/choisir-consultant-seo-geo', label: 'Comment choisir un consultant SEO ou GEO ?' },
    { href: '/reponses/combien-coute-un-audit-seo', label: 'Combien coûte un audit SEO ?' },
    { href: '/cout-prestation-seo', label: 'Combien coûte une prestation SEO ? Repères du marché' },
    { href: '/pourquoi-consultant-seo', label: 'Pourquoi faire appel à un consultant SEO ?' },
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
    { href: '/accompagnement-seo', label: 'Accompagnement SEO mensuel' },
  ],
  sources: [SRC.googleSeo],
  schema: {
    '@type': 'Service',
    name: 'Consultant SEO freelance',
    serviceType: 'Audit et accompagnement SEO et GEO en freelance',
    areaServed: PROVIDER_AREA,
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
