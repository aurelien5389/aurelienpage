import type { Metadata } from 'next'
import { parseDraft } from '@/lib/draft-parser'
import BlogPostLayout from '@/components/BlogPostLayout'
import { draftDates } from '@/lib/content-dates'
import { getBlogRelatedLinks } from '@/lib/internal-links'

const SLUG = 'redaction-web'
const draft = parseDraft(`${SLUG}.md`)

export const metadata: Metadata = {
  title: 'Rédaction web SEO : articles, pages de service, contenus que les IA citent · Aurélien PAGE',
  description: draft.metaDescription,
  alternates: { canonical: `https://aurelienpage.fr/${SLUG}` },
  openGraph: {
    title: 'Rédaction web SEO : articles, pages de service, contenus que les IA citent · Aurélien PAGE',
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
