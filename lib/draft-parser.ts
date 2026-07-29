import fs from 'fs'
import path from 'path'

export interface DraftContent {
  slug: string
  title: string
  metaDescription: string
  h1: string
  body: string
}

function extractYamlFrontmatter(raw: string): Partial<DraftContent> & { rest: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { rest: raw }
  const fm = match[1]
  const rest = match[2]
  const slug = (fm.match(/slug:\s*(.+)/) || [])[1]?.trim().replace(/^['"]|['"]$/g, '')
  const title = (fm.match(/title:\s*(.+)/) || [])[1]?.trim().replace(/^['"]|['"]$/g, '')
  const metaDescription = (
    fm.match(/meta[-_]description:\s*(.+)/) || []
  )[1]?.trim().replace(/^['"]|['"]$/g, '')
  return { slug, title, metaDescription, rest }
}

function extractHeaderSection(raw: string): Partial<DraftContent> & { rest: string } {
  // Splits on the first `---` separator after the metadata block
  const sepIdx = raw.indexOf('\n---\n')
  if (sepIdx === -1) return { rest: raw }
  const header = raw.slice(0, sepIdx)
  const rest = raw.slice(sepIdx + 5)

  const slugMatch = header.match(/\*\*Slug\s*\/\s*URL\s*:\*\*\s*`([^`]+)`/)
  const slug = slugMatch?.[1]?.trim()

  const h1Match = header.match(/\*\*H1\s*:\*\*\s*(.+)/)
  const h1 = h1Match?.[1]?.trim()

  // title from first # heading or h1
  const titleMatch = header.match(/^#\s+(.+)/m)
  const title = titleMatch?.[1]?.trim() || h1

  return { slug, title, h1, rest }
}

export function parseDraft(filename: string): DraftContent {
  const draftsDir = path.join(process.cwd(), '_drafts')
  const filepath = path.join(draftsDir, filename.endsWith('.md') ? filename : `${filename}.md`)
  const raw = fs.readFileSync(filepath, 'utf-8')

  let slug: string | undefined
  let title: string | undefined
  let metaDescription: string | undefined
  let h1: string | undefined
  let bodyRaw: string

  // Try YAML frontmatter first
  if (raw.startsWith('---\n')) {
    const parsed = extractYamlFrontmatter(raw)
    slug = parsed.slug
    title = parsed.title
    metaDescription = parsed.metaDescription
    bodyRaw = parsed.rest || ''
  } else {
    const parsed = extractHeaderSection(raw)
    slug = parsed.slug
    title = parsed.title
    h1 = parsed.h1
    bodyRaw = parsed.rest || ''
  }

  // Strip H1 from body — rendered separately by BlogPostLayout
  const h1InBody = bodyRaw.match(/^#\s+(.+)/m)
  if (h1InBody) {
    if (!h1) h1 = h1InBody[1].trim()
    bodyRaw = bodyRaw.replace(/^#\s+[^\n]+\n?/m, '')
  }

  // Remove trailing author line
  bodyRaw = bodyRaw
    .replace(/\n---\n\*Aurélien Page[^\n]*\*\s*$/, '')
    .replace(/\n---\n\*Aurélien Page[^\n]*\*[^\n]*\s*$/, '')
    .trim()

  return {
    slug: slug || '',
    title: title || h1 || '',
    metaDescription: metaDescription || '',
    h1: h1 || title || '',
    body: bodyRaw,
  }
}

export function getAllDrafts(): DraftContent[] {
  const draftsDir = path.join(process.cwd(), '_drafts')
  const files = fs.readdirSync(draftsDir).filter((f) => f.endsWith('.md'))
  return files.map((f) => parseDraft(f))
}

export function getBlogDrafts(): DraftContent[] {
  return getAllDrafts().filter((d) => d.slug.startsWith('/blog/'))
}

export function getLocalDrafts(): DraftContent[] {
  return getAllDrafts().filter((d) => d.slug.startsWith('/consultant-seo-'))
}
