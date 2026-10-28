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
const TITLE = 'Ressources SEO et GEO : référentiels, checklists et modèles gratuits · Aurélien PAGE'
const DESCRIPTION =
  "Référentiel des robots d'IA, checklist GEO en 25 points, modèle de relevé de part de voix, lexiques SEO et GEO, dossiers thématiques : des ressources gratuites et sourcées."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}${PATH}` },
}

const OUTILS = [
  {
    href: '/ressources/robots-ia',
    titre: "Référentiel des robots d'IA et modèles de robots.txt",
    texte: "Les robots d'OpenAI, d'Anthropic, de Perplexity, de Google et de Bing : rôle, effet d'un blocage, et trois modèles de robots.txt prêts à copier.",
  },
  {
    href: '/ressources/checklist-geo',
    titre: 'Checklist GEO : 25 points pour être cité par les IA',
    texte: 'Accès des robots, indexation, format des pages, crédibilité, présence externe, mesure : chaque point avec son test.',
  },
  {
    href: '/ressources/modele-releve-geo',
    titre: 'Modèle de relevé GEO (tableau à télécharger)',
    texte: 'Un tableau CSV gratuit pour relever chaque mois si les IA vous citent, et la formule pour calculer votre part de voix.',
  },
]

const GUIDES = [
  { href: '/blog/lexique-geo', titre: 'Lexique GEO', texte: 'Les termes de la recherche par IA, définis et sourcés.' },
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
            Des outils gratuits pour travailler votre visibilité dans Google et dans les réponses des IA : un
            référentiel des robots, une checklist, un modèle de relevé, des lexiques. Chaque ressource cite ses
            sources officielles. Les dossiers thématiques, plus bas, regroupent tous les guides du site par sujet.
          </p>

          <section aria-labelledby="outils" className={styles.resSection}>
            <h2 id="outils" className={styles.resH2}>Référentiels, checklists et modèles</h2>
            <ul className={styles.resCartes}>
              {OUTILS.map((o) => (
                <li key={o.href} className={styles.resCarte}>
                  <Link href={o.href} className={styles.resCarteTitre}>{o.titre}</Link>
                  <p className={styles.resCarteTexte}>{o.texte}</p>
                </li>
              ))}
            </ul>
          </section>

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
