# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
npx vercel --prod  # deploy to production
```

## Architecture

Site personnel d'Aurélien PAGE (consultant SEO/GEO/IA, Rennes). Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion.

### Types de pages

**Page d'accueil** (`app/page.tsx`) — sections empilées : Hero → PrestationsTeaser → About → WhyMe → Experience → Education → Contact. Chaque section est un composant dans `components/`.

**Pages prestations** (`app/prestations/[slug]/page.tsx`) — pages statiques par prestation (consultant-seo-geo, consultant-ia, traffic-manager-sea, formateur-no-code-ia, chef-de-projet-digital).

**Pages SEO locales** (`app/consultant-seo-[ville]/page.tsx`) — 18 villes. Chaque page lit son contenu depuis `_drafts/consultant-seo-[ville].md` via `lib/draft-parser.ts`, puis utilise le layout partagé `components/LocalSeoPageLayout.tsx`.

**Blog** (`app/blog/[slug]/page.tsx`) — même système : contenu en Markdown dans `_drafts/[slug].md`, rendu via `components/BlogPostLayout.tsx` et `components/MarkdownRenderer.tsx`.

### Système de contenu (`_drafts/`)

Les fichiers `.md` acceptent deux formats d'en-tête :
1. **YAML frontmatter** (`---\nslug: ...\ntitle: ...\nmeta-description: ...\n---`)
2. **Format markdown structuré** avec `**Slug / URL :** \`...\`` et `**H1 :** ...`

`lib/draft-parser.ts` expose : `parseDraft(filename)`, `getBlogDrafts()`, `getLocalDrafts()`.

### Maillage interne (`lib/internal-links.ts`)

`BLOG_RELATED` — liens connexes par slug de blog.  
`NEARBY_CITIES` — villes proches par clé de ville.  
`LOCAL_BLOG_LINKS` — liens blog fixes affichés sur toutes les pages locales.

### API

`app/api/contact/route.ts` — envoi de mail via Resend. Variables d'env : `RESEND_API_KEY`, `CONTACT_EMAIL`.

### Design system (Tailwind)

| Token | Valeur |
|---|---|
| `navy` | `#0F1B2D` (fond principal) |
| `steel` | `#1E3A5F` (séparateurs, cartes) |
| `cyan` | `#00B4D8` (accent principal) |
| `off-white` | `#F0F4F8` (texte principal) |
| `gray-secondary` | `#8B9BB4` (texte secondaire) |

Polices : `font-space-grotesk` (titres), `font-inter` (corps), `font-mono` (code).

### Ajouter une nouvelle page SEO locale

1. Créer `_drafts/consultant-seo-[ville].md` avec frontmatter YAML
2. Créer `app/consultant-seo-[ville]/page.tsx` en copiant un existant (ex: `rennes`)
3. Ajouter la ville dans `NEARBY_CITIES` dans `lib/internal-links.ts`

### Ajouter un article de blog

1. Créer `_drafts/[slug].md`
2. Ajouter les liens connexes dans `BLOG_RELATED` dans `lib/internal-links.ts`
3. La page est générée automatiquement via `generateStaticParams()`
