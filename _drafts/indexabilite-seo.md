# Métadonnées de la page

**Slug / URL :** `/blog/indexabilite-seo`

**H1 :** Indexabilité SEO : pages indexables, non indexables et stratégie de crawl budget

**Intention de recherche :**
Requête cible : "page indexable SEO" / "page non indexable" / "indexabilité SEO" / "noindex SEO"
Cible : webmasters, développeurs et consultants SEO qui veulent maîtriser l'indexation de leurs pages. Intention informationnelle MOFU technique.

---

# Indexabilité SEO : pages indexables, non indexables et stratégie de crawl budget

Être crawlé par Google ne signifie pas être indexé. Et être indexé ne signifie pas être bien positionné. Ces trois étapes, accessibilité, indexabilité, ranking, sont distinctes, et confondre les deux premières est l'une des erreurs techniques les plus fréquentes en SEO.

Cet article fait le point sur ce qui détermine l'indexabilité d'une page, les raisons légitimes de ne pas indexer certaines pages, et comment piloter intelligemment l'indexation de votre site pour concentrer le budget de crawl sur ce qui compte.

## Qu'est-ce qu'une page indexable ?

Une page est **indexable** quand aucun obstacle technique ne s'oppose à son intégration dans l'index de Google. Pour qu'une page soit indexable, quatre conditions doivent être réunies simultanément :

**1. Elle est accessible au crawler.** Le fichier robots.txt n'interdit pas l'accès de Googlebot à cette URL ou à ce répertoire. Le serveur répond correctement (code 200). Aucune authentification ne bloque l'accès.

**2. Elle ne contient pas de directive noindex.** Ni dans la balise `<meta name="robots" content="noindex">`, ni dans l'en-tête HTTP `X-Robots-Tag: noindex`. Ces deux directives signalent explicitement à Google de ne pas inclure la page dans son index.

**3. Elle n'est pas un doublon non canonisé.** Si la page est considérée par Google comme un doublon d'une autre URL et qu'elle n'est pas la canonique retenue, Google ne l'indexera pas, même si elle ne contient pas de noindex.

**4. Elle a un contenu suffisant et utile.** Depuis les Helpful Content Updates (2022-2024), Google est de plus en plus sélectif sur les pages de faible valeur. Une page avec très peu de contenu, du texte générique, ou du contenu dupliqué peut être crawlée sans être indexée, simplement parce que Google estime qu'elle n'apporte rien aux utilisateurs.

## Qu'est-ce qu'une page non indexable ?

Une page non indexable est une page que Google crawle, il peut la visiter, mais qu'il ne place pas dans son index. Elle n'apparaîtra donc jamais dans les résultats de recherche.

Les causes d'une non-indexation sont multiples :

**Directive noindex** : c'est la cause la plus explicite et la plus contrôlée. Vous avez délibérément indiqué à Google de ne pas indexer cette page.

**Blocage robots.txt** : la page est inaccessible au crawler. Note importante : si une page est bloquée par robots.txt ET a une directive noindex, Google ne peut pas lire le noindex (il ne crawle pas la page). Résultat imprévisible, Google peut décider de l'indexer quand même sur la base d'autres signaux. Ne bloquez jamais par robots.txt une page que vous souhaitez marquer noindex.

**Canonique non retenue** : Google a choisi une autre URL comme version canonique. La page peut être crawlée mais ne sera pas indexée en tant que telle, la canonique désignée l'est à sa place.

**Contenu jugé insuffisant** : Google peut disqualifier silencieusement une page de l'indexation sans aucune directive de votre part, s'il juge son contenu trop mince, trop générique, ou sans valeur ajoutée réelle.

**Erreur de configuration technique** : redirections en boucle, pages retournant un code autre que 200 (403, 410, 5xx…), temps de réponse trop longs empêchant le crawl complet.

## Quelle différence entre crawlabilité et indexabilité ?

La distinction est fondamentale :

**Crawlabilité** = Google peut-il accéder physiquement à la page ? C'est une question d'accessibilité technique.

**Indexabilité** = Google va-t-il ajouter cette page à son index ? C'est une question de choix éditorial du moteur, influencé par vos directives et par la qualité du contenu.

Une page peut être crawlée sans être indexée (noindex, contenu mince). Une page peut être indexée sans avoir été crawlée récemment (Google garde des pages dans son index même si elles ne sont plus crawlées fréquemment). Une page peut être non crawlable mais apparemment indexée (si Google connaît son existence via des backlinks, il peut l'ajouter à son index avec des données partielles, ce qu'on appelle une "URL discovery sans crawl").

## Les directives d'indexation à maîtriser

### La balise meta robots

Placée dans le `<head>` de la page, la balise meta robots contrôle l'indexation page par page :

```html
<!-- Ne pas indexer, ne pas suivre les liens -->
<meta name="robots" content="noindex, nofollow">

<!-- Indexer mais ne pas suivre les liens -->
<meta name="robots" content="index, nofollow">

<!-- Comportement par défaut : indexer et suivre les liens -->
<meta name="robots" content="index, follow">

<!-- Limiter la longueur de l'extrait dans les SERPs -->
<meta name="robots" content="max-snippet:150">
```

La directive `nosnippet` ou `max-snippet:0` est particulièrement importante dans le contexte de l'IA Search : elle empêche Google (et les moteurs génératifs) d'extraire des passages de votre page pour les AI Overviews. Si vous souhaitez apparaître dans les réponses IA, ne bloquez jamais les extraits sur vos contenus stratégiques.

### L'en-tête HTTP X-Robots-Tag

Alternative à la balise meta robots, particulièrement utile pour les fichiers non-HTML (PDF, images) qui ne peuvent pas avoir de balise `<head>`. Elle s'applique au niveau du serveur et peut cibler un User-Agent spécifique (par exemple, bloquer un bot IA particulier sans bloquer Googlebot).

### Le fichier robots.txt

Contrôle l'accès des bots à des sections entières du site. Il ne contrôle pas directement l'indexation, il contrôle le crawl. Une URL bloquée par robots.txt peut quand même être indexée si Google en a connaissance via d'autres signaux (backlinks, sitemap).

## Quelles pages ne pas indexer ?

La question n'est pas "quelles pages Google peut-il indexer ?" mais "lesquelles *doit-il* indexer ?". L'indexation sélective est une pratique SEO avancée qui consiste à concentrer le budget de crawl et l'attention de Google sur vos pages à valeur SEO réelle.

**Pages à exclure systématiquement de l'indexation :**

- Pages de confirmation de commande, de panier, d'espace membre, de connexion
- Pages de résultats de recherche interne
- Pages de politique de confidentialité, CGV, mentions légales (sauf si elles ont un intérêt SEO particulier)
- Pages de tags et archives avec peu de contenu unique
- Pages de pagination au-delà de la page 1 (avec du contenu quasi-identique)
- Pages générées par des paramètres d'URL (tri, filtres, sessions)
- Pages de test, de staging, ou de développement
- Pages dupliquées non canonisées

**Ce que vous gagnez** : en réduisant le nombre de pages indexables, vous concentrez le budget de crawl de Google sur vos pages stratégiques. Elles sont crawlées plus fréquemment, indexées plus rapidement, et bénéficient d'une meilleure transmission de PageRank.

## Vérifier l'indexabilité de vos pages

**Google Search Console, rapport Couverture** : il classe toutes les URLs découvertes en Valides, Exclues, Erreurs, et Avertissements. C'est votre tableau de bord principal.

**L'outil d'inspection d'URL** : entrez n'importe quelle URL pour savoir si Google l'a crawlée, si elle est indexée, quelle URL canonique Google a retenue, et quand elle a été crawlée pour la dernière fois.

**Les outils de crawl** (Screaming Frog, Sitebulb) : crawlez votre propre site et filtrez par directive (noindex, nofollow, canonical) pour avoir une vue exhaustive de l'état d'indexabilité de toutes vos URLs.

**La commande `site:` dans Google** : `site:votredomaine.fr` donne une estimation du nombre de pages indexées. Comparez-la au nombre total de pages de votre site pour détecter des écarts significatifs.
