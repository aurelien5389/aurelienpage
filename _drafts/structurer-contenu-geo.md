---
slug: "/blog/structurer-contenu-geo"
title: "Comment rédiger un contenu que les IA reprennent ?"
meta-description: "Passages autonomes, réponse en tête, intertitres en questions, sources primaires, auteur identifié : la méthode pour écrire des pages que ChatGPT, Perplexity et Google citent."
---

# Comment rédiger un contenu que les IA reprennent ?

J'ai été journaliste web avant d'être consultant. On m'a appris à écrire une introduction qui installe le sujet, puis à dérouler. C'est une bonne règle pour un lecteur qui va jusqu'au bout. C'est une mauvaise règle pour une IA qui cherche, dans votre page, la phrase qui répond à une question précise.

**En bref :** une IA reprend des **passages**, pas des pages. Pour être repris, chaque section doit commencer par une phrase qui répond, se comprendre seule, s'appuyer sur des sources vérifiables et être signée par un auteur identifiable. La longueur importe peu ; la clarté et la précision, beaucoup.

## Comment une IA lit-elle votre page ?

Par morceaux, au service d'une question. Google explique que ses fonctionnalités IA peuvent lancer plusieurs recherches liées, sur des sous-thèmes, avant de composer une réponse : c'est le **query fan-out** ([Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)). ChatGPT réécrit lui aussi la question en une ou plusieurs requêtes ciblées ([Aide OpenAI](https://help.openai.com/en/articles/9237897-chatgpt-search)).

Votre page n'est donc pas lue de haut en bas. Le moteur y cherche le paragraphe qui répond à **une** sous-question. Un passage qui commence par « Comme nous l'avons vu plus haut… » ne peut pas être repris : il dépend d'un contexte que l'IA n'a pas.

## Comment écrire un passage que l'IA peut citer ?

En répondant d'abord, en expliquant ensuite. Comparez :

> **Avant :** « La question du budget est complexe. De nombreux facteurs entrent en jeu, et chaque situation est différente… »

> **Après :** « Un audit SEO coûte de 800 à 2 500 € selon la taille du site. Le prix dépend du nombre de pages, de la profondeur d'analyse et du volet GEO. »

Le second paragraphe peut être repris tel quel. Trois règles pour y arriver :

1. **La première phrase répond.** Elle reprend les termes de la question et donne l'information principale.
2. **Le passage tient seul.** Pas de « ce point », « comme indiqué » ou « ci-dessus » : nommez les choses.
3. **Un passage, une idée.** Si un paragraphe répond à deux questions, coupez-le en deux.

## Comment organiser la page ?

Autour des questions de vos lecteurs. Quelques principes que j'applique sur chaque page :

- **Le titre pose la question**, et la réponse résumée arrive dans les deux ou trois premières phrases.
- **Les intertitres sont des questions** que se pose réellement votre lecteur : « Combien coûte… », « Quelle différence entre… », « Faut-il… ». « Notre approche » ou « Pourquoi nous choisir » ne répondent à rien.
- **Les comparaisons vont dans un tableau**, en vrai tableau HTML, pas en image.
- **Une FAQ visible** reprend les questions connexes, avec des réponses courtes.
- **Le texte important est dans le HTML** envoyé par le serveur, pas chargé par un script.

Sur la longueur, Google est clair : il n'a **pas de nombre de mots préféré** ([Google Search Central](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)). Voir [combien de mots doit contenir un article](/reponses/combien-de-mots-article-seo).

## Comment rendre le contenu digne de confiance ?

En montrant qui parle et d'où viennent les faits. Google invite à se demander s'il est évident pour le visiteur de savoir **qui a écrit** le contenu, et rappelle que la question la plus importante est de savoir s'il a été créé **d'abord pour aider les gens** ([Google Search Central](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).

Concrètement :

- **Chaque chiffre a une source primaire**, avec un lien : documentation de Google, de Bing, d'OpenAI, texte officiel. Sinon, pas de chiffre. Un pourcentage inventé « pour illustrer » finit toujours par être repris comme un fait, ce qui nuit à votre crédibilité.
- **Votre expérience est présentée comme telle** : « ce que j'observe sur les sites que je suis », sans chiffre que vous ne pourriez pas montrer.
- **L'auteur est identifié**, avec une présentation de son parcours, et la **date de mise à jour** est visible.
- **Votre présentation est la même partout** : nom, métier, ville, sur votre site, LinkedIn et les annuaires.

Si vous utilisez l'IA pour rédiger, relisez et vérifiez tout : Google rappelle que les textes générés peuvent contenir des erreurs et doivent être vérifiés avant publication ([Google Search Central](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)).

## Les données structurées aident-elles ?

À être compris, pas à être choisi. Google utilise les données structurées pour comprendre le contenu des pages ([Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)), mais précise qu'aucune donnée structurée spéciale n'est nécessaire pour ses fonctionnalités IA ([Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)). Balisez l'auteur, l'article et la FAQ visible, de façon cohérente avec le texte. Le détail est dans [les données structurées aident-elles à être cité par les IA](/reponses/donnees-structurees-ia).

## Que vérifier avant de publier ?

**Structure**
- Le titre pose une question, la réponse arrive dans les premières phrases.
- Chaque intertitre est une question, suivie d'une phrase-réponse.
- Chaque paragraphe se comprend seul.
- Les comparaisons sont dans un tableau HTML.

**Fiabilité**
- Chaque chiffre a une source primaire liée.
- L'expérience personnelle est signalée comme telle.
- Auteur identifié, date de mise à jour visible.

**Technique**
- Le contenu est dans le HTML rendu par le serveur.
- Les robots de recherche des IA accèdent à la page.
- Le balisage décrit uniquement ce qui est visible.

Ces règles s'apprennent vite quand on les applique à ses propres pages. C'est le cœur de ma [formation GEO](/formation-geo), construite sur vos contenus.
