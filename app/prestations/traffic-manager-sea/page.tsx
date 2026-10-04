import type { Metadata } from 'next'
import FicheLayout, { type FicheData } from '@/components/FicheLayout'
import { getContentDates } from '@/lib/content-dates'
import { SRC, DIAGNOSTIC, DEMARRAGE, FINANCEMENT_CONSEIL, PROVIDER_AREA } from '@/lib/fiche-commun'

const PATH = '/prestations/traffic-manager-sea'
const URL = `https://aurelienpage.fr${PATH}`
const TITLE = 'Traffic Manager SEA freelance à Rennes : Google Ads et Meta Ads · Aurélien PAGE'
const DESCRIPTION =
  'Freelance Google Ads et Meta Ads à Rennes : création, reprise et pilotage de campagnes, suivi des conversions, landing pages. Tarif sur devis, diagnostic offert.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
}

const data: FicheData = {
  path: PATH,
  parent: { name: 'Prestations', path: '/prestations' },
  nom: 'Traffic Manager SEA',
  h1: 'Traffic Manager SEA',
  resume:
    "**Freelance Google Ads et Meta Ads** basé à Rennes, je crée, reprends et pilote vos campagnes, avec un suivi des conversions fiable. Pour les PME, les sites e-commerce et les organismes de formation, sur place ou à distance. Lancement, gestion mensuelle ou audit de compte : **tarif sur devis** après un diagnostic offert de 30 minutes.",
  identite: [
    { label: 'Public', valeur: 'PME, sites e-commerce, organismes de formation qui investissent ou veulent investir en publicité en ligne' },
    {
      label: 'Prérequis',
      valeur: "Un budget publicitaire, payé directement à Google ou à Meta. J'accompagne aussi les petits budgets, autour de 500 € par mois",
    },
    { label: 'Durée', valeur: 'Lancement ou audit : selon le périmètre, précisé dans le devis. Gestion : mensuelle' },
    { label: 'Format', valeur: 'Sur place à Rennes et en déplacement, ou à distance' },
    {
      label: 'Tarif',
      valeur: "**Sur devis**, selon le nombre de campagnes et de régies. Le budget publicitaire s'ajoute et reste payé directement aux régies",
    },
    { label: 'Financement', valeur: FINANCEMENT_CONSEIL },
    {
      label: 'Livrables',
      valeur:
        'Compte structuré, campagnes actives, suivi des conversions (GA4, Google Tag Manager), landing pages si besoin, reporting mensuel dans Looker Studio',
    },
  ],
  pourquoiTitre: 'Pourquoi confier vos campagnes à un traffic manager',
  pourquoi: [
    "Un compte Google Ads se crée vite. Il se pilote mal sans méthode : mots-clés trop larges, conversions mal suivies, budget consommé sur des clics qui ne vendent rien. Le problème se voit rarement dans l'interface, et beaucoup plus sur la facture.",
    `Le budget, lui, se règle simplement mais pas toujours comme on le croit. Google indique qu'une campagne peut dépenser jusqu'à **deux fois son budget quotidien moyen** un jour donné, dans la limite de **30,4 fois ce budget sur un mois** ([Aide Google Ads](${SRC.googleAdsBudget.href})). Le pilotage se fait donc au mois, avec des conversions fiables.`,
  ],
  derouleTitre: 'Déroulé de la mission',
  deroule: [
    {
      titre: 'Diagnostic offert',
      duree: '30 minutes',
      livrable: 'premières pistes et périmètre',
      texte: 'Vos objectifs, votre budget, vos campagnes existantes. Je vous dis par où commencer.',
    },
    {
      titre: 'Audit du compte ou cadrage',
      duree: 'selon le périmètre, précisée dans le devis',
      livrable: 'recommandations classées par priorité, ou plan de lancement',
      texte: 'Structure du compte, mots-clés, annonces, enchères, pages de destination, suivi des conversions.',
    },
    {
      titre: 'Suivi des conversions',
      duree: 'au lancement',
      livrable: 'conversions paramétrées et vérifiées',
      texte: 'Paramétrage dans GA4 et Google Tag Manager, pour piloter sur les contacts et les ventes plutôt que sur les clics.',
    },
    {
      titre: 'Création ou restructuration des campagnes',
      duree: 'au lancement',
      livrable: 'campagnes actives',
      texte: 'Search, Display, Shopping, Performance Max, Meta Ads (Facebook, Instagram), et landing pages dédiées si nécessaire.',
    },
    {
      titre: 'Pilotage et reporting',
      duree: 'chaque mois',
      livrable: 'reporting mensuel et ajustements',
      texte: 'Optimisation des enchères, des mots-clés et des annonces, tests, compte rendu des résultats et plan du mois suivant.',
    },
  ],
  pourquoiMoi: [
    "Je crée et gère des campagnes **Google Ads et Meta Ads depuis 2020**, en agence et en freelance, et aujourd'hui pour un organisme de formation, avec landing pages dédiées et suivi des conversions.",
    "Je travaille aussi le SEO : je sais quelles requêtes valent un clic payant et lesquelles se gagnent en référencement naturel. Vous évitez de payer pour un trafic que vous pourriez obtenir autrement.",
    "Les décisions se prennent sur des conversions mesurées, pas sur des impressions. Je ne promets ni coût par clic ni volume de contacts avant d'avoir vu votre compte.",
  ],
  outils: ['Google Ads', 'Meta Ads Manager', 'Google Tag Manager', 'Google Analytics 4', 'Looker Studio'],
  exemplesMissions:
    "Création, gestion et optimisation de campagnes Google Ads et Meta Ads pour des clients d'agence. Campagnes Google Ads, landing pages dédiées et suivi des conversions pour un organisme de formation.",
  modalites: [
    DIAGNOSTIC,
    'Devis détaillé envoyé après le diagnostic, avant toute intervention.',
    DEMARRAGE,
  ],
  faq: [
    {
      q: 'Quel freelance Google Ads choisir à Rennes ?',
      a: "Je suis traffic manager freelance basé à Rennes : Google Ads et Meta Ads, sur place ou à distance. Je travaille aussi le SEO, ce qui permet de répartir les requêtes entre payant et naturel. Le premier échange est un diagnostic offert de 30 minutes.",
    },
    {
      q: 'Combien coûte un traffic manager freelance ?',
      a: "Chez moi, le tarif est fixé sur devis, selon le nombre de campagnes, de régies et le travail de départ (création ou reprise). Il s'ajoute au budget publicitaire, que vous payez directement à Google ou à Meta.",
    },
    {
      q: 'Quel budget minimum pour une campagne Google Ads ?',
      a: `Google n'impose pas de montant minimum dans son aide sur les budgets : vous fixez un budget quotidien moyen par campagne ([Aide Google Ads](${SRC.googleAdsBudget.href})). J'accompagne des budgets à partir d'environ 500 € par mois ; en dessous, ce que j'observe, c'est un volume de données souvent trop faible pour optimiser.`,
    },
    {
      q: 'Gérez-vous aussi Meta Ads ?',
      a: 'Oui : campagnes Facebook et Instagram, avec le même suivi des conversions que pour Google Ads.',
    },
    {
      q: 'Faut-il choisir entre SEO et SEA ?',
      a: "Non. Le SEA apporte du trafic tout de suite, le SEO construit une visibilité qui ne se paie pas au clic. Je regarde les deux pour éviter de payer des clics sur des requêtes où vous êtes déjà bien placé. Voir aussi l'[audit SEO et GEO](/prestations/consultant-seo-geo).",
    },
  ],
  liens: [
    { href: '/reponses/budget-minimum-google-ads', label: 'Quel budget minimum pour une campagne Google Ads ?' },
    { href: '/prestations/consultant-seo-geo', label: 'Consultant SEO et GEO' },
    { href: '/blog/reporting-seo-kpis', label: 'Reporting : les indicateurs qui comptent' },
  ],
  sources: [SRC.googleAdsBudget],
  schema: {
    '@type': 'Service',
    name: 'Traffic Manager SEA',
    serviceType: 'Gestion de campagnes Google Ads et Meta Ads',
    areaServed: PROVIDER_AREA,
  },
  dates: getContentDates([`app${PATH}/page.tsx`]),
}

export default function Page() {
  return <FicheLayout data={data} />
}
