export interface InternalLink {
  href: string
  label: string
}

// Related links for each blog post slug
const BLOG_RELATED: Record<string, InternalLink[]> = {
  'seo-technique-core-web-vitals': [
    { href: '/blog/crawler-seo', label: 'Crawler SEO : fonctionnement et optimisation' },
    { href: '/blog/indexabilite-seo', label: 'Indexabilité SEO et crawl budget' },
    { href: '/blog/google-search-console', label: 'Google Search Console : guide complet' },
    { href: '/blog/donnees-structurees-schema-org', label: 'Données structurées et Schema.org' },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
  ],
  'crawler-seo': [
    { href: '/blog/seo-technique-core-web-vitals', label: 'SEO technique : les fondations indispensables' },
    { href: '/blog/indexabilite-seo', label: 'Indexabilité SEO et crawl budget' },
    { href: '/blog/robots-txt-meta-robots', label: 'Robots.txt et meta robots' },
    { href: '/blog/analyse-logs-seo', label: 'Analyse de logs SEO' },
  ],
  'indexabilite-seo': [
    { href: '/prestations/chef-de-projet-digital', label: "Chef de projet digital : piloter une refonte sans perdre de trafic" },
    { href: '/blog/crawler-seo', label: 'Crawler SEO : fonctionnement et optimisation' },
    { href: '/blog/pagination-seo', label: 'Pagination et SEO : gérer les pages /page/2' },
    { href: '/blog/robots-txt-meta-robots', label: 'Robots.txt et meta robots' },
    { href: '/blog/balise-canonique', label: 'Balise canonique : définition et bonnes pratiques' },
    { href: '/blog/seo-technique-core-web-vitals', label: 'SEO technique : les fondations' },
  ],
  'robots-txt-meta-robots': [
    { href: '/reponses/robots-ia-faut-il-les-bloquer', label: "Réponse : quels robots d'IA explorent mon site ?" },
    { href: '/blog/crawler-seo', label: 'Crawler SEO : fonctionnement et optimisation' },
    { href: '/blog/indexabilite-seo', label: 'Indexabilité SEO et crawl budget' },
    { href: '/blog/codes-http-seo', label: 'Codes HTTP et SEO' },
  ],
  'balise-canonique': [
    { href: '/blog/indexabilite-seo', label: 'Indexabilité SEO et crawl budget' },
    { href: '/blog/codes-http-seo', label: 'Codes HTTP et SEO' },
    { href: '/blog/seo-technique-core-web-vitals', label: 'SEO technique : les fondations' },
  ],
  'codes-http-seo': [
    { href: '/prestations/chef-de-projet-digital', label: "Chef de projet digital : piloter une refonte sans perdre de trafic" },
    { href: '/blog/crawler-seo', label: 'Crawler SEO : fonctionnement et optimisation' },
    { href: '/blog/balise-canonique', label: 'Balise canonique : définition et bonnes pratiques' },
    { href: '/blog/robots-txt-meta-robots', label: 'Robots.txt et meta robots' },
  ],
  'donnees-structurees-schema-org': [
    { href: '/reponses/donnees-structurees-ia', label: "Réponse : les données structurées aident-elles à être cité par les IA ?" },
    { href: '/blog/seo-on-page-optimisation', label: 'SEO on-page : éléments clés à optimiser' },
    { href: '/blog/geo-ia-search-ai-overviews', label: 'Comment apparaître dans les AI Overviews de Google' },
    { href: '/blog/seo-technique-core-web-vitals', label: 'SEO technique : les fondations' },
  ],
  'fil-ariane-seo': [
    { href: '/blog/cocon-semantique-maillage-interne', label: 'Cocon sémantique et maillage interne' },
    { href: '/blog/seo-technique-core-web-vitals', label: 'SEO technique : les fondations' },
    { href: '/blog/seo-on-page-optimisation', label: 'SEO on-page : éléments clés à optimiser' },
  ],
  'analyse-logs-seo': [
    { href: '/blog/crawler-seo', label: 'Crawler SEO : fonctionnement et optimisation' },
    { href: '/blog/indexabilite-seo', label: 'Indexabilité SEO et crawl budget' },
    { href: '/blog/seo-technique-core-web-vitals', label: 'SEO technique : les fondations' },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/blog/cocon-semantique-maillage-interne', label: 'Cocon sémantique et maillage interne' },
  ],
  'page-orpheline-seo': [
    { href: '/blog/cocon-semantique-maillage-interne', label: 'Cocon sémantique et maillage interne' },
    { href: '/blog/fil-ariane-seo', label: 'Fil d\'Ariane SEO' },
    { href: '/blog/seo-technique-core-web-vitals', label: 'SEO technique : les fondations' },
  ],
  'google-search-console': [
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/blog/seo-technique-core-web-vitals', label: 'SEO technique : les fondations' },
    { href: '/blog/indexabilite-seo', label: 'Indexabilité SEO et crawl budget' },
  ],
  'strategie-contenu-seo': [
    { href: '/blog/seo-startups', label: "SEO pour startups : stratégie et priorités" },
    { href: '/accompagnement-seo', label: "Accompagnement SEO mensuel" },
    { href: '/reponses/contenu-ia-penalise-par-google', label: "Réponse : le contenu rédigé avec l'IA est-il pénalisé ?" },
    { href: '/blog/choisir-mots-cles-seo', label: 'Comment choisir les bons mots-clés' },
    { href: '/blog/cocon-semantique-maillage-interne', label: 'Cocon sémantique et maillage interne' },
    { href: '/blog/rediger-bon-article-blog', label: 'Rédiger un bon article de blog' },
    { href: '/blog/calendrier-editorial', label: 'Calendrier éditorial : planifier sa stratégie' },
    { href: '/prestations/consultant-seo-geo', label: 'Prestations SEO & GEO · Aurélien PAGE' },
  ],
  'seo-on-page-optimisation': [
    { href: '/blog/choisir-mots-cles-seo', label: 'Comment choisir les bons mots-clés' },
    { href: '/blog/rediger-titre-seo', label: 'Comment rédiger un titre efficace (H1 et balise title)' },
    { href: '/blog/balise-canonique', label: 'Balise canonique : définition et bonnes pratiques' },
    { href: '/blog/donnees-structurees-schema-org', label: 'Données structurées et Schema.org' },
  ],
  'choisir-mots-cles-seo': [
    { href: '/blog/strategie-contenu-seo', label: 'Stratégie de contenu SEO' },
    { href: '/blog/serp-typologies-intentions-recherche', label: 'SERP : typologies et intentions de recherche' },
    { href: '/blog/cocon-semantique-maillage-interne', label: 'Cocon sémantique et maillage interne' },
  ],
  'rediger-titre-seo': [
    { href: '/blog/seo-on-page-optimisation', label: 'SEO on-page : éléments clés à optimiser' },
    { href: '/blog/choisir-mots-cles-seo', label: 'Comment choisir les bons mots-clés' },
    { href: '/blog/rediger-bon-article-blog', label: 'Rédiger un bon article de blog' },
    { href: '/blog/serp-typologies-intentions-recherche', label: 'SERP : typologies et intentions de recherche' },
  ],
  'rediger-bon-article-blog': [
    { href: '/reponses/combien-de-mots-article-seo', label: "Réponse : combien de mots pour un article SEO ?" },
    { href: '/blog/techniques-redaction-web', label: 'Techniques de rédaction web : améliorer son contenu' },
    { href: '/blog/strategie-contenu-seo', label: 'Stratégie de contenu SEO' },
    { href: '/blog/rediger-titre-seo', label: 'Comment rédiger un titre efficace (H1 et balise title)' },
  ],
  'calendrier-editorial': [
    { href: '/prestations/chef-de-projet-digital', label: "Chef de projet digital : piloter une refonte sans perdre de trafic" },
    { href: '/blog/strategie-contenu-seo', label: 'Stratégie de contenu SEO' },
    { href: '/blog/rediger-bon-article-blog', label: 'Rédiger un bon article de blog' },
    { href: '/blog/copywriter-eviter-syndrome-page-blanche', label: 'Copywriter : éviter le syndrome de la page blanche' },
  ],
  'copywriter-eviter-syndrome-page-blanche': [
    { href: '/blog/rediger-bon-article-blog', label: 'Rédiger un bon article de blog' },
    { href: '/blog/strategie-contenu-seo', label: 'Stratégie de contenu SEO' },
    { href: '/blog/calendrier-editorial', label: 'Calendrier éditorial : planifier sa stratégie' },
    { href: '/blog/formes-contenus-redaction-web', label: 'Les différentes formes de contenus en rédaction web' },
  ],
  '10-secrets-seo': [
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/blog/optimiser-liens-internes', label: 'Optimiser ses liens internes : méthode SEO' },
    { href: '/blog/erreurs-seo-frequentes', label: 'Les 10 erreurs SEO les plus fréquentes' },
    { href: '/blog/google-search-console', label: 'Google Search Console : guide complet' },
  ],
  'quest-ce-que-le-seo': [
    { href: '/blog/fonctionnement-moteurs-recherche', label: 'Comment fonctionnent les moteurs de recherche' },
    { href: '/blog/apprendre-le-seo-principes-debutants', label: 'Apprendre le SEO : principes fondamentaux' },
    { href: '/blog/lexique-seo', label: 'Lexique SEO : 50 termes essentiels' },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
  ],
  'lexique-seo': [
    { href: '/blog/quest-ce-que-le-seo', label: 'Qu\'est-ce que le SEO ?' },
    { href: '/blog/apprendre-le-seo-principes-debutants', label: 'Apprendre le SEO : principes fondamentaux' },
    { href: '/blog/fonctionnement-moteurs-recherche', label: 'Comment fonctionnent les moteurs de recherche' },
    { href: '/blog/serp-typologies-intentions-recherche', label: 'SERP : typologies et intentions de recherche' },
  ],
  'consultant-seo-freelance': [
    { href: '/pourquoi-consultant-seo', label: 'Pourquoi faire appel à un consultant SEO ?' },
    { href: '/cout-prestation-seo', label: 'Combien coûte une prestation SEO ?' },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
  ],
  'pagination-seo': [
    { href: '/blog/indexabilite-seo', label: 'Indexabilité SEO et crawl budget' },
    { href: '/blog/crawler-seo', label: 'Crawler SEO : fonctionnement et optimisation' },
    { href: '/blog/robots-txt-meta-robots', label: 'Robots.txt et meta robots' },
    { href: '/blog/seo-technique-core-web-vitals', label: 'SEO technique : les fondations' },
  ],
  'redacteur-web-rennes': [
    { href: '/blog/techniques-redaction-web', label: 'Techniques de rédaction web' },
    { href: '/blog/strategie-contenu-seo', label: 'Stratégie de contenu SEO' },
    { href: '/blog/rediger-bon-article-blog', label: 'Rédiger un bon article de blog' },
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
  ],
  'techniques-redaction-web': [
    { href: '/blog/fautes-orthographe-redaction-web', label: "Fautes d'orthographe en rédaction web" },
    { href: '/blog/rediger-bon-article-blog', label: 'Rédiger un bon article de blog' },
    { href: '/blog/strategie-contenu-seo', label: 'Stratégie de contenu SEO' },
    { href: '/blog/copywriter-eviter-syndrome-page-blanche', label: 'Copywriter : éviter le syndrome de la page blanche' },
    { href: '/blog/formes-contenus-redaction-web', label: 'Les différentes formes de contenus en rédaction web' },
  ],
  'formes-contenus-redaction-web': [
    { href: '/blog/techniques-redaction-web', label: 'Techniques de rédaction web : améliorer son contenu' },
    { href: '/blog/strategie-contenu-seo', label: 'Stratégie de contenu SEO' },
    { href: '/blog/rediger-bon-article-blog', label: 'Rédiger un bon article de blog' },
    { href: '/blog/calendrier-editorial', label: 'Calendrier éditorial : planifier sa stratégie' },
    { href: '/blog/cocon-semantique-maillage-interne', label: 'Cocon sémantique et maillage interne' },
    { href: '/blog/copywriter-eviter-syndrome-page-blanche', label: 'Éviter le syndrome de la page blanche' },
  ],
  'erreurs-seo-frequentes': [
    { href: '/blog/10-secrets-seo', label: "10 techniques SEO sous-exploitées qui font la différence" },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/blog/seo-technique-core-web-vitals', label: 'SEO technique : les fondations indispensables' },
    { href: '/blog/seo-on-page-optimisation', label: 'SEO on-page : éléments clés à optimiser' },
    { href: '/blog/netlinking-backlinks-pagerank', label: 'Netlinking et backlinks : construire votre autorité' },
    { href: '/blog/choisir-mots-cles-seo', label: 'Comment choisir les bons mots-clés' },
    { href: '/blog/analyse-logs-seo', label: 'Analyse de logs SEO : comprendre Googlebot' },
  ],
  'cocon-semantique-maillage-interne': [
    { href: '/blog/optimiser-liens-internes', label: 'Optimiser ses liens internes : méthode SEO' },
    { href: '/blog/fil-ariane-seo', label: 'Fil d\'Ariane SEO' },
    { href: '/blog/page-orpheline-seo', label: 'Pages orphelines en SEO' },
    { href: '/blog/strategie-contenu-seo', label: 'Stratégie de contenu SEO' },
  ],
  'optimiser-liens-internes': [
    { href: '/blog/cocon-semantique-maillage-interne', label: 'Cocon sémantique et maillage interne' },
    { href: '/blog/page-orpheline-seo', label: 'Pages orphelines en SEO' },
    { href: '/blog/fil-ariane-seo', label: 'Fil d\'Ariane SEO' },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
  ],
  'serp-typologies-intentions-recherche': [
    { href: '/prestations/traffic-manager-sea', label: "Traffic Manager SEA : Google Ads et Meta Ads" },
    { href: '/blog/choisir-mots-cles-seo', label: 'Comment choisir les bons mots-clés' },
    { href: '/blog/fonctionnement-moteurs-recherche', label: 'Comment fonctionnent les moteurs de recherche' },
    { href: '/blog/seo-on-page-optimisation', label: 'SEO on-page : éléments clés à optimiser' },
  ],
  'netlinking-backlinks-pagerank': [
    { href: '/blog/netlinking-avance', label: 'Netlinking avancé : PageRank sculpting' },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/blog/google-eeat', label: 'Google EEAT : définition et amélioration' },
    { href: '/prestations/consultant-seo-geo', label: 'Prestations SEO & GEO · Aurélien PAGE' },
  ],
  'netlinking-avance': [
    { href: '/blog/netlinking-backlinks-pagerank', label: 'Netlinking et backlinks : construire votre autorité' },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/blog/seo-technique-core-web-vitals', label: 'SEO technique : les fondations' },
  ],
  'geo-ia-search-ai-overviews': [
    { href: '/reponses/difference-ai-overviews-ai-mode', label: "Réponse : AI Overviews ou AI Mode, quelle différence ?" },
    { href: '/reponses/ai-overviews-baisse-de-trafic', label: "Réponse : les AI Overviews font-elles baisser le trafic ?" },
    { href: '/reponses/qu-est-ce-que-le-geo', label: "Réponse : qu'est-ce que le GEO ?" },
    { href: '/blog/ia-search-moteurs-reponses', label: 'Adapter sa stratégie SEO à la recherche par IA' },
    { href: '/reponses/difference-seo-geo', label: 'Quelle différence entre SEO et GEO ?' },
    { href: '/blog/structurer-contenu-geo', label: 'Comment rédiger un contenu que les IA reprennent' },
    { href: '/blog/google-eeat', label: 'Google EEAT : définition et amélioration' },
    { href: '/prestations/consultant-seo-geo', label: 'Consultant SEO & GEO · Aurélien PAGE' },
  ],
  'ia-search-moteurs-reponses': [
    { href: '/blog/tendances-seo-2026', label: "Tendances SEO : ce qui compte vraiment" },
    { href: '/reponses/faut-il-creer-un-fichier-llms-txt', label: "Réponse : faut-il créer un fichier llms.txt ?" },
    { href: '/blog/geo-ia-search-ai-overviews', label: 'Comment apparaître dans les AI Overviews de Google' },
    { href: '/reponses/difference-seo-geo', label: 'Quelle différence entre SEO et GEO ?' },
    { href: '/blog/chatgpt-search-geo', label: 'Comment être cité par ChatGPT et Perplexity' },
    { href: '/blog/google-eeat', label: 'Google EEAT : définition et amélioration' },
    { href: '/blog/fonctionnement-moteurs-recherche', label: 'Comment fonctionnent les moteurs de recherche' },
  ],
  'google-eeat': [
    { href: '/blog/geo-ia-search-ai-overviews', label: 'Comment apparaître dans les AI Overviews de Google' },
    { href: '/blog/strategie-contenu-seo', label: 'Stratégie de contenu SEO' },
    { href: '/blog/netlinking-backlinks-pagerank', label: 'Netlinking et backlinks : construire votre autorité' },
    { href: '/prestations/consultant-seo-geo', label: 'Prestations SEO & GEO · Aurélien PAGE' },
  ],
  'fonctionnement-moteurs-recherche': [
    { href: '/blog/apprendre-le-seo-principes-debutants', label: 'Apprendre le SEO : principes fondamentaux' },
    { href: '/blog/serp-typologies-intentions-recherche', label: 'SERP : typologies et intentions de recherche' },
    { href: '/blog/ia-search-moteurs-reponses', label: 'Adapter sa stratégie SEO à la recherche par IA' },
  ],
  'apprendre-le-seo-principes-debutants': [
    { href: '/blog/lexique-seo', label: 'Lexique SEO : 50 termes essentiels' },
    { href: '/blog/fonctionnement-moteurs-recherche', label: 'Comment fonctionnent les moteurs de recherche' },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/blog/seo-technique-core-web-vitals', label: 'SEO technique : les fondations' },
  ],
  'audit-seo': [
    { href: '/accompagnement-seo', label: "Accompagnement SEO mensuel" },
    { href: '/reponses/difference-audit-seo-audit-geo', label: "Réponse : audit SEO ou audit GEO, quelle différence ?" },
    { href: '/blog/seo-technique-core-web-vitals', label: 'SEO technique : les fondations' },
    { href: '/blog/google-search-console', label: 'Google Search Console : guide complet' },
    { href: '/blog/netlinking-backlinks-pagerank', label: 'Netlinking et backlinks : construire votre autorité' },
    { href: '/blog/erreurs-seo-frequentes', label: 'Les 10 erreurs SEO les plus fréquentes' },
    { href: '/pourquoi-consultant-seo', label: 'Pourquoi faire appel à un consultant SEO ?' },
    { href: '/cout-prestation-seo', label: 'Combien coûte une prestation SEO ?' },
  ],
  'devenir-consultant-seo-freelance': [
    { href: '/pourquoi-consultant-seo', label: 'Pourquoi faire appel à un consultant SEO ?' },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/cout-prestation-seo', label: 'Combien coûte une prestation SEO ?' },
  ],
  'mesurer-visibilite-geo': [
    { href: '/reponses/part-de-voix-dans-les-ia', label: "Réponse : qu'est-ce que la part de voix dans les IA ?" },
    { href: '/reponses/difference-seo-geo', label: 'Quelle différence entre SEO et GEO ?' },
    { href: '/blog/structurer-contenu-geo', label: 'Comment rédiger un contenu que les IA reprennent' },
    { href: '/blog/geo-ia-search-ai-overviews', label: 'Comment apparaître dans les AI Overviews de Google' },
    { href: '/blog/chatgpt-search-geo', label: 'Comment être cité par ChatGPT et Perplexity' },
    { href: '/consultant-geo-rennes', label: 'Consultant GEO à Rennes' },
  ],
  'structurer-contenu-geo': [
    { href: '/reponses/difference-seo-geo', label: 'Quelle différence entre SEO et GEO ?' },
    { href: '/blog/mesurer-visibilite-geo', label: 'Comment mesurer la visibilité de sa marque dans les IA' },
    { href: '/blog/donnees-structurees-schema-org', label: 'Données structurées et Schema.org' },
    { href: '/blog/google-eeat', label: 'Google EEAT : définition et amélioration' },
    { href: '/blog/ia-search-moteurs-reponses', label: 'Adapter sa stratégie SEO à la recherche par IA' },
    { href: '/blog/chatgpt-search-geo', label: 'Comment être cité par ChatGPT et Perplexity' },
  ],
  'seo-startups': [
    { href: '/prestations/traffic-manager-sea', label: "Traffic Manager SEA : Google Ads et Meta Ads" },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/blog/choisir-mots-cles-seo', label: 'Comment choisir les bons mots-clés' },
    { href: '/reponses/difference-seo-geo', label: 'Quelle différence entre SEO et GEO ?' },
    { href: '/accompagnement-seo', label: 'Accompagnement SEO mensuel' },
    { href: '/consultant-seo-freelance', label: 'Consultant SEO freelance' },
  ],
  'redaction-web': [
    { href: '/blog/techniques-redaction-web', label: 'Techniques de rédaction web : améliorer son contenu' },
    { href: '/blog/strategie-contenu-seo', label: 'Stratégie de contenu SEO' },
    { href: '/blog/rediger-bon-article-blog', label: 'Rédiger un bon article de blog' },
    { href: '/redacteur-web-rennes', label: 'Rédacteur web SEO à Rennes' },
    { href: '/redacteur-web-juridique', label: 'Rédacteur web juridique : avocats, notaires, experts-comptables' },
    { href: '/blog/geo-ia-search-ai-overviews', label: 'Comment apparaître dans les AI Overviews de Google' },
  ],
  'redacteur-web-juridique': [
    { href: '/redaction-web', label: 'Rédaction web SEO' },
    { href: '/redacteur-web-rennes', label: 'Rédacteur web SEO à Rennes' },
    { href: '/blog/google-eeat', label: 'Google EEAT : définition et amélioration' },
    { href: '/prestations/consultant-seo-geo', label: 'Prestations SEO & GEO · Aurélien PAGE' },
    { href: '/blog/strategie-contenu-seo', label: 'Stratégie de contenu SEO' },
  ],
  'optimiser-profil-malt': [
    { href: '/blog/devenir-consultant-seo-freelance', label: 'Comment devenir consultant SEO freelance' },
    { href: '/consultant-seo-freelance', label: 'Consultant SEO freelance' },
    { href: '/cout-prestation-seo', label: 'Combien coûte une prestation SEO ?' },
    { href: '/pourquoi-consultant-seo', label: 'Pourquoi faire appel à un consultant SEO ?' },
  ],
  'fautes-orthographe-redaction-web': [
    { href: '/blog/techniques-redaction-web', label: 'Techniques de rédaction web : améliorer son contenu' },
    { href: '/blog/rediger-bon-article-blog', label: 'Rédiger un bon article de blog' },
    { href: '/blog/copywriter-eviter-syndrome-page-blanche', label: 'Copywriter : éviter le syndrome de la page blanche' },
    { href: '/redacteur-web-rennes', label: 'Rédacteur web SEO à Rennes' },
  ],
  'formation-seo': [
    { href: '/accompagnement-seo', label: 'Accompagnement SEO mensuel' },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/cout-prestation-seo', label: 'Combien coûte une prestation SEO ?' },
    { href: '/blog/geo-ia-search-ai-overviews', label: 'Comment apparaître dans les AI Overviews de Google' },
    { href: '/consultant-seo-freelance', label: 'Consultant SEO freelance' },
  ],
  'chatgpt-search-geo': [
    { href: '/reponses/chatgpt-utilise-t-il-bing', label: "Réponse : ChatGPT s'appuie-t-il sur Bing ?" },
    { href: '/reponses/combien-de-temps-pour-etre-cite-par-chatgpt', label: "Réponse : combien de temps pour être cité par ChatGPT ?" },
    { href: '/reponses/difference-seo-geo', label: 'Quelle différence entre SEO et GEO ?' },
    { href: '/blog/structurer-contenu-geo', label: 'Comment rédiger un contenu que les IA reprennent' },
    { href: '/blog/mesurer-visibilite-geo', label: 'Comment mesurer la visibilité de sa marque dans les IA' },
    { href: '/blog/google-eeat', label: 'Google EEAT : définition et amélioration' },
  ],
  'reporting-seo-kpis': [
    { href: '/prestations/traffic-manager-sea', label: "Traffic Manager SEA : Google Ads et Meta Ads" },
    { href: '/reponses/combien-de-temps-resultats-seo', label: "Réponse : combien de temps pour voir les résultats du SEO ?" },
    { href: '/blog/google-search-console', label: 'Google Search Console : guide complet' },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/accompagnement-seo', label: 'Accompagnement SEO mensuel' },
    { href: '/pourquoi-consultant-seo', label: 'Pourquoi faire appel à un consultant SEO ?' },
    { href: '/cout-prestation-seo', label: 'Combien coûte une prestation SEO ?' },
  ],
  'tendances-seo-2026': [
    { href: '/blog/geo-ia-search-ai-overviews', label: 'Comment apparaître dans les AI Overviews de Google' },
    { href: '/blog/google-eeat', label: 'Google EEAT : définition et amélioration' },
    { href: '/blog/seo-technique-core-web-vitals', label: 'SEO technique et Core Web Vitals' },
    { href: '/blog/cocon-semantique-maillage-interne', label: 'Cocon sémantique et maillage interne' },
    { href: '/blog/donnees-structurees-schema-org', label: 'Données structurées et Schema.org' },
  ],
  'accompagnement-seo': [
    { href: '/pourquoi-consultant-seo', label: 'Pourquoi faire appel à un consultant SEO ?' },
    { href: '/cout-prestation-seo', label: 'Combien coûte une prestation SEO ?' },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/consultant-seo-freelance', label: 'Consultant SEO freelance' },
    { href: '/blog/geo-ia-search-ai-overviews', label: 'Comment apparaître dans les AI Overviews de Google' },
  ],
  'consultant-geo-rennes': [
    { href: '/blog/geo-ia-search-ai-overviews', label: 'Comment apparaître dans les AI Overviews de Google' },
    { href: '/blog/ia-search-moteurs-reponses', label: 'Adapter sa stratégie SEO à la recherche par IA' },
    { href: '/blog/google-eeat', label: 'Google EEAT : définition et amélioration' },
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
    { href: '/prestations/consultant-seo-geo', label: 'Prestation consultant SEO & GEO' },
  ],
  'pourquoi-consultant-seo': [
    { href: '/prestations/consultant-seo-geo', label: 'Mes prestations SEO & GEO' },
    { href: '/consultant-seo-freelance', label: 'Consultant SEO freelance' },
    { href: '/accompagnement-seo', label: 'Accompagnement SEO mensuel' },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/cout-prestation-seo', label: 'Combien coûte une prestation SEO ?' },
  ],
  'cout-prestation-seo': [
    { href: '/prestations/consultant-seo-geo', label: 'Mes prestations SEO & GEO' },
    { href: '/accompagnement-seo', label: 'Accompagnement SEO mensuel' },
    { href: '/pourquoi-consultant-seo', label: 'Pourquoi faire appel à un consultant SEO ?' },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/consultant-seo-freelance', label: 'Consultant SEO freelance' },
  ],
  'automatisation-ia-no-code-entreprise': [
    { href: 'https://www.audiaa.fr/prestations.html', label: 'Audiaa : prestations IA et No Code' },
    { href: 'https://www.audiaa.fr/formations.html', label: 'Audiaa : formations No Code et IA' },
    { href: '/blog/geo-ia-search-ai-overviews', label: 'Comment apparaître dans les AI Overviews de Google' },
    { href: '/blog/strategie-contenu-seo', label: 'Stratégie de contenu SEO' },
  ],
  'seo-local-google-my-business': [
    { href: '/blog/seo-on-page-optimisation', label: 'SEO on-page : éléments clés à optimiser' },
    { href: '/blog/choisir-mots-cles-seo', label: 'Comment choisir les bons mots-clés' },
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
    { href: '/consultant-seo-nantes', label: 'Consultant SEO à Nantes' },
  ],
}

// Related links for local city pages
const NEARBY_CITIES: Record<string, InternalLink[]> = {
  rennes: [
    { href: '/consultant-seo-brest', label: 'Consultant SEO à Brest' },
    { href: '/consultant-seo-saint-malo', label: 'Consultant SEO à Saint-Malo' },
    { href: '/consultant-seo-vannes', label: 'Consultant SEO à Vannes' },
  ],
  nantes: [
    { href: '/consultant-seo-saint-nazaire', label: 'Consultant SEO à Saint-Nazaire' },
    { href: '/consultant-seo-laval', label: 'Consultant SEO à Laval' },
    { href: '/consultant-seo-angers', label: 'Consultant SEO à Angers' },
  ],
  bordeaux: [
    { href: '/consultant-seo-marseille', label: 'Consultant SEO à Marseille' },
    { href: '/consultant-seo-montpellier', label: 'Consultant SEO à Montpellier' },
  ],
  brest: [
    { href: '/consultant-seo-quimper', label: 'Consultant SEO à Quimper' },
    { href: '/consultant-seo-lorient', label: 'Consultant SEO à Lorient' },
  ],
  caen: [
  ],
  laval: [
  ],
  'le-mans': [
    { href: '/consultant-seo-nantes', label: 'Consultant SEO à Nantes' },
    { href: '/consultant-seo-angers', label: 'Consultant SEO à Angers' },
    { href: '/consultant-seo-laval', label: 'Consultant SEO à Laval' },
  ],
  lorient: [
    { href: '/consultant-seo-brest', label: 'Consultant SEO à Brest' },
    { href: '/consultant-seo-quimper', label: 'Consultant SEO à Quimper' },
    { href: '/consultant-seo-vannes', label: 'Consultant SEO à Vannes' },
  ],
  marseille: [
    { href: '/consultant-seo-montpellier', label: 'Consultant SEO à Montpellier' },
    { href: '/consultant-seo-nice', label: 'Consultant SEO à Nice' },
    { href: '/consultant-seo-bordeaux', label: 'Consultant SEO à Bordeaux' },
  ],
  montpellier: [
    { href: '/consultant-seo-marseille', label: 'Consultant SEO à Marseille' },
  ],
  nice: [
  ],
  quimper: [
    { href: '/consultant-seo-lorient', label: 'Consultant SEO à Lorient' },
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
  ],
  'saint-malo': [
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
    { href: '/consultant-seo-caen', label: 'Consultant SEO à Caen' },
    { href: '/consultant-seo-nantes', label: 'Consultant SEO à Nantes' },
  ],
  'saint-nazaire': [
    { href: '/consultant-seo-nantes', label: 'Consultant SEO à Nantes' },
    { href: '/consultant-seo-vannes', label: 'Consultant SEO à Vannes' },
    { href: '/consultant-seo-lorient', label: 'Consultant SEO à Lorient' },
  ],
  strasbourg: [
    { href: '/consultant-seo-paris', label: 'Consultant SEO à Paris' },
    { href: '/consultant-seo-lyon', label: 'Consultant SEO à Lyon' },
    { href: '/consultant-seo-lille', label: 'Consultant SEO à Lille' },
  ],
  vannes: [
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
    { href: '/consultant-seo-saint-nazaire', label: 'Consultant SEO à Saint-Nazaire' },
  ],
  angers: [
    { href: '/consultant-seo-laval', label: 'Consultant SEO à Laval' },
    { href: '/consultant-seo-le-mans', label: 'Consultant SEO au Mans' },
  ],
  lille: [
    { href: '/consultant-seo-freelance', label: 'Consultant SEO freelance' },
  ],
  paris: [
  ],
  dinard: [
    { href: '/consultant-seo-saint-malo', label: 'Consultant SEO à Saint-Malo' },
  ],
  lyon: [
    { href: '/consultant-seo-marseille', label: 'Consultant SEO à Marseille' },
    { href: '/consultant-seo-bordeaux', label: 'Consultant SEO à Bordeaux' },
    { href: '/consultant-seo-strasbourg', label: 'Consultant SEO à Strasbourg' },
  ],
  toulouse: [
    { href: '/consultant-seo-montpellier', label: 'Consultant SEO à Montpellier' },
  ],
}

export const LOCAL_BLOG_LINKS: InternalLink[] = [
  { href: '/prestations/consultant-seo-geo', label: 'Prestations SEO & GEO · Aurélien PAGE' },
  { href: '/accompagnement-seo', label: 'Accompagnement SEO mensuel' },
  { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
  { href: '/blog/seo-local-google-my-business', label: 'SEO local et Google My Business' },
  { href: '/pourquoi-consultant-seo', label: 'Pourquoi faire appel à un consultant SEO ?' },
  { href: '/cout-prestation-seo', label: 'Combien coûte une prestation SEO ?' },
]

export function getBlogRelatedLinks(slug: string): InternalLink[] {
  return BLOG_RELATED[slug] || []
}

export function getCityLinks(cityKey: string): InternalLink[] {
  return NEARBY_CITIES[cityKey] || []
}
