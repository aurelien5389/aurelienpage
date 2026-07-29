# Métadonnées de la page

**Slug / URL :** `/blog/robots-txt-meta-robots`

**H1 :** Robots.txt et meta robots : contrôler le crawl et l'indexation de votre site

**Intention de recherche :**
Requête cible : "robots.txt SEO" / "meta robots noindex" / "robots.txt guide" / "directive robots SEO"
Cible : webmasters, développeurs et consultants SEO qui veulent maîtriser les directives de crawl. Intention informationnelle MOFU technique.

---

# Robots.txt et meta robots : contrôler le crawl et l'indexation de votre site

Le fichier robots.txt et les balises meta robots sont les deux outils fondamentaux pour piloter la façon dont les crawlers explorent et indexent votre site. Ils sont souvent confondus, or ils n'agissent pas sur le même levier. L'un contrôle l'accès, l'autre contrôle l'indexation. Savoir lequel utiliser dans quelle situation évite des erreurs techniques coûteuses.

## Le fichier robots.txt : contrôler l'accès des crawlers

### Qu'est-ce que le fichier robots.txt ?

Le fichier **robots.txt** est un fichier texte placé à la racine de votre domaine (`https://www.votresite.fr/robots.txt`). C'est le premier fichier que Googlebot consulte avant d'explorer votre site. Il liste les directives d'accès pour les différents crawlers : quelles sections ils peuvent explorer, lesquelles leur sont interdites.

Il est basé sur le **Robots Exclusion Protocol**, une convention du web que la quasi-totalité des crawlers respectent. Notez le mot "convention" : un bot malveillant ignorera votre robots.txt. Ce fichier s'adresse aux robots légitimes (moteurs de recherche, crawlers IA autorisés…), pas aux scrapers malveillants.

### Structure du fichier robots.txt

```
# Règles pour tous les crawlers
User-agent: *
Disallow: /admin/
Disallow: /espace-membre/
Disallow: /checkout/
Allow: /blog/

# Règles spécifiques à Googlebot
User-agent: Googlebot
Disallow: /staging/

# Règles pour un bot IA spécifique
User-agent: GPTBot
Disallow: /

# Emplacement du sitemap
Sitemap: https://www.votresite.fr/sitemap.xml
```

**`User-agent: *`** : s'applique à tous les crawlers non nommés explicitement.
**`Disallow`** : interdit l'accès à un chemin ou une URL.
**`Allow`** : autorise explicitement l'accès (utile pour créer des exceptions dans une section bloquée).
**`Sitemap`** : indique l'emplacement de votre sitemap XML, une bonne pratique toujours recommandée.

### Ce que le robots.txt ne fait pas

**Il ne garantit pas la non-indexation.** C'est l'erreur la plus fréquente. Bloquer une URL dans le robots.txt empêche Googlebot de la crawler, mais si cette URL reçoit des liens depuis d'autres sites, Google peut quand même l'intégrer dans son index avec des données parcellaires (titre récupéré depuis les backlinks, pas de contenu). Pour empêcher réellement l'indexation, utilisez une directive `noindex`.

**Il n'est pas secret.** Votre fichier robots.txt est public et accessible à n'importe qui. Ne l'utilisez pas pour "cacher" des sections sensibles, utilisez une authentification côté serveur.

**Une erreur robots.txt peut être catastrophique.** Un `Disallow: /` sur `User-agent: *` bloque l'accès à l'intégralité de votre site pour tous les crawlers. C'est une erreur qui arrive, généralement lors d'une migration ou d'un déploiement. Vérifiez votre robots.txt après toute modification majeure du site.

### Robots.txt et bots IA : une nouvelle dimension

Depuis 2023-2024, le robots.txt est devenu un outil stratégique pour gérer les crawlers des plateformes d'IA. Vous pouvez choisir d'autoriser ou de bloquer individuellement chaque bot IA :

```
# Bloquer le crawler d'OpenAI (données d'entraînement)
User-agent: GPTBot
Disallow: /

# Autoriser ChatGPT-user (Instant Bot, réponses en temps réel)
User-agent: ChatGPT-user
Allow: /

# Bloquer Google-Extended (données d'entraînement Google)
User-agent: Google-Extended
Disallow: /

# Bloquer le crawler d'Anthropic
User-agent: anthropic-ai
Disallow: /
```

La distinction importante : les **Crawler Bots** (GPTBot, Google-Extended, anthropic-ai…) alimentent les corpus d'entraînement des modèles. Les **Instant Bots** (ChatGPT-user, PerplexityBot…) récupèrent vos pages en temps réel pour composer des réponses. Si vous souhaitez apparaître dans les réponses de ChatGPT Search ou Perplexity sans que vos données alimentent leurs modèles, vous pouvez bloquer les premiers tout en autorisant les seconds.

## Les balises meta robots : contrôler l'indexation page par page

### Qu'est-ce que la balise meta robots ?

La balise `<meta name="robots">` est une instruction HTML placée dans le `<head>` d'une page, qui indique aux crawlers ce qu'ils doivent faire avec cette page spécifique après l'avoir crawlée : l'indexer ou non, suivre ses liens ou non, extraire des snippets ou non.

```html
<head>
  <!-- Ne pas indexer, ne pas suivre les liens -->
  <meta name="robots" content="noindex, nofollow">
  
  <!-- Indexer mais ne pas suivre les liens -->
  <meta name="robots" content="index, nofollow">
  
  <!-- Comportement par défaut (implicite si balise absente) -->
  <meta name="robots" content="index, follow">
  
  <!-- Limiter la longueur du snippet dans les SERPs -->
  <meta name="robots" content="max-snippet:150">
  
  <!-- Bloquer l'affichage dans AI Overviews et snippets -->
  <meta name="robots" content="nosnippet">
</head>
```

Vous pouvez cibler un crawler spécifique plutôt que tous (`*`) :

```html
<!-- Noindex spécifiquement pour Googlebot -->
<meta name="googlebot" content="noindex">
```

### Les directives les plus importantes

**`noindex`** : la directive la plus utilisée. Elle indique au crawler de ne pas indexer la page. Contrairement au robots.txt (qui bloque le crawl), le noindex permet au bot de lire la page et d'y trouver les liens internes, il ne l'indexe simplement pas. C'est le bon outil pour les pages de mentions légales, espaces membres, pages de confirmation de commande.

**`nofollow`** : indique au crawler de ne pas suivre les liens de la page et de ne pas leur transmettre de PageRank. À utiliser avec précaution, bloquer le suivi des liens internes peut casser votre maillage interne.

**`nosnippet`** / **`max-snippet:0`** : empêche Google d'afficher un extrait de la page dans les SERPs et dans les AI Overviews. Si vous souhaitez apparaître dans les réponses génératives de Google, ne placez jamais cette directive sur vos contenus stratégiques.

**`max-snippet:N`** : limite la longueur de l'extrait affiché dans les SERPs à N caractères. Utile si vous publiez du contenu sous paywall et ne souhaitez pas que l'intégralité soit prévisualisable.

**`noarchive`** : empêche Google d'afficher une version en cache de la page. Peu d'impact SEO direct.

### L'en-tête HTTP X-Robots-Tag

Alternative à la balise meta robots, utile pour les fichiers non-HTML (PDF, images, vidéos) qui ne peuvent pas contenir de balise `<head>`. Elle s'applique au niveau du serveur et peut être configurée dans votre fichier `.htaccess` ou votre configuration Nginx/Apache.

```
X-Robots-Tag: noindex, nofollow
```

Elle accepte les mêmes directives que la balise meta robots et peut également cibler un User-Agent spécifique.

## La règle d'or : robots.txt ≠ meta robots

| Aspect | Robots.txt | Meta robots |
|--------|-----------|-------------|
| Niveau d'application | Sections entières, répertoires | Page par page |
| Ce qu'il contrôle | L'accès au crawl | L'indexation |
| Une page bloquée peut-elle être indexée ? | Oui (si des liens externes existent) | Non (si noindex) |
| Le bot lit-il le contenu ? | Non | Oui |
| Utilité principale | Protéger le crawl budget, exclure des sections | Contrôler finement l'indexation |

**La combinaison à éviter absolument** : bloquer une URL dans le robots.txt ET lui mettre une directive noindex. Si le bot ne peut pas crawler la page, il ne peut pas lire la balise noindex. Le résultat est imprévisible, Google peut décider d'indexer quand même la page sur la base de signaux externes.

## Auditer vos directives de crawl

**Tester votre robots.txt** : Google Search Console propose un testeur de robots.txt intégré (Outils > Testeur de robots.txt) qui simule le comportement de Googlebot sur n'importe quelle URL de votre site.

**Vérifier les noindex accidentels** : lors d'un crawl SEO, filtrez les pages avec directive noindex et vérifiez qu'aucune page stratégique n'est exclue par erreur. C'est une erreur classique lors des migrations ou des déploiements de nouvelles versions du site.

**Surveiller les bots IA dans vos logs** : configurez votre analyse de logs pour identifier le passage des différents bots IA (GPTBot, PerplexityBot, anthropic-ai…). C'est la seule façon de savoir si votre stratégie de permissions robots.txt est effective.
