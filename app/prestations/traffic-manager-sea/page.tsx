import type { Metadata } from 'next'
import PrestationDetail, { type PrestationData } from '@/components/PrestationDetail'

export const metadata: Metadata = {
  title: 'Traffic Manager SEA Rennes · Google Ads & Meta Ads · Aurélien PAGE',
  description:
    'Création, pilotage et optimisation de campagnes Google Ads et Meta Ads. Freelance SEA basé à Rennes. Audit de compte offert sur demande.',
  alternates: { canonical: 'https://aurelienpage.fr/prestations/traffic-manager-sea' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://aurelienpage.fr/prestations/traffic-manager-sea',
    title: 'Traffic Manager SEA Rennes · Google Ads & Meta Ads · Aurélien PAGE',
    description: 'Campagnes Google Ads & Meta Ads. Freelance SEA à Rennes. Audit offert.',
    siteName: 'Aurélien PAGE',
  },
}

const data: PrestationData = {
  icon: '📣',
  h1: 'Traffic Manager SEA — Campagnes Google Ads & Meta Ads',
  pitch:
    'Des campagnes cohérentes avec votre stratégie globale — chaque euro investi est tracé, piloté et optimisé.',
  pourQui: 'PME, e-commerce, organismes de formation avec budget paid',
  missions: [
    'Audit et restructuration de comptes Google Ads existants',
    'Création de campagnes Search, Display, Shopping, Performance Max',
    'Campagnes Meta Ads (Facebook/Instagram)',
    'Conception de landing pages dédiées à la conversion',
    'Paramétrage du suivi des conversions (GA4, GTM)',
    'Reporting et optimisation continue',
  ],
  outils: ['Google Ads', 'Meta Ads Manager', 'GTM', 'GA4', 'Looker Studio'],
  formats: ['Lancement de compte', 'Gestion mensuelle', 'Audit & recommandations'],
  serviceSchema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Traffic Manager SEA',
    provider: { '@type': 'Person', name: 'Aurélien PAGE', url: 'https://aurelienpage.fr' },
    areaServed: 'France',
    url: 'https://aurelienpage.fr/prestations/traffic-manager-sea',
    description:
      'Création, pilotage et optimisation de campagnes Google Ads et Meta Ads pour PME, e-commerce et organismes de formation.',
  },
}

export default function Page() {
  return <PrestationDetail data={data} />
}
