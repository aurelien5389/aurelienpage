# Métadonnées de la page

**Slug / URL :** `/blog/seo-technique-core-web-vitals`

**H1 :** SEO technique : les fondations indispensables d'un site bien référencé

**Intention de recherche :**
Requête cible : "SEO technique" / "optimisation technique SEO" / "Core Web Vitals SEO" / "audit SEO technique"
Cible : webmasters, développeurs, responsables marketing digital, chefs de projet web qui veulent comprendre et améliorer les bases techniques de leur référencement. Intention informationnelle avec forte dimension pratique (TOFU/MOFU).

---

# SEO technique : les fondations indispensables d'un site bien référencé

Le SEO technique est le socle sur lequel repose tout le reste. Vous pouvez produire le meilleur contenu du monde et accumuler des dizaines de backlinks de qualité : si votre site présente des problèmes techniques qui empêchent Google de l'explorer, de le comprendre ou de le charger correctement, votre travail sera invisible.

Le SEO technique n'est pas réservé aux développeurs, tout professionnel du SEO doit en maîtriser les fondamentaux pour diagnostiquer les problèmes et piloter leur résolution.

## Les trois étapes fondamentales : crawl, indexation, rendu

Google traite un site web en trois étapes successives. Comprendre ce processus est indispensable pour identifier où des problèmes techniques peuvent survenir.

**Le crawl (exploration)** : les robots de Google (Googlebot) parcourent le web en suivant les liens hypertextes. Ils visitent vos pages, lisent leur code source et collectent les informations. Si une page n'est pas accessible aux robots (erreur serveur, blocage dans le robots.txt, page orpheline sans liens entrants), elle ne sera jamais indexée.

**L'indexation** : après le crawl, Google analyse le contenu de vos pages et décide si elles méritent d'être ajoutées à son index. Une page peut être crawlée mais non indexée si son contenu est jugé de mauvaise qualité, dupliqué, ou si une directive `noindex` est présente.

**Le rendu** : Google exécute le JavaScript de vos pages pour comprendre leur contenu final tel qu'il est affiché à l'utilisateur. Les sites très dépendants du JavaScript peuvent présenter des problèmes de rendu qui affectent l'indexation de leur contenu.

## Le robots.txt : contrôler l'exploration de votre site

Le fichier robots.txt est un fichier texte placé à la racine de votre site qui indique aux robots d'exploration quelles pages ou sections ils peuvent ou ne peuvent pas explorer.

**À surveiller :**

Une erreur classique consiste à bloquer involontairement des pages importantes dans le robots.txt (par exemple, un environnement de recette qui passe en production sans que le robots.txt soit mis à jour). Vérifiez régulièrement que vos pages stratégiques ne sont pas bloquées.

Le robots.txt est accessible publiquement à l'URL `votresite.fr/robots.txt`, vos concurrents peuvent le consulter également.

## Le sitemap XML : faciliter l'indexation

Le sitemap XML est un fichier qui liste toutes les URLs de votre site que vous souhaitez voir indexées par Google. Il permet à Googlebot de les découvrir rapidement, sans avoir à suivre tous les liens de votre site.

**Bonnes pratiques :**

Incluez uniquement les pages que vous voulez indexer (pas les pages de résultats de filtres, les pages d'administration, les pages dupliquées…). Mettez à jour votre sitemap à chaque nouvelle publication. Soumettez-le à Google Search Console pour en faciliter la prise en compte. Une URL dans votre sitemap ne garantit pas son indexation, c'est une suggestion, pas une obligation pour Google.

## Le HTTPS : sécurité et confiance

Le protocole HTTPS (avec certificat SSL) est devenu un signal de classement confirmé par Google depuis 2014, et surtout un signal de confiance pour les utilisateurs. Un site non sécurisé (HTTP) est signalé comme "Non sécurisé" par Chrome, ce qui nuit à la crédibilité et au taux de conversion.

Vérifiez que l'ensemble de vos pages est accessible en HTTPS, que les redirections HTTP → HTTPS sont en place, et qu'aucun contenu mixte (images ou scripts chargés en HTTP sur une page HTTPS) ne subsiste.

## La vitesse de chargement et les Core Web Vitals

La vitesse de chargement est un facteur de classement officiel de Google depuis 2018, et les Core Web Vitals en sont la mesure principale depuis 2021.

### Qu'est-ce que les Core Web Vitals ?

Les Core Web Vitals (CWV) sont trois métriques définies par Google pour mesurer la qualité de l'expérience de chargement d'une page :

**LCP, Largest Contentful Paint** : mesure le temps de chargement de l'élément visible le plus volumineux (souvent une image ou un bloc de texte). Objectif : inférieur à 2,5 secondes. Un LCP lent frustre l'utilisateur qui attend d'avoir quelque chose à lire ou voir.

**INP, Interaction to Next Paint** (remplace le FID depuis mars 2024) : mesure la réactivité de la page aux interactions de l'utilisateur (clic, frappe au clavier). Objectif : inférieur à 200 ms. Un INP élevé signifie que la page "rame" quand l'utilisateur interagit.

**CLS, Cumulative Layout Shift** : mesure l'instabilité visuelle de la page, ces décalages de mise en page qui font que le contenu "saute" pendant le chargement, parfois au moment où vous allez cliquer sur quelque chose. Objectif : inférieur à 0,1.

### Comment améliorer ses Core Web Vitals

Pour le LCP : optimisez vos images (format WebP, compression, attribut `loading="lazy"` sauf pour l'image above the fold), utilisez un CDN, activez le cache navigateur, préchargez les ressources critiques.

Pour l'INP : réduisez le JavaScript non essentiel, différez les scripts tiers (analytics, publicité, chatbots), évitez les traitements lourds sur le thread principal.

Pour le CLS : définissez des dimensions explicites (width/height) pour toutes vos images et vidéos, évitez d'insérer dynamiquement du contenu au-dessus du contenu existant, hébergez vos polices de caractères en local.

**Outils pour mesurer :** PageSpeed Insights (Google), Google Search Console (rapport Expérience de la page), GTmetrix, WebPageTest.

## L'index Mobile-First : la version mobile en priorité

Depuis 2023, Google indexe tous les sites en priorité via leur version mobile. Cela signifie que c'est la version mobile de votre site que Googlebot explore et évalue en priorité, même pour les utilisateurs desktop.

**Conséquences concrètes :**

Si votre version mobile cache du contenu qui existe sur desktop (texte masqué, accordéons fermés, contenu différent), ce contenu peut ne pas être indexé. Votre site doit être parfaitement responsive, avec une navigation mobile soignée et un temps de chargement mobile optimisé.

Vérifiez dans Google Search Console que le robot d'exploration principal est bien "Smartphone", ce qui confirme que votre site est traité en Mobile-First.

## La structure des URLs et l'architecture du site

Une architecture de site claire et logique facilite l'exploration par Google et améliore l'expérience utilisateur. Les pages les plus importantes doivent être accessibles en un minimum de clics depuis la page d'accueil (règle des 3 clics).

**Pour les URLs :**

Préférez des URLs courtes et descriptives contenant votre mot-clé cible. Utilisez des tirets (pas des underscores) pour séparer les mots. Évitez les paramètres d'URL excessifs. Assurez-vous que chaque page a une URL canonique unique.

## Les redirections : gérer les changements d'URL

Quand une URL change (refonte de site, migration, suppression d'une page…), il est indispensable de mettre en place une redirection **301** (permanente) de l'ancienne vers la nouvelle URL. Sans cela, vous perdez le PageRank accumulé par l'ancienne page, vous générez des erreurs 404 qui dégradent l'expérience utilisateur et le budget de crawl.

**Erreurs courantes à éviter :**

Les chaînes de redirections (A → B → C → D) qui ralentissent le crawl et diluent le PageRank. Les redirections 302 (temporaires) utilisées à la place des 301 pour des changements permanents. Les boucles de redirections qui rendent une page inaccessible.

## Les erreurs 404 et la gestion des pages supprimées

Une page 404 signifie que l'URL demandée n'existe pas sur votre serveur. Ce n'est pas en soi un problème SEO grave si la page n'existait jamais, mais c'est problématique si des liens internes ou externes pointent vers cette URL.

Auditez régulièrement vos 404 avec un outil de crawl (Screaming Frog, Ahrefs Site Audit, Semrush). Pour chaque 404 qui reçoit des liens (internes ou backlinks), mettez en place une redirection 301 vers la page la plus pertinente.

## Le contenu dupliqué : éviter d'être son propre concurrent

Le contenu dupliqué, pages identiques ou très similaires accessibles via plusieurs URLs, crée une confusion pour Google : lequel des deux pages doit-il indexer et positionner ? Dans le doute, il peut décider de ne positionner aucune des deux.

**Causes fréquentes :**

Même contenu accessible en HTTP et HTTPS, en www et sans www, avec et sans slash final, via des paramètres d'URL de tri/filtres e-commerce, pages de tags ou catégories similaires aux articles.

**Solution principale** : la balise `<link rel="canonical">` qui indique à Google quelle est la version de référence d'une page. À combiner avec des redirections 301 pour les duplications structurelles.

## L'audit technique SEO : la check-list essentielle

Un audit SEO technique complet passe par l'analyse de tous ces points. Les outils incontournables : Google Search Console (gratuit, données de première main), Screaming Frog (crawl complet de votre site), PageSpeed Insights (Core Web Vitals), et les suites SEO comme Semrush ou Ahrefs pour un audit automatisé.

Points à vérifier lors d'un audit technique :

- Toutes les pages importantes sont crawlées et indexées (Search Console)
- Aucune page stratégique bloquée dans robots.txt
- Sitemap XML à jour et soumis à Search Console
- Site 100% HTTPS, sans contenu mixte
- Core Web Vitals dans les seuils recommandés (LCP, INP, CLS)
- Site responsive, index Mobile-First conforme
- Pas d'erreurs 404 sur des pages recevant des liens
- Pas de redirections en chaîne
- Pas de contenu dupliqué sans canonical
- Architecture de site logique, pages importantes accessibles en moins de 3 clics
- Balises title et H1 uniques sur chaque page
- Données structurées schema.org implémentées sur les types de pages pertinents

## Pour conclure

Le SEO technique est la fondation silencieuse du référencement. On ne le voit pas quand il fonctionne bien, mais son absence ou ses défauts se ressentent immédiatement sur les positions et le trafic.

Un audit technique régulier (au minimum annuel, après chaque refonte, et après chaque migration) est indispensable pour identifier les problèmes avant qu'ils ne deviennent des handicaps durables.

Vous souhaitez faire auditer la partie technique de votre site ? [Contactez-moi](/#contact), c'est précisément le type de mission sur lequel j'interviens.
