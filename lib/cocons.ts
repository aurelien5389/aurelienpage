// Cocons sémantiques : chaque page de contenu appartient à un seul dossier.
// Une page mère (guide de départ), des pages filles, une fiche commerciale liée.
// CoconNav en tire le maillage : montée vers la mère, liens entre sœurs, renvoi vers la fiche.
import type { InternalLink } from '@/lib/internal-links'

export interface Cocon {
  id: string
  famille: 'GEO' | 'SEO'
  titre: string
  mere: InternalLink
  pages: InternalLink[]
  fiche: InternalLink
  /** Page locale liée */
  local: InternalLink
}

export const COCONS: Cocon[] = [
  {
    id: 'geo-comprendre',
    famille: 'GEO',
    titre: 'Comprendre le GEO',
    mere: { href: '/reponses/qu-est-ce-que-le-geo', label: "Qu'est-ce que le GEO (Generative Engine Optimization) ?" },
    pages: [
      { href: '/reponses/difference-seo-geo', label: 'Quelle différence entre SEO et GEO ?' },
      { href: '/reponses/difference-ai-overviews-ai-mode', label: 'Quelle différence entre AI Overviews et AI Mode ?' },
      { href: '/blog/ia-search-moteurs-reponses', label: 'Comment adapter sa stratégie SEO à la recherche par IA ?' },
      { href: '/reponses/ai-overviews-baisse-de-trafic', label: 'Les AI Overviews font-elles baisser le trafic ?' },
      { href: '/blog/lexique-geo', label: 'Lexique GEO : les termes de la recherche par IA' },
      { href: '/ressources/positions-officielles-ia', label: 'Ressource : ce que disent officiellement Google, OpenAI, Anthropic, Perplexity et Microsoft' },
    ],
    fiche: { href: '/formation-geo', label: 'Formation GEO pour les équipes marketing' },
    local: { href: '/consultant-geo-rennes', label: 'Consultant GEO à Rennes' },
  },
  {
    id: 'geo-etre-cite',
    famille: 'GEO',
    titre: 'Être cité par les IA',
    mere: { href: '/blog/chatgpt-search-geo', label: 'Comment être cité par ChatGPT et Perplexity ?' },
    pages: [
      { href: '/reponses/comment-etre-cite-par-chatgpt-et-perplexity', label: 'Être cité par ChatGPT et Perplexity : la réponse courte' },
      { href: '/reponses/comment-etre-cite-par-claude', label: 'Comment être cité par Claude ?' },
      { href: '/blog/geo-ia-search-ai-overviews', label: 'Comment apparaître dans les AI Overviews de Google ?' },
      { href: '/reponses/chatgpt-utilise-t-il-bing', label: "ChatGPT s'appuie-t-il sur Bing ?" },
      { href: '/blog/site-absent-reponses-chatgpt', label: "Pourquoi mon site n'apparaît-il pas dans ChatGPT ?" },
      { href: '/blog/structurer-contenu-geo', label: 'Comment rédiger un contenu que les IA reprennent ?' },
      { href: '/reponses/robots-ia-faut-il-les-bloquer', label: "Quels robots d'IA explorent mon site ?" },
      { href: '/ressources/robots-ia', label: "Ressource : référentiel des robots d'IA et modèles de robots.txt" },
      { href: '/ressources/plan-geo-30-jours', label: 'Ressource : plan GEO en 30 jours' },
      { href: '/ressources/gabarit-page-reponse', label: 'Ressource : gabarit de page que les IA peuvent citer' },
      { href: '/reponses/faut-il-creer-un-fichier-llms-txt', label: 'Faut-il créer un fichier llms.txt ?' },
      { href: '/reponses/donnees-structurees-ia', label: 'Les données structurées aident-elles à être cité ?' },
      { href: '/reponses/contenu-ia-penalise-par-google', label: "Le contenu rédigé avec l'IA est-il pénalisé ?" },
    ],
    fiche: { href: '/prestations/consultant-seo-geo', label: 'Consultant SEO et GEO' },
    local: { href: '/consultant-geo-rennes', label: 'Consultant GEO à Rennes' },
  },
  {
    id: 'geo-mesurer',
    famille: 'GEO',
    titre: 'Mesurer et auditer sa visibilité dans les IA',
    mere: { href: '/blog/mesurer-visibilite-geo', label: 'Comment mesurer la visibilité de sa marque dans les IA ?' },
    pages: [
      { href: '/blog/audit-geo-etape-par-etape', label: 'Comment faire un audit GEO, étape par étape ?' },
      { href: '/ressources/checklist-geo', label: 'Ressource : checklist GEO en 25 points' },
      { href: '/ressources/modele-releve-geo', label: 'Ressource : modèle de relevé de part de voix' },
      { href: '/ressources/questions-geo-par-secteur', label: 'Ressource : questions à suivre, secteur par secteur' },
      { href: '/reponses/part-de-voix-dans-les-ia', label: "Qu'est-ce que la part de voix dans les IA ?" },
      { href: '/reponses/trafic-ia-google-analytics-4', label: 'Voir le trafic venant de ChatGPT dans GA4' },
      { href: '/reponses/combien-de-temps-pour-etre-cite-par-chatgpt', label: 'Combien de temps pour être cité par ChatGPT ?' },
      { href: '/reponses/difference-audit-seo-audit-geo', label: 'Quelle différence entre un audit SEO et un audit GEO ?' },
    ],
    fiche: { href: '/prestations/audit-geo', label: 'Audit GEO' },
    local: { href: '/consultant-geo-rennes', label: 'Consultant GEO à Rennes' },
  },
  {
    id: 'seo-fondamentaux',
    famille: 'SEO',
    titre: 'Les fondamentaux du SEO',
    mere: { href: '/blog/quest-ce-que-le-seo', label: "Qu'est-ce que le SEO ? Définition, piliers et fonctionnement" },
    pages: [
      { href: '/blog/fonctionnement-moteurs-recherche', label: 'Comment fonctionnent les moteurs de recherche' },
      { href: '/blog/apprendre-le-seo-principes-debutants', label: 'Apprendre le SEO : les principes fondamentaux' },
      { href: '/blog/serp-typologies-intentions-recherche', label: 'SERP : typologies et intentions de recherche' },
      { href: '/blog/google-eeat', label: 'Google EEAT : définition et amélioration' },
      { href: '/blog/lexique-seo', label: 'Lexique SEO : 50 termes expliqués' },
      { href: '/blog/tendances-seo-2026', label: 'Tendances SEO : ce qui compte vraiment' },
      { href: '/reponses/formation-seo-cpf-opco', label: 'Une formation SEO est-elle finançable par le CPF ou l’OPCO ?' },
    ],
    fiche: { href: '/formation-seo', label: 'Formation SEO' },
    local: { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
  },
  {
    id: 'seo-technique',
    famille: 'SEO',
    titre: 'SEO technique',
    mere: { href: '/blog/seo-technique-core-web-vitals', label: 'SEO technique : les fondations d’un site bien référencé' },
    pages: [
      { href: '/blog/crawler-seo', label: 'Crawler SEO et profondeur de crawl' },
      { href: '/blog/indexabilite-seo', label: 'Indexabilité et budget de crawl' },
      { href: '/blog/robots-txt-meta-robots', label: 'Robots.txt et meta robots' },
      { href: '/blog/balise-canonique', label: 'Balise canonique' },
      { href: '/blog/codes-http-seo', label: 'Codes HTTP et SEO : 200, 301, 404, 410' },
      { href: '/blog/donnees-structurees-schema-org', label: 'Données structurées et Schema.org' },
      { href: '/blog/fil-ariane-seo', label: "Fil d'Ariane SEO" },
      { href: '/blog/page-orpheline-seo', label: 'Pages orphelines' },
      { href: '/blog/pagination-seo', label: 'Pagination et SEO' },
      { href: '/blog/analyse-logs-seo', label: 'Analyse de logs SEO' },
      { href: '/blog/google-search-console', label: 'Google Search Console : le guide complet' },
    ],
    fiche: { href: '/prestations/consultant-seo-geo', label: 'Audit SEO et GEO' },
    local: { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
  },
  {
    id: 'seo-contenu',
    famille: 'SEO',
    titre: 'Contenu et maillage',
    mere: { href: '/blog/strategie-contenu-seo', label: 'Stratégie de contenu SEO' },
    pages: [
      { href: '/blog/choisir-mots-cles-seo', label: 'Choisir les bons mots-clés' },
      { href: '/blog/seo-on-page-optimisation', label: 'SEO on-page : les éléments à optimiser' },
      { href: '/blog/cocon-semantique-maillage-interne', label: 'Cocon sémantique et maillage interne' },
      { href: '/blog/optimiser-liens-internes', label: 'Optimiser ses liens internes' },
      { href: '/blog/rediger-bon-article-blog', label: 'Rédiger un bon article de blog' },
      { href: '/blog/rediger-titre-seo', label: 'Rédiger un titre efficace' },
      { href: '/reponses/combien-de-mots-article-seo', label: 'Combien de mots pour un article SEO ?' },
      { href: '/blog/calendrier-editorial', label: 'Construire un calendrier éditorial' },
    ],
    fiche: { href: '/redaction-web', label: 'Rédaction web SEO' },
    local: { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
  },
  {
    id: 'redaction-web',
    famille: 'SEO',
    titre: 'Rédaction web',
    mere: { href: '/blog/techniques-redaction-web', label: 'Techniques de rédaction web' },
    pages: [
      { href: '/blog/formes-contenus-redaction-web', label: 'Les différentes formes de contenus' },
      { href: '/blog/fautes-orthographe-redaction-web', label: "Fautes d'orthographe en rédaction web" },
      { href: '/blog/copywriter-eviter-syndrome-page-blanche', label: 'Éviter le syndrome de la page blanche' },
    ],
    fiche: { href: '/redaction-web', label: 'Rédaction web SEO' },
    local: { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
  },
  {
    id: 'seo-pilotage',
    famille: 'SEO',
    titre: 'Audit, autorité et pilotage',
    mere: { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    pages: [
      { href: '/blog/erreurs-seo-frequentes', label: 'Les 10 erreurs SEO les plus fréquentes' },
      { href: '/blog/10-secrets-seo', label: '10 techniques SEO sous-exploitées' },
      { href: '/blog/reporting-seo-kpis', label: 'Reporting SEO : les KPIs qui comptent' },
      { href: '/reponses/combien-de-temps-resultats-seo', label: 'Combien de temps pour voir les résultats du SEO ?' },
      { href: '/blog/netlinking-backlinks-pagerank', label: 'Netlinking et backlinks' },
      { href: '/blog/netlinking-avance', label: 'Netlinking avancé' },
      { href: '/blog/seo-startups', label: 'SEO pour startups' },
    ],
    fiche: { href: '/accompagnement-seo', label: 'Accompagnement SEO mensuel' },
    local: { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
  },
  {
    id: 'seo-local',
    famille: 'SEO',
    titre: 'SEO et GEO local',
    mere: { href: '/blog/seo-local-google-my-business', label: 'SEO local et Google Business Profile' },
    pages: [
      { href: '/blog/entreprise-locale-recommandee-par-ia', label: 'Comment une entreprise locale peut-elle être recommandée par les IA ?' },
      { href: '/blog/choisir-consultant-seo-geo', label: 'Comment choisir un consultant SEO ou GEO ?' },
      { href: '/zones-intervention', label: "Zones d'intervention : Rennes, Bretagne, Pays de la Loire, à distance" },
      { href: '/consultant-seo-bretagne', label: 'Consultant SEO en Bretagne' },
      { href: '/consultant-seo-pays-de-la-loire', label: 'Consultant SEO en Pays de la Loire' },
      { href: '/consultant-seo-a-distance', label: 'Consultant SEO à distance, partout en France' },
    ],
    fiche: { href: '/zones-intervention', label: "Zones d'intervention" },
    local: { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
  },
  {
    id: 'metier',
    famille: 'SEO',
    titre: 'Le métier de consultant SEO',
    mere: { href: '/blog/devenir-consultant-seo-freelance', label: 'Comment devenir consultant SEO freelance ?' },
    pages: [
      { href: '/blog/optimiser-profil-malt', label: 'Optimiser son profil Malt' },
    ],
    fiche: { href: '/formation-seo', label: 'Formation SEO' },
    local: { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
  },
]

export function getCocon(path: string): Cocon | undefined {
  return COCONS.find((c) => c.mere.href === path || c.pages.some((p) => p.href === path))
}

/** Dossiers dont la fiche commerciale est cette page */
export function getCoconsDeFiche(path: string): Cocon[] {
  return COCONS.filter((c) => c.fiche.href === path)
}
