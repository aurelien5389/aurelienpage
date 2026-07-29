import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogDrafts, parseDraft } from '@/lib/draft-parser'
import { getBlogRelatedLinks } from '@/lib/internal-links'
import BlogPostLayout from '@/components/BlogPostLayout'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const drafts = getBlogDrafts()
  return drafts.map((d) => ({
    slug: d.slug.replace('/blog/', ''),
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const filename = `${params.slug}.md`
  try {
    const draft = parseDraft(filename)
    return {
      title: `${draft.title} · Aurélien PAGE`,
      description: draft.metaDescription || draft.h1,
      alternates: { canonical: `https://aurelienpage.fr/blog/${params.slug}` },
      openGraph: {
        title: `${draft.title} · Aurélien PAGE`,
        description: draft.metaDescription || draft.h1,
        url: `https://aurelienpage.fr/blog/${params.slug}`,
      },
    }
  } catch {
    return { title: 'Blog SEO · Aurélien PAGE' }
  }
}

export default function BlogPostPage({ params }: Props) {
  let draft
  try {
    draft = parseDraft(`${params.slug}.md`)
  } catch {
    notFound()
  }

  const relatedLinks = getBlogRelatedLinks(params.slug)

  return (
    <BlogPostLayout
      h1={draft.h1}
      body={draft.body}
      slug={params.slug}
      relatedLinks={relatedLinks}
    />
  )
}
