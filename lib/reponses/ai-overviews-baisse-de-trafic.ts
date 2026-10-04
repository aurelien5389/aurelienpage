import type { Reponse } from './types'
import { S } from './sources'

const r: Reponse = {
  slug: 'ai-overviews-baisse-de-trafic',
  question: 'Les AI Overviews font-elles baisser le trafic des sites ?',
  theme: 'Moteurs et IA',
  titre: 'Les AI Overviews font-elles baisser le trafic des sites ?',
  metaDescription:
    "Google affirme que le volume total de clics organiques est stable, des études tierces disent l'inverse. Comment savoir ce qui se passe sur votre site, et quoi faire.",
  reponse:
    "Ça dépend des sites et des requêtes. Google affirme que le volume total de clics organiques vers les sites est **relativement stable** d'une année sur l'autre et que les clics sont de meilleure qualité. Des études de tiers concluent à des baisses. Le seul moyen de savoir pour votre site est de mesurer, requête par requête, dans la Search Console.",
  sections: [
    {
      h2: 'Que dit Google sur le trafic envoyé aux sites ?',
      corps: `Google défend un bilan neutre à positif. Dans un billet signé par Liz Reid, responsable de Google Search, Google écrit que le volume total de clics organiques depuis Google Search vers les sites est resté **relativement stable** d'une année sur l'autre, et que la **qualité moyenne des clics** a augmenté. Google appelle ainsi les clics après lesquels l'internaute ne revient pas aussitôt aux résultats ([Blog Google](${S.googleAiClicks.href})).

Le même billet conteste les rapports de tiers qui annoncent de fortes baisses, en mettant en cause leur méthode ou des baisses antérieures aux fonctionnalités IA ([Blog Google](${S.googleAiClicks.href})).

C'est la position de Google, juge et partie. Elle porte sur l'ensemble du web : elle ne dit rien de votre site en particulier.`,
    },
    {
      h2: 'Quels sites sont les plus exposés ?',
      corps: `Ceux dont le trafic repose sur des réponses courtes. Une AI Overview sert à saisir vite l'idée principale d'un sujet ([Google Search Central](${S.googleIa.href})). Si votre page répond à une définition ou à une question simple, l'internaute peut obtenir l'information principale sans cliquer.

Ce que j'observe sur les sites que je suis : les pages de définition et de questions générales sont les plus touchées ; les pages de service, de prix, de comparaison détaillée ou d'expérience vécue le sont moins, car l'internaute a une décision à prendre.

L'enjeu change alors de nature : sur ces requêtes, être **cité** dans la réponse devient aussi important qu'être cliqué. C'est l'objet du GEO : voir [qu'est-ce que le GEO](/reponses/qu-est-ce-que-le-geo).`,
    },
    {
      h2: 'Comment savoir ce qui se passe sur votre site ?',
      corps: `En regardant les requêtes, pas le total. Google compte le trafic venu des AI Overviews et du AI Mode avec le reste de la recherche web dans la Search Console ([Google Search Central](${S.googleIa.href})) : on ne peut pas l'isoler directement.

La méthode que j'utilise :

1. Comparez deux périodes équivalentes, requête par requête.
2. Repérez les requêtes dont les **impressions tiennent mais dont le taux de clic baisse** : c'est souvent le signe qu'une réponse générée s'affiche au-dessus.
3. Tapez ces requêtes pour voir si une AI Overview apparaît, et si vous y êtes cité.
4. Retravaillez en priorité les pages concernées pour être la source citée, et renforcez les pages où l'internaute a besoin de cliquer.`,
    },
  ],
  tableau: {
    titre: 'Qui dit quoi, et que faire ?',
    colonnes: ['Point', 'Ce qu’on sait', 'Source'],
    lignes: [
      ['Clics organiques totaux', 'Relativement stables d’une année sur l’autre, selon Google', 'Blog Google'],
      ['Qualité des clics', 'En hausse, selon Google', 'Blog Google'],
      ['Études de tiers', 'Annoncent des baisses ; Google conteste leur méthode', 'Blog Google'],
      ['Mesure dans la Search Console', 'Trafic IA mêlé à la recherche web', 'Google Search Central'],
      ['Signal à surveiller', 'Impressions stables, taux de clic en baisse', 'Méthode de terrain'],
    ],
  },
  sources: [S.googleAiClicks, S.googleIa],
  fiche: {
    href: '/prestations/consultant-seo-geo',
    label: 'Consultant SEO et GEO',
    texte:
      "L'**audit SEO et GEO** repère les requêtes où votre taux de clic recule et vérifie si vous êtes cité dans les réponses générées.",
  },
  faq: [
    {
      q: 'Peut-on empêcher Google d’utiliser sa page dans les AI Overviews ?',
      a: `Oui, avec nosnippet, data-nosnippet, max-snippet ou noindex, qui limitent ce que Google montre de vos pages, y compris dans ses fonctionnalités IA ([Google Search Central](${S.googleIa.href})). Mais vous perdez aussi vos extraits dans les résultats classiques.`,
    },
    {
      q: 'Être cité dans une AI Overview apporte-t-il des visites ?',
      a: "Parfois : la réponse affiche des liens vers les sources. Même sans clic, la citation installe votre nom sur la question, ce qui compte pour les recherches suivantes.",
    },
  ],
  voirAussi: ['difference-ai-overviews-ai-mode', 'qu-est-ce-que-le-geo', 'part-de-voix-dans-les-ia'],
  publie: '2026-10-04',
}

export default r
