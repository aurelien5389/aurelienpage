import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticCTA from '@/components/DiagnosticCTA'
import JsonLd from '@/components/JsonLd'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import AuthorBio from '@/components/AuthorBio'
import type { InternalLink } from '@/lib/internal-links'
import { SITE_URL, PERSON_ID, breadcrumbSchema, type Crumb } from '@/lib/schema'
import { formatMonthYear, type ContentDates } from '@/lib/content-dates'
import styles from './BlogPostLayout.module.css'

interface Props {
  h1: string
  body: string
  slug: string
  relatedLinks: InternalLink[]
  dates: ContentDates
  /** Chemin de la page. Par défaut /blog/[slug] */
  path?: string
  /** Rubrique parente du fil d'Ariane. Par défaut le blog */
  parent?: Crumb | null
}

const BLOG_PARENT: Crumb = { name: 'Blog SEO', path: '/blog' }

export default function BlogPostLayout({ h1, body, slug, relatedLinks, dates, path, parent = BLOG_PARENT }: Props) {
  const pagePath = path ?? `/blog/${slug}`
  const url = `${SITE_URL}${pagePath}`
  const author = { '@type': 'Person', '@id': PERSON_ID, name: 'Aurélien Page', url: SITE_URL }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: h1,
    author,
    publisher: author,
    datePublished: dates.published,
    dateModified: dates.modified,
    url,
    mainEntityOfPage: url,
    image: `${SITE_URL}/og-default.png`,
    inLanguage: 'fr-FR',
  }
  const crumbs = breadcrumbSchema([...(parent ? [parent] : []), { name: h1, path: pagePath }])

  return (
    <>
      <Header />
      <JsonLd schema={schema} />
      <JsonLd schema={crumbs} />
      <main className={styles.blogMain}>
        {/* Breadcrumb */}
        <div className={styles.blogFil}>
          <div className={styles.blogFilInner}>
            <nav aria-label="Fil d'Ariane" className={styles.blogFilNav}>
              <Link href="/" className={styles.blogFilLien}>Accueil</Link>
              <span aria-hidden="true">›</span>
              {parent && (
                <>
                  <Link href={parent.path} className={styles.blogFilLien}>{parent.name}</Link>
                  <span aria-hidden="true">›</span>
                </>
              )}
              <span className={styles.blogFilActuel}>{h1}</span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className={styles.blogArticle}>
          <div className={styles.blogInner}>
            <header className={styles.blogEntete}>
              <h1 className={styles.blogH1}>{h1}</h1>
              <div className={styles.blogMeta}>
                <span className={styles.blogAuteur}>
                  <span aria-hidden="true">✍</span>
                  <Link href="/a-propos" className={styles.blogAuteurLien}>
                    Aurélien PAGE
                  </Link>
                </span>
                <span aria-hidden="true">·</span>
                <span>Consultant SEO/GEO</span>
                <span aria-hidden="true">·</span>
                <time dateTime={dates.modified}>Mis à jour en {formatMonthYear(dates.modified)}</time>
              </div>
            </header>

            <AuthorBio />

            <MarkdownRenderer content={body} />
          </div>
        </article>

        {/* Related links — maillage interne */}
        {relatedLinks.length > 0 && (
          <section className={styles.blogConnexes}>
            <div className={styles.blogInner}>
              <p className={styles.blogConnexesTitre}>À lire aussi</p>
              <ul className={styles.blogConnexesListe}>
                {relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.blogConnexeLien}>
                      <span className={styles.blogConnexeFleche} aria-hidden="true">→</span>
                      <span className={styles.blogConnexeLabel}>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className={styles.blogCta}>
          <div className={styles.blogInner}>
            <DiagnosticCTA variant="section" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
