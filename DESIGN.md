# Direction visuelle · « La conversation »

Branche `refonte-conversation` (octobre 2026). Fait suite à l'audit UX/UI et à l'analyse des concurrents de l'Ouest.

## Idée

Les clients d'Aurélien posent des questions, à Google, aux IA, à lui. Son métier : faire en sorte que leur entreprise soit dans la réponse. Le site met en scène cet échange : questions dans la voix du client, réponses dans la sienne, et un geste visuel unique, le **surligneur**, qui marque ce qui compte.

Valeurs à faire ressentir : échange, partage, professionnalisme, réactivité.

| Valeur | Traduction |
|---|---|
| Échange | Bulles de conversation (héros, test), offres formulées « Je veux… » avec les mots du client, contact « On en parle ? » |
| Partage | Test GEO ouvert à tous, sans collecte : le visiteur fait lui-même ce que fait l'audit |
| Professionnalisme | Encre et papier, tableaux, sources, aucun chiffre non sourcé, aucun effet gratuit |
| Réactivité | Téléphone dans l'en-tête, barre mobile Appeler / Réserver, « Réponse sous 48 h », disponibilité affichée |

## Jetons

Ajoutés dans `app/globals.css` (les autres jetons de la piste A restent) :

| Jeton | Valeur | Usage |
|---|---|---|
| `--color-signal` | #FFCF3F | Boutons d'action, surlignage fort, pastilles numérotées, emplacement « votre-site.fr ? » |
| `--color-signal-fonce` | #F2B705 | Survol |
| `--color-signal-pale` | #FFF1C2 | Surlignage léger, fond de la section test, survol des lignes |

Contrastes : encre #14263A sur signal 10,4 ; sur signal pâle 13,6.

Règle : le jaune signale une action ou une information clé. Jamais en décoration, jamais en texte.

## Composants et gestes

- **Bouton principal** (`.btn-primaire`) : fond jaune, contour encre 1,5 px, ombre portée encre décalée de 3 px. Au survol, il « s'enfonce ».
- **Cartes signatures** (illustration du héros, test GEO) : contour encre, ombre décalée de 6 à 8 px. Deux par page au maximum.
- **Bulles** : client en encre pleine (coin bas gauche carré), IA en papier bordé, Aurélien en jaune pâle avec sa photo.
- **Surligneur** : classe `.surligne` (pâle) ; variante forte dans le héros.
- **Demandes « Je veux… »** : en italique, entre guillemets insécables, le service en face.

## À ne pas faire

- Animations d'apparition au défilement, halos, néons, verre dépoli.
- Grilles de cartes identiques icône + titre + texte.
- Chiffres sans source ni durée.
- Une troisième couleur d'accent.

## Reste à faire

- Avis Google nommés et 2 ou 3 résultats chiffrés : bande de preuve sous le héros.
- Photo en situation, haute définition, pour l'À propos et les pages villes.
- Zéro barré de la police Atkinson Hyperlegible sur les prix et dates.
- Étendre les gestes (bulles, surligneur) aux pages villes (`LocalSeoPageLayout`), au hub Prestations et à la page Contact.
