# Plan GEO · aurelienpage.fr

Branche : `geo-aurelienpage`. Aucun commit, push ou déploiement sans accord explicite d'Aurélien pour l'action précise.
Reprise après interruption : repartir de la première case non cochée.

Documents : `GEO-INVENTAIRE.md` (phase 0) · `GEO-REGLES.md` (phase 1) · `GEO-REVUE-BLOG.md` (phase 4) · `questions-geo-aurelienpage.csv` (phase 6)

---

## Phase 0 · Inventaire (lecture seule) ✅ validée
- [x] Dépôt, GitHub, hébergeur, build, stockage des articles
- [x] Tableau des 92 pages (title, H1, type, mots, FAQ, JSON-LD, auteur, date, question couverte)
- [x] robots.txt, sitemap.xml, llms.txt, accès des 10 robots (docs officielles citées)
- [x] Rendu côté serveur, JS repéré
- [x] Doublons Audiaa, années dans les titres, incohérences, liens cassés
- [x] Lighthouse mobile et ordinateur (accueil, fiche, article)
- [x] GEO-INVENTAIRE.md + ce plan

## Phase 1 · Socle technique ✅ validée
- [x] GEO-REGLES.md (règles d'écriture, 3 formats, gabarits)
- [x] Corriger le bug title « Métadonnées de la page » (23 articles, `lib/draft-parser.ts`)
- [x] Corriger les 3 liens cassés et 2 liens redirigés (Angers, Bordeaux)
- [x] robots.txt : autoriser explicitement robots de recherche IA + Bingbot
- [x] Choix d'Aurélien sur les robots d'entraînement : tout autoriser (validé) (GPTBot, ClaudeBot, Google-Extended)
- [x] sitemap.xml avec lastmod réel, généré depuis les fichiers
- [x] JSON-LD Person en vraie balise `<script>` (pas via JS), knowsAbout, sameAs LinkedIn + audiaa.fr, `founder` → Organization Audiaa
- [x] JSON-LD ProfessionalService + BreadcrumbList partout
- [x] Proposer H1 + résumé 40-60 mots de l'accueil (proposition seulement)
- [x] Auteur + date de mise à jour visibles sur chaque article, datePublished/dateModified en JSON-LD
- [x] llms.txt + note sur ce qu'en disent les sources officielles
- [x] IndexNow : fichier clé (non affichée) + script d'envoi après déploiement
- [x] Validation JSON-LD, build, aperçu local
- [x] Compte rendu + actions Aurélien (Bing Webmaster Tools, Google Business Profile)

## Phase 2 · Fiches prestation et formation ✅ validée
- [x] Options pour Consultant IA et Formateur No Code & IA présentées : (a) recentrer, (b) 301 vers audiaa.fr. décision : (b) 301 vers audiaa.fr
- [x] Grille de tarifs harmonisée (validée)
- [x] /prestations/consultant-seo-geo au gabarit (A1, A2, A4) → validée (placeholders reformulés)
  - Gabarit réutilisable : components/FicheLayout.tsx (10 blocs, JSON-LD Service + FAQPage + BreadcrumbList)
  - validator.schema.org bloqué (anti-robot) : contrôle local contre le vocabulaire officiel Schema.org, 0 problème sur 14 pages
- [x] /accompagnement-seo
- [x] /formation-seo
- [x] /prestations/traffic-manager-sea
- [x] /prestations/chef-de-projet-digital
- [x] Créer /prestations/audit-geo (A3)
- [x] Créer /formation-geo (A10)
- [x] Financement : vérifier L6316-1 Code du travail sur Légifrance, statut Qualiopi
- [x] Menu, sitemap, llms.txt à jour, aperçu local, liste des [À COMPLÉTER PAR AURÉLIEN]

## Phase 3 · Articles-réponses ✅ validée
- [x] Modèle /reponses/[slug] + page /reponses par thème (lib/reponses/*.ts, components/ReponseLayout.tsx)
- [x] A13 rédigé (Aurélien a délégué la validation : lot 1 rédigé d'un bloc)
- [x] A14, A23, A17, A18, A21
- [x] Liens inverses fiche ↔ réponse ↔ blog
- [x] Build, aperçu local
- [x] Lot 2 : A20, A15, A16, A19, A22, A24, A27, A28, A25, A26

## Phase 4 · Revue des articles de blog ✅ validée
- [x] GEO-REVUE-BLOG.md (tableau complet, 51 articles, impressions Search Console)
- [x] Reprise des 6 articles prioritaires : A30, A36, A38, A29 (fusion Perplexity), A31, A33
- [x] Build, aperçu local

## Phase 5 · Maillage et cohérence Audiaa ✅ en attente d'accord commit / push / déploiement
- [x] Appliquer les décisions restantes de GEO-REVUE-BLOG.md : geo-vs-seo → 301 /reponses/difference-seo-geo ; erreurs-seo-critiques → 301 erreurs-seo-frequentes ; canva-creation-contenus → 301 formes-contenus-redaction-web ; retitrer 10-secrets-seo (« booster ») et tendances-seo-2026 (année) ; retirer les chiffres non sourcés d'ouverture (apprendre-le-seo, choisir-mots-cles-seo)
- [x] Créer une page À propos (lien « Qui répond » des réponses)
- [x] Chaque fiche reçoit ≥ 3 liens d'articles ; aucune page orpheline
- [x] Lien audiaa.fr (À propos + pied de page), écarts de présentation listés
- [x] Appliquer la décision Consultant IA / Formateur No Code & IA
- [x] Schéma du maillage, build, liste des fichiers modifiés
- [ ] Accord commit + push → accord déploiement

## Phase 6 · Préparation Balise (sans rien lancer)
- [ ] questions-geo-aurelienpage.csv (38 questions, P1/P2/P3)
- [ ] Message pour la session Claude Code du dépôt Balise (import + estimation de coût P1)

---

## Décisions et informations attendues d'Aurélien
| Sujet | Statut |
|---|---|
| Grille de tarifs : pas de grille formelle. Consigne d'Aurélien : rendre cohérent. Valeurs majoritaires déjà en ligne (voir ci-dessous) | validé |
| Section « Expériences » (Compétences Prévention et autres employeurs cités) : garder telle quelle ? | gardée telle quelle (validé) |
| Robots d'entraînement : autoriser ou bloquer | phase 1 |
| Consultant IA / Formateur No Code & IA : option (a) ou (b) | (b) redirections 301 vers audiaa.fr (Aurélien : « tu as toute ma confiance ») |
| Informations manquantes (durées, prérequis, exemples, paiement) | Aurélien ne complétera pas : reformuler sans inventer, aucun [À COMPLÉTER] en ligne |
| Certification Qualiopi | à confirmer (le site dit « non certifié à ce jour ») |
| Modifications non commitées présentes sur `main` (tirets cadratins) : à garder dans la branche ? | gardées (validé) |

## Harmonisation des tarifs (proposition, à appliquer en phase 2)
Règle : on ne garde que des montants déjà publiés sur le site, en retenant la valeur la plus fréquente. Aucun nouveau montant n'est créé.

| Prestation | Valeur retenue | Origine | Pages à corriger |
|---|---|---|---|
| Audit SEO | 800 à 2 500 € selon la taille du site | 11 pages | Angers, Bordeaux, Saint-Nazaire, Nice, Strasbourg, Laval, Le Mans, Montpellier, Marseille |
| Accompagnement SEO mensuel | à partir de 500 €/mois, jusqu'à 2 000 €/mois, au-delà sur devis | 8 pages « dès 500 € », plafond de /accompagnement-seo et Rennes | Paris, Lille, /consultant-seo-freelance, /consultant-geo-rennes, Angers (600 €), Bordeaux, Saint-Nazaire, Nice, Strasbourg, Laval, Le Mans, Montpellier |
| Stratégie annuelle 15 à 45 k€ | supprimée | 4 pages seulement, aucune offre correspondante | Nice, Strasbourg, Laval, Le Mans |
| Formation SEO | 300 € les 2 h, 450 à 600 € le module de 3-4 h, parcours sur devis | /formation-seo | JSON-LD de /cout-prestation-seo (800-1 500 €) |
| Rédaction d'article | 150 à 350 € ; juridique 200 à 400 € (spécialité) | /redaction-web, /redacteur-web-juridique | /redacteur-web-rennes (150-300 €) |
| Audit GEO | inclus dans un audit SEO et GEO plus large (800 à 2 500 €), pas vendu seul (validé par Aurélien) | /consultant-geo-rennes | nouvelle fiche /prestations/audit-geo : présente le volet GEO de l'audit SEO et GEO, renvoie vers /prestations/consultant-seo-geo |
| Formation GEO, gestion Google Ads (SEA), chef de projet digital | « sur devis » ou [À COMPLÉTER PAR AURÉLIEN] | aucun montant en ligne | fiches concernées |
| JSON-LD `Offer` de /cout-prestation-seo | aligné sur cette grille (aujourd'hui 800-10 000 € et 500-20 000 €/mois) | | /cout-prestation-seo |

Note : les fourchettes de marché de /cout-prestation-seo (tarifs des autres prestataires) ne sont pas tes prix. Elles restent, mais sans source primaire : traitement en phase 4 (source ou retrait).

## Notes phase 1
- H1 accueil appliqué (validé) : « Aurélien PAGE, Consultant SEO, GEO et SEA à Rennes » + résumé factuel. H1 et résumé rendus sans animation (LCP mobile local 3,1 s contre 4,9 s en ligne).
- Badge disponibilité : « Disponible pour missions (octobre 2026) » (config/availability.ts, à mettre à jour chaque mois à la main).
- À traiter en phase 2/5 : le texte défilant de l'accueil fait encore tourner « Consultant IA » et « Formateur No Code & IA ».
- Les dates de publication des articles migrés depuis WordPress = date d'arrivée dans ce dépôt (29 juillet 2026). Dates d'origine inconnues.
- Écart à traiter en phase 5 : « 8 ans d'expérience » (AuthorBio) contre parcours SEO/SEA depuis 2020 et web depuis 2012 (section Expériences).
- Écart à traiter en phase 5 : nom « Aurélien PAGE » affiché, « Aurélien Page » dans le JSON-LD et sur audiaa.fr.
- ESLint n'est pas configuré dans le projet (`npm run lint` demande une configuration interactive).

## Notes phase 2
- Option (b) appliquée : /prestations/consultant-ia → 301 audiaa.fr/prestations.html ; /prestations/formateur-no-code-ia → 301 audiaa.fr/formations.html. Liens retirés (hub, accueil, pied de page, texte défilant, maillage, article automatisation). Lien Audiaa ajouté au pied de page et au hub /prestations.
- Tarifs harmonisés sur 14 pages villes et offres + JSON-LD Offer de /cout-prestation-seo.
- FAQPage invisible supprimé de /cout-prestation-seo (contenu non affiché à l'écran).
- Financement : L6316-1 (version du 1er janvier 2024) vérifié ; ancienne FAQ « certains OPCO prennent en charge » corrigée (contraire au texte).
- Menu « Formations » : pointait vers les diplômes (/#formations), pointe maintenant vers /formation-seo.
- Programme de la formation GEO : découpage en 4 parties (≈ 2 h 30) proposé à partir du module GEO existant (2 à 3 h).
- _drafts/accompagnement-seo.md et _drafts/formation-seo.md ne sont plus utilisés (contenu repris dans les fiches) ; conservés.
- À traiter plus tard (pages villes, hors périmètre blog) : chiffres sans source (Angers : délais « 3 à 6 mois », comparatif agence ; Bordeaux : « 30-40 % »), grilles de marché de /cout-prestation-seo sans source, H2 « Le SEO en 2025 » sur /pourquoi-consultant-seo.

## Notes phase 3
| Réponse | URL | Fiche liée | Mots | Article de blog qui y renvoie |
|---|---|---|---|---|
| A13 | /reponses/qu-est-ce-que-le-geo | consultant-seo-geo | 844 | geo-ia-search-ai-overviews |
| A14 | /reponses/difference-seo-geo | consultant-seo-geo | 715 | geo-vs-seo |
| A23 | /reponses/difference-audit-seo-audit-geo | audit-geo | 642 | audit-seo |
| A17 | /reponses/robots-ia-faut-il-les-bloquer | audit-geo | 768 | robots-txt-meta-robots |
| A18 | /reponses/faut-il-creer-un-fichier-llms-txt | formation-geo | 629 | ia-search-moteurs-reponses |
| A21 | /reponses/contenu-ia-penalise-par-google | formation-geo | 603 | strategie-contenu-seo |
- Sources ouvertes et vérifiées : lib/reponses/sources.ts (Google x7, OpenAI, Anthropic, Perplexity, Bing x2, llmstxt.org, arXiv).
- MarkdownRenderer gère désormais les tableaux et les blocs de code : 4 drafts avec tableaux (dont consultant-seo-angers) s'affichaient en texte brut.
- Source repérée pour A15 : guide de démarrage SEO de Google (« some changes might take effect in a few hours, others could take several months »).

## Notes phase 3, lot 2
| Réponse | URL | Fiche liée | Mots |
|---|---|---|---|
| A20 | /reponses/chatgpt-utilise-t-il-bing | consultant-seo-geo | 662 |
| A15 | /reponses/combien-de-temps-resultats-seo | consultant-seo-geo | 632 |
| A16 | /reponses/combien-de-temps-pour-etre-cite-par-chatgpt | audit-geo | 607 |
| A19 | /reponses/difference-ai-overviews-ai-mode | consultant-seo-geo | 627 |
| A22 | /reponses/donnees-structurees-ia | consultant-seo-geo | 609 |
| A24 | /reponses/part-de-voix-dans-les-ia | audit-geo | 628 |
| A27 | /reponses/formation-seo-cpf-opco | formation-seo (exception : sujet formation SEO) | 604 |
| A28 | /reponses/ai-overviews-baisse-de-trafic | consultant-seo-geo | 632 |
| A25 | /reponses/budget-minimum-google-ads | traffic-manager-sea (exception : sujet SEA) | 631 |
| A26 | /reponses/combien-de-mots-article-seo | formation-seo (exception : rédaction SEO) | 635 |
- Nouvelles sources ouvertes : aide OpenAI « ChatGPT search » (fournisseurs tiers, IP d'OAI-SearchBot, placement non garanti ; Bing jamais nommé, renvoi à la politique de Microsoft), Google structured data intro, blog Google (Liz Reid) sur les clics, Légifrance L6323-6 (version du 27 juin 2026), Bing import Search Console, IndexNow.
- Affirmations non trouvées dans les sources et donc retirées : interface du AI Mode (questions de suivi, onglet), délai « 4 mois à 1 an » de Google (plus en ligne).
- 16 réponses au total, 8 thèmes, sitemap : 108 URL.

## Notes phase 4
- Constat : 0 source primaire sur les 51 articles ; 32 sans H2 en question ; trafic blog quasi nul (0 clic du 1er juillet au 1er octobre 2026).
- Bug corrigé : 31 pages d'offre et pages villes étaient servies en double sous /blog/[fichier]. Redirections 301 générées automatiquement (next.config.js) + dynamicParams = false sur /blog/[slug].
- Réécrits (titre changé, URL inchangée) : geo-ia-search-ai-overviews (947 mots), ia-search-moteurs-reponses (869), devenir-consultant-seo-freelance (847), chatgpt-search-geo (905), mesurer-visibilite-geo (824), structurer-contenu-geo (821). Tous : H1 « Comment… », réponse résumée, H2 en questions, sources primaires, 2+ réponses et 1 fiche liées.
- Fusion : perplexity-citation-geo → 301 vers chatgpt-search-geo, fichier supprimé, liens internes et llms.txt mis à jour.
- Retiré des anciens textes car non vérifiable : « ChatGPT/Perplexity passent principalement par Bing », classifieurs et scores internes (Sonic, QScore, NSR…), « 25 000 requêtes », « 100 millions d'utilisateurs », « 68 % des internautes », rapport « AI Overviews » dans la Search Console, promesses sur les balisages FAQ et HowTo.

## Notes phase 5

### Schéma du maillage final
```
Accueil ─┬─ Prestations (hub) ─┬─ Consultant SEO et GEO ◄── 15 articles (blog + réponses), 22 pages villes
         │                     ├─ Audit GEO ◄── 6 articles
         │                     ├─ Accompagnement SEO mensuel ◄── 4 articles
         │                     ├─ Traffic Manager SEA ◄── 4 articles
         │                     ├─ Chef de projet digital ◄── 3 articles
         │                     ├─ Formation SEO ◄── 3 articles
         │                     └─ Formation GEO ◄── 3 articles
         ├─ Réponses (16, 8 thèmes) ── chacune → 1 seule fiche + 3 autres réponses
         ├─ Blog (47 articles, 9 rubriques générées) ── articles liés + réponses + fiches
         ├─ À propos ── Balise, Audiaa, parcours, formations
         └─ Pages villes (22) ── Consultant SEO et GEO + villes proches
Pied de page : prestations, formations, Audiaa, À propos, Réponses, Blog, villes
Audiaa (audiaa.fr) ◄── pied de page, hub Prestations, À propos, encadré auteur, JSON-LD (founder / worksFor)
```
Contrôle sur le build local : 0 page orpheline, 0 lien interne cassé, chaque fiche ≥ 3 liens d'articles.

### Écarts de présentation aurelienpage.fr / audiaa.fr
| Point | aurelienpage.fr | audiaa.fr | Statut |
|---|---|---|---|
| Nom | Affiché « Aurélien PAGE » ; JSON-LD « Aurélien Page » (alternateName PAGE) | « Aurélien Page » | JSON-LD aligné ; affichage en majuscules laissé (choix graphique) |
| Rôle | « Consultant SEO, GEO et SEA, formateur SEO et GEO » | « Fondateur d'Audiaa, consultant SEO et GEO » | Compatible ; Audiaa ne mentionne ni SEA ni formateur |
| Ville | Rennes | Rennes | Identique |
| Années d'expérience | « 8 ans » (encadré auteur), « 8+ ans » (accueil) ; parcours daté depuis 2012 (web) et 2020 (SEO/SEA) | « depuis plusieurs années » | **À trancher par Aurélien** : chiffre non aligné sur les dates du parcours |
| JSON-LD | Person @id aurelienpage.fr/#person, sameAs LinkedIn + audiaa.fr/apropos.html, worksFor Audiaa | Person sans @id commun, sameAs sans LinkedIn | **À faire dans le dépôt Audiaa** : ajouter sameAs LinkedIn et relier à https://aurelienpage.fr/#person |
| Rôle IA / No Code | Retiré des titres, menu, encadré auteur ; pages 301 vers Audiaa | Porté par Audiaa | Aligné. Reste : section « Parcours » de l'accueil (outils Make/Airtable, valeur « automatiser grâce au no-code ») |
| Orthographe école | « FormasSEO » (accueil) | | Corrigé en « FormaSEO » sur /a-propos uniquement (le site de l'école est formaseo.fr) |

### Fichiers
109 fichiers modifiés, créés ou supprimés (hors tsconfig.tsbuildinfo, fichier de build non suivi, à ne pas committer).
Supprimés : 4 drafts fusionnés ou retirés (redirections 301 en place), 2 pages IA (301 vers audiaa.fr).
