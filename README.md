# aurelienpage.fr — Site personnel Aurélien PAGE

Site personnel statique one-page · Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Resend

---

## Stack technique

- **Next.js 14** (App Router)
- **TypeScript** strict
- **Tailwind CSS** + palette personnalisée
- **Framer Motion** (micro-animations, reduced motion respecté)
- **React Hook Form** + **Zod** (validation formulaire)
- **Resend** (envoi d'emails transactionnels)
- **Déploiement : Vercel** + domaine OVH `aurelienpage.fr`

---

## Étape 1 — Installation et test local

```bash
npm install
cp .env.local.example .env.local
# Remplir RESEND_API_KEY dans .env.local (voir Étape 2)
npm run dev
# → http://localhost:3000
```

---

## Étape 2 — Créer le compte Resend (gratuit, 3 000 mails/mois)

1. Aller sur [resend.com](https://resend.com) → créer un compte gratuit
2. **Settings → API Keys** → créer une clé → copier la valeur dans `.env.local`
3. **Domains → Add Domain** → entrer `aurelienpage.fr`
4. Resend fournit 2 enregistrements DNS **(TXT + MX)** → les noter pour l'Étape 5
5. L'email d'envoi sera : `contact@aurelienpage.fr`
   Le `Reply-To` est l'email du visiteur → vous pouvez répondre directement depuis Gmail

---

## Étape 3 — Push sur GitHub

```bash
git init
git add .
git commit -m "init: site personnel Aurélien PAGE"
git remote add origin https://github.com/TON_COMPTE/aurelienpage.git
git push -u origin main
```

---

## Étape 4 — Déploiement sur Vercel

1. Aller sur [vercel.com](https://vercel.com) → **New Project** → importer le repo GitHub
2. Vercel détecte Next.js automatiquement
3. **Avant de déployer**, ajouter les variables d'environnement :
   `Settings → Environment Variables`
   - `RESEND_API_KEY` = `re_votre_clé`  *(scope : Production + Preview + Development)*
   - `CONTACT_EMAIL` = `aurelienpage89@gmail.com`  *(scope : Production + Preview + Development)*
4. Cliquer **Deploy**

---

## Étape 5 — DNS OVH (domaine `aurelienpage.fr`)

Dans l'**espace client OVH → Zone DNS** de `aurelienpage.fr` :

### Pour Vercel (hébergement du site)

| Type  | Sous-domaine | Valeur                   | TTL  |
|-------|-------------|--------------------------|------|
| A     | `@`         | `76.76.21.21`            | 3600 |
| CNAME | `www`       | `cname.vercel-dns.com`   | 3600 |

> Supprimer tout enregistrement A ou CNAME existant qui pointerait vers OVH avant d'ajouter ces entrées.

### Pour Resend (emails sortants)

Ajouter les **2 enregistrements fournis par Resend** dans :
Resend → Domains → `aurelienpage.fr` → voir les enregistrements DNS à copier (TXT + MX)

---

## Étape 6 — Lier le domaine sur Vercel

1. Vercel Dashboard → votre projet → **Settings → Domains**
2. Ajouter `aurelienpage.fr` et `www.aurelienpage.fr`
3. Vercel active le **SSL automatiquement** (Let's Encrypt)

---

## Étape 7 — Vérification finale

- [ ] Attendre la propagation DNS (5 min à 48h selon le registrar)
- [ ] Ouvrir `https://aurelienpage.fr` — site accessible, HTTPS actif
- [ ] Tester le formulaire de contact en live → vérifier la réception dans Gmail
- [ ] Vérifier que le `Reply-To` fonctionne (répondre au mail depuis Gmail)
- [ ] Contrôler le score **Lighthouse** (cible : 95+ sur toutes les métriques)

---

## IndexNow (Bing, et donc ChatGPT et Copilot)

Le site publie une clé IndexNow (`public/<clé>.txt`, 32 caractères hexadécimaux) et un script qui signale les URL à `https://api.indexnow.org/indexnow` (protocole : [indexnow.org/documentation](https://www.indexnow.org/documentation)). À lancer **après** un déploiement en production, jamais avant : la clé et le sitemap doivent être en ligne.

```bash
npm run indexnow                        # URL du sitemap modifiées aujourd'hui
npm run indexnow -- --since 2026-10-01  # URL modifiées depuis une date
npm run indexnow -- --all               # toutes les URL du sitemap (premier envoi ou remise à plat)
npm run indexnow -- /reponses/qu-est-ce-que-le-geo   # URL précises
npm run indexnow -- --all --dry-run     # liste sans envoi
```

Codes de réponse : 200 envoyé, 202 reçu (clé en cours de vérification), 403 clé introuvable en ligne, 422 URL hors du domaine, 429 trop de requêtes.

Les dates `lastmod` du sitemap viennent de l'historique git des fichiers de contenu (`npm run dates`, lancé avant chaque build) : une page garde sa date tant que son contenu ne change pas.

---

## Mesure des demandes venues des IA

- Formulaire de contact : champ obligatoire « Comment m'avez-vous connu ? » (Google, Une IA, LinkedIn, Recommandation, Autre), transmis dans l'e-mail.
- `components/SourceTracker.tsx` mémorise le référent et l'`utm_source` du premier chargement (sessionStorage), les joint au message en champs cachés, envoie l'événement Google Analytics `source_ia` (paramètre `ia_source`) quand la visite vient de chatgpt.com, chat.openai.com, perplexity.ai, gemini.google.com, claude.ai ou copilot.microsoft.com, et ajoute des paramètres UTM aux liens Calendly au clic (`utm_source`, `utm_medium=site`, `utm_campaign=diagnostic-offert`, `utm_content=page`). Calendly affiche ces valeurs dans l'export CSV des rendez-vous (filtre « Tracking IDs »).
- Dans GA4, créer une dimension personnalisée d'événement `ia_source` pour la voir dans les rapports.

---

## Image OG

Remplacer `public/og-image.png` par une vraie image **1200 × 630 px** avant le déploiement.
Outils gratuits : [og-playground.vercel.app](https://og-playground.vercel.app), Canva, Figma.

---

## Structure du projet

```
aurelienpage/
├── app/
│   ├── layout.tsx          # Metadata SEO complète, fonts next/font
│   ├── page.tsx            # Assemblage des sections
│   ├── globals.css
│   └── api/contact/
│       └── route.ts        # POST → Zod validation → Resend
├── components/
│   ├── Header.tsx          # Nav fixe, scroll opacity, IntersectionObserver, burger mobile
│   ├── Hero.tsx            # Typewriter effect, CTAs
│   ├── About.tsx           # Texte + chiffres clés
│   ├── Services.tsx        # 4 blocs services
│   ├── Experience.tsx      # Timeline verticale
│   ├── Skills.tsx          # Tags par catégorie (JetBrains Mono)
│   ├── Education.tsx       # Formations
│   ├── Contact.tsx         # Formulaire React Hook Form + Zod + Resend
│   └── Footer.tsx
├── lib/
│   └── resend.ts           # Instance Resend
├── public/
│   ├── robots.txt
│   └── og-image.png        # À remplacer (1200×630)
├── .env.local.example
├── tailwind.config.ts
├── next.config.ts
├── vercel.json
└── tsconfig.json
```

---

## Variables d'environnement

| Variable          | Description                             | Où la trouver        |
|-------------------|-----------------------------------------|----------------------|
| `RESEND_API_KEY`  | Clé API Resend                          | resend.com → API Keys |
| `CONTACT_EMAIL`   | Email de réception des messages          | Votre choix           |
