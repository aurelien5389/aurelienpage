import type { Reponse } from './types'
import { S } from './sources'

const FENCE = '```'
const EXEMPLE_ROBOTS = [
  FENCE,
  '# Robots de recherche des IA : autorisés',
  'User-agent: OAI-SearchBot',
  'User-agent: Claude-SearchBot',
  'User-agent: PerplexityBot',
  'Allow: /',
  '',
  "# Robots d'entraînement : bloqués (si c'est votre choix)",
  'User-agent: GPTBot',
  'User-agent: ClaudeBot',
  'User-agent: Google-Extended',
  'Disallow: /',
  FENCE,
].join('\n')

const r: Reponse = {
  slug: 'robots-ia-faut-il-les-bloquer',
  question: "Quels robots d'IA explorent mon site et faut-il les bloquer ?",
  theme: 'Robots et technique',
  titre: "Quels robots d'IA explorent mon site et faut-il les bloquer ?",
  metaDescription:
    "OAI-SearchBot, GPTBot, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended : rôle de chaque robot d'IA, et lesquels bloquer sans disparaître des réponses.",
  reponse:
    "Les principaux robots d'IA sont **OAI-SearchBot, ChatGPT-User et GPTBot** (OpenAI), **Claude-SearchBot, Claude-User et ClaudeBot** (Anthropic), **PerplexityBot et Perplexity-User** (Perplexity). Google et Bing passent par leurs robots habituels. Pour être cité, laissez passer les robots de recherche. Bloquer les robots d'entraînement est un choix séparé.",
  sections: [
    {
      h2: 'Quels robots servent à la recherche, et lesquels à l’entraînement ?',
      corps: `OpenAI, Anthropic et Perplexity séparent trois usages : la recherche, la visite demandée par un utilisateur, et l'entraînement des modèles. Google et Bing fonctionnent autrement.

- **OpenAI** : OAI-SearchBot fait apparaître les sites dans la recherche de ChatGPT ; ChatGPT-User visite une page à la demande d'un utilisateur ; GPTBot collecte des pages pour l'entraînement des modèles ([OpenAI](${S.openai.href})).
- **Anthropic** : Claude-SearchBot sert à la qualité des résultats de recherche de Claude ; Claude-User visite une page quand un utilisateur pose une question ; ClaudeBot collecte du contenu qui peut servir à l'entraînement ([Anthropic](${S.anthropic.href})).
- **Perplexity** : PerplexityBot fait apparaître et lie les sites dans les résultats, et Perplexity précise qu'il ne sert pas à entraîner des modèles ; Perplexity-User visite une page à la demande d'un utilisateur ([Perplexity](${S.perplexity.href})).
- **Google** : pas de robot dédié. **Google-Extended** est un simple jeton du robots.txt. Il contrôle l'usage de vos pages pour entraîner les modèles Gemini et pour l'ancrage des réponses de Gemini ; il n'a aucun effet sur l'inclusion ni le classement dans Google Search ([Google](${S.googleCrawlers.href})).
- **Bing** : Bingbot explore pour Bing, et donc pour Copilot ([Bing](${S.bingCrawlers.href})).`,
    },
    {
      h2: 'Faut-il les bloquer ?',
      corps: `Pas les robots de recherche, si vous voulez être cité. OpenAI l'écrit sans détour : un site qui bloque OAI-SearchBot n'apparaît pas dans les réponses de recherche de ChatGPT, sauf sous forme de simple lien de navigation ([OpenAI](${S.openai.href})).

Pour les robots d'entraînement, c'est un choix, et il n'engage pas votre visibilité dans la recherche. OpenAI précise que chaque réglage est **indépendant** : vous pouvez autoriser OAI-SearchBot et refuser GPTBot ([OpenAI](${S.openai.href})).

Deux nuances. Bloquer **Google-Extended** retire aussi vos pages de l'ancrage des réponses de Gemini, pas seulement de l'entraînement ([Google](${S.googleCrawlers.href})). Et chez Bing, le réglage passe par des balises : NOCACHE limite l'usage à l'URL, au titre et à l'extrait ; NOARCHIVE retire la page des réponses de chat et de l'entraînement ([Bing](${S.bingChat.href})).

Mon conseil pour un site d'entreprise qui cherche des clients : tout autoriser. Votre contenu est public, et vous voulez que les IA vous connaissent.`,
    },
    {
      h2: 'Comment les autoriser ou les bloquer ?',
      corps: `Dans le fichier robots.txt, à la racine du site, robot par robot. Exemple qui autorise la recherche et bloque l'entraînement :

${EXEMPLE_ROBOTS}

Trois limites à connaître. Les robots qui agissent pour un utilisateur ne suivent pas toujours le robots.txt : OpenAI indique que ses règles « peuvent ne pas s'appliquer » à ChatGPT-User, et Perplexity que Perplexity-User les ignore en général ([OpenAI](${S.openai.href}), [Perplexity](${S.perplexity.href})). Anthropic prévient que le blocage par adresse IP peut ne pas fonctionner de façon fiable ([Anthropic](${S.anthropic.href})). Enfin, vérifiez le pare-feu de votre hébergeur : ce que j'observe sur les sites que je suis, c'est qu'une protection anti-robots peut bloquer ces visiteurs sans que le robots.txt y soit pour rien.`,
    },
  ],
  tableau: {
    titre: "Que faire de chaque robot d'IA ?",
    colonnes: ['Robot', 'Éditeur', 'Rôle', 'Bloquer ?'],
    lignes: [
      ['OAI-SearchBot', 'OpenAI', 'Recherche de ChatGPT', 'Non, si vous voulez être cité'],
      ['ChatGPT-User', 'OpenAI', 'Visite à la demande d’un utilisateur', 'Non'],
      ['GPTBot', 'OpenAI', 'Entraînement des modèles', 'Au choix'],
      ['Claude-SearchBot', 'Anthropic', 'Recherche de Claude', 'Non, si vous voulez être cité'],
      ['Claude-User', 'Anthropic', 'Visite à la demande d’un utilisateur', 'Non'],
      ['ClaudeBot', 'Anthropic', 'Collecte pouvant servir à l’entraînement', 'Au choix'],
      ['PerplexityBot', 'Perplexity', 'Résultats de Perplexity (pas d’entraînement)', 'Non, si vous voulez être cité'],
      ['Google-Extended', 'Google', 'Entraînement et ancrage de Gemini (jeton robots.txt)', 'Au choix, effet sur Gemini'],
      ['Bingbot', 'Microsoft', 'Index de Bing, utilisé par Copilot', 'Non'],
    ],
  },
  sources: [S.openai, S.anthropic, S.perplexity, S.googleCrawlers, S.bingCrawlers, S.bingChat],
  fiche: {
    href: '/prestations/audit-geo',
    label: 'Audit GEO',
    texte:
      "L'**audit GEO** commence par vérifier, robot par robot, que les IA accèdent à votre site : robots.txt, pare-feu, rendu des pages. Puis il mesure si elles vous citent.",
  },
  faq: [
    {
      q: 'Bloquer GPTBot me retire-t-il de ChatGPT ?',
      a: `Non. GPTBot sert à l'entraînement. La recherche de ChatGPT passe par OAI-SearchBot, et OpenAI précise que les deux réglages sont indépendants ([OpenAI](${S.openai.href})).`,
    },
    {
      q: 'Google-Extended influence-t-il mon classement Google ?',
      a: `Non. Google indique que Google-Extended n'a aucun effet sur l'inclusion dans Google Search et n'est pas un signal de classement ([Google](${S.googleCrawlers.href})).`,
    },
    {
      q: 'Comment savoir si ces robots visitent mon site ?',
      a: "Dans les journaux de votre serveur ou de votre hébergeur : chaque visite indique le nom du robot. Une analyse de logs montre lesquels passent, à quelle fréquence et sur quelles pages.",
    },
  ],
  voirAussi: ['faut-il-creer-un-fichier-llms-txt', 'qu-est-ce-que-le-geo', 'difference-audit-seo-audit-geo'],
  publie: '2026-10-04',
}

export default r
