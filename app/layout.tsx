import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import JsonLd from '@/components/JsonLd'
import { siteGraph } from '@/lib/schema'
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Aurélien PAGE · Consultant SEO, GEO et SEA à Rennes',
  description:
    "Consultant SEO, GEO et SEA à Rennes : être trouvé sur Google et cité par ChatGPT, Perplexity et les AI Overviews. Audits, accompagnement, Google Ads, formations. Diagnostic offert.",
  keywords: [
    'consultant SEO',
    'consultant GEO',
    'traffic manager SEA',
    'consultant IA',
    'formation SEO',
    'formation GEO',
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
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
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
        <JsonLd schema={siteGraph} />
        {children}
        <Script src="/chatbot.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
