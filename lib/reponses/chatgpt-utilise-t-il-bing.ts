import type { Reponse } from './types'
import { S } from './sources'

const r: Reponse = {
  slug: 'chatgpt-utilise-t-il-bing',
  question: "ChatGPT s'appuie-t-il sur Bing pour chercher sur le web ?",
  theme: 'Moteurs et IA',
  titre: "ChatGPT s'appuie-t-il sur Bing pour chercher sur le web ?",
  metaDescription:
    "ChatGPT cherche avec son propre robot, OAI-SearchBot, et s'appuie parfois sur des fournisseurs de recherche tiers. Ce qu'OpenAI dit vraiment, et ce qu'il faut faire.",
  reponse:
    "En partie, sans qu'OpenAI le dise en ces termes. ChatGPT explore le web avec son propre robot, **OAI-SearchBot**, et s'appuie **parfois sur des fournisseurs de recherche tiers**. Son aide renvoie à la politique de confidentialité de Microsoft, qui exploite Bing. Pour être cité, soignez donc à la fois l'accès d'OAI-SearchBot et votre présence dans Bing.",
  sections: [
    {
      h2: "Que dit OpenAI sur le fonctionnement de la recherche de ChatGPT ?",
      corps: `OpenAI décrit un fonctionnement en deux temps. Quand ChatGPT cherche sur le web, il réécrit souvent la question en une ou plusieurs requêtes ciblées et les envoie à des **fournisseurs de recherche partenaires** ; après une première lecture des résultats, il peut relancer des requêtes plus précises auprès d'autres fournisseurs ([Aide OpenAI](${S.openaiSearch.href})).

La même page renvoie, pour le traitement de ces requêtes, aux politiques de confidentialité des fournisseurs concernés, dont celle de **Microsoft** ([Aide OpenAI](${S.openaiSearch.href})). Microsoft exploite Bing. OpenAI ne détaille pas, dans cette aide, quel fournisseur répond à quelle requête.

En parallèle, OpenAI a son propre robot de recherche, **OAI-SearchBot**, qui sert à faire apparaître les sites dans les fonctions de recherche de ChatGPT ([OpenAI](${S.openai.href})).`,
    },
    {
      h2: 'Comment rendre son site éligible aux réponses de ChatGPT ?',
      corps: `En laissant passer OAI-SearchBot, à deux niveaux. OpenAI demande d'autoriser OAI-SearchBot à explorer le site, et de vérifier que l'hébergeur ou le réseau de diffusion (CDN) **laisse passer le trafic venant des adresses IP** publiées par OpenAI ([Aide OpenAI](${S.openaiSearch.href})).

Le robots.txt ne suffit donc pas : un pare-feu ou une protection anti-robots peut bloquer OAI-SearchBot sans que vous le sachiez. OpenAI précise aussi qu'un site qui bloque OAI-SearchBot n'apparaît pas dans les réponses de recherche, sauf comme simple lien de navigation ([OpenAI](${S.openai.href})).

Enfin, OpenAI indique que ChatGPT classe les résultats selon plusieurs facteurs, pensés pour aider l'utilisateur à trouver une information pertinente et fiable, et que **le placement n'est pas garanti** ([Aide OpenAI](${S.openaiSearch.href})).`,
    },
    {
      h2: 'Faut-il donc travailler son référencement sur Bing ?',
      corps: `Oui, et c'est souvent négligé. En France, beaucoup de sites ne regardent que Google. Si une partie des recherches de ChatGPT passe par un fournisseur tiers, une page absente de son index a moins de chances d'être trouvée.

Trois actions simples :

1. **Inscrire le site sur Bing Webmaster Tools**, qui permet d'importer les sites déjà vérifiés dans la Google Search Console ([Bing](${S.bingImport.href})).
2. **Soumettre le sitemap** et vérifier les pages indexées par Bing.
3. **Activer IndexNow**, un protocole soutenu par Microsoft Bing, pour signaler chaque page publiée ou modifiée sans attendre le passage du robot ([IndexNow](${S.indexnow.href})).

Côté Copilot, l'assistant de Microsoft, Bing propose aussi des balises propres aux réponses générées : NOARCHIVE retire une page des réponses de chat ([Bing](${S.bingChat.href})). À éviter, donc, si vous voulez être cité.`,
    },
  ],
  tableau: {
    titre: 'Que faire pour ChatGPT et pour Bing ?',
    colonnes: ['Action', 'Pourquoi', 'Source'],
    lignes: [
      ['Autoriser OAI-SearchBot dans le robots.txt', 'Sans lui, pas de place dans les réponses de recherche', 'OpenAI'],
      ['Autoriser les IP d’OpenAI dans le pare-feu ou le CDN', 'OpenAI le demande explicitement', 'Aide OpenAI'],
      ['Inscrire le site sur Bing Webmaster Tools', 'ChatGPT s’appuie parfois sur des fournisseurs tiers, dont Microsoft', 'Aide OpenAI'],
      ['Éviter la balise NOARCHIVE', 'Elle retire la page des réponses de chat de Bing', 'Bing'],
      ['Publier des pages fiables et précises', 'ChatGPT classe selon la pertinence et la fiabilité', 'Aide OpenAI'],
    ],
  },
  sources: [S.openaiSearch, S.openai, S.bingChat, S.bingImport, S.indexnow],
  fiche: {
    href: '/prestations/consultant-seo-geo',
    label: 'Consultant SEO et GEO',
    texte:
      "Je vérifie l'accès d'OAI-SearchBot, votre indexation dans Bing et votre visibilité dans les réponses de ChatGPT lors d'un **audit SEO et GEO**.",
  },
  faq: [
    {
      q: 'Être bien classé sur Google suffit-il pour ChatGPT ?',
      a: "Non. ChatGPT utilise son propre robot et des fournisseurs de recherche tiers. Un site bien classé sur Google peut être bloqué pour OAI-SearchBot ou mal indexé ailleurs.",
    },
    {
      q: "ChatGPT cite-t-il toujours ses sources ?",
      a: `Quand il cherche sur le web, ChatGPT affiche des citations. OpenAI rappelle qu'elles peuvent être incomplètes ou inexactes et invite à ouvrir la source pour vérifier ([Aide OpenAI](${S.openaiSearch.href})).`,
    },
  ],
  voirAussi: ['robots-ia-faut-il-les-bloquer', 'combien-de-temps-pour-etre-cite-par-chatgpt', 'qu-est-ce-que-le-geo'],
  publie: '2026-10-04',
}

export default r
