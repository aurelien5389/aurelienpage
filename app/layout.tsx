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
  jobTitle: 'Consultant SEO & Chef de Projet Digital',
  worksFor: {
    '@type': 'Organization',
    name: 'Indépendant / Freelance',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rennes',
    addressCountry: 'FR',
  },
  email: 'aurelienpage89@gmail.com',
  telephone: '+33781981114',
  sameAs: ['https://www.linkedin.com/in/aurelienpage'],
  knowsAbout: [
    'SEO',
    'SEA',
    'Google Ads',
    'Marketing digital',
    'GEO',
    'Automatisation No-code',
    'Make',
    'Airtable',
    'Gestion de projet digital',
  ],
  description:
    "Consultant SEO & Chef de Projet Digital basé à Rennes. J'aide les entreprises et organismes de formation à développer leur visibilité organique et leurs leads via le SEO, le SEA et l'automatisation.",
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Aurélien PAGE · Consultant SEO & Chef de Projet Digital · Rennes',
  description:
    "Expert SEO, SEA et automatisation marketing. J'aide les entreprises et organismes de formation à développer leur visibilité et leurs leads. Basé à Rennes, remote.",
  keywords: [
    'consultant SEO',
    'chef de projet digital',
    'SEO Rennes',
    'traffic manager',
    'marketing digital',
    'SEA Google Ads',
    'automatisation marketing',
    'GEO',
    'freelance SEO',
  ],
  authors: [{ name: 'Aurélien PAGE' }],
  creator: 'Aurélien PAGE',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    title: 'Aurélien PAGE · Consultant SEO & Chef de Projet Digital · Rennes',
    description:
      "Expert SEO, SEA et automatisation marketing. J'aide les entreprises et organismes de formation à développer leur visibilité et leurs leads.",
    siteName: 'Aurélien PAGE',
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'Aurélien PAGE · Consultant SEO & Chef de Projet Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurélien PAGE · Consultant SEO & Chef de Projet Digital',
    description:
      "Expert SEO, SEA et automatisation marketing. Basé à Rennes, remote.",
    images: ['/og'],
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
        {children}
      </body>
    </html>
  )
}
