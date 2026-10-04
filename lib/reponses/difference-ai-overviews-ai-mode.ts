import type { Reponse } from './types'
import { S } from './sources'

const r: Reponse = {
  slug: 'difference-ai-overviews-ai-mode',
  question: 'Quelle différence entre AI Overviews et AI Mode de Google ?',
  theme: 'Moteurs et IA',
  titre: 'Quelle différence entre AI Overviews et AI Mode de Google ?',
  metaDescription:
    "AI Overviews résume l'idée principale d'un sujet, AI Mode répond aux questions nuancées qui demandaient plusieurs recherches. Ce qui change pour votre site, d'après Google.",
  reponse:
    "Les **AI Overviews** donnent un résumé généré pour saisir vite l'idée principale d'un sujet, avec des liens pour aller plus loin. Le **AI Mode** répond de façon complète aux questions nuancées qui demandaient auparavant plusieurs recherches : explorer, raisonner, comparer. Pour votre site, la règle est la même : une page indexée et éligible à un extrait.",
  sections: [
    {
      h2: 'À quoi sert chacune de ces fonctionnalités ?',
      corps: `Google les présente comme deux réponses à deux besoins. Les AI Overviews aident à **saisir plus vite l'idée principale** d'un sujet ou d'une question complexe. Le AI Mode est particulièrement utile pour les requêtes qui demandent **plus d'exploration, de raisonnement ou des comparaisons** complexes ([Google Search Central](${S.googleIa.href})).

Google ajoute que les AI Overviews servent aussi de **point de départ** vers des liens pour en savoir plus, et que le AI Mode permet de poser des questions nuancées, qui demandaient auparavant plusieurs recherches, pour obtenir une réponse complète avec des liens vers les sites qui l'appuient ([Google Search Central](${S.googleIa.href})).`,
    },
    {
      h2: 'Comment choisissent-elles leurs sources ?',
      corps: `Toutes deux puisent dans l'index de Google, avec la même technique. Google explique que ses fonctionnalités IA peuvent utiliser le **query fan-out** : lancer plusieurs recherches liées, sur des sous-thèmes et des sources différentes, pour construire la réponse. Elles peuvent ainsi afficher un éventail de liens plus large et plus varié qu'une recherche classique ([Google Search Central](${S.googleIa.href})).

Conséquence pour vous : une page peut être citée pour une sous-question, même si elle n'est pas la mieux classée sur la question principale. Une page qui répond précisément à une question précise a sa chance.`,
    },
    {
      h2: 'Faut-il optimiser différemment pour l’une ou l’autre ?',
      corps: `Non. Google indique qu'il n'y a **aucune exigence supplémentaire** pour apparaître dans les AI Overviews ou le AI Mode, ni d'optimisation spéciale : une page doit être indexée et éligible à un extrait, et les fondamentaux du SEO restent utiles ([Google Search Central](${S.googleIa.href})).

Les contrôles sont aussi les mêmes : les balises nosnippet, data-nosnippet, max-snippet et noindex limitent ce que Google peut montrer de vos pages, y compris dans ces fonctionnalités ([Google Search Central](${S.googleIa.href})). Une page en nosnippet ne peut donc pas servir de source.

Côté mesure, le trafic venu des deux est compté dans le rapport Performances de la Search Console, avec le reste de la recherche web ([Google Search Central](${S.googleIa.href})). Pour savoir si vous êtes cité, il faut relever les réponses : voir [la part de voix dans les IA](/reponses/part-de-voix-dans-les-ia).`,
    },
  ],
  tableau: {
    titre: 'AI Overviews ou AI Mode : que comparer ?',
    colonnes: ['Critère', 'AI Overviews', 'AI Mode'],
    lignes: [
      ['Usage selon Google', 'Saisir vite l’idée principale d’un sujet', 'Explorer, raisonner, comparer'],
      ['Type de question', 'Sujet ou question complexe à résumer', 'Question nuancée qui demandait plusieurs recherches'],
      ['Sources', 'Index Google, query fan-out', 'Index Google, query fan-out'],
      ['Condition pour être cité', 'Page indexée et éligible à un extrait', 'La même'],
      ['Mesure dans la Search Console', 'Comptée dans la recherche web', 'Comptée dans la recherche web'],
      ['Comment s’exclure', 'nosnippet, data-nosnippet, max-snippet, noindex', 'Les mêmes'],
    ],
  },
  sources: [S.googleIa],
  fiche: {
    href: '/prestations/consultant-seo-geo',
    label: 'Consultant SEO et GEO',
    texte:
      "Je relève vos citations dans les AI Overviews et le AI Mode, avec les autres IA, lors d'un **audit SEO et GEO**.",
  },
  faq: [
    {
      q: 'Google-Extended permet-il de sortir des AI Overviews ?',
      a: `Non. Google-Extended concerne l'entraînement et l'ancrage des modèles Gemini, et n'a pas d'effet sur Google Search ([Google](${S.googleCrawlers.href})). Pour limiter l'usage de vos pages dans la recherche, Google renvoie à nosnippet, max-snippet ou noindex ([Google Search Central](${S.googleIa.href})).`,
    },
    {
      q: 'Les AI Overviews font-elles baisser le trafic ?',
      a: 'La question est traitée dans [les AI Overviews font-elles baisser le trafic des sites](/reponses/ai-overviews-baisse-de-trafic).',
    },
    {
      q: 'Faut-il créer des pages spéciales pour le AI Mode ?',
      a: `Non. Google indique qu'il n'existe ni exigence supplémentaire ni optimisation spéciale pour ses fonctionnalités IA ([Google Search Central](${S.googleIa.href})). Ce qui aide, ce sont des pages qui répondent précisément à des questions précises, parce que le query fan-out découpe une demande en sous-questions.`,
    },
  ],
  voirAussi: ['ai-overviews-baisse-de-trafic', 'qu-est-ce-que-le-geo', 'difference-seo-geo'],
  publie: '2026-10-04',
}

export default r
