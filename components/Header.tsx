'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'À propos', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Expériences', href: '#experience' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

// IDs de toutes les sections à observer (inclut education même sans lien nav)
const SECTION_IDS = ['about', 'services', 'experience', 'skills', 'education', 'contact']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  // Passage header opaque au scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // IntersectionObserver pour la section active
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(id)
          })
        },
        { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // Fermer le menu burger sur resize desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Bloquer le scroll body quand menu mobile ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy/90 backdrop-blur-md border-b border-steel/30 shadow-lg shadow-navy/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={closeMenu}
              className="font-space-grotesk font-bold text-lg sm:text-xl text-off-white hover:text-cyan transition-colors duration-200"
            >
              Aurélien PAGE
            </a>

            {/* Navigation desktop */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Navigation principale">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.slice(1)
                const isActive = activeSection === sectionId
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive ? 'text-cyan' : 'text-gray-secondary hover:text-off-white'
                    }`}
                  >
                    {/* Indicateur de section active animé */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-cyan/10 rounded-lg"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                )
              })}
              <a
                href="#contact"
                className="ml-3 px-5 py-2 bg-cyan text-navy font-semibold text-sm rounded-lg hover:bg-cyan-hover transition-colors duration-200"
              >
                Me contacter
              </a>
            </nav>

            {/* Burger mobile */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg hover:bg-steel/30 transition-colors"
            >
              <span
                className={`block w-5 h-0.5 bg-off-white origin-center transition-all duration-300 ${
                  menuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-off-white transition-opacity duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-off-white origin-center transition-all duration-300 ${
                  menuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile — overlay plein écran */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-navy/97 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-7" aria-label="Navigation mobile">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 + 0.05, duration: 0.3 }}
                  className="font-space-grotesk font-bold text-3xl text-off-white hover:text-cyan transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={closeMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06 + 0.1, duration: 0.3 }}
                className="mt-4 px-8 py-3.5 bg-cyan text-navy font-bold text-xl rounded-2xl hover:bg-cyan-hover transition-colors"
              >
                Me contacter
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
