---
slug: "/ressources/checklist-geo"
title: "Checklist GEO : 25 points pour être cité par les IA"
meta-description: "25 points de contrôle pour être cité par ChatGPT, Perplexity, Claude, Gemini et les AI Overviews : accès des robots, indexation, contenu, crédibilité, présence externe, mesure."
---

# Checklist GEO : 25 points pour être cité par les IA

Vous avez lu les guides, vous savez ce qu'est le GEO. Reste à savoir où en est votre site. Cette checklist sert à ça : 25 points à cocher, dans l'ordre où ils bloquent.

**En bref :** les six blocs vont du plus bloquant au plus fin. Un robot refusé (bloc 1) annule tout le reste ; une page bien écrite (bloc 3) ne sert à rien si elle n'est pas indexée (bloc 2). Pour chaque point, la colonne « Comment vérifier » indique le test, et le lien mène à l'explication détaillée. Imprimez la page ou recopiez le tableau dans votre outil de suivi.

## 1. Les robots des IA peuvent-ils accéder au site ?

| # | Point de contrôle | Comment vérifier |
|---|---|---|
| 1 | OAI-SearchBot, Claude-SearchBot et PerplexityBot ne sont pas bloqués dans le robots.txt | Lire votre-site.fr/robots.txt ; voir le [référentiel des robots d'IA](/ressources/robots-ia) |
| 2 | Le pare-feu ou le CDN laisse passer ces robots | Demander à l'hébergeur ; comparer avec les IP publiées par OpenAI et Perplexity |
| 3 | Le texte important est dans le HTML envoyé par le serveur | Afficher le code source de la page et y chercher la réponse |
| 4 | Aucune page clé n'exige une connexion ou un clic pour afficher son texte | Ouvrir la page en navigation privée |

## 2. Les pages sont-elles dans les index ?

| # | Point de contrôle | Comment vérifier |
|---|---|---|
| 5 | Les pages clés sont indexées par Google | Search Console, inspection d'URL |
| 6 | Le site est inscrit sur Bing Webmaster Tools | Import depuis la Search Console ; voir [ChatGPT et Bing](/reponses/chatgpt-utilise-t-il-bing) |
| 7 | Le sitemap est soumis à Google et à Bing | Rapports Sitemaps des deux consoles |
| 8 | Chaque page publiée ou modifiée est signalée avec IndexNow | Journal d'envoi IndexNow |

## 3. Les pages répondent-elles directement ?

| # | Point de contrôle | Comment vérifier |
|---|---|---|
| 9 | Chaque question importante de vos clients a sa page | Liste des questions à côté de la liste des pages |
| 10 | La réponse tient dans les 40 à 60 premiers mots sous le titre | Lire ce passage seul : se comprend-il ? |
| 11 | Les intertitres posent des questions, suivies d'une phrase-réponse | Relire la page par ses seuls intertitres |
| 12 | Un tableau quand la réponse compare ou énumère | Repérer les listes de critères écrites en paragraphe |
| 13 | Vos prix, délais et zones d'intervention sont écrits en texte | Chercher les montants dans le code source |

Méthode détaillée : [comment rédiger un contenu que les IA reprennent](/blog/structurer-contenu-geo).

## 4. Le contenu est-il crédible ?

| # | Point de contrôle | Comment vérifier |
|---|---|---|
| 14 | Chaque chiffre renvoie à une source primaire liée | Relever les chiffres sans lien |
| 15 | L'auteur est identifié, avec une page qui présente son parcours | Lien auteur sur chaque article |
| 16 | La date de mise à jour est visible et réelle | Comparer avec la dernière modification |
| 17 | Les données structurées décrivent la page (Article, FAQ, auteur) | Test des résultats enrichis de Google ; voir [données structurées et IA](/reponses/donnees-structurees-ia) |
| 18 | Le nom, la description et les liens de la marque sont identiques partout | Comparer site, LinkedIn, annuaires |

## 5. Êtes-vous présent là où les IA cherchent ?

| # | Point de contrôle | Comment vérifier |
|---|---|---|
| 19 | Vous connaissez les sites tiers cités sur vos questions | Relevé des sources affichées par les IA |
| 20 | Vous figurez, avec une fiche exacte, dans les comparatifs et annuaires cités | Visiter chacun des sites relevés |
| 21 | Vos profils professionnels renvoient vers votre site | LinkedIn, Google Business Profile, plateformes métier |

## 6. Mesurez-vous le résultat ?

| # | Point de contrôle | Comment vérifier |
|---|---|---|
| 22 | Une liste fixe de 20 à 30 questions clients existe | Fichier de suivi ; voir le [modèle de relevé](/ressources/modele-releve-geo) |
| 23 | Un relevé est fait chaque mois sur ChatGPT, Perplexity, Claude, Gemini et les AI Overviews | Historique des relevés |
| 24 | La part de voix est calculée et suivie dans le temps | Voir [la part de voix dans les IA](/reponses/part-de-voix-dans-les-ia) |
| 25 | Le trafic venu des IA est isolé dans Google Analytics 4 | Canal « Assistant IA » ; voir [le trafic de ChatGPT dans GA4](/reponses/trafic-ia-google-analytics-4) |

## Par où commencer si beaucoup de cases restent vides ?

Par les blocs 1 et 2, dans l'ordre. Ce sont souvent des corrections de quelques minutes, et elles conditionnent tout le reste. Viennent ensuite les points 9 et 10 sur vos cinq questions les plus importantes, puis le point 22 pour pouvoir mesurer vos progrès.

La démarche complète, de la liste de questions au plan d'action, est dans [comment faire un audit GEO de son site](/blog/audit-geo-etape-par-etape). Si vous préférez déléguer, je passe ces 25 points en revue lors d'un [audit GEO](/prestations/audit-geo).

## Sources

- [OpenAI : robots et user-agents](https://developers.openai.com/api/docs/bots)
- [Anthropic : robots de Claude et blocage](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- [Perplexity : robots](https://docs.perplexity.ai/guides/bots)
- [Google Search Central : fonctionnalités IA et votre site web](https://developers.google.com/search/docs/appearance/ai-features)
- [Bing Webmaster Blog : importer ses sites depuis la Search Console](https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools)
- [IndexNow : documentation du protocole](https://www.indexnow.org/documentation)
