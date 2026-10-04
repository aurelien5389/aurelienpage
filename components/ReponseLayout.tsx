import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import MarkdownRenderer, { renderInline } from '@/components/MarkdownRenderer'
import { SITE_URL, PERSON_ID, breadcrumbSchema } from '@/lib/schema'
import { formatMonthYear, type ContentDates } from '@/lib/content-dates'
import type { Lien, Reponse } from '@/lib/reponses/types'
import styles from './ReponseLayout.module.css'

// Gabarit « article-réponse » : H1 = question, réponse directe, H2 en questions,
// tableau, sources, encadré « Qui répond », renvoi unique vers une fiche, FAQ.

const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*`]/g, '')

interface Props {
  r: Reponse
  dates: ContentDates
  voirAussi: Lien[]
}

export default function ReponseLayout({ r, dates, voirAussi }: Props) {
  const path = `/reponses/${r.slug}`
  const url = `${SITE_URL}${path}`
  const author = { '@type': 'Person', '@id': PERSON_ID, name: 'Aurélien Page', url: SITE_URL }

  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: r.question,
    description: plain(r.reponse),
    author,
    publisher: author,
    datePublished: r.publie,
    dateModified: dates.modified > r.publie ? dates.modified : r.publie,
    url,
    mainEntityOfPage: url,
    image: `${SITE_URL}/og-default.png`,
    inLanguage: 'fr-FR',
    citation: r.sources.map((s) => s.href),
  }
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: r.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: plain(f.a) },
    })),
  }
  const crumbs = breadcrumbSchema([
    { name: 'Réponses', path: '/reponses' },
    { name: r.question, path },
  ])
  const modified = dates.modified > r.publie ? dates.modified : r.publie

  return (
    <>
      <Header />
      <JsonLd schema={article} />
      <JsonLd schema={faq} />
      <JsonLd schema={crumbs} />
      <main className={styles.repMain}>
        <div className={styles.fil}>
          <nav aria-label="Fil d'Ariane" className={styles.filNav}>
            <Link href="/" className={styles.filLien}>Accueil</Link>
            <span aria-hidden="true">›</span>
            <Link href="/reponses" className={styles.filLien}>Réponses</Link>
            <span aria-hidden="true">›</span>
            <span className={styles.filActuel}>{r.theme}</span>
          </nav>
        </div>

        <article className={styles.repArticle}>
          {/* 1-2. Question et réponse directe */}
          <header className={styles.repEntete}>
            <h1 className={styles.repH1}>{r.question}</h1>
            <div className={styles.repReponse}>
              <p className={styles.repReponseLabel}>En bref</p>
              <p className={styles.repReponseTexte}>{renderInline(r.reponse, 'rep')}</p>
            </div>
            <p className={styles.repMeta}>
              Par <Link href="/a-propos" className={styles.repMetaLien}>Aurélien Page</Link>, consultant SEO et GEO ·{' '}
              <time dateTime={modified}>Mis à jour en {formatMonthYear(modified)}</time>
            </p>
          </header>

          {/* 3. Sections en questions */}
          {r.sections.map((s) => (
            <section key={s.h2} className={styles.repSection}>
              <h2 className={styles.repH2}>{s.h2}</h2>
              <MarkdownRenderer content={s.corps} />
            </section>
          ))}

          {/* 4. Tableau récapitulatif */}
          <section className={styles.repSection}>
            <h2 className={styles.repH2}>{r.tableau.titre}</h2>
            <div className={styles.repTableWrap}>
              <table className={styles.repTable}>
                <thead>
                  <tr>
                    {r.tableau.colonnes.map((c) => (
                      <th key={c} scope="col">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {r.tableau.lignes.map((l, i) => (
                    <tr key={i}>
                      {l.map((cell, j) =>
                        j === 0 ? (
                          <th key={j} scope="row">{renderInline(cell, `t-${i}-${j}`)}</th>
                        ) : (
                          <td key={j}>{renderInline(cell, `t-${i}-${j}`)}</td>
                        )
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 8. FAQ */}
          <section className={styles.repSection}>
            <h2 className={styles.repH2}>Questions liées</h2>
            {r.faq.map((f, i) => (
              <details key={f.q} className={styles.repFaq}>
                <summary>{f.q}</summary>
                <p>{renderInline(f.a, `faq-${i}`)}</p>
              </details>
            ))}
          </section>

          {/* 5. Sources */}
          <section className={styles.repSection}>
            <h2 className={styles.repH2}>Sources</h2>
            <ul className={styles.repListe}>
              {r.sources.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className={styles.repLien}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* 6. Qui répond */}
          <aside aria-label="Qui répond" className={styles.repAuteur}>
            <Image src="/photo.jpg" alt="Aurélien Page" width={64} height={64} className={styles.repAuteurPhoto} />
            <div>
              <p className={styles.repAuteurTitre}>Qui répond</p>
              <p className={styles.repAuteurTexte}>
                <strong>Aurélien Page</strong>, consultant SEO et GEO à Rennes. SEO et SEA depuis 2020, journaliste web
                auparavant. Je mesure la visibilité des sites dans les IA avec Balise, un outil que j&apos;ai construit.{' '}
                <Link href="/a-propos" className={styles.repLien}>En savoir plus</Link>
              </p>
            </div>
          </aside>

          {/* 7. Renvoi commercial unique */}
          <aside aria-label="Prestation liée" className={styles.repFiche}>
            <p className={styles.repFicheTexte}>{renderInline(r.fiche.texte, 'fiche')}</p>
            <Link href={r.fiche.href} className={styles.repFicheBouton}>
              {r.fiche.label} <span aria-hidden="true">→</span>
            </Link>
          </aside>

          {voirAussi.length > 0 && (
            <nav aria-label="Autres réponses" className={styles.repVoirAussi}>
              <p className={styles.repAuteurTitre}>Autres réponses</p>
              <ul className={styles.repListe}>
                {voirAussi.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.repLien}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </article>
      </main>
      <Footer />
    </>
  )
}
