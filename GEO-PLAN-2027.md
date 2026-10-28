# Plan éditorial GEO 2027 · aurelienpage.fr

Feuille de route des nouveaux contenus, priorité GEO. Règles d'écriture et gabarits : GEO-REGLES.md. Questions suivies dans Balise : questions-geo-aurelienpage.csv.

---

## 1. État des lieux (octobre 2026)

- **Environ 100 pages** : 18 articles-réponses, une cinquantaine d'articles de blog, 22 pages villes, fiches prestations et formations.
- **Couverture GEO déjà solide** : définition du GEO, différence SEO/GEO, robots IA, llms.txt, ChatGPT et Bing, AI Overviews et AI Mode, données structurées, part de voix, délais.
- **Trous repérés** : 4 questions suivies sans page dédiée (A32, A34, A35, A37) ; rien sur Claude ni sur la mesure du trafic IA dans GA4 ; pas de lexique GEO.

### Doublons et risques de cannibalisation
| Sujet | Pages en concurrence | Décision proposée |
|---|---|---|
| Être cité par ChatGPT et Perplexity | /blog/chatgpt-search-geo et /reponses/comment-etre-cite-par-chatgpt-et-perplexity (même question exacte) | Garder la réponse sur la question exacte ; recentrer le blog sur « comment » (méthode pas à pas, exemple), changer son H1 et sa ligne Balise (A29) |
| Pages villes | 22 pages au gabarit et au texte très proches (Paris, Lyon, Marseille… sans déplacement réel) | Branche `fusion-villes` prête ; Bordeaux à garder tant que le lien digital64.fr pointe dessus |
| Années dans les contenus | Mentions « en 2026 » dans le corps d'une trentaine de fichiers | Les remplacer par des formulations sans année au fil des mises à jour, pour ne pas refaire l'opération en 2027 |
| URL datée | /blog/tendances-seo-2026 (1 317 impressions) | Garder l'URL (décision GEO-REVUE-BLOG) ; mettre le contenu à jour chaque année |

---

## 2. Vague 1 (rédigée, branche `contenus-geo-2027`, en relecture)

| Page | Format | Question Balise | Pourquoi |
|---|---|---|---|
| /reponses/comment-etre-cite-par-claude | Réponse | A39 (P1, nouvelle) | Aucune page sur Claude ; documentation Anthropic précise (robots, extraits de 150 caractères, cas où Claude cherche) |
| /reponses/trafic-ia-google-analytics-4 | Réponse | A40 (P2, nouvelle) | Le canal GA4 « Assistant IA » est documenté par Google et peu expliqué en français |
| /blog/site-absent-reponses-chatgpt | Blog | A32 (P1, sans page jusqu'ici) | Diagnostic par symptôme, distinct de la méthode de chatgpt-search-geo |
| /blog/audit-geo-etape-par-etape | Blog | A34 (P2, sans page jusqu'ici) | Version « faites-le vous-même » de la fiche Audit GEO, qui y renvoie |
| /blog/lexique-geo | Ressource | A41 (P2, nouvelle) | Définitions autonomes et sourcées : le format que les IA reprennent le plus volontiers |

---

## 3. Vague 2 (premier trimestre 2027)

| Sujet | Format | Question cible | Sources à ouvrir avant d'écrire |
|---|---|---|---|
| Comment choisir un consultant SEO ou GEO ? | Blog | A35 (P2) | Google Search Central « faire appel à un expert SEO » (déjà dans sources.ts) |
| Comment former son équipe marketing au SEO et au GEO ? | Blog | A37 (P2) | Fiches formation du site ; Légifrance pour le financement |
| Comment être cité par Gemini ? | Réponse | nouvelle | Documentation Google (Gemini, Google-Extended, grounding) |
| Comment être cité par Copilot ? | Réponse | nouvelle | Bing Webmaster (réponses de chat, NOARCHIVE, IndexNow) |
| Comment préparer son site aux agents IA et aux navigateurs IA ? | Blog | nouvelle | **Sources primaires à trouver** : documentation OpenAI sur l'agent de ChatGPT et Atlas, signature des requêtes (Web Bot Auth). Ne pas écrire avec des sources secondaires |

## 4. Vague 3 (deuxième trimestre 2027)

| Sujet | Format | Remarque |
|---|---|---|
| Une page « méthode » publique de Balise : comment je mesure la part de voix | Ressource | Contenu original, donc citable ; aucun chiffre client sans accord écrit |
| Comment rédiger une page de prix que les IA reprennent ? | Blog | Question de prix = forte intention ; s'appuie sur les fiches du site |
| Les IA citent-elles les pages FAQ ? | Réponse | Uniquement si une source primaire existe ; sinon abandonner |
| Mise à jour annuelle : tendances SEO et GEO | Blog existant | Même URL, contenu rafraîchi |

---

## 5. Hors du site (distribution GEO)

Les IA citent souvent des tiers : comparatifs, annuaires, médias, forums.
- Relever, sur les questions P1, les sites tiers cités à la place d'aurelienpage.fr (relevé Balise), puis demander à y figurer.
- Profil LinkedIn et fiche Malt cohérents avec la fiche Person du site (même nom, même description, lien vers aurelienpage.fr).
- Aligner la fiche Person d'audiaa.fr (déjà noté dans GEO-PLAN-AURELIENPAGE.md).

## 6. Mesure

- Relevé Balise mensuel sur les P1 (A39 ajoutée), avec la part de voix par moteur et par format.
- GA4 : canal « Assistant IA » et un canal IA personnalisé (voir /reponses/trafic-ia-google-analytics-4), page de destination en dimension secondaire.
- Après chaque mise en ligne : `npm run indexnow`.
