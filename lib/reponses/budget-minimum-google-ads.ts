import type { Reponse } from './types'
import { S } from './sources'

const r: Reponse = {
  slug: 'budget-minimum-google-ads',
  question: 'Quel budget minimum pour une campagne Google Ads ?',
  theme: 'Google Ads',
  titre: 'Quel budget minimum pour une campagne Google Ads ?',
  metaDescription:
    "Google n'impose pas de budget minimum. Comment fonctionne le budget quotidien moyen, combien une campagne peut dépenser en un jour, et comment fixer un budget utile.",
  reponse:
    "Google n'impose **pas de montant minimum** : vous fixez un **budget quotidien moyen** par campagne. Une campagne peut dépenser jusqu'à deux fois ce budget un jour donné, dans la limite de 30,4 fois sur le mois. Le vrai minimum est celui qui permet d'obtenir assez de clics pour apprendre ce qui convertit.",
  sections: [
    {
      h2: 'Comment fonctionne le budget dans Google Ads ?',
      corps: `Par campagne et par jour, en moyenne. Vous choisissez un **budget quotidien moyen** pour chaque campagne, selon vos objectifs et ce que vous êtes prêt à dépenser chaque jour en moyenne ([Aide Google Ads](${S.googleAdsBudget.href})).

La dépense réelle varie d'un jour à l'autre. Google indique que vous ne payez jamais plus que votre **limite de dépense quotidienne**, soit deux fois le budget quotidien moyen pour la plupart des campagnes, ni plus que votre **limite mensuelle**, soit 30,4 fois ce budget pour la plupart des campagnes ([Aide Google Ads](${S.googleAdsBudget.href})).

Exemple : avec un budget quotidien moyen de 20 €, une campagne peut dépenser jusqu'à 40 € un jour de forte demande, mais pas plus de 608 € sur le mois.`,
    },
    {
      h2: 'Pourquoi un budget trop faible pose-t-il problème ?',
      corps: `Parce qu'il ne produit pas assez de données. Pour savoir quels mots-clés et quelles annonces amènent des contacts, il faut un volume de clics suffisant. Avec trop peu de clics, chaque décision repose sur le hasard.

Le minimum utile dépend de trois choses : le **coût par clic** de vos mots-clés, votre **taux de conversion** et le nombre de conversions dont vous avez besoin pour juger. Un secteur où le clic coûte cher demande un budget plus élevé pour apprendre aussi vite.

Ce que j'observe : en dessous d'environ 500 € par mois, il devient difficile d'optimiser sérieusement, sauf sur des marchés très locaux ou peu concurrentiels. C'est un repère de terrain, pas une règle de Google.`,
    },
    {
      h2: 'Comment fixer un budget de départ ?',
      corps: `En partant de vos chiffres, pas d'un montant rond.

1. Estimez le **coût par clic** de vos mots-clés avec l'outil de planification de Google Ads.
2. Fixez le **nombre de conversions** voulu par mois (demandes de devis, appels, ventes).
3. Estimez votre **taux de conversion** (part des visiteurs qui deviennent contacts), à partir de votre site ou d'une hypothèse prudente.
4. Calculez : conversions voulues ÷ taux de conversion × coût par clic = budget mensuel. Divisez par 30,4 pour le budget quotidien moyen.

Concentrez ensuite ce budget sur peu de campagnes et peu de mots-clés : mieux vaut une campagne bien alimentée que cinq campagnes qui manquent de clics.`,
    },
  ],
  tableau: {
    titre: 'Que retenir sur le budget Google Ads ?',
    colonnes: ['Question', 'Réponse', 'Source'],
    lignes: [
      ['Montant minimum imposé', 'Aucun mentionné : vous fixez un budget quotidien moyen', 'Aide Google Ads'],
      ['Dépense maximale un jour donné', 'Deux fois le budget quotidien moyen (la plupart des campagnes)', 'Aide Google Ads'],
      ['Dépense maximale sur un mois', '30,4 fois le budget quotidien moyen (la plupart des campagnes)', 'Aide Google Ads'],
      ['Budget utile', 'Celui qui donne assez de clics pour apprendre', 'Méthode de calcul ci-dessus'],
      ['Repère de terrain', 'Optimisation difficile sous environ 500 € par mois', 'Observation, pas une règle'],
    ],
  },
  sources: [S.googleAdsBudget],
  fiche: {
    href: '/prestations/traffic-manager-sea',
    label: 'Traffic Manager SEA',
    texte:
      "Je calcule avec vous le budget utile, puis je crée et pilote vos campagnes **Google Ads** avec un suivi des conversions fiable.",
  },
  faq: [
    {
      q: 'Le budget publicitaire comprend-il les honoraires du gestionnaire ?',
      a: "Non. Le budget publicitaire est payé directement à Google. Les honoraires d'un traffic manager s'y ajoutent.",
    },
    {
      q: 'Une campagne peut-elle dépasser son budget un jour donné ?',
      a: `Oui, jusqu'à deux fois le budget quotidien moyen pour la plupart des campagnes, sans dépasser 30,4 fois ce budget sur le mois ([Aide Google Ads](${S.googleAdsBudget.href})). Sur le mois, la dépense reste donc encadrée.`,
    },
    {
      q: 'Faut-il commencer petit puis augmenter ?',
      a: "Oui, si le budget de départ suffit à obtenir des données. Démarrez sur les mots-clés les plus proches d'une intention d'achat, mesurez les conversions, puis augmentez sur ce qui fonctionne plutôt que d'élargir tout de suite.",
    },
  ],
  voirAussi: ['difference-seo-geo', 'combien-de-temps-resultats-seo', 'ai-overviews-baisse-de-trafic'],
  publie: '2026-10-04',
}

export default r
