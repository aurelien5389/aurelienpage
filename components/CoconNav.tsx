import Link from 'next/link'
import Icon from '@/components/Icon'
import { COCONS, getCocon } from '@/lib/cocons'
import styles from './CoconNav.module.css'

interface Props {
  /** Chemin de la page courante */
  path: string
}

// Maillage du cocon : guide de départ, pages sœurs, fiche liée.
// Sur une page mère : toutes les pages du dossier et les autres guides de la même famille.
export default function CoconNav({ path }: Props) {
  const cocon = getCocon(path)
  if (!cocon) return null
  const estMere = cocon.mere.href === path
  const pages = cocon.pages.filter((p) => p.href !== path)
  const autresMeres = estMere
    ? COCONS.filter((c) => c.famille === cocon.famille && c.id !== cocon.id).map((c) => ({ href: c.mere.href, label: c.titre }))
    : []

  return (
    <nav aria-label={`Dossier ${cocon.titre}`} className={styles.cocon}>
      <div className={styles.coconInner}>
        <p className={styles.coconSurtitre}>Dossier {cocon.famille}</p>
        <p className={styles.coconTitre}>{cocon.titre}</p>

        {!estMere && (
          <Link href={cocon.mere.href} className={styles.coconMere}>
            <span className={styles.coconMereEtiquette}>Guide de départ</span>
            <span className={styles.coconMereLabel}>{cocon.mere.label}</span>
            <Icon name="arrow" size={18} className={styles.coconFleche} />
          </Link>
        )}

        <p className={styles.coconSousTitre}>{estMere ? 'Toutes les pages du dossier' : 'Dans le même dossier'}</p>
        <ul className={styles.coconListe}>
          {pages.map((p) => (
            <li key={p.href}>
              <Link href={p.href} className={styles.coconLien}>{p.label}</Link>
            </li>
          ))}
        </ul>

        {autresMeres.length > 0 && (
          <>
            <p className={styles.coconSousTitre}>Autres dossiers {cocon.famille}</p>
            <ul className={styles.coconListe}>
              {autresMeres.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className={styles.coconLien}>{p.label}</Link>
                </li>
              ))}
            </ul>
          </>
        )}

        <p className={styles.coconFiche}>
          Prestation liée : <Link href={cocon.fiche.href} className={styles.coconFicheLien}>{cocon.fiche.label}</Link>
          {' · '}
          En local : <Link href={cocon.local.href.replace('rennes', 'laval')} className={styles.coconFicheLien}>{cocon.local.label.replace('Rennes', 'Laval')}</Link>
          {' · '}
          <Link href={cocon.local.href} className={styles.coconFicheLien}>{cocon.local.label}</Link>
          {' · '}
          <Link href="/zones-intervention" className={styles.coconFicheLien}>Zones d&apos;intervention</Link>
          {' · '}
          <Link href="/ressources" className={styles.coconFicheLien}>Toutes les ressources SEO et GEO</Link>
        </p>
      </div>
    </nav>
  )
}
