import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticCTA from '@/components/DiagnosticCTA'
import JsonLd from '@/components/JsonLd'

export interface PrestationData {
  icon: string
  h1: string
  pitch: string
  pourQui: string
  missions: string[]
  outils: string[]
  formats: string[]
  serviceSchema: object
}

export default function PrestationDetail({ data }: { data: PrestationData }) {
  return (
    <>
      <Header />
      <JsonLd schema={data.serviceSchema} />
      <main className="pt-16 sm:pt-20">
        {/* Breadcrumb */}
        <div className="border-b border-steel/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-xs text-gray-secondary">
              <Link href="/" className="hover:text-cyan transition-colors duration-200">Accueil</Link>
              <span aria-hidden="true">›</span>
              <Link href="/prestations" className="hover:text-cyan transition-colors duration-200">Prestations</Link>
              <span aria-hidden="true">›</span>
              <span className="text-off-white">{data.h1.split(' — ')[0]}</span>
            </nav>
          </div>
        </div>

        {/* Hero prestation */}
        <section className="py-16 sm:py-24 border-b border-steel/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-4xl mb-6" aria-hidden="true">{data.icon}</div>
              <h1 className="font-space-grotesk font-bold text-3xl sm:text-5xl text-off-white leading-tight mb-5">
                {data.h1}
              </h1>
              <p className="text-gray-secondary text-lg leading-relaxed mb-6">
                {data.pitch}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-steel/20 border border-steel/40 rounded-lg text-xs text-gray-secondary">
                <span aria-hidden="true">👥</span>
                <span>Pour qui : {data.pourQui}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contenu */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Ce que j'apporte */}
              <div className="p-7 bg-steel/15 border border-steel/40 rounded-2xl">
                <h2 className="font-space-grotesk font-semibold text-off-white text-xs uppercase tracking-wider mb-5">
                  Ce que j&apos;apporte
                </h2>
                <ul className="space-y-3">
                  {data.missions.map((m) => (
                    <li key={m} className="flex items-start gap-3 text-sm text-gray-secondary leading-relaxed">
                      <span className="text-cyan mt-0.5 shrink-0" aria-hidden="true">✓</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outils + Formats */}
              <div className="space-y-6">
                <div className="p-6 bg-steel/10 border border-steel/30 rounded-2xl">
                  <h2 className="font-space-grotesk font-semibold text-off-white text-xs uppercase tracking-wider mb-4">
                    Outils mobilisés
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {data.outils.map((o) => (
                      <span key={o} className="px-2.5 py-1 text-xs bg-steel/30 text-gray-secondary rounded-lg border border-steel/40">
                        {o}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-steel/10 border border-steel/30 rounded-2xl">
                  <h2 className="font-space-grotesk font-semibold text-off-white text-xs uppercase tracking-wider mb-4">
                    Formats d&apos;intervention
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {data.formats.map((f) => (
                      <span key={f} className="px-2.5 py-1 text-xs bg-cyan/10 text-cyan rounded-lg border border-cyan/20">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-navy font-space-grotesk font-semibold rounded-xl hover:bg-cyan-hover transition-colors duration-200"
                >
                  Me contacter pour cette prestation
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* DiagnosticCTA */}
        <section className="py-12 sm:py-16 border-t border-steel/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <DiagnosticCTA variant="section" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
