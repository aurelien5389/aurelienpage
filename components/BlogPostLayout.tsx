import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticCTA from '@/components/DiagnosticCTA'
import JsonLd from '@/components/JsonLd'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import AuthorBio from '@/components/AuthorBio'
import type { InternalLink } from '@/lib/internal-links'
import styles from './BlogPostLayout.module.css'

interface Props {
  h1: string
  body: string
  slug: string
  relatedLinks: InternalLink[]
}

export default function BlogPostLayout({ h1, body, slug, relatedLinks }: Props) {
  const author = {
    '@type': 'Person',
    name: 'Aurélien PAGE',
    url: 'https://aurelienpage.fr',
    image: 'https://aurelienpage.fr/photo.jpg',
    jobTitle: 'Consultant SEO & GEO, Traffic Manager SEA, Formateur No-Code & IA',
    sameAs: ['https://www.linkedin.com/in/aurelienpage'],
    knowsAbout: ['SEO', 'GEO', 'SEA', 'Google Ads', 'Marketing digital', 'IA générative', 'No-code', 'Make', 'Airtable'],
    alumniOf: [
      { '@type': 'EducationalOrganization', name: 'IEP Rennes' },
      { '@type': 'EducationalOrganization', name: '301 Ades Bootcamp' },
    ],
    description: "Consultant SEO, SEA & GEO freelance, 8 ans d'expérience. Issu du journalisme web, ex-consultant groupe média B2B (Usine Digitale, Usine Nouvelle). Expert SEO, Master Droit du numérique.",
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: h1,
    author,
    publisher: author,
    url: `https://aurelienpage.fr/blog/${slug}`,
    mainEntityOfPage: `https://aurelienpage.fr/blog/${slug}`,
    image: 'https://aurelienpage.fr/og-default.png',
    inLanguage: 'fr-FR',
  }

  return (
    <>
      <Header />
      <JsonLd schema={schema} />
      <main className={styles.blogMain}>
        {/* Breadcrumb */}
        <div className={styles.blogFil}>
          <div className={styles.blogFilInner}>
            <nav aria-label="Fil d'Ariane" className={styles.blogFilNav}>
              <Link href="/" className={styles.blogFilLien}>Accueil</Link>
              <span aria-hidden="true">›</span>
              <Link href="/blog" className={styles.blogFilLien}>Blog SEO</Link>
              <span aria-hidden="true">›</span>
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
                  <Link href="/" className={styles.blogAuteurLien}>
                    Aurélien PAGE
                  </Link>
                </span>
                <span aria-hidden="true">·</span>
                <span>Consultant SEO/GEO</span>
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
