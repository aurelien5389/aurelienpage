import type { Reponse } from './types'
import { S } from './sources'

const r: Reponse = {
  slug: 'combien-de-temps-pour-etre-cite-par-chatgpt',
  question: 'Combien de temps faut-il pour être cité par ChatGPT ?',
  theme: 'Mesure et délais',
  titre: 'Combien de temps faut-il pour être cité par ChatGPT ?',
  metaDescription:
    "OpenAI ne publie aucun délai et ne garantit aucun placement. Les conditions pour être cité par ChatGPT, ce qui accélère, et comment le mesurer.",
  reponse:
    "Personne ne peut donner de délai fiable : OpenAI n'en publie aucun et précise que **le placement n'est pas garanti**. Ce qui est sûr, c'est la condition de départ : OAI-SearchBot doit pouvoir explorer votre site. Ensuite, la citation dépend de la qualité de vos pages face aux autres sources, question par question.",
  sections: [
    {
      h2: 'Pourquoi aucun délai ne peut-il être promis ?',
      corps: `Parce qu'OpenAI ne s'y engage pas lui-même. Son aide indique que ChatGPT classe les résultats selon plusieurs facteurs destinés à aider l'utilisateur à trouver une information pertinente et fiable, et que **le placement n'est pas garanti** ([Aide OpenAI](${S.openaiSearch.href})).

Une citation n'est pas une position stable. ChatGPT réécrit souvent la question en plusieurs requêtes et peut interroger des fournisseurs de recherche tiers ([Aide OpenAI](${S.openaiSearch.href})). Deux personnes qui posent la même question peuvent donc obtenir des sources différentes. Méfiez-vous de toute offre qui promet « d'être cité par ChatGPT en 30 jours ».`,
    },
    {
      h2: 'Quelles conditions faut-il remplir d’abord ?',
      corps: `L'accès technique, avant tout. OpenAI demande d'autoriser **OAI-SearchBot** à explorer le site et de vérifier que l'hébergeur ou le CDN laisse passer le trafic venant de ses adresses IP publiées ([Aide OpenAI](${S.openaiSearch.href})). Un site qui bloque OAI-SearchBot n'apparaît pas dans les réponses de recherche ([OpenAI](${S.openai.href})).

Viennent ensuite les conditions éditoriales. Ce que j'observe sur les sites que je suis : ChatGPT reprend des pages qui répondent directement à la question, citent leurs sources et montrent qui les a écrites. Une page vague ou commerciale a peu de chances d'être choisie face à une page qui répond.

Enfin, votre présence ailleurs compte : comparatifs, annuaires professionnels, articles de presse, forums. ChatGPT cite des sources variées, pas seulement les sites des prestataires.`,
    },
    {
      h2: 'Comment savoir si vous commencez à être cité ?',
      corps: `En mesurant à intervalles réguliers, avec la même méthode. Dressez la liste des questions que vos clients posent, posez-les à ChatGPT, notez si vous êtes cité et qui l'est à votre place. Recommencez chaque mois avec les mêmes questions.

Ce suivi donne votre **part de voix** et son évolution : voir [qu'est-ce que la part de voix dans les IA](/reponses/part-de-voix-dans-les-ia). Les visites venues de ChatGPT apparaissent aussi dans votre outil d'analyse d'audience, comme provenance, quand l'internaute clique sur la source.`,
    },
  ],
  tableau: {
    titre: 'Qu’est-ce qui dépend de vous, et qu’est-ce qui n’en dépend pas ?',
    colonnes: ['Facteur', 'Ce que vous contrôlez', 'Source'],
    lignes: [
      ['Accès d’OAI-SearchBot (robots.txt, pare-feu, CDN)', 'Entièrement', 'OpenAI'],
      ['Qualité et précision des pages', 'Largement', 'Aide OpenAI (pertinence et fiabilité)'],
      ['Présence sur d’autres sites', 'En partie', 'Observation de terrain'],
      ['Requêtes réécrites par ChatGPT et fournisseurs tiers', 'Pas du tout', 'Aide OpenAI'],
      ['Placement dans la réponse', 'Pas du tout : non garanti', 'Aide OpenAI'],
    ],
  },
  sources: [S.openaiSearch, S.openai, S.googleSpam],
  fiche: {
    href: '/prestations/audit-geo',
    label: 'Audit GEO',
    texte:
      "L'**audit GEO** fixe votre point de départ : sur les questions de vos clients, ChatGPT vous cite-t-il, et qui cite-t-il à votre place ? C'est la base pour mesurer les progrès.",
  },
  faq: [
    {
      q: 'Peut-on payer pour être cité par ChatGPT ?',
      a: `OpenAI décrit le classement des résultats de recherche comme fondé sur la pertinence et la fiabilité, sans garantie de placement ([Aide OpenAI](${S.openaiSearch.href})). La publicité dans ChatGPT existe, avec son propre robot de contrôle des pages annoncées, OAI-AdsBot ([OpenAI](${S.openai.href})) : c'est un autre circuit que les sources citées.`,
    },
    {
      q: 'Une page publiée hier peut-elle être citée ?',
      a: "C'est possible si OAI-SearchBot ou un fournisseur de recherche l'a déjà explorée, puisque ChatGPT cherche au moment de la question. Mais aucun délai n'est garanti.",
    },
    {
      q: 'Publier beaucoup de pages accélère-t-il les citations ?',
      a: `Non, et c'est risqué. Google sanctionne la production de nombreuses pages sans valeur pour le lecteur, quelle que soit la façon dont elles sont créées ([Google Search Central](${S.googleSpam.href})). Une page qui répond mieux qu'une autre vaut plus que dix pages qui répètent la même chose.`,
    },
  ],
  voirAussi: ['chatgpt-utilise-t-il-bing', 'part-de-voix-dans-les-ia', 'robots-ia-faut-il-les-bloquer'],
  publie: '2026-10-04',
}

export default r
