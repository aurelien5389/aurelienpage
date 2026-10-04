---
slug: "/blog/mesurer-visibilite-geo"
title: "Comment mesurer la visibilité de sa marque dans les IA ?"
meta-description: "Pas de tableau de bord officiel pour les citations dans ChatGPT, Perplexity ou les AI Overviews. La méthode pour mesurer quand même : questions, relevés, part de voix, suivi."
---

# Comment mesurer la visibilité de sa marque dans les IA ?

C'est la première question que l'on me pose sur le GEO : « Comment je sais si ça marche ? » En SEO, j'ouvre la Search Console et je lui montre ses positions. Pour ChatGPT ou Perplexity, il n'y a rien à ouvrir. Aucun éditeur ne fournit aux sites un relevé des réponses qui les citent.

**En bref :** on mesure la visibilité dans les IA en posant soi-même, à intervalles réguliers, une liste fixe de questions à ChatGPT, Perplexity, Gemini, Claude et Google, puis en relevant qui est cité. On en tire une **part de voix**, qu'on suit dans le temps et qu'on complète par deux signaux indirects : le taux de clic dans la Search Console et les visites venues des IA.

## Pourquoi les outils SEO habituels ne suffisent-ils pas ?

Parce que les citations n'y apparaissent pas. Google compte le trafic venu des AI Overviews et du AI Mode dans le rapport Performances de la Search Console, avec le reste de la recherche web, sans le distinguer ([Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)). Vous voyez le clic, pas la citation qui l'a précédé.

Et les réponses changent. ChatGPT réécrit souvent la question en plusieurs requêtes, peut interroger des fournisseurs de recherche tiers et tenir compte de la localisation de l'utilisateur ([Aide OpenAI](https://help.openai.com/en/articles/9237897-chatgpt-search)). Une capture d'écran isolée ne prouve donc rien : seule une mesure répétée, avec la même méthode, permet de suivre une évolution.

## Quelles métriques suivre ?

Quatre, du plus direct au plus indirect.

1. **La part de voix** : la proportion de réponses qui citent votre marque ou votre site, sur votre liste de questions. Si vous êtes cité dans 12 réponses sur 40, elle est de 30 %. Calculez-la au total, par IA et par thème. Définition détaillée dans [qu'est-ce que la part de voix dans les IA](/reponses/part-de-voix-dans-les-ia).
2. **Les sites cités à votre place** : un concurrent, un annuaire, un média. C'est la liste de vos vrais rivaux dans les réponses, souvent différente de vos concurrents sur Google.
3. **Le taux de clic dans la Search Console** : une requête dont les impressions tiennent mais dont le taux de clic baisse signale souvent une réponse générée qui s'affiche au-dessus de vous.
4. **Les visites venues des IA** : dans votre outil d'analyse d'audience, les clics depuis chatgpt.com, perplexity.ai ou d'autres assistants peuvent apparaître comme sites référents.

## Comment construire la liste de questions ?

En partant de vos clients, pas de vos mots-clés. C'est l'étape qui détermine la valeur de toute la mesure.

- **Couvrez les étapes de décision** : comprendre un sujet (« qu'est-ce que… »), comparer (« quelle différence entre… »), choisir (« quel prestataire pour… »), budgéter (« combien coûte… »).
- **Formulez comme un client** : une phrase complète, pas une suite de mots-clés.
- **Classez par thème et par offre**, pour lire la part de voix là où elle compte commercialement.
- **Gelez la liste** : changer les questions d'un mois sur l'autre rend toute comparaison impossible. Ajoutez-en, mais gardez le socle.

## Comment organiser les relevés ?

Avec une routine simple et constante.

1. **Chaque mois**, posez toutes les questions aux mêmes IA, dans les mêmes conditions (recherche web activée pour ChatGPT, mode standard pour Perplexity).
2. **Enregistrez la réponse complète** et ses sources, pas seulement « cité » ou « pas cité » : le contexte compte. Être cité dans une liste de prestataires à éviter n'est pas une victoire.
3. **Calculez la part de voix** et comparez-la au mois précédent.
4. **Chaque trimestre**, relisez les pages citées à votre place : réponse plus directe, sources, auteur identifié, présence sur d'autres sites ? C'est ce qui donne votre plan d'action.

### Un exemple concret : Balise

Faire ces relevés à la main devient vite long. J'ai donc construit **Balise**, un outil qui pose une liste de questions aux IA, enregistre les réponses et leurs sources, calcule la part de voix et la croise avec les données de la Search Console et de DataForSEO. L'intérêt n'est pas l'automatisation en soi : c'est de répéter exactement la même mesure chaque mois, pour que l'évolution soit lisible.

## Que faire quand vous n'êtes pas cité ?

Analyser ceux qui le sont. Pour chaque question où vous êtes absent, ouvrez les pages citées et comparez :

- Répondent-elles plus directement, dès les premières lignes ?
- Citent-elles des sources primaires ?
- Montrent-elles un auteur identifié et une date de mise à jour ?
- Sont-elles accessibles aux robots de recherche des IA ? Vérifiez d'abord les vôtres, voir [quels robots d'IA explorent mon site](/reponses/robots-ia-faut-il-les-bloquer).
- Sont-elles citées ou mentionnées sur d'autres sites ?

Ce diagnostic est plus utile que les chiffres bruts : il dit quoi corriger, page par page. Et ne promettez pas de délai : OpenAI précise lui-même que le placement dans les réponses n'est pas garanti ([Aide OpenAI](https://help.openai.com/en/articles/9237897-chatgpt-search)).

## Par où commencer ?

Par une première mesure, même modeste, qui servira de point de départ. Une liste d'une vingtaine de questions, posée une fois à chaque IA, montre déjà où vous êtes absent et qui vous remplace.

Si vous voulez une mesure complète, avec l'analyse des pages gagnantes et un plan d'action, c'est l'objet de l'[audit GEO](/prestations/audit-geo).
