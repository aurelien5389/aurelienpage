# Refonte visuelle · Deux pistes pour l'accueil (étape 2)

Maquettes et captures : `C:\Users\aurel\aurelienpage-captures\pistes\index.html` (ouvrir dans un navigateur ; `piste-a.html` et `piste-b.html` se redimensionnent pour voir le rendu mobile).
Les textes sont ceux du site, repris mot pour mot. Seule la mise en forme change. Contrastes calculés selon WCAG 2 ; tous les couples texte/fond passent le seuil AA (4,5 pour le texte courant).

## Contraintes communes respectées
- Fond clair ; le sombre ne sert qu'au pied de page et à un bandeau d'appel à l'action.
- Corps de texte à 18 px, interligne 1,65, colonne de lecture de 60 à 65 caractères.
- Polices sous licence SIL Open Font, fichiers auto-hébergés (plus de Space Grotesk ni d'Inter).
- Hiérarchie du héros : un bouton principal (diagnostic offert de 30 minutes), un bouton secondaire (voir mes prestations). Le bouton CV n'y figure plus (proposition : page À propos).
- Icônes SVG au trait, décoratives (masquées aux lecteurs d'écran), à la place des émojis.
- Sur mobile : un bouton de contact fixe en bas, pleine largeur, 48 px de haut.
- Aucune animation d'entrée : tout le contenu est visible dès le chargement.

## Piste A · clair et rassurant

**Intention** : un cabinet-conseil lumineux. Bleu encre, blanc cassé légèrement bleuté, accent bleu canard hérité du cyan actuel mais assombri pour tenir le contraste sur fond clair. Cartes aérées, coins arrondis (14 px), ombres très légères.

**Polices** : Bricolage Grotesque (titres, graisse 700) · Atkinson Hyperlegible (corps). La seconde a été dessinée par le Braille Institute pour la lisibilité : chaque lettre se distingue des autres, ce qui sert directement la qualité « accessibilité ».

| Rôle | Couleur | Contraste sur le fond #F5F8FA |
|---|---|---|
| Fond de page | #F5F8FA | |
| Cartes, champs | #FCFDFE | |
| Texte principal | #14263A | 14,4 |
| Texte secondaire | #415468 | 7,3 |
| Accent (liens, boutons) | #0B6E8C | 5,4 (texte blanc sur bouton : 5,7) |
| Fond pâle (badges) | #DCEFF5 | accent dessus : 4,9 |
| Filets, contour de focus | #0A86A8 | 4,0 (seuil 3 pour un élément non textuel) |
| Fond sombre (pied, bandeau) | #14263A | texte #E6EEF4 dessus : 13,1 ; lien #9BE0EF : 10,5 |
| Badge disponibilité | #1E6B4A sur #DDF1E6 | 5,5 |

Note : le cyan d'origine (#00B4D8) ne tient pas sur fond clair (2,3) ; il ne reste qu'en parenté de teinte.

## Piste B · chaleureux et éditorial

**Intention** : une revue professionnelle. Crème, encre vert-noir, vert sapin pour les actions et un bleu canard discret pour les filets. Titres en Fraunces, une serif à empattements souples et variable, lisible à toutes les tailles ; numérotation éditoriale des prestations ; citation extraite du texte À propos ; photo en grand, avec légende.

**Polices** : Fraunces (titres, graisse 600, axe « SOFT » pour adoucir) · Source Sans 3 (corps).

| Rôle | Couleur | Contraste sur le fond #FAF6EE |
|---|---|---|
| Fond de page | #FAF6EE | |
| Cartes, champs | #FFFDF8 | |
| Texte principal | #1D2927 | 13,9 |
| Texte secondaire | #4A5A56 | 6,8 |
| Accent (liens, boutons) | #1F5C47 | 7,3 (texte crème sur bouton : 7,7) |
| Fond pâle (badges) | #E2EEE6 | accent dessus : 6,6 |
| Filets, contour de focus | #0F6B74 | 5,8 |
| Fond sombre (pied, bandeau) | #1D2927 | texte #EDE8DC dessus : 12,3 ; lien #A7DCC9 : 9,8 |
| Badge disponibilité | #1F5C47 sur #E2EEE6 | 6,6 |

## Différence avec Audiaa
Audiaa : tons chauds et terracotta. La piste A s'en éloigne nettement (froid, bleu). La piste B partage un fond chaud (crème) mais s'en distingue par le vert sapin et la serif ; aucun orange ni terracotta.

## Textes ajoutés dans les maquettes (à arbitrer, non appliqués au site)
- Piste B : légende sous la photo « Rennes, en télétravail ou en déplacement » (reprise du résumé) et citation « partir du contenu, du sens et des usages avant la technique » (extraite du texte À propos).
- Les deux : le nom complet « Aurélien Page » à côté du logo « AP » dans l'en-tête.
- Les deux reprennent tels quels des textes à faire évoluer plus tard : encart de contact au tutoiement, « 8+ ans d'expérience », « FormasSEO ».

## Ce que la refonte conserve quelle que soit la piste
Textes, URL, JSON-LD, coordonnées, résumés sous les H1, tableaux HTML, FAQ en details/summary, dates et blocs auteur.

## Décision attendue
Piste A ou piste B (ou une piste avec un élément de l'autre, par exemple A avec la numérotation éditoriale des prestations, ou B avec les cartes). L'étape 3 traduit ensuite les cinq qualités (accessibilité, accompagnement, expertise, réactivité, disponibilité) dans la piste retenue.

---

# Étape 3 · Accueil v2 (piste A retenue)

Maquette : `C:\Users\aurel\aurelienpage-captures\pistes\accueil-v2.html` (captures dans `index.html`).
Objectif : convaincre un prospect de réserver le diagnostic offert. Les blocs de CV (Expériences, Formations, Atouts) quittent l'accueil ; leur contenu reste sur la page À propos.

## Structure et correspondance avec les cinq qualités

| Bloc | Contenu | Qualité servie |
|---|---|---|
| 1. Héros | Nom, métier, ville, badge disponibilité, résumé de 58 mots (inchangé), bouton principal « Réserver mon diagnostic offert », bouton secondaire « Voir mes prestations », trois micro-repères : 30 min · visio ou téléphone · gratuit / Réponse sous [À COMPLÉTER PAR AURÉLIEN] / Démarrage : prise en charge possible dès maintenant | Disponibilité, réactivité |
| 2. Mes prestations | 6 cartes (ajout de l'accompagnement mensuel), icônes SVG, **ligne de tarif reprise des fiches** sous chaque carte | Accessibilité (prix visibles) |
| 3. Comment on travaille ensemble | 4 étapes numérotées avec durée et livrable, reprises du déroulé de la fiche Consultant SEO et GEO (6 étapes condensées en 4) | Accompagnement |
| 4. Pourquoi travailler avec moi | 3 blocs repris des fiches : Praticien (parcours daté), Sourcé et mesuré (méthode), Outillé (Balise) + bande « Repères » en 4 colonnes : parcours, domaines, outils, formations suivies. Lien « Parcours complet et formations » vers À propos | Expertise |
| 5. Trois réponses pour commencer | Qu'est-ce que le GEO ? · SEO ou GEO ? · Combien de temps pour les résultats ? (titres et descriptions existants) | Expertise |
| 6. Questions fréquentes | 4 questions reprises des fiches, en details/summary visibles | Accessibilité |
| 7. À propos | Photo, 2 paragraphes existants, lien vers la page À propos | Accompagnement |
| 8. Bandeau sombre | Diagnostic offert (texte existant) : seule zone sombre avec le pied de page | Disponibilité |
| 9. Contact | Encart Calendly, formulaire, coordonnées lisibles (e-mail, téléphone, LinkedIn, localisation) | Disponibilité |
| Mobile | Bouton fixe « Réserver mon diagnostic offert » en bas, 48 px, pleine largeur | Disponibilité |

## Textes nouveaux ou déplacés, à arbitrer (non appliqués au site)
1. Titres de sections : « Comment on travaille ensemble », « Pourquoi travailler avec moi », « Repères », « Trois réponses pour commencer », « Questions fréquentes », « À propos ».
2. Titres des 3 blocs : « Praticien », « Sourcé et mesuré », « Outillé ».
3. Étiquettes de la bande Repères : « Parcours », « Domaines », « Outils », « Formations suivies ».
4. Étape 2 du déroulé : fusion des trois audits de la fiche (technique, contenus, GEO) en un seul paragraphe ; étape 3 : durée « une réunion » (la fiche ne précise pas de durée).
5. Liens : « Parcours complet et formations », « Lire la suite sur la page À propos », sous-titre « Des réponses courtes, avec leurs sources officielles. »
6. Micro-repères du héros : « Réponse sous [À COMPLÉTER PAR AURÉLIEN] » (affiché seulement si tu confirmes un délai) et « Démarrage : prise en charge possible dès maintenant » (texte de la configuration de disponibilité).
7. En-tête : nom complet « Aurélien Page » à côté du logo « AP ».
8. Retirés de l'accueil : Expériences (liste des employeurs), Formations, Atouts (3 cartes émoji, dont le texte « SEO, SEA, IA, no-code »), statistiques « 8+ ans », texte défilant du héros, bouton « Télécharger mon CV » (proposition : page À propos).
9. Conservés tels quels bien que signalés : encart de contact au tutoiement, « FormasSEO » (nom de l'organisme écrit ainsi sur l'accueil actuel).

## [À COMPLÉTER PAR AURÉLIEN]
- Délai de réponse (« Réponse sous … »).
- Photo haute définition, si possible en situation de travail (la photo actuelle fait 336 px).
