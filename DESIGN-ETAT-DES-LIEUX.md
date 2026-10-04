# Refonte visuelle · État des lieux (étape 1)

Relevé du 4 octobre 2026 sur le site en ligne (version `main` f9e15a2, après le chantier GEO). Lecture seule : rien n'a été modifié.
Branche de travail : `design-aurelienpage`.

Captures : `C:\Users\aurel\aurelienpage-captures\avant\` (ouvrir `index.html` dans un navigateur).
Mesures Lighthouse brutes : `C:\Users\aurel\aurelienpage-captures\avant\lighthouse\`.

---

## 1. Lighthouse avant refonte (Lighthouse 12.8, site en ligne, une passe par page)

| Page | Appareil | Perf. | Accessibilité | Bonnes pratiques | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| Accueil | mobile | 66 | 100 | 100 | 100 | 5,0 s | 0 | 320 ms |
| Accueil | ordinateur | 99 | 100 | 100 | 100 | 0,8 s | 0 | 30 ms |
| Fiche Consultant SEO et GEO | mobile | 81 | 100 | 100 | 100 | 2,2 s | 0 | 700 ms |
| Fiche Consultant SEO et GEO | ordinateur | 100 | 100 | 100 | 100 | 0,5 s | 0 | 0 ms |
| Réponse « Qu'est-ce que le GEO ? » | mobile | 90 | 96 | 100 | 100 | 2,3 s | 0 | 360 ms |
| Réponse « Qu'est-ce que le GEO ? » | ordinateur | 100 | 96 | 100 | 100 | 0,5 s | 0 | 0 ms |
| Blog « Cité par ChatGPT et Perplexity » | mobile | 95 | 100 | 100 | 100 | 2,4 s | 0,001 | 190 ms |
| Blog « Cité par ChatGPT et Perplexity » | ordinateur | 99 | 100 | 100 | 100 | 0,8 s | 0 | 0 ms |
| Contact | mobile | 81 | 100 | 100 | 100 | 4,7 s | 0 | 160 ms |
| Contact | ordinateur | 98 | 100 | 100 | 100 | 1,1 s | 0 | 40 ms |

Lecture :
- Le point faible est le **LCP mobile de l'accueil et du contact** (seuil Google : 2,5 s). L'élément LCP est un paragraphe de texte déjà présent dans le HTML ; 87 % du temps est un « délai de rendu » : 2,9 s de travail JavaScript sur le fil principal (hydratation de 11 composants animés, Framer Motion, chatbot, Google Analytics), 76 Kio de JavaScript inutilisé, pas de `preconnect` vers Google Tag Manager (320 ms estimés).
- Accessibilité 96 sur les pages Réponses : le lien « Aurélien Page » de la ligne d'auteur n'est distingué du texte que par la couleur (pas de soulignement), et le logo « AP » porte un `aria-label` (« Aurélien PAGE, accueil ») qui ne correspond pas au texte visible. Ces deux points sont présents sur toutes les pages, mais ne font baisser le score que là où ils pèsent plus.

## 2. Contrastes

Couples de couleurs des jetons actuels (rapport WCAG ; AA = 4,5 pour le texte courant, 3 pour le grand texte) :

| Texte | Fond | Rapport | Verdict |
|---|---|---|---|
| Blanc cassé #F0F4F8 | Bleu nuit #0F1B2D | 15,6 | OK |
| Gris #8B9BB4 (corps des articles, tableaux, cartes) | Bleu nuit | 6,1 | OK |
| Cyan #00B4D8 (liens, titres accent) | Bleu nuit | 7,0 | OK |
| Bleu nuit (texte des boutons) | Cyan | 7,0 | OK |
| Gris #8B9BB4 | Bleu acier #1E3A5F | 4,1 | **Insuffisant pour du texte courant** (cartes et encarts qui utilisent le bleu acier à plus de 60 %) |
| Cyan | Bleu acier | 4,7 | Limite |
| Vert #34D399 (badge disponibilité) | Bleu nuit | 9,0 | OK |

Lighthouse ne signale aucun échec de contraste : les cartes utilisent le bleu acier dilué (15 à 25 %), ce qui reste au-dessus du seuil. Le problème est ailleurs : le gris #8B9BB4 est utilisé pour **tout le texte courant** (articles, tableaux, listes), en 14 ou 15 px. Lisible au sens de la norme, fatigant à lire, et c'est ce qui donne l'impression « sombre et intimidant ».

## 3. Textes masqués par les animations

- **Accueil : 39 blocs livrés avec `opacity: 0`** dans le HTML (sections Prestations, À propos, Atouts, Expériences, Formations, Contact, boutons du héros). Ils n'apparaissent qu'après l'exécution du JavaScript, puis un par un au défilement (`whileInView`, marge de 80 px). Sans JavaScript (capture `p1-accueil-desktop-sansjs.png`), l'accueil se résume au titre, au résumé et au pied de page.
- **Contact : 4 blocs** masqués de la même façon (formulaire et coordonnées).
- Test de défilement : en défilant lentement, tout finit par s'afficher. En défilant vite (molette, touche Fin, lien d'ancre), les sections traversées restent vides jusqu'à l'arrêt : c'est l'effet « cartes pâles » signalé.
- 11 composants utilisent ces animations d'entrée. Un seul (le héros) respecte `prefers-reduced-motion` ; les 10 autres animent quoi qu'il arrive.
- Le héros contient aussi un texte à effet « machine à écrire » qui fait défiler 4 intitulés de métier : contenu qui change toutes les 2 secondes, illisible pour un lecteur d'écran et sans valeur pour les moteurs.
- Fiches, réponses et blog : aucun bloc masqué. Le contenu GEO est sain.

## 4. Espaces vides

- **Héros de l'accueil forcé à `min-height: 100vh`**. Sur un portable 1440 × 900, son contenu mesure 1 053 px : les boutons passent sous la ligne de flottaison et l'indicateur « scroll » est coupé. Sur un écran 1920 × 1080, le héros occupe 1 080 px avec le contenu qui s'arrête vers 920 px : 160 px de vide avant la section Prestations.
- Chaque section de l'accueil a 80 px de marge haute et basse ; avec les blocs invisibles au chargement, la page paraît composée de grands aplats bleu nuit.
- Page Contact : l'en-tête (titre, accroche, encart Calendly) mesure 1 151 px sur ordinateur, avec 128 px de vide sous l'encart avant le formulaire.
- Fiches : 64 px de vide sous le résumé, acceptable.

## 5. Icônes émoji

- 20 émojis servent d'icônes : cartes de l'accueil (🔍 📣 🤖 🗂️ 🎓), hub Prestations (+ 📈 ⚡), section Atouts (🛠️ 🎓 🔗), composants Apports (non utilisé). Rendu différent selon le système (Windows, Mac, Android), couleurs criardes, aucune cohérence de trait.
- Pictogrammes texte : 📍 pour la ville, ✍ pour l'auteur, ▸ et → pour les listes, 19 chevrons « › » de fil d'Ariane. Tous marqués `aria-hidden`, donc muets pour les lecteurs d'écran : correct.
- Icônes de la page Contact (enveloppe, téléphone, LinkedIn, épingle) : émojis également.

## 6. Bulle de discussion (bas à droite)

- Fichier `public/chatbot.js`, chargé sur toutes les pages. Bulle ronde de 60 × 60 px, à 24 px des bords. Au clic : panneau de 360 × 520 px branché sur un webhook n8n hébergé sur audiaa.fr, qui répond avec un modèle Claude. Aucune collecte de contact, pas d'historique au-delà de la session du navigateur.
- Son message d'accueil dit encore « consultant SEO, SEA, GEO et IA » et l'en-tête « SEO - SEA - GEO - IA » : vocabulaire d'avant le chantier GEO (texte, à proposer).
- **Sur mobile, elle gêne la lecture** : aucune adaptation (même taille, mêmes marges). Sur un écran de 375 px, elle couvre les 60 derniers pixels de droite de toute ligne arrivant en bas d'écran : la ligne « Durée » du tableau de la fiche (capture `p2-fiche-mobile-fold.png`), la fin des champs du formulaire de contact. Elle entrera en concurrence avec le bouton de contact fixe prévu pour mobile.

## 7. Typographie et tailles

- Polices : Space Grotesk (titres), Inter (corps), JetBrains Mono (code), chargées via `next/font` (déjà auto-hébergées à la construction du site). Les deux premières sont à remplacer.
- Corps de texte : 16 px. Dans les feuilles de style : 34 occurrences de 12 px, 59 de 14 px, 6 de 15 px. Sur l'accueil, 35 éléments de texte (47 sur mobile) sont sous 15 px ; 24 sur la fiche ; 16 sur l'article de blog.
- Titres H1 : 48 px sur mobile, 96 px sur grand écran pour le nom. Hiérarchie correcte mais le nom écrase le métier.

## 8. Accessibilité (hors Lighthouse)

- Aucun style `:focus-visible` dans le site : le contour de focus clavier dépend du navigateur ; une règle `outline: none` est présente sur le formulaire de contact (à vérifier qu'un remplacement existe).
- Cibles tactiles : plusieurs boutons et liens à 40 px de haut, badges et puces à 24, 28 ou 32 px (seuil visé : 44 px).
- Photo `public/photo.jpg` : 336 × 321 px, 8 Ko. Suffisante pour un portrait de 80 px, trop petite pour la place accrue prévue : **[À COMPLÉTER PAR AURÉLIEN] photo haute définition, si possible en situation de travail.**

## 9. Textes à faire évoluer (propositions, non appliquées)

| Où | Actuel | Problème |
|---|---|---|
| Contact, encart Calendly | « Préfères-tu qu'on en parle directement ? Réserve un créneau… » | Tutoiement, contraire à la règle du site |
| Héros | 4 intitulés en défilement (« Consultant SEO & GEO », « Traffic Manager (SEA) », « Chef de Projet Digital », « Formateur SEO & GEO ») | Texte animé ; à remplacer par une ligne fixe |
| Chatbot | « consultant SEO, SEA, GEO et IA » | Positionnement d'avant la refonte GEO |
| Héros, 3e bouton | « Télécharger mon CV » | Brouille le message client ; proposition : le déplacer dans À propos |
| Accueil, section Atouts | Titres et textes à relire au moment de la refonte | Cartes émoji |

## 10. Ce qui est sain et à conserver

- Tout le contenu GEO : résumés sous les H1, tableaux HTML, FAQ en `details`/`summary`, dates, blocs auteur, JSON-LD rendu côté serveur, URL.
- Fiches, réponses et blog : aucun contenu masqué, structure claire.
- Scores Lighthouse ordinateur, accessibilité et SEO déjà hauts : la refonte doit les maintenir, et remonter le LCP mobile.
- Composants morts à retirer : `ApportsConsultant`, `CompetencesConsultant` (plus importés nulle part).
