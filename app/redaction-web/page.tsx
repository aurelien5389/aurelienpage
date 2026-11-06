import type { Metadata } from 'next'
import { seoTitle } from '@/lib/titles'
import { parseDraft } from '@/lib/draft-parser'
import BlogPostLayout from '@/components/BlogPostLayout'
import { draftDates } from '@/lib/content-dates'
import { getBlogRelatedLinks } from '@/lib/internal-links'

const SLUG = 'redaction-web'
const draft = parseDraft(`${SLUG}.md`)

export const metadata: Metadata = {
  title: seoTitle('Rédaction web SEO à Rennes : articles et pages de service'),
  description: draft.metaDescription,
  alternates: { canonical: `https://aurelienpage.fr/${SLUG}` },
  openGraph: {
    title: seoTitle('Rédaction web SEO à Rennes : articles et pages de service'),
    description: draft.metaDescription,
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
