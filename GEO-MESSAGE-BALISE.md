# Message à coller dans la session Claude Code du dépôt Balise

Copier tout le bloc ci-dessous.

---

Je veux suivre la visibilité de mon site aurelienpage.fr dans les IA avec Balise.

**Fichier à importer**
`C:\Users\aurel\aurelienpage\questions-geo-aurelienpage.csv`
- Séparateur : point-virgule, encodage UTF-8, une ligne d'en-tête.
- Colonnes : `site ; id ; question ; format ; page_cible ; priorite`
- 38 questions (A1 à A38). `format` vaut fiche, reponse ou blog. `page_cible` est l'URL de la page qui doit être citée. `priorite` vaut P1, P2 ou P3.
- 18 questions sont en P1 : A1, A2, A3, A4, A5, A9, A10, A13, A14, A17, A18, A20, A21, A23, A29, A30, A31, A32.

**Ce que je te demande, dans cet ordre, sans rien lancer de payant :**
1. Lis le fichier et dis-moi comment l'importer dans Balise : format attendu, champs à faire correspondre, transformation éventuelle. Montre-moi le plan avant d'écrire quoi que ce soit dans la base.
2. Importe les 38 questions en conservant `id`, `page_cible` et `priorite`, rattachées au site aurelienpage.fr. Le domaine à repérer dans les citations est `aurelienpage.fr`. Pour la marque, cherche « Aurélien Page » et « Aurélien PAGE ».
3. Estime le coût d'un **relevé initial sur les 18 questions P1** : nombre d'appels par moteur (ChatGPT, Perplexity, Gemini, Claude, Google AI Overviews via DataForSEO, selon ce que Balise sait interroger), coût unitaire de chaque API d'après la configuration actuelle, nombre de répétitions par question si Balise en fait, et total estimé en euros. Donne aussi le coût du même relevé sur les 38 questions, pour comparaison.
4. **Ne lance aucun relevé et aucun appel d'API payant** tant que je n'ai pas validé l'estimation.

**Règles**
- N'affiche jamais la valeur d'une clé d'API, d'un mot de passe ou d'un jeton, et ne me demande pas d'en coller.
- Ne touche pas au dépôt aurelienpage.
- Si une information manque (moteur non branché, quota inconnu), dis-le au lieu de supposer.

**Pour la suite**
Après validation, je voudrais un relevé mensuel sur les P1, avec pour chaque question : cité ou non, page citée, autres sites cités, et la part de voix par moteur et par format (fiche, réponse, blog).
