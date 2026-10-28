'use client'

import { useEffect, useState, type FormEvent } from 'react'
import Icon, { type IconName } from '@/components/Icon'
import { CALENDLY_URL } from '@/components/DiagnosticCTA'
import { lireSource } from '@/components/SourceTracker'
import styles from './Contact.module.css'

// Validation côté client sans bibliothèque (le serveur revalide dans app/api/contact).
// Règles : nom 2-100, email valide, sujet ≤ 200, message 20-5000, source obligatoire.
type Champ = 'name' | 'email' | 'subject' | 'message' | 'source'
type Valeurs = Record<Champ, string>
type Erreurs = Partial<Record<Champ, string>>
type FormStatus = 'idle' | 'loading' | 'success' | 'error'

// « Comment m'avez-vous connu ? » : sert à compter les demandes venues des IA
export const SOURCES = [
  { value: 'google', label: 'Google' },
  { value: 'ia', label: 'Une IA (ChatGPT, Perplexity, Gemini, Claude…)' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'recommandation', label: 'Recommandation' },
  { value: 'autre', label: 'Autre' },
] as const

const VIDE: Valeurs = { name: '', email: '', subject: '', message: '', source: '' }
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function valider(v: Valeurs): Erreurs {
  const e: Erreurs = {}
  if (v.name.trim().length < 2) e.name = 'Le nom doit contenir au moins 2 caractères'
  else if (v.name.length > 100) e.name = 'Nom trop long'
  if (!EMAIL.test(v.email.trim())) e.email = 'Adresse email invalide'
  if (v.subject.length > 200) e.subject = 'Sujet trop long'
  if (v.message.trim().length < 20) e.message = 'Le message doit contenir au moins 20 caractères'
  else if (v.message.length > 5000) e.message = 'Message trop long (max 5 000 caractères)'
  if (!SOURCES.some((s) => s.value === v.source)) e.source = 'Indiquez comment vous avez connu ce site'
  return e
}

interface Props {
  /** H1 sur la page Contact, H2 ailleurs */
  niveauTitre?: 1 | 2
}

export default function Contact({ niveauTitre = 2 }: Props) {
  const Titre = niveauTitre === 1 ? 'h1' : 'h2'
  const [status, setStatus] = useState<FormStatus>('idle')
  const [valeurs, setValeurs] = useState<Valeurs>(VIDE)
  const [erreurs, setErreurs] = useState<Erreurs>({})
  // Source technique mémorisée au premier chargement (SourceTracker) : référent et utm_source
  const [technique, setTechnique] = useState({ referrer: '', utmSource: '', landing: '' })

  useEffect(() => {
    setTechnique(lireSource())
  }, [])

  const changer = (champ: Champ) => (ev: { target: { value: string } }) => {
    const v = { ...valeurs, [champ]: ev.target.value }
    setValeurs(v)
    // Une fois une erreur affichée sur un champ, on la recalcule à la saisie
    if (erreurs[champ]) setErreurs(valider(v))
  }

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    const e = valider(valeurs)
    setErreurs(e)
    if (Object.keys(e).length > 0) {
      const premier = Object.keys(e)[0]
      document.getElementById(premier)?.focus()
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...valeurs,
          subject: valeurs.subject || undefined,
          referrer: technique.referrer || undefined,
          utmSource: technique.utmSource || undefined,
          landing: technique.landing || undefined,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setValeurs(VIDE)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const champClass = (hasError: boolean) =>
    `${styles.champ}${hasError ? ` ${styles.champErreur}` : ''}`

  return (
    <section id="contact" className={styles.contactSection} aria-labelledby="contact-titre">
      <div className={styles.contactInner}>
        <div className={styles.contactIntro}>
          <Titre id="contact-titre" className={styles.contactTitre}>Contact</Titre>
          <p className={styles.contactAccroche}>Un projet, une mission, une question ? Parlons-en.</p>
        </div>

        {/* Bloc Calendly */}
        <div className={styles.calendly}>
          <div>
            <p className={styles.calendlyTitre}>Vous préférez en parler directement ?</p>
            <p className={styles.calendlySous}>Réservez un créneau de 30 minutes : gratuit et sans engagement.</p>
          </div>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primaire">
            Choisir un créneau <Icon name="arrow" size={18} />
          </a>
        </div>

        <div className={styles.separateur} aria-hidden="true">
          <span className={styles.separateurLigne} />
          <span className={styles.separateurOu}>ou</span>
          <span className={styles.separateurLigne} />
        </div>

        <div className={styles.contactGrille}>
          <form onSubmit={onSubmit} noValidate className={styles.formulaire}>
            <div>
              <label htmlFor="name" className={styles.champLabel}>
                Prénom / Nom <span className={styles.champRequis} aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Jean Dupont"
                aria-required="true"
                aria-invalid={erreurs.name ? true : undefined}
                aria-describedby={erreurs.name ? 'name-error' : undefined}
                value={valeurs.name}
                onChange={changer('name')}
                className={champClass(!!erreurs.name)}
              />
              {erreurs.name && (
                <p id="name-error" role="alert" className={styles.erreurMsg}>{erreurs.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className={styles.champLabel}>
                Email <span className={styles.champRequis} aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="jean.dupont@example.com"
                aria-required="true"
                aria-invalid={erreurs.email ? true : undefined}
                aria-describedby={erreurs.email ? 'email-error' : undefined}
                value={valeurs.email}
                onChange={changer('email')}
                className={champClass(!!erreurs.email)}
              />
              {erreurs.email && (
                <p id="email-error" role="alert" className={styles.erreurMsg}>{erreurs.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className={styles.champLabel}>
                Sujet <span className={styles.champOptionnel}>(optionnel)</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Audit SEO, mission freelance..."
                aria-invalid={erreurs.subject ? true : undefined}
                aria-describedby={erreurs.subject ? 'subject-error' : undefined}
                value={valeurs.subject}
                onChange={changer('subject')}
                className={champClass(!!erreurs.subject)}
              />
              {erreurs.subject && (
                <p id="subject-error" role="alert" className={styles.erreurMsg}>{erreurs.subject}</p>
              )}
            </div>

            <div>
              <label htmlFor="source" className={styles.champLabel}>
                Comment m&apos;avez-vous connu ? <span className={styles.champRequis} aria-hidden="true">*</span>
              </label>
              <select
                id="source"
                name="source"
                aria-required="true"
                aria-invalid={erreurs.source ? true : undefined}
                aria-describedby={erreurs.source ? 'source-error' : undefined}
                value={valeurs.source}
                onChange={changer('source')}
                className={champClass(!!erreurs.source)}
              >
                <option value="">Choisissez une réponse</option>
                {SOURCES.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
              {erreurs.source && (
                <p id="source-error" role="alert" className={styles.erreurMsg}>{erreurs.source}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className={styles.champLabel}>
                Message <span className={styles.champRequis} aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Décrivez votre projet ou votre question..."
                aria-required="true"
                aria-invalid={erreurs.message ? true : undefined}
                aria-describedby={erreurs.message ? 'message-error' : undefined}
                value={valeurs.message}
                onChange={changer('message')}
                className={`${champClass(!!erreurs.message)} ${styles.champZone}`}
              />
              {erreurs.message && (
                <p id="message-error" role="alert" className={styles.erreurMsg}>{erreurs.message}</p>
              )}
            </div>

            {/* Source technique (référent, utm_source, page d'entrée) : champs cachés, transmis avec le message */}
            <input type="hidden" name="referrer" value={technique.referrer} readOnly />
            <input type="hidden" name="utm_source" value={technique.utmSource} readOnly />
            <input type="hidden" name="landing" value={technique.landing} readOnly />

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="btn btn-primaire"
            >
              {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>

            {status === 'success' && (
              <p role="status" className={styles.feedbackOk}>
                <Icon name="check" size={20} /> Message envoyé. Je vous réponds sous 48 h.
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className={styles.feedbackErreur}>
                <Icon name="alert" size={20} /> Une erreur est survenue. Réessayez ou contactez-moi directement.
              </p>
            )}
          </form>

          <div className={styles.coordsBox}>
            <ContactItem icon="mail" label="Email" value="aurelienpage89@gmail.com" href="mailto:aurelienpage89@gmail.com" />
            <ContactItem icon="phone" label="Téléphone" value="07 81 98 11 14" href="tel:+33781981114" />
            <ContactItem icon="linkedin" label="LinkedIn" value="linkedin.com/in/aurelienpage" href="https://linkedin.com/in/aurelienpage" external />
            <div className={styles.coordItem}>
              <Icon name="pin" />
              <div>
                <p className={styles.coordLabel}>Localisation</p>
                <p className={styles.coordLocTexte}>Rennes · Télétravail &amp; déplacements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon, label, value, href, external }: { icon: IconName; label: string; value: string; href: string; external?: boolean }) {
  return (
    <div className={styles.coordItem}>
      <Icon name={icon} />
      <div>
        <p className={styles.coordLabel}>{label}</p>
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={styles.coordLien}
        >
          {value}
        </a>
      </div>
    </div>
  )
}
