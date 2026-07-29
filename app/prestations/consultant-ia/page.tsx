import type { Metadata } from 'next'
import PrestationDetail, { type PrestationData } from '@/components/PrestationDetail'

export const metadata: Metadata = {
  title: 'Consultant IA Marketing · Claude AI, Make · Aurélien PAGE',
  description:
    "Déploiement d'agents IA, pipelines de contenu automatisés, prompting métier. Consultant IA freelance à Rennes. Diagnostic offert.",
  alternates: { canonical: 'https://aurelienpage.fr/prestations/consultant-ia' },
  openGraph: {
    title: 'Consultant IA Marketing · Claude AI, Make · Aurélien PAGE',
    description: "Intégration de l'IA générative dans vos workflows marketing. Agents IA, pipelines no-code. Freelance à Rennes.",
    url: 'https://aurelienpage.fr/prestations/consultant-ia',
  },
}

const data: PrestationData = {
  icon: '🤖',
  h1: "Consultant IA : intégration de l'IA générative dans vos workflows marketing",
  pitch:
    "L'IA générative intégrée dans vos workflows. Des gains concrets, sans jargon, avec des outils déjà éprouvés en conditions réelles.",
  pourQui: 'Équipes marketing, responsables contenus, DSI, organismes de formation',
  missions: [
    "Audit des usages IA existants et identification des opportunités métier",
    "Déploiement d'agents IA dans les workflows éditoriaux (Claude AI, ChatGPT)",
    "Construction de pipelines contenu IA via Make",
    "Prompting avancé et ingénierie de prompts métier",
    "Accompagnement à la transformation des pratiques marketing avec l'IA",
    "Veille automatisée sur les réponses IA génératives",
  ],
  outils: ['Claude AI (Anthropic)', 'ChatGPT', 'Make', 'Airtable', 'Notion', 'Google Sheets'],
  formats: ["Mission d'accompagnement", 'Atelier', 'Suivi mensuel'],
  serviceSchema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Consultant IA',
    provider: { '@type': 'Person', name: 'Aurélien PAGE', url: 'https://aurelienpage.fr' },
    areaServed: 'France',
    url: 'https://aurelienpage.fr/prestations/consultant-ia',
    description:
      "Déploiement d'agents IA, pipelines de contenu automatisés et prompting métier pour les équipes marketing.",
  },
}

export default function Page() {
  return <PrestationDetail data={data} />
}
