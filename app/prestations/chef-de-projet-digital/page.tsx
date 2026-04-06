import type { Metadata } from 'next'
import PrestationDetail, { type PrestationData } from '@/components/PrestationDetail'

export const metadata: Metadata = {
  title: 'Chef de Projet Digital Freelance Rennes · Aurélien PAGE',
  description:
    "Cadrage, pilotage et coordination de projets digitaux : refonte, migration SEO, déploiement d'outils. Freelance à Rennes, remote. Diagnostic offert.",
  alternates: { canonical: 'https://aurelienpage.fr/prestations/chef-de-projet-digital' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://aurelienpage.fr/prestations/chef-de-projet-digital',
    title: 'Chef de Projet Digital Freelance Rennes · Aurélien PAGE',
    description: "Pilotage de projets digitaux. Refonte, migration SEO, déploiement d'outils. Freelance Rennes.",
    siteName: 'Aurélien PAGE',
  },
}

const data: PrestationData = {
  icon: '🗂️',
  h1: 'Chef de Projet Digital — Pilotage de projets web et transformation digitale',
  pitch:
    'Du cadrage à la livraison — coordination, pilotage et reporting pour vos projets digitaux transversaux.',
  pourQui: "PME, organisations en transformation digitale, équipes sans chef de projet dédié",
  missions: [
    'Cadrage et pilotage de projets web (refonte, migration SEO, lancement)',
    'Coordination des prestataires et équipes internes',
    'Définition des KPI et mise en place du reporting',
    "Déploiement d'outils digitaux et accompagnement au changement",
    'Gestion de projet en méthode Agile',
  ],
  outils: ['Notion', 'Airtable', 'Looker Studio', 'Google Workspace'],
  formats: ['Mission projet', 'Accompagnement mensuel'],
  serviceSchema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Chef de Projet Digital',
    provider: { '@type': 'Person', name: 'Aurélien PAGE', url: 'https://aurelienpage.fr' },
    areaServed: 'France',
    url: 'https://aurelienpage.fr/prestations/chef-de-projet-digital',
    description:
      "Cadrage et pilotage de projets digitaux : refonte de site, migration SEO, déploiement d'outils, coordination d'équipes.",
  },
}

export default function Page() {
  return <PrestationDetail data={data} />
}
