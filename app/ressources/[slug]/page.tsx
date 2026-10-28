import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getRessourceDrafts, parseDraft } from '@/lib/draft-parser'
import BlogPostLayout from '@/components/BlogPostLayout'
import { draftDates } from '@/lib/content-dates'

// Ressources : contenu dans _drafts/[slug].md (slug « /ressources/… »), même gabarit que le blog
export const dynamicParams = false

interface Props {
  params: { slug: string }
}

const PARENT = { name: 'Ressources', path: '/ressources' }

export async function generateStaticParams() {
  return getRessourceDrafts().map((d) => ({ slug: d.slug.replace('/ressources/', '') }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const draft = parseDraft(`${params.slug}.md`)
    const url = `https://aurelienpage.fr/ressources/${params.slug}`
    return {
      title: `${draft.title} · Aurélien PAGE`,
      description: draft.metaDescription || draft.h1,
      alternates: { canonical: url },
      openGraph: { title: `${draft.title} · Aurélien PAGE`, description: draft.metaDescription || draft.h1, url },
    }
  } catch {
    return { title: 'Ressources SEO et GEO · Aurélien PAGE' }
  }
}

export default function RessourcePage({ params }: Props) {
  let draft
  try {
    draft = parseDraft(`${params.slug}.md`)
  } catch {
    notFound()
  }

  return (
    <BlogPostLayout
      h1={draft.h1}
      body={draft.body}
      slug={params.slug}
      relatedLinks={[]}
      dates={draftDates(params.slug)}
      path={`/ressources/${params.slug}`}
      parent={PARENT}
    />
  )
}
