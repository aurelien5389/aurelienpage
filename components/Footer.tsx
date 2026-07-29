'use client'

import Link from 'next/link'
import AvailabilityBadge from '@/components/AvailabilityBadge'
import styles from './Footer.module.css'

const FOOTER_LINKS = {
  prestations: [
    { href: '/prestations/consultant-seo-geo', label: 'Consultant SEO & GEO' },
    { href: '/prestations/traffic-manager-sea', label: 'Traffic Manager SEA' },
    { href: '/prestations/consultant-ia', label: 'Consultant IA' },
    { href: '/prestations/chef-de-projet-digital', label: 'Chef de Projet Digital' },
    { href: '/prestations/formateur-no-code-ia', label: 'Formateur No Code & IA' },
    { href: '/formation-seo', label: 'Formation SEO' },
  ],
  ressources: [
    { href: '/accompagnement-seo', label: 'Accompagnement SEO mensuel' },
    { href: '/pourquoi-consultant-seo', label: 'Pourquoi un consultant SEO ?' },
    { href: '/cout-prestation-seo', label: 'Coût d\'une prestation SEO' },
    { href: '/consultant-seo-freelance', label: 'Consultant SEO freelance' },
    { href: '/blog/audit-seo', label: 'Audit SEO : méthode complète' },
    { href: '/blog', label: 'Blog SEO & GEO' },
  ],
  villes: [
    { href: '/consultant-seo-rennes', label: 'Rennes' },
    { href: '/consultant-seo-nantes', label: 'Nantes' },
    { href: '/consultant-seo-paris', label: 'Paris' },
    { href: '/consultant-seo-lyon', label: 'Lyon' },
    { href: '/consultant-seo-bordeaux', label: 'Bordeaux' },
    { href: '/consultant-seo-marseille', label: 'Marseille' },
    { href: '/consultant-seo-toulouse', label: 'Toulouse' },
    { href: '/consultant-seo-brest', label: 'Brest' },
    { href: '/consultant-seo-lille', label: 'Lille' },
    { href: '/consultant-seo-strasbourg', label: 'Strasbourg' },
  ],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles.pied}>
      {/* Liens internes */}
      <div className={styles.piedHaut}>
        <div className={styles.piedGrille}>
          {/* Prestations */}
          <nav aria-label="Prestations">
            <p className={styles.piedColTitre}>Prestations</p>
            <ul className={styles.piedListe}>
              {FOOTER_LINKS.prestations.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.piedLien}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Ressources */}
          <nav aria-label="Ressources SEO">
            <p className={styles.piedColTitre}>Ressources SEO</p>
            <ul className={styles.piedListe}>
              {FOOTER_LINKS.ressources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.piedLien}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Villes */}
          <nav aria-label="Consultant SEO par ville">
            <p className={styles.piedColTitre}>Consultant SEO par ville</p>
            <ul className={styles.piedVilles}>
              {FOOTER_LINKS.villes.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.piedLien}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Barre basse */}
      <div className={styles.piedBas}>
        <div className={styles.piedBasInner}>
          <div className={styles.piedBasRangee}>
            <div className={styles.piedCopyGroupe}>
              <p className={styles.piedCopy}>
                © 2026 Aurélien PAGE ·{' '}
                <span className={styles.piedSite}>aurelienpage.fr</span>
              </p>
              <AvailabilityBadge />
            </div>

            <div className={styles.piedReseaux}>
              <a
                href="https://linkedin.com/in/aurelienpage"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.piedLienBas}
              >
                LinkedIn
              </a>
              <Link href="/mentions-legales" className={styles.piedLienBas}>
                Mentions légales
              </Link>
              <button type="button" onClick={scrollToTop} className={styles.piedRetour}>
                Retour en haut
                <span className={styles.piedRetourFleche}>↑</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
