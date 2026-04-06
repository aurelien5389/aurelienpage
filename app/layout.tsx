import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const siteUrl = 'https://aurelienpage.fr'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aurélien PAGE',
  url: siteUrl,
  image: `${siteUrl}/photo.jpg`,
  jobTitle: 'Consultant SEO & GEO, Traffic Manager, Consultant IA, Formateur No Code',
  telephone: '+33781981114',
  email: 'aurelienpage89@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rennes',
    addressRegion: 'Bretagne',
    addressCountry: 'FR',
  },
  sameAs: ['https://www.linkedin.com/in/aurelienpage'],
  knowsAbout: ['SEO', 'GEO', 'SEA', 'Google Ads', 'Meta Ads', 'Marketing digital', 'IA générative', 'Automatisation No-code', 'Make', 'Airtable', 'Claude AI', 'Gestion de projet digital'],
  description:
    "Consultant SEO & GEO, Traffic Manager SEA, Consultant IA et Formateur No Code basé à Rennes. J'accompagne entreprises et organismes de formation.",
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Aurélien PAGE — Consultant SEO & Marketing Digital',
  url: siteUrl,
  telephone: '+33781981114',
  email: 'aurelienpage89@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rennes',
    addressRegion: 'Bretagne',
    addressCountry: 'FR',
  },
  areaServed: 'France',
  priceRange: '€€',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Aurélien PAGE · Consultant SEO, SEA, IA & Formateur No Code · Rennes',
  description:
    "Consultant freelance spécialisé en SEO, SEA, GEO, IA et automatisation no-code. Basé à Rennes, interventions remote. Diagnostic offert.",
  keywords: [
    'consultant SEO',
    'consultant GEO',
    'traffic manager SEA',
    'consultant IA',
    'formateur no code',
    'chef de projet digital',
    'SEO Rennes',
    'automatisation marketing',
    'Make Airtable',
    'freelance digital Rennes',
  ],
  authors: [{ name: 'Aurélien PAGE' }],
  creator: 'Aurélien PAGE',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Aurélien PAGE',
    title: 'Aurélien PAGE · Consultant SEO, SEA, IA & Formateur No Code',
    description:
      "J'accompagne les entreprises et organismes de formation à améliorer leur visibilité, automatiser leurs workflows et se positionner dans les environnements IA — SEO · SEA · GEO · No-code.",
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Aurélien PAGE — Consultant SEO & Marketing Digital · Rennes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurélien PAGE · Consultant SEO, SEA, IA & Formateur No Code',
    description: 'Consultant freelance basé à Rennes — SEO · SEA · GEO · IA · No-code. Diagnostic offert.',
    images: ['/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-navy text-off-white font-inter antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZVYC2J060V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZVYC2J060V');
          `}
        </Script>
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  )
}
