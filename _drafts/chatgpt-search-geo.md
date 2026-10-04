---
slug: "/blog/chatgpt-search-geo"
title: "Comment être cité par ChatGPT et Perplexity ?"
meta-description: "Comment ChatGPT et Perplexity trouvent leurs sources, les conditions techniques à remplir, les contenus qu'ils reprennent et la façon de vérifier vos citations."
---

# Comment être cité par ChatGPT et Perplexity ?

Une responsable marketing demande à ChatGPT quel prestataire choisir pour refaire le site de son entreprise. La réponse cite trois sources : un comparatif, un annuaire, un concurrent. Elle pose la même question à Perplexity : autres sources, même absence de votre nom. Votre site est pourtant en ligne, à jour, bien classé sur Google.

**En bref :** pour être cité, il faut d'abord que les robots de recherche de ChatGPT et de Perplexity, **OAI-SearchBot** et **PerplexityBot**, accèdent à votre site. Ensuite, vos pages doivent répondre clairement aux questions posées, avec des sources et un auteur identifié. Aucun des deux ne garantit une place : on mesure, on corrige, on remesure.

## Comment ChatGPT et Perplexity trouvent-ils leurs sources ?

Les deux cherchent sur le web au moment de la question, mais pas tout à fait de la même façon.

**ChatGPT** réécrit souvent la question en une ou plusieurs requêtes ciblées et les envoie à des **fournisseurs de recherche partenaires** ; après une première lecture, il peut relancer des requêtes plus précises. L'aide d'OpenAI renvoie, pour ces fournisseurs, notamment à la politique de confidentialité de Microsoft ([Aide OpenAI](https://help.openai.com/en/articles/9237897-chatgpt-search)). OpenAI a aussi son propre robot, **OAI-SearchBot**, qui sert à faire apparaître les sites dans les fonctions de recherche de ChatGPT ([OpenAI](https://developers.openai.com/api/docs/bots)).

**Perplexity** utilise **PerplexityBot** pour faire apparaître et lier les sites dans ses résultats. Perplexity précise que ce robot ne sert pas à entraîner des modèles, et recommande de l'autoriser. Un second robot, **Perplexity-User**, visite les pages à la demande d'un utilisateur ([Perplexity](https://docs.perplexity.ai/guides/bots)).

Vous lirez souvent que les deux « passent par Bing ». C'est plus nuancé : OpenAI parle de fournisseurs tiers sans nommer Bing dans son aide, et Perplexity décrit son propre robot. Le détail est dans [ChatGPT s'appuie-t-il sur Bing](/reponses/chatgpt-utilise-t-il-bing).

## Quelles conditions techniques faut-il remplir ?

Quatre vérifications, à faire avant tout travail éditorial.

1. **Le robots.txt autorise OAI-SearchBot et PerplexityBot.** OpenAI indique qu'un site qui bloque OAI-SearchBot n'apparaît pas dans les réponses de recherche, sauf comme simple lien de navigation ([OpenAI](https://developers.openai.com/api/docs/bots)).
2. **Le pare-feu les laisse passer.** OpenAI demande de vérifier que l'hébergeur ou le CDN accepte le trafic venant des adresses IP publiées de son robot ([Aide OpenAI](https://help.openai.com/en/articles/9237897-chatgpt-search)). Une protection anti-robots trop stricte peut tout bloquer sans que le robots.txt y soit pour rien.
3. **Le site est indexé par Bing.** Puisque ChatGPT s'appuie en partie sur des fournisseurs tiers, inscrivez le site sur Bing Webmaster Tools, qui importe les sites déjà vérifiés dans la Search Console ([Bing](https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools)).
4. **Le texte est dans le HTML.** Réponses, prix et FAQ doivent être présents dans la page envoyée par le serveur, sans dépendre d'un script.

## Quels contenus ont le plus de chances d'être cités ?

Des pages pertinentes et fiables, d'après OpenAI : ChatGPT classe les résultats selon plusieurs facteurs destinés à aider l'utilisateur à trouver une information pertinente et fiable, et **le placement n'est pas garanti** ([Aide OpenAI](https://help.openai.com/en/articles/9237897-chatgpt-search)).

Concrètement, voici ce que j'observe sur les sites que je suis :

- **La réponse arrive tout de suite.** Les deux moteurs reprennent des passages, pas des pages entières. Une réponse enfouie après trois paragraphes de contexte est souvent ignorée au profit d'un concurrent plus direct.
- **Chaque section tient seule.** Un intertitre en question, une phrase qui y répond, puis le développement.
- **Les affirmations sont sourcées.** Un chiffre avec sa source primaire inspire plus confiance qu'une approximation.
- **L'auteur est identifié**, avec une page qui présente son parcours, et une date de mise à jour visible.
- **On parle de vous ailleurs** : comparatifs, annuaires professionnels, presse, forums. Les deux moteurs citent souvent ces sources tierces.

### Un exemple de réécriture

Avant : « La question du référencement dans les IA est complexe et dépend de nombreux facteurs. Depuis plusieurs années, les moteurs ont beaucoup évolué… » Deux cents mots plus loin, toujours pas de réponse.

Après : « Pour être cité par ChatGPT et Perplexity, votre site doit laisser passer leurs robots de recherche, OAI-SearchBot et PerplexityBot, puis répondre clairement à la question dès les premières lignes, avec des sources. » Ce paragraphe peut être repris tel quel. C'est la règle que j'applique à chaque page de la rubrique [réponses](/reponses) de ce site.

## Comment vérifier si vous êtes cité ?

En posant les questions vous-même, régulièrement, avec la même méthode.

1. Dressez la liste des questions que vos clients posent avant d'acheter : choix d'un prestataire, prix, délais, comparaisons.
2. Posez-les à ChatGPT, avec la recherche web activée, et à Perplexity. Notez qui est cité, et si vous l'êtes.
3. Calculez la proportion de réponses qui vous citent : c'est votre part de voix.
4. Recommencez chaque mois avec la même liste, et regardez aussi vos statistiques de visites : les clics venus de chatgpt.com ou de perplexity.ai peuvent y apparaître comme sites référents.

Les résultats varient d'une fois à l'autre : ChatGPT réécrit les questions et peut tenir compte de la localisation de l'utilisateur ([Aide OpenAI](https://help.openai.com/en/articles/9237897-chatgpt-search)). C'est l'évolution sur plusieurs mesures qui compte. Sur le délai à prévoir, voir [combien de temps pour être cité par ChatGPT](/reponses/combien-de-temps-pour-etre-cite-par-chatgpt).

## Faut-il écrire spécialement pour ces IA ?

Non. Les pages qui fonctionnent pour ChatGPT et Perplexity sont aussi celles que Google peut reprendre dans ses AI Overviews : une question, une réponse nette, des sources, un auteur. Écrire pour les IA, c'est surtout écrire mieux pour vos lecteurs.

Si vous voulez savoir où vous en êtes, l'[audit GEO](/prestations/audit-geo) relève les réponses de ChatGPT, Perplexity, Gemini, Claude et Google sur les questions de vos clients, et identifie les sites cités à votre place.
