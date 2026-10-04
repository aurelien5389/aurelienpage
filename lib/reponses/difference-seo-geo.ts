import type { Reponse } from './types'
import { S } from './sources'

const r: Reponse = {
  slug: 'difference-seo-geo',
  question: 'Quelle différence entre SEO et GEO ?',
  theme: 'Comprendre le GEO',
  titre: 'Quelle différence entre SEO et GEO ?',
  metaDescription:
    "SEO : apparaître dans les résultats et obtenir des clics. GEO : être cité dans les réponses des IA. Mêmes fondations, objectifs et mesures différents. Comparatif.",
  reponse:
    "Le **SEO** vise à faire apparaître vos pages dans les résultats des moteurs de recherche et à obtenir des clics. Le **GEO** vise à faire citer votre site dans les réponses rédigées par les IA. Les deux reposent sur les mêmes fondations : des pages explorables, indexées et utiles. Ils diffèrent surtout par l'objectif et par la mesure.",
  sections: [
    {
      h2: "Quel est l'objectif de chacun ?",
      corps: `Le SEO cherche le clic, le GEO cherche la citation. Google définit le SEO comme le fait d'aider les moteurs de recherche à comprendre votre contenu et d'aider les internautes à trouver votre site, puis à décider s'ils le visitent ([Google Search Central](${S.googleStarter.href})).

Le GEO part d'un autre constat : de plus en plus de questions reçoivent une réponse rédigée, dans ChatGPT, Perplexity, Gemini, Claude ou les AI Overviews de Google. L'internaute lit la réponse et ne clique pas toujours. Votre objectif devient d'en être la source citée, avec votre nom et, si possible, un lien. La définition complète est dans [qu'est-ce que le GEO](/reponses/qu-est-ce-que-le-geo).`,
    },
    {
      h2: 'Les techniques sont-elles différentes ?',
      corps: `En grande partie, non. Google indique qu'il n'existe **aucune exigence supplémentaire** pour apparaître dans les AI Overviews ou le AI Mode, et que les fondamentaux du SEO restent utiles ([Google Search Central](${S.googleIa.href})). Une page doit d'abord être indexée et éligible à un extrait.

Trois points s'ajoutent quand même :

- **D'autres robots.** ChatGPT, Claude et Perplexity utilisent leurs propres robots de recherche : OAI-SearchBot, Claude-SearchBot, PerplexityBot ([OpenAI](${S.openai.href}), [Anthropic](${S.anthropic.href}), [Perplexity](${S.perplexity.href})). Un site bien classé sur Google peut leur être fermé sans le savoir. Côté Copilot, Bing propose des réglages propres aux réponses générées ([Bing](${S.bingChat.href})).
- **Le passage plutôt que la page.** L'IA reprend un paragraphe, une définition, une ligne de tableau. Chaque bloc doit se comprendre seul.
- **La réputation hors de votre site.** Ce que j'observe sur les sites que je suis : les IA citent aussi des comparatifs, des annuaires et des forums. Être mentionné ailleurs compte.`,
    },
    {
      h2: 'Comment mesure-t-on les résultats ?',
      corps: `Différemment, et c'est la vraie rupture. En SEO, la Search Console donne les positions, les impressions et les clics de chaque page.

En GEO, ces chiffres ne suffisent pas. Google compte le trafic venu des AI Overviews et du AI Mode dans le trafic de recherche web de la Search Console, sans le distinguer ([Google Search Central](${S.googleIa.href})). Et les autres IA ne fournissent pas de tableau de bord aux sites qu'elles citent.

La méthode consiste donc à poser une liste de questions aux IA, à relever leurs réponses et à calculer votre **part de voix** : la proportion de réponses qui vous citent, comparée à celle de vos concurrents.`,
    },
    {
      h2: 'Faut-il choisir entre SEO et GEO ?',
      corps: `Non, et l'ordre compte. Sans pages bien explorées et indexées, une IA a peu de matière à citer. Je commence toujours par les fondations SEO, puis j'ajoute ce qui est propre au GEO : accès des robots des IA, réponses directes, sources, mesure des citations.`,
    },
  ],
  tableau: {
    titre: 'SEO ou GEO : que comparer ?',
    colonnes: ['Critère', 'SEO', 'GEO'],
    lignes: [
      ['Objectif', 'Une position et un clic', 'Une citation dans une réponse'],
      ['Où', 'Résultats de Google, Bing', 'ChatGPT, Perplexity, Gemini, Claude, Copilot, AI Overviews et AI Mode'],
      ['Unité travaillée', 'La page', 'Le passage (définition, paragraphe, ligne de tableau)'],
      ['Robots à laisser passer', 'Googlebot, Bingbot', 'Les mêmes, plus OAI-SearchBot, Claude-SearchBot, PerplexityBot'],
      ['Mesure', 'Positions, impressions, clics (Search Console)', 'Part de voix sur une liste de questions'],
      ['Fondations', 'Exploration, indexation, contenu utile', 'Les mêmes'],
    ],
  },
  sources: [S.googleStarter, S.googleIa, S.openai, S.anthropic, S.perplexity, S.bingChat],
  fiche: {
    href: '/prestations/consultant-seo-geo',
    label: 'Consultant SEO et GEO',
    texte:
      "Je travaille le SEO et le GEO ensemble : un seul **audit SEO et GEO**, un seul plan d'action. Premier échange : un diagnostic offert de 30 minutes.",
  },
  faq: [
    {
      q: 'Le GEO va-t-il remplacer le SEO ?',
      a: `Non. Les IA de Google s'appuient sur l'index de Google, et Google indique que les fondamentaux du SEO restent utiles pour ses fonctionnalités IA ([Google Search Central](${S.googleIa.href})). Le GEO s'ajoute au SEO.`,
    },
    {
      q: 'Un bon SEO suffit-il pour être cité par les IA ?',
      a: "C'est une condition, pas une garantie. Il faut aussi que les robots des IA accèdent au site, que vos pages répondent clairement aux questions posées, et que d'autres sites parlent de vous.",
    },
    {
      q: 'Un audit SEO couvre-t-il le GEO ?',
      a: 'Pas toujours. La différence est détaillée dans [audit SEO ou audit GEO](/reponses/difference-audit-seo-audit-geo).',
    },
  ],
  voirAussi: ['qu-est-ce-que-le-geo', 'difference-audit-seo-audit-geo', 'robots-ia-faut-il-les-bloquer'],
  publie: '2026-10-04',
}

export default r
