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
    { href: '/blog/crawler-seo', label: 'Crawler SEO : fonctionnement et optimisation' },
    { href: '/blog/pagination-seo', label: 'Pagination et SEO : gérer les pages /page/2' },
    { href: '/blog/robots-txt-meta-robots', label: 'Robots.txt et meta robots' },
    { href: '/blog/balise-canonique', label: 'Balise canonique : définition et bonnes pratiques' },
    { href: '/blog/seo-technique-core-web-vitals', label: 'SEO technique : les fondations' },
  ],
  'robots-txt-meta-robots': [
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
    { href: '/blog/crawler-seo', label: 'Crawler SEO : fonctionnement et optimisation' },
    { href: '/blog/balise-canonique', label: 'Balise canonique : définition et bonnes pratiques' },
    { href: '/blog/robots-txt-meta-robots', label: 'Robots.txt et meta robots' },
  ],
  'donnees-structurees-schema-org': [
    { href: '/blog/seo-on-page-optimisation', label: 'SEO on-page : éléments clés à optimiser' },
    { href: '/blog/geo-ia-search-ai-overviews', label: 'GEO : optimiser pour la recherche IA' },
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
    { href: '/blog/choisir-mots-cles-seo', label: 'Comment choisir les bons mots-clés' },
    { href: '/blog/cocon-semantique-maillage-interne', label: 'Cocon sémantique et maillage interne' },
    { href: '/blog/rediger-bon-article-blog', label: 'Rédiger un bon article de blog' },
    { href: '/blog/calendrier-editorial', label: 'Calendrier éditorial : planifier sa stratégie' },
    { href: '/prestations/consultant-seo-geo', label: 'Prestations SEO & GEO — Aurélien PAGE' },
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
    { href: '/blog/techniques-redaction-web', label: 'Techniques de rédaction web : améliorer son contenu' },
    { href: '/blog/strategie-contenu-seo', label: 'Stratégie de contenu SEO' },
    { href: '/blog/rediger-titre-seo', label: 'Comment rédiger un titre efficace (H1 et balise title)' },
  ],
  'calendrier-editorial': [
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
    { href: '/blog/erreurs-seo-critiques', label: '3 erreurs SEO qui ruinent votre site' },
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
  'erreurs-seo-critiques': [
    { href: '/blog/erreurs-seo-frequentes', label: 'Les 10 erreurs SEO les plus fréquentes' },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/blog/balise-canonique', label: 'Balise canonique : définition et bonnes pratiques' },
    { href: '/blog/robots-txt-meta-robots', label: 'Robots.txt et meta robots' },
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
  'canva-creation-contenus': [
    { href: '/blog/strategie-contenu-seo', label: 'Stratégie de contenu SEO' },
    { href: '/blog/formes-contenus-redaction-web', label: 'Les différentes formes de contenus en rédaction web' },
    { href: '/blog/calendrier-editorial', label: 'Calendrier éditorial : planifier sa stratégie' },
    { href: '/blog/techniques-redaction-web', label: 'Techniques de rédaction web' },
  ],
  'redacteur-web-rennes': [
    { href: '/blog/techniques-redaction-web', label: 'Techniques de rédaction web' },
    { href: '/blog/strategie-contenu-seo', label: 'Stratégie de contenu SEO' },
    { href: '/blog/rediger-bon-article-blog', label: 'Rédiger un bon article de blog' },
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
  ],
  'techniques-redaction-web': [
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
    { href: '/blog/choisir-mots-cles-seo', label: 'Comment choisir les bons mots-clés' },
    { href: '/blog/fonctionnement-moteurs-recherche', label: 'Comment fonctionnent les moteurs de recherche' },
    { href: '/blog/seo-on-page-optimisation', label: 'SEO on-page : éléments clés à optimiser' },
  ],
  'netlinking-backlinks-pagerank': [
    { href: '/blog/netlinking-avance', label: 'Netlinking avancé : PageRank sculpting' },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/blog/google-eeat', label: 'Google EEAT : définition et amélioration' },
    { href: '/prestations/consultant-seo-geo', label: 'Prestations SEO & GEO — Aurélien PAGE' },
  ],
  'netlinking-avance': [
    { href: '/blog/netlinking-backlinks-pagerank', label: 'Netlinking et backlinks : construire votre autorité' },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/blog/seo-technique-core-web-vitals', label: 'SEO technique : les fondations' },
  ],
  'geo-ia-search-ai-overviews': [
    { href: '/blog/ia-search-moteurs-reponses', label: 'IA Search : fonctionnement des moteurs de réponses' },
    { href: '/blog/geo-vs-seo', label: 'GEO vs SEO : différences et complémentarité' },
    { href: '/blog/structurer-contenu-geo', label: 'Structurer son contenu pour le GEO' },
    { href: '/blog/google-eeat', label: 'Google EEAT : définition et amélioration' },
    { href: '/prestations/consultant-seo-geo', label: 'Consultant SEO & GEO — Aurélien PAGE' },
  ],
  'ia-search-moteurs-reponses': [
    { href: '/blog/geo-ia-search-ai-overviews', label: 'GEO : optimiser pour la recherche IA' },
    { href: '/blog/geo-vs-seo', label: 'GEO vs SEO : différences et complémentarité' },
    { href: '/blog/perplexity-citation-geo', label: 'Perplexity : comment être cité comme source' },
    { href: '/blog/google-eeat', label: 'Google EEAT : définition et amélioration' },
    { href: '/blog/fonctionnement-moteurs-recherche', label: 'Comment fonctionnent les moteurs de recherche' },
  ],
  'google-eeat': [
    { href: '/blog/geo-ia-search-ai-overviews', label: 'GEO : optimiser pour la recherche IA' },
    { href: '/blog/strategie-contenu-seo', label: 'Stratégie de contenu SEO' },
    { href: '/blog/netlinking-backlinks-pagerank', label: 'Netlinking et backlinks : construire votre autorité' },
    { href: '/prestations/consultant-seo-geo', label: 'Prestations SEO & GEO — Aurélien PAGE' },
  ],
  'fonctionnement-moteurs-recherche': [
    { href: '/blog/apprendre-le-seo-principes-debutants', label: 'Apprendre le SEO : principes fondamentaux' },
    { href: '/blog/serp-typologies-intentions-recherche', label: 'SERP : typologies et intentions de recherche' },
    { href: '/blog/ia-search-moteurs-reponses', label: 'IA Search : fonctionnement des moteurs de réponses' },
  ],
  'apprendre-le-seo-principes-debutants': [
    { href: '/blog/lexique-seo', label: 'Lexique SEO : 50 termes essentiels' },
    { href: '/blog/fonctionnement-moteurs-recherche', label: 'Comment fonctionnent les moteurs de recherche' },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/blog/seo-technique-core-web-vitals', label: 'SEO technique : les fondations' },
  ],
  'audit-seo': [
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
  'geo-vs-seo': [
    { href: '/blog/geo-ia-search-ai-overviews', label: 'GEO : optimiser pour la recherche IA' },
    { href: '/blog/ia-search-moteurs-reponses', label: 'IA Search : fonctionnement des moteurs de réponses' },
    { href: '/blog/mesurer-visibilite-geo', label: 'Comment mesurer sa visibilité GEO' },
    { href: '/blog/structurer-contenu-geo', label: 'Structurer son contenu pour le GEO' },
    { href: '/blog/google-eeat', label: 'Google EEAT : définition et amélioration' },
    { href: '/consultant-geo-rennes', label: 'Consultant GEO à Rennes' },
  ],
  'mesurer-visibilite-geo': [
    { href: '/blog/geo-vs-seo', label: 'GEO vs SEO : différences et complémentarité' },
    { href: '/blog/structurer-contenu-geo', label: 'Structurer son contenu pour le GEO' },
    { href: '/blog/geo-ia-search-ai-overviews', label: 'GEO et AI Overviews' },
    { href: '/blog/perplexity-citation-geo', label: 'Perplexity : comment être cité comme source' },
    { href: '/consultant-geo-rennes', label: 'Consultant GEO à Rennes' },
  ],
  'structurer-contenu-geo': [
    { href: '/blog/geo-vs-seo', label: 'GEO vs SEO : différences et complémentarité' },
    { href: '/blog/mesurer-visibilite-geo', label: 'Comment mesurer sa visibilité GEO' },
    { href: '/blog/donnees-structurees-schema-org', label: 'Données structurées et Schema.org' },
    { href: '/blog/google-eeat', label: 'Google EEAT : définition et amélioration' },
    { href: '/blog/ia-search-moteurs-reponses', label: 'IA Search : fonctionnement des moteurs de réponses' },
    { href: '/blog/perplexity-citation-geo', label: 'Perplexity : comment être cité comme source' },
  ],
  'perplexity-citation-geo': [
    { href: '/blog/geo-vs-seo', label: 'GEO vs SEO : différences et complémentarité' },
    { href: '/blog/structurer-contenu-geo', label: 'Structurer son contenu pour le GEO' },
    { href: '/blog/geo-ia-search-ai-overviews', label: 'GEO et AI Overviews' },
    { href: '/blog/mesurer-visibilite-geo', label: 'Comment mesurer sa visibilité GEO' },
    { href: '/blog/google-eeat', label: 'Google EEAT : définition et amélioration' },
  ],
  'seo-startups': [
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/blog/choisir-mots-cles-seo', label: 'Comment choisir les bons mots-clés' },
    { href: '/blog/geo-vs-seo', label: 'GEO vs SEO : différences et complémentarité' },
    { href: '/accompagnement-seo', label: 'Accompagnement SEO mensuel' },
    { href: '/consultant-seo-freelance', label: 'Consultant SEO freelance' },
  ],
  'redaction-web': [
    { href: '/blog/techniques-redaction-web', label: 'Techniques de rédaction web : améliorer son contenu' },
    { href: '/blog/strategie-contenu-seo', label: 'Stratégie de contenu SEO' },
    { href: '/blog/rediger-bon-article-blog', label: 'Rédiger un bon article de blog' },
    { href: '/redacteur-web-rennes', label: 'Rédacteur web SEO à Rennes' },
    { href: '/redacteur-web-juridique', label: 'Rédacteur web juridique : avocats, notaires, experts-comptables' },
    { href: '/blog/geo-ia-search-ai-overviews', label: 'GEO : optimiser pour la recherche IA' },
  ],
  'redacteur-web-juridique': [
    { href: '/redaction-web', label: 'Rédaction web SEO' },
    { href: '/redacteur-web-rennes', label: 'Rédacteur web SEO à Rennes' },
    { href: '/blog/google-eeat', label: 'Google EEAT : définition et amélioration' },
    { href: '/prestations/consultant-seo-geo', label: 'Prestations SEO & GEO — Aurélien PAGE' },
    { href: '/blog/strategie-contenu-seo', label: 'Stratégie de contenu SEO' },
  ],
  'optimiser-profil-malt': [
    { href: '/blog/devenir-consultant-seo-freelance', label: 'Devenir consultant SEO freelance' },
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
    { href: '/blog/geo-ia-search-ai-overviews', label: 'GEO : optimiser pour la recherche IA' },
    { href: '/consultant-seo-freelance', label: 'Consultant SEO freelance' },
  ],
  'chatgpt-search-geo': [
    { href: '/blog/perplexity-citation-geo', label: 'Perplexity : comment être cité comme source' },
    { href: '/blog/geo-vs-seo', label: 'GEO vs SEO : différences et complémentarité' },
    { href: '/blog/structurer-contenu-geo', label: 'Structurer son contenu pour le GEO' },
    { href: '/blog/mesurer-visibilite-geo', label: 'Comment mesurer sa visibilité GEO' },
    { href: '/blog/google-eeat', label: 'Google EEAT : définition et amélioration' },
  ],
  'reporting-seo-kpis': [
    { href: '/blog/google-search-console', label: 'Google Search Console : guide complet' },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/accompagnement-seo', label: 'Accompagnement SEO mensuel' },
    { href: '/pourquoi-consultant-seo', label: 'Pourquoi faire appel à un consultant SEO ?' },
    { href: '/cout-prestation-seo', label: 'Combien coûte une prestation SEO ?' },
  ],
  'tendances-seo-2026': [
    { href: '/blog/geo-ia-search-ai-overviews', label: 'GEO : optimiser pour la recherche IA' },
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
    { href: '/blog/geo-ia-search-ai-overviews', label: 'GEO : optimiser pour la recherche IA' },
  ],
  'consultant-geo-rennes': [
    { href: '/blog/geo-ia-search-ai-overviews', label: 'GEO : optimiser pour la recherche IA' },
    { href: '/blog/ia-search-moteurs-reponses', label: 'IA Search : fonctionnement des moteurs de réponses' },
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
    { href: '/consultant-seo-nantes', label: 'Consultant SEO à Nantes' },
    { href: '/consultant-seo-brest', label: 'Consultant SEO à Brest' },
    { href: '/consultant-seo-saint-malo', label: 'Consultant SEO à Saint-Malo' },
    { href: '/consultant-seo-vannes', label: 'Consultant SEO à Vannes' },
  ],
  nantes: [
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
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
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
  ],
  caen: [
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
    { href: '/consultant-seo-saint-malo', label: 'Consultant SEO à Saint-Malo' },
  ],
  laval: [
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
    { href: '/consultant-seo-nantes', label: 'Consultant SEO à Nantes' },
    { href: '/consultant-seo-angers', label: 'Consultant SEO à Angers' },
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
    { href: '/consultant-seo-nice', label: 'Consultant SEO à Nice' },
    { href: '/consultant-seo-bordeaux', label: 'Consultant SEO à Bordeaux' },
  ],
  nice: [
    { href: '/consultant-seo-marseille', label: 'Consultant SEO à Marseille' },
    { href: '/consultant-seo-montpellier', label: 'Consultant SEO à Montpellier' },
  ],
  quimper: [
    { href: '/consultant-seo-brest', label: 'Consultant SEO à Brest' },
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
    { href: '/consultant-seo-lorient', label: 'Consultant SEO à Lorient' },
    { href: '/consultant-seo-saint-nazaire', label: 'Consultant SEO à Saint-Nazaire' },
  ],
  angers: [
    { href: '/consultant-seo-nantes', label: 'Consultant SEO à Nantes' },
    { href: '/consultant-seo-laval', label: 'Consultant SEO à Laval' },
    { href: '/consultant-seo-le-mans', label: 'Consultant SEO au Mans' },
  ],
  lille: [
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
    { href: '/consultant-seo-nantes', label: 'Consultant SEO à Nantes' },
    { href: '/consultant-seo-freelance', label: 'Consultant SEO freelance' },
  ],
  paris: [
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
    { href: '/consultant-seo-lille', label: 'Consultant SEO à Lille' },
    { href: '/consultant-seo-freelance', label: 'Consultant SEO freelance' },
  ],
  dinard: [
    { href: '/consultant-seo-saint-malo', label: 'Consultant SEO à Saint-Malo' },
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
    { href: '/consultant-seo-vannes', label: 'Consultant SEO à Vannes' },
  ],
  lyon: [
    { href: '/consultant-seo-paris', label: 'Consultant SEO à Paris' },
    { href: '/consultant-seo-marseille', label: 'Consultant SEO à Marseille' },
    { href: '/consultant-seo-bordeaux', label: 'Consultant SEO à Bordeaux' },
    { href: '/consultant-seo-strasbourg', label: 'Consultant SEO à Strasbourg' },
  ],
  toulouse: [
    { href: '/consultant-seo-bordeaux', label: 'Consultant SEO à Bordeaux' },
    { href: '/consultant-seo-montpellier', label: 'Consultant SEO à Montpellier' },
    { href: '/consultant-seo-marseille', label: 'Consultant SEO à Marseille' },
  ],
}

export const LOCAL_BLOG_LINKS: InternalLink[] = [
  { href: '/prestations/consultant-seo-geo', label: 'Prestations SEO & GEO — Aurélien PAGE' },
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
