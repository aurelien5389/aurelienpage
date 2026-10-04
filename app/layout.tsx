import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import JsonLd from '@/components/JsonLd'
import MobileCta from '@/components/MobileCta'
import { siteGraph } from '@/lib/schema'
import './globals.css'

// Polices auto-hébergées (licence SIL Open Font, fichiers dans app/fonts)
// Titres : une seule graisse (700), fichier statique léger
const titre = localFont({
  src: './fonts/BricolageGrotesque-latin-700.woff2',
  weight: '700',
  variable: '--font-titre',
  display: 'swap',
})

// Corps : display « optional » pour que le texte principal (élément LCP) s'affiche sans attendre la police
const corps = localFont({
  src: [
    { path: './fonts/AtkinsonHyperlegible-latin-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/AtkinsonHyperlegible-latin-400-italic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/AtkinsonHyperlegible-latin-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-corps',
  display: 'optional',
})

const siteUrl = 'https://aurelienpage.fr'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Aurélien PAGE · Consultant SEO, GEO et SEA à Rennes',
  description:
    'Consultant SEO, GEO et SEA à Rennes : être trouvé sur Google et cité par ChatGPT, Perplexity et les AI Overviews. Audits, accompagnement, Google Ads, formations. Diagnostic offert.',
  keywords: [
    'consultant SEO',
    'consultant GEO',
    'traffic manager SEA',
    'formation SEO',
    'formation GEO',
    'chef de projet digital',
    'SEO Rennes',
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
    title: 'Aurélien PAGE · Consultant SEO, GEO et SEA à Rennes',
    description:
      "J'aide les entreprises à être trouvées sur Google et citées par les IA : audits SEO et GEO, accompagnement, Google Ads, formations. Rennes et à distance.",
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Aurélien PAGE, consultant SEO & Marketing Digital · Rennes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurélien PAGE · Consultant SEO, GEO et SEA à Rennes',
    description: 'Consultant SEO, GEO et SEA à Rennes. Audits, accompagnement, Google Ads, formations. Diagnostic offert.',
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
    <html lang="fr" className={`${titre.variable} ${corps.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZVYC2J060V"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZVYC2J060V');
          `}
        </Script>
        <JsonLd schema={siteGraph} />
        {children}
        <MobileCta />
        <Script src="/chatbot.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
