import type { Metadata } from 'next'
import { parseDraft } from '@/lib/draft-parser'
import BlogPostLayout from '@/components/BlogPostLayout'
import { draftDates } from '@/lib/content-dates'
import { getBlogRelatedLinks } from '@/lib/internal-links'

const SLUG = 'redacteur-web-juridique'
const draft = parseDraft(`${SLUG}.md`)

export const metadata: Metadata = {
  title: 'Rédacteur web juridique SEO | Avocats, notaires, experts-comptables · Aurélien PAGE',
  description: draft.metaDescription || 'Rédacteur web spécialisé secteur juridique. Contenus SEO pour avocats, notaires, huissiers, experts-comptables : validés par vos soins, optimisés pour Google.',
  alternates: { canonical: `https://aurelienpage.fr/${SLUG}` },
  openGraph: {
    title: 'Rédacteur web juridique SEO | Avocats, notaires, experts-comptables · Aurélien PAGE',
    description: draft.metaDescription || 'Rédacteur web spécialisé secteur juridique. Contenus SEO pour avocats, notaires, huissiers, experts-comptables : validés par vos soins, optimisés pour Google.',
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
