/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
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
        destination: '/blog/canva-creation-contenus',
        permanent: true,
      },
      {
        source: '/utiliser-canva-creation-contenus/',
        destination: '/blog/canva-creation-contenus',
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
        destination: '/blog/erreurs-seo-critiques',
        permanent: true,
      },
      {
        source: '/3-erreurs-seo-ruinent-site-web-comment-corriger-rapidement/',
        destination: '/blog/erreurs-seo-critiques',
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
