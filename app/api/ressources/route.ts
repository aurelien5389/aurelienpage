import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

// Liste Resend « Ressources GEO (aurelienpage.fr) » : seuls les visiteurs qui cochent la case y sont ajoutés
const SEGMENT_ID = process.env.RESEND_SEGMENT_RESSOURCES ?? '43ca850f-0541-41ba-b0ef-79ba6605dae5'
const SITE = 'https://aurelienpage.fr'

const schema = z.object({
  email: z.string().email('Adresse email invalide').max(200),
  consent: z.boolean(),
  page: z.string().max(300).optional(),
  // Champ piège invisible : rempli uniquement par les robots
  website: z.string().max(0).optional(),
})

const RESSOURCES = [
  { href: '/ressources/checklist-geo', titre: 'Checklist GEO : 25 points pour être cité par les IA' },
  { href: '/ressources/modele-releve-geo.csv', titre: 'Modèle de relevé GEO (CSV)' },
  { href: '/ressources/questions-geo-par-secteur.csv', titre: 'Questions à suivre, secteur par secteur (CSV)' },
  { href: '/ressources/plan-geo-30-jours', titre: 'Plan GEO en 30 jours' },
  { href: '/ressources/gabarit-page-reponse', titre: 'Gabarit de page que les IA peuvent citer' },
  { href: '/ressources/positions-officielles-ia', titre: 'Ce que disent officiellement les éditeurs d’IA' },
]

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const html = () => `<!DOCTYPE html>
<html lang="fr">
  <head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
  <body style="margin:0;padding:0;background-color:#f5f8fa;font-family:Arial,sans-serif;color:#14263a;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:10px;border:1px solid #d4dee6;">
          <tr><td style="padding:32px 36px 8px;">
            <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">Bonjour,</p>
            <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">Voici les ressources GEO demandées sur aurelienpage.fr. Elles sont gratuites, sans compte à créer :</p>
            <ul style="margin:0 0 16px;padding-left:20px;font-size:16px;line-height:1.8;">
              ${RESSOURCES.map((r) => `<li><a href="${SITE}${r.href}" style="color:#0b6e8c;">${r.titre}</a></li>`).join('')}
            </ul>
            <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">Par où commencer ? Le plan en 30 jours donne l’ordre : vérifier l’accès des robots, choisir vos questions, faire un premier relevé, puis reprendre les pages qui doivent répondre.</p>
            <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">Si vous voulez un regard extérieur sur votre site, je propose un diagnostic offert de 30 minutes : <a href="https://calendly.com/aurelienpage89/diagnostic-offert-30-min" style="color:#0b6e8c;">réserver un créneau</a>. Vous pouvez aussi simplement répondre à cet e-mail.</p>
            <p style="margin:0 0 24px;font-size:16px;line-height:1.6;">Aurélien PAGE<br /><span style="color:#415468;">Consultant SEO et GEO, Rennes</span></p>
          </td></tr>
          <tr><td style="padding:16px 36px;border-top:1px solid #d4dee6;font-size:12px;color:#415468;line-height:1.5;">
            Vous recevez cet e-mail parce que vous avez demandé ces ressources sur <a href="${SITE}/ressources" style="color:#415468;">aurelienpage.fr</a>.
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`

export async function POST(request: NextRequest) {
  try {
    const result = schema.safeParse(await request.json())
    if (!result.success) {
      return NextResponse.json({ error: 'Adresse email invalide' }, { status: 400 })
    }
    const { email, consent, page } = result.data
    const resend = new Resend(process.env.RESEND_API_KEY)

    const { error } = await resend.emails.send({
      from: 'Aurélien PAGE <contact@aurelienpage.fr>',
      to: email,
      reply_to: process.env.CONTACT_EMAIL ?? 'aurelienpage89@gmail.com',
      subject: 'Vos ressources GEO : checklist, modèles et plan en 30 jours',
      html: html(),
    })
    if (error) {
      return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 })
    }

    // Ajout à la liste uniquement avec consentement explicite (RGPD)
    if (consent) {
      await resend.contacts.create({ email, audienceId: SEGMENT_ID, unsubscribed: false }).catch(() => null)
    }

    // Prévenir Aurélien : une demande de ressources est souvent un futur contact
    await resend.emails
      .send({
        from: 'contact@aurelienpage.fr',
        to: process.env.CONTACT_EMAIL ?? 'aurelienpage89@gmail.com',
        reply_to: email,
        subject: `[aurelienpage.fr] Ressources GEO envoyées à ${email}${consent ? ' (inscrit à la liste)' : ''}`,
        html: `<p>Ressources GEO envoyées à <strong>${esc(email)}</strong>.</p><p>Liste : ${consent ? 'oui, consentement donné' : 'non'}.</p><p>Page : ${esc(page ?? 'inconnue')}</p>`,
      })
      .catch(() => null)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 })
  }
}
