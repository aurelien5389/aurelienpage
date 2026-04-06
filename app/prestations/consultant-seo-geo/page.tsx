import type { Metadata } from 'next'
import PrestationDetail, { type PrestationData } from '@/components/PrestationDetail'

export const metadata: Metadata = {
  title: 'Consultant SEO & GEO Rennes · Aurélien PAGE',
  description:
    'Audit SEO technique, cocons sémantiques, optimisation GEO pour les moteurs IA. Freelance basé à Rennes, interventions remote. Diagnostic offert.',
  alternates: { canonical: 'https://aurelienpage.fr/prestations/consultant-seo-geo' },
  openGraph: {
    title: 'Consultant SEO & GEO Rennes · Aurélien PAGE',
    description: 'Audit SEO technique, cocons sémantiques, optimisation GEO pour les moteurs IA. Freelance basé à Rennes. Diagnostic offert.',
    url: 'https://aurelienpage.fr/prestations/consultant-seo-geo',
  },
}

const data: PrestationData = {
  icon: '🔍',
  h1: 'Consultant SEO & GEO — Audit, stratégie et visibilité organique',
  pitch:
    'Une visibilité organique qui dure — sur les moteurs de recherche comme dans les IA génératives (ChatGPT, Perplexity, Google AI Overviews).',
  pourQui: 'Entreprises B2B, organismes de formation, médias, e-commerce',
  missions: [
    'Audit technique complet (crawl, Core Web Vitals, structure)',
    'Stratégie éditoriale & cocons sémantiques',
    'Optimisation on-page (balises, maillage, Schema)',
    'Optimisation GEO : visibilité dans ChatGPT, Perplexity, Google AI Overviews',
    'Audit de visibilité dans les outils IA génératifs',
    'Stratégie de contenu orientée E-E-A-T',
    'Suivi de positions & reporting mensuel',
  ],
  outils: ['SEMrush', 'Ahrefs', 'Screaming Frog', 'Search Console', 'Looker Studio', 'ChatGPT', 'Perplexity'],
  formats: ['Audit ponctuel', 'Suivi mensuel', 'Prestation projet'],
  serviceSchema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Consultant SEO & GEO',
    provider: { '@type': 'Person', name: 'Aurélien PAGE', url: 'https://aurelienpage.fr' },
    areaServed: 'France',
    url: 'https://aurelienpage.fr/prestations/consultant-seo-geo',
    description:
      'Audit SEO technique, stratégie de contenus, cocons sémantiques et optimisation GEO pour les moteurs IA génératifs.',
  },
}

export default function Page() {
  return <PrestationDetail data={data} />
}
