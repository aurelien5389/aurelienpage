import type { Metadata } from 'next'
import { parseDraft } from '@/lib/draft-parser'
import BlogPostLayout from '@/components/BlogPostLayout'
import { draftDates } from '@/lib/content-dates'
import { getBlogRelatedLinks } from '@/lib/internal-links'

const SLUG = 'consultant-geo-laval'
const draft = parseDraft(`${SLUG}.md`)

export const metadata: Metadata = {
  title: 'Consultant GEO à Laval (Mayenne) : être cité par ChatGPT et les IA · Aurélien PAGE',
  description: draft.metaDescription || 'Consultant GEO à Laval. Optimisation pour AI Overviews, Perplexity et ChatGPT Search. Renforcement EEAT, structuration de contenu IA. Devis gratuit.',
  alternates: { canonical: `https://aurelienpage.fr/${SLUG}` },
  openGraph: {
    title: 'Consultant GEO à Laval (Mayenne) : être cité par ChatGPT et les IA · Aurélien PAGE',
    description: draft.metaDescription || 'Consultant GEO à Laval. Optimisation pour AI Overviews, Perplexity et ChatGPT Search.',
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
