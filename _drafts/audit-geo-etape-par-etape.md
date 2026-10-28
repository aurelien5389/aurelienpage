---
slug: "/blog/audit-geo-etape-par-etape"
title: "Comment faire un audit GEO de son site, étape par étape ?"
meta-description: "La méthode pour auditer seul votre visibilité dans ChatGPT, Perplexity, Claude, Gemini et les AI Overviews : questions, accès des robots, indexation, relevé, analyse, plan d'action."
---

# Comment faire un audit GEO de son site, étape par étape ?

Votre tableau de bord est rassurant : trafic stable, positions correctes sur Google. Puis vous ouvrez ChatGPT et demandez quel prestataire choisir dans votre métier. Trois noms sortent, aucun n'est le vôtre. Le tableau de bord ne vous avait rien signalé, parce qu'il ne mesure pas ce que disent les IA.

**En bref :** un audit GEO répond à une question simple : les IA vous citent-elles quand vos clients les interrogent, et sinon, pourquoi ? Il se fait en six étapes : construire la liste des questions, vérifier l'accès des robots, vérifier l'indexation, relever les réponses des IA, analyser les pages citées à votre place, puis bâtir un plan d'action. Vous pouvez le faire seul avec un tableur et quelques heures.

## Par quelles questions commencer ?

Par celles que vos clients posent avant d'acheter, pas par vos mots-clés. Visez **20 à 30 questions**, réparties en quatre familles :

1. **Choix d'un prestataire** : « quel consultant pour… », « qui peut… à Rennes ».
2. **Prix** : « combien coûte… », « quel budget pour… ».
3. **Comparaison** : « quelle différence entre… », « faut-il choisir… ou… ».
4. **Définition et méthode** : « qu'est-ce que… », « comment… ».

Pour chaque question, notez la page de votre site qui devrait être citée. Si aucune page ne convient, notez-le aussi : c'est déjà un résultat de l'audit.

## Les robots des IA accèdent-ils à votre site ?

C'est la vérification technique qui bloque tout le reste. Chaque IA a un robot de recherche distinct de son robot d'entraînement :

- **OAI-SearchBot** pour ChatGPT : OpenAI précise qu'un site qui le bloque n'apparaît pas dans les réponses de recherche, sauf comme simple lien ([OpenAI](https://developers.openai.com/api/docs/bots)).
- **PerplexityBot** pour Perplexity, qui recommande de l'autoriser ([Perplexity](https://docs.perplexity.ai/guides/bots)).
- **Claude-SearchBot** et **Claude-User** pour Claude ([Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)).
- **Googlebot** pour les AI Overviews et le AI Mode, qui ne demandent aucun réglage particulier ([Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)).

Lisez votre robots.txt, puis demandez à votre hébergeur si un pare-feu ou une protection anti-robots filtre ces visiteurs. Ce que j'observe sur les sites que je suis : le blocage vient plus souvent du pare-feu que du robots.txt. Vérifiez enfin que le texte important figure dans le HTML envoyé par le serveur, et pas seulement après exécution d'un script. Le rôle de chaque robot est détaillé dans [quels robots d'IA explorent votre site](/reponses/robots-ia-faut-il-les-bloquer).

## Vos pages sont-elles indexées par Google et par Bing ?

Les IA cherchent dans des index. Pour Google, la condition est connue : une page doit être indexée et pouvoir s'afficher avec un extrait pour apparaître dans les AI Overviews ([Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)). Contrôlez dans la Search Console que les pages notées à l'étape 1 sont bien indexées.

Faites la même chose dans **Bing Webmaster Tools**, qui importe les sites déjà vérifiés dans la Search Console ([Bing](https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools)). ChatGPT s'appuie sur des fournisseurs de recherche tiers, et Bing est presque toujours oublié : voir [ChatGPT s'appuie-t-il sur Bing](/reponses/chatgpt-utilise-t-il-bing).

## Comment relever les réponses des IA ?

En posant chaque question, telle quelle, à chaque IA, et en notant le résultat dans un tableur. Une ligne par question et par IA, avec ces colonnes :

| Colonne | Ce que vous notez |
|---|---|
| Question | Le texte exact posé |
| IA | ChatGPT avec recherche, Perplexity, Claude avec recherche, Gemini, AI Overviews |
| Cité | Oui ou non |
| Page citée | L'URL de votre site reprise, s'il y en a une |
| Sites cités | Les autres sources affichées |
| Concurrents nommés | Les marques recommandées à votre place |

Les réponses varient d'une fois à l'autre : posez chaque question au moins deux fois, dans une session sans historique. La proportion de réponses qui vous citent donne votre **part de voix**, la mesure centrale de l'audit, expliquée dans [qu'est-ce que la part de voix dans les IA](/reponses/part-de-voix-dans-les-ia).

## Que regarder dans les pages citées à votre place ?

Ce qui leur permet d'être reprises et qui manque chez vous. Ouvrez les trois sources les plus citées sur vos questions prioritaires et comparez point par point :

- **La réponse arrive-t-elle dans les premières lignes**, en quelques phrases qui se comprennent seules ?
- **Les intertitres posent-ils des questions** proches de celle de l'utilisateur ?
- **Les chiffres sont-ils sourcés**, l'auteur est-il identifié, la date de mise à jour visible ?
- **Le site cité est-il un tiers** (comparatif, annuaire, média, forum) plutôt qu'un concurrent direct ?

Le dernier point change le plan d'action. Si les IA citent un annuaire ou un comparatif, la solution est souvent d'y figurer, pas de réécrire votre page. Les règles de rédaction sont dans [comment rédiger un contenu que les IA reprennent](/blog/structurer-contenu-geo).

## Comment transformer le relevé en plan d'action ?

En classant chaque écart selon son effet et son coût :

1. **Blocages techniques** : robot refusé, page non indexée, texte chargé par script. À corriger en premier, ils annulent tout le reste.
2. **Pages manquantes** : une question sans page adaptée. Créez une page qui y répond directement.
3. **Pages à reprendre** : la page existe mais n'est pas citée. Réponse en tête, intertitres en questions, sources, auteur, date.
4. **Présence sur les sites tiers** : demandez à figurer dans les comparatifs et annuaires que les IA citent.

Refaites ensuite le relevé chaque mois avec la même liste. Une mesure isolée ne veut pas dire grand-chose ; c'est l'évolution qui montre si vos corrections portent. Un exemple concret : si vos questions de prix ne vous citent jamais, vérifiez d'abord qu'une page affiche vos tarifs en texte, puis qu'elle est indexée par Bing, avant de toucher à la rédaction.

## Questions fréquentes

**Combien de temps prend un audit GEO fait soi-même ?**
Comptez quelques heures pour la liste de questions et les vérifications techniques, puis une demi-journée pour le relevé sur 20 à 30 questions et cinq IA. Le premier relevé est le plus long.

**Faut-il un outil payant pour faire un audit GEO ?**
Non pour un premier audit : un tableur suffit. Un outil devient utile quand vous refaites le relevé chaque mois sur beaucoup de questions. J'utilise Balise, un outil que j'ai construit pour automatiser ces relevés.

**Quelle différence avec un audit SEO ?**
L'audit SEO mesure vos positions et votre trafic dans les moteurs ; l'audit GEO mesure si les IA vous citent. Le détail est dans [quelle différence entre un audit SEO et un audit GEO](/reponses/difference-audit-seo-audit-geo).

Si vous préférez déléguer, je réalise ce travail dans le cadre d'un [audit GEO](/prestations/audit-geo), inclus dans l'audit SEO et GEO.

## Sources

- [OpenAI : robots et user-agents](https://developers.openai.com/api/docs/bots)
- [Perplexity : robots](https://docs.perplexity.ai/guides/bots)
- [Anthropic : robots de Claude et blocage](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- [Google Search Central : fonctionnalités IA et votre site web](https://developers.google.com/search/docs/appearance/ai-features)
- [Bing Webmaster Blog : importer ses sites depuis la Search Console](https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools)
