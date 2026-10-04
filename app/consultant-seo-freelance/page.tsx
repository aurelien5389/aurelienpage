import type { Metadata } from 'next'
import { parseDraft } from '@/lib/draft-parser'
import BlogPostLayout from '@/components/BlogPostLayout'
import { draftDates } from '@/lib/content-dates'
import { getBlogRelatedLinks } from '@/lib/internal-links'

const SLUG = 'consultant-seo-freelance'
const draft = parseDraft(`${SLUG}.md`)

export const metadata: Metadata = {
  title: 'Consultant SEO Freelance | Aurélien PAGE · SEO, GEO & Google Ads',
  description: draft.metaDescription || 'Consultant SEO freelance avec 8 ans d\'expérience. Audit SEO, stratégie GEO, Google Ads. Tarifs transparents, interlocuteur unique. Devis gratuit.',
  alternates: { canonical: `https://aurelienpage.fr/${SLUG}` },
  openGraph: {
    title: 'Consultant SEO Freelance | Aurélien PAGE · SEO, GEO & Google Ads',
    description: draft.metaDescription || 'Consultant SEO freelance avec 8 ans d\'expérience. Audit SEO, stratégie GEO, Google Ads. Devis gratuit.',
    url: `https://aurelienpage.fr/${SLUG}`,
  },
}

export default function Page() {
  return (
    <BlogPostLayout
      h1={draft.h1}
      body={draft.body}
      slug={SLUG}
      path={`/${SLUG}`}
      parent={{ name: 'Prestations', path: '/prestations' }}
      dates={draftDates(SLUG)}
      relatedLinks={getBlogRelatedLinks(SLUG)}
    />
  )
}
