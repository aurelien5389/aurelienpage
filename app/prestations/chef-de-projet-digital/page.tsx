import type { Metadata } from 'next'
import FicheLayout, { type FicheData } from '@/components/FicheLayout'
import { getContentDates } from '@/lib/content-dates'
import { PARCOURS, DIAGNOSTIC, DEMARRAGE, FINANCEMENT_CONSEIL, PROVIDER_AREA } from '@/lib/fiche-commun'

const PATH = '/prestations/chef-de-projet-digital'
const URL = `https://aurelienpage.fr${PATH}`
const TITLE = 'Chef de projet digital freelance à Rennes · Aurélien PAGE'
const DESCRIPTION =
  'Chef de projet digital freelance à Rennes : cadrage et pilotage de refontes, migrations SEO, coordination des prestataires, reporting. Mission projet ou mensuelle, sur devis.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
}

const data: FicheData = {
  path: PATH,
  parent: { name: 'Prestations', path: '/prestations' },
  nom: 'Chef de projet digital',
  h1: 'Chef de projet digital',
  resume:
    "**Chef de projet digital freelance** basé à Rennes : je cadre et pilote vos projets web, de la refonte à la migration SEO, je coordonne prestataires et équipes internes et je mets en place le reporting. Pour les PME et les équipes sans chef de projet dédié. Mission projet ou accompagnement mensuel, **sur devis**.",
  identite: [
    { label: 'Public', valeur: 'PME, organisations en transformation digitale, équipes sans chef de projet dédié' },
    { label: 'Prérequis', valeur: 'Un projet identifié, même encore flou : le cadrage sert à le préciser' },
    { label: 'Durée', valeur: 'Selon le projet, précisée dans le devis. Mission projet ou accompagnement mensuel' },
    { label: 'Format', valeur: 'Sur place à Rennes et en déplacement, ou à distance' },
    { label: 'Tarif', valeur: '**Sur devis**, selon la durée et la complexité du projet' },
    { label: 'Financement', valeur: FINANCEMENT_CONSEIL },
    { label: 'Livrables', valeur: 'Note de cadrage, planning, comptes rendus de suivi, recette, tableau de bord des indicateurs' },
  ],
  pourquoiTitre: 'Pourquoi un chef de projet digital',
  pourquoi: [
    "Une refonte de site réunit souvent une agence, un développeur, un rédacteur, la direction et le service marketing. Sans pilote, chacun avance de son côté, les délais glissent et des décisions se prennent trop tard, au moment de la mise en ligne.",
    "La migration est le moment le plus risqué : URL modifiées sans redirection, contenus perdus, suivi analytics coupé. Un projet piloté avec un regard SEO protège le trafic que vous avez déjà construit.",
  ],
  derouleTitre: 'Déroulé de la mission',
  deroule: [
    {
      titre: 'Cadrage',
      duree: 'début de mission',
      livrable: 'note de cadrage : objectifs, périmètre, indicateurs, planning',
      texte: 'Objectifs, contraintes, parties prenantes, budget, critères de réussite.',
    },
    {
      titre: 'Coordination',
      duree: 'pendant tout le projet',
      livrable: 'comptes rendus et suivi des décisions',
      texte: "Prestataires et équipes internes, priorités, arbitrages, en méthode agile ou par étapes selon votre organisation.",
    },
    {
      titre: 'Recette et mise en ligne',
      duree: 'fin de projet',
      livrable: 'cahier de recette, plan de redirections, contrôle après mise en ligne',
      texte: "Vérification des pages, des formulaires, du suivi analytics, des redirections 301 et de l'indexation.",
    },
    {
      titre: 'Bilan et reporting',
      duree: 'après la mise en ligne',
      livrable: 'tableau de bord des indicateurs',
      texte: "Mesure des résultats par rapport aux objectifs du cadrage, et suite à donner.",
    },
  ],
  pourquoiMoi: [
    PARCOURS,
    "J'ai mené la refonte de l'arborescence d'un site WordPress, encadré une équipe de rédacteurs et mis en place des reportings dans Looker Studio. Je parle le langage des développeurs, des rédacteurs et de la direction.",
    'Mon regard SEO sert à chaque étape : structure des URL, redirections, contenus repris, suivi de la Search Console avant et après la mise en ligne.',
  ],
  outils: ['Notion', 'Airtable', 'Google Workspace', 'Looker Studio', 'Google Search Console'],
  exemplesMissions:
    "Refonte de l'arborescence d'un site WordPress et reporting dans Looker Studio pour un organisme de formation. Management d'une équipe de rédacteurs : brief, relecture, validation.",
  modalites: [DIAGNOSTIC, 'Devis détaillé envoyé après le diagnostic, avant toute intervention.', DEMARRAGE],
  faq: [
    {
      q: 'Quel chef de projet digital freelance choisir à Rennes ?',
      a: "Je suis chef de projet digital freelance basé à Rennes, sur place ou à distance. Ma particularité : un regard SEO et SEA sur chaque projet, pour ne pas perdre de trafic pendant une refonte ou une migration.",
    },
    {
      q: 'Que comprend le pilotage d\'une migration SEO ?',
      a: "Inventaire des URL existantes, plan de redirections 301, reprise des contenus, contrôle des balises et des données structurées, suivi de l'indexation et du trafic dans la Search Console après la mise en ligne.",
    },
    {
      q: 'Combien coûte un chef de projet digital freelance ?',
      a: 'Chez moi, le tarif est fixé sur devis, selon la durée et la complexité du projet, après un diagnostic offert de 30 minutes.',
    },
    {
      q: 'Travaillez-vous en méthode agile ?',
      a: "Oui, quand l'organisation s'y prête : cycles courts, priorités revues régulièrement. Pour un projet plus linéaire, je pilote par étapes avec des jalons fixés au cadrage.",
    },
  ],
  liens: [
    { href: '/blog/codes-http-seo', label: 'Codes HTTP et redirections : ce qui compte en SEO' },
    { href: '/prestations/consultant-seo-geo', label: 'Consultant SEO et GEO' },
  ],
  sources: [],
  schema: {
    '@type': 'Service',
    name: 'Chef de projet digital',
    serviceType: 'Pilotage de projets web',
    areaServed: PROVIDER_AREA,
  },
  dates: getContentDates([`app${PATH}/page.tsx`]),
}

export default function Page() {
  return <FicheLayout data={data} />
}
