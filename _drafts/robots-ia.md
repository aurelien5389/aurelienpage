---
slug: "/ressources/robots-ia"
title: "Référentiel des robots d'IA et modèles de robots.txt"
meta-description: "OAI-SearchBot, GPTBot, Claude-SearchBot, ClaudeBot, PerplexityBot, Google-Extended : rôle de chaque robot d'IA, effet d'un blocage, et trois modèles de robots.txt prêts à copier."
---

# Référentiel des robots d'IA et modèles de robots.txt

Votre robots.txt a peut-être été écrit avant l'arrivée des IA de recherche. Une ligne ajoutée un jour pour « bloquer les IA » peut aujourd'hui vous retirer des réponses de ChatGPT ou de Claude, sans que personne ne s'en souvienne.

**En bref :** chaque éditeur d'IA distingue au moins deux robots. Le **robot de recherche** décide si votre site peut être cité dans les réponses ; le **robot d'entraînement** alimente les futurs modèles. Bloquer le second n'empêche pas d'être cité. Ce référentiel liste les robots documentés par leurs éditeurs, puis propose trois modèles de robots.txt selon votre choix.

## Quels robots d'IA sont documentés, et à quoi servent-ils ?

| Robot (token robots.txt) | Éditeur | Rôle | Si vous le bloquez |
|---|---|---|---|
| OAI-SearchBot | OpenAI | Faire apparaître les sites dans la recherche de ChatGPT | Pas de place dans les réponses de recherche, sauf comme simple lien |
| GPTBot | OpenAI | Collecter des contenus pour l'entraînement | Contenu exclu de l'entraînement ; aucun effet sur la recherche |
| ChatGPT-User | OpenAI | Visite demandée par un utilisateur de ChatGPT | OpenAI indique que le robots.txt peut ne pas s'appliquer |
| OAI-AdsBot | OpenAI | Vérifier les pages soumises comme publicités | Ne visite que les pages soumises comme publicités |
| Claude-SearchBot | Anthropic | Indexer les contenus pour la recherche de Claude | Pages non indexées pour la recherche |
| Claude-User | Anthropic | Lire une page à la demande d'un utilisateur | Claude ne peut plus récupérer la page pour répondre |
| ClaudeBot | Anthropic | Collecter des contenus pour l'entraînement | Futurs contenus exclus de l'entraînement |
| PerplexityBot | Perplexity | Faire apparaître et lier les sites dans les résultats | Site absent des résultats de Perplexity |
| Perplexity-User | Perplexity | Lire une page à la demande d'un utilisateur | Perplexity indique que ce robot ignore en général le robots.txt |
| Googlebot | Google | Exploration pour la recherche Google, dont les AI Overviews et le AI Mode | Site absent de Google, réponses IA comprises |
| Google-Extended | Google | Jeton qui règle l'usage pour l'entraînement des modèles Gemini et l'ancrage | Aucun effet sur la présence dans Google Search ni sur le classement |
| Bingbot | Microsoft | Exploration pour Bing, utilisé par des assistants qui s'appuient sur Bing | Site absent de Bing |

Sources : [OpenAI](https://developers.openai.com/api/docs/bots), [Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), [Perplexity](https://docs.perplexity.ai/guides/bots), [Google, robots courants](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers), [Google, fonctionnalités IA](https://developers.google.com/search/docs/appearance/ai-features), [Bing](https://www.bing.com/webmasters/help/which-crawlers-does-bing-use-8c184ec0).

Deux précisions utiles. **Google-Extended n'a pas de user-agent propre** : il n'apparaît jamais dans vos journaux de serveur, c'est un simple jeton lu dans le robots.txt ([Google](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers)). Et **les robots déclenchés par un utilisateur** (ChatGPT-User, Perplexity-User) ne suivent pas toujours le robots.txt, d'après leurs propres éditeurs.

## Quel modèle de robots.txt choisir ?

Trois profils couvrent la plupart des cas. Les blocs ci-dessous ne concernent que les robots d'IA : gardez vos autres règles (pages d'administration, sitemap) en place.

### Modèle 1 : tout autoriser

Pour un site qui veut être cité et présent dans les connaissances des modèles. C'est, en pratique, la configuration actuelle de ce site.

```
User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /
```

### Modèle 2 : être cité, sans servir à l'entraînement

Pour un site qui veut apparaître dans les réponses mais refuse que ses contenus entraînent les modèles.

```
User-agent: OAI-SearchBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /
```

### Modèle 3 : tout bloquer

Pour un contenu que vous ne voulez voir ni cité ni utilisé. Conséquence : le site disparaît des réponses de ChatGPT, Claude et Perplexity. Googlebot n'est pas concerné : bloquer Googlebot vous retirerait de Google entier.

```
User-agent: OAI-SearchBot
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: Claude-SearchBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: Google-Extended
Disallow: /
```

## Que vérifier après avoir modifié le robots.txt ?

1. **Le fichier est en ligne** à l'adresse votre-site.fr/robots.txt, un fichier par sous-domaine ([Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)).
2. **Le pare-feu ou le CDN laisse passer les robots autorisés.** OpenAI et Perplexity publient leurs plages d'adresses IP pour les mettre en liste blanche ([OpenAI](https://developers.openai.com/api/docs/bots), [Perplexity](https://docs.perplexity.ai/guides/bots)).
3. **Le délai de prise en compte.** OpenAI indique environ 24 heures pour qu'un changement du robots.txt s'applique à ses robots ([OpenAI](https://developers.openai.com/api/docs/bots)).
4. **Vos journaux de serveur** montrent bien des visites des robots autorisés dans les semaines qui suivent.

Le raisonnement complet (qui bloquer, pourquoi) est dans [quels robots d'IA explorent votre site et faut-il les bloquer](/reponses/robots-ia-faut-il-les-bloquer). Pour un contrôle complet de votre site, robots compris, voir l'[audit GEO](/prestations/audit-geo).

## Questions fréquentes

**Bloquer GPTBot me retire-t-il de ChatGPT ?**
Non. GPTBot sert l'entraînement ; la recherche de ChatGPT passe par OAI-SearchBot. OpenAI précise que chaque réglage est indépendant.

**Faut-il lister les robots d'IA si mon robots.txt autorise déjà tout ?**
Ce n'est pas obligatoire : une règle générale qui autorise tout s'applique aussi à eux. Les lister rend votre choix explicite et évite qu'une règle ajoutée plus tard les bloque par erreur.

## Sources

- [OpenAI : robots et user-agents](https://developers.openai.com/api/docs/bots)
- [Anthropic : robots de Claude et blocage](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- [Perplexity : robots](https://docs.perplexity.ai/guides/bots)
- [Google : robots d'exploration courants, dont Google-Extended](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers)
- [Google Search Central : fonctionnalités IA et votre site web](https://developers.google.com/search/docs/appearance/ai-features)
- [Bing Webmaster : robots utilisés par Bing](https://www.bing.com/webmasters/help/which-crawlers-does-bing-use-8c184ec0)
