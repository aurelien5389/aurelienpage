import type { Metadata } from 'next'
import Header from '@/components/Header'
import PresentationConsultant from '@/components/PresentationConsultant'
import VitrinePrestations from '@/components/VitrinePrestations'
import ParcoursConsultant from '@/components/ParcoursConsultant'
import AtoutsConsultant from '@/components/AtoutsConsultant'
import ExperiencesPro from '@/components/ExperiencesPro'
import FormationsConsultant from '@/components/FormationsConsultant'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Aurélien PAGE · Consultant SEO, GEO et SEA à Rennes',
  description:
    "Consultant SEO, GEO et SEA à Rennes : être trouvé sur Google et cité par ChatGPT, Perplexity et les AI Overviews. Audits, accompagnement, Google Ads, formations. Diagnostic offert.",
  alternates: { canonical: 'https://aurelienpage.fr' },
  openGraph: {
    title: 'Aurélien PAGE · Consultant SEO, GEO et SEA à Rennes',
    description:
      "J'aide les entreprises à être trouvées sur Google et citées par les IA : audits SEO et GEO, accompagnement, Google Ads, formations. Rennes et à distance.",
    url: 'https://aurelienpage.fr',
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <PresentationConsultant />
        <VitrinePrestations />
        <ParcoursConsultant />
        <AtoutsConsultant />
        <ExperiencesPro />
        <FormationsConsultant />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
