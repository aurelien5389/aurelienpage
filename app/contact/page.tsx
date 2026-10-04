import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contact · Aurélien PAGE, Consultant SEO & GEO Freelance',
  description: 'Contactez Aurélien PAGE, consultant SEO & GEO freelance à Rennes. Un projet, une mission, une question ? Réservez un créneau ou envoyez un message.',
  alternates: { canonical: 'https://aurelienpage.fr/contact' },
  openGraph: {
    title: 'Contact · Aurélien PAGE, Consultant SEO & GEO Freelance',
    description: 'Contactez Aurélien PAGE, consultant SEO & GEO freelance à Rennes. Réservez un créneau gratuit de 30 min ou envoyez un message.',
    url: 'https://aurelienpage.fr/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <JsonLd schema={breadcrumbSchema([{ name: 'Contact', path: '/contact' }])} />
      <main className={styles.contactPageMain}>
        {/* Breadcrumb */}
        <div className={styles.fil}>
          <div className={styles.filInner}>
            <nav aria-label="Fil d'Ariane" className={styles.filNav}>
              <Link href="/" className={styles.filLien}>Accueil</Link>
              <span aria-hidden="true">›</span>
              <span className={styles.filActuel}>Contact</span>
            </nav>
          </div>
        </div>

        <Contact />
      </main>
      <Footer />
    </>
  )
}
