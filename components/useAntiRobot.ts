'use client'

import { useCallback, useEffect, useRef } from 'react'

/**
 * Anti-robots des formulaires : durée de remplissage + Cloudflare Turnstile (défi invisible,
 * vérifié côté serveur dans lib/securite.ts).
 *
 * Clé de SITE (publique) : variable NEXT_PUBLIC_TURNSTILE_SITE_KEY. Tant qu'elle est absente, rien n'est chargé.
 * Le script Cloudflare n'est chargé qu'au premier clic ou à la première saisie dans le formulaire.
 *
 * Usage : const { zone, demarrer, donnees } = useAntiRobot()
 *   <form onFocus={demarrer} onPointerDown={demarrer}> … <div ref={zone} /> … </form>
 *   body: JSON.stringify({ …, ...(await donnees()) })
 */

type Turnstile = {
  render: (el: HTMLElement, options: Record<string, unknown>) => string
  reset: (id: string) => void
}
declare global {
  interface Window {
    turnstile?: Turnstile
  }
}

const CLE = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''
let chargement: Promise<Turnstile> | null = null
const charger = () => {
  if (!chargement) {
    chargement = new Promise<Turnstile>((resolve, reject) => {
      const s = document.createElement('script')
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
      s.async = true
      s.onload = () => (window.turnstile ? resolve(window.turnstile) : reject(new Error('Turnstile absent')))
      s.onerror = () => reject(new Error('Turnstile injoignable'))
      document.head.appendChild(s)
    })
  }
  return chargement
}

export function useAntiRobot() {
  const zone = useRef<HTMLDivElement>(null)
  const ouvertA = useRef(0)
  const jeton = useRef('')
  const widget = useRef<string | null>(null)
  const enCours = useRef(false)

  useEffect(() => {
    ouvertA.current = Date.now()
  }, [])

  const demarrer = useCallback(async () => {
    if (!CLE || enCours.current || !zone.current) return
    enCours.current = true
    try {
      const turnstile = await charger()
      widget.current = turnstile.render(zone.current, {
        sitekey: CLE,
        appearance: 'interaction-only',
        language: 'fr',
        callback: (t: string) => {
          jeton.current = t
        },
        'expired-callback': () => {
          jeton.current = ''
        },
        'error-callback': () => {
          jeton.current = ''
        },
      })
    } catch {
      enCours.current = false
    }
  }, [])

  const donnees = useCallback(async () => {
    if (CLE) {
      await demarrer()
      for (let i = 0; i < 40 && !jeton.current; i++) await new Promise((r) => setTimeout(r, 250))
    }
    const envoi = { dureeMs: Date.now() - ouvertA.current, turnstile: jeton.current }
    jeton.current = ''
    if (widget.current && window.turnstile) window.turnstile.reset(widget.current)
    return envoi
  }, [demarrer])

  return { zone, demarrer, donnees }
}
