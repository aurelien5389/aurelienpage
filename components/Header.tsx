'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Icon from '@/components/Icon'
import styles from './Header.module.css'

const NAV_LINKS = [
  { label: 'Prestations', href: '/prestations' },
  { label: 'Formations', href: '/formation-seo' },
  { label: 'Réponses', href: '/reponses' },
  { label: 'Blog', href: '/blog' },
  { label: 'À propos', href: '/a-propos' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 900) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href + '/'))

  return (
    <>
      <header className={styles.entete}>
        <div className={styles.enteteInner}>
          <Link href="/" onClick={closeMenu} className={styles.logo}>
            <span className={styles.logoCarre} aria-hidden="true">AP</span>
            <span className={styles.logoNom}>Aurélien Page</span>
          </Link>

          <nav className={styles.navDesktop} aria-label="Navigation principale">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLien} ${isActive(link.href) ? styles.navLienActif : ''}`}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className={`btn btn-primaire ${styles.navContact}`}>
              Me contacter
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={styles.burger}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div id="mobile-menu" className={styles.menuMobile}>
          <nav className={styles.menuMobileNav} aria-label="Navigation mobile">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu} className={styles.menuLien}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={closeMenu} className={`btn btn-primaire ${styles.menuContact}`}>
              Me contacter
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
