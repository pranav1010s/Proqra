import { Resend } from 'resend'
import type { SendEmailParams, SendEmailResult } from '@/types'

export async function sendNotificationEmail(params: SendEmailParams): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('[DEV MODE] RESEND_API_KEY is not set. Email payload:', params.subject)
    return { success: true, devMode: true }
  }

  const resend = new Resend(apiKey)
  const primaryRecipient = process.env.CONTACT_EMAIL || 'hello@proqra.co.uk'
  const backupRecipient = process.env.BACKUP_EMAIL || ''
  const from =
    params.from ||
    (process.env.RESEND_FROM_EMAIL
      ? `PROQRA <${process.env.RESEND_FROM_EMAIL}>`
      : 'PROQRA <hello@proqra.co.uk>')

  try {
    // 1. Attempt sending to primary recipient
    const res = await resend.emails.send({
      from,
      to: primaryRecipient,
      replyTo: params.replyTo,
      subject: params.subject,
      html: params.html,
      attachments: params.attachments,
    })

    if (res.error) {
      console.warn(`Primary send to ${primaryRecipient} failed:`, res.error)

      // 2. If primary failed, use personal backup email
      if (backupRecipient && backupRecipient !== primaryRecipient) {
        console.log(`Routing to backup email: ${backupRecipient}`)
        const backupRes = await resend.emails.send({
          from,
          to: backupRecipient,
          replyTo: params.replyTo,
          subject: `[BACKUP FAILOVER] ${params.subject}`,
          html: `
            <div style="background:#fffbeb;border:1px solid #fde68a;padding:12px;border-radius:6px;margin-bottom:16px;font-family:sans-serif;font-size:13px;color:#92400e">
              <strong>System Failover Alert:</strong> Primary delivery to <code>${primaryRecipient}</code> failed (${res.error.message}). Routed to backup address.
            </div>
            ${params.html}
          `,
          attachments: params.attachments,
        })

        if (!backupRes.error) {
          return { success: true, id: backupRes.data?.id, routedViaBackup: true }
        }
      }

      return { success: false, error: res.error.message }
    }

    return { success: true, id: res.data?.id }
  } catch (err: any) {
    console.error('Exception sending email to primary recipient:', err)

    if (backupRecipient && backupRecipient !== primaryRecipient) {
      try {
        console.log(`Routing to backup email on exception: ${backupRecipient}`)
        const backupRes = await resend.emails.send({
          from,
          to: backupRecipient,
          replyTo: params.replyTo,
          subject: `[BACKUP FAILOVER] ${params.subject}`,
          html: `
            <div style="background:#fffbeb;border:1px solid #fde68a;padding:12px;border-radius:6px;margin-bottom:16px;font-family:sans-serif;font-size:13px;color:#92400e">
              <strong>System Failover Alert:</strong> Delivery exception (${err?.message || 'unknown'}). Routed to backup address.
            </div>
            ${params.html}
          `,
          attachments: params.attachments,
        })

        if (!backupRes.error) {
          return { success: true, id: backupRes.data?.id, routedViaBackup: true }
        }
      } catch (backupErr) {
        console.error('Backup failover also failed:', backupErr)
      }
    }

    return { success: false, error: err?.message || 'Email delivery failed' }
  }
}
