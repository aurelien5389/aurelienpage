import type { Metadata } from 'next'
import { parseDraft } from '@/lib/draft-parser'
import BlogPostLayout from '@/components/BlogPostLayout'
import { draftDates } from '@/lib/content-dates'
import { getBlogRelatedLinks } from '@/lib/internal-links'

const SLUG = 'consultant-geo-rennes'
const draft = parseDraft(`${SLUG}.md`)

export const metadata: Metadata = {
  title: 'Consultant GEO à Rennes | Expert Generative Engine Optimization · Aurélien PAGE',
  description: draft.metaDescription || 'Consultant GEO freelance à Rennes. Optimisation pour AI Overviews, Perplexity et ChatGPT Search. Renforcement EEAT, structuration de contenu IA. Devis gratuit.',
  alternates: { canonical: `https://aurelienpage.fr/${SLUG}` },
  openGraph: {
    title: 'Consultant GEO à Rennes | Expert Generative Engine Optimization · Aurélien PAGE',
    description: draft.metaDescription || 'Consultant GEO freelance à Rennes. Optimisation pour AI Overviews, Perplexity et ChatGPT Search.',
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
