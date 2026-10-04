import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticCTA from '@/components/DiagnosticCTA'
import JsonLd from '@/components/JsonLd'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import type { InternalLink } from '@/lib/internal-links'
import { PERSON_ID, SITE_URL, breadcrumbSchema } from '@/lib/schema'
import styles from './LocalSeoPageLayout.module.css'

interface Props {
  h1: string
  body: string
  ville: string
  slug: string
  nearbyLinks: InternalLink[]
  blogLinks: InternalLink[]
}

export default function LocalSeoPageLayout({ h1, body, ville, slug, nearbyLinks, blogLinks }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Consultant SEO à ${ville}`,
    provider: { '@type': 'Person', '@id': PERSON_ID, name: 'Aurélien Page', url: SITE_URL },
    areaServed: ville,
    url: `https://aurelienpage.fr${slug}`,
    description: `Consultant SEO freelance à ${ville}. Audit SEO, optimisation technique et stratégie GEO. Diagnostic offert.`,
  }

  const crumbs = breadcrumbSchema([
    { name: 'Consultant SEO & GEO', path: '/prestations/consultant-seo-geo' },
    { name: ville, path: slug },
  ])

  return (
    <>
      <Header />
      <JsonLd schema={schema} />
      <JsonLd schema={crumbs} />
      <main className={styles.localMain}>
        {/* Breadcrumb */}
        <div className={styles.localFil}>
          <div className={styles.localFilInner}>
            <nav aria-label="Fil d'Ariane" className={styles.localFilNav}>
              <Link href="/" className={styles.localFilLien}>Accueil</Link>
              <span aria-hidden="true">›</span>
              <Link href="/prestations/consultant-seo-geo" className={styles.localFilLien}>
                Consultant SEO &amp; GEO
              </Link>
              <span aria-hidden="true">›</span>
              <span className={styles.localFilActuel}>{ville}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className={styles.localHero}>
          <div className={styles.localInner}>
            <div className={styles.localVilleTag}>
              <span aria-hidden="true">📍</span>
              {ville}
            </div>
            <h1 className={styles.localH1}>{h1}</h1>
            <div className={styles.localHeroActions}>
              <a
                href="https://calendly.com/aurelienpage89/diagnostic-offert-30-min"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.localBtnPrimaire}
              >
                Diagnostic offert →
              </a>
              <Link href="/prestations/consultant-seo-geo" className={styles.localBtnSecondaire}>
                Voir toutes mes prestations SEO
              </Link>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className={styles.localArticle}>
          <div className={styles.localInner}>
            <MarkdownRenderer content={body} />
          </div>
        </article>

        {/* Nearby cities */}
        {nearbyLinks.length > 0 && (
          <section className={styles.localBloc}>
            <div className={styles.localInner}>
              <p className={styles.localBlocTitre}>Villes proches</p>
              <ul className={styles.localVilles}>
                {nearbyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.localVilleLien}>
                      <span className={styles.localVillePin} aria-hidden="true">📍</span>
                      {link.label.replace('Consultant SEO à ', '')}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Blog links */}
        <section className={styles.localBloc}>
          <div className={styles.localInner}>
            <p className={styles.localBlocTitre}>Ressources SEO utiles</p>
            <ul className={styles.localRessources}>
              {blogLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.localRessourceLien}>
                    <span className={styles.localRessourceFleche} aria-hidden="true">→</span>
                    <span className={styles.localRessourceLabel}>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.localCta}>
          <div className={styles.localInner}>
            <DiagnosticCTA variant="section" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
