import type { Reponse } from './types'
import { S } from './sources'

const r: Reponse = {
  slug: 'comment-etre-cite-par-chatgpt-et-perplexity',
  question: 'Comment être cité par ChatGPT et Perplexity ?',
  theme: 'Moteurs et IA',
  titre: 'Comment être cité par ChatGPT et Perplexity ?',
  metaDescription:
    "Pour être cité par ChatGPT et Perplexity : laisser passer OAI-SearchBot et PerplexityBot, être indexé par Bing et Google, répondre directement, citer ses sources, mesurer. Méthode sourcée.",
  reponse:
    "Pour être cité par ChatGPT et Perplexity, laissez d'abord passer leurs robots de recherche, **OAI-SearchBot** et **PerplexityBot**, et faites indexer vos pages par **Bing** comme par Google. Publiez ensuite des pages qui **répondent directement** à la question posée, avec des sources citées et un auteur identifié. Enfin, soyez présent sur les sites que ces IA consultent, et mesurez vos citations.",
  sections: [
    {
      h2: 'Les robots de ChatGPT et de Perplexity accèdent-ils à votre site ?',
      corps: `C'est la première vérification, et la plus souvent oubliée. Chaque moteur a son robot de recherche, distinct du robot d'entraînement.

- **ChatGPT** cherche avec **OAI-SearchBot**. OpenAI indique que ce robot sert à faire apparaître les sites dans les fonctions de recherche de ChatGPT, et qu'un site qui le bloque n'apparaît plus dans les réponses de recherche, sauf comme simple lien ([OpenAI](${S.openai.href})). Bloquer GPTBot, le robot d'entraînement, n'a pas cet effet : OpenAI précise que les deux réglages sont indépendants.
- **Perplexity** cherche avec **PerplexityBot**. Perplexity écrit que ce robot sert à faire apparaître et lier les sites dans ses résultats, qu'il ne collecte pas de contenu pour entraîner des modèles, et recommande de l'autoriser dans le robots.txt ([Perplexity](${S.perplexity.href})).

Le robots.txt ne suffit pas. OpenAI demande de vérifier que l'hébergeur ou le CDN laisse passer le trafic venant des adresses IP qu'il publie ([Aide OpenAI](${S.openaiSearch.href})), et Perplexity signale qu'un pare-feu applicatif peut exiger de mettre ses robots en liste blanche ([Perplexity](${S.perplexity.href})). Ce que j'observe sur les sites que je suis : une protection anti-robots bloque parfois ces visiteurs sans que personne ne l'ait décidé. La liste complète des robots est dans [quels robots d'IA explorent mon site](/reponses/robots-ia-faut-il-les-bloquer).`,
    },
    {
      h2: 'Vos pages sont-elles indexées par Google et par Bing ?',
      corps: `Les deux comptent, et Bing est presque toujours négligé. ChatGPT réécrit souvent la question en plusieurs requêtes et les envoie à des **fournisseurs de recherche partenaires**, dont Microsoft d'après les politiques de confidentialité vers lesquelles renvoie l'aide d'OpenAI ([Aide OpenAI](${S.openaiSearch.href})). Une page absente de l'index de Bing a donc moins de chances d'être trouvée par ChatGPT. Le détail est dans [ChatGPT s'appuie-t-il sur Bing](/reponses/chatgpt-utilise-t-il-bing).

Trois actions suffisent pour Bing :

1. **Inscrire le site sur Bing Webmaster Tools**, qui importe les sites déjà vérifiés dans la Google Search Console ([Bing](${S.bingImport.href})), et suivre ses recommandations d'exploration et d'indexation ([Bing Webmaster Guidelines](${S.bingGuidelines.href})).
2. **Soumettre le sitemap** et contrôler les pages réellement indexées.
3. **Signaler chaque page publiée ou modifiée avec IndexNow**, le protocole soutenu par Bing, plutôt que d'attendre le passage du robot ([IndexNow](${S.indexnowDoc.href})). Ce site l'utilise après chaque mise en ligne.

Côté Google, rien de spécial : pour apparaître dans les AI Overviews et le AI Mode, une page doit être indexée et éligible à un extrait, sans fichier ni balisage supplémentaire ([Google Search Central](${S.googleIa.href})).`,
    },
    {
      h2: 'Quel format de page les IA reprennent-elles ?',
      corps: `Des passages qui répondent, sourcés et signés. L'article de recherche qui a donné son nom au GEO a testé plusieurs façons de réécrire une page pour un moteur génératif. Les méthodes qui ajoutent des **citations de sources**, des **citations textuelles** et des **statistiques** ont amélioré la visibilité des pages jusqu'à 40 % sur le banc d'essai des auteurs (GEO-bench), tandis que le **bourrage de mots-clés** n'apportait « peu ou pas d'amélioration » ([Aggarwal et al., arXiv](${S.arxivGeo.href})).

Ce que j'applique sur chaque page de ce site, et ce que je retrouve sur les pages citées à la place de mes clients :

- **La réponse arrive tout de suite**, en 40 à 60 mots sous le titre. L'IA reprend un passage, pas une page.
- **Chaque intertitre pose une question**, et la première phrase y répond. La section se comprend seule.
- **Un tableau** quand la réponse compare ou énumère.
- **Des sources primaires liées** : la documentation de Google, d'OpenAI, de Perplexity, un texte de loi, un article de recherche.
- **Un auteur identifié** avec son parcours, et **une date de mise à jour** visible.
- **Le texte dans le HTML** envoyé par le serveur, sans dépendre d'un script.

La méthode complète est dans [comment rédiger un contenu que les IA reprennent](/blog/structurer-contenu-geo).`,
    },
    {
      h2: "Faut-il être présent sur d'autres sites ?",
      corps: `Oui, parce que les IA ne citent pas que les sites des prestataires. Ce que j'observe sur les sites que je suis : pour une question du type « quel prestataire choisir », ChatGPT et Perplexity citent souvent des comparatifs, des annuaires professionnels, des articles de presse ou des forums, avant les sites des prestataires eux-mêmes.

Relevez les sites cités à votre place sur vos questions. S'ils publient des listes ou des comparatifs, demandez à y figurer avec une fiche exacte. S'il s'agit de médias, proposez-leur un fait ou une expérience qu'ils ne trouvent pas ailleurs. Une présence cohérente sur ces sites renforce aussi ce que les IA savent de vous quand elles rédigent une réponse.`,
    },
    {
      h2: 'Comment mesurer si vous êtes cité ?',
      corps: `En posant vous-même les questions, régulièrement, avec la même méthode. Dressez la liste des questions que vos clients posent avant d'acheter, posez-les à ChatGPT avec la recherche web activée et à Perplexity, et notez qui est cité. La proportion de réponses qui vous citent est votre **part de voix** : voir [qu'est-ce que la part de voix dans les IA](/reponses/part-de-voix-dans-les-ia).

Recommencez chaque mois avec la même liste. Les réponses varient d'une fois à l'autre, et OpenAI précise que le placement dans les résultats n'est pas garanti ([Aide OpenAI](${S.openaiSearch.href})) : c'est l'évolution sur plusieurs mesures qui compte. Je fais ces relevés avec Balise, un outil que j'ai construit, et je regarde aussi les visites venues de chatgpt.com et de perplexity.ai dans l'outil d'audience du site.`,
    },
  ],
  tableau: {
    titre: 'ChatGPT ou Perplexity : que vérifier ?',
    colonnes: ['Point', 'ChatGPT', 'Perplexity'],
    lignes: [
      ['Robot de recherche à autoriser', 'OAI-SearchBot', 'PerplexityBot'],
      ['Robot qui visite une page à la demande d’un utilisateur', 'ChatGPT-User', 'Perplexity-User'],
      ['Robot d’entraînement (réglage séparé)', 'GPTBot', 'Aucun : PerplexityBot ne sert pas à l’entraînement'],
      ['Index utilisé', 'Exploration propre et fournisseurs de recherche tiers, dont Microsoft', 'Exploration propre'],
      ['Au-delà du robots.txt', 'Adresses IP publiées à autoriser dans le pare-feu ou le CDN', 'Plages IP publiées, liste blanche dans le pare-feu applicatif'],
      ['Comment vérifier', 'Poser vos questions avec la recherche web activée', 'Poser vos questions en mode standard'],
    ],
  },
  sources: [S.openai, S.openaiSearch, S.perplexity, S.bingImport, S.bingGuidelines, S.indexnowDoc, S.googleIa, S.arxivGeo],
  fiche: {
    href: '/prestations/audit-geo',
    label: 'Audit GEO',
    texte:
      "Vous voulez savoir si ChatGPT et Perplexity vous citent aujourd'hui, et qui ils citent à votre place ? L'**audit GEO** le mesure question par question, puis classe les actions par impact.",
  },
  faq: [
    {
      q: 'Combien de temps faut-il pour être cité par ChatGPT ?',
      a: "Personne ne peut donner de délai fiable : OpenAI n'en publie aucun et précise que le placement n'est pas garanti. Une page accessible à OAI-SearchBot peut être reprise dès qu'elle est explorée, puisque ChatGPT cherche au moment de la question. Détails dans [combien de temps pour être cité par ChatGPT](/reponses/combien-de-temps-pour-etre-cite-par-chatgpt).",
    },
    {
      q: 'Faut-il créer un fichier llms.txt pour être cité ?',
      a: "Non. Google écrit qu'aucun fichier spécial n'est nécessaire pour ses fonctionnalités IA, et je n'ai trouvé aucune documentation d'OpenAI ou de Perplexity indiquant que leurs moteurs lisent ce fichier. L'accès des robots, l'indexation et le format des pages passent avant : voir [faut-il créer un fichier llms.txt](/reponses/faut-il-creer-un-fichier-llms-txt).",
    },
    {
      q: "Bloquer GPTBot empêche-t-il d'être cité par ChatGPT ?",
      a: `Non. GPTBot sert à l'entraînement des modèles, OAI-SearchBot à la recherche. OpenAI indique que chaque réglage est indépendant : vous pouvez refuser l'entraînement et rester visible dans les réponses de recherche ([OpenAI](${S.openai.href})).`,
    },
    {
      q: 'ChatGPT et Perplexity citent-ils les mêmes sources ?',
      a: "Pas toujours. Les deux cherchent au moment de la question, mais avec des robots et des index différents, et ChatGPT reformule la question en plusieurs requêtes. Sur une même liste de questions, je mesure donc la part de voix IA par IA : être cité par l'un ne garantit pas de l'être par l'autre.",
    },
  ],
  voirAussi: ['chatgpt-utilise-t-il-bing', 'robots-ia-faut-il-les-bloquer', 'combien-de-temps-pour-etre-cite-par-chatgpt'],
  publie: '2026-10-12',
}

export default r
