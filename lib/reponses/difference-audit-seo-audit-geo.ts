import type { Reponse } from './types'
import { S } from './sources'

const r: Reponse = {
  slug: 'difference-audit-seo-audit-geo',
  question: 'Quelle différence entre un audit SEO et un audit GEO ?',
  theme: 'Audits',
  titre: 'Quelle différence entre un audit SEO et un audit GEO ?',
  metaDescription:
    "L'audit SEO part de votre site, l'audit GEO part des réponses des IA. Ce que contrôle chacun, les livrables, et lequel faire en premier.",
  reponse:
    "Un **audit SEO** vérifie comment Google et Bing explorent, comprennent et classent vos pages. Un **audit GEO** vérifie si les IA citent votre site quand on leur pose les questions de vos clients, et quels sites elles citent à votre place. Le premier part de votre site, le second part des réponses des IA.",
  sections: [
    {
      h2: 'Que contrôle un audit SEO ?',
      corps: `Un audit SEO contrôle tout ce qui permet à un moteur de trouver, comprendre et classer vos pages. Il couvre en général trois volets :

- **La technique** : exploration du site, indexation, temps de chargement, structure des URL, redirections, données structurées.
- **Les contenus** : requêtes visées, pages qui y répondent, contenus manquants ou en double, maillage interne.
- **La popularité** : liens venus d'autres sites et leur qualité.

Les données viennent surtout de votre site : un robot d'exploration, la Search Console, les outils d'analyse de liens. L'objectif suit la définition de Google : aider les moteurs à comprendre votre contenu et aider les internautes à vous trouver ([Google Search Central](${S.googleStarter.href})). Ma méthode détaillée est dans l'article [audit SEO : la méthode complète](/blog/audit-seo).`,
    },
    {
      h2: 'Que contrôle un audit GEO ?',
      corps: `Un audit GEO contrôle votre présence dans les réponses des IA, question par question. Il se déroule en cinq temps :

1. **Une liste de questions** que vos clients posent réellement : choix d'un prestataire, prix, comparaisons, définitions.
2. **Le relevé des réponses** de ChatGPT, Perplexity, Gemini, Claude et Google à chacune de ces questions.
3. **La part de voix** : la proportion de réponses qui vous citent, comparée à celle de vos concurrents.
4. **Les sites cités à votre place** et l'analyse de leurs pages : réponse directe, sources, auteur, présence ailleurs sur le web.
5. **L'accès des robots des IA** à votre site. OpenAI précise par exemple qu'un site qui bloque OAI-SearchBot n'apparaît pas dans les réponses de recherche de ChatGPT ([OpenAI](${S.openai.href})). Anthropic et Perplexity documentent aussi leurs robots ([Anthropic](${S.anthropic.href}), [Perplexity](${S.perplexity.href})).

Les données ne viennent plus de votre site mais des réponses des IA. La Search Console ne les fournit pas : Google y compte le trafic des AI Overviews avec le reste du trafic web dans la Search Console ([Google Search Central](${S.googleIa.href})).`,
    },
    {
      h2: 'Lequel faire en premier ?',
      corps: `L'audit SEO, ou les deux ensemble. Pour apparaître dans les AI Overviews, une page doit être indexée et éligible à un extrait dans Google ([Google Search Central](${S.googleIa.href})). Un problème d'exploration ou d'indexation bloque donc aussi le GEO.

C'est pourquoi je réalise l'audit GEO dans le cadre d'un audit SEO et GEO : la partie SEO lève les blocages, la partie GEO montre où vous en êtes face aux IA et ce qu'il faut publier pour être cité.`,
    },
  ],
  tableau: {
    titre: 'Audit SEO ou audit GEO : que comparer ?',
    colonnes: ['Critère', 'Audit SEO', 'Audit GEO'],
    lignes: [
      ['Point de départ', 'Votre site', 'Les questions de vos clients et les réponses des IA'],
      ['Question posée', 'Google peut-il explorer, comprendre et classer mes pages ?', 'Les IA me citent-elles, et qui citent-elles à ma place ?'],
      ['Données', 'Robot d’exploration, Search Console, analyse de liens', 'Relevé des réponses de ChatGPT, Perplexity, Gemini, Claude, Google'],
      ['Indicateur clé', 'Positions, impressions, clics', 'Part de voix, sites cités'],
      ['Livrable', 'Liste des blocages et actions par priorité', 'Relevé par question, analyse des pages gagnantes, plan d’action'],
    ],
  },
  sources: [S.googleStarter, S.googleIa, S.openai, S.anthropic, S.perplexity],
  fiche: {
    href: '/prestations/audit-geo',
    label: 'Audit GEO',
    texte:
      "Mon **audit GEO** relève les réponses des IA sur les questions de vos clients, mesure votre part de voix et identifie les sites cités à votre place. Il est inclus dans l'audit SEO et GEO.",
  },
  faq: [
    {
      q: 'Peut-on faire un audit GEO sans audit SEO ?',
      a: "C'est possible, mais risqué. Si vos pages sont mal explorées ou mal indexées, l'audit GEO constatera votre absence sans pouvoir l'expliquer. Les deux se complètent.",
    },
    {
      q: 'Qui peut réaliser un audit GEO ?',
      a: 'Un consultant qui maîtrise le SEO technique et qui sait relever les réponses des IA de façon reproductible : mêmes questions, mêmes IA, même méthode à chaque mesure.',
    },
  ],
  voirAussi: ['difference-seo-geo', 'robots-ia-faut-il-les-bloquer', 'qu-est-ce-que-le-geo'],
  publie: '2026-10-04',
}

export default r
