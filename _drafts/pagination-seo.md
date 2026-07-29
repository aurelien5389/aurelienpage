---
slug: "/blog/pagination-seo"
title: "Pagination et SEO : gérer les pages /page/2 sans perdre de trafic"
meta-description: "Comment gérer la pagination en SEO ? Rel=next/prev supprimé, canonical, noindex ou consolidation : les bonnes pratiques pour les sites e-commerce et blogs avec beaucoup de pages."
---

La pagination est l'un des sujets SEO techniques qui génèrent le plus de confusion. Depuis que Google a officiellement abandonné le support des attributs `rel="next"` et `rel="prev"` en 2019, beaucoup de sites ne savent plus comment gérer leurs pages paginées. Le résultat : du crawl budget gaspillé, du contenu dupliqué, des pages indexées qui ne devraient pas l'être.

Cet article fait le point sur les bonnes pratiques actuelles de la pagination SEO, pour les blogs, les sites e-commerce et tout site avec des listes de contenus paginées.

## Pourquoi la pagination pose problème au SEO

La pagination crée plusieurs problèmes structurels pour les moteurs de recherche.

**Dilution du crawl budget.** Googlebot dispose d'un budget de crawl limité pour chaque site, proportionnel à son autorité. Quand un e-commerce a 500 pages de catégorie paginées (`/categorie/chaussures/page/2`, `/page/3`...), Googlebot peut y consommer une part importante de son budget sans crawler les fiches produits qui ont une réelle valeur SEO. L'[indexabilité et le crawl budget](/blog/indexabilite-seo) sont au coeur du problème.

**Contenu mince ou dupliqué.** Les pages paginées au-delà de la première partagent souvent la même structure (même header, même footer, même fil d'Ariane), avec uniquement la liste de produits ou d'articles qui change. Google peut les percevoir comme du contenu faiblement différencié.

**Cannibalisation.** Si plusieurs pages paginées sont indexées sur les mêmes mots-clés que la page principale de la catégorie, elles entrent en compétition avec elle dans les SERPs.

## Ce que Google dit officiellement (2025)

Depuis mars 2019, Google a confirmé ne plus utiliser `rel="next"` et `rel="prev"` pour comprendre la pagination. Ces attributs sont devenus neutres : les ajouter ne nuit pas, mais n'apporte plus de bénéfice direct.

La position officielle de Google est que chaque page paginée doit être traitée de façon autonome et doit avoir de la valeur par elle-même. En pratique, Google est capable de détecter et de comprendre la pagination sans indication explicite, mais cela ne signifie pas qu'il l'indexera de façon optimale.

## Les quatre approches pour gérer la pagination

### 1. Laisser indexer et optimiser chaque page

**Quand l'utiliser :** quand chaque page paginée contient des produits ou des articles qui n'apparaissent nulle part ailleurs, et quand la liste elle-même a une valeur de recherche propre.

**Comment faire :** chaque page paginée doit avoir une balise title et une meta description uniques (idéalement mentionnant le numéro de page : "Chaussures running homme - Page 2"). Évitez les descriptions génériques identiques sur toutes les pages.

**Limite :** au-delà de 3 ou 4 pages, les pages profondes sont rarement crawlées et indexées de façon satisfaisante.

### 2. Canonicaliser vers la première page

**Quand l'utiliser :** pour les petits sites ou quand le contenu des pages paginées est peu différencié.

**Comment faire :** ajouter sur chaque page `/page/2`, `/page/3`... une balise canonical pointant vers la première page de la liste :
```html
<link rel="canonical" href="https://exemple.fr/blog/" />
```

**Attention :** Google peut ignorer les canonicals qui lui semblent abusifs. Si `/page/2` contient des articles totalement différents de la page 1, le canonical vers la page 1 sera considéré comme non pertinent et ignoré.

### 3. Noindex sur les pages paginées

**Quand l'utiliser :** pour les sites e-commerce avec de nombreuses pages de catégorie, ou quand les pages paginées n'ont aucune valeur de recherche propre.

**Comment faire :** ajouter la balise meta robots `noindex` sur toutes les pages paginées sauf la première, ou bloquer via le fichier [robots.txt](/blog/robots-txt-meta-robots). Le noindex est généralement préféré car il laisse Googlebot accéder aux liens présents sur la page (et donc aux produits ou articles listés).

```html
<meta name="robots" content="noindex, follow" />
```

Le `follow` est important : même si la page n'est pas indexée, vous voulez que Googlebot suive les liens vers les produits ou articles qu'elle contient.

### 4. Infinite scroll ou "Load more"

**Quand l'utiliser :** pour améliorer l'expérience utilisateur sur mobile, tout en gardant une pagination HTML classique accessible aux robots.

**Comment faire :** la meilleure implémentation combine un infinite scroll visible pour l'utilisateur et des URLs paginées canoniques en arrière-plan. Google recommande explicitement de ne pas utiliser l'infinite scroll pur sans URLs distinctes, car le contenu chargé dynamiquement peut ne pas être crawlé.

## La solution recommandée selon le contexte

**Blog ou site éditorial (50 à 200 articles)**
Laissez indexer les 2 ou 3 premières pages de liste. Au-delà, appliquez `noindex, follow`. La page d'accueil du blog et les 2 premières pages paginées ont une valeur réelle (elles sont consultées par les visiteurs). Les pages 10, 15, 20... n'ont aucune valeur de recherche.

**E-commerce (catégories avec produits)**
La stratégie la plus courante et la plus efficace : `noindex, follow` sur toutes les pages paginées sauf la page 1 de chaque catégorie. Concentrez le crawl budget sur les fiches produits et la page principale de catégorie. Assurez-vous que les produits des pages paginées sont accessibles via le sitemap XML ou via d'autres liens internes.

**Site avec facettes/filtres (couleur, taille, prix...)**
C'est le cas le plus complexe. Les URL de facettes (`/chaussures?couleur=rouge&taille=42`) peuvent générer des milliers de pages dupliquées. La solution : canonical vers l'URL propre de la catégorie sur toutes les URLs à paramètres, et blocage des paramètres de facettes dans Google Search Console (section "Paramètres d'URL").

## Pagination et balise canonique : pièges à éviter

**Ne pas auto-canonicaliser la page 1.** La page `/blog/` doit avoir un canonical vers elle-même (`/blog/`), pas vers une URL paginée. C'est une erreur fréquente des CMS mal configurés.

**Ne pas bloquer les pages paginées dans robots.txt si vous voulez que leurs liens soient suivis.** Un blocage robots.txt empêche Googlebot de crawler la page, y compris ses liens. Si vous voulez que les produits sur `/page/5` soient découverts, préférez `noindex, follow` plutôt qu'un blocage robots.txt.

**Éviter les redirections en chaîne sur la pagination.** Certaines migrations de sites créent des chaînes de redirections sur les pages paginées (`/page/2` -> `/p/2` -> `/liste?page=2`). Chaque redirection consomme du crawl budget. Audit régulier conseillé avec [Screaming Frog ou un crawler SEO](/blog/crawler-seo).

## Surveiller la pagination dans Google Search Console

[Google Search Console](/blog/google-search-console) permet de diagnostiquer les problèmes de pagination en quelques clics :

- **Rapport "Pages" (Indexation)** : vérifiez combien de vos URLs paginées sont effectivement indexées. Un nombre anormalement élevé signale un problème de configuration.
- **Rapport "Exploration"** : identifiez si Googlebot crawle massivement vos pages paginées au détriment d'autres pages importantes.
- **Paramètres d'URL** : déclarez vos paramètres de pagination pour aider Google à les gérer correctement.

## Questions fréquentes sur la pagination SEO

**Faut-il supprimer les attributs rel="next" et rel="prev" puisqu'ils ne servent plus ?**
Non. Les laisser ne nuit pas. Certains autres moteurs de recherche (Bing notamment) les utilisent encore. Et si Google venait à les réintroduire dans son algorithme, vous seriez déjà en place. Le coût de les garder est nul.

**La pagination affecte-t-elle le PageRank ?**
Oui. Un lien depuis une page paginée transmet du PageRank aux pages liées, comme n'importe quel lien interne. C'est pourquoi `noindex, follow` est préférable à un blocage robots.txt : vous gardez la transmission du PageRank vers les produits ou articles listés, tout en évitant l'indexation des pages paginées elles-mêmes.

**Mon CMS génère automatiquement des URLs paginées. Que faire ?**
La plupart des CMS (WordPress, Prestashop, Shopify) proposent des plugins ou des options natives pour gérer la pagination SEO. Sur WordPress, Yoast SEO et Rank Math permettent de configurer les canonicals et les noindex sur les archives paginées sans toucher au code.

**Est-ce que Google indexe vraiment les pages /page/10, /page/20 ?**
Oui, si elles sont accessibles et si elles reçoivent des liens internes. Ce n'est pas souhaitable dans la plupart des cas. Un audit régulier de vos pages indexées dans Search Console permet de détecter et corriger ce type d'indexation parasite.

## À retenir

La gestion de la pagination SEO se résume à un principe : **ne laisser indexer que ce qui a de la valeur de recherche propre**. Pour un blog, c'est généralement les 2 premières pages de liste. Pour un e-commerce, c'est uniquement la première page de chaque catégorie. Tout le reste mérite un `noindex, follow` qui préserve la circulation du PageRank sans diluer le crawl budget.

Pour une vision complète du SEO technique, l'article sur les [fondations du SEO technique](/blog/seo-technique-core-web-vitals) couvre l'ensemble des éléments à maîtriser. Vous pouvez aussi [me contacter](/#contact) si vous souhaitez un audit de la pagination de votre site.
