# Inventaire GEO · aurelienpage.fr (phase 0)

Relevé fait le 4 octobre 2026 sur le site en ligne (HTML brut, sans JavaScript) et sur le dépôt local. Lecture seule : aucune page du site n'a été modifiée.

---

## 1. Dépôt et déploiement

| Élément | Valeur |
|---|---|
| Chemin local | `C:\Users\aurel\aurelienpage` |
| Dépôt GitHub | `https://github.com/aurelien5389/aurelienpage.git` (branches `main` et `master`) |
| Branche de travail GEO | `geo-aurelienpage` (créée à partir de `main`) |
| Hébergeur | Vercel (projet `aurelienpage`, en-tête `Server: Vercel`, région `cdg1`) |
| Mode de déploiement | `npx vercel --prod` depuis le poste (dossier `.vercel/` lié au projet). Intégration Git Vercel probable, à confirmer dans le tableau de bord Vercel |
| Framework | Next.js 14.2 (App Router), TypeScript, CSS Modules, Framer Motion |
| Commande de build | `npm run build` (= `next build`, déclarée aussi dans `vercel.json`) |
| Articles de blog | Fichiers Markdown dans `_drafts/` (82 fichiers). Rendu par `app/blog/[slug]/page.tsx` + `lib/draft-parser.ts` + `components/MarkdownRenderer.tsx`. Pas de CMS |
| Pages locales | Même système (`_drafts/consultant-seo-[ville].md`) |
| Fiches prestations | Codées en dur dans `app/prestations/*/page.tsx` + `components/PrestationDetail.tsx` |
| Sitemap | Généré par `app/sitemap.ts` (liste de slugs codée en dur) |
| robots.txt | Fichier statique `public/robots.txt` |
| Chatbot | `public/chatbot.js` (webhook n8n sur n8n.audiaa.fr), chargé en JavaScript |

**À savoir :** au moment de créer la branche, 40 fichiers avaient des modifications non commitées sur `main` (remplacement des tirets cadratins dans les `_drafts`, `lib/internal-links.ts`, `config/availability.ts`, etc.). Elles ont suivi sur la branche `geo-aurelienpage`, sans commit. Elles ne sont probablement pas en ligne. Je n'y ai pas touché.

---

## 2. Robots, sitemap, llms.txt (en ligne)

### robots.txt actuel
```
User-agent: *
Allow: /

Sitemap: https://aurelienpage.fr/sitemap.xml
```
Tous les robots sont autorisés par défaut. Aucun robot d'IA n'est nommé.

### Test d'accès par user-agent (page `/prestations/consultant-seo-geo`)
Requête envoyée avec le user-agent officiel de chaque robot. Toutes répondent **200** avec le contenu complet. Le pare-feu Vercel ne bloque aucun d'eux (test par user-agent seulement, pas depuis les IP réelles des robots).

| Robot | Éditeur | Rôle (documentation officielle) | robots.txt respecté | Accès |
|---|---|---|---|---|
| OAI-SearchBot | OpenAI | Faire apparaître les sites dans la recherche de ChatGPT | oui | 200 |
| ChatGPT-User | OpenAI | Visites déclenchées par un utilisateur de ChatGPT | « peut ne pas s'appliquer » | 200 |
| GPTBot | OpenAI | Entraînement des modèles | oui | 200 |
| Claude-SearchBot | Anthropic | Qualité des résultats de recherche de Claude | oui | 200 |
| Claude-User | Anthropic | Visites déclenchées par un utilisateur de Claude | oui | 200 |
| ClaudeBot | Anthropic | Collecte pouvant servir à l'entraînement | oui | 200 |
| PerplexityBot | Perplexity | Faire apparaître et lier les sites dans Perplexity, pas d'entraînement | oui | 200 |
| Perplexity-User | Perplexity | Visites déclenchées par un utilisateur | ignore en général | non testé |
| Google-Extended | Google | Jeton robots.txt seulement (pas un robot distinct) : usage pour l'entraînement Gemini et l'ancrage Gemini/Vertex. N'influence ni l'inclusion ni le classement dans Google Search | oui | sans objet |
| Bingbot | Microsoft | Robot principal de Bing (alimente aussi la recherche de Copilot) | oui | 200 |

Point clé de la doc OpenAI : chaque réglage est indépendant. On peut autoriser OAI-SearchBot (visibilité dans ChatGPT) et refuser GPTBot (entraînement).

Sources ouvertes :
- OpenAI : https://developers.openai.com/api/docs/bots
- Anthropic : https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- Perplexity : https://docs.perplexity.ai/guides/bots
- Google : https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers (section Google-Extended)
- Bing : https://www.bing.com/webmasters/help/which-crawlers-does-bing-use-8c184ec0

### sitemap.xml
- 92 URL, toutes en 200.
- **`lastmod` identique pour les 92 URL** (`2026-07-29T18:05:40Z`) : c'est la date du build, pas la date réelle de modification. Signal faible pour les moteurs.
- Liste des slugs de blog codée à la main dans `app/sitemap.ts` : risque d'oubli à chaque nouvel article.

### llms.txt
- **Absent** (`/llms.txt` renvoie 404).

---

## 3. Rendu côté serveur (HTML livré sans JavaScript)

Bonne base : les pages sont générées par Next.js côté serveur. Titres, textes d'articles, FAQ des pages offres et tableaux sont dans le HTML brut.

Problèmes repérés :

| # | Problème | Pages | Gravité |
|---|---|---|---|
| R1 | **JSON-LD Person et LocalBusiness injectés par JavaScript.** Dans `app/layout.tsx`, ils passent par `next/script` avec `strategy="beforeInteractive"`. Next.js les livre dans un tableau JavaScript (`self.__next_s.push(...)`), pas dans une vraie balise `<script type="application/ld+json">`. Un robot qui ne lance pas le JavaScript ne les voit pas. Résultat : **l'accueil n'a aucun JSON-LD lisible** | toutes | Haute |
| R2 | Contenu de l'accueil en `opacity: 0` au chargement (41 blocs animés par Framer Motion). Le texte est dans le HTML, donc lisible par les robots, mais il reste invisible tant que le JavaScript n'a pas tourné. C'est aussi la cause principale du LCP mobile lent (voir §6) | accueil, sections animées | Moyenne |
| R3 | Page `/contact` : aucun H1, 55 mots. Le bloc contact est un composant client avec un H2 « Contact » | /contact | Faible |
| R4 | Chatbot : texte d'accueil injecté par `chatbot.js`. Pas de contenu important, acceptable | toutes | Info |
| R5 | Simulateur de `/cout-prestation-seo` : les résultats chiffrés sont calculés en JavaScript. Les grilles de prix du texte sont, elles, dans le HTML | /cout-prestation-seo | Faible |

---

## 4. Incohérences, doublons, liens cassés

### 4.1 Bug de balise title sur 23 articles (priorité haute)
23 articles ont pour balise `<title>` **« Métadonnées de la page · Aurélien PAGE »** et une meta description égale au H1. Cause : ces fichiers `_drafts` commencent par `# Métadonnées de la page`, et `lib/draft-parser.ts` prend le premier titre `#` comme title. Ce sont des articles centraux : `crawler-seo`, `robots-txt-meta-robots`, `geo-ia-search-ai-overviews`, `ia-search-moteurs-reponses`, `audit-seo`, `donnees-structurees-schema-org`, etc. (marqués ⚠ dans le tableau §5). Correctif simple, à faire en phase 1.

### 4.2 Prix déjà affichés, et contradictoires (priorité haute)
Tu m'as dit qu'aucun prix n'est affiché. En réalité, **une vingtaine de pages affichent des tarifs**, et ils ne concordent pas :

| Page | Audit SEO | Suivi mensuel | Autre |
|---|---|---|---|
| /consultant-seo-freelance, Paris, Lille, Lyon, Vannes, Caen, Brest, Toulouse, Dinard, Quimper | 800 à 2 500 € | dès 500 ou 600 €/mois | |
| /accompagnement-seo | | 500-600 €/mois, jusqu'à 800-2 000 € | |
| /consultant-seo-rennes | 800-2 500 € | 500-2 000 €/mois | |
| /consultant-geo-rennes | audit GEO inclus dans l'audit SEO (800-2 500 €) | dès 600 €/mois | |
| /consultant-seo-angers | 1 500-3 000 € | 600-1 500 €/mois | |
| /consultant-seo-bordeaux | 600-1 200 € | 900-2 500 €/mois | |
| /consultant-seo-saint-nazaire | 1 500-2 500 € | 1 200-3 500 €/mois | |
| /consultant-seo-nice | 800-1 500 € | 2 000-5 000 €/mois | stratégie annuelle 15-40 k€ |
| /consultant-seo-strasbourg | 1 000-1 500 € | 2 000-5 000 €/mois | stratégie annuelle 18-45 k€ |
| /consultant-seo-laval | 800-1 300 € | 1 500-4 000 €/mois | stratégie annuelle 15-40 k€ |
| /consultant-seo-le-mans | 700-1 200 € | 1 500-3 500 €/mois | stratégie annuelle 15-35 k€ |
| /consultant-seo-montpellier | 600-1 000 € | 1 500-4 000 €/mois | |
| /consultant-seo-marseille | « peut coûter 500 € » | | |
| /formation-seo | | | 300 € les 2 h, 450-600 € le module |
| /redaction-web, /redacteur-web-rennes, /redacteur-web-juridique | | | article 150-400 € |
| /cout-prestation-seo (JSON-LD `Offer`) | 800-10 000 € | 500-20 000 €/mois | formation 800-1 500 € (contredit /formation-seo) |

Une IA qui lit ces pages reçoit des signaux contradictoires sur tes tarifs. Il faut une grille unique, validée par toi, puis l'appliquer partout (phase 2).

### 4.3 Doublons avec audiaa.fr
- `/prestations/consultant-ia` (IA générative, Make, Claude) recoupe audiaa.fr : `audit-ia-entreprise.html`, `agent-ia-sur-mesure.html`, `automatisation-make-n8n.html`, `ia-pour-marketing.html`.
- `/prestations/formateur-no-code-ia` (Make, Airtable, Claude) recoupe : `formations.html`, `formation-make.html`, `formation-airtable.html`, `formation-n8n.html`, `formation-agent-ia.html`, `formation-claude-code.html`.
- `/blog/automatisation-ia-no-code-entreprise` : sujet Audiaa (il renvoie déjà vers audiaa.fr).
- Le chatbot du site tourne sur l'infrastructure n8n d'Audiaa et se présente comme « consultant SEO, SEA, GEO et IA ».

### 4.4 Présentation : écarts entre les deux sites
| Point | aurelienpage.fr | audiaa.fr |
|---|---|---|
| Nom | « Aurélien PAGE » (majuscules) | « Aurélien Page » |
| Rôle (JSON-LD) | « Consultant SEO & GEO, Traffic Manager, Consultant IA, Formateur No Code » | « Fondateur d'Audiaa · Consultant SEO et GEO » |
| Lien vers l'autre site | **aucun lien vers audiaa.fr** dans le menu, le pied de page ou l'accueil (un seul lien, dans un article de blog) | lien vers aurelienpage.fr en pied de page et page À propos |
| JSON-LD | Person + LocalBusiness (invisibles sans JS, voir R1), pas de `sameAs` vers Audiaa, pas de `founder` | Organization avec `founder` Person, @id dédié |
| Expérience | parcours daté (2012 → aujourd'hui) | « depuis plusieurs années » |

### 4.5 Employeur et clients cités
- La section « Expériences » de l'accueil cite **Compétences Prévention** (poste actuel), ainsi que Useweb, Infopro Digital, 410 Gone, Usine Digitale, Usine Nouvelle, Ouest-France, EGAP, ASCOR. C'est ton CV, pas une page de références clients. Je n'y touche pas. Dis-moi si ce contenu peut rester tel quel ou s'il doit être reformulé.
- Aucune mention de TY eco² trouvée.

### 4.6 Années dans les titres
- `/cout-prestation-seo` : title « Tarifs SEO 2026… », H1 « … en 2026 »
- `/blog/devenir-consultant-seo-freelance` : title et H1 « … en 2025 » (déjà périmé)
- `/blog/tendances-seo-2026` : title et H1 (l'URL contient aussi l'année : on garde l'URL, on change le titre)
- Meta descriptions avec « 2026 » : `geo-vs-seo` et d'autres (à recenser en phase 4)
- Corps de texte : « mis à jour en 2025 » dans `10-secrets-seo` et `rediger-bon-article-blog`

### 4.7 Liens internes cassés ou indirects
| Lien | Résultat | Où |
|---|---|---|
| `/geo-ia-search-ai-overviews` | **404** | `_drafts/consultant-seo-angers.md`, `_drafts/consultant-seo-bordeaux.md` (3 liens) |
| `/audit-seo` | redirection 308 vers `/blog/audit-seo` | `consultant-seo-angers.md`, `consultant-seo-bordeaux.md` |

### 4.8 Autres constats
- **Aucune date visible** (ni publication ni mise à jour) sur les articles. Le JSON-LD Article n'a ni `datePublished` ni `dateModified`.
- Fiches `/prestations/*` très courtes (150 à 170 mots), sans FAQ, sans tarif, sans résumé factuel.
- H1 de l'accueil = « Aurélien PAGE » seul.
- Chiffres sans source dans des pages locales (ex. « 30-40 % de vos clients potentiels cherchent… » sur Bordeaux). Recensement complet en phase 4.
- `/mentions-legales` en `noindex` : normal.
- Pas de `BreadcrumbList` en JSON-LD (fils d'Ariane visuels présents sur certaines pages).
- Pas de page « À propos » dédiée : le lien « À propos » pointe vers `/#about`.

---

## 5. Tableau des pages (92 URL du sitemap)

Mots = nombre de mots dans `<main>`, HTML brut. JSON-LD = types réellement présents dans le HTML (hors Person/LocalBusiness du layout, invisibles sans JS). « Date visible » : aucune page n'en affiche.

| URL | Title (sans « · Aurélien PAGE ») | H1 | Type | Mots | FAQ | JSON-LD (dans le HTML) | Auteur visible | Date visible | Question couverte |
|---|---|---|---|---|---|---|---|---|---|
| / | Aurélien PAGE · Consultant SEO, SEA, IA & Formateur No Code · Rennes | Aurélien PAGE | accueil | 845 | non | **aucun** | oui | non |  |
| /prestations | Prestations · SEO, SEA, IA, No Code | 5 expertises complémentaires | fiche prestation | 178 | non | **aucun** | non | non |  |
| /prestations/consultant-seo-geo | Consultant SEO & GEO Rennes | Consultant SEO GEO : audit, stratégie et visibilité organique | fiche prestation | 161 | non | Service,Person | non | non | A1, A2 (partiel) |
| /prestations/traffic-manager-sea | Traffic Manager SEA · Google Ads & Meta Ads | Traffic Manager SEA : campagnes Google Ads Meta Ads | fiche prestation | 153 | non | Service,Person | non | non | A7, A8 (partiel, sans prix) |
| /prestations/consultant-ia | Consultant IA Marketing · Claude AI, Make | Consultant IA : intégration de l IA générative dans vos workflows marketing | fiche prestation | 172 | non | Service,Person | non | non |  |
| /prestations/chef-de-projet-digital | Chef de Projet Digital Freelance · Rennes | Chef de Projet Digital : pilotage de projets web et transformation digitale | fiche prestation | 153 | non | Service,Person | non | non | A12 |
| /prestations/formateur-no-code-ia | Formateur No Code & IA · Make, Airtable, Claude | Formateur No Code IA : Make, Airtable, Claude AI pour vos équipes | fiche prestation | 164 | non | Service,Person | non | non |  |
| /blog | Blog SEO : guides, méthodes et stratégies | Guides SEO, méthodes et stratégies | index blog | 367 | non | Blog,Person | non | non |  |
| /pourquoi-consultant-seo | Pourquoi faire appel à un consultant SEO ? | Pourquoi faire appel à un consultant SEO ? | page offre/guide | 1316 | non | FAQPage | non | non | A35 (partiel) |
| /cout-prestation-seo | Tarifs SEO 2026 : prix audit, freelance et agence **(année)** | Combien coûte une prestation SEO ? Tarifs et grilles de prix en 2026 | page offre/guide | 1505 | oui | FAQPage,Service,Person,Offer | non | non | A4, A5, A6 (prix de marché) |
| /redaction-web | Rédaction web SEO / Contenus optimisés Google & IA | Rédaction web SEO : contenus optimisés pour Google et les moteurs IA | page offre/guide | 1324 | oui | Article,Person | oui | non |  |
| /accompagnement-seo | Accompagnement SEO mensuel / Consultant freelance | Accompagnement SEO : suivi mensuel par un consultant freelance | page offre/guide | 1316 | oui | Article,Person | oui | non | A6 |
| /consultant-geo-rennes | Consultant GEO à Rennes / Expert Generative Engine Optimization | Consultant GEO à Rennes / Expert en Generative Engine Optimization | page offre/guide | 1343 | oui | Article,Person | oui | non | A2 |
| /redacteur-web-rennes | Rédacteur web SEO à Rennes / Aurélien PAGE | Rédacteur web à Rennes : contenus SEO qui attirent et convertissent | page offre/guide | 1304 | oui | Article,Person | oui | non |  |
| /redacteur-web-juridique | Rédacteur web juridique SEO / Avocats, notaires, experts-comptables | Rédacteur web juridique : des contenus SEO pour cabinets et professions réglementées | page offre/guide | 1246 | oui | Article,Person | oui | non |  |
| /consultant-seo-freelance | Consultant SEO Freelance / Aurélien PAGE · SEO, GEO & Google Ads | Consultant SEO freelance : expertise SEO, GEO et SEA sans les frais d agence | page offre/guide | 1393 | oui | Article,Person | oui | non | A5 |
| /formation-seo | Formation SEO / Apprenez le référencement naturel avec un praticien | Formation SEO : apprenez le référencement naturel avec un praticien | page offre/guide | 1264 | oui | Article,Person | oui | non | A9, A11, A27 (FAQ) |
| /contact | Contact · Aurélien PAGE — Consultant SEO & GEO Freelance | **⚠ aucun H1** | utilitaire | 55 | non | **aucun** | non | non |  |
| /mentions-legales | Mentions légales | Mentions légales | utilitaire | 282 | non | **aucun** | oui | non |  |
| /blog/fonctionnement-moteurs-recherche | **⚠ Métadonnées de la page** | Comment fonctionnent les moteurs de recherche : crawl, indexation et ranking | article blog | 1627 | non | Article,Person | oui | non |  |
| /blog/apprendre-le-seo-principes-debutants | Apprendre le SEO : les principes fondamentaux pour bien débuter | Apprendre le SEO : les principes fondamentaux pour bien débuter | article blog | 1819 | oui | Article,Person | oui | non |  |
| /blog/serp-typologies-intentions-recherche | **⚠ Métadonnées de la page** | SERP : définition, typologies et intentions de recherche expliquées | article blog | 1670 | oui | Article,Person | oui | non |  |
| /blog/seo-technique-core-web-vitals | **⚠ Métadonnées de la page** | SEO technique : les fondations indispensables d un site bien référencé | article blog | 1801 | non | Article,Person | oui | non |  |
| /blog/crawler-seo | **⚠ Métadonnées de la page** | Crawler SEO : fonctionnement, profondeur de crawl et optimisation | article blog | 1573 | non | Article,Person | oui | non |  |
| /blog/indexabilite-seo | **⚠ Métadonnées de la page** | Indexabilité SEO : pages indexables, non indexables et stratégie de crawl budget | article blog | 1392 | non | Article,Person | oui | non |  |
| /blog/robots-txt-meta-robots | **⚠ Métadonnées de la page** | Robots.txt et meta robots : contrôler le crawl et l indexation de votre site | article blog | 1380 | non | Article,Person | oui | non | A17 (partiel, robots classiques) |
| /blog/balise-canonique | **⚠ Métadonnées de la page** | Balise canonique : définition, utilité et bonnes pratiques SEO | article blog | 1341 | non | Article,Person | oui | non |  |
| /blog/codes-http-seo | **⚠ Métadonnées de la page** | Codes HTTP et SEO : 200, 301, 404, 410 et leur impact sur votre référencement | article blog | 1534 | non | Article,Person | oui | non |  |
| /blog/donnees-structurees-schema-org | **⚠ Métadonnées de la page** | Données structurées et Schema.org : le guide pour les rich results et l IA Search | article blog | 1343 | oui | Article,Person | oui | non | A22 (partiel) |
| /blog/fil-ariane-seo | Fil d'Ariane SEO : définition, bénéfices et implémentation | Fil d Ariane SEO : définition, bénéfices et implémentation | article blog | 1538 | oui | Article,Person | oui | non |  |
| /blog/page-orpheline-seo | **⚠ Métadonnées de la page** | Page orpheline en SEO : définition, impact et comment les identifier | article blog | 1278 | non | Article,Person | oui | non |  |
| /blog/analyse-logs-seo | Analyse de logs SEO : comprendre le comportement de Googlebot sur votre site | Analyse de logs SEO : comprendre le comportement de Googlebot sur votre site | article blog | 1984 | oui | Article,Person | oui | non |  |
| /blog/google-search-console | **⚠ Métadonnées de la page** | Google Search Console : le guide complet pour piloter votre SEO | article blog | 1739 | oui | Article,Person | oui | non |  |
| /blog/strategie-contenu-seo | **⚠ Métadonnées de la page** | Stratégie de contenu SEO : produire du contenu qui génère du trafic et de l autorité | article blog | 2321 | oui | Article,Person | oui | non |  |
| /blog/choisir-mots-cles-seo | **⚠ Métadonnées de la page** | Comment choisir les bons mots-clés en SEO : méthode en 4 étapes | article blog | 2141 | oui | Article,Person | oui | non |  |
| /blog/seo-on-page-optimisation | **⚠ Métadonnées de la page** | SEO on-page : les éléments clés à optimiser sur chaque page | article blog | 1910 | oui | Article,Person | oui | non |  |
| /blog/cocon-semantique-maillage-interne | **⚠ Métadonnées de la page** | Cocon sémantique : structurer son site pour dominer les SERPs | article blog | 1524 | oui | Article,Person | oui | non |  |
| /blog/rediger-bon-article-blog | **⚠ Métadonnées de la page** | Rédiger un bon article de blog : structure, méthode et optimisation SEO | article blog | 2014 | oui | Article,Person | oui | non | A26 (partiel) |
| /blog/calendrier-editorial | **⚠ Métadonnées de la page** | Calendrier éditorial : comment planifier sa stratégie de contenu efficacement | article blog | 1599 | non | Article,Person | oui | non |  |
| /blog/netlinking-backlinks-pagerank | **⚠ Métadonnées de la page** | Netlinking et backlinks : comment construire votre autorité SEO | article blog | 1724 | non | Article,Person | oui | non |  |
| /blog/netlinking-avance | **⚠ Métadonnées de la page** | Netlinking avancé : PageRank sculpting, stratégies de liens et outils pros | article blog | 2775 | non | Article,Person | oui | non |  |
| /blog/geo-ia-search-ai-overviews | **⚠ Métadonnées de la page** | GEO : optimiser son contenu pour la recherche IA et les AI Overviews | article blog | 2045 | oui | Article,Person | oui | non | A30, A13 (partiel) |
| /blog/ia-search-moteurs-reponses | **⚠ Métadonnées de la page** | IA Search : comment fonctionnent vraiment les moteurs de réponses | article blog | 2263 | non | Article,Person | oui | non | A36 |
| /blog/google-eeat | Google EEAT : définition, critères et comment l'améliorer concrètement | Google EEAT : définition, critères et comment l améliorer concrètement | article blog | 1958 | oui | Article,Person | oui | non |  |
| /blog/seo-local-google-my-business | **⚠ Métadonnées de la page** | SEO local et Google My Business : dominer les recherches de proximité | article blog | 1888 | non | Article,Person | oui | non |  |
| /blog/audit-seo | **⚠ Métadonnées de la page** | Audit SEO : méthode complète pour diagnostiquer et corriger votre référencement | article blog | 1911 | non | Article,Person | oui | non | A23 (partiel) |
| /blog/devenir-consultant-seo-freelance | Devenir consultant SEO freelance en 2025 : guide complet pour se lancer **(année)** | Devenir consultant SEO freelance : par où commencer et comment réussir en 2025 ? | article blog | 1611 | non | Article,Person | oui | non | A38 |
| /blog/geo-vs-seo | GEO vs SEO : différences, complémentarité et ce que ça change pour vous | GEO vs SEO : différences, complémentarité et ce que ça change pour vous | article blog | 1480 | oui | Article,Person | oui | non | A14 |
| /blog/mesurer-visibilite-geo | Comment mesurer sa visibilité GEO : outils, métriques et méthode | Comment mesurer sa visibilité GEO : outils, métriques et méthode | article blog | 1560 | oui | Article,Person | oui | non | A31, A24 (partiel) |
| /blog/structurer-contenu-geo | Structurer son contenu pour le GEO : guide pratique et checklist | Structurer son contenu pour le GEO : guide pratique et checklist | article blog | 1783 | oui | Article,Person | oui | non | A33 |
| /blog/perplexity-citation-geo | Perplexity SEO : comment être cité comme source dans les réponses IA | Perplexity SEO : comment être cité comme source dans les réponses IA | article blog | 1668 | oui | Article,Person | oui | non | A29 |
| /blog/seo-startups | SEO pour startups : stratégie, priorités et erreurs à éviter | SEO pour startups : stratégie, priorités et erreurs à éviter | article blog | 1654 | oui | Article,Person | oui | non |  |
| /blog/tendances-seo-2026 | Tendances SEO 2026 : ce qui va vraiment compter pour votre trafic **(année)** | Tendances SEO 2026 : ce qui va vraiment compter pour votre trafic | article blog | 1568 | oui | Article,Person | oui | non |  |
| /blog/fautes-orthographe-redaction-web | Fautes d'orthographe en rédaction web : les plus fréquentes et comment les éviter | Fautes d orthographe en rédaction web : les plus fréquentes et comment les éviter | article blog | 1396 | non | Article,Person | oui | non |  |
| /blog/optimiser-profil-malt | Optimiser son profil Malt pour attirer plus de clients en SEO freelance | Optimiser son profil Malt pour attirer plus de clients en SEO freelance | article blog | 1386 | non | Article,Person | oui | non |  |
| /blog/copywriter-eviter-syndrome-page-blanche | Copywriter : comment éviter le syndrome de la page blanche | Copywriter : comment éviter le syndrome de la page blanche | article blog | 1782 | non | Article,Person | oui | non |  |
| /blog/erreurs-seo-frequentes | Les 10 erreurs SEO les plus fréquentes, et comment les éviter | Les 10 erreurs SEO les plus fréquentes, et comment les éviter | article blog | 1845 | oui | Article,Person | oui | non |  |
| /blog/formes-contenus-redaction-web | Les différentes formes de contenus en rédaction web | Les différentes formes de contenus en rédaction web | article blog | 1912 | oui | Article,Person | oui | non |  |
| /blog/rediger-titre-seo | Comment rédiger un titre efficace : H1, balise title et copywriting | Comment rédiger un titre efficace : H1, balise title et copywriting | article blog | 1596 | oui | Article,Person | oui | non |  |
| /blog/optimiser-liens-internes | Optimiser ses liens internes : méthode SEO complète | Optimiser ses liens internes : méthode SEO complète | article blog | 1740 | oui | Article,Person | oui | non |  |
| /blog/techniques-redaction-web | Techniques de rédaction web : améliorer son contenu pour le SEO et les lecteurs | Techniques de rédaction web : améliorer son contenu pour le SEO et les lecteurs | article blog | 1978 | oui | Article,Person | oui | non |  |
| /blog/canva-creation-contenus | Utiliser Canva pour la création de contenus : guide pratique | Utiliser Canva pour la création de contenus : guide pratique | article blog | 1781 | oui | Article,Person | oui | non |  |
| /blog/pagination-seo | Pagination et SEO : gérer les pages /page/2 sans perdre de trafic | Pagination et SEO : gérer les pages /page/2 sans perdre de trafic | article blog | 1591 | oui | Article,Person | oui | non |  |
| /blog/erreurs-seo-critiques | 3 erreurs SEO qui ruinent votre site (et comment les corriger rapidement) | 3 erreurs SEO qui ruinent votre site (et comment les corriger rapidement) | article blog | 1648 | oui | Article,Person | oui | non |  |
| /blog/lexique-seo | Lexique SEO : 50 termes essentiels expliqués simplement | Lexique SEO : 50 termes essentiels expliqués simplement | article blog | 2534 | oui | Article,Person | oui | non |  |
| /blog/quest-ce-que-le-seo | Qu'est-ce que le SEO ? Définition, piliers et fonctionnement | Qu est-ce que le SEO ? Définition, piliers et fonctionnement | article blog | 1617 | oui | Article,Person | oui | non |  |
| /blog/10-secrets-seo | 10 techniques SEO sous-exploitées pour booster votre référencement | 10 techniques SEO sous-exploitées pour booster votre référencement | article blog | 1643 | oui | Article,Person | oui | non |  |
| /blog/chatgpt-search-geo | ChatGPT Search SEO : comment être cité dans les réponses de ChatGPT | ChatGPT Search SEO : comment être cité dans les réponses de ChatGPT | article blog | 1426 | oui | Article,Person | oui | non | A29, A20 (partiel) |
| /blog/reporting-seo-kpis | Reporting SEO : les KPIs qui comptent vraiment (et comment les lire) | Reporting SEO : les KPIs qui comptent vraiment (et comment les lire) | article blog | 1557 | oui | Article,Person | oui | non |  |
| /blog/automatisation-ia-no-code-entreprise | Automatisation IA & No-Code en entreprise : la méthode pour démarrer sans se tromper | Automatisation IA No-Code en entreprise : la méthode pour démarrer sans se tromper | article blog | 1251 | oui | Article,Person | oui | non |  |
| /consultant-seo-rennes | Consultant SEO à Rennes / Expert SEO & GEO | Consultant SEO à Rennes, Référencement naturel GEO pour entreprises bretonnes | page locale | 1088 | oui | Service,Person | oui | non | A1 |
| /consultant-seo-nantes | Consultant SEO à Nantes / Expert SEO & GEO | Consultant SEO à Nantes / Expert SEO GEO | page locale | 977 | oui | Service,Person | oui | non |  |
| /consultant-seo-bordeaux | Consultant SEO à Bordeaux / Expert SEO & GEO | Consultant SEO à Bordeaux, Référencement naturel IA Search pour entreprises bordelaises | page locale | 1547 | oui | Service,Person | oui | non |  |
| /consultant-seo-brest | Consultant SEO à Brest / Expert SEO & GEO | Consultant SEO à Brest / Expert référencement naturel GEO, Finistère | page locale | 1007 | oui | Service,Person | oui | non |  |
| /consultant-seo-caen | Consultant SEO à Caen / Expert SEO & GEO | Consultant SEO à Caen / Expert référencement naturel GEO, Normandie | page locale | 1021 | oui | Service,Person | oui | non |  |
| /consultant-seo-laval | Consultant SEO à Laval / Expert SEO & GEO | Consultant SEO Laval, Référencement naturel et IA Search | page locale | 948 | oui | Service,Person | oui | non |  |
| /consultant-seo-le-mans | Consultant SEO à Le Mans / Expert SEO & GEO | Consultant SEO Le Mans, Référencement naturel et IA Search | page locale | 858 | oui | Service,Person | oui | non |  |
| /consultant-seo-lorient | Consultant SEO à Lorient / Expert SEO & GEO | Consultant SEO Lorient, Référencement naturel et IA Search | page locale | 1007 | oui | Service,Person | oui | non |  |
| /consultant-seo-marseille | Consultant SEO à Marseille / Expert SEO & GEO | Consultant SEO Marseille, Référencement naturel et IA Search | page locale | 884 | oui | Service,Person | oui | non |  |
| /consultant-seo-montpellier | Consultant SEO à Montpellier / Expert SEO & GEO | Consultant SEO Montpellier, Référencement naturel et IA Search | page locale | 896 | oui | Service,Person | oui | non |  |
| /consultant-seo-nice | Consultant SEO à Nice / Expert SEO & GEO | Consultant SEO Nice, Référencement naturel et IA Search | page locale | 915 | oui | Service,Person | oui | non |  |
| /consultant-seo-quimper | Consultant SEO à Quimper / Expert SEO & GEO | Consultant SEO à Quimper / Référencement naturel GEO, Finistère | page locale | 993 | oui | Service,Person | oui | non |  |
| /consultant-seo-saint-malo | Consultant SEO à Saint-Malo / Expert SEO & GEO | Consultant SEO Saint-Malo, Référencement naturel et IA Search | page locale | 977 | oui | Service,Person | oui | non |  |
| /consultant-seo-saint-nazaire | Consultant SEO à Saint-Nazaire / Expert SEO & GEO | Consultant SEO Saint-Nazaire, Référencement naturel et IA Search | page locale | 1091 | oui | Service,Person | oui | non |  |
| /consultant-seo-strasbourg | Consultant SEO à Strasbourg / Expert SEO & GEO | Consultant SEO Strasbourg, Référencement naturel et IA Search | page locale | 819 | oui | Service,Person | oui | non |  |
| /consultant-seo-vannes | Consultant SEO à Vannes / Expert SEO & GEO | Consultant SEO à Vannes / Expert référencement naturel GEO, Morbihan | page locale | 1012 | oui | Service,Person | oui | non |  |
| /consultant-seo-angers | Consultant SEO à Angers / Expert SEO & GEO | Consultant SEO à Angers, Référencement naturel IA Search pour entreprises angevines | page locale | 1325 | oui | Service,Person | oui | non |  |
| /consultant-seo-lille | Consultant SEO à Lille / Expert SEO & GEO | Consultant SEO à Lille / Expert référencement naturel GEO | page locale | 1043 | oui | Service,Person | oui | non |  |
| /consultant-seo-dinard | Consultant SEO à Dinard / Expert SEO & GEO | Consultant SEO à Dinard / Expert référencement naturel GEO, Côte d Émeraude | page locale | 1078 | oui | Service,Person | oui | non |  |
| /consultant-seo-paris | Consultant SEO à Paris / Expert SEO & GEO | Consultant SEO à Paris / Expert référencement naturel GEO, Île-de-France | page locale | 1142 | oui | Service,Person | oui | non |  |
| /consultant-seo-lyon | Consultant SEO à Lyon / Expert SEO & GEO | Consultant SEO à Lyon / Expert référencement naturel GEO | page locale | 996 | oui | Service,Person | oui | non |  |
| /consultant-seo-toulouse | Consultant SEO à Toulouse / Expert SEO & GEO | Consultant SEO à Toulouse / Expert référencement naturel GEO | page locale | 901 | oui | Service,Person | oui | non |  |

---

## 6. Lighthouse (Lighthouse 12.8, local, sur le site en ligne)

L'API PageSpeed Insights était à court de quota anonyme : mesures faites avec Lighthouse en ligne de commande sur ce poste. Une seule passe par page : les valeurs peuvent varier de ±5 points.

| Page | Appareil | Perf. | Accessibilité | Bonnes pratiques | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| Accueil | mobile | 76 | 100 | 100 | 100 | 4,9 s | 0 | 70 ms |
| Accueil | ordinateur | 98 | 100 | 100 | 100 | 1,1 s | 0 | 0 ms |
| /prestations/consultant-seo-geo | mobile | 84 | 100 | 100 | 100 | 3,6 s | 0 | 180 ms |
| /prestations/consultant-seo-geo | ordinateur | 100 | 100 | 100 | 100 | 0,5 s | 0 | 0 ms |
| /blog/geo-ia-search-ai-overviews | mobile | 74 | 100 | 100 | 100 | 4,8 s | 0,001 | 190 ms |
| /blog/geo-ia-search-ai-overviews | ordinateur | 99 | 100 | 100 | 100 | 0,8 s | 0 | 0 ms |

Lecture : le point faible est le **LCP mobile** (seuil Google : 2,5 s). 87 % du temps vient du « délai de rendu » : l'élément principal est un texte, affiché seulement après le JavaScript (animations Framer Motion en `opacity: 0` sur l'accueil). Pistes : supprimer l'animation d'entrée sur le bloc au-dessus de la ligne de flottaison, `preconnect` vers Google Tag Manager (−320 ms estimés), JavaScript inutilisé (−73 à −99 Kio).

---

## 7. Couverture des 38 questions ciblées

| Statut | Questions |
|---|---|
| Couvertes par une page existante (à remettre au gabarit) | A1, A2, A4, A5, A6, A7, A9, A11, A12, A14, A29, A30, A31, A33, A36, A38 |
| Couvertes en partie | A8 (pas de prix), A13 (dans un article de blog), A17 (robots classiques seulement), A20, A22, A23, A24, A26, A27 (une ligne de FAQ), A35 |
| Pas de page | A3 (audit GEO), A10 (formation GEO), A15, A16, A18, A19, A21, A25, A28, A32, A34, A37 |
| Doublon probable à arbitrer | A14 : `/blog/geo-vs-seo` contre le futur article-réponse. A29 : `chatgpt-search-geo` et `perplexity-citation-geo` couvrent la même question |
