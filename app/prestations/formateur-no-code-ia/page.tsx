import type { Metadata } from 'next'
import PrestationDetail, { type PrestationData } from '@/components/PrestationDetail'

export const metadata: Metadata = {
  title: 'Formateur No Code & IA · Make, Airtable, Claude · Aurélien PAGE',
  description:
    'Formations no-code et IA générative pour équipes marketing : Make, Airtable, Claude AI. Présentiel Rennes ou distanciel. Diagnostic offert.',
  alternates: { canonical: 'https://aurelienpage.fr/prestations/formateur-no-code-ia' },
  openGraph: {
    title: 'Formateur No Code & IA · Make, Airtable, Claude · Aurélien PAGE',
    description: 'Formations Make, Airtable et Claude AI pour équipes marketing. Présentiel Rennes ou distanciel. Diagnostic offert.',
    url: 'https://aurelienpage.fr/prestations/formateur-no-code-ia',
  },
}

const data: PrestationData = {
  icon: '⚡',
  h1: 'Formateur No Code & IA : Make, Airtable, Claude AI pour vos équipes',
  pitch:
    "Des formations actionnables, sans prérequis technique. Vos équipes repartent avec des outils opérationnels dès le lendemain.",
  pourQui: 'Équipes marketing non-techniques, TPE/PME, organismes de formation, managers',
  missions: [
    'Formation à Make : automatisation de workflows sans code',
    'Formation à Airtable : bases de données et CRM métier',
    "Formation à Claude AI et ChatGPT : prompting, agents, cas d'usage métier",
    '« IA dans le marketing digital » : atelier pratique',
    'Construction de ressources pédagogiques sur-mesure',
    'Accompagnement post-formation (support, documentation)',
  ],
  outils: ['Make', 'Airtable', 'Notion', 'Claude AI', 'ChatGPT', 'Google Sheets'],
  formats: ['Présentiel Rennes', 'Distanciel', 'Intra-entreprise', 'Demi-journée', 'Journée', 'Parcours multi-sessions'],
  serviceSchema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Formateur No Code & IA',
    provider: { '@type': 'Person', name: 'Aurélien PAGE', url: 'https://aurelienpage.fr' },
    areaServed: 'France',
    url: 'https://aurelienpage.fr/prestations/formateur-no-code-ia',
    description:
      'Formations no-code (Make, Airtable) et IA générative (Claude AI, ChatGPT) pour équipes marketing. Présentiel Rennes ou distanciel.',
  },
}

export default function Page() {
  return <PrestationDetail data={data} />
}
