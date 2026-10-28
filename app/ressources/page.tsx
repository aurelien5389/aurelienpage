import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import DiagnosticCTA from '@/components/DiagnosticCTA'
import { COCONS } from '@/lib/cocons'
import { SITE_URL, breadcrumbSchema, pageGraph } from '@/lib/schema'
import styles from './page.module.css'

const PATH = '/ressources'
const TITLE = 'Ressources GEO et SEO gratuites : guides, checklists, modèles · Aurélien PAGE'
const DESCRIPTION =
  "Comprendre et démarrer le GEO : positions officielles de Google, OpenAI et Anthropic, plan en 30 jours, checklist, gabarit de page, robots d'IA, modèles de relevé. Gratuit et sourcé."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}${PATH}` },
}

const OUTILS_GROUPES = [
  {
    id: 'comprendre',
    titre: 'Comprendre le GEO',
    items: [
      {
        href: '/ressources/positions-officielles-ia',
        titre: 'Ce que disent officiellement Google, OpenAI, Anthropic, Perplexity et Microsoft',
        texte: 'Les positions des éditeurs d’IA sur les sites web, éditeur par éditeur, chaque point avec sa source.',
      },
      {
        href: '/blog/lexique-geo',
        titre: 'Lexique GEO',
        texte: 'Les termes de la recherche par IA définis simplement : AI Overviews, part de voix, query fan-out, RAG…',
      },
      {
        href: '/ressources/robots-ia',
        titre: "Référentiel des robots d'IA et modèles de robots.txt",
        texte: "Rôle de chaque robot d'OpenAI, d'Anthropic, de Perplexity, de Google et de Bing, effet d'un blocage, trois modèles prêts à copier.",
      },
    ],
  },
  {
    id: 'agir',
    titre: 'Passer à l’action',
    items: [
      {
        href: '/ressources/plan-geo-30-jours',
        titre: 'Plan GEO en 30 jours',
        texte: 'Quatre semaines pour démarrer : robots et indexation, questions et premier relevé, pages à reprendre, présence externe.',
      },
      {
        href: '/ressources/checklist-geo',
        titre: 'Checklist GEO : 25 points pour être cité par les IA',
        texte: 'Accès des robots, indexation, format des pages, crédibilité, présence externe, mesure : chaque point avec son test.',
      },
      {
        href: '/ressources/gabarit-page-reponse',
        titre: 'Gabarit de page que les IA peuvent citer',
        texte: 'La structure à copier : réponse en tête, intertitres en questions, tableau, sources, FAQ.',
      },
    ],
  },
  {
    id: 'mesurer',
    titre: 'Mesurer sa visibilité dans les IA',
    items: [
      {
        href: '/ressources/questions-geo-par-secteur',
        titre: 'Questions à suivre, secteur par secteur',
        texte: 'Exemples de questions clients pour sept secteurs, en fichier CSV, pour construire votre liste.',
      },
      {
        href: '/ressources/modele-releve-geo',
        titre: 'Modèle de relevé GEO (tableau à télécharger)',
        texte: 'Un tableau CSV gratuit pour relever chaque mois si les IA vous citent, et la formule de la part de voix.',
      },
      {
        href: '/reponses/trafic-ia-google-analytics-4',
        titre: 'Le trafic des IA dans Google Analytics 4',
        texte: 'Où trouver le canal « Assistant IA » et comment créer votre propre canal IA.',
      },
    ],
  },
]

const OUTILS = OUTILS_GROUPES.flatMap((g) => g.items)

const GUIDES = [
  { href: '/blog/lexique-seo', titre: 'Lexique SEO', texte: 'Cinquante termes du référencement naturel expliqués.' },
  { href: '/blog/audit-geo-etape-par-etape', titre: 'Faire un audit GEO, étape par étape', texte: 'La méthode complète, de la liste de questions au plan d’action.' },
  { href: '/blog/audit-seo', titre: 'Faire un audit SEO', texte: 'Technique, contenu, popularité : la méthode de diagnostic.' },
  { href: '/reponses', titre: 'Réponses courtes et sourcées', texte: 'Les questions SEO et GEO les plus fréquentes, réponse en tête de page.' },
]

export default function RessourcesPage() {
  const itemList = {
    '@type': 'ItemList',
    name: 'Ressources SEO et GEO',
    itemListElement: [...OUTILS, ...GUIDES].map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}${r.href}`,
      name: r.titre,
    })),
  }
  const page = {
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}${PATH}#page`,
    name: 'Ressources SEO et GEO',
    url: `${SITE_URL}${PATH}`,
    inLanguage: 'fr-FR',
    description: DESCRIPTION,
  }

  return (
    <>
      <Header />
      <JsonLd schema={pageGraph(page, itemList, breadcrumbSchema([{ name: 'Ressources', path: PATH }]))} />
      <main className={styles.resMain}>
        <div className={styles.resInner}>
          <nav aria-label="Fil d'Ariane" className={styles.fil}>
            <Link href="/" className={styles.filLien}>Accueil</Link>
            <span aria-hidden="true">›</span>
            <span className={styles.filActuel}>Ressources</span>
          </nav>

          <h1 className={styles.resH1}>Ressources SEO et GEO</h1>
          <p className={styles.resChapo}>
            Des ressources gratuites pour comprendre le GEO, passer à l&apos;action et mesurer votre visibilité dans
            ChatGPT, Perplexity, Claude, Gemini et Google : positions officielles des éditeurs, plan en 30 jours,
            checklist, gabarit de page, modèles à télécharger. Chaque ressource cite ses sources officielles. Les
            dossiers thématiques, plus bas, regroupent tous les guides du site par sujet.
          </p>

          {OUTILS_GROUPES.map((g) => (
            <section key={g.id} aria-labelledby={g.id} className={styles.resSection}>
              <h2 id={g.id} className={styles.resH2}>{g.titre}</h2>
              <ul className={styles.resCartes}>
                {g.items.map((o) => (
                  <li key={o.href} className={styles.resCarte}>
                    <Link href={o.href} className={styles.resCarteTitre}>{o.titre}</Link>
                    <p className={styles.resCarteTexte}>{o.texte}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section aria-labelledby="guides" className={styles.resSection}>
            <h2 id="guides" className={styles.resH2}>Guides de référence</h2>
            <ul className={styles.resListe}>
              {GUIDES.map((g) => (
                <li key={g.href} className={styles.resItem}>
                  <Link href={g.href} className={styles.resLien}>{g.titre}</Link>
                  <span className={styles.resItemTexte}> : {g.texte}</span>
                </li>
              ))}
            </ul>
          </section>

          {(['GEO', 'SEO'] as const).map((famille) => (
            <section key={famille} aria-labelledby={`dossiers-${famille}`} className={styles.resSection}>
              <h2 id={`dossiers-${famille}`} className={styles.resH2}>Dossiers {famille}</h2>
              <div className={styles.resDossiers}>
                {COCONS.filter((c) => c.famille === famille).map((c) => (
                  <div key={c.id} className={styles.resDossier}>
                    <h3 className={styles.resH3}>{c.titre}</h3>
                    <p className={styles.resDepart}>
                      Guide de départ : <Link href={c.mere.href} className={styles.resLien}>{c.mere.label}</Link>
                    </p>
                    <ul className={styles.resSousListe}>
                      {c.pages.map((p) => (
                        <li key={p.href}>
                          <Link href={p.href} className={styles.resSousLien}>{p.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
        <DiagnosticCTA variant="section" />
      </main>
      <Footer />
    </>
  )
}
