import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticCTA from '@/components/DiagnosticCTA'
import JsonLd from '@/components/JsonLd'
import { SITE_URL, PERSON_ID, breadcrumbSchema } from '@/lib/schema'
import { getContentDates, formatMonthYear } from '@/lib/content-dates'
import styles from './page.module.css'

const PATH = '/a-propos'
const TITLE = 'À propos : Aurélien Page, consultant SEO, GEO et SEA à Rennes · Aurélien PAGE'
const DESCRIPTION =
  "Parcours, formations et méthode d'Aurélien Page, consultant SEO, GEO et SEA à Rennes, formateur SEO et GEO, fondateur d'Audiaa et créateur de Balise."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}${PATH}`, type: 'profile' },
}

const PARCOURS = [
  {
    periode: '2012 à 2019',
    role: 'Journaliste web, rédacteur web et content manager',
    texte: "Rédaction pour le web, calendrier éditorial, encadrement d'une équipe de rédacteurs, optimisation SEO des contenus.",
  },
  {
    periode: '2020 à 2024',
    role: 'Consultant SEO et SEA, en agence, pour un groupe de presse professionnelle et en freelance',
    texte: 'Audits SEO complets, stratégies de contenu, SEO de sites média à fort trafic, campagnes Google Ads et Meta Ads, tableaux de bord de suivi.',
  },
  {
    periode: 'Depuis 2024',
    role: 'Web marketing et contenu dans un organisme de formation, et missions de consultant',
    texte: 'Stratégie SEO, campagnes Google Ads, landing pages, automatisations, reporting. En parallèle : consultant SEO, GEO et SEA, formateur, fondateur d’Audiaa.',
  },
]

const FORMATIONS = [
  { titre: 'Master 2 Management des médias', ecole: 'IEP de Rennes et Université Rennes 1', annee: '2011-2012' },
  { titre: 'Master 2 Droit du numérique', ecole: 'Université de Strasbourg', annee: '2014-2015' },
  { titre: 'Chef de projet en transformation digitale', ecole: 'Formation continue', annee: '2019' },
  { titre: 'Expert SEO et media buying (Google Ads, Meta Ads)', ecole: '301 Ades Bootcamp', annee: '2021-2022 et 2024' },
  { titre: 'AI Search et GEO', ecole: 'FormaSEO', annee: '' },
]

export default function AProposPage() {
  const dates = getContentDates([`app${PATH}/page.tsx`])
  const profile = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: `${SITE_URL}${PATH}`,
    name: 'À propos d’Aurélien Page',
    dateModified: dates.modified,
    mainEntity: { '@id': PERSON_ID },
  }

  return (
    <>
      <Header />
      <JsonLd schema={profile} />
      <JsonLd schema={breadcrumbSchema([{ name: 'À propos', path: PATH }])} />
      <main className={styles.apMain}>
        <div className={styles.apInner}>
          <nav aria-label="Fil d'Ariane" className={styles.fil}>
            <Link href="/" className={styles.filLien}>Accueil</Link>
            <span aria-hidden="true">›</span>
            <span className={styles.filActuel}>À propos</span>
          </nav>

          <header className={styles.apEntete}>
            <Image src="/photo.jpg" alt="Aurélien Page" width={96} height={96} className={styles.apPhoto} priority />
            <div>
              <h1 className={styles.apH1}>Aurélien Page, consultant SEO, GEO et SEA à Rennes</h1>
              <p className={styles.apResume}>
                J&apos;aide les entreprises à être trouvées sur Google et citées par les IA : ChatGPT, Perplexity,
                Gemini, Claude et les AI Overviews. Je réalise des <strong>audits SEO et GEO</strong>, j&apos;accompagne
                des sites au mois, je pilote des campagnes Google Ads et je forme des équipes. Basé à Rennes, je
                travaille à distance et en déplacement.
              </p>
              <p className={styles.apMaj}>
                Mis à jour en <time dateTime={dates.modified}>{formatMonthYear(dates.modified)}</time>
              </p>
            </div>
          </header>

          <section className={styles.apSection}>
            <h2 className={styles.apH2}>Quel est mon parcours ?</h2>
            <p className={styles.apPara}>
              Je suis venu au référencement par l&apos;écriture. Journaliste web puis rédacteur, j&apos;ai d&apos;abord
              cherché à comprendre pourquoi un article était trouvé et un autre non. C&apos;est resté ma façon de
              travailler : partir du contenu et de la question du lecteur, puis régler la technique.
            </p>
            <ol className={styles.apFrise}>
              {PARCOURS.map((p) => (
                <li key={p.periode} className={styles.apEtape}>
                  <p className={styles.apPeriode}>{p.periode}</p>
                  <p className={styles.apRole}>{p.role}</p>
                  <p className={styles.apPara}>{p.texte}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className={styles.apSection}>
            <h2 className={styles.apH2}>Quelles sont mes formations ?</h2>
            <ul className={styles.apListe}>
              {FORMATIONS.map((f) => (
                <li key={f.titre}>
                  <strong>{f.titre}</strong>, {f.ecole}
                  {f.annee && <> ({f.annee})</>}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.apSection}>
            <h2 className={styles.apH2}>Comment je travaille ?</h2>
            <p className={styles.apPara}>
              Chaque recommandation s&apos;appuie sur une source officielle (documentation de Google, de Bing,
              d&apos;OpenAI, d&apos;Anthropic, de Perplexity, textes de loi) ou sur une mesure faite sur votre site.
              Je ne promets ni position ni nombre de citations. J&apos;explique chaque choix, pour que les équipes
              comprennent ce qui est fait et montent en compétences.
            </p>
            <p className={styles.apPara}>
              Mes réponses aux questions les plus fréquentes sont publiées, avec leurs sources, dans la rubrique{' '}
              <Link href="/reponses" className={styles.apLien}>Réponses SEO et GEO</Link>.
            </p>
          </section>

          <section className={styles.apSection}>
            <h2 className={styles.apH2}>Qu&apos;est-ce que Balise ?</h2>
            <p className={styles.apPara}>
              <strong>Balise</strong> est l&apos;outil de suivi SEO et GEO que j&apos;ai construit. Il pose une liste
              de questions aux IA, enregistre leurs réponses et les sources citées, calcule la part de voix, et croise
              ces relevés avec les données de la Search Console et de DataForSEO. Il me sert à répéter exactement la
              même mesure d&apos;un mois sur l&apos;autre, lors des{' '}
              <Link href="/prestations/audit-geo" className={styles.apLien}>audits GEO</Link>.
            </p>
          </section>

          <section className={styles.apSection}>
            <h2 className={styles.apH2}>Quel lien avec Audiaa ?</h2>
            <p className={styles.apPara}>
              J&apos;ai fondé <a href="https://www.audiaa.fr" className={styles.apLien}>Audiaa</a>, une agence IA et
              No Code à Rennes. Les rôles sont séparés : ce site porte le <strong>SEO, le GEO et le SEA</strong> ;
              Audiaa porte l&apos;IA appliquée, le No Code et l&apos;automatisation (Make, n8n, agents IA, formations
              No Code).
            </p>
          </section>

          <section className={styles.apSection}>
            <h2 className={styles.apH2}>Comment me contacter ?</h2>
            <p className={styles.apPara}>
              Par le <Link href="/contact" className={styles.apLien}>formulaire de contact</Link>, sur{' '}
              <a href="https://www.linkedin.com/in/aurelienpage" className={styles.apLien} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              , ou en réservant directement un diagnostic offert de 30 minutes.
            </p>
          </section>
        </div>

        <section className={styles.apCta}>
          <DiagnosticCTA variant="section" />
        </section>
      </main>
      <Footer />
    </>
  )
}
