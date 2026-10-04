import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/components/Icon'
import styles from './AuthorBio.module.css'

const BADGES = [
  "8 ans d'expérience",
  'SEO · SEA · GEO',
  'Formation SEO et GEO',
  'Rennes · Remote',
]

export default function AuthorBio() {
  return (
    <aside aria-label="À propos de l'auteur" className={styles.bioAside}>
      <div className={styles.bioCarte}>
        <Image
          src="/photo.jpg"
          alt="Aurélien PAGE, consultant SEO & Marketing Digital"
          width={80}
          height={80}
          className={styles.bioPortrait}
        />

        <div className={styles.bioCorps}>
          <div className={styles.bioNomRangee}>
            <span className={styles.bioNom}>Aurélien PAGE</span>
            <span className={styles.bioBadgeAuteur}>Auteur</span>
          </div>

          <p className={styles.bioRole}>
            Consultant SEO, GEO et SEA · Formateur SEO et GEO · Rennes
          </p>

          <p className={styles.bioTexte}>
            Issu du journalisme web et de la rédaction web, j&apos;ai développé une expertise SEO,
            SEA et GEO au fil de 8 ans de missions en agence web, pour un groupe média B2B
            (Usine Digitale, Usine Nouvelle) et en freelance. Diplômé d&apos;un Master en Droit du
            numérique et d&apos;une formation d&apos;Expert SEO, je me spécialise depuis 2023 sur le GEO
            (optimisation pour les moteurs de recherche à IA). L&apos;IA appliquée et le No Code sont portés
            par <a href="https://www.audiaa.fr" className={styles.bioLien}>Audiaa</a>, l&apos;agence que j&apos;ai fondée.
          </p>

          <div className={styles.bioBadges}>
            {BADGES.map((badge) => (
              <span key={badge} className={styles.bioBadge}>
                {badge}
              </span>
            ))}
          </div>

          <div className={styles.bioLiens}>
            <Link href="/a-propos" className={styles.bioLienSite}>
              À propos
            </Link>
            <a
              href="https://www.linkedin.com/in/aurelienpage"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bioLien}
            >
              LinkedIn <Icon name="external" size={16} />
            </a>
            <Link href="/contact" className={styles.bioLien}>
              Me contacter <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}
