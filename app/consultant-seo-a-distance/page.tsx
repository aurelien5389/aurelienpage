import type { Metadata } from 'next'
import FicheLayout, { type FicheData } from '@/components/FicheLayout'
import { getContentDates } from '@/lib/content-dates'
import { REGIONS, villesLiens } from '@/lib/zones'
import { SRC, PARCOURS, BALISE, METHODE, DIAGNOSTIC, DEMARRAGE, FINANCEMENT_CONSEIL, TARIF_ZONE, OUTILS_ZONE } from '@/lib/fiche-commun'

const PATH = '/consultant-seo-a-distance'
const URL = `https://aurelienpage.fr${PATH}`
const TITLE = 'Consultant SEO à distance : audit et suivi SEO et GEO partout en France · Aurélien PAGE'
const DESCRIPTION =
  "Consultant SEO et GEO freelance à distance, pour Paris, Lyon, Bordeaux, Lille, Toulouse et toute la France. Audit de 800 à 2 500 €, suivi dès 500 € par mois, en visioconférence. Diagnostic offert."
const REGION = REGIONS.find((r) => r.id === 'distance')!

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
}

const data: FicheData = {
  path: PATH,
  parent: { name: "Zones d'intervention", path: '/zones-intervention' },
  nom: 'À distance',
  h1: 'Consultant SEO à distance, partout en France',
  resume:
    "**Un consultant SEO à distance, est-ce efficace ?** Oui : un audit SEO et GEO se fait sur vos données, pas dans vos locaux. Je suis **consultant SEO et GEO freelance basé à Laval et à Rennes** et j'accompagne à distance des entreprises de **Paris, Lyon, Bordeaux, Lille, Toulouse** et de toute la France. Audit de 800 à 2 500 €, suivi mensuel de 500 à 2 000 €, mêmes livrables que sur place.",
  identite: [
    { label: 'Public', valeur: 'PME, e-commerce, organismes de formation, médias, sites de services, partout en France' },
    { label: 'Prérequis', valeur: 'Un site en ligne et un accès à la Google Search Console (je vous guide pour le donner)' },
    { label: 'Format', valeur: 'Visioconférence, documents partagés, accès en lecture à vos outils. Déplacement ponctuel possible sur devis, frais compris' },
    { label: 'Tarif', valeur: TARIF_ZONE },
    { label: 'Financement', valeur: FINANCEMENT_CONSEIL },
    { label: 'Livrables', valeur: "Rapport d'audit, relevé de visibilité dans les IA, plan d'action classé par impact, reporting mensuel" },
  ],
  pourquoiTitre: 'Pourquoi le SEO et le GEO se travaillent bien à distance',
  pourquoi: [
    "Tout ce qu'un audit examine est accessible en ligne : l'exploration du site par un robot, l'indexation dans la Search Console et dans Bing Webmaster Tools, la vitesse des pages, les contenus, les liens. Le relevé GEO consiste à poser les questions de vos clients à ChatGPT, Perplexity, Claude, Gemini et Google : il se fait d'où que l'on soit.",
    "Ce qui fait la réussite d'une mission à distance, c'est l'organisation : un interlocuteur côté client, des accès donnés dès le départ, une réunion de restitution où l'on décide, puis un point mensuel. C'est ce cadre que je propose, avec des livrables écrits que votre équipe peut reprendre sans moi.",
    `Avant de choisir, Google conseille de demander au prestataire des exemples de travaux, s'il respecte les consignes de Google et quels résultats il attend, dans quel délai ([Google Search Central](${SRC.googleSeo.href})). Ces questions valent à distance comme en face à face : voir [comment choisir un consultant SEO ou GEO](/blog/choisir-consultant-seo-geo).`,
  ],
  derouleTitre: 'Comment se déroule une mission à distance',
  deroule: [
    {
      titre: 'Diagnostic offert en visioconférence',
      duree: '30 minutes',
      livrable: "premières pistes et périmètre de l'audit",
      texte: 'Nous regardons ensemble votre site, vos objectifs et vos concurrents, écran partagé.',
    },
    {
      titre: 'Accès aux outils',
      duree: 'au démarrage',
      livrable: 'liste des accès nécessaires',
      texte: 'Google Search Console, outil d’audience, CMS si j’interviens directement. Je vous envoie la marche à suivre pour chaque accès.',
    },
    {
      titre: 'Audit SEO et GEO',
      duree: 'selon la taille du site, précisée dans le devis',
      livrable: 'rapport d’audit et relevé de visibilité dans les IA',
      texte: 'Exploration, indexation, accès des robots de Google, de Bing et des IA, mots-clés, contenus, relevé de qui est cité par les IA sur les questions de vos clients.',
    },
    {
      titre: 'Restitution en visioconférence',
      duree: 'une réunion',
      livrable: "plan d'action classé par impact et par effort",
      texte: 'Avec les personnes qui appliqueront les actions : développeur, rédacteurs, direction. Vous repartez avec un plan écrit.',
    },
    {
      titre: 'Suivi mensuel (optionnel)',
      duree: 'chaque mois',
      livrable: 'reporting et point mensuel en visioconférence',
      texte: 'Mise en œuvre, contrôle des résultats, relevé de part de voix dans les IA, ajustement des priorités.',
    },
  ],
  pourquoiMoi: [PARCOURS, METHODE, BALISE],
  outils: OUTILS_ZONE,
  modalites: [
    DIAGNOSTIC,
    'Devis détaillé envoyé après le diagnostic. Aucun frais de déplacement, sauf rencontre sur place demandée.',
    DEMARRAGE,
  ],
  zones: { titre: 'Villes avec une page dédiée', liens: villesLiens(REGION) },
  faq: [
    {
      q: 'Peut-on faire un audit SEO entièrement à distance ?',
      a: "Oui. Les données viennent de votre site, de la Search Console, de Bing Webmaster Tools et des réponses des IA. Une rencontre n'apporte rien à l'analyse ; elle sert surtout à la restitution, qui se fait très bien en visioconférence.",
    },
    {
      q: 'Vous déplacez-vous à Paris ou à Lyon ?',
      a: "Ponctuellement, sur devis, frais compris : pour une restitution devant un comité, une formation en présentiel ou un atelier. La plupart des missions se déroulent entièrement à distance.",
    },
    {
      q: 'Comment travaille-t-on au quotidien avec un consultant à distance ?',
      a: "Par une réunion de lancement, des documents partagés, un canal d'échange (e-mail ou messagerie) et un point mensuel. Les recommandations sont écrites et classées par priorité pour que votre équipe puisse avancer entre deux réunions.",
    },
  ],
  liens: [
    { href: '/consultant-seo-freelance', label: 'Consultant SEO freelance : tarifs et déroulé' },
    { href: '/prestations/audit-geo', label: 'Audit GEO : votre visibilité dans les IA' },
    { href: '/accompagnement-seo', label: 'Accompagnement SEO mensuel' },
    { href: '/blog/choisir-consultant-seo-geo', label: 'Comment choisir un consultant SEO ou GEO ?' },
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
    { href: '/zones-intervention', label: "Toutes mes zones d'intervention" },
  ],
  sources: [SRC.googleSeo],
  schema: {
    '@type': 'Service',
    name: 'Consultant SEO et GEO à distance',
    serviceType: 'Audit et accompagnement SEO et GEO',
    areaServed: { '@type': 'Country', name: 'France' },
  },
  dates: getContentDates([`app${PATH}/page.tsx`]),
}

export default function Page() {
  return <FicheLayout data={data} />
}
