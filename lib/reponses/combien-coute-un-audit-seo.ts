import type { Reponse } from './types'
import { S } from './sources'

const r: Reponse = {
  slug: 'combien-coute-un-audit-seo',
  question: 'Combien coûte un audit SEO ?',
  theme: 'Audits',
  titre: 'Combien coûte un audit SEO ?',
  metaDescription:
    "Mon audit SEO et GEO coûte de 800 à 2 500 € selon la taille du site. Ce qui fait varier le prix, ce que contient le livrable, et pourquoi le devis suit un diagnostic offert.",
  reponse:
    "Chez moi, un **audit SEO et GEO coûte de 800 à 2 500 €** selon la taille du site et la profondeur d'analyse. Le prix dépend du nombre de pages, du volet GEO (visibilité dans ChatGPT, Perplexity, Gemini) et du format de restitution. Il est fixé dans un devis, après un **diagnostic offert de 30 minutes**.",
  sections: [
    {
      h2: "Qu'est-ce qui fait varier le prix d'un audit SEO ?",
      corps: `Quatre choses, dans cet ordre d'importance : la taille du site, la profondeur demandée, le volet GEO et la restitution.

- **La taille du site.** Un site vitrine de vingt pages s'explore en quelques heures. Un catalogue de plusieurs milliers d'URL demande un crawl complet, une analyse des journaux du serveur et un tri des pages qui comptent. C'est le premier facteur de prix.
- **La profondeur.** Un audit peut s'arrêter aux blocages techniques, ou aller jusqu'à la carte des mots-clés, l'analyse des contenus page par page et le profil de liens.
- **Le volet GEO.** Relever les réponses de ChatGPT, Perplexity, Gemini, Claude et Google sur une liste de questions, puis analyser les sites cités à votre place, ajoute du temps de relevé. Chez moi, ce volet fait partie de l'audit : il n'est pas vendu seul (voir [audit SEO ou audit GEO](/reponses/difference-audit-seo-audit-geo)).
- **La restitution.** Un rapport envoyé par e-mail coûte moins qu'une restitution en réunion avec votre équipe technique et vos rédacteurs, puis un accompagnement de la mise en œuvre.

Les fourchettes plus larges que l'on trouve sur le web, du site vitrine au site e-commerce, sont rassemblées dans [combien coûte une prestation SEO](/cout-prestation-seo). Ici, je parle de mes tarifs.`,
    },
    {
      h2: 'Que contient un audit SEO à ce prix ?',
      corps: `Tout ce qui empêche Google de trouver, comprendre et classer vos pages, et tout ce qui empêche les IA de vous citer. Le livrable comprend :

1. **L'audit technique** : exploration, indexation, Core Web Vitals, structure des URL, redirections, données structurées, accès des robots de Google, de Bing et des IA.
2. **L'audit des contenus et des mots-clés** : requêtes qui comptent pour votre activité, pages qui y répondent, contenus manquants ou en double, maillage interne.
3. **L'audit GEO** : relevé des réponses des IA sur les questions de vos clients, part de voix, sites cités à votre place.
4. **Le plan d'action**, classé par impact et par effort, que vous pouvez appliquer seul, avec votre équipe ou avec moi.

Google rappelle ce qu'un audit doit couvrir : aider les moteurs à comprendre votre contenu et aider les internautes à trouver votre site ([Google Search Central](${S.googleStarter.href})). Un rapport qui se limite à une liste d'erreurs automatiques, sans priorité ni explication, ne remplit pas ce rôle.`,
    },
    {
      h2: 'Pourquoi le devis suit-il un diagnostic offert ?',
      corps: `Parce que le prix dépend de votre site, et que je ne le connais pas encore. Le diagnostic offert de 30 minutes sert à regarder ensemble votre site, vos objectifs et vos concurrents. À la fin, je vous dis si un audit est utile, ce qu'il couvrira, et je vous envoie un devis détaillé. Vous ne payez rien avant d'avoir accepté ce devis.

Avant de choisir un prestataire, Google conseille de lui demander des exemples de travaux, s'il respecte les Google Search Essentials, et quels résultats il attend, dans quel délai ([Google Search Central](${S.googleSeo.href})). Le diagnostic est le moment pour poser ces questions.`,
    },
    {
      h2: 'Un audit SEO à bas prix est-il une bonne affaire ?',
      corps: `Cela dépend de ce qu'il contient, pas du chiffre. Avant de comparer deux devis, vérifiez trois choses : qui réalise le travail, ce que contient le livrable, et comment les actions sont classées.

Google met en garde contre les prestataires qui garantissent un classement : personne ne peut promettre une première position sur Google ([Google Search Central](${S.googleSeo.href})). La même prudence vaut pour les IA : personne ne peut garantir une citation dans ChatGPT ou Perplexity. Un audit sérieux dit où vous en êtes et ce qu'il faut faire, pas ce que vous obtiendrez.`,
    },
  ],
  tableau: {
    titre: "Ce qui fait varier le prix d'un audit SEO",
    colonnes: ['Critère', 'Ce qui compte', 'Effet sur le prix'],
    lignes: [
      ['Taille du site', 'Nombre de pages à explorer et à analyser', 'Premier facteur : de 800 € pour un petit site vitrine à 2 500 € pour un grand site'],
      ['Profondeur', 'Technique seule, ou technique, contenus et liens', 'Augmente avec le nombre de volets'],
      ['Volet GEO', 'Nombre de questions relevées dans les IA, analyse des sites cités', 'Inclus dans mon audit SEO et GEO, non vendu seul'],
      ['Restitution', 'Rapport seul, ou réunion de restitution avec vos équipes', 'La réunion est comprise ; la mise en œuvre se fait en accompagnement'],
      ['Délai', 'Précisé dans le devis selon la taille du site', 'Sans effet sur le prix'],
    ],
  },
  sources: [S.googleSeo, S.googleStarter, S.googleIa],
  fiche: {
    href: '/prestations/consultant-seo-geo',
    label: 'Audit SEO et GEO',
    texte:
      "Vous voulez un prix pour votre site ? Réservez le **diagnostic offert de 30 minutes** : je vous dis si un audit est utile, et le devis suit.",
  },
  faq: [
    {
      q: 'Combien coûte un audit GEO ?',
      a: "Chez moi, il est inclus dans l'audit SEO et GEO, de 800 à 2 500 € selon la taille du site. Je ne le vends pas seul : sans pages bien explorées et indexées, une IA a peu de matière à citer. Le détail est sur la fiche [audit GEO](/prestations/audit-geo).",
    },
    {
      q: 'Un audit SEO est-il finançable par le CPF ou un OPCO ?',
      a: "Non. C'est une prestation de conseil, pas une formation. Les financements du CPF et des OPCO sont réservés aux actions de formation dispensées par des organismes certifiés. Si vous voulez former votre équipe, voir [une formation SEO est-elle finançable](/reponses/formation-seo-cpf-opco).",
    },
    {
      q: 'Combien de temps dure un audit SEO ?',
      a: "Le délai dépend de la taille du site et du nombre de questions à relever dans les IA. Il est précisé dans le devis, avant toute intervention. Les premiers résultats des actions mettent ensuite plusieurs mois à apparaître : voir [combien de temps pour voir les résultats du SEO](/reponses/combien-de-temps-resultats-seo).",
    },
    {
      q: "Que se passe-t-il après l'audit ?",
      a: "Vous appliquez le plan d'action seul, avec votre équipe, ou avec moi dans un [accompagnement SEO mensuel](/accompagnement-seo), de 500 à 2 000 € par mois, sans contrat annuel imposé. L'audit reste utilisable tel quel : les actions sont expliquées et classées par priorité.",
    },
  ],
  voirAussi: ['difference-audit-seo-audit-geo', 'combien-de-temps-resultats-seo', 'comment-etre-cite-par-chatgpt-et-perplexity'],
  publie: '2026-10-12',
}

export default r
