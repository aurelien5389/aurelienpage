// Génère lib/content-dates.json : date de création et de dernière modification
// de chaque fichier de contenu, d'après l'historique git.
// Lancé avant chaque build (prebuild). Si l'historique git est absent ou partiel
// (clone superficiel sur Vercel), le fichier existant est conservé tel quel.
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const OUT = 'lib/content-dates.json'
const gitRaw = (cmd) => execSync(`git ${cmd}`, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] })
const git = (cmd) => gitRaw(cmd).trim()

try {
  if (git('rev-parse --is-shallow-repository') === 'true') {
    console.log('[content-dates] clone superficiel : fichier existant conservé')
    process.exit(0)
  }
} catch {
  console.log('[content-dates] git indisponible : fichier existant conservé')
  process.exit(0)
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.posix.join(dir, entry.name)
    if (entry.isDirectory()) walk(p, files)
    else if (entry.name === 'page.tsx' || entry.name.endsWith('.md')) files.push(p)
  }
  return files
}

const files = [...walk('_drafts'), ...walk('app'), ...fs.readdirSync('components').filter((f) => f.endsWith('.tsx')).map((f) => `components/${f}`),
  ...fs.readdirSync('lib/reponses').filter((f) => f.endsWith('.ts')).map((f) => `lib/reponses/${f}`),
]
const dirty = new Set(
  gitRaw('status --porcelain')
    .split('\n')
    .filter(Boolean)
    .map((l) => l.slice(3).replace(/"/g, ''))
)
const today = new Date().toISOString().slice(0, 10)

const dates = {}
for (const f of files) {
  const log = git(`log --follow --format=%cs -- "${f}"`).split('\n').filter(Boolean)
  const created = log.at(-1) || today
  const modified = dirty.has(f) ? today : log[0] || today
  dates[f] = { created, modified }
}

fs.writeFileSync(OUT, JSON.stringify(dates, null, 1) + '\n')
console.log(`[content-dates] ${files.length} fichiers datés`)
