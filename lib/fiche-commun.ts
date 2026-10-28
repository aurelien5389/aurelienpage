// Textes et sources partagés par les fiches prestation et formation.
import { availability } from '@/config/availability'

export const SRC = {
  googleIa: { href: 'https://developers.google.com/search/docs/appearance/ai-features', label: 'Google Search Central : fonctionnalités IA et votre site' },
  googleSeo: { href: 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo', label: 'Google Search Central : faire appel à un expert SEO' },
  openai: { href: 'https://developers.openai.com/api/docs/bots', label: 'OpenAI : robots et user-agents' },
  anthropic: { href: 'https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler', label: 'Anthropic : robots de Claude' },
  perplexity: { href: 'https://docs.perplexity.ai/guides/bots', label: 'Perplexity : robots' },
  googleAdsBudget: { href: 'https://support.google.com/google-ads/answer/6385083?hl=fr', label: 'Aide Google Ads : budgets quotidiens moyens' },
  l6316: { href: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048600506', label: 'Légifrance : article L6316-1 du Code du travail' },
  arxivGeo: { href: 'https://arxiv.org/abs/2311.09735', label: 'Aggarwal et al., « GEO: Generative Engine Optimization », arXiv (KDD 2024)' },
  openaiSearch: { href: 'https://help.openai.com/en/articles/9237897-chatgpt-search', label: 'Aide OpenAI : rechercher sur le web avec ChatGPT' },
  bingGuidelines: { href: 'https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a', label: 'Bing Webmaster Tools : Webmaster Guidelines' },
  indexnow: { href: 'https://www.indexnow.org/documentation', label: 'IndexNow : documentation du protocole' },
  gbpLocal: { href: 'https://support.google.com/business/answer/7091?hl=fr', label: 'Aide Google Business Profile : améliorer son classement local' },
}

// Déroulé commun d'une mission, quel que soit le lieu (pages de zones)
export const DEROULE_ZONE = [
  {
    titre: 'Diagnostic offert',
    duree: '30 minutes',
    livrable: "premières pistes et périmètre de l'audit",
    texte: 'En visioconférence, ou en face à face quand vous êtes dans ma zone de déplacement. Nous regardons votre site, vos objectifs et vos concurrents.',
  },
  {
    titre: 'Accès aux outils',
    duree: 'au démarrage',
    livrable: 'liste des accès nécessaires',
    texte: 'Google Search Console, outil d’audience, CMS si j’interviens directement. Les accès sont donnés en lecture ou en écriture selon ce que nous décidons.',
  },
  {
    titre: 'Audit SEO et GEO',
    duree: 'selon la taille du site, précisée dans le devis',
    livrable: 'rapport d’audit et relevé de visibilité dans les IA',
    texte: 'Exploration, indexation, accès des robots de Google, de Bing et des IA, mots-clés, contenus, relevé de qui est cité par les IA sur les questions de vos clients.',
  },
  {
    titre: "Restitution et plan d'action",
    duree: 'une réunion',
    livrable: "plan d'action classé par impact et par effort",
    texte: 'Dans vos locaux ou en visioconférence. Vous appliquez les actions seul, avec votre équipe ou avec moi en suivi mensuel.',
  },
]

export const TARIF_ZONE =
  '**Audit SEO et GEO : 800 à 2 500 €** selon la taille du site. **Suivi mensuel : 500 à 2 000 € par mois**, au-delà sur devis. Formations et Google Ads : sur devis. Le lieu ne change pas le prix ; seuls les éventuels frais de déplacement s’ajoutent'

export const OUTILS_ZONE = ['Google Search Console', 'Google Analytics 4', 'Screaming Frog', 'Semrush', 'Ahrefs', 'Looker Studio', 'Balise']

// Parcours vérifiable (section Expériences de l'accueil), sans nom d'employeur ni de client
export const PARCOURS =
  "Je fais du **SEO et du SEA depuis 2020**, en agence, pour un groupe de presse professionnelle et en freelance. Avant cela, j'ai été journaliste web et rédacteur de 2012 à 2019 : écrire des contenus que l'on lit et que l'on reprend, c'est mon premier métier."

export const BALISE =
  "Pour mesurer la visibilité dans les IA, j'utilise **Balise**, un outil que j'ai construit. Il relève les réponses des IA sur une liste de questions, les croise avec les données de la Search Console et de DataForSEO, et suit leur évolution dans le temps."

export const METHODE =
  "Chaque recommandation s'appuie sur la documentation officielle de Google, Bing, OpenAI, Anthropic ou Perplexity, ou sur une mesure faite sur votre site. Je ne promets ni position ni nombre de citations."

export const DIAGNOSTIC = 'Premier contact : un **diagnostic offert de 30 minutes**, à réserver en ligne.'

export const DEMARRAGE = `Démarrage : ${availability.detail.charAt(0).toLowerCase()}${availability.detail.slice(1)}.`

export const FINANCEMENT_CONSEIL = 'Prestation de conseil, pas une formation : non éligible au CPF'

export const FINANCEMENT_FORMATION =
  "Non finançable par le CPF, un OPCO, France Travail, l'État ou la région : ces financements exigent une certification qualité (Qualiopi) que je n'ai pas à ce jour ([article L6316-1 du Code du travail](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048600506)). L'entreprise peut financer la formation sur son propre budget"

export const PROVIDER_AREA = { '@type': 'Country', name: 'France' }
