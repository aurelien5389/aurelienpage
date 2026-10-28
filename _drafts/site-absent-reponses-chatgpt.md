---
slug: "/blog/site-absent-reponses-chatgpt"
title: "Pourquoi mon site n'apparaît-il pas dans les réponses de ChatGPT ?"
meta-description: "Robot bloqué, page absente de Bing, texte chargé par script, question sans recherche, concurrents mieux cités : les 6 causes et le test pour chacune."
---

# Pourquoi mon site n'apparaît-il pas dans les réponses de ChatGPT ?

Vous avez posé à ChatGPT la question que vos clients se posent. La réponse est juste, sourcée, et votre site n'y figure pas. Vous recommencez avec une autre formulation : même résultat. Le réflexe est de réécrire vos pages. C'est souvent trop tôt.

**En bref :** un site absent des réponses de ChatGPT bute presque toujours sur l'une de six causes. Trois sont techniques : le robot de recherche d'OpenAI est bloqué, la page n'est pas dans les index consultés, ou le texte n'est visible qu'après exécution d'un script. Trois tiennent au contenu : la question ne déclenche pas de recherche, la page ne répond pas directement, ou d'autres sites sont mieux placés. Testez-les dans cet ordre.

## Le robot de recherche d'OpenAI est-il bloqué ?

C'est la première cause à écarter, parce qu'elle rend tout le reste inutile. ChatGPT cherche avec **OAI-SearchBot**. OpenAI écrit qu'un site qui bloque ce robot n'apparaît pas dans les réponses de recherche, sauf comme simple lien de navigation ([OpenAI](https://developers.openai.com/api/docs/bots)).

Le test : ouvrez votre-site.fr/robots.txt et cherchez une ligne `Disallow` qui vise OAI-SearchBot, ou une règle générale `User-agent: *` qui bloque tout. Puis posez la question à votre hébergeur : un pare-feu ou une protection anti-robots peut refuser OAI-SearchBot sans que le robots.txt le dise. OpenAI demande d'ailleurs de laisser passer les adresses IP qu'il publie ([Aide OpenAI](https://help.openai.com/en/articles/9237897-chatgpt-search)).

Attention à une confusion fréquente : bloquer **GPTBot**, le robot d'entraînement, n'empêche pas d'être cité. OpenAI précise que les deux réglages sont indépendants ([OpenAI](https://developers.openai.com/api/docs/bots)).

## La page est-elle dans les index que ChatGPT consulte ?

Si elle n'est indexée nulle part, ChatGPT ne la trouvera pas. Quand ChatGPT cherche, il envoie des requêtes à des **fournisseurs de recherche partenaires**, et son aide renvoie notamment à la politique de confidentialité de Microsoft ([Aide OpenAI](https://help.openai.com/en/articles/9237897-chatgpt-search)).

Le test : vérifiez l'indexation de la page dans la Search Console, puis dans **Bing Webmaster Tools**, qui importe vos sites déjà vérifiés côté Google ([Bing](https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools)). Une page bien classée sur Google peut être absente de Bing. Le détail est dans [ChatGPT s'appuie-t-il sur Bing](/reponses/chatgpt-utilise-t-il-bing).

## Le texte est-il visible sans exécuter de script ?

Un robot lit d'abord le HTML envoyé par le serveur. Si votre réponse, vos prix ou votre FAQ n'apparaissent qu'après chargement d'un script, le robot risque de lire une page presque vide.

Le test : dans votre navigateur, affichez le code source de la page (clic droit, « Afficher le code source ») et cherchez la phrase qui répond à la question. Si elle n'y est pas, demandez à votre développeur de la rendre côté serveur. Les constructeurs de sites et certains thèmes sont les plus concernés.

## La question déclenche-t-elle vraiment une recherche ?

Pas toujours, et sans recherche il n'y a pas de citation. Ce que j'observe sur les sites que je suis : sur une question de définition ou de culture générale, ChatGPT répond souvent de mémoire, sans afficher de source. Sur une question qui cite un métier, une ville, un prix ou une marque, il cherche beaucoup plus volontiers.

Le test : regardez si la réponse affiche des sources. Si elle n'en affiche aucune, votre absence ne dit rien de votre site. Concentrez vos efforts sur les questions où ChatGPT cite des sources, en général les questions de choix et de prix.

## La page répond-elle directement à la question ?

ChatGPT reprend un passage, pas une page entière. Une page qui met la réponse au cinquième paragraphe, après une longue introduction, laisse la place à une page concurrente qui répond en deux phrases.

Le test : lisez les 60 premiers mots sous le titre. Répondent-ils à la question, seuls, sans le reste de la page ? Les intertitres posent-ils des questions proches de celle de l'utilisateur ? Les chiffres ont-ils une source ? La méthode est dans [comment rédiger un contenu que les IA reprennent](/blog/structurer-contenu-geo).

## D'autres sites sont-ils mieux placés que vous ?

Parfois tout est en ordre chez vous, et ChatGPT cite quand même un comparatif, un annuaire ou un média. Ce que j'observe : sur les questions « quel prestataire choisir », ces sites tiers passent souvent avant les sites des prestataires.

Le test : notez les sources affichées sur vos questions prioritaires. Si ce sont des tiers, demandez à figurer dans leurs listes avec une fiche exacte. Si ce sont des concurrents, comparez leur page à la vôtre point par point.

## Récapitulatif : six causes, six tests

| Cause | Test | Correction |
|---|---|---|
| OAI-SearchBot bloqué | robots.txt, puis pare-feu ou CDN | Autoriser OAI-SearchBot et ses adresses IP |
| Page absente des index | Search Console et Bing Webmaster Tools | Soumettre le sitemap, signaler la page avec IndexNow |
| Texte chargé par script | Code source de la page | Rendre le texte côté serveur |
| Pas de recherche déclenchée | La réponse affiche-t-elle des sources ? | Viser les questions de choix et de prix |
| Réponse noyée dans la page | Les 60 premiers mots suffisent-ils ? | Réponse en tête, intertitres en questions, sources |
| Sites tiers mieux placés | Liste des sources citées | Figurer dans les comparatifs et annuaires cités |

Une fois les corrections faites, ne jugez pas sur une seule question posée une seule fois. Mesurez votre présence sur une liste fixe de questions, chaque mois : c'est la [part de voix](/reponses/part-de-voix-dans-les-ia). Pour un diagnostic complet, je fais ces tests dans le cadre d'un [audit GEO](/prestations/audit-geo).

## Questions fréquentes

**Combien de temps après une correction ChatGPT peut-il me citer ?**
OpenAI indique qu'un changement dans le robots.txt peut demander environ 24 heures pour être pris en compte ([OpenAI](https://developers.openai.com/api/docs/bots)). Pour le reste, aucun délai n'est garanti : voir [combien de temps pour être cité par ChatGPT](/reponses/combien-de-temps-pour-etre-cite-par-chatgpt).

**Payer pour apparaître dans ChatGPT est-il possible ?**
OpenAI documente un robot, OAI-AdsBot, qui ne visite que les pages soumises comme publicités dans ChatGPT ([OpenAI](https://developers.openai.com/api/docs/bots)). La publicité est un emplacement à part : elle ne fait pas de votre page une source citée dans la réponse.

## Sources

- [OpenAI : robots et user-agents](https://developers.openai.com/api/docs/bots)
- [Aide OpenAI : rechercher sur le web avec ChatGPT](https://help.openai.com/en/articles/9237897-chatgpt-search)
- [Bing Webmaster Blog : importer ses sites depuis la Search Console](https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools)
