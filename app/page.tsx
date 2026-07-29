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
  title: 'Aurélien PAGE · Consultant SEO, SEA, IA & Formateur No Code · Rennes',
  description:
    "Consultant freelance spécialisé en SEO, SEA, GEO, IA et automatisation no-code. Basé à Rennes, interventions remote. Diagnostic offert.",
  alternates: { canonical: 'https://aurelienpage.fr' },
  openGraph: {
    title: 'Aurélien PAGE · Consultant SEO, SEA, IA & Formateur No Code · Rennes',
    description:
      "J'accompagne les entreprises et organismes de formation à développer leur visibilité et automatiser leurs workflows. Diagnostic offert.",
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
