import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { renderInline } from '@/components/MarkdownRenderer'
import { REPONSES, THEMES } from '@/lib/reponses'
import { SITE_URL, breadcrumbSchema } from '@/lib/schema'
import styles from './page.module.css'

const TITLE = 'Réponses SEO et GEO : des réponses courtes et sourcées · Aurélien PAGE'
const DESCRIPTION =
  "GEO, SEO, robots d'IA, llms.txt, contenus IA, audits : des réponses directes aux questions que l'on me pose, avec leurs sources officielles."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/reponses` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/reponses` },
}

export default function ReponsesIndex() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Réponses SEO et GEO',
    itemListElement: REPONSES.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/reponses/${r.slug}`,
      name: r.question,
    })),
  }

  return (
    <>
      <Header />
      <JsonLd schema={breadcrumbSchema([{ name: 'Réponses', path: '/reponses' }])} />
      <JsonLd schema={itemList} />
      <main className={styles.idxMain}>
        <div className={styles.idxInner}>
          <nav aria-label="Fil d'Ariane" className={styles.fil}>
            <Link href="/" className={styles.filLien}>Accueil</Link>
            <span aria-hidden="true">›</span>
            <span className={styles.filActuel}>Réponses</span>
          </nav>

          <h1 className={styles.idxH1}>Réponses SEO et GEO</h1>
          <p className={styles.idxChapo}>
            Les questions que l&apos;on me pose le plus, avec une réponse directe en tête de page et les sources
            officielles qui la justifient : Google, Bing, OpenAI, Anthropic, Perplexity. Pour aller plus loin, le{' '}
            <Link href="/blog" className={styles.idxLien}>blog</Link> explique le comment et le pourquoi.
          </p>

          {THEMES.map((theme) => {
            const items = REPONSES.filter((r) => r.theme === theme)
            if (items.length === 0) return null
            return (
              <section key={theme} className={styles.idxTheme}>
                <h2 className={styles.idxH2}>{theme}</h2>
                <ul className={styles.idxListe}>
                  {items.map((r) => (
                    <li key={r.slug} className={styles.idxItem}>
                      <Link href={`/reponses/${r.slug}`} className={styles.idxQuestion}>
                        {r.question}
                      </Link>
                      <p className={styles.idxReponse}>{renderInline(r.reponse, r.slug)}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}
        </div>
      </main>
      <Footer />
    </>
  )
}
