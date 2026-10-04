# Règles GEO · aurelienpage.fr

Référence pour toute page créée ou reprise pendant le chantier GEO. À relire avant chaque rédaction.

---

## 1. Règles d'écriture

- Vouvoiement du lecteur. Le site parle à la première personne (« je »).
- Phrases courtes, actives, concrètes. Introduction narrative, jamais de statistique en première phrase.
- Interdits :
  - le tiret cadratin (—) ;
  - les mots creux : « incontournable », « essentiel », « décrypter », « plonger dans », « à l'heure où », « révolutionner », « booster », « gestion proactive » ;
  - les formules qui conviendraient à n'importe quel consultant.
- Titres avec une seule majuscule initiale. Pas d'année dans les titres. Pas de date précise ni de jour dans le corps du texte (la date de mise à jour s'affiche en mois et année, automatiquement).
- Chaque chiffre a une source primaire avec un lien, ouverte et vérifiée : Google Search Central, documentation Bing Webmaster, OpenAI, Anthropic, Perplexity, Schema.org, IndexNow, textes officiels (Légifrance, EUR-Lex). Sinon, pas de chiffre. Si la source manque : [SOURCE À TROUVER].
- Une observation de terrain sans source officielle est présentée comme telle (« ce que j'observe sur les sites que je suis »), sans chiffre.
- Mots-clés importants en gras, sans répétition forcée. Liens internes mis en évidence.
- Aucun texte important injecté par JavaScript : résumés, prix, FAQ et tableaux sont dans le HTML rendu côté serveur.
- Rien d'inventé : ni prix, ni client, ni témoignage, ni résultat, ni chiffre. Information manquante : Aurélien ne complétera pas, donc on reformule sans elle (« précisé dans le devis », « sur devis ») ou on retire le bloc. Aucun [À COMPLÉTER] ne reste en ligne.
- Exemples de missions : uniquement des faits du CV (section Expériences), sans nom de client ni d'employeur.
- Aucun client ni employeur cité comme référence sans accord écrit d'Aurélien.

### Tarifs (grille validée, voir GEO-PLAN-AURELIENPAGE.md)
| Prestation | Formulation |
|---|---|
| Audit SEO et GEO | 800 à 2 500 € selon la taille du site. L'audit GEO n'est pas vendu seul |
| Accompagnement SEO mensuel | à partir de 500 €/mois, jusqu'à 2 000 €/mois, au-delà sur devis |
| Formation SEO | 300 € les 2 h, 450 à 600 € le module de 3 à 4 h, parcours sur devis |
| Rédaction d'article | 150 à 350 € ; juridique 200 à 400 € |
| Formation GEO | même grille que la formation SEO (module GEO de 2 à 3 h) ; équipe sur devis |
| Google Ads (SEA), chef de projet digital | sur devis |

---

## 2. Trois formats, trois rôles

| Type de question | Format | Emplacement |
|---|---|---|
| « Quel consultant, qui peut, où, combien ça coûte » | Fiche prestation ou fiche formation | /prestations/… , /formation-… |
| « Qu'est-ce que, quelle différence, faut-il, combien de temps » | Article-réponse | /reponses/… |
| « Comment, pourquoi » | Article de blog | /blog/… |

---

## 3. Gabarits

### Fiche prestation ou formation (10 blocs)
1. H1 = intitulé exact de l'offre.
2. Résumé factuel de 40 à 60 mots sous le H1, lisible seul : quoi, pour qui, où, combien, en combien de temps.
3. Carte d'identité en tableau HTML : public, prérequis, durée, format (Rennes, distance), tarif, financement (dire clairement si ce n'est pas finançable), livrables.
4. « Pourquoi cette prestation ou formation » : le problème concret du client, avec 1 ou 2 faits sourcés si pertinent.
5. Déroulé ou programme en étapes numérotées, avec durée et livrable par étape.
6. « Pourquoi travailler avec moi » : expérience vérifiable, méthode, outils (dont Balise), bloc « Exemples de missions » [À COMPLÉTER PAR AURÉLIEN].
7. Modalités et délai de démarrage.
8. FAQ de 4 à 6 questions, prises dans la liste des questions ciblées, en `<details>`/`<summary>`.
9. Liens vers 2 ou 3 articles-réponses et un seul appel à l'action (diagnostic offert de 30 minutes).
10. Date de mise à jour visible et JSON-LD : Service ou Course, FAQPage, BreadcrumbList, provider = Person Aurélien Page (`@id` https://aurelienpage.fr/#person).

### Article-réponse (8 blocs, 600 à 1 000 mots)
1. H1 = la question exacte.
2. Réponse directe de 40 à 60 mots sous le H1, compréhensible seule.
3. 2 à 4 H2 en questions ; chaque H2 commence par une phrase-réponse.
4. Un tableau récapitulatif HTML.
5. Bloc « Sources » avec les liens primaires.
6. Encadré « Qui répond » : Aurélien Page, consultant SEO et GEO, lien vers la page À propos.
7. Un seul renvoi commercial vers la fiche liée.
8. FAQ de 2 ou 3 questions, date de mise à jour, JSON-LD Article (author, datePublished, dateModified) et FAQPage.

### Article de blog (1 200 mots au plus)
- H1 « Comment… » ou « Pourquoi… ».
- Introduction narrative, puis réponse résumée en 2 ou 3 phrases.
- H2 en questions.
- Chiffres sourcés.
- Un exemple concret.
- Liens vers 2 articles-réponses et 1 fiche.
- Auteur et date (affichés automatiquement par le gabarit).

---

## 4. Rappels techniques

- Contenu des articles : `_drafts/[slug].md`. Les dates de publication et de mise à jour viennent de l'historique git (`npm run dates`, lancé aussi avant chaque build).
- Données structurées partagées : `lib/schema.ts`. Fil d'Ariane JSON-LD : `breadcrumbSchema()`.
- Sitemap généré automatiquement (`app/sitemap.ts`) : toute nouvelle page y entre seule.
- Après chaque déploiement en production : `npm run indexnow` (envoie les URL modifiées du jour).
- Toute URL modifiée ou supprimée reçoit une redirection 301 dans `next.config.js`.
