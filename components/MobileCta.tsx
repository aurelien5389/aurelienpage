'use client'

import { useEffect, useState } from 'react'
import Icon from '@/components/Icon'
import { CALENDLY_URL } from '@/components/DiagnosticCTA'
import styles from './MobileCta.module.css'

// Pastille « Diagnostic offert » fixée en bas à droite sur mobile.
// Masquée tant que l'appel à l'action principal de la page (data-cta-principal) est visible,
// ou sur les 400 premiers pixels s'il n'y en a pas. Masquée en CSS sur ordinateur.
export default function MobileCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const principal = document.querySelector('[data-cta-principal]')
    if (principal && 'IntersectionObserver' in window) {
      const obs = new IntersectionObserver(([e]) => {
        setVisible(!e.isIntersecting && e.boundingClientRect.top < 0)
      })
      obs.observe(principal)
      return () => obs.disconnect()
    }
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`${styles.fixe} ${visible ? styles.visible : ''}`}>
      <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={`btn btn-primaire ${styles.pastille}`} tabIndex={visible ? 0 : -1}>
        <Icon name="calendar" size={20} />
        Diagnostic offert
      </a>
    </div>
  )
}
