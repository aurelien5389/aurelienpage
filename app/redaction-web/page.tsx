import type { Metadata } from 'next'
import { parseDraft } from '@/lib/draft-parser'
import BlogPostLayout from '@/components/BlogPostLayout'
import { draftDates } from '@/lib/content-dates'
import { getBlogRelatedLinks } from '@/lib/internal-links'

const SLUG = 'redaction-web'
const draft = parseDraft(`${SLUG}.md`)

export const metadata: Metadata = {
  title: 'Rédaction web SEO | Contenus optimisés Google & IA · Aurélien PAGE',
  description: draft.metaDescription || 'Rédaction web SEO freelance. Articles de blog, pages de service, contenus optimisés pour Google et les moteurs IA.',
  alternates: { canonical: `https://aurelienpage.fr/${SLUG}` },
  openGraph: {
    title: 'Rédaction web SEO | Contenus optimisés Google & IA · Aurélien PAGE',
    description: draft.metaDescription || 'Rédaction web SEO freelance. Articles de blog, pages de service, contenus optimisés pour Google et les moteurs IA.',
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
