import Link from 'next/link'
import { availability } from '@/config/availability'

export default function AvailabilityBadge() {
  if (!availability.available) return null

  return (
    <Link
      href="/#contact"
      className="group inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-emerald-400/10 border border-emerald-400/25 rounded-full hover:border-emerald-400/50 hover:bg-emerald-400/15 transition-all duration-200"
      title="Réserver un diagnostic gratuit →"
    >
      {/* Point vert animé */}
      <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
      </span>
      <span className="text-xs font-medium text-emerald-400 leading-none">
        {availability.label}
      </span>
    </Link>
  )
}
