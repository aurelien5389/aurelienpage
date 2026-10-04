import dates from './content-dates.json'

const DATES = dates as Record<string, { created: string; modified: string }>

export interface ContentDates {
  published: string
  modified: string
}

// Dates d'une page à partir de ses fichiers sources (draft .md, page.tsx…)
// published = plus ancienne création, modified = plus récente modification
export function getContentDates(files: string[]): ContentDates {
  const known = files.map((f) => DATES[f]).filter(Boolean)
  if (known.length === 0) {
    const today = new Date().toISOString().slice(0, 10)
    return { published: today, modified: today }
  }
  return {
    published: known.map((d) => d.created).sort()[0],
    modified: known.map((d) => d.modified).sort().slice(-1)[0],
  }
}

export function draftDates(slug: string, pageFile?: string): ContentDates {
  return getContentDates([`_drafts/${slug}.md`, ...(pageFile ? [pageFile] : [])])
}

const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']

// « octobre 2026 » : mois et année seulement (pas de jour dans le corps du texte)
export function formatMonthYear(iso: string): string {
  const [y, m] = iso.split('-')
  return `${MOIS[Number(m) - 1]} ${y}`
}
