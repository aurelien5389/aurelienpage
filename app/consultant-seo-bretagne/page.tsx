import type { Metadata } from 'next'
import FicheLayout, { type FicheData } from '@/components/FicheLayout'
import { getContentDates } from '@/lib/content-dates'
import { REGIONS, villesLiens } from '@/lib/zones'
import { SRC, PARCOURS, BALISE, METHODE, DIAGNOSTIC, DEMARRAGE, FINANCEMENT_CONSEIL, DEROULE_ZONE, TARIF_ZONE, OUTILS_ZONE } from '@/lib/fiche-commun'

const PATH = '/consultant-seo-bretagne'
const URL = `https://aurelienpage.fr${PATH}`
const TITLE = 'Consultant SEO et GEO en Bretagne : Rennes, Saint-Malo, Vitré, Brest · Aurélien PAGE'
const DESCRIPTION =
  "Consultant SEO et GEO présent à Rennes (siège à Laval), en déplacement dans toute la Bretagne. Audit SEO et GEO de 800 à 2 500 €, suivi mensuel dès 500 €. Diagnostic offert de 30 minutes."
const REGION = REGIONS.find((r) => r.id === 'bretagne')!

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
}

const data: FicheData = {
  path: PATH,
  parent: { name: "Zones d'intervention", path: '/zones-intervention' },
  nom: 'Bretagne',
  h1: 'Consultant SEO en Bretagne',
  resume:
    "**Quel consultant SEO en Bretagne ?** Je suis **consultant SEO et GEO**, présent à Rennes, avec mon siège à Laval. Je me déplace **sans frais à Rennes, Vitré, Fougères, Saint-Malo, Dinard, Cancale et Dinan**, et **avec frais à Saint-Brieuc, Lannion, Vannes, Lorient, Quimper et Brest**. Audit SEO et GEO de 800 à 2 500 € selon la taille du site, suivi mensuel de 500 à 2 000 €. Premier échange : un diagnostic offert de 30 minutes.",
  identite: [
    { label: 'Public', valeur: 'Entreprises bretonnes : PME, commerces et e-commerce, organismes de formation, cabinets, tourisme, collectivités' },
    { label: 'Prérequis', valeur: 'Un site en ligne' },
    { label: 'Sans frais de déplacement', valeur: '[Rennes](/consultant-seo-rennes), [Vitré](/consultant-seo-vitre), [Fougères](/consultant-seo-fougeres), [Saint-Malo](/consultant-seo-saint-malo), [Dinard](/consultant-seo-dinard), [Cancale](/consultant-seo-cancale), [Dinan](/consultant-seo-dinan)' },
    { label: 'Avec déplacement', valeur: '[Saint-Brieuc](/consultant-seo-saint-brieuc), [Lannion](/consultant-seo-lannion), [Vannes](/consultant-seo-vannes), [Lorient](/consultant-seo-lorient), [Quimper](/consultant-seo-quimper), [Brest](/consultant-seo-brest) : frais au réel, précisés dans le devis' },
    { label: 'Tarif', valeur: TARIF_ZONE },
    { label: 'Financement', valeur: FINANCEMENT_CONSEIL },
    { label: 'Livrables', valeur: "Rapport d'audit, relevé de visibilité dans les IA, plan d'action, reporting mensuel" },
  ],
  pourquoiTitre: 'Pourquoi le SEO local compte pour une entreprise bretonne',
  pourquoi: [
    "Une grande partie des clients d'une entreprise bretonne la cherche avec un nom de ville : « expert-comptable Vannes », « formation Brest », « location Saint-Malo ». Sur ces recherches, Google classe les résultats locaux selon trois critères qu'il documente : la **pertinence** de la fiche par rapport à la recherche, la **distance** avec la personne qui cherche, et la **proéminence**, c'est-à-dire la notoriété de l'établissement ([Google](" + SRC.gbpLocal.href + ")).",
    "Les IA posent la même question autrement. Quand on demande à ChatGPT ou à Perplexity un prestataire à Quimper ou à Lorient, ils cherchent sur le web et citent des sources : votre site, votre fiche d'établissement, des annuaires, des articles de presse locale. Le travail consiste à être présent et cohérent partout où ces réponses vont puiser. La méthode est dans [comment une entreprise locale peut-elle être recommandée par les IA](/blog/entreprise-locale-recommandee-par-ia).",
    "Être présent à Rennes, avec un siège à Laval, permet de venir sur place pour les moments qui comptent : le diagnostic, la restitution de l'audit devant votre équipe, un atelier. Le reste se fait à distance, sans perte de qualité.",
  ],
  derouleTitre: 'Comment se déroule une mission en Bretagne',
  deroule: DEROULE_ZONE,
  pourquoiMoi: [PARCOURS, METHODE, BALISE],
  outils: OUTILS_ZONE,
  modalites: [
    DIAGNOSTIC,
    'Rencontre possible à Rennes, ou dans vos locaux en Bretagne, frais de déplacement indiqués dans le devis hors de la zone sans frais.',
    DEMARRAGE,
  ],
  zones: { titre: 'Villes bretonnes avec une page dédiée', liens: villesLiens(REGION) },
  faq: [
    {
      q: 'Vous déplacez-vous à Brest ou à Quimper ?',
      a: "Oui, pour le diagnostic, la restitution ou un atelier, avec des frais de déplacement ajoutés au devis, au réel. Le travail courant de l'audit et du suivi se fait à distance.",
    },
    {
      q: 'Faut-il un consultant breton pour travailler le SEO local en Bretagne ?',
      a: "Non, mais connaître les villes et leurs recherches aide. Les critères du classement local de Google (pertinence, distance, proéminence) sont les mêmes partout ; ce qui change, ce sont les requêtes, les annuaires et les médias locaux à viser.",
    },
    {
      q: 'Quel budget prévoir pour le SEO d’une entreprise bretonne ?',
      a: "Un audit SEO et GEO coûte de 800 à 2 500 € selon la taille du site, un suivi mensuel de 500 à 2 000 €. Le détail est dans [combien coûte un audit SEO](/reponses/combien-coute-un-audit-seo).",
    },
  ],
  liens: [
    { href: '/consultant-seo-rennes', label: 'Consultant SEO à Rennes' },
    { href: '/consultant-geo-rennes', label: 'Consultant GEO à Rennes' },
    { href: '/consultant-seo-pays-de-la-loire', label: 'Consultant SEO en Pays de la Loire' },
    { href: '/blog/entreprise-locale-recommandee-par-ia', label: 'Comment une entreprise locale peut-elle être recommandée par les IA ?' },
    { href: '/blog/seo-local-google-my-business', label: 'SEO local et Google Business Profile' },
    { href: '/zones-intervention', label: "Toutes mes zones d'intervention" },
  ],
  sources: [SRC.gbpLocal, SRC.googleSeo],
  schema: {
    '@type': 'Service',
    name: 'Consultant SEO et GEO en Bretagne',
    serviceType: 'Audit et accompagnement SEO et GEO',
    areaServed: [{ '@type': 'AdministrativeArea', name: 'Bretagne' }, ...REGION.villes.map((v) => ({ '@type': 'City', name: v.nom }))],
  },
  dates: getContentDates([`app${PATH}/page.tsx`]),
}

export default function Page() {
  return <FicheLayout data={data} />
}
