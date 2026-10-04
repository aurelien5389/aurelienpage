import type { Reponse } from './types'
import { S } from './sources'

const r: Reponse = {
  slug: 'contenu-ia-penalise-par-google',
  question: "Le contenu rédigé avec l'IA est-il pénalisé par Google ?",
  theme: 'Contenus et IA',
  titre: "Le contenu rédigé avec l'IA est-il pénalisé par Google ?",
  metaDescription:
    "Google ne sanctionne pas l'outil mais l'intention et la qualité. Ce que disent ses règles sur l'IA, l'abus de contenu à grande échelle et la transparence.",
  reponse:
    "Non, pas en tant que tel. Google juge la **qualité et l'utilité** d'un contenu, pas l'outil qui l'a produit. En revanche, générer beaucoup de pages sans valeur pour le lecteur, avec ou sans IA, relève de l'**abus de contenu à grande échelle**, que les règles anti-spam de Google sanctionnent.",
  sections: [
    {
      h2: 'Que dit Google des contenus générés par IA ?',
      corps: `Google ne les interdit pas, il encadre leur usage. Sa documentation prévient que générer de nombreuses pages avec des outils d'IA, **sans apporter de valeur aux utilisateurs**, peut enfreindre sa règle sur l'abus de contenu à grande échelle ([Google Search Central](${S.googleGenAi.href})).

Elle insiste aussi sur l'exactitude : les textes produits par une IA peuvent contenir des erreurs, et Google juge indispensable de les vérifier et de les relire à la main avant publication ([Google Search Central](${S.googleGenAi.href})).

La question décisive, pour Google, reste le « pourquoi » : un contenu doit être créé d'abord pour aider les gens, pas pour manipuler le classement ([Google Search Central](${S.googleHelpful.href})).`,
    },
    {
      h2: "Qu'est-ce que l'abus de contenu à grande échelle ?",
      corps: `C'est la production de nombreuses pages dans le but principal de manipuler le classement, sans aider les utilisateurs, **quelle que soit la façon dont elles sont créées** ([Google Search Central](${S.googleSpam.href})).

Parmi les exemples cités par Google :

- utiliser des outils d'IA générative pour produire de nombreuses pages sans valeur pour l'utilisateur ;
- extraire des flux ou des résultats de recherche et les transformer automatiquement (synonymes, traduction) ;
- assembler des contenus pris sur d'autres pages sans rien ajouter ;
- créer des pages bourrées de mots-clés mais sans sens pour un lecteur.

Le problème n'est donc pas l'IA. C'est le volume sans valeur.`,
    },
    {
      h2: "Faut-il signaler qu'un contenu a été écrit avec l'IA ?",
      corps: `Quand le lecteur peut se poser la question, oui. Google suggère de se demander si l'usage de l'automatisation, IA comprise, est évident pour les visiteurs, par une mention ou autrement, et d'expliquer comment elle a été utilisée ([Google Search Central](${S.googleHelpful.href})).

Google demande aussi que l'auteur soit identifiable, et met en garde contre les faux profils : photos générées, noms inventés, titres inexistants ([Google Search Central](${S.googleHelpful.href})).

Ce que j'observe sur les sites que je suis : les IA qui citent des sources, comme Perplexity ou ChatGPT, reprennent plus volontiers des pages qui apportent un fait, une expérience ou une source que l'on ne trouve pas ailleurs. Un texte généré sans relecture n'apporte rien de tel.`,
    },
  ],
  tableau: {
    titre: 'Qu’est-ce qui passe, et qu’est-ce qui pose problème ?',
    colonnes: ['Pratique', 'Ce qu’en dit Google'],
    lignes: [
      ['Article écrit avec l’aide de l’IA, vérifié, relu et enrichi', 'Accepté : seuls la qualité et l’utilité comptent'],
      ['Centaines de pages générées sans valeur pour le lecteur', 'Abus de contenu à grande échelle (spam)'],
      ['Texte publié sans vérification', 'À éviter : risque d’erreurs, vérification manuelle recommandée'],
      ['Faux auteur, photo générée, titres inventés', 'Contraire aux recommandations'],
      ['Mention de l’usage de l’IA', 'Recommandée quand le lecteur peut se poser la question'],
    ],
  },
  sources: [S.googleGenAi, S.googleSpam, S.googleHelpful],
  fiche: {
    href: '/formation-geo',
    label: 'Formation GEO',
    texte:
      "Vous produisez des contenus avec l'IA et voulez qu'ils soient repris plutôt qu'ignorés ? Ma **formation GEO** apprend à votre équipe à écrire des pages que les IA citent.",
  },
  faq: [
    {
      q: 'Google sait-il reconnaître un texte écrit par une IA ?',
      a: `Google ne le dit pas. Sa règle sur l'abus de contenu s'applique quelle que soit la façon dont les pages sont créées : c'est la valeur pour le lecteur qui est jugée, pas l'outil ([Google Search Central](${S.googleSpam.href})).`,
    },
    {
      q: "Que faire des pages déjà générées avec l'IA ?",
      a: "Les relire une par une : vérifier les faits, ajouter ce que vous seul savez (exemples, chiffres sourcés, expérience), fusionner ou retirer celles qui n'apportent rien, avec une redirection si elles ont des liens.",
    },
  ],
  voirAussi: ['qu-est-ce-que-le-geo', 'difference-seo-geo', 'faut-il-creer-un-fichier-llms-txt'],
  publie: '2026-10-04',
}

export default r
