// Envoie à IndexNow (Bing, Yandex, Seznam, Naver…) les URL modifiées.
// À lancer APRÈS un déploiement en production, quand le sitemap en ligne est à jour.
//
//   npm run indexnow                       URL du sitemap modifiées aujourd'hui
//   npm run indexnow -- --since 2026-10-01 URL modifiées depuis cette date
//   npm run indexnow -- --all              toutes les URL du sitemap (premier envoi, 10 000 max)
//   npm run indexnow -- /blog/geo-vs-seo   URL précises (chemins ou URL complètes)
//   ajouter --dry-run pour voir la liste sans rien envoyer
//
// Format vérifié sur https://www.indexnow.org/documentation : POST JSON { host, key, keyLocation, urlList },
// Content-Type application/json; charset=utf-8, 10 000 URL par requête au plus.
// Réponses : 200 envoyé, 202 reçu (clé en cours de vérification), 400 format, 403 clé, 422 URL hors hôte, 429 trop de requêtes.
//
// La clé est lue dans public/<clé>.txt et n'est jamais affichée.
// Protocole : https://www.indexnow.org/documentation
import fs from 'node:fs'

const SITE = 'https://aurelienpage.fr'
const HOST = 'aurelienpage.fr'
const ENDPOINT = 'https://api.indexnow.org/indexnow'

const keyFile = fs.readdirSync('public').find((f) => /^[a-f0-9]{32}\.txt$/.test(f))
if (!keyFile) {
  console.error('Fichier clé IndexNow introuvable dans public/')
  process.exit(1)
}
const key = fs.readFileSync(`public/${keyFile}`, 'utf8').trim()

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const all = args.includes('--all')
const sinceIdx = args.indexOf('--since')
const since = sinceIdx >= 0 ? args[sinceIdx + 1] : null
const explicit = args.filter((a, i) => !a.startsWith('--') && i !== sinceIdx + 1)

let urls
if (explicit.length > 0 && sinceIdx < 0 && !all) {
  urls = explicit.map((u) => (u.startsWith('http') ? u : `${SITE}${u.startsWith('/') ? '' : '/'}${u}`))
} else {
  const from = all ? '0000-00-00' : since || new Date().toISOString().slice(0, 10)
  const xml = await (await fetch(`${SITE}/sitemap.xml`)).text()
  urls = [...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)]
    .filter((m) => m[2].slice(0, 10) >= from)
    .map((m) => m[1])
  console.log(all ? `Toutes les URL du sitemap : ${urls.length}` : `URL du sitemap modifiées depuis le ${from} : ${urls.length}`)
}

async function submit() {
  if (urls.length === 0) {
    console.log('Rien à envoyer.')
    return 0
  }
  urls.forEach((u) => console.log('  ' + u))
  if (dryRun) {
    console.log('--dry-run : aucun envoi.')
    return 0
  }
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key, keyLocation: `${SITE}/${keyFile}`, urlList: urls.slice(0, 10000) }),
  })
  const meaning = {
    200: 'envoyé',
    202: 'reçu, vérification de la clé en cours',
    400: 'format invalide',
    403: 'clé invalide (fichier clé pas encore en ligne ?)',
    422: "URL hors du domaine ou clé non conforme",
    429: 'trop de requêtes',
  }
  console.log(`IndexNow : ${res.status} ${meaning[res.status] || ''}`)
  return res.ok ? 0 : 1
}

// exitCode plutôt que process.exit() : évite une assertion libuv sous Windows après un fetch
process.exitCode = await submit()
