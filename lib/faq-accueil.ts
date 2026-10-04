// Questions fréquentes affichées sur l'accueil. Textes repris tels quels des fiches
// (consultant-seo-geo, accompagnement-seo, formation-seo). Les modifier là-bas en premier.
import { SRC } from '@/lib/fiche-commun'

export const FAQ_ACCUEIL = [
  {
    q: 'Quel consultant SEO choisir à Rennes ?',
    a: `Je suis consultant SEO et GEO basé à Rennes : je me déplace et je travaille aussi à distance. Avant de choisir, Google conseille de demander au consultant des exemples de travaux, s'il respecte les Google Search Essentials et quels résultats il attend, dans quel délai ([Google Search Central](${SRC.googleSeo.href})). Voir aussi la page [consultant SEO à Rennes](/consultant-seo-rennes).`,
  },
  {
    q: 'Combien coûte un audit SEO ?',
    a: "Mon audit SEO et GEO coûte entre 800 et 2 500 € selon la taille du site et la profondeur d'analyse. Le prix est fixé dans un devis après le diagnostic offert. Pour des repères plus larges, voir [combien coûte une prestation SEO](/cout-prestation-seo).",
  },
  {
    q: "Y a-t-il un engagement de durée ?",
    a: "Non. Pas de contrat annuel imposé : l'accompagnement est résiliable avec un préavis d'un mois. Je recommande 6 mois au minimum pour juger des résultats.",
  },
  {
    q: "Une formation SEO est-elle finançable par le CPF ou l'OPCO ?",
    a: `Pas les miennes. L'article L6316-1 du Code du travail réserve les financements des OPCO, du CPF, de France Travail, de l'État et des régions aux organismes certifiés sur des critères qualité (certification Qualiopi). Je ne suis pas certifié à ce jour : la formation se finance sur le budget propre de l'entreprise ([Légifrance](${SRC.l6316.href})).`,
  },
]
