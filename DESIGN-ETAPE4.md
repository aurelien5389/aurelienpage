# Refonte visuelle · étape 4 : application à tout le site

Branche `design-aurelienpage`, créée depuis `main` (commit `f9e15a2`, travail GEO inclus). Rien n'est commité, poussé ni déployé.

## En bref

- Piste A « clair et rassurant » appliquée à toutes les pages : accueil, hub et fiches prestations, formations, articles-réponses, blog, pages SEO locales, À propos, contact, pages annexes.
- Textes de fond, URL, JSON-LD, coordonnées et photo inchangés. Les seuls textes nouveaux sont ceux arbitrés à l'étape 3 (voir `DESIGN-PISTES.md`, section « Textes nouveaux ou déplacés »). Une exception demandée par Aurélien à la validation finale : le résumé du héros de l'accueil ne cite plus les prix (« Audit SEO et GEO, accompagnement mensuel » au lieu de « Audit SEO et GEO de 800 à 2 500 €, accompagnement dès 500 € par mois »). Les tarifs restent affichés sur les cartes « Mes prestations » et sur les fiches.
- Lighthouse mobile : accueil 66 → 91, fiche 81 → 91, contact 81 → 92 ; accessibilité 100 partout ; ordinateur 100 partout.
- Poids : framer-motion, react-hook-form et @hookform/resolvers retirés ; polices auto-hébergées (4 fichiers, 76 Ko au total) ; JS partagé 87 Ko.

## Lighthouse avant / après

« Avant » = site en ligne (aurelienpage.fr) avant la refonte. « Après » = build de production servi en local (`localhost:3100`). Même outil (Lighthouse 12.8.2, simulation mobile et préréglage ordinateur). La mesure « après » est à refaire sur le site en ligne une fois déployé : le réseau et le CDN de Vercel changent les temps absolus, pas les écarts.

### Mobile

| Page | Perf. avant → après | LCP avant → après | TBT avant → après | Accessibilité avant → après |
|---|---|---|---|---|
| Accueil `/` | 66 → **91** | 5,0 s → 2,8 s | 320 → 160 ms | 100 → 100 |
| Fiche `/prestations/consultant-seo-geo` | 81 → **91** | 2,2 s → 2,9 s | 700 → 200 ms | 100 → 100 |
| Réponse `/reponses/qu-est-ce-que-le-geo` | 90 → **90** | 2,3 s → 2,8 s | 360 → 280 ms | 96 → 100 |
| Blog `/blog/chatgpt-search-geo` | 95 → **90** | 2,4 s → 3,0 s | 190 → 220 ms | 100 → 100 |
| Contact `/contact` | 81 → **92** | 4,7 s → 2,4 s | 160 → 290 ms | 100 → 100 |

Bonnes pratiques et SEO : 100 avant, 100 après, sur les cinq pages. CLS : 0 partout sauf blog mobile 0,03 (encart auteur, seuil « bon » < 0,1).

Lecture : les LCP « avant » des fiches, réponses et blog sont mesurés en ligne sur CDN ; en local, le serveur Node ne compresse pas de la même façon. Les comparaisons fiables sont celles du score global et du TBT (temps de blocage), qui ne dépendent pas du réseau. Ce qui reste à gagner sur mobile : les 4 feuilles CSS que Next.js découpe par page (environ 300 ms simulées) et le script Google Analytics (190 Ko, désormais chargé après tout le reste).

### Ordinateur

| Page | Perf. avant → après | Accessibilité avant → après |
|---|---|---|
| Accueil | 99 → **100** | 100 → 100 |
| Fiche | 100 → **100** | 100 → 100 |
| Réponse | 100 → **100** | 96 → 100 |
| Blog | 99 → **100** | 100 → 100 |
| Contact | 98 → **100** | 100 → 100 |

Rapports complets (JSON) : `C:\Users\aurel\aurelienpage-captures\avant\lighthouse\` et `...\apres\lighthouse\` (p1 accueil, p2 fiche, p3 réponse, p4 blog, p5 contact ; `-mobile` / `-desktop`).

## Captures

Dossier `C:\Users\aurel\aurelienpage-captures\` :

- `avant\` : 15 pages, ordinateur (1440 px) et mobile (375 px), pleine page + au-dessus de la ligne de flottaison.
- `apres\` : mêmes 15 pages, mêmes formats, mêmes noms de fichiers.
- `avant-apres.html` : galerie côte à côte, à ouvrir dans le navigateur.
- `pistes\` : maquettes de l'étape 2 et 3.

Pages capturées : accueil, prestations (hub), fiche consultant SEO/GEO, formation GEO, réponses (index), réponse « Qu'est-ce que le GEO », blog (index), article « ChatGPT Search et GEO », consultant SEO Rennes, À propos, contact, coût d'une prestation SEO, pourquoi un consultant SEO, mentions légales, rédacteur web juridique.

Contrôles automatiques sur les 30 captures : aucun débordement horizontal, aucun texte masqué par une animation.

## Ce qui change, page par page

| Type de page | Avant | Après |
|---|---|---|
| Toutes | Fond bleu nuit, texte clair, en-tête fixe translucide, animations d'entrée (framer-motion), polices Google | Fond clair, en-tête collant clair avec nom complet, pied de page sombre, aucune animation d'entrée, polices auto-hébergées (Bricolage Grotesque pour les titres, Atkinson Hyperlegible pour le corps) |
| Accueil | Héros plein écran, expériences et formations en frise CV, compétences en grille | Héros avec photo, badge de disponibilité, repères (30 min · visio ou téléphone · gratuit), 6 prestations avec tarif, déroulé en 4 étapes, « Pourquoi travailler avec moi » + bande « Repères », 3 réponses, FAQ en `details`, bloc À propos court, bandeau diagnostic, contact |
| Fiches prestations / formations | Étapes avec filet latéral, tableau et FAQ stylés localement | Étapes numérotées en pastilles, tableau `.tableau`, FAQ `.faq`, bandeau d'appel à l'action pleine largeur |
| Articles-réponses | Réponse courte avec filet latéral, lien auteur non souligné | Réponse courte encadrée pâle, lien auteur souligné, mêmes blocs (tableau, sources, « Qui répond ») |
| Blog | Thème sombre, encart auteur et CTA dans le conteneur | Thème clair, typographie 18 px, encart auteur avec icônes, bandeau CTA pleine largeur |
| Pages locales | Thème sombre, boutons locaux | Thème clair, boutons partagés `.btn`, icônes SVG |
| À propos | Frise avec filet latéral, bandeau étranglé dans le conteneur | Étapes séparées par une bordure haute, bandeau sorti du conteneur, bouton « Télécharger mon CV (PDF) » |
| Contact | Formulaire react-hook-form + zod | Même formulaire, mêmes règles et messages, validation native sans bibliothèque (le serveur revalide avec zod) |
| Mobile | Chatbot flottant en bas à droite | Chatbot masqué sous 900 px ; à la place, pastille « Diagnostic offert » qui apparaît une fois le héros dépassé |

## Exigences GEO et accessibilité (vérifiées)

- Texte important dans le HTML rendu serveur : résumés sous H1, prix, délais, FAQ, tableaux. Aucun contenu dépendant du JavaScript pour s'afficher (seuls le formulaire, le menu mobile et la pastille mobile sont des composants client).
- Résumés de 40 à 60 mots conservés mot pour mot (comparaison automatique entre l'ancien et le nouveau HTML sur les 7 fiches et les 16 réponses).
- Tableaux HTML réels, FAQ en `details`/`summary`, ouvertes au clavier.
- Aucune URL modifiée, aucune redirection ajoutée. Sitemap, robots.txt, llms.txt inchangés.
- JSON-LD identique et revalidé contre le vocabulaire Schema.org : 0 problème sur 8 pages testées (accueil, fiche, réponse, blog, contact, À propos, Rennes, formation GEO).
- Images : `alt` et dimensions partout, photo du héros chargée en priorité (`next/image`, formats modernes servis par Vercel).
- Contraste AA sur tous les couples texte/fond (tableau dans `DESIGN-PISTES.md`), focus visible 3 px, navigation clavier complète, cibles tactiles ≥ 44 px (contrôle automatique sur les 15 pages), aucune animation d'entrée, respect de `prefers-reduced-motion`, aucun compteur animé.
- Dates de mise à jour et bloc auteur conservés sur fiches, réponses et blog.

## Fichiers

### Créés (8)

- `app/page.module.css` : styles du nouvel accueil
- `app/fonts/` : `BricolageGrotesque-latin-700.woff2`, `AtkinsonHyperlegible-latin-400.woff2`, `-400-italic.woff2`, `-700.woff2`, 2 fichiers de licence (SIL Open Font License)
- `components/Icon.tsx` : 24 icônes SVG inline, `aria-hidden` par défaut
- `components/MobileCta.tsx` + `.module.css` : pastille mobile « Diagnostic offert »
- `lib/faq-accueil.ts` : 4 questions de la FAQ d'accueil, reprises des fiches
- `DESIGN-ETAT-DES-LIEUX.md`, `DESIGN-PISTES.md`, `DESIGN-ETAPE4.md` : documents des étapes 1 à 4

### Modifiés (40)

- Socle : `app/globals.css` (jetons de design, classes partagées `.btn`, `.lien-fleche`, `.tableau`, `.faq`, focus), `app/layout.tsx` (polices locales, Analytics différé, métadonnées « Consultant SEO, GEO et SEA à Rennes »), `app/sitemap.ts` (liste des composants partagés pour les dates), `lib/content-dates.json` (régénéré), `package.json` + `package-lock.json` (3 dépendances retirées), `config/availability.ts` (champ `reponseSous`), `public/chatbot.js` (couleurs, masqué sur mobile)
- Pages : `app/page.tsx` (accueil réécrit), `app/prestations/page.tsx` (icônes), `app/contact/page.tsx` (H1), `app/a-propos/page.tsx` (bandeau, bouton CV), et les feuilles `page.module.css` de a-propos, blog, contact, cout-prestation-seo, mentions-legales, pourquoi-consultant-seo, prestations, reponses (marges de l'ancien en-tête fixe)
- Composants : `Header`, `Footer`, `DiagnosticCTA`, `Contact`, `FicheLayout`, `ReponseLayout`, `BlogPostLayout`, `AuthorBio`, `LocalSeoPageLayout`, `AvailabilityBadge`, `MarkdownRenderer` (`.tsx` et/ou `.module.css`)

### Supprimés (18 fichiers, 9 composants devenus inutiles)

`PresentationConsultant`, `VitrinePrestations`, `ParcoursConsultant`, `AtoutsConsultant`, `ExperiencesPro`, `FormationsConsultant`, `ApportsConsultant`, `CompetencesConsultant`, `PrestationDetail` (`.tsx` + `.module.css`). Leur contenu utile (parcours, formations, compétences) vit désormais sur `/a-propos`, inchangé.

Dépendances retirées : `framer-motion`, `react-hook-form`, `@hookform/resolvers`. Conservée : `zod` (validation serveur du formulaire).

## [À COMPLÉTER PAR AURÉLIEN]

1. **Délai de réponse** : `config/availability.ts`, champ `reponseSous` (vide = ligne masquée dans le héros). Exemple : `"Réponse sous 48 h"`. À noter : le message de confirmation du formulaire dit déjà « Je vous réponds sous 48h » (texte existant, non modifié) ; si tu renseignes un autre délai, les deux sont à aligner.
2. **Photo haute définition**, si possible en situation de travail : la photo actuelle (`public/photo.jpg`, 336 × 321 px) est affichée en 220 px sur ordinateur, à la limite de la netteté sur écran haute densité.
3. **Exemples de missions** (bloc prévu dans `GEO-REGLES.md`, point 6) : non ajouté, aucune référence client ne peut être citée sans ton accord.

## Textes signalés, laissés tels quels

À faire évoluer plus tard si tu le souhaites, aucune modification appliquée :

- Encart de contact au tutoiement (« Préfères-tu qu'on en parle directement ? », « Réserve un créneau… ») alors que le reste du site vouvoie.
- « Je vous réponds sous 48h » dans la confirmation du formulaire (voir point 1 ci-dessus).
- Message d'accueil du chatbot : « SEO, SEA, GEO et IA ».
- « FormasSEO » (nom de l'organisme, orthographe reprise de l'accueil précédent) et « 8 ans » d'expérience sur `/a-propos`.

## Choix techniques à connaître

- **Police du corps en `font-display: optional`** : si la police n'est pas arrivée dans les 100 premières millisecondes (connexion très lente, première visite), la page s'affiche avec la police système et garde celle-ci jusqu'au prochain chargement. Avantage : le texte principal s'affiche sans attendre (c'est ce qui a fait passer le LCP de l'accueil mobile de 5,0 s à 2,8 s). Les polices sont préchargées, donc sur une connexion normale la police voulue s'affiche dès le premier rendu.
- **Titres en une seule graisse (700)** : fichier statique de 22 Ko au lieu de la police variable. Les niveaux de titre se distinguent par la taille, pas par la graisse.
- **Google Analytics chargé en dernier** (`lazyOnload`) : les pages vues restent comptées, avec quelques centaines de millisecondes de retard, invisibles dans les rapports.
- **Formulaire de contact sans bibliothèque** : mêmes champs, mêmes règles (nom 2 à 100 caractères, e-mail valide, sujet facultatif ≤ 200, message 20 à 5 000), mêmes messages d'erreur, focus posé sur le premier champ en erreur, `aria-invalid` ajouté. Le serveur (`app/api/contact/route.ts`) revalide avec zod, inchangé.
- **Chatbot masqué sous 900 px** : sur mobile, la pastille « Diagnostic offert » prend sa place pour ne pas superposer deux boutons flottants. Sur ordinateur, le chatbot garde sa place, recoloré.

## Vérifications faites

- `npx tsc --noEmit` : 0 erreur. `npm run build` : 60 pages générées sans avertissement.
- JSON-LD : 0 problème sur 8 pages (script de validation local contre le vocabulaire Schema.org, `validator.schema.org` bloquant les robots).
- Lighthouse : 10 rapports (5 pages × mobile/ordinateur), voir tableaux ci-dessus.
- Captures : 30 images, aucun débordement, aucun texte masqué.
- Formulaire : testé en local par script (soumission vide → 3 messages d'erreur, focus sur le premier champ, `aria-invalid` posé ; correction à la saisie ; e-mail invalide et message trop court détectés ; envoi avec données valides → message d'erreur propre, car la clé Resend n'existe qu'en production). L'envoi réel (réception de l'e-mail) est à vérifier une fois déployé.

## Après déploiement (à faire plus tard, avec ton accord)

1. Relancer Lighthouse sur aurelienpage.fr (mobile et ordinateur) et reporter les scores « après » définitifs.
2. Vérifier dans Google Analytics que les pages vues continuent d'arriver (chargement différé).
3. Aucune URL n'ayant changé, rien à renvoyer à IndexNow ni à la Search Console.
