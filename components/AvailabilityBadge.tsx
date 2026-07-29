import Link from 'next/link'
import { availability } from '@/config/availability'
import styles from './AvailabilityBadge.module.css'

export default function AvailabilityBadge() {
  if (!availability.available) return null

  return (
    <Link
      href="/#contact"
      className={styles.badgeDispo}
      title="Réserver un diagnostic gratuit →"
    >
      <span className={styles.dispoPastille} aria-hidden="true">
        <span className={styles.dispoOnde} />
        <span className={styles.dispoCoeur} />
      </span>
      <span className={styles.dispoLabel}>{availability.label}</span>
    </Link>
  )
}
