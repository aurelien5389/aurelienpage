import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticCTA from '@/components/DiagnosticCTA'
import JsonLd from '@/components/JsonLd'
import { PERSON_ID, SITE_URL, breadcrumbSchema } from '@/lib/schema'
import styles from './PrestationDetail.module.css'

export interface PrestationData {
  icon: string
  h1: string
  pitch: string
  pourQui: string
  missions: string[]
  outils: string[]
  formats: string[]
  serviceSchema: { url: string } & Record<string, unknown>
}

export default function PrestationDetail({ data }: { data: PrestationData }) {
  const name = data.h1.split(' : ')[0]
  const service = {
    ...data.serviceSchema,
    provider: { '@type': 'Person', '@id': PERSON_ID, name: 'Aurélien Page', url: SITE_URL },
  }
  const crumbs = breadcrumbSchema([
    { name: 'Prestations', path: '/prestations' },
    { name, path: data.serviceSchema.url.replace(SITE_URL, '') },
  ])

  return (
    <>
      <Header />
      <JsonLd schema={service} />
      <JsonLd schema={crumbs} />
      <main className={styles.prestaMain}>
        {/* Breadcrumb */}
        <div className={styles.filAriane}>
          <div className={styles.filArianeInner}>
            <nav aria-label="Fil d'Ariane" className={styles.fil}>
              <Link href="/" className={styles.filLien}>Accueil</Link>
              <span aria-hidden="true">›</span>
              <Link href="/prestations" className={styles.filLien}>Prestations</Link>
              <span aria-hidden="true">›</span>
              <span className={styles.filActuel}>{name}</span>
            </nav>
          </div>
        </div>

        {/* Hero prestation */}
        <section className={styles.prestaHero}>
          <div className={styles.prestaHeroInner}>
            <div className={styles.prestaHeroBloc}>
              <div className={styles.prestaIcone} aria-hidden="true">{data.icon}</div>
              <h1 className={styles.prestaH1}>{data.h1}</h1>
              <p className={styles.prestaPitch}>{data.pitch}</p>
              <div className={styles.prestaPourQui}>
                <span aria-hidden="true">👥</span>
                <span>Pour qui : {data.pourQui}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contenu */}
        <section className={styles.prestaContenu}>
          <div className={styles.prestaContenuInner}>
            <div className={styles.prestaGrille}>
              {/* Ce que j'apporte */}
              <article className={styles.prestaApporte}>
                <h2 className={styles.prestaSousTitre}>Ce que j&apos;apporte</h2>
                <ul className={styles.prestaMissions}>
                  {data.missions.map((m) => (
                    <li key={m} className={styles.prestaMission}>
                      <span className={styles.prestaCoche} aria-hidden="true">✓</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </article>

              {/* Outils + Formats */}
              <div className={styles.prestaAside}>
                <div className={styles.prestaBloc}>
                  <h2 className={styles.prestaBlocTitre}>Outils mobilisés</h2>
                  <div className={styles.prestaChips}>
                    {data.outils.map((o) => (
                      <span key={o} className={styles.prestaChipOutil}>{o}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.prestaBloc}>
                  <h2 className={styles.prestaBlocTitre}>Formats d&apos;intervention</h2>
                  <div className={styles.prestaChips}>
                    {data.formats.map((f) => (
                      <span key={f} className={styles.prestaChipFormat}>{f}</span>
                    ))}
                  </div>
                </div>

                <Link href="/#contact" className={styles.prestaContact}>
                  Me contacter pour cette prestation
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* DiagnosticCTA */}
        <section className={styles.prestaCta}>
          <div className={styles.prestaCtaInner}>
            <DiagnosticCTA variant="section" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
