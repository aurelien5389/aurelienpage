import type { Metadata } from 'next'
import { parseDraft } from '@/lib/draft-parser'
import { getCityLinks, LOCAL_BLOG_LINKS } from '@/lib/internal-links'
import LocalSeoPageLayout from '@/components/LocalSeoPageLayout'

const CITY_KEY = 'rennes'
const VILLE = 'Rennes'
const SLUG = '/consultant-seo-rennes'
const FILENAME = `consultant-seo-rennes.md`

const draft = parseDraft(FILENAME)

export const metadata: Metadata = {
  title: `Consultant SEO à Rennes | Expert SEO & GEO · Aurélien PAGE`,
  description: draft.metaDescription || `Consultant SEO freelance à Rennes. Audit SEO, optimisation technique, stratégie GEO. Devis gratuit.`,
  alternates: { canonical: `https://aurelienpage.fr${SLUG}` },
  openGraph: {
    title: `Consultant SEO à Rennes | Expert SEO & GEO · Aurélien PAGE`,
    description: draft.metaDescription || `Consultant SEO freelance à Rennes. Audit SEO, optimisation technique, stratégie GEO.`,
    url: `https://aurelienpage.fr${SLUG}`,
  },
}

export default function Page() {
  return (
    <LocalSeoPageLayout
      h1={draft.h1}
      body={draft.body}
      ville={VILLE}
      slug={SLUG}
      nearbyLinks={getCityLinks(CITY_KEY)}
      blogLinks={LOCAL_BLOG_LINKS}
    />
  )
}
