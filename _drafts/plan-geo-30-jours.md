---
slug: "/ressources/plan-geo-30-jours"
title: "Plan GEO en 30 jours : démarrer semaine par semaine"
meta-description: "Un plan de 30 jours pour commencer le GEO sans prestataire : accès des robots et indexation, liste de questions et premier relevé, pages à reprendre, présence externe et mesure."
---

# Plan GEO en 30 jours : démarrer semaine par semaine

Vous avez compris l'enjeu : vos clients posent leurs questions à ChatGPT, Perplexity ou Google, et les réponses citent d'autres que vous. Reste la question pratique : par quoi commencer, avec quelles ressources, et en combien de temps ?

**En bref :** ce plan découpe un premier mois de GEO en quatre semaines. Semaine 1 : lever les blocages techniques. Semaine 2 : choisir vos questions et faire un premier relevé. Semaine 3 : reprendre les pages qui doivent être citées. Semaine 4 : travailler votre présence sur les autres sites et installer la mesure. Comptez quelques heures par semaine, pour une personne qui connaît son site.

## Semaine 1 : les IA peuvent-elles lire votre site ?

Objectif : supprimer tout ce qui empêche les IA de trouver et de lire vos pages. C'est la semaine qui a le plus d'effet pour le moins d'effort.

1. **Robots.txt.** Vérifiez qu'OAI-SearchBot, Claude-SearchBot et PerplexityBot ne sont pas bloqués. Un robot de recherche bloqué, c'est une IA qui ne peut pas vous citer ([OpenAI](https://developers.openai.com/api/docs/bots)). Modèles prêts à copier : [référentiel des robots d'IA](/ressources/robots-ia).
2. **Pare-feu et CDN.** Demandez à votre hébergeur si une protection anti-robots filtre ces visiteurs ; OpenAI et Perplexity publient leurs adresses IP pour les autoriser.
3. **Bing.** Inscrivez le site sur Bing Webmaster Tools par import depuis la Search Console ([Bing](https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools)) et soumettez le sitemap.
4. **Texte lisible.** Affichez le code source de vos pages clés : la réponse, les prix et la FAQ doivent y figurer en texte.

**Livrable de la semaine :** robots autorisés, site inscrit sur Bing, liste des pages dont le texte n'est pas dans le HTML.

## Semaine 2 : quelles questions suivre, et où en êtes-vous ?

Objectif : savoir précisément sur quelles questions vous voulez être cité, et mesurer le point de départ.

1. **Listez 20 questions** que vos clients posent avant d'acheter : choix d'un prestataire, prix, comparaison, définition. Des exemples par métier sont dans [les questions à suivre, secteur par secteur](/ressources/questions-geo-par-secteur).
2. **Associez une page** de votre site à chaque question. Les questions sans page sont notées à part.
3. **Faites le premier relevé** : chaque question posée à ChatGPT avec recherche, Perplexity, Claude, Gemini, et les AI Overviews de Google. Notez qui est cité. Utilisez le [modèle de relevé GEO](/ressources/modele-releve-geo).
4. **Calculez votre part de voix** de départ : réponses qui vous citent sur réponses qui affichent des sources.

**Livrable de la semaine :** la liste de questions, le premier relevé, la part de voix de départ.

## Semaine 3 : vos pages répondent-elles aux questions ?

Objectif : reprendre les cinq pages qui comptent le plus, celles des questions de choix et de prix.

Pour chacune, appliquez le [gabarit de page que les IA peuvent citer](/ressources/gabarit-page-reponse) :

- **La réponse en tête**, en 40 à 60 mots qui se comprennent seuls.
- **Des intertitres en questions**, chacun suivi d'une phrase-réponse.
- **Un tableau** quand vous comparez ou énumérez.
- **Des sources liées** pour chaque chiffre, un auteur identifié, une date de mise à jour.

Créez aussi une page pour la question la plus importante qui n'en a pas. Puis signalez chaque page modifiée à Bing avec IndexNow ([IndexNow](https://www.indexnow.org/documentation)), et demandez son exploration dans la Search Console.

**Livrable de la semaine :** cinq pages reprises, une page créée, toutes signalées aux moteurs.

## Semaine 4 : êtes-vous présent là où les IA cherchent ?

Objectif : travailler les sources tierces et installer un suivi qui dure.

1. **Relisez votre relevé** : quels sites sont cités à votre place ? Annuaires, comparatifs, médias, forums.
2. **Demandez à figurer** dans les annuaires et comparatifs pertinents, avec une fiche exacte. Mettez à jour votre fiche Google Business Profile si vous avez une clientèle locale : Google indique que des informations complètes et exactes aident à apparaître dans les résultats locaux ([Google](https://support.google.com/business/answer/7091?hl=fr)).
3. **Harmonisez votre identité** : même nom, même description, mêmes coordonnées sur votre site, LinkedIn et les annuaires.
4. **Installez la mesure** : un canal IA dans Google Analytics 4 ([voir comment](/reponses/trafic-ia-google-analytics-4)) et une date fixe chaque mois pour refaire le relevé.

**Livrable de la semaine :** liste des sites tiers contactés, mesure en place, date du prochain relevé.

## Que faire après les 30 jours ?

Refaire le relevé chaque mois avec la même liste, comparer, corriger. Les résultats ne se jugent pas sur une semaine : OpenAI rappelle que la place dans les résultats n'est pas garantie ([Aide OpenAI](https://help.openai.com/en/articles/9237897-chatgpt-search)), et les réponses varient d'une fois à l'autre. C'est l'évolution de votre part de voix sur plusieurs mois qui montre si le travail porte.

| Semaine | Thème | Livrable |
|---|---|---|
| 1 | Accès des robots et indexation | Robots autorisés, site sur Bing, pages à corriger |
| 2 | Questions et premier relevé | Liste de 20 questions, part de voix de départ |
| 3 | Pages à citer | 5 pages reprises, 1 page créée |
| 4 | Présence externe et mesure | Sites tiers contactés, suivi mensuel en place |

Pour le détail de chaque contrôle, gardez la [checklist GEO en 25 points](/ressources/checklist-geo) à côté de ce plan. Si vous préférez être accompagné, je fais ce travail dans le cadre d'un [audit GEO](/prestations/audit-geo), puis en [suivi mensuel](/accompagnement-seo).

## Sources

- [OpenAI : robots et user-agents](https://developers.openai.com/api/docs/bots)
- [Aide OpenAI : rechercher sur le web avec ChatGPT](https://help.openai.com/en/articles/9237897-chatgpt-search)
- [Bing Webmaster Blog : importer ses sites depuis la Search Console](https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools)
- [IndexNow : documentation du protocole](https://www.indexnow.org/documentation)
- [Aide Google Business Profile : améliorer son classement local](https://support.google.com/business/answer/7091?hl=fr)
