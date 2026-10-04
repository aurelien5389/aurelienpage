import type { Reponse } from './types'
import { S } from './sources'

const r: Reponse = {
  slug: 'qu-est-ce-que-le-geo',
  question: "Qu'est-ce que le GEO (Generative Engine Optimization) ?",
  theme: 'Comprendre le GEO',
  titre: "Qu'est-ce que le GEO (Generative Engine Optimization) ?",
  metaDescription:
    "Le GEO aide un site à être cité comme source par ChatGPT, Perplexity, Gemini, Claude et les AI Overviews. Définition, fonctionnement, différences avec le SEO.",
  reponse:
    "Le **GEO (Generative Engine Optimization)** regroupe les pratiques qui aident un site à être **cité comme source** dans les réponses des IA : ChatGPT, Perplexity, Gemini, Claude et les AI Overviews de Google. Il prolonge le SEO, car ces IA s'appuient sur des pages qu'elles peuvent explorer, comprendre et juger fiables.",
  sections: [
    {
      h2: "D'où vient le terme GEO ?",
      corps: `Le terme vient d'un article de recherche publié fin 2023 par Pranjal Aggarwal et ses coauteurs, intitulé « GEO: Generative Engine Optimization » ([arXiv](${S.arxivGeo.href})). Les auteurs y décrivent une nouvelle génération de moteurs de recherche qui utilisent des modèles génératifs pour rassembler et résumer l'information afin de répondre aux questions des internautes. Ils les appellent des **moteurs génératifs**.

Le métier a repris le mot pour désigner une démarche simple : faire en sorte que votre site fasse partie des sources que ces moteurs consultent et citent. Vous croiserez aussi les sigles AEO (Answer Engine Optimization) ou LLMO (Large Language Model Optimization). Ils décrivent le même objectif sous un autre nom.`,
    },
    {
      h2: 'Comment une IA choisit-elle les sources qu’elle cite ?',
      corps: `Elle cherche d'abord, puis elle rédige. Les réponses que vous lisez dans ChatGPT ou Perplexity s'appuient sur des recherches faites au moment de la question, dans un index de pages web.

Chez Google, les AI Overviews et le AI Mode peuvent lancer plusieurs recherches liées, sur des sous-thèmes et des sources différentes, avant de composer la réponse. Google appelle cette technique le **query fan-out**. Pour être retenue, une page doit être **indexée et éligible à un extrait** dans la recherche Google ; il n'y a pas d'exigence technique supplémentaire ([Google Search Central](${S.googleIa.href})).

Les autres IA ont leurs propres robots de recherche. OpenAI précise qu'un site qui bloque **OAI-SearchBot** n'apparaît pas dans les réponses de recherche de ChatGPT ([OpenAI](${S.openai.href})). Perplexity utilise **PerplexityBot** pour faire apparaître et lier les sites dans ses résultats ([Perplexity](${S.perplexity.href})), Anthropic utilise **Claude-SearchBot** ([Anthropic](${S.anthropic.href})). Copilot s'appuie sur l'index de Bing, qui propose ses propres réglages pour les réponses générées ([Bing](${S.bingChat.href})).

Une fois la page trouvée, l'IA en extrait des passages. Ce que j'observe sur les sites que je suis : les pages citées donnent une réponse directe dès le début, sourcent leurs affirmations et montrent qui les a écrites.`,
    },
    {
      h2: "Qu'est-ce qui change par rapport au SEO ?",
      corps: `Le but change, pas les fondations. En SEO, vous visez une position et un clic. En GEO, vous visez une citation dans une réponse, parfois sans clic.

Google le dit clairement : il n'existe pas d'optimisation spéciale pour ses fonctionnalités IA, et **les fondamentaux du SEO restent utiles** ([Google Search Central](${S.googleIa.href})). Un site mal exploré ou mal indexé a peu de chances d'être cité.

La mesure, elle, change vraiment. Google compte le trafic issu des AI Overviews et du AI Mode dans le trafic de recherche web de la Search Console, sans le séparer. Pour savoir si une IA vous cite, il faut lui poser les questions de vos clients et relever ses réponses. La comparaison complète se trouve dans [quelle différence entre SEO et GEO](/reponses/difference-seo-geo).`,
    },
    {
      h2: 'Par où commencer une démarche GEO ?',
      corps: `Par trois vérifications, dans cet ordre.

1. **Les robots des IA accèdent-ils à votre site ?** Vérifiez le robots.txt et le pare-feu de votre hébergeur. Détails dans [quels robots d'IA explorent mon site](/reponses/robots-ia-faut-il-les-bloquer).
2. **Vos pages répondent-elles aux questions de vos clients ?** Une question par page, une réponse claire en tête, des sources, un auteur identifié.
3. **Êtes-vous cité aujourd'hui ?** Dressez la liste des questions que vos clients posent, soumettez-les aux IA et notez qui est cité. C'est votre point de départ.`,
    },
  ],
  tableau: {
    titre: 'Que retenir du GEO ?',
    colonnes: ['Question', 'Réponse courte'],
    lignes: [
      ['Objectif', 'Être cité comme source dans les réponses des IA'],
      ['IA concernées', 'ChatGPT, Perplexity, Gemini, Claude, Copilot, AI Overviews et AI Mode de Google'],
      ['Condition technique', 'Pages accessibles aux robots de recherche des IA, indexées par Google et Bing'],
      ['Leviers principaux', 'Réponses directes, sources citées, auteur identifié, présence sur d’autres sites'],
      ['Mesure', 'Part de voix : proportion de réponses qui vous citent, sur une liste de questions'],
      ['Fichier ou balisage spécial', 'Aucun requis selon Google pour ses fonctionnalités IA'],
    ],
  },
  sources: [S.arxivGeo, S.googleIa, S.openai, S.anthropic, S.perplexity, S.bingChat],
  fiche: {
    href: '/prestations/consultant-seo-geo',
    label: 'Consultant SEO et GEO',
    texte:
      "Vous voulez savoir si les IA citent votre site, et qui elles citent à votre place ? Je réalise des **audits SEO et GEO**, à partir d'un diagnostic offert de 30 minutes.",
  },
  faq: [
    {
      q: 'Le GEO remplace-t-il le SEO ?',
      a: `Non. Google indique que les fondamentaux du SEO restent utiles pour ses fonctionnalités IA et qu'aucune optimisation spéciale n'est nécessaire ([Google Search Central](${S.googleIa.href})). Le GEO s'ajoute au SEO : il vise la citation plutôt que le clic.`,
    },
    {
      q: 'GEO, AEO, LLMO : quelle différence ?',
      a: "Aucune sur le fond. Ce sont trois noms pour la même démarche : être repris par les moteurs qui répondent avec une IA. GEO est le terme issu de la recherche universitaire ; AEO et LLMO sont des variantes du métier.",
    },
    {
      q: 'Faut-il un fichier llms.txt pour faire du GEO ?',
      a: 'Non. Google écrit qu’aucun fichier spécial n’est nécessaire pour ses fonctionnalités IA. Le détail est dans [faut-il créer un fichier llms.txt](/reponses/faut-il-creer-un-fichier-llms-txt).',
    },
  ],
  voirAussi: ['difference-seo-geo', 'robots-ia-faut-il-les-bloquer', 'faut-il-creer-un-fichier-llms-txt'],
  publie: '2026-10-04',
}

export default r
