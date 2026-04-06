'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'

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

  const fieldClass = (hasError: boolean) =>
    `w-full px-4 py-3 bg-steel/25 border ${
      hasError ? 'border-red-400/70 focus:border-red-400' : 'border-steel/50 focus:border-cyan'
    } rounded-xl text-off-white placeholder-gray-secondary/50 focus:outline-none focus:ring-1 ${
      hasError ? 'focus:ring-red-400/20' : 'focus:ring-cyan/20'
    } transition-colors duration-200 text-sm sm:text-base`

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-space-grotesk font-bold text-4xl sm:text-5xl text-off-white mb-4">
            Contact
          </h2>
          <p className="text-gray-secondary text-lg max-w-xl">
            Un projet, une mission, une question ? Parlons-en.
          </p>
        </motion.div>

        {/* Bloc Calendly */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 p-6 sm:p-7 bg-steel/20 border border-cyan/20 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8"
        >
          <div className="flex-1 min-w-0">
            <p className="font-space-grotesk font-semibold text-off-white text-base mb-1">
              Préfères-tu qu&apos;on en parle directement ?
            </p>
            <p className="text-gray-secondary text-sm">
              Réserve un créneau de 30 min — c&apos;est gratuit et sans engagement.
            </p>
          </div>
          <a
            href="https://calendly.com/aurelienpage89/diagnostic-offert-30-min"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-cyan text-navy font-space-grotesk font-semibold text-sm rounded-xl hover:bg-cyan-hover transition-colors duration-200"
          >
            Choisir un créneau →
          </a>
        </motion.div>

        {/* Séparateur "ou" */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-steel/40" />
          <span className="text-xs text-gray-secondary font-mono px-2">ou</span>
          <div className="flex-1 h-px bg-steel/40" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              {/* Nom */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-off-white mb-1.5"
                >
                  Prénom / Nom{' '}
                  <span className="text-cyan" aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jean Dupont"
                  aria-required="true"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  {...register('name')}
                  className={fieldClass(!!errors.name)}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-off-white mb-1.5"
                >
                  Email{' '}
                  <span className="text-cyan" aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jean.dupont@example.com"
                  aria-required="true"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  {...register('email')}
                  className={fieldClass(!!errors.email)}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Sujet */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-off-white mb-1.5"
                >
                  Sujet{' '}
                  <span className="text-gray-secondary text-xs font-normal">(optionnel)</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Audit SEO, mission freelance..."
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  {...register('subject')}
                  className={fieldClass(!!errors.subject)}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-off-white mb-1.5"
                >
                  Message{' '}
                  <span className="text-cyan" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Décrivez votre projet ou votre question..."
                  aria-required="true"
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  {...register('message')}
                  className={`${fieldClass(!!errors.message)} resize-none`}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Bouton d'envoi */}
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="flex items-center justify-center gap-2.5 px-8 py-3.5 bg-cyan text-navy font-semibold text-base rounded-xl hover:bg-cyan-hover disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.02] active:scale-100"
              >
                {status === 'loading' && (
                  <svg
                    className="animate-spin w-4 h-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
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
                  className="flex items-center gap-2 text-sm text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-xl px-4 py-3"
                >
                  ✅ Message envoyé ! Je vous réponds sous 48h.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3"
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
            className="lg:col-span-2"
          >
            <div className="p-6 sm:p-7 bg-steel/15 border border-steel/40 rounded-2xl space-y-5">
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
              <div className="flex items-start gap-3.5 pt-4 border-t border-steel/30">
                <span className="text-xl mt-0.5" aria-hidden="true">📍</span>
                <div>
                  <p className="text-xs text-gray-secondary mb-1">Localisation</p>
                  <p className="text-off-white font-medium text-sm">
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
    <div className="flex items-start gap-3.5">
      <span className="text-xl mt-0.5" aria-hidden="true">{icon}</span>
      <div className="min-w-0">
        <p className="text-xs text-gray-secondary mb-1">{label}</p>
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="text-off-white hover:text-cyan transition-colors duration-200 text-sm font-medium break-all"
        >
          {value}
        </a>
      </div>
    </div>
  )
}
