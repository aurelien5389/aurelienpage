import type { Reponse } from './types'
import { S } from './sources'

const r: Reponse = {
  slug: 'part-de-voix-dans-les-ia',
  question: "Qu'est-ce que la part de voix dans les IA ?",
  theme: 'Mesure et délais',
  titre: "Qu'est-ce que la part de voix dans les IA ?",
  metaDescription:
    "La part de voix mesure la proportion de réponses d'IA qui citent votre marque sur une liste de questions. Définition, calcul, limites et méthode.",
  reponse:
    "La **part de voix dans les IA** est la proportion de réponses qui citent votre marque ou votre site, sur une liste de questions posées à ChatGPT, Perplexity, Gemini, Claude ou Google. Si vous êtes cité dans 12 réponses sur 40, votre part de voix est de 30 %. On la compare à celle de vos concurrents, IA par IA.",
  sections: [
    {
      h2: 'Pourquoi mesurer une part de voix plutôt que des positions ?',
      corps: `Parce que les IA ne donnent pas de positions. Une réponse générée cite quelques sources, dans un ordre qui varie d'une fois à l'autre. Il n'y a pas de « première place » stable à suivre.

Et les outils habituels ne montrent pas ces citations. Google compte le trafic venu des AI Overviews et du AI Mode dans le trafic de recherche web de la Search Console, sans le distinguer ([Google Search Central](${S.googleIa.href})). ChatGPT, de son côté, réécrit souvent la question en plusieurs requêtes avant de répondre ([Aide OpenAI](${S.openaiSearch.href})) : la même question ne produit pas toujours la même réponse.

La part de voix contourne le problème : au lieu de suivre une position, on compte des présences sur un grand nombre de questions.`,
    },
    {
      h2: 'Comment la calculer ?',
      corps: `En quatre étapes, toujours avec la même méthode.

1. **Construire la liste de questions** que vos clients posent : choix d'un prestataire, prix, comparaisons, définitions. Classez-les par thème.
2. **Poser chaque question** aux IA retenues et enregistrer la réponse complète, avec ses sources.
3. **Relever les marques et les sites cités** dans chaque réponse.
4. **Calculer** : nombre de réponses qui vous citent, divisé par le nombre de réponses analysées. Faites le même calcul pour chaque concurrent.

On peut affiner : distinguer une simple mention d'une citation avec lien, calculer la part de voix par IA et par thème. Je fais ces relevés avec **Balise**, un outil que j'ai construit, afin de répéter exactement la même mesure chaque mois.`,
    },
    {
      h2: 'Quelles sont ses limites ?',
      corps: `Elle dépend entièrement de la liste de questions. Une liste trop étroite flatte ou écrase le résultat. Elle doit refléter les questions réelles de vos clients, pas celles où vous savez déjà être cité.

Les réponses varient aussi dans le temps et selon le contexte de l'utilisateur, comme la localisation que ChatGPT peut prendre en compte ([Aide OpenAI](${S.openaiSearch.href})). Une mesure isolée ne veut pas dire grand-chose : c'est l'évolution, avec une méthode constante, qui compte.

Enfin, être cité ne veut pas dire être recommandé. Relisez le contexte : une citation dans une liste de « prestataires à éviter » n'est pas une victoire.`,
    },
  ],
  tableau: {
    titre: 'Comment lire une part de voix ?',
    colonnes: ['Indicateur', 'Ce qu’il mesure', 'Exemple de lecture'],
    lignes: [
      ['Part de voix globale', 'Réponses qui vous citent / réponses analysées', '12 sur 40 : 30 %'],
      ['Part de voix par IA', 'Le même calcul, IA par IA', 'Fort sur Perplexity, absent de ChatGPT'],
      ['Part de voix par thème', 'Le même calcul, par groupe de questions', 'Cité sur les prix, absent sur les comparatifs'],
      ['Sites cités à votre place', 'Qui occupe les réponses où vous êtes absent', 'Un annuaire, un concurrent, un média'],
      ['Évolution', 'Écart entre deux mesures identiques', 'Le vrai indicateur de progrès'],
    ],
  },
  sources: [S.googleIa, S.openaiSearch],
  fiche: {
    href: '/prestations/audit-geo',
    label: 'Audit GEO',
    texte:
      "L'**audit GEO** mesure votre part de voix sur les questions de vos clients, IA par IA, et identifie les sites cités à votre place.",
  },
  faq: [
    {
      q: 'Combien de questions faut-il pour une part de voix fiable ?',
      a: "Assez pour couvrir vos offres et les étapes de décision de vos clients, et toujours les mêmes d'une mesure à l'autre. La constance de la liste compte plus que sa taille.",
    },
    {
      q: 'La part de voix remplace-t-elle les indicateurs SEO ?',
      a: 'Non, elle les complète. Les positions, impressions et clics de la Search Console restent la mesure du SEO ; la part de voix mesure la présence dans les réponses des IA.',
    },
  ],
  voirAussi: ['difference-audit-seo-audit-geo', 'combien-de-temps-pour-etre-cite-par-chatgpt', 'difference-seo-geo'],
  publie: '2026-10-04',
}

export default r
