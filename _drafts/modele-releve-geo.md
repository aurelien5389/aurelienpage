---
slug: "/ressources/modele-releve-geo"
title: "Modèle de relevé GEO : suivre sa part de voix dans les IA"
meta-description: "Modèle de tableau gratuit (CSV) pour relever chaque mois si ChatGPT, Perplexity, Claude, Gemini et les AI Overviews vous citent, et calculer votre part de voix."
---

# Modèle de relevé GEO : suivre sa part de voix dans les IA

Savoir si les IA vous citent demande de poser les mêmes questions, aux mêmes IA, avec la même méthode, mois après mois. Sans tableau commun, chaque relevé se fait différemment et les chiffres ne se comparent pas.

**En bref :** ce modèle de tableau gratuit structure votre relevé : une ligne par question et par IA, onze colonnes, et une formule pour calculer votre **part de voix**. Téléchargez-le, remplacez les questions d'exemple par celles de vos clients, puis faites un relevé par mois.

**[Télécharger le modèle de relevé (CSV, séparateur point-virgule)](/ressources/modele-releve-geo.csv)**. Il s'ouvre dans Excel, LibreOffice ou Google Sheets (Fichier, Importer).

## Que contient chaque colonne ?

| Colonne | Ce que vous notez | Exemple de valeur |
|---|---|---|
| date | Le jour du relevé, au format AAAA-MM-JJ | |
| question | Le texte exact posé à l'IA, sans le reformuler d'un mois à l'autre | Combien coûte un audit SEO ? |
| famille | Choix d'un prestataire, prix, comparaison ou définition | prix |
| page_cible | La page de votre site qui devrait être citée | https://votre-site.fr/tarifs |
| ia | ChatGPT, Perplexity, Claude, Gemini ou AI Overviews | Perplexity |
| recherche_web | La réponse affiche-t-elle des sources ? | oui |
| cite | Votre site figure-t-il parmi les sources ? | non |
| page_citee | L'adresse de votre page reprise, si cite vaut oui | |
| sites_cites | Les autres sources affichées, séparées par une virgule | annuaire-pro.fr, comparatif.fr |
| concurrents_nommes | Les marques recommandées dans la réponse | |
| remarque | Ce qui vous frappe : erreur sur vos prix, ancienne offre citée | |

La colonne **recherche_web** évite une fausse alerte. Si l'IA n'affiche aucune source, elle a répondu de mémoire : votre absence ne dit rien de votre site. Le diagnostic est détaillé dans [pourquoi mon site n'apparaît-il pas dans ChatGPT](/blog/site-absent-reponses-chatgpt).

## Comment calculer la part de voix ?

En divisant le nombre de réponses qui vous citent par le nombre de réponses qui affichent des sources :

**part de voix = lignes où cite vaut « oui » ÷ lignes où recherche_web vaut « oui »**

Dans un tableur, avec les colonnes du modèle (G pour cite, F pour recherche_web) :

```
=NB.SI.ENS(G:G;"oui";F:F;"oui")/NB.SI(F:F;"oui")
```

Calculez-la au total, puis par IA et par famille de questions. C'est souvent là que le relevé parle : une bonne part de voix sur les définitions et une part nulle sur les questions de prix ne demandent pas le même travail. La notion et ses limites sont expliquées dans [qu'est-ce que la part de voix dans les IA](/reponses/part-de-voix-dans-les-ia).

## Comment faire un relevé fiable ?

1. **Gardez la même liste de questions** d'un mois à l'autre. Ajoutez-en si besoin, n'en reformulez aucune.
2. **Posez chaque question dans une session neuve**, sans historique, et activez la recherche web quand l'IA le permet.
3. **Posez chaque question deux fois.** Les réponses varient d'une fois à l'autre ; deux passages donnent une image plus stable.
4. **Notez ce que vous voyez, pas ce que vous espériez** : une citation de votre page d'accueil n'est pas une citation de votre page tarifs.
5. **Comparez les mois entre eux**, pas une réponse isolée.

Pour 20 à 30 questions et cinq IA, comptez une demi-journée par relevé. J'automatise ces relevés avec Balise, un outil que j'ai construit, mais le tableau suffit pour démarrer.

## Que faire des résultats ?

Classez les questions où vous n'êtes pas cité en trois groupes : pas de page sur le sujet (à créer), une page qui n'est pas reprise (à reprendre), des sites tiers cités à votre place (à contacter). La [checklist GEO](/ressources/checklist-geo) aide à trouver la cause, et la méthode d'ensemble est dans [comment faire un audit GEO de son site](/blog/audit-geo-etape-par-etape).

Si vous préférez déléguer le relevé et son analyse, c'est le cœur de l'[audit GEO](/prestations/audit-geo).

## Questions fréquentes

**Combien de questions faut-il suivre ?**
Vingt à trente suffisent pour un premier suivi, réparties entre choix d'un prestataire, prix, comparaison et définition. Mieux vaut peu de questions suivies chaque mois que beaucoup suivies une fois.

**Faut-il relever les AI Overviews à part ?**
Oui. Les AI Overviews s'affichent dans les résultats de Google, pas dans un assistant : faites la recherche sur Google et notez si un résumé IA apparaît et qui il cite. Le trafic qu'ils génèrent n'apparaît pas dans le canal « Assistant IA » de GA4 ([Google Analytics](https://support.google.com/analytics/answer/9756891?hl=fr)).

## Sources

- [Aide Google Analytics : groupe de canaux par défaut](https://support.google.com/analytics/answer/9756891?hl=fr)
- [Google Search Central : fonctionnalités IA et votre site web](https://developers.google.com/search/docs/appearance/ai-features)
