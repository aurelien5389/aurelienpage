import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticCTA from '@/components/DiagnosticCTA'
import JsonLd from '@/components/JsonLd'
import { renderInline } from '@/components/MarkdownRenderer'
import { SITE_URL, PERSON_ID, breadcrumbSchema, type Crumb } from '@/lib/schema'
import { formatMonthYear, type ContentDates } from '@/lib/content-dates'
import styles from './FicheLayout.module.css'

// Gabarit « fiche prestation ou formation » (10 blocs, voir GEO-REGLES.md).
// Les textes acceptent le Markdown en ligne : **gras**, [lien](/url).

export interface FicheEtape {
  titre: string
  duree: string
  livrable: string
  texte: string
}

export interface FicheData {
  path: string
  parent: Crumb
  /** Nom court pour le fil d'Ariane */
  nom: string
  h1: string
  /** Résumé factuel de 40 à 60 mots */
  resume: string
  identite: { label: string; valeur: string }[]
  pourquoiTitre: string
  pourquoi: string[]
  derouleTitre: string
  deroule: FicheEtape[]
  pourquoiMoi: string[]
  outils: string[]
  exemplesMissions?: string
  modalites: string[]
  /** Liens vers les pages locales (optionnel) */
  zones?: { titre: string; liens: { href: string; label: string }[] }
  faq: { q: string; a: string }[]
  liens: { href: string; label: string }[]
  sources: { href: string; label: string }[]
  /** Nœud Service ou Course (sans @context, provider ni url : ajoutés ici) */
  schema: Record<string, unknown>
  dates: ContentDates
}

// Texte brut pour le JSON-LD : retire le Markdown en ligne
const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*`]/g, '')

const md = (s: string, key: string | number) => renderInline(s, key)

export default function FicheLayout({ data }: { data: FicheData }) {
  const url = `${SITE_URL}${data.path}`
  const provider = { '@type': 'Person', '@id': PERSON_ID, name: 'Aurélien Page', url: SITE_URL }
  const mainSchema = {
    '@context': 'https://schema.org',
    ...data.schema,
    url,
    description: plain(data.resume),
    provider,
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: plain(f.a) },
    })),
  }
  const crumbs = breadcrumbSchema([data.parent, { name: data.nom, path: data.path }])

  return (
    <>
      <Header />
      <JsonLd schema={mainSchema} />
      <JsonLd schema={faqSchema} />
      <JsonLd schema={crumbs} />
      <main className={styles.ficheMain}>
        <div className={styles.fil}>
          <nav aria-label="Fil d'Ariane" className={styles.filNav}>
            <Link href="/" className={styles.filLien}>Accueil</Link>
            <span aria-hidden="true">›</span>
            <Link href={data.parent.path} className={styles.filLien}>{data.parent.name}</Link>
            <span aria-hidden="true">›</span>
            <span className={styles.filActuel}>{data.nom}</span>
          </nav>
        </div>

        <article className={styles.ficheArticle}>
          {/* 1-2. H1 et résumé factuel */}
          <header className={styles.ficheEntete}>
            <h1 className={styles.ficheH1}>{data.h1}</h1>
            <p className={styles.ficheResume}>{md(data.resume, 'resume')}</p>
            <p className={styles.ficheMaj}>
              <Link href="/a-propos" className={styles.ficheLien}>Aurélien Page</Link> · <time dateTime={data.dates.modified}>Mis à jour en {formatMonthYear(data.dates.modified)}</time>
            </p>
          </header>

          {/* 3. Carte d'identité */}
          <section aria-labelledby="identite" className={styles.ficheBloc}>
            <h2 id="identite" className={styles.ficheH2}>En bref</h2>
            <table className={`tableau ${styles.ficheTable}`}>
              <tbody>
                {data.identite.map((row, i) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>{md(row.valeur, `id-${i}`)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* 4. Pourquoi */}
          <section aria-labelledby="pourquoi" className={styles.ficheBloc}>
            <h2 id="pourquoi" className={styles.ficheH2}>{data.pourquoiTitre}</h2>
            {data.pourquoi.map((p, i) => (
              <p key={i} className={styles.fichePara}>{md(p, `pq-${i}`)}</p>
            ))}
          </section>

          {/* 5. Déroulé */}
          <section aria-labelledby="deroule" className={styles.ficheBloc}>
            <h2 id="deroule" className={styles.ficheH2}>{data.derouleTitre}</h2>
            <ol className={styles.ficheEtapes}>
              {data.deroule.map((e, i) => (
                <li key={e.titre} className={styles.ficheEtape}>
                  <span className={styles.ficheNum} aria-hidden="true">{i + 1}</span>
                  <div>
                    <h3 className={styles.ficheH3}>{e.titre}</h3>
                    <p className={styles.fichePara}>{md(e.texte, `et-${i}`)}</p>
                    <p className={styles.ficheEtapeMeta}>
                      <span><strong>Durée :</strong> {md(e.duree, `du-${i}`)}</span>
                      <span><strong>Livrable :</strong> {md(e.livrable, `li-${i}`)}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* 6. Pourquoi travailler avec moi */}
          <section aria-labelledby="moi" className={styles.ficheBloc}>
            <h2 id="moi" className={styles.ficheH2}>Pourquoi travailler avec moi</h2>
            {data.pourquoiMoi.map((p, i) => (
              <p key={i} className={styles.fichePara}>{md(p, `moi-${i}`)}</p>
            ))}
            <p className={styles.fichePara}><strong>Outils :</strong> {data.outils.join(', ')}.</p>
            {data.exemplesMissions && (
              <>
                <h3 className={styles.ficheH3}>Exemples de missions</h3>
                <p className={styles.fichePara}>{md(data.exemplesMissions, 'ex')}</p>
              </>
            )}
          </section>

          {/* 7. Modalités */}
          <section aria-labelledby="modalites" className={styles.ficheBloc}>
            <h2 id="modalites" className={styles.ficheH2}>Modalités et délai de démarrage</h2>
            <ul className={styles.ficheListe}>
              {data.modalites.map((m, i) => (
                <li key={i}>{md(m, `mod-${i}`)}</li>
              ))}
            </ul>
          </section>

          {data.zones && (
            <section aria-labelledby="zones" className={styles.ficheBloc}>
              <h2 id="zones" className={styles.ficheH2}>{data.zones.titre}</h2>
              <p className={styles.ficheZones}>
                {data.zones.liens.map((l, i) => (
                  <span key={l.href}>
                    {i > 0 && ' · '}
                    <Link href={l.href} className={styles.ficheLien}>{l.label}</Link>
                  </span>
                ))}
              </p>
            </section>
          )}

          {/* 8. FAQ */}
          <section aria-labelledby="faq" className={styles.ficheBloc}>
            <h2 id="faq" className={styles.ficheH2}>Questions fréquentes</h2>
            {data.faq.map((f, i) => (
              <details key={f.q} className="faq">
                <summary>{f.q}</summary>
                <p className={styles.fichePara}>{md(f.a, `faq-${i}`)}</p>
              </details>
            ))}
          </section>

          {/* 9. Pour aller plus loin + sources */}
          <section aria-labelledby="liens" className={styles.ficheBloc}>
            <h2 id="liens" className={styles.ficheH2}>Pour aller plus loin</h2>
            <ul className={styles.ficheListe}>
              {data.liens.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.ficheLien}>{l.label}</Link>
                </li>
              ))}
            </ul>
            {data.sources.length > 0 && (
              <>
                <h3 className={styles.ficheH3}>Sources</h3>
                <ul className={styles.ficheListe}>
                  {data.sources.map((s) => (
                    <li key={s.href}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className={styles.ficheLien}>
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>
        </article>

        <DiagnosticCTA variant="section" />
      </main>
      <Footer />
    </>
  )
}
