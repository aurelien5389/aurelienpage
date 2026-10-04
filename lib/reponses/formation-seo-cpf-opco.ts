import type { Reponse } from './types'
import { S } from './sources'

const r: Reponse = {
  slug: 'formation-seo-cpf-opco',
  question: "Une formation SEO est-elle finançable par le CPF ou l'OPCO ?",
  theme: 'Formation',
  titre: "Une formation SEO est-elle finançable par le CPF ou l'OPCO ?",
  metaDescription:
    "CPF : seulement si la formation mène à une certification enregistrée. OPCO : seulement si l'organisme est certifié Qualiopi. Ce que dit le Code du travail.",
  reponse:
    "Oui, à deux conditions fixées par le Code du travail. Pour le **CPF**, la formation doit mener à une certification enregistrée au répertoire national ou au répertoire spécifique. Pour un **OPCO**, comme pour le CPF, l'organisme doit être **certifié sur des critères qualité** (Qualiopi). Sans ces conditions, l'entreprise finance la formation sur son propre budget.",
  sections: [
    {
      h2: 'Quand une formation SEO est-elle éligible au CPF ?',
      corps: `Quand elle débouche sur une certification enregistrée. L'article L6323-6 du Code du travail rend éligibles au compte personnel de formation les actions sanctionnées par des **certifications professionnelles enregistrées au répertoire national** (RNCP), par des blocs de compétences, ou par des certifications inscrites au **répertoire spécifique** ([Légifrance](${S.l6323.href})).

Une formation SEO « maison », même excellente, n'est donc pas éligible au CPF si elle ne prépare pas à l'une de ces certifications. Avant de vous inscrire, demandez le code de la certification visée et vérifiez-la.`,
    },
    {
      h2: 'Quand un OPCO peut-il la financer ?',
      corps: `Quand l'organisme de formation est certifié. L'article L6316-1 du Code du travail impose une **certification sur des critères qualité** aux organismes financés par un opérateur de compétences (OPCO), par la Caisse des dépôts et consignations (qui gère le CPF), par l'État, les régions ou France Travail ([Légifrance](${S.l6316.href})). Cette certification est connue sous le nom de **Qualiopi**.

Un OPCO ne peut donc pas financer une formation dispensée par un organisme non certifié. Les règles de prise en charge (montants, publics, durées) varient ensuite d'un OPCO à l'autre : c'est à vérifier directement auprès du vôtre.`,
    },
    {
      h2: "Et si la formation n'est pas finançable ?",
      corps: `L'entreprise la paie sur son propre budget, comme n'importe quel achat de prestation. C'est le cas des formations que je propose : je ne suis pas certifié Qualiopi à ce jour, elles ne peuvent donc pas être financées par ces dispositifs.

Ce n'est pas forcément un frein. Une formation courte, sur votre site et vos outils, peut coûter moins cher que le temps passé à monter un dossier de financement. Comparez le coût total, pas seulement le reste à charge.`,
    },
    {
      h2: 'Comment vérifier une formation avant de compter sur un financement ?',
      corps: `En posant trois questions à l'organisme, et en demandant des preuves écrites.

1. **Êtes-vous certifié Qualiopi ?** Demandez le certificat et sa date de validité. Sans lui, ni OPCO ni CPF ([Légifrance](${S.l6316.href})).
2. **La formation prépare-t-elle à une certification enregistrée ?** Demandez son intitulé et son numéro au répertoire. Sans elle, pas de CPF ([Légifrance](${S.l6323.href})).
3. **Quelles sont les règles de mon OPCO ?** Interrogez directement votre opérateur de compétences : il fixe ses propres conditions de prise en charge.

Faites ces vérifications avant de signer : un refus de financement après la formation laisse la facture à l'entreprise.`,
    },
  ],
  tableau: {
    titre: 'Qui peut financer une formation SEO, et à quelle condition ?',
    colonnes: ['Financement', 'Condition', 'Texte'],
    lignes: [
      ['CPF', 'Certification enregistrée (RNCP, bloc de compétences ou répertoire spécifique) et organisme certifié qualité', 'L6323-6 et L6316-1'],
      ['OPCO', 'Organisme certifié sur des critères qualité (Qualiopi)', 'L6316-1'],
      ['France Travail, État, région', 'Organisme certifié sur des critères qualité', 'L6316-1'],
      ['Budget propre de l’entreprise', 'Aucune condition de certification', 'Achat de prestation'],
    ],
  },
  sources: [S.l6323, S.l6316],
  fiche: {
    href: '/formation-seo',
    label: 'Formation SEO',
    texte:
      "Ma **formation SEO** se finance sur le budget de l'entreprise : 300 € les 2 heures, 450 à 600 € le module, sur votre propre site.",
  },
  faq: [
    {
      q: 'Comment savoir si un organisme est certifié Qualiopi ?',
      a: "Demandez-lui son certificat : il doit pouvoir le fournir. L'obligation de certification découle de l'article L6316-1 du Code du travail.",
    },
    {
      q: 'Une formation GEO peut-elle être financée ?',
      a: 'Aux mêmes conditions : certification enregistrée pour le CPF, organisme certifié pour un OPCO. Les formations GEO sont encore récentes ; vérifiez ces deux points avant de compter sur un financement.',
    },
  ],
  voirAussi: ['qu-est-ce-que-le-geo', 'combien-de-temps-resultats-seo', 'contenu-ia-penalise-par-google'],
  publie: '2026-10-04',
}

export default r
