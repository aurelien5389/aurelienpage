'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Icon from '@/components/Icon'
import { CALENDLY_URL } from '@/components/DiagnosticCTA'
import { CONTACT } from '@/config/contact'
import styles from './Header.module.css'

const NAV_LINKS = [
  { label: 'Prestations', href: '/prestations' },
  { label: 'Formations', href: '/formation-seo' },
  { label: 'Ressources', href: '/ressources' },
  { label: 'Réponses', href: '/reponses' },
  { label: 'Blog', href: '/blog' },
  { label: 'À propos', href: '/a-propos' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

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
            <a href={CONTACT.telHref} className={styles.navTel}>
              <Icon name="phone" size={18} />
              <span>{CONTACT.telAffiche}</span>
            </a>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={`btn btn-primaire ${styles.navContact}`}>
              Diagnostic offert
              <span className={styles.srOnly}> (ouvre Calendly dans un nouvel onglet)</span>
            </a>
          </nav>

          <a href={CONTACT.telHref} className={styles.telMobile} aria-label={`Appeler le ${CONTACT.telAffiche}`}>
            <Icon name="phone" size={20} />
          </a>

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
            <Link href="/contact" onClick={closeMenu} className={styles.menuLien}>
              Contact
            </Link>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu} className={`btn btn-primaire ${styles.menuContact}`}>
              Réserver mon diagnostic offert
            </a>
            <a href={CONTACT.telHref} className={`btn btn-secondaire ${styles.menuTel}`}>
              <Icon name="phone" size={20} /> {CONTACT.telAffiche}
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
