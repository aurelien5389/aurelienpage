import type { Reponse } from './types'
import { S } from './sources'

const r: Reponse = {
  slug: 'combien-de-mots-article-seo',
  question: 'Combien de mots doit contenir un article pour le SEO ?',
  theme: 'Contenus et IA',
  titre: 'Combien de mots doit contenir un article pour le SEO ?',
  metaDescription:
    "Google le dit : il n'a pas de nombre de mots préféré. Comment choisir la bonne longueur selon la question, et pourquoi les IA reprennent les textes courts et précis.",
  reponse:
    "Il n'y a pas de bon nombre de mots. Google l'écrit lui-même : il **n'a pas de nombre de mots préféré**. La bonne longueur est celle qui répond complètement à la question, sans remplissage. Une définition tient en quelques centaines de mots ; un guide pas à pas en demande davantage.",
  sections: [
    {
      h2: 'Que dit Google sur la longueur des contenus ?',
      corps: `Google répond à la question dans sa propre documentation. Parmi les questions qu'il invite à se poser pour juger un contenu, il demande si vous écrivez pour atteindre un nombre de mots parce que vous avez entendu dire que Google en préfère un, et répond entre parenthèses : **non, il n'en a pas** ([Google Search Central](${S.googleHelpful.href})).

La même page met l'accent sur ce qui compte : un contenu créé d'abord pour aider les gens, qui apporte une information originale et laisse le lecteur satisfait ([Google Search Central](${S.googleHelpful.href})).`,
    },
    {
      h2: 'Comment choisir la bonne longueur ?',
      corps: `En partant de la question, pas d'un objectif chiffré. Trois repères pratiques :

- **Une question simple** (une définition, un oui ou non argumenté) appelle une réponse courte, directe dès la première phrase, puis quelques précisions.
- **Une question de méthode** (« comment faire ») demande des étapes, des exemples, parfois un tableau : le texte s'allonge naturellement.
- **Une question de choix** (« lequel choisir », « combien ça coûte ») demande des critères, des comparaisons et des chiffres sourcés.

Regardez aussi les pages qui répondent déjà à la question : non pour copier leur longueur, mais pour voir ce qu'elles oublient. C'est là que se trouve votre valeur ajoutée.`,
    },
    {
      h2: 'Les textes longs sont-ils mieux repris par les IA ?',
      corps: `Pas forcément. Les IA reprennent des **passages** : une définition, un paragraphe, une ligne de tableau. Ce que j'observe sur les sites que je suis : un texte long et dilué est moins cité qu'un texte qui donne une réponse nette en tête, puis la développe.

C'est pourquoi les pages de la rubrique [réponses](/reponses) de ce site commencent par une réponse de 40 à 60 mots, compréhensible seule, avant tout développement. La longueur totale suit ensuite la complexité du sujet.`,
    },
    {
      h2: 'Comment savoir si un article est trop court ou trop long ?',
      corps: `En regardant ce que fait le lecteur, pas le compteur de mots. Deux signaux simples :

- **Trop court** : la page reçoit des impressions dans la Search Console mais peu de clics, ou le lecteur revient chercher une précision. Il manque souvent un exemple, une étape ou une source.
- **Trop long** : la réponse arrive tard, noyée dans une introduction. Le lecteur ne trouve pas ce qu'il cherchait dans les premières lignes.

Le bon test reste celui de Google : le lecteur repart-il avec le sentiment d'avoir obtenu ce qu'il cherchait ([Google Search Central](${S.googleHelpful.href})) ?`,
    },
  ],
  tableau: {
    titre: 'Quelle longueur pour quel type de question ?',
    colonnes: ['Type de question', 'Ce que le lecteur attend', 'Forme adaptée'],
    lignes: [
      ['Définition', 'Comprendre vite', 'Réponse directe, puis précisions'],
      ['Comparaison', 'Choisir entre deux options', 'Critères et tableau'],
      ['Méthode', 'Savoir faire', 'Étapes numérotées et exemples'],
      ['Prix ou délai', 'Décider', 'Fourchettes, conditions, sources'],
      ['Nombre de mots préféré par Google', 'Aucun', 'Google Search Central'],
    ],
  },
  sources: [S.googleHelpful],
  fiche: {
    href: '/formation-seo',
    label: 'Formation SEO',
    texte:
      "La **formation SEO** apprend à vos rédacteurs à structurer un contenu selon la question posée, sur vos propres pages.",
  },
  faq: [
    {
      q: 'Un article de 300 mots peut-il bien se classer ?',
      a: "Oui, s'il répond complètement à une question simple. Google ne fixe pas de longueur ; il juge si le contenu aide le lecteur.",
    },
    {
      q: 'Faut-il rallonger les anciens articles ?',
      a: "Seulement pour ajouter ce qui manque : une réponse plus claire, un exemple, une source, une mise à jour. Rallonger pour rallonger dilue la réponse.",
    },
    {
      q: "Une page de service doit-elle être aussi longue qu'un article ?",
      a: "Non. Une page de service doit permettre de décider : ce que vous faites, pour qui, où, combien, en combien de temps, et comment démarrer. Un tableau clair et une FAQ honnête valent mieux qu'un long texte de présentation.",
    },
  ],
  voirAussi: ['contenu-ia-penalise-par-google', 'qu-est-ce-que-le-geo', 'combien-de-temps-resultats-seo'],
  publie: '2026-10-04',
}

export default r
