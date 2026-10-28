---
slug: "/ressources/positions-officielles-ia"
title: "GEO : ce que disent officiellement Google, OpenAI, Anthropic, Perplexity et Microsoft"
meta-description: "Les positions officielles des éditeurs d'IA sur les sites web : robots, conditions pour être cité, contenus rédigés avec l'IA, llms.txt, mesure. Chaque point avec sa source."
---

# GEO : ce que disent officiellement Google, OpenAI, Anthropic, Perplexity et Microsoft

Sur le GEO, on lit beaucoup d'affirmations sans source : « ChatGPT passe par Bing », « il faut un fichier llms.txt », « le contenu IA est pénalisé ». Certaines sont vraies, d'autres à moitié, d'autres fausses. Le plus sûr est de lire ce que les éditeurs écrivent eux-mêmes.

**En bref :** cette page rassemble, éditeur par éditeur, ce que Google, OpenAI, Anthropic, Perplexity et Microsoft disent aux propriétaires de sites. Les points communs : un robot de recherche distinct du robot d'entraînement, aucune place garantie dans les réponses, et pas de balisage spécial obligatoire. Chaque affirmation renvoie à la page officielle. Je la tiens à jour ; la date de mise à jour est affichée en haut.

## Que dit Google ?

| Sujet | Position de Google | Source |
|---|---|---|
| Condition pour apparaître dans les AI Overviews et le AI Mode | La page doit être indexée et pouvoir s'afficher avec un extrait. Aucune exigence ni optimisation particulière en plus | [Google Search Central](https://developers.google.com/search/docs/appearance/ai-features) |
| Fonctionnement | Les AI Overviews et le AI Mode peuvent décomposer une question en plusieurs recherches (« query fan-out ») | [Google Search Central](https://developers.google.com/search/docs/appearance/ai-features) |
| Mesure | Le trafic issu des fonctionnalités IA est compté dans le rapport Performances de la Search Console, type « Web » | [Google Search Central](https://developers.google.com/search/docs/appearance/ai-features) |
| Google-Extended | Règle l'usage des contenus pour l'entraînement et l'ancrage des modèles Gemini ; n'a aucun effet sur la présence dans Google Search ni sur le classement ; pas de user-agent propre | [Google, robots courants](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers) |
| Contenu rédigé avec l'IA | Autorisé s'il respecte les consignes de Google ; à vérifier et relire avant publication. Générer beaucoup de pages sans valeur pour l'utilisateur peut relever du spam (« scaled content abuse ») | [Google Search Central](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) |
| Trafic IA dans Analytics | GA4 a un canal « Assistant IA » (ChatGPT, Gemini, Copilot, Grok…), qui exclut les AI Overviews et le AI Mode | [Aide Google Analytics](https://support.google.com/analytics/answer/9756891?hl=fr) |

## Que dit OpenAI ?

| Sujet | Position d'OpenAI | Source |
|---|---|---|
| Robot de recherche | OAI-SearchBot fait apparaître les sites dans la recherche de ChatGPT. Le bloquer retire le site des réponses de recherche, sauf comme simple lien | [OpenAI](https://developers.openai.com/api/docs/bots) |
| Robot d'entraînement | GPTBot. Chaque réglage est indépendant : bloquer GPTBot n'empêche pas d'être cité | [OpenAI](https://developers.openai.com/api/docs/bots) |
| Visites d'utilisateurs | ChatGPT-User agit à la demande d'un utilisateur ; le robots.txt peut ne pas s'appliquer | [OpenAI](https://developers.openai.com/api/docs/bots) |
| Délai | Un changement du robots.txt peut demander environ 24 heures | [OpenAI](https://developers.openai.com/api/docs/bots) |
| Moteurs utilisés | ChatGPT envoie ses requêtes à des fournisseurs de recherche partenaires ; l'aide renvoie notamment à la politique de confidentialité de Microsoft | [Aide OpenAI](https://help.openai.com/en/articles/9237897-chatgpt-search) |
| Place dans les réponses | Le placement n'est pas garanti | [Aide OpenAI](https://help.openai.com/en/articles/9237897-chatgpt-search) |

## Que dit Anthropic ?

| Sujet | Position d'Anthropic | Source |
|---|---|---|
| Robots | Claude-SearchBot indexe pour la recherche, Claude-User lit une page à la demande d'un utilisateur, ClaudeBot collecte pour l'entraînement | [Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) |
| Blocage | Passer par le robots.txt de chaque sous-domaine ; bloquer les adresses IP ne garantit pas une exclusion fiable | [Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) |
| Citations | Toujours activées pour la recherche web ; l'extrait cité fait 150 caractères au plus ; la date de mise à jour de la page est transmise | [Anthropic, recherche web](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool) |
| Quand Claude cherche | Sur les informations récentes ou changeantes et sur des organisations, personnes ou produits précis ; pas sur les connaissances stables | [Anthropic, recherche web](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool) |

## Que dit Perplexity ?

| Sujet | Position de Perplexity | Source |
|---|---|---|
| Robot de recherche | PerplexityBot fait apparaître et lier les sites dans les résultats ; il ne collecte pas de contenus pour entraîner des modèles | [Perplexity](https://docs.perplexity.ai/guides/bots) |
| Visites d'utilisateurs | Perplexity-User ignore en général le robots.txt, puisque la visite est demandée par un utilisateur | [Perplexity](https://docs.perplexity.ai/guides/bots) |
| Pare-feu | Les plages d'adresses IP des deux robots sont publiées, pour les autoriser | [Perplexity](https://docs.perplexity.ai/guides/bots) |

## Que dit Microsoft (Bing) ?

| Sujet | Position de Microsoft | Source |
|---|---|---|
| Réponses de chat | La balise NOARCHIVE retire une page des réponses de chat de Bing ; NOCACHE limite ce qui en est repris | [Bing Webmaster Blog](https://blogs.bing.com/webmaster/september-2023/Announcing-new-options-for-webmasters-to-control-usage-of-their-content-in-Bing-Chat) |
| Indexation rapide | IndexNow permet de signaler une page publiée ou modifiée sans attendre le robot | [IndexNow](https://www.indexnow.org/documentation) |
| Inscription | Bing Webmaster Tools importe les sites déjà vérifiés dans la Search Console | [Bing Webmaster Blog](https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools) |

## Et le fichier llms.txt ?

C'est une **proposition** de format pour résumer un site à destination des modèles de langage ([llmstxt.org](https://llmstxt.org/)). Aucun des éditeurs ci-dessus ne le présente, dans les pages citées ici, comme une condition pour être cité. Le détail est dans [faut-il créer un fichier llms.txt](/reponses/faut-il-creer-un-fichier-llms-txt).

## Que retenir pour votre site ?

Quatre règles découlent directement de ces positions :

1. **Autorisez les robots de recherche** (OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot, Bingbot), dans le robots.txt et dans le pare-feu. Les modèles sont dans le [référentiel des robots d'IA](/ressources/robots-ia).
2. **Faites indexer vos pages par Google et par Bing**, et signalez chaque mise à jour avec IndexNow.
3. **Écrivez des passages qui se comprennent seuls**, sourcés, datés : c'est ce qui est cité, en 150 caractères chez Claude.
4. **Mesurez, ne promettez pas** : aucun éditeur ne garantit une place. Le [modèle de relevé](/ressources/modele-releve-geo) sert à suivre votre présence dans le temps.

Pour appliquer ces règles à votre site, commencez par le [plan GEO en 30 jours](/ressources/plan-geo-30-jours), ou demandez un [audit GEO](/prestations/audit-geo).

## Sources

- [Google Search Central : fonctionnalités IA et votre site web](https://developers.google.com/search/docs/appearance/ai-features)
- [Google : robots d'exploration courants, dont Google-Extended](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers)
- [Google Search Central : utiliser du contenu généré par IA](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)
- [Aide Google Analytics : groupe de canaux par défaut](https://support.google.com/analytics/answer/9756891?hl=fr)
- [OpenAI : robots et user-agents](https://developers.openai.com/api/docs/bots)
- [Aide OpenAI : rechercher sur le web avec ChatGPT](https://help.openai.com/en/articles/9237897-chatgpt-search)
- [Anthropic : robots de Claude et blocage](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- [Anthropic : outil de recherche web de Claude](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool)
- [Perplexity : robots](https://docs.perplexity.ai/guides/bots)
- [Bing Webmaster Blog : contrôler l'usage de son contenu dans les réponses de chat](https://blogs.bing.com/webmaster/september-2023/Announcing-new-options-for-webmasters-to-control-usage-of-their-content-in-Bing-Chat)
- [Bing Webmaster Blog : importer ses sites depuis la Search Console](https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools)
- [IndexNow : documentation du protocole](https://www.indexnow.org/documentation)
- [llmstxt.org : proposition de format llms.txt](https://llmstxt.org/)
