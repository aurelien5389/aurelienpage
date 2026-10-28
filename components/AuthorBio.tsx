import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/components/Icon'
import styles from './AuthorBio.module.css'

const BADGES = [
  'SEO et SEA depuis 2020',
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
            Je fais du SEO et du SEA depuis 2020, en agence, pour un groupe de presse professionnelle et en
            freelance. Avant cela, j&apos;ai été journaliste web et rédacteur de 2012 à 2019. Je mesure la
            visibilité des sites dans les IA (ChatGPT, Perplexity, Gemini, Claude, AI Overviews) avec Balise,
            un outil que j&apos;ai construit. L&apos;IA appliquée et le No Code sont portés
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
