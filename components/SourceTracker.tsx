'use client'

import { useEffect } from 'react'

// Mesure des demandes venues des IA.
// 1. Au premier chargement de la session : mémorise le référent et l'utm_source (sessionStorage).
// 2. Si la source est une IA (ChatGPT, Perplexity, Gemini, Claude, Copilot) : envoie un événement
//    Google Analytics « source_ia » (une fois par session).
// 3. Ajoute des paramètres UTM aux liens Calendly au moment du clic, pour retrouver la source
//    dans l'export des rendez-vous (Calendly accepte utm_source, utm_medium, utm_campaign, utm_content).

export const CLE_REFERENT = 'ap_referrer'
export const CLE_UTM = 'ap_utm_source'
export const CLE_PAGE = 'ap_landing'

const HOTES_IA = ['chatgpt.com', 'chat.openai.com', 'perplexity.ai', 'gemini.google.com', 'claude.ai', 'copilot.microsoft.com']

export function lireSource(): { referrer: string; utmSource: string; landing: string } {
  try {
    return {
      referrer: sessionStorage.getItem(CLE_REFERENT) || '',
      utmSource: sessionStorage.getItem(CLE_UTM) || '',
      landing: sessionStorage.getItem(CLE_PAGE) || '',
    }
  } catch {
    return { referrer: '', utmSource: '', landing: '' }
  }
}

/** Hôte de l'IA d'origine (ex. « chatgpt.com »), ou chaîne vide */
export function sourceIa(referrer: string, utmSource: string): string {
  const r = referrer.toLowerCase()
  const u = utmSource.toLowerCase()
  return HOTES_IA.find((h) => r.includes(h) || u.includes(h)) || ''
}

declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

// Même file d'attente que le script GA du layout (gtag.js lit des objets `arguments`) :
// l'événement part quand gtag.js est chargé, même si ce composant s'exécute avant.
const gtag = function () {
  window.dataLayer = window.dataLayer || []
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments)
} as unknown as (...args: unknown[]) => void

export default function SourceTracker() {
  useEffect(() => {
    let dejaStocke = false
    try {
      dejaStocke = sessionStorage.getItem(CLE_PAGE) !== null
      if (!dejaStocke) {
        const utm = new URLSearchParams(window.location.search).get('utm_source') || ''
        sessionStorage.setItem(CLE_REFERENT, document.referrer || '')
        sessionStorage.setItem(CLE_UTM, utm)
        sessionStorage.setItem(CLE_PAGE, window.location.pathname)
      }
    } catch {
      // Stockage indisponible (navigation privée, blocage) : on continue sans mémoriser
    }

    const { referrer, utmSource } = lireSource()
    const ia = sourceIa(referrer || document.referrer, utmSource)
    if (ia && !dejaStocke) {
      gtag('event', 'source_ia', { ia_source: ia, page_location: window.location.href })
    }

    // Liens Calendly : UTM ajoutés au clic (liens rendus par le serveur, donc intouchés dans le HTML)
    const onClick = (ev: MouseEvent) => {
      const a = (ev.target as Element | null)?.closest?.('a[href^="https://calendly.com/"]') as HTMLAnchorElement | null
      if (!a) return
      try {
        const url = new URL(a.href)
        if (url.searchParams.has('utm_source')) return
        const src = lireSource()
        const origine = sourceIa(src.referrer, src.utmSource) || src.utmSource || (src.referrer ? new URL(src.referrer).hostname : 'direct')
        url.searchParams.set('utm_source', origine)
        url.searchParams.set('utm_medium', 'site')
        url.searchParams.set('utm_campaign', 'diagnostic-offert')
        url.searchParams.set('utm_content', window.location.pathname)
        a.href = url.toString()
      } catch {
        // URL invalide : lien laissé tel quel
      }
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
