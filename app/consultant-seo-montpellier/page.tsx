import type { Metadata } from 'next'
import { parseDraft } from '@/lib/draft-parser'
import { getCityLinks, LOCAL_BLOG_LINKS } from '@/lib/internal-links'
import LocalSeoPageLayout from '@/components/LocalSeoPageLayout'

const CITY_KEY = 'montpellier'
const VILLE = 'Montpellier'
const SLUG = '/consultant-seo-montpellier'
const FILENAME = `consultant-seo-montpellier.md`

const draft = parseDraft(FILENAME)

export const metadata: Metadata = {
  title: `Consultant SEO à Montpellier | Expert SEO & GEO · Aurélien PAGE`,
  description: draft.metaDescription || `Consultant SEO freelance à Montpellier. Audit SEO, optimisation technique, stratégie GEO. Devis gratuit.`,
  alternates: { canonical: `https://aurelienpage.fr${SLUG}` },
  openGraph: {
    title: `Consultant SEO à Montpellier | Expert SEO & GEO · Aurélien PAGE`,
    description: draft.metaDescription || `Consultant SEO freelance à Montpellier. Audit SEO, optimisation technique, stratégie GEO.`,
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
