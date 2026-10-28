---
slug: "/ressources/gabarit-page-reponse"
title: "Gabarit de page que les IA peuvent citer"
meta-description: "Un gabarit à copier pour écrire une page que ChatGPT, Perplexity, Claude et les AI Overviews peuvent reprendre : réponse en tête, intertitres en questions, tableau, sources, FAQ."
---

# Gabarit de page que les IA peuvent citer

Une IA ne cite pas une page entière. Elle reprend un passage : une phrase qui répond, un tableau, une définition. Chez Claude, l'extrait cité fait 150 caractères au plus ([Anthropic](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool)). Votre page doit donc être faite de passages qui tiennent seuls.

**En bref :** ce gabarit donne la structure d'une page pensée pour être citée : un titre qui reprend la question, une réponse de 40 à 60 mots en tête, deux à quatre intertitres en questions suivis d'une phrase-réponse, un tableau, des sources liées, une FAQ courte. Copiez-le, remplacez les crochets, et gardez une page par question. C'est le gabarit que j'utilise pour les [réponses de ce site](/reponses).

## Le gabarit à copier

```
# [La question exacte, telle que vos clients la posent] ?

[Réponse directe en 40 à 60 mots. La première phrase répond.
Elle contient le fait principal : un prix, un délai, un oui ou un non,
une définition. Elle se comprend sans lire la suite.]

## [Première sous-question] ?

[Phrase-réponse en une ligne.] [Explication en 3 à 5 phrases,
avec un chiffre sourcé si possible (lien vers la source officielle).]

## [Deuxième sous-question] ?

[Phrase-réponse.] [Explication, ou liste numérotée si ce sont des étapes.]

## [Troisième sous-question, souvent : combien ça coûte ou combien de temps] ?

[Phrase-réponse avec le chiffre.] [Ce qui fait varier ce chiffre.]

| [Critère] | [Option A] | [Option B] |
|---|---|---|
| [Ligne 1] | [...] | [...] |
| [Ligne 2] | [...] | [...] |

## Questions fréquentes

**[Question liée 1] ?**
[Réponse en 2 phrases.]

**[Question liée 2] ?**
[Réponse en 2 phrases.]

## Sources

- [Nom de la source officielle 1](lien)
- [Nom de la source officielle 2](lien)

[Auteur : nom, fonction, lien vers sa page de présentation]
[Mis à jour : mois et année]
```

## Pourquoi chaque bloc compte ?

| Bloc | Rôle pour les IA | Erreur fréquente |
|---|---|---|
| Titre = la question | Correspond à la requête de l'utilisateur | Un titre de marque ou un jeu de mots |
| Réponse de 40 à 60 mots en tête | Le passage le plus facile à citer | Une introduction qui raconte avant de répondre |
| Intertitres en questions | Chaque section peut répondre à une sous-question | Des intertitres vagues (« Nos atouts ») |
| Phrase-réponse sous chaque intertitre | L'extrait cité tient en une phrase | La réponse arrive au troisième paragraphe |
| Tableau | Compare ou énumère sans ambiguïté | Une comparaison noyée dans du texte |
| Sources liées | Rend la phrase vérifiable | Des chiffres sans origine |
| Auteur et date | Signale qui parle et si c'est à jour | Une page sans date, ou une date figée |
| FAQ | Couvre les variantes de la question | Des questions inventées que personne ne pose |

Deux précisions techniques. Le texte doit figurer **dans le HTML envoyé par le serveur**, pas seulement après exécution d'un script : un robot qui ne l'exécute pas lirait une page vide. Et Google indique qu'aucun balisage spécial n'est nécessaire pour apparaître dans les AI Overviews ou le AI Mode : la page doit être indexée et pouvoir s'afficher avec un extrait ([Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)). Les données structurées restent utiles pour décrire la page : voir [les données structurées aident-elles à être cité](/reponses/donnees-structurees-ia).

## Un exemple de réponse en tête

Pour la question « combien coûte un audit SEO ? », la réponse de tête de ce site tient en deux phrases : le prix (800 à 2 500 € selon la taille du site), puis ce qui le fait varier. Une IA peut la reprendre telle quelle. Voyez la page complète : [combien coûte un audit SEO](/reponses/combien-coute-un-audit-seo).

À éviter : « Le prix d'un audit SEO dépend de nombreux facteurs que nous allons détailler dans cet article. » Cette phrase ne répond à rien ; une IA ira chercher la réponse ailleurs.

## Avant de publier, que vérifier ?

1. La réponse de tête se comprend-elle **lue seule**, hors de la page ?
2. Chaque intertitre est-il **une question** que vos clients poseraient ?
3. Chaque chiffre a-t-il **une source** liée ?
4. L'auteur et la date sont-ils **visibles** ?
5. Le texte est-il dans le **code source** de la page ?
6. La page est-elle **signalée** à Google (Search Console) et à Bing (IndexNow) ?

La méthode complète, avec des exemples, est dans [comment rédiger un contenu que les IA reprennent](/blog/structurer-contenu-geo). Si vous voulez que je reprenne vos pages avec ce gabarit, c'est le cœur de la [rédaction web SEO](/redaction-web) que je propose.

## Sources

- [Anthropic : outil de recherche web de Claude](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool)
- [Google Search Central : fonctionnalités IA et votre site web](https://developers.google.com/search/docs/appearance/ai-features)
