import sharp from 'sharp'

const WIDTH = 1200
const HEIGHT = 630

// Charte graphique du site
const NAVY = '#0F1B2D'
const STEEL = '#1E3A5F'
const CYAN = '#00B4D8'
const OFF_WHITE = '#F0F4F8'
const GRAY = '#8B9BB4'

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${NAVY};stop-opacity:1" />
      <stop offset="60%" style="stop-color:#0d1b2e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#111d38;stop-opacity:1" />
    </linearGradient>
    <radialGradient id="glow1" cx="80%" cy="20%" r="40%">
      <stop offset="0%" style="stop-color:${CYAN};stop-opacity:0.06" />
      <stop offset="100%" style="stop-color:${CYAN};stop-opacity:0" />
    </radialGradient>
    <radialGradient id="glow2" cx="10%" cy="85%" r="35%">
      <stop offset="0%" style="stop-color:${STEEL};stop-opacity:0.4" />
      <stop offset="100%" style="stop-color:${STEEL};stop-opacity:0" />
    </radialGradient>
  </defs>

  <!-- Fond -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow1)" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow2)" />

  <!-- Initiales AP (fond, grand) -->
  <rect x="860" y="80" width="240" height="240" rx="32"
    fill="${CYAN}" fill-opacity="0.08"
    stroke="${CYAN}" stroke-opacity="0.2" stroke-width="1.5" />
  <text x="980" y="258" font-family="sans-serif" font-size="120" font-weight="700"
    fill="${CYAN}" fill-opacity="0.18" text-anchor="middle">AP</text>

  <!-- Badge localisation -->
  <rect x="80" y="80" width="300" height="40" rx="20"
    fill="${STEEL}" fill-opacity="0.5"
    stroke="${STEEL}" stroke-opacity="0.8" stroke-width="1" />
  <text x="100" y="105" font-family="sans-serif" font-size="18" fill="${GRAY}">📍 Rennes · Remote</text>

  <!-- Nom principal -->
  <text x="80" y="220" font-family="sans-serif" font-size="88" font-weight="700" fill="${OFF_WHITE}">Aurélien</text>
  <text x="80" y="320" font-family="sans-serif" font-size="88" font-weight="700" fill="${CYAN}">PAGE</text>

  <!-- Sous-titre -->
  <text x="80" y="390" font-family="sans-serif" font-size="28" font-weight="600" fill="${CYAN}" fill-opacity="0.9">
    Consultant SEO · SEA · GEO · IA · Formateur No Code
  </text>

  <!-- Accroche -->
  <text x="80" y="450" font-family="sans-serif" font-size="22" fill="${GRAY}">
    J'accompagne entreprises et organismes de formation
  </text>
  <text x="80" y="480" font-family="sans-serif" font-size="22" fill="${GRAY}">
    à développer leur visibilité et automatiser leurs workflows.
  </text>

  <!-- Séparateur -->
  <line x1="80" y1="540" x2="1120" y2="540" stroke="${STEEL}" stroke-opacity="0.5" stroke-width="1" />

  <!-- URL -->
  <text x="80" y="572" font-family="monospace" font-size="20" fill="${GRAY}" fill-opacity="0.6">
    aurelienpage.fr
  </text>

  <!-- Diagnostic offert -->
  <rect x="820" y="548" width="300" height="40" rx="8"
    fill="${CYAN}" fill-opacity="0.1"
    stroke="${CYAN}" stroke-opacity="0.3" stroke-width="1" />
  <text x="970" y="573" font-family="sans-serif" font-size="16" font-weight="600"
    fill="${CYAN}" text-anchor="middle">Diagnostic offert — 30 min</text>
</svg>
`

const outputPath = './public/og-default.png'

await sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath)

console.log(`✓ og-default.png généré → ${outputPath}`)
