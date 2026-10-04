import type { Metadata } from 'next'
import { parseDraft } from '@/lib/draft-parser'
import BlogPostLayout from '@/components/BlogPostLayout'
import { draftDates } from '@/lib/content-dates'
import { getBlogRelatedLinks } from '@/lib/internal-links'

const SLUG = 'redacteur-web-rennes'
const draft = parseDraft(`${SLUG}.md`)

export const metadata: Metadata = {
  title: 'Rédacteur web SEO à Rennes | Aurélien PAGE',
  description: draft.metaDescription || 'Rédacteur web SEO freelance à Rennes. Articles de blog, pages de service, contenus optimisés Google. Issu du journalisme web, 8 ans d\'expérience.',
  alternates: { canonical: `https://aurelienpage.fr/${SLUG}` },
  openGraph: {
    title: 'Rédacteur web SEO à Rennes | Aurélien PAGE',
    description: draft.metaDescription || 'Rédacteur web SEO freelance à Rennes. Articles de blog, pages de service, contenus optimisés Google.',
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
