'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import styles from './Contact.module.css'

const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Nom trop long'),
  email: z.string().email('Adresse email invalide'),
  subject: z.string().max(200, 'Sujet trop long').optional(),
  message: z
    .string()
    .min(20, 'Le message doit contenir au moins 20 caractères')
    .max(5000, 'Message trop long (max 5 000 caractères)'),
})

type ContactFormData = z.infer<typeof contactSchema>
type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        reset()
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
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactInner}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className={styles.contactIntro}
        >
          <h2 className={styles.contactTitre}>Contact</h2>
          <p className={styles.contactAccroche}>
            Un projet, une mission, une question ? Parlons-en.
          </p>
        </motion.div>

        {/* Bloc Calendly */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className={styles.calendly}
        >
          <div className={styles.calendlyTexte}>
            <p className={styles.calendlyTitre}>
              Préfères-tu qu&apos;on en parle directement ?
            </p>
            <p className={styles.calendlySous}>
              Réserve un créneau de 30 min, c&apos;est gratuit et sans engagement.
            </p>
          </div>
          <a
            href="https://calendly.com/aurelienpage89/diagnostic-offert-30-min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.calendlyBtn}
          >
            Choisir un créneau →
          </a>
        </motion.div>

        {/* Séparateur "ou" */}
        <div className={styles.separateur}>
          <div className={styles.separateurLigne} />
          <span className={styles.separateurOu}>ou</span>
          <div className={styles.separateurLigne} />
        </div>

        <div className={styles.contactGrille}>
          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className={styles.contactColForm}
          >
            <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.formulaire}>
              {/* Nom */}
              <div>
                <label htmlFor="name" className={styles.champLabel}>
                  Prénom / Nom{' '}
                  <span className={styles.champRequis} aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jean Dupont"
                  aria-required="true"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  {...register('name')}
                  className={champClass(!!errors.name)}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className={styles.erreurMsg}>
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={styles.champLabel}>
                  Email{' '}
                  <span className={styles.champRequis} aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jean.dupont@example.com"
                  aria-required="true"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  {...register('email')}
                  className={champClass(!!errors.email)}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className={styles.erreurMsg}>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Sujet */}
              <div>
                <label htmlFor="subject" className={styles.champLabel}>
                  Sujet{' '}
                  <span className={styles.champOptionnel}>(optionnel)</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Audit SEO, mission freelance..."
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  {...register('subject')}
                  className={champClass(!!errors.subject)}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={styles.champLabel}>
                  Message{' '}
                  <span className={styles.champRequis} aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Décrivez votre projet ou votre question..."
                  aria-required="true"
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  {...register('message')}
                  className={`${champClass(!!errors.message)} ${styles.champZone}`}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className={styles.erreurMsg}>
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Bouton d'envoi */}
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={styles.envoyer}
              >
                {status === 'loading' && (
                  <svg
                    className={styles.envoyerSpinner}
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className={styles.spinnerPiste}
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className={styles.spinnerArc}
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                )}
                {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>

              {/* Feedback succès / erreur */}
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  className={styles.feedbackOk}
                >
                  ✅ Message envoyé ! Je vous réponds sous 48h.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  className={styles.feedbackErreur}
                >
                  ❌ Une erreur est survenue. Réessayez ou contactez-moi directement.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Coordonnées directes */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.contactColCoords}
          >
            <div className={styles.coordsBox}>
              <ContactItem
                icon="✉️"
                label="Email"
                value="aurelienpage89@gmail.com"
                href="mailto:aurelienpage89@gmail.com"
              />
              <ContactItem
                icon="📞"
                label="Téléphone"
                value="07 81 98 11 14"
                href="tel:+33781981114"
              />
              <ContactItem
                icon="💼"
                label="LinkedIn"
                value="linkedin.com/in/aurelienpage"
                href="https://linkedin.com/in/aurelienpage"
                external
              />
              <div className={`${styles.coordItem} ${styles.coordLoc}`}>
                <span className={styles.coordIcone} aria-hidden="true">📍</span>
                <div className={styles.coordCorps}>
                  <p className={styles.coordLabel}>Localisation</p>
                  <p className={styles.coordLocTexte}>
                    Rennes · Télétravail &amp; déplacements
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: string
  label: string
  value: string
  href: string
  external?: boolean
}) {
  return (
    <div className={styles.coordItem}>
      <span className={styles.coordIcone} aria-hidden="true">{icon}</span>
      <div className={styles.coordCorps}>
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
