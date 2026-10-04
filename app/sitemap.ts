import fs from 'fs'
import path from 'path'
import { MetadataRoute } from 'next'
import { getBlogDrafts } from '@/lib/draft-parser'
import { getContentDates } from '@/lib/content-dates'
import { SITE_URL } from '@/lib/schema'
import { REPONSES, reponseDates } from '@/lib/reponses'

// Pages exclues du sitemap (noindex ou techniques)
const EXCLUDED = new Set(['/mentions-legales'])

// Composants de mise en page partagés : leur modification ne change pas le contenu d'une page
const SHARED_COMPONENTS = new Set([
  'Header', 'Footer', 'DiagnosticCTA', 'JsonLd', 'AvailabilityBadge', 'AuthorBio',
  'BlogPostLayout', 'LocalSeoPageLayout', 'PrestationDetail', 'MarkdownRenderer', 'FicheLayout', 'ReponseLayout',
])

// Fichiers sources d'une route : page.tsx, draft .md du même nom, composants de contenu importés
function sourceFiles(route: string, pageFile: string): string[] {
  const files = [pageFile]
  const draft = `_drafts/${route.split('/').pop() || 'index'}.md`
  if (fs.existsSync(path.join(process.cwd(), draft))) files.push(draft)
  const src = fs.readFileSync(path.join(process.cwd(), pageFile), 'utf-8')
  Array.from(src.matchAll(/from '@\/components\/(\w+)'/g)).forEach((m) => {
    if (!SHARED_COMPONENTS.has(m[1])) files.push(`components/${m[1]}.tsx`)
  })
  return files
}

// Toutes les routes statiques : chaque dossier de app/ qui contient un page.tsx
function staticRoutes(dir = 'app', route = ''): { route: string; pageFile: string }[] {
  const abs = path.join(process.cwd(), dir)
  const out: { route: string; pageFile: string }[] = []
  if (fs.existsSync(path.join(abs, 'page.tsx'))) out.push({ route: route || '/', pageFile: `${dir}/page.tsx` })
  for (const entry of fs.readdirSync(abs, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith('[') || entry.name.startsWith('_') || entry.name === 'api') continue
    out.push(...staticRoutes(`${dir}/${entry.name}`, `${route}/${entry.name}`))
  }
  return out
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = staticRoutes()
    .filter((p) => !EXCLUDED.has(p.route))
    .map(({ route, pageFile }) => ({
      url: route === '/' ? SITE_URL : `${SITE_URL}${route}`,
      lastModified: getContentDates(sourceFiles(route, pageFile)).modified,
    }))

  const blogPages = getBlogDrafts().map((d) => ({
    url: `${SITE_URL}${d.slug}`,
    lastModified: getContentDates([`_drafts${d.slug.replace('/blog', '')}.md`]).modified,
  }))

  const reponsePages = REPONSES.map((r) => ({
    url: `${SITE_URL}/reponses/${r.slug}`,
    lastModified: reponseDates(r).modified,
  }))

  return [...pages, ...blogPages, ...reponsePages]
}
