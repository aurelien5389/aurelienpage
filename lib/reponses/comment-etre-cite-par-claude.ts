import type { Reponse } from './types'
import { S } from './sources'

const r: Reponse = {
  slug: 'comment-etre-cite-par-claude',
  question: 'Comment être cité par Claude, l’IA d’Anthropic ?',
  theme: 'Moteurs et IA',
  titre: 'Comment être cité par Claude, l’IA d’Anthropic ?',
  metaDescription:
    "Pour être cité par Claude : autoriser Claude-SearchBot et Claude-User, publier des passages courts et datés, penser aux questions où Claude répond sans chercher. Méthode sourcée.",
  reponse:
    "Pour être cité par **Claude**, autorisez d'abord ses deux robots liés à la recherche, **Claude-SearchBot** et **Claude-User**, dans le robots.txt. Publiez ensuite des pages qui répondent à la question en quelques phrases claires, datées et sourcées : quand Claude cherche sur le web, il **cite toujours ses sources**. Enfin, ne bloquez pas sans raison ClaudeBot, qui nourrit les connaissances du modèle.",
  sections: [
    {
      h2: 'Quels robots d’Anthropic doivent accéder à votre site ?',
      corps: `Deux robots servent la recherche, un troisième l'entraînement. Anthropic les décrit séparément ([Anthropic](${S.anthropic.href})) :

- **Claude-SearchBot** explore le web pour améliorer la qualité des résultats de recherche. Le bloquer empêche Anthropic d'indexer vos contenus pour la recherche, ce qui peut réduire votre visibilité dans les réponses.
- **Claude-User** visite une page quand un utilisateur pose une question à Claude. Le bloquer empêche Claude de récupérer votre contenu pour répondre à cette question.
- **ClaudeBot** collecte des contenus qui peuvent servir à entraîner les modèles. Le bloquer signale que vos futurs contenus doivent être exclus de l'entraînement.

Anthropic demande de passer par le **robots.txt**, sous-domaine par sous-domaine, et précise que bloquer ses adresses IP ne garantit pas une exclusion fiable ([Anthropic](${S.anthropic.href})). Vérifiez donc votre robots.txt, mais aussi que votre pare-feu ou votre CDN ne refuse pas ces robots sans que vous le sachiez. Le tour complet des robots d'IA est dans [quels robots d'IA explorent votre site](/reponses/robots-ia-faut-il-les-bloquer).`,
    },
    {
      h2: 'Quand Claude cherche-t-il sur le web ?',
      corps: `Quand la question porte sur une information récente ou qui change. La documentation de l'outil de recherche web de Claude liste ces cas : actualités, prix et chiffres à jour, informations sur une **organisation, une personne ou un produit précis**, ou demande explicite de chercher. À l'inverse, Claude répond sans chercher sur les connaissances stables : définitions, notions établies, méthode ([Anthropic, recherche web](${S.anthropicSearch.href})).

Deux conséquences pour vous. Sur les questions qui citent votre métier, vos prix ou votre entreprise, Claude va chercher : c'est là que **Claude-SearchBot** et la qualité de vos pages comptent. Sur les questions de définition, Claude puise dans ce qu'il a appris : c'est là que bloquer **ClaudeBot** peut vous priver d'une présence dans les connaissances des futurs modèles. Le choix vous appartient, mais il doit être fait en connaissance de cause.`,
    },
    {
      h2: 'Quel format de page Claude reprend-il ?',
      corps: `Des passages courts qui se comprennent seuls. Quand Claude cite une source trouvée sur le web, la citation contient l'adresse de la page, son titre et **un extrait de 150 caractères au plus**. Les résultats de recherche transmis au modèle indiquent aussi **la date de dernière mise à jour** de la page. Les citations sont toujours activées pour la recherche web ([Anthropic, recherche web](${S.anthropicSearch.href})).

Un extrait de 150 caractères, c'est une phrase. La phrase qui répond doit donc tenir seule, sans « comme vu plus haut ». Ce que j'applique sur les pages de ce site :

1. **Une réponse de 40 à 60 mots** sous le titre, qui donne le fait principal dès la première phrase.
2. **Des intertitres en questions**, chacun suivi d'une phrase-réponse.
3. **Une date de mise à jour visible** et une page réellement tenue à jour.
4. **Des sources primaires liées**, pour que la phrase citée soit vérifiable.

La méthode complète est dans [comment rédiger un contenu que les IA reprennent](/blog/structurer-contenu-geo).`,
    },
  ],
  tableau: {
    titre: 'Les robots d’Anthropic et l’effet d’un blocage',
    colonnes: ['Robot', 'Rôle', 'Si vous le bloquez'],
    lignes: [
      ['Claude-SearchBot', 'Indexer les contenus pour la recherche', 'Vos pages ne sont plus indexées pour les réponses de recherche'],
      ['Claude-User', 'Lire une page à la demande d’un utilisateur', 'Claude ne peut plus récupérer votre page pour répondre'],
      ['ClaudeBot', 'Collecter des contenus pour l’entraînement', 'Vos futurs contenus sont exclus de l’entraînement'],
    ],
  },
  sources: [S.anthropic, S.anthropicSearch],
  fiche: {
    href: '/prestations/audit-geo',
    label: 'Audit GEO',
    texte:
      "Je vérifie l'accès des robots d'Anthropic, d'OpenAI et de Perplexity, et je relève qui Claude cite sur les questions de vos clients lors d'un **audit GEO**.",
  },
  faq: [
    {
      q: 'Bloquer ClaudeBot empêche-t-il d’être cité par Claude ?',
      a: "Pas dans les réponses de recherche : Anthropic distingue ClaudeBot, qui sert l'entraînement, de Claude-SearchBot et Claude-User, qui servent la recherche. Bloquer ClaudeBot exclut vos futurs contenus de l'entraînement.",
    },
    {
      q: 'Quel moteur de recherche Claude utilise-t-il ?',
      a: "Anthropic ne détaille pas, dans sa documentation destinée aux éditeurs de sites, quels index alimentent la recherche de Claude. Le levier sous votre contrôle reste l'accès de Claude-SearchBot et une bonne indexation dans les principaux moteurs.",
    },
    {
      q: 'Comment savoir si Claude cite mon site ?',
      a: "En posant régulièrement à Claude, recherche web activée, les questions de vos clients, et en notant les sources affichées. La proportion de réponses qui vous citent est votre [part de voix](/reponses/part-de-voix-dans-les-ia).",
    },
  ],
  voirAussi: ['comment-etre-cite-par-chatgpt-et-perplexity', 'robots-ia-faut-il-les-bloquer', 'part-de-voix-dans-les-ia'],
  publie: '2026-10-28',
}

export default r
