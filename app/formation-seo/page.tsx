import type { Metadata } from 'next'
import { parseDraft } from '@/lib/draft-parser'
import BlogPostLayout from '@/components/BlogPostLayout'
import { getBlogRelatedLinks } from '@/lib/internal-links'

const SLUG = 'formation-seo'
const draft = parseDraft(`${SLUG}.md`)

export const metadata: Metadata = {
  title: 'Formation SEO | Apprenez le référencement naturel avec un praticien · Aurélien PAGE',
  description: draft.metaDescription || 'Formation SEO sur-mesure avec un consultant praticien. Fondamentaux, SEO technique, stratégie de contenu, GEO. Format individuel ou en équipe.',
  alternates: { canonical: `https://aurelienpage.fr/${SLUG}` },
  openGraph: {
    title: 'Formation SEO | Apprenez le référencement naturel avec un praticien · Aurélien PAGE',
    description: draft.metaDescription || 'Formation SEO sur-mesure avec un consultant praticien. Fondamentaux, SEO technique, stratégie de contenu, GEO.',
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
