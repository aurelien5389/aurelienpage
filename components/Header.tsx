'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Header.module.css'

const NAV_LINKS = [
  { label: 'Prestations', href: '/prestations' },
  { label: 'Formations', href: '/#formations' },
  { label: 'À propos', href: '/#about' },
]

const SECTION_IDS = ['about', 'services', 'experience', 'skills', 'formations', 'contact']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isHome) return
    const observers: IntersectionObserver[] = []
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(id) }) },
        { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [isHome])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <header className={`${styles.entete} ${scrolled ? styles.enteteScrolled : ''}`}>
        <div className={styles.enteteInner}>
          <div className={styles.enteteRangee}>
            <Link
              href="/"
              onClick={closeMenu}
              aria-label="Aurélien PAGE, accueil"
              className={styles.logo}
            >
              AP
            </Link>

            <nav className={styles.navDesktop} aria-label="Navigation principale">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.startsWith('/#') ? link.href.slice(2) : ''
                const isActive =
                  sectionId
                    ? isHome && activeSection === sectionId
                    : pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${styles.navLien} ${isActive ? styles.navLienActif : styles.navLienInactif}`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className={styles.navIndicateur}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className={styles.navLabel}>{link.label}</span>
                  </Link>
                )
              })}
              <Link href="/#contact" className={styles.navContact}>
                Me contacter
              </Link>
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className={`${styles.burger} ${menuOpen ? styles.burgerOuvert : ''}`}
            >
              <span className={`${styles.barre} ${styles.barreHaute}`} />
              <span className={`${styles.barre} ${styles.barreMilieu}`} />
              <span className={`${styles.barre} ${styles.barreBasse}`} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.menuMobile}
          >
            <nav className={styles.menuMobileNav} aria-label="Navigation mobile">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 + 0.05, duration: 0.3 }}
                >
                  <Link href={link.href} onClick={closeMenu} className={styles.menuLien}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06 + 0.1, duration: 0.3 }}
              >
                <Link href="/#contact" onClick={closeMenu} className={styles.menuContact}>
                  Me contacter
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
