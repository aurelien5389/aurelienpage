import type { Reponse } from './types'
import { S } from './sources'

const r: Reponse = {
  slug: 'combien-de-temps-resultats-seo',
  question: 'Combien de temps faut-il pour voir les résultats du SEO ?',
  theme: 'Mesure et délais',
  titre: 'Combien de temps faut-il pour voir les résultats du SEO ?',
  metaDescription:
    "De quelques heures à plusieurs mois selon Google. Ce qui accélère ou ralentit les effets du SEO, et comment mesurer sans se tromper.",
  reponse:
    "Selon Google, certaines modifications produisent un effet **en quelques heures**, d'autres **en plusieurs mois**, et il faut en général attendre **quelques semaines** pour juger si un changement a été utile. Le délai dépend surtout du type de modification, de la fréquence d'exploration de votre site et de la concurrence sur vos requêtes.",
  sections: [
    {
      h2: 'Que dit Google sur les délais du SEO ?',
      corps: `Google donne une fourchette large et assumée. Chaque modification met un certain temps à être prise en compte : certaines agissent en quelques heures, d'autres en plusieurs mois. Google conseille d'attendre quelques semaines avant d'évaluer l'effet d'une action, et rappelle que tous les changements ne produisent pas d'effet visible ([Google Search Central](${S.googleStarter.href})).

Méfiez-vous donc de toute promesse de délai précis. Google conseille d'ailleurs de demander à un consultant quels résultats il attend, **et dans quel délai**, avant de le choisir ([Google Search Central](${S.googleSeo.href})) : la réponse doit être argumentée, pas garantie.`,
    },
    {
      h2: 'Pourquoi certaines actions sont-elles rapides et d’autres lentes ?',
      corps: `Parce qu'elles ne passent pas par les mêmes étapes. Une action n'a d'effet qu'après trois choses : le passage du robot sur la page, la mise à jour de l'index, puis la réévaluation de la page face à ses concurrentes.

- **Rapide** : corriger un titre, débloquer une page exclue par erreur, réparer une redirection. Dès que le robot repasse, l'effet peut apparaître.
- **Moyen** : réécrire une page, renforcer le maillage interne, publier une page qui répond mieux à une question. Il faut que Google la réexplore puis la compare.
- **Lent** : gagner en notoriété, obtenir des liens d'autres sites, construire une rubrique complète sur un sujet. Ces effets s'accumulent sur des mois.

Ce que j'observe sur les sites que je suis : un site neuf ou peu exploré met plus de temps à réagir qu'un site déjà bien visité par les robots.`,
    },
    {
      h2: 'Comment mesurer sans se tromper ?',
      corps: `En comparant des périodes comparables, page par page. Dans la Search Console, comparez les impressions et les clics des pages modifiées sur plusieurs semaines, avant et après, en tenant compte des saisons.

Deux pièges fréquents : juger trop tôt, au bout de quelques jours, et attribuer une hausse à la dernière action alors qu'elle vient d'une autre. Notez la date de chaque modification : c'est ce qui permet ensuite de relier une évolution à sa cause.

Pour la visibilité dans les IA, le délai dépend d'autres facteurs. Voir [combien de temps pour être cité par ChatGPT](/reponses/combien-de-temps-pour-etre-cite-par-chatgpt).`,
    },
  ],
  tableau: {
    titre: 'Quel délai pour quelle action ?',
    colonnes: ['Type d’action', 'Exemples', 'Délai habituel'],
    lignes: [
      ['Correction technique ciblée', 'Page débloquée, titre corrigé, redirection réparée', 'Dès le passage du robot'],
      ['Amélioration de contenu', 'Page réécrite, réponse plus claire, maillage interne', 'Quelques semaines à évaluer'],
      ['Notoriété et autorité', 'Liens d’autres sites, mentions, rubrique complète', 'Plusieurs mois'],
      ['Évaluation d’un changement', 'Comparaison avant et après dans la Search Console', 'Attendre quelques semaines (Google)'],
    ],
  },
  sources: [S.googleStarter, S.googleSeo],
  fiche: {
    href: '/prestations/consultant-seo-geo',
    label: 'Consultant SEO et GEO',
    texte:
      "Je classe les actions par impact et par délai dans un **audit SEO et GEO**, pour que vous sachiez ce qui peut bouger vite et ce qui demande de la patience.",
  },
  faq: [
    {
      q: 'Un consultant peut-il garantir un délai ?',
      a: `Non. Google indique que les délais varient de quelques heures à plusieurs mois selon les changements ([Google Search Central](${S.googleStarter.href})). Un consultant peut estimer, pas garantir.`,
    },
    {
      q: 'Faut-il arrêter si rien ne bouge après un mois ?',
      a: "Pas forcément. Vérifiez d'abord que les pages modifiées ont été réexplorées (inspection d'URL dans la Search Console). Si elles l'ont été et que rien ne bouge après quelques semaines, il faut revoir l'action, pas l'abandonner par principe.",
    },
    {
      q: 'Le GEO donne-t-il des résultats plus vite que le SEO ?',
      a: "Pas forcément. Les IA cherchent au moment de la question, donc une page bien explorée peut être reprise rapidement. Mais elles s'appuient sur les mêmes index que la recherche classique : sans exploration ni indexation, il n'y a rien à citer. Les deux avancent ensemble.",
    },
  ],
  voirAussi: ['combien-de-temps-pour-etre-cite-par-chatgpt', 'difference-seo-geo', 'part-de-voix-dans-les-ia'],
  publie: '2026-10-04',
}

export default r
