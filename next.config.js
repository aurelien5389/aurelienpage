const fs = require('fs')
const path = require('path')

// Les drafts qui ne sont pas des articles de blog (offres, pages villes…) étaient aussi servis
// sous /blog/[fichier] : contenu en double. On redirige ces adresses vers la vraie page.
function blogDuplicateRedirects() {
  const dir = path.join(__dirname, '_drafts')
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), 'utf8')
      const slug = (raw.match(/slug:\s*"?([^"\r\n]+)/) || raw.match(/\*\*Slug\s*\/\s*URL\s*:\*\*\s*`([^`]+)`/) || [])[1]
      const file = f.replace(/\.md$/, '')
      // Sans slug déclaré : la page dédiée app/[fichier]/page.tsx fait foi
      const ownPage = fs.existsSync(path.join(__dirname, 'app', file, 'page.tsx')) ? `/${file}` : undefined
      return { file, slug: (slug && slug.trim()) || ownPage }
    })
    .filter((d) => d.slug && !d.slug.startsWith('/blog/'))
    .map((d) => ({ source: `/blog/${d.file}`, destination: d.slug, statusCode: 301 }))
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      ...blogDuplicateRedirects(),
      // Articles fusionnés lors de la revue GEO du blog
      { source: '/blog/geo-vs-seo', destination: '/reponses/difference-seo-geo', statusCode: 301 },
      { source: '/blog/erreurs-seo-critiques', destination: '/blog/erreurs-seo-frequentes', statusCode: 301 },
      { source: '/blog/canva-creation-contenus', destination: '/blog/formes-contenus-redaction-web', statusCode: 301 },
      {
        source: '/blog/perplexity-citation-geo',
        destination: '/blog/chatgpt-search-geo',
        statusCode: 301,
      },
      // Pages IA et No Code transférées vers Audiaa (décision GEO, phase 2)
      {
        source: '/prestations/consultant-ia',
        destination: 'https://www.audiaa.fr/prestations.html',
        statusCode: 301,
      },
      {
        source: '/prestations/formateur-no-code-ia',
        destination: 'https://www.audiaa.fr/formations.html',
        statusCode: 301,
      },
      {
        source: '/copywriter-comment-eviter-le-syndrome-de-la-page-blanche',
        destination: '/blog/copywriter-eviter-syndrome-page-blanche',
        permanent: true,
      },
      {
        source: '/copywriter-comment-eviter-le-syndrome-de-la-page-blanche/',
        destination: '/blog/copywriter-eviter-syndrome-page-blanche',
        permanent: true,
      },
      {
        source: '/les-10-erreurs-seo-les-plus-frequentes-et-comment-les-eviter',
        destination: '/blog/erreurs-seo-frequentes',
        permanent: true,
      },
      {
        source: '/les-10-erreurs-seo-les-plus-frequentes-et-comment-les-eviter/',
        destination: '/blog/erreurs-seo-frequentes',
        permanent: true,
      },
      {
        source: '/differentes-formes-de-contenus-en-redaction-web',
        destination: '/blog/formes-contenus-redaction-web',
        permanent: true,
      },
      {
        source: '/differentes-formes-de-contenus-en-redaction-web/',
        destination: '/blog/formes-contenus-redaction-web',
        permanent: true,
      },
      {
        source: '/debutants-en-seo-quelques-principes-a-suivre-pour-apprendre-le-seo',
        destination: '/blog/apprendre-le-seo-principes-debutants',
        permanent: true,
      },
      {
        source: '/debutants-en-seo-quelques-principes-a-suivre-pour-apprendre-le-seo/',
        destination: '/blog/apprendre-le-seo-principes-debutants',
        permanent: true,
      },
      {
        source: '/comment-rediger-un-titre',
        destination: '/blog/rediger-titre-seo',
        permanent: true,
      },
      {
        source: '/comment-rediger-un-titre/',
        destination: '/blog/rediger-titre-seo',
        permanent: true,
      },
      {
        source: '/optimiser-ses-liens-internes',
        destination: '/blog/optimiser-liens-internes',
        permanent: true,
      },
      {
        source: '/optimiser-ses-liens-internes/',
        destination: '/blog/optimiser-liens-internes',
        permanent: true,
      },
      {
        source: '/les-techniques-de-redaction-web-pour-ameliorer-votre-contenu',
        destination: '/blog/techniques-redaction-web',
        permanent: true,
      },
      {
        source: '/les-techniques-de-redaction-web-pour-ameliorer-votre-contenu/',
        destination: '/blog/techniques-redaction-web',
        permanent: true,
      },
      {
        source: '/utiliser-canva-creation-contenus',
        destination: '/blog/formes-contenus-redaction-web',
        permanent: true,
      },
      {
        source: '/utiliser-canva-creation-contenus/',
        destination: '/blog/formes-contenus-redaction-web',
        permanent: true,
      },
      {
        source: '/pagination-seo',
        destination: '/blog/pagination-seo',
        permanent: true,
      },
      {
        source: '/pagination-seo/',
        destination: '/blog/pagination-seo',
        permanent: true,
      },
      {
        source: '/quest-ce-quun-fil-dariane',
        destination: '/blog/fil-ariane-seo',
        permanent: true,
      },
      {
        source: '/quest-ce-quun-fil-dariane/',
        destination: '/blog/fil-ariane-seo',
        permanent: true,
      },
      {
        source: '/quest-ce-que-le-google-eeat',
        destination: '/blog/google-eeat',
        permanent: true,
      },
      {
        source: '/quest-ce-que-le-google-eeat/',
        destination: '/blog/google-eeat',
        permanent: true,
      },
      {
        source: '/3-erreurs-seo-ruinent-site-web-comment-corriger-rapidement',
        destination: '/blog/erreurs-seo-frequentes',
        permanent: true,
      },
      {
        source: '/3-erreurs-seo-ruinent-site-web-comment-corriger-rapidement/',
        destination: '/blog/erreurs-seo-frequentes',
        permanent: true,
      },
      {
        source: '/quest-ce-que-le-seo/lexique-seo',
        destination: '/blog/lexique-seo',
        permanent: true,
      },
      {
        source: '/quest-ce-que-le-seo/lexique-seo/',
        destination: '/blog/lexique-seo',
        permanent: true,
      },
      {
        source: '/quest-ce-que-le-seo',
        destination: '/blog/quest-ce-que-le-seo',
        permanent: true,
      },
      {
        source: '/quest-ce-que-le-seo/',
        destination: '/blog/quest-ce-que-le-seo',
        permanent: true,
      },
      {
        source: '/10-secrets-seo',
        destination: '/blog/10-secrets-seo',
        permanent: true,
      },
      {
        source: '/10-secrets-seo/',
        destination: '/blog/10-secrets-seo',
        permanent: true,
      },
      {
        source: '/audit-seo',
        destination: '/blog/audit-seo',
        permanent: true,
      },
      {
        source: '/audit-seo/',
        destination: '/blog/audit-seo',
        permanent: true,
      },
      {
        source: '/guide-complet-auditer-site-web',
        destination: '/blog/audit-seo',
        permanent: true,
      },
      {
        source: '/guide-complet-auditer-site-web/',
        destination: '/blog/audit-seo',
        permanent: true,
      },
      {
        source: '/devenir-consultant-seo-en-freelance-limportance-detre-accompagnee-pour-reussir',
        destination: '/blog/devenir-consultant-seo-freelance',
        permanent: true,
      },
      {
        source: '/devenir-consultant-seo-en-freelance-limportance-detre-accompagnee-pour-reussir/',
        destination: '/blog/devenir-consultant-seo-freelance',
        permanent: true,
      },
      {
        source: '/utilisez-ces-4-etapes-pour-choisir-les-bons-mots-cles-en-seo',
        destination: '/blog/choisir-mots-cles-seo',
        permanent: true,
      },
      {
        source: '/utilisez-ces-4-etapes-pour-choisir-les-bons-mots-cles-en-seo/',
        destination: '/blog/choisir-mots-cles-seo',
        permanent: true,
      },
      {
        source: '/freelance-seo-comment-optimiser-son-profil-malt-pour-attirer-plus-de-clients',
        destination: '/blog/optimiser-profil-malt',
        permanent: true,
      },
      {
        source: '/freelance-seo-comment-optimiser-son-profil-malt-pour-attirer-plus-de-clients/',
        destination: '/blog/optimiser-profil-malt',
        permanent: true,
      },
      {
        source: '/redaction-web-quelles-sont-les-fautes-dorthographes-les-plus-faciles-a-eviter',
        destination: '/blog/fautes-orthographe-redaction-web',
        permanent: true,
      },
      {
        source: '/redaction-web-quelles-sont-les-fautes-dorthographes-les-plus-faciles-a-eviter/',
        destination: '/blog/fautes-orthographe-redaction-web',
        permanent: true,
      },
      {
        source: '/analyse-de-logs-seo',
        destination: '/blog/analyse-logs-seo',
        permanent: true,
      },
      {
        source: '/analyse-de-logs-seo/',
        destination: '/blog/analyse-logs-seo',
        permanent: true,
      },
      {
        source: '/seo-en-2025-les-tendances-qui-vont-faire-exploser-votre-trafic',
        destination: '/blog/tendances-seo-2026',
        permanent: true,
      },
      {
        source: '/seo-en-2025-les-tendances-qui-vont-faire-exploser-votre-trafic/',
        destination: '/blog/tendances-seo-2026',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
