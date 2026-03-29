import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100),
  email: z.string().email('Adresse email invalide'),
  subject: z.string().max(200).optional(),
  message: z
    .string()
    .min(20, 'Le message doit contenir au moins 20 caractères')
    .max(5000),
})

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await request.json()

    const result = contactSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { error: 'Données invalides', details: result.error.flatten() },
        { status: 400 }
      )
    }

    const { name, email, subject, message } = result.data
    const contactEmail =
      process.env.CONTACT_EMAIL ?? 'aurelienpage89@gmail.com'

    const timestamp = new Date().toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      dateStyle: 'full',
      timeStyle: 'short',
    })

    const subjectLine = subject ? ` — ${subject}` : ''

    const { error } = await resend.emails.send({
      from: 'contact@aurelienpage.fr',
      to: contactEmail,
      reply_to: email,
      subject: `[aurelienpage.fr] Nouveau message de ${name}${subjectLine}`,
      html: `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nouveau message de contact</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f4f6f9;font-family:Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f9;padding:40px 20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
            <!-- Header -->
            <tr>
              <td style="background-color:#0F1B2D;padding:32px 40px;text-align:center;">
                <h1 style="margin:0;color:#00B4D8;font-size:22px;font-weight:700;letter-spacing:-0.5px;">
                  Nouveau message de contact
                </h1>
                <p style="margin:8px 0 0;color:#8B9BB4;font-size:14px;">
                  Via aurelienpage.fr
                </p>
              </td>
            </tr>
            <!-- Body -->
            <tr>
              <td style="padding:36px 40px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #eef2f7;">
                      <span style="display:block;font-size:11px;color:#8B9BB4;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:4px;">De</span>
                      <span style="font-size:16px;color:#0F1B2D;font-weight:600;">${name}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #eef2f7;">
                      <span style="display:block;font-size:11px;color:#8B9BB4;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:4px;">Email</span>
                      <a href="mailto:${email}" style="font-size:15px;color:#00B4D8;text-decoration:none;">${email}</a>
                    </td>
                  </tr>
                  ${
                    subject
                      ? `<tr>
                    <td style="padding:12px 0;border-bottom:1px solid #eef2f7;">
                      <span style="display:block;font-size:11px;color:#8B9BB4;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:4px;">Sujet</span>
                      <span style="font-size:15px;color:#333;">${subject}</span>
                    </td>
                  </tr>`
                      : ''
                  }
                  <tr>
                    <td style="padding:16px 0;">
                      <span style="display:block;font-size:11px;color:#8B9BB4;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:10px;">Message</span>
                      <div style="font-size:15px;color:#444;line-height:1.7;white-space:pre-wrap;">${message}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="padding:20px 40px;background-color:#f8fafc;border-top:1px solid #eef2f7;">
                <p style="margin:0;font-size:12px;color:#aab4c4;">
                  aurelienpage.fr · Reçu le ${timestamp} · Cliquez sur &ldquo;Répondre&rdquo; pour répondre directement à ${name}.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`,
    })

    if (error) {
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}
