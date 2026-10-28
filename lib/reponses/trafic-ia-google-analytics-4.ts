import type { Reponse } from './types'
import { S } from './sources'

const r: Reponse = {
  slug: 'trafic-ia-google-analytics-4',
  question: 'Comment voir le trafic venant de ChatGPT dans Google Analytics 4 ?',
  theme: 'Mesure et délais',
  titre: 'Comment voir le trafic venant de ChatGPT dans Google Analytics 4 ?',
  metaDescription:
    "Le canal « Assistant IA » de GA4 regroupe les visites venues de ChatGPT, Gemini, Copilot ou Grok. Où le trouver, ce qu'il ne compte pas, et comment créer votre propre canal IA.",
  reponse:
    "Dans Google Analytics 4, ouvrez **Rapports, Acquisition, Acquisition de trafic** et regardez le canal **« Assistant IA »**. Google y range les visites venues d'assistants comme **ChatGPT, Gemini, Copilot ou Grok**. Ce canal ne compte pas les AI Overviews ni le AI Mode de Google, et une partie des visites issues des IA arrive sans référent, en accès direct.",
  sections: [
    {
      h2: 'Qu’est-ce que le canal « Assistant IA » de GA4 ?',
      corps: `C'est un canal du **groupe de canaux par défaut** de Google Analytics 4. Google le décrit comme le canal par lequel les visiteurs arrivent depuis des sources comme **ChatGPT, Gemini, Deepseek, Copilot ou Grok**. Quand le site d'où vient le visiteur figure dans la liste des assistants IA connue de Google, GA4 règle le support sur « ai-assistant » et la visite tombe dans ce canal ([Google Analytics](${S.ga4Canaux.href})).

Vous n'avez rien à installer. Le rapport **Acquisition de trafic** affiche ce canal à côté de la recherche naturelle, des sites référents et de l'accès direct. Ajoutez la dimension **Source de session** pour séparer chatgpt.com, gemini.google.com ou copilot.microsoft.com, et croisez avec la **page de destination** pour savoir quelles pages les IA envoient.`,
    },
    {
      h2: 'Quelles visites venues des IA ce canal ne compte-t-il pas ?',
      corps: `Trois catégories lui échappent.

1. **Les AI Overviews et le AI Mode de Google.** Google les exclut explicitement du canal « Assistant IA » ([Google Analytics](${S.ga4Canaux.href})). Ces visites restent dans la recherche naturelle de Google. Côté Search Console, Google indique que le trafic issu de ses fonctionnalités IA est compté dans le rapport Performances, type de recherche « Web » ([Google Search Central](${S.googleIa.href})).
2. **Les visites sans référent.** Un lien copié dans un e-mail, ouvert depuis une application ou depuis certains navigateurs arrive sans site d'origine. GA4 le classe alors en **accès direct**, qui regroupe les sources « (direct) » ([Google Analytics](${S.ga4Canaux.href})).
3. **Les assistants absents de la liste de Google.** Google ne publie pas cette liste en entier. Si Perplexity ou Claude n'apparaissent pas dans votre canal « Assistant IA », regardez s'ils tombent dans les sites référents.

Ce que j'observe sur les sites que je suis : les liens cités par ChatGPT arrivent souvent avec un paramètre **utm_source=chatgpt.com** dans l'adresse, ce qui aide à les retrouver même quand le référent manque.`,
    },
    {
      h2: 'Comment créer votre propre canal IA dans GA4 ?',
      corps: `Avec un **groupe de canaux personnalisé**, qui regroupe tous les assistants dans un seul canal que vous contrôlez. Le chemin : **Administration, Affichage des données, Groupes de canaux**, puis copiez le groupe par défaut ([Google Analytics](${S.ga4CanauxPerso.href})).

1. Ajoutez un canal « IA » dont la condition porte sur la **source** : chatgpt, perplexity, claude, gemini, copilot.
2. **Placez-le avant le canal Site référent.** Google applique le premier canal dont la visite remplit les conditions : un canal IA placé après les sites référents ne recevrait rien.
3. Enregistrez. Le groupe personnalisé s'applique aussi à vos données passées dans les rapports.

Une propriété standard accepte **deux groupes personnalisés** en plus du groupe par défaut, avec 50 canaux au plus par groupe ([Google Analytics](${S.ga4CanauxPerso.href})). Le trafic ne dit pas tout : pour savoir si les IA vous citent sans qu'on clique, il faut aussi mesurer votre [part de voix](/reponses/part-de-voix-dans-les-ia).`,
    },
  ],
  tableau: {
    titre: 'Où retrouver le trafic des IA dans Google Analytics 4',
    colonnes: ['Origine de la visite', 'Canal GA4 par défaut', 'Comment l’isoler'],
    lignes: [
      ['ChatGPT, Gemini, Copilot, Grok, Deepseek', 'Assistant IA', 'Source de session dans Acquisition de trafic'],
      ['Assistant absent de la liste de Google', 'Site référent, en général', 'Canal IA personnalisé sur la source'],
      ['AI Overviews et AI Mode de Google', 'Recherche naturelle', 'Pas séparable dans GA4 ; Search Console, type « Web »'],
      ['Lien copié, application, référent masqué', 'Accès direct', 'Paramètre utm_source quand il est présent'],
    ],
  },
  sources: [S.ga4Canaux, S.ga4CanauxPerso, S.googleIa],
  fiche: {
    href: '/prestations/audit-geo',
    label: 'Audit GEO',
    texte:
      "Je mets en place le suivi du trafic venu des IA dans GA4 et je le croise avec le relevé de vos citations lors d'un **audit GEO**.",
  },
  faq: [
    {
      q: 'Le canal « Assistant IA » compte-t-il les clics depuis les AI Overviews ?',
      a: "Non. Google exclut les AI Overviews et le AI Mode de ce canal. Ces visites restent comptées dans la recherche naturelle de Google.",
    },
    {
      q: 'Peut-on appliquer un canal IA personnalisé aux données passées ?',
      a: "Oui pour les rapports : Google indique que les groupes de canaux personnalisés s'appliquent rétroactivement. Les audiences, elles, ne sont pas recalculées.",
    },
    {
      q: 'Peu de visites venues des IA veut-il dire que les IA ne me citent pas ?',
      a: "Non. Une IA peut vous citer sans que l'utilisateur clique. Le trafic mesure les clics ; la [part de voix](/reponses/part-de-voix-dans-les-ia) mesure les citations.",
    },
  ],
  voirAussi: ['part-de-voix-dans-les-ia', 'ai-overviews-baisse-de-trafic', 'combien-de-temps-pour-etre-cite-par-chatgpt'],
  publie: '2026-10-28',
}

export default r
