import type { Metadata } from 'next'
import { parseDraft } from '@/lib/draft-parser'
import BlogPostLayout from '@/components/BlogPostLayout'
import { getBlogRelatedLinks } from '@/lib/internal-links'

const SLUG = 'accompagnement-seo'
const draft = parseDraft(`${SLUG}.md`)

export const metadata: Metadata = {
  title: 'Accompagnement SEO mensuel | Consultant freelance · Aurélien PAGE',
  description: draft.metaDescription || 'Accompagnement SEO mensuel avec un consultant freelance. Optimisation continue, reporting mensuel, interlocuteur unique. Sans contrat annuel imposé.',
  alternates: { canonical: `https://aurelienpage.fr/${SLUG}` },
  openGraph: {
    title: 'Accompagnement SEO mensuel | Consultant freelance · Aurélien PAGE',
    description: draft.metaDescription || 'Accompagnement SEO mensuel avec un consultant freelance. Optimisation continue, reporting mensuel, interlocuteur unique.',
    url: `https://aurelienpage.fr/${SLUG}`,
  },
}

export default function Page() {
  return (
    <BlogPostLayout
      h1={draft.h1}
      body={draft.body}
      slug={SLUG}
      relatedLinks={getBlogRelatedLinks(SLUG)}
    />
  )
}
