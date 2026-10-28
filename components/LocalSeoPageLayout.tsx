import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticCTA from '@/components/DiagnosticCTA'
import JsonLd from '@/components/JsonLd'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import Icon from '@/components/Icon'
import type { InternalLink } from '@/lib/internal-links'
import { personRef, breadcrumbSchema, pageGraph } from '@/lib/schema'
import { ZONES_PATH, aLaVille, getRegionDeVille, modaliteTexte, nomDeVille, villesLiens } from '@/lib/zones'
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
    '@type': 'Service',
    '@id': `https://aurelienpage.fr${slug}#offre`,
    name: `Consultant SEO ${aLaVille(ville)}`,
    provider: personRef,
    areaServed: ville,
    url: `https://aurelienpage.fr${slug}`,
    description: `Consultant SEO freelance ${aLaVille(ville)}. Audit SEO, optimisation technique et stratégie GEO. Diagnostic offert.`,
  }

  // Appel au diagnostic au milieu du texte, juste avant les tarifs (ou la FAQ à défaut)
  const coupure = body.search(/^## (Combien|Tarifs|Questions fréquentes)/m)
  const avantTarifs = coupure > 0 ? body.slice(0, coupure) : body
  const apresTarifs = coupure > 0 ? body.slice(coupure) : ''

  // Cocon local : Zones d'intervention › région › ville
  const zone = getRegionDeVille(slug)
  const parents = zone
    ? [{ name: "Zones d'intervention", path: ZONES_PATH }, { name: zone.region.nom, path: zone.region.path }]
    : [{ name: 'Consultant SEO & GEO', path: '/prestations/consultant-seo-geo' }]
  const crumbs = breadcrumbSchema([...parents, { name: ville, path: slug }])

  return (
    <>
      <Header />
      <JsonLd schema={pageGraph(schema, crumbs)} />
      <main className={styles.localMain}>
        {/* Breadcrumb */}
        <div className={styles.localFil}>
          <div className={styles.localFilInner}>
            <nav aria-label="Fil d'Ariane" className={styles.localFilNav}>
              <Link href="/" className={styles.localFilLien}>Accueil</Link>
              <span aria-hidden="true">›</span>
              {parents.map((p) => (
                <span key={p.path} className={styles.localFilEtape}>
                  <Link href={p.path} className={styles.localFilLien}>{p.name}</Link>
                  <span aria-hidden="true">›</span>
                </span>
              ))}
              <span className={styles.localFilActuel}>{ville}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className={styles.localHero}>
          <div className={styles.localInner}>
            <div className={styles.localVilleTag}>
              <Icon name="pin" size={18} />
              {ville}
            </div>
            <h1 className={styles.localH1}>{h1.split(/ [|·] /)[0]}</h1>
            <div className={styles.localHeroActions}>
              <a
                href="https://calendly.com/aurelienpage89/diagnostic-offert-30-min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primaire"
              >
                Diagnostic offert <Icon name="arrow" size={18} />
              </a>
              <Link href="/prestations/consultant-seo-geo" className="btn btn-secondaire">
                Voir toutes mes prestations SEO
              </Link>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className={styles.localArticle}>
          <div className={styles.localInner}>
            <MarkdownRenderer content={avantTarifs} />
            {apresTarifs && (
              <>
                <DiagnosticCTA variant="banner" />
                <MarkdownRenderer content={apresTarifs} />
              </>
            )}
          </div>
        </article>

        {/* Modalités et région : remonte vers la page régionale, liens vers les autres villes */}
        {zone && (
          <section className={styles.localBloc}>
            <div className={styles.localInner}>
              <p className={styles.localBlocTitre}>Intervenir {aLaVille(ville)}</p>
              <p className={styles.localModalite}>{modaliteTexte(zone.ville)}</p>
              <p className={styles.localModalite}>
                <Link href={zone.region.path} className={styles.localRegionLien}>{zone.region.label}</Link>
                {' · '}
                <Link href={ZONES_PATH} className={styles.localRegionLien}>Toutes mes zones d&apos;intervention</Link>
              </p>
              <ul className={styles.localVilles}>
                {villesLiens(zone.region, slug).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.localVilleLien}>
                      <Icon name="pin" size={16} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Nearby cities */}
        {nearbyLinks.length > 0 && (
          <section className={styles.localBloc}>
            <div className={styles.localInner}>
              <p className={styles.localBlocTitre}>Villes proches</p>
              <ul className={styles.localVilles}>
                {nearbyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.localVilleLien}>
                      <Icon name="pin" size={16} />
                      {nomDeVille(link.href) ?? link.label.replace('Consultant SEO à ', '')}
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
                    <Icon name="arrow" size={18} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <DiagnosticCTA variant="section" />
      </main>
      <Footer />
    </>
  )
}
