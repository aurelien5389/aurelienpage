import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ReponseLayout from '@/components/ReponseLayout'
import { REPONSES, getReponse, reponseLien, reponseDates } from '@/lib/reponses'
import type { Lien } from '@/lib/reponses/types'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return REPONSES.map((r) => ({ slug: r.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const r = getReponse(params.slug)
  if (!r) return {}
  const url = `https://aurelienpage.fr/reponses/${r.slug}`
  const title = `${r.titre} · Aurélien PAGE`
  return {
    title,
    description: r.metaDescription,
    alternates: { canonical: url },
    openGraph: { title, description: r.metaDescription, url, type: 'article' },
  }
}

export default function ReponsePage({ params }: Props) {
  const r = getReponse(params.slug)
  if (!r) notFound()
  const voirAussi = (r.voirAussi ?? []).map(reponseLien).filter((l): l is Lien => Boolean(l))
  return <ReponseLayout r={r} dates={reponseDates(r)} voirAussi={voirAussi} />
}
