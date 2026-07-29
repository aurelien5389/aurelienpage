# Métadonnées de la page

**Slug / URL :** `/blog/codes-http-seo`

**H1 :** Codes HTTP et SEO : 200, 301, 404, 410 et leur impact sur votre référencement

**Intention de recherche :**
Requête cible : "codes HTTP SEO" / "codes erreur HTTP SEO" / "301 302 SEO" / "404 410 différence SEO"
Cible : consultants SEO, webmasters, développeurs et responsables marketing qui veulent comprendre l'impact des codes de statut HTTP sur le référencement. Intention informationnelle TOFU/MOFU.

---

# Codes HTTP et SEO : 200, 301, 404, 410 et leur impact sur votre référencement

Chaque fois qu'un navigateur, ou un robot de moteur de recherche, envoie une requête vers une URL, le serveur répond avec un **code de statut HTTP**. Ce code à trois chiffres est bien plus qu'un détail technique : il indique à Google si votre page est accessible, si elle a bougé, si elle a disparu, ou si elle présente un problème. Une mauvaise gestion des codes HTTP peut coûter cher en termes de positions et de budget de crawl.

## Les familles de codes HTTP

Les codes HTTP sont regroupés en cinq familles selon leur premier chiffre :

**1xx, Réponses informatives** : la requête est reçue, traitement en cours. Rarissimes dans le contexte SEO courant.

**2xx, Réponses de succès** : la requête a été reçue, comprise et acceptée par le serveur. C'est la famille de codes qu'on veut voir sur ses pages stratégiques.

**3xx, Redirections** : la ressource demandée a changé d'emplacement. Le client doit suivre la redirection pour atteindre le contenu.

**4xx, Erreurs côté client** : la requête ne peut pas être honorée, généralement parce que l'URL n'existe pas ou que l'accès est refusé.

**5xx, Erreurs côté serveur** : le serveur a rencontré une erreur en traitant la requête. Ces codes signalent un problème d'infrastructure, pas de contenu.

## Les codes 2xx : tout va bien

### 200, OK

C'est le code idéal. Le serveur répond positivement à la requête et renvoie le contenu demandé. Toutes vos pages stratégiques (pages de services, articles de blog, landing pages) doivent renvoyer un 200. C'est la condition minimale pour que Googlebot puisse crawler et indexer une page.

### 201, Created

Indique que la requête a abouti à la création d'une nouvelle ressource. Utilisé principalement dans les API REST. Pour le SEO, peu pertinent en pratique.

### 204, No Content

Le serveur a traité la requête mais ne renvoie aucun contenu. Si Googlebot rencontre ce code sur une page censée avoir du contenu, il ne pourra pas l'indexer.

## Les codes 3xx : les redirections

### 301, Moved Permanently

La redirection 301 est la plus importante en SEO. Elle indique que la page a **définitivement déménagé** vers une nouvelle URL. Googlebot suit la redirection, met à jour son index avec la nouvelle URL, et, point crucial, transfère la grande majorité du PageRank accumulé par l'ancienne URL vers la nouvelle.

Utilisations typiques : migration d'un site vers un nouveau domaine, restructuration des URLs, passage de HTTP à HTTPS, correction d'URLs erronées.

**Attention aux chaînes de redirections** : si A redirige vers B qui redirige vers C, chaque maillon de la chaîne dilue le PageRank transmis et ralentit le crawler. Idéalement, toutes les redirections doivent aller directement de A vers la destination finale. Un outil de crawl vous permettra d'identifier et de corriger ces chaînes.

### 302, Found (redirection temporaire)

La redirection 302 indique un déplacement **temporaire**. Contrairement au 301, elle ne transfère pas le PageRank de façon permanente et ne met pas à jour l'index : Google continue de considérer l'URL d'origine comme la page principale. À utiliser uniquement quand vous êtes certain de réutiliser l'URL d'origine dans un futur proche (refonte temporaire, test A/B, maintenance).

**Erreur fréquente** : utiliser une 302 alors qu'on veut une 301. C'est une erreur coûteuse en termes de consolidation du PageRank.

### 304, Not Modified

Indique au robot que le contenu de la page est identique à ce qu'il a crawlé lors de sa dernière visite. Le serveur ne renvoie pas le contenu entier, ce qui économise de la bande passante. Mécanisme de cache HTTP transparent pour le SEO.

### 307, Temporary Redirect

Similaire au 302 mais plus explicite : l'URL a un nouvel emplacement temporaire, et la méthode HTTP utilisée (GET, POST) doit être préservée dans la redirection. Même impact SEO qu'une 302.

## Les codes 4xx : les erreurs client

### 403, Forbidden

L'accès à la ressource est interdit. Le serveur comprend la requête mais refuse d'y répondre. Pour Googlebot, un 403 signifie que le contenu est inaccessible, il ne peut ni le crawler, ni l'indexer. Si des pages stratégiques renvoient un 403 par erreur (mauvaise configuration du serveur, IP bloquée…), elles disparaissent des SERPs.

### 404, Not Found

Page introuvable. Le serveur ne peut pas trouver la ressource demandée à cette URL. Il n'y a rien à cette adresse, ou du moins, il n'y a plus rien actuellement. Le 404 est un code "souple" : il indique l'absence actuelle d'une page, mais laisse entendre qu'elle pourrait réapparaître.

**Impact SEO du 404** : Googlebot retire progressivement de son index les pages en 404, mais ce processus prend du temps (généralement 24h, parfois plusieurs jours). Les liens entrants pointant vers une URL en 404 ne transmettent plus de PageRank.

**Comment traiter une 404** : si la page a été supprimée et qu'une page similaire existe, mettez en place une redirection 301 vers cette page. Si aucune page similaire n'existe, utilisez plutôt un code 410.

### 410, Gone

La différence entre le 404 et le 410 est souvent négligée, mais elle est réelle : le 410 indique que la page a **définitivement disparu** et n'est plus disponible. Contrairement au 404 ("je ne trouve rien là"), le 410 est un signal clair et définitif : "cette URL ne proposera plus jamais de contenu".

**Avantage du 410 vs 404 en SEO** : Google prend en compte le 410 quasi immédiatement pour supprimer la page de son index, alors qu'une 404 peut mettre 24h ou plus à être traitée. Pour les sites qui suppriment régulièrement des pages de façon permanente, le 410 est plus efficace pour libérer rapidement le budget de crawl des URLs mortes.

**Quand utiliser le 410** : suppression définitive d'un contenu, page qui ne sera jamais remplacée par une autre. Si une page similaire existe ou sera créée, privilégiez une 301.

### 429, Too Many Requests

Le serveur signale que le client (ici le crawler) envoie trop de requêtes dans un laps de temps trop court. Googlebot interprète ce signal et ralentit son crawl. Si votre serveur renvoie régulièrement des 429 à Googlebot, votre budget de crawl sera réduit, ce qui peut freiner l'indexation de vos nouvelles pages.

## Les codes 5xx : les erreurs serveur

### 500, Internal Server Error

Erreur générique indiquant un dysfonctionnement du serveur. Googlebot ne peut pas accéder au contenu. Si des 500 apparaissent massivement ou sur des pages stratégiques, c'est une urgence à résoudre.

### 503, Service Unavailable

Le serveur est temporairement indisponible (surcharge, maintenance). Googlebot reconnaît le 503 comme un signal temporaire et reviendra plus tard. C'est le code à utiliser lors d'une maintenance planifiée pour éviter que Googlebot interprète l'indisponibilité comme permanente.

## Comment surveiller vos codes HTTP

**Google Search Console** : le rapport "Couverture" liste les URLs en erreur détectées par Googlebot, regroupées par type d'erreur (4xx, 5xx, redirigées, exclues). C'est le point de départ pour identifier les problèmes d'indexation.

**Les outils de crawl** (Screaming Frog, Sitebulb, Oncrawl) : un crawl complet de votre site renvoie le code HTTP de chaque URL découverte. Vous pouvez ainsi filtrer par code et traiter les erreurs en masse.

**Les logs serveur** : la source la plus exhaustive pour analyser les codes HTTP réellement renvoyés à Googlebot. Contrairement au crawl SEO, les logs capturent tous les passages du bot, y compris sur des URLs que votre crawler n'a pas découvertes.

**L'alerte Search Console** : Google envoie des notifications par email quand un nombre significatif de pages passe en erreur. Activez ces alertes pour être informé rapidement en cas de problème.

## Récapitulatif rapide

| Code | Signification | Impact SEO |
|------|---------------|------------|
| 200 | OK | ✅ Optimal |
| 301 | Redirect permanent | ✅ Transfère le PR, met à jour l'index |
| 302 | Redirect temporaire | ⚠️ Ne transfère pas le PR de façon durable |
| 404 | Page introuvable | ❌ Retire de l'index (lent) |
| 410 | Page définitivement supprimée | ❌ Retire de l'index (rapide) |
| 403 | Accès interdit | ❌ Page inaccessible à Google |
| 500 | Erreur serveur | ❌ Page inaccessible, à corriger en urgence |
| 503 | Service temporairement indispo | ⚠️ Acceptable si maintenance, à ne pas laisser durer |
