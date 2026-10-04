import type { Reponse } from './types'
import { S } from './sources'

const r: Reponse = {
  slug: 'faut-il-creer-un-fichier-llms-txt',
  question: 'Faut-il créer un fichier llms.txt ?',
  theme: 'Robots et technique',
  titre: 'Faut-il créer un fichier llms.txt ?',
  metaDescription:
    "llms.txt : ce que c'est, ce qu'en disent Google, OpenAI, Anthropic et Perplexity, et s'il faut en créer un. Réponse sourcée.",
  reponse:
    "Ce n'est pas nécessaire. Google écrit qu'aucun fichier spécial n'est requis pour apparaître dans ses fonctionnalités IA, et **llms.txt reste une proposition**, pas un standard. Je n'ai trouvé aucune documentation d'OpenAI, d'Anthropic ou de Perplexity indiquant que leurs moteurs l'utilisent. Le créer coûte peu, mais ce n'est pas une priorité.",
  sections: [
    {
      h2: "Qu'est-ce que le fichier llms.txt ?",
      corps: `C'est un fichier texte, placé à la racine d'un site, qui résume le site pour les modèles de langage. Il a été proposé par Jeremy Howard en 2024, et son site officiel le présente comme **une proposition de standardisation** ([llmstxt.org](${S.llmstxt.href})).

Le format est du Markdown : un titre avec le nom du site (seule partie obligatoire), un court résumé en citation, puis des sections avec des listes de liens vers les pages importantes, chacune suivie d'une note. L'idée : donner aux IA une porte d'entrée claire, sans menus ni scripts.`,
    },
    {
      h2: 'Les moteurs d’IA l’utilisent-ils ?',
      corps: `Rien ne le confirme dans leur documentation. Google est le plus explicite : pour apparaître dans les AI Overviews et le AI Mode, vous n'avez pas besoin de créer de nouveaux fichiers lisibles par les machines, de fichiers texte pour l'IA ni de balisage particulier ([Google Search Central](${S.googleIa.href})).

OpenAI, Anthropic et Perplexity documentent leurs robots et la façon de les contrôler. Leurs pages parlent du **robots.txt**, pas du llms.txt ([OpenAI](${S.openai.href}), [Anthropic](${S.anthropic.href}), [Perplexity](${S.perplexity.href})). Je n'y ai trouvé aucune mention d'une lecture de llms.txt par leurs moteurs de recherche.`,
    },
    {
      h2: 'Faut-il quand même en créer un ?',
      corps: `Si tout le reste est fait, pourquoi pas. Le fichier se rédige vite et ne présente pas de risque connu. J'en publie un sur ce site, comme on garde une porte ouverte.

Mais il passe après ce qui a un effet documenté :

1. Laisser passer les robots de recherche des IA (voir [quels robots d'IA explorent mon site](/reponses/robots-ia-faut-il-les-bloquer)).
2. Faire indexer vos pages par Google et Bing.
3. Publier des pages qui répondent clairement aux questions de vos clients, avec sources et auteur.`,
    },
    {
      h2: 'Comment rédiger un fichier llms.txt ?',
      corps: `En suivant le format proposé sur llmstxt.org, en cinq étapes ([llmstxt.org](${S.llmstxt.href})).

1. Créez un fichier texte nommé **llms.txt** à la racine du site, à côté du robots.txt.
2. Écrivez en première ligne un titre Markdown avec le nom du site ou de l'entreprise.
3. Ajoutez un résumé en citation : qui vous êtes, ce que vous faites, où. Deux ou trois phrases factuelles suffisent.
4. Regroupez vos pages clés en sections (prestations, guides, contact), sous forme de listes de liens, chacun suivi d'une phrase qui dit ce que contient la page.
5. Mettez-le à jour quand vous ajoutez ou retirez une page importante.

Restez sobre : ce fichier n'est pas un endroit pour placer des mots-clés. S'il est lu, il l'est par une machine qui cherche à comprendre votre site, pas par un moteur qui compte des occurrences.`,
    },
  ],
  tableau: {
    titre: 'Que retenir sur llms.txt ?',
    colonnes: ['Question', 'Réponse'],
    lignes: [
      ['Statut', 'Proposition, pas un standard (llmstxt.org)'],
      ['Exigé par Google pour ses fonctionnalités IA', 'Non'],
      ['Utilisation documentée par OpenAI, Anthropic, Perplexity', 'Aucune trouvée'],
      ['Fichier qui contrôle l’accès des robots', 'robots.txt, pas llms.txt'],
      ['Risque à le créer', 'Aucun connu'],
      ['Priorité', 'Après l’accès des robots, l’indexation et les contenus'],
    ],
  },
  sources: [S.llmstxt, S.googleIa, S.openai, S.anthropic, S.perplexity],
  fiche: {
    href: '/formation-geo',
    label: 'Formation GEO',
    texte:
      "Vous voulez que votre équipe sache trier ce qui compte vraiment pour les IA, et ce qui relève de la rumeur ? C'est l'objet de ma **formation GEO**.",
  },
  faq: [
    {
      q: 'llms.txt remplace-t-il robots.txt ?',
      a: `Non. Le robots.txt indique aux robots ce qu'ils ont le droit d'explorer, et c'est lui que les éditeurs d'IA documentent ([OpenAI](${S.openai.href})). Le llms.txt propose seulement un résumé du site.`,
    },
    {
      q: 'Que mettre dans un fichier llms.txt ?',
      a: `Le nom du site en titre, un résumé de deux ou trois phrases, puis vos pages clés en listes de liens, chacune avec une phrase d'explication ([llmstxt.org](${S.llmstxt.href})).`,
    },
  ],
  voirAussi: ['robots-ia-faut-il-les-bloquer', 'qu-est-ce-que-le-geo', 'contenu-ia-penalise-par-google'],
  publie: '2026-10-04',
}

export default r
