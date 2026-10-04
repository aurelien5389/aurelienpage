import type { Reponse } from './types'
import { S } from './sources'

const r: Reponse = {
  slug: 'donnees-structurees-ia',
  question: 'Les données structurées aident-elles à être cité par les IA ?',
  theme: 'Robots et technique',
  titre: 'Les données structurées aident-elles à être cité par les IA ?',
  metaDescription:
    "Google dit qu'aucun balisage Schema.org n'est requis pour ses fonctionnalités IA, mais qu'il s'en sert pour comprendre les pages. Ce qu'il faut en attendre, et ce qu'il ne faut pas.",
  reponse:
    "Elles aident à être **compris**, pas à être **choisi**. Google indique qu'aucune donnée structurée particulière n'est nécessaire pour apparaître dans ses fonctionnalités IA, mais qu'il utilise les données structurées pour comprendre le contenu des pages. Elles clarifient qui vous êtes et ce que vous proposez ; elles ne remplacent pas une page qui répond bien.",
  sections: [
    {
      h2: 'Que dit Google des données structurées et de l’IA ?',
      corps: `Deux choses, à lire ensemble. Pour les AI Overviews et le AI Mode, Google précise qu'il n'y a **pas de données structurées Schema.org spéciales à ajouter** ([Google Search Central](${S.googleIa.href})).

Mais Google rappelle aussi qu'il utilise les données structurées trouvées sur le web **pour comprendre le contenu des pages**, et plus largement pour recueillir des informations sur le web et le monde ([Google Search Central](${S.googleStructured.href})). Elles ne garantissent pas pour autant d'affichage enrichi.

En clair : elles ne déclenchent pas une citation, mais elles réduisent l'ambiguïté sur votre identité, votre métier, vos prix ou votre auteur.`,
    },
    {
      h2: 'Quelles données structurées sont utiles pour un site expert ?',
      corps: `Celles qui décrivent des faits vérifiables, présents sur la page. Sur ce site, j'utilise :

- **Person** : nom, métier, ville, domaines d'expertise, profils liés (LinkedIn, Audiaa).
- **ProfessionalService** et **Service** : l'activité, la zone servie, les tarifs affichés.
- **Article** avec auteur, date de publication et de mise à jour.
- **FAQPage** pour les questions-réponses visibles à l'écran.
- **BreadcrumbList** pour le fil d'Ariane.

Google recommande le format **JSON-LD**, le plus simple à mettre en place et à maintenir, et conseille de fournir moins de propriétés mais des propriétés complètes et exactes plutôt que beaucoup de propriétés approximatives ([Google Search Central](${S.googleStructured.href})).`,
    },
    {
      h2: 'Quelles erreurs éviter ?',
      corps: `Les trois que je rencontre le plus. D'abord, baliser un contenu **absent de la page** : une FAQ en JSON-LD que le visiteur ne voit pas, un prix qui n'est affiché nulle part. Ensuite, des informations **contradictoires** : un tarif dans le balisage, un autre dans le texte. Enfin, des données structurées **injectées uniquement par JavaScript** sans vérifier qu'elles sont lues : Google sait lire le JSON-LD ajouté dynamiquement ([Google Search Central](${S.googleStructured.href})), mais d'autres robots ne lancent pas toujours le JavaScript.

Ce que j'observe sur les sites que je suis : le plus utile pour les IA n'est pas le balisage en lui-même, c'est la **cohérence** entre le balisage, le texte de la page et ce que les autres sites disent de vous.`,
    },
  ],
  tableau: {
    titre: 'Que peut-on attendre des données structurées ?',
    colonnes: ['Question', 'Réponse', 'Source'],
    lignes: [
      ['Obligatoires pour les AI Overviews et le AI Mode ?', 'Non', 'Google Search Central'],
      ['Utilisées par Google pour comprendre une page ?', 'Oui', 'Google Search Central'],
      ['Garantissent un affichage enrichi ?', 'Non', 'Google Search Central'],
      ['Format recommandé', 'JSON-LD', 'Google Search Central'],
      ['Garantissent une citation par une IA ?', 'Non, aucun éditeur ne l’indique', 'Documentation des éditeurs'],
    ],
  },
  sources: [S.googleIa, S.googleStructured],
  fiche: {
    href: '/prestations/consultant-seo-geo',
    label: 'Consultant SEO et GEO',
    texte:
      "L'**audit SEO et GEO** vérifie vos données structurées : présentes dans le HTML, cohérentes avec la page, et lisibles par tous les robots.",
  },
  faq: [
    {
      q: 'Faut-il baliser une FAQ pour être cité ?',
      a: "Seulement si la FAQ est visible sur la page. Le balisage décrit un contenu existant ; il ne le remplace pas. C'est la réponse écrite qui peut être reprise.",
    },
    {
      q: 'Les données structurées injectées par JavaScript sont-elles lues ?',
      a: `Par Google, oui : il lit le JSON-LD ajouté dynamiquement ([Google Search Central](${S.googleStructured.href})). Pour les autres robots, je recommande de les placer directement dans le HTML rendu côté serveur.`,
    },
    {
      q: 'Quels types Schema.org pour un consultant ou un formateur ?',
      a: "Person pour vous-même, ProfessionalService pour l'activité, Service pour chaque prestation, Course pour chaque formation, Article pour les contenus, FAQPage pour les questions visibles, BreadcrumbList pour la navigation. Reliez-les entre eux par des identifiants (@id) pour qu'ils décrivent une seule et même entité.",
    },
  ],
  voirAussi: ['robots-ia-faut-il-les-bloquer', 'faut-il-creer-un-fichier-llms-txt', 'qu-est-ce-que-le-geo'],
  publie: '2026-10-04',
}

export default r
