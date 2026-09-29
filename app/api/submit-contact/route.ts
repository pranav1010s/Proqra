import { NextResponse } from 'next/server'
import { sendNotificationEmail } from '@/lib/sendEmail'

export async function POST(req: Request) {
  try {
    let name = ''
    let email = ''
    let company = ''
    let phone = ''
    let requirement = ''
    let source = 'Website Contact Form'
    let attachedFileName = ''
    let attachedFileSize = ''
    let fileAttachment: { filename: string; content: Buffer } | null = null

    const contentType = req.headers.get('content-type') || ''

    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData()
      name = ((formData.get('name') || formData.get('fullName')) as string) || ''
      email = (formData.get('email') as string) || ''
      company = ((formData.get('company') || formData.get('companyName')) as string) || ''
      phone = (formData.get('phone') as string) || ''
      requirement =
        ((formData.get('manufacturingRequirement') ||
          formData.get('requirement') ||
          formData.get('notes') ||
          formData.get('message')) as string) || ''
      source = (formData.get('source') as string) || 'Website Contact Form'

      const file = (formData.get('drawing') || formData.get('file') || formData.get('attachment')) as File | null
      if (file && file.size > 0) {
        attachedFileName = file.name
        attachedFileSize = `${(file.size / (1024 * 1024)).toFixed(2)} MB`
        const buffer = Buffer.from(await file.arrayBuffer())
        fileAttachment = {
          filename: file.name,
          content: buffer,
        }
      }
    } else {
      const body = await req.json()
      name = (body.name || body.fullName || '').trim()
      email = (body.email || '').trim()
      company = (body.company || body.companyName || '').trim()
      phone = (body.phone || '').trim()
      requirement =
        (body.manufacturingRequirement ||
          body.requirement ||
          body.notes ||
          body.message ||
          '').trim()
      source = body.source || 'Website Contact Form'
    }

    name = name.trim()
    email = email.trim()
    company = company.trim()
    phone = phone.trim()
    requirement = requirement.trim()

    if (!name || !email || !requirement) {
      return NextResponse.json(
        { error: 'Please provide your name, work email, and a description of your requirement.' },
        { status: 400 }
      )
    }

    const htmlContent = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;max-width:620px;margin:0 auto;color:#0f172a;line-height:1.6;padding:20px;border:1px solid #e2e8f0;border-radius:8px">
        <div style="border-bottom:2px solid #2563eb;padding-bottom:12px;margin-bottom:20px">
          <h2 style="color:#0f172a;margin:0;font-size:20px">New Client Requirement Submitted</h2>
          <p style="font-size:13px;color:#64748b;margin:4px 0 0 0">Source: ${source}</p>
        </div>

        <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
          <tr>
            <td style="padding:8px 0;width:140px;color:#64748b;font-size:14px;vertical-align:top"><strong>Client Name:</strong></td>
            <td style="padding:8px 0;color:#0f172a;font-size:14px;font-weight:600">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#64748b;font-size:14px;vertical-align:top"><strong>Work Email:</strong></td>
            <td style="padding:8px 0;font-size:14px"><a href="mailto:${email}" style="color:#2563eb;text-decoration:none">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#64748b;font-size:14px;vertical-align:top"><strong>Company:</strong></td>
            <td style="padding:8px 0;color:#0f172a;font-size:14px">${company || 'Not provided'}</td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding:8px 0;color:#64748b;font-size:14px;vertical-align:top"><strong>Phone:</strong></td>
            <td style="padding:8px 0;color:#0f172a;font-size:14px">${phone}</td>
          </tr>
          ` : ''}
          ${attachedFileName ? `
          <tr>
            <td style="padding:8px 0;color:#64748b;font-size:14px;vertical-align:top"><strong>Attached File:</strong></td>
            <td style="padding:8px 0;color:#16a34a;font-size:14px;font-weight:600">✓ ${attachedFileName} (${attachedFileSize})</td>
          </tr>
          ` : ''}
        </table>

        <div style="margin-top:20px">
          <h3 style="font-size:14px;text-transform:uppercase;letter-spacing:0.05em;color:#475569;margin-bottom:8px">Manufacturing Requirement / Scope:</h3>
          <div style="background:#f8fafc;padding:16px;border-radius:6px;border:1px solid #e2e8f0;font-size:14px;line-height:1.6;color:#1e293b;white-space:pre-wrap">${requirement}</div>
        </div>

        <div style="margin-top:28px;padding-top:16px;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8">
          Hit 'Reply' directly to respond to ${name} (${email}).
        </div>
      </div>
    `

    const result = await sendNotificationEmail({
      replyTo: email,
      subject: `New Client Inquiry: ${company ? `${company} (${name})` : name}${attachedFileName ? ' [File Attached]' : ''}`,
      html: htmlContent,
      attachments: fileAttachment ? [fileAttachment] : undefined,
    })

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: result.id, routedViaBackup: result.routedViaBackup })
  } catch (error: any) {
    console.error('Error handling contact submission:', error)
    return NextResponse.json(
      { error: error?.message || 'Failed to submit inquiry.' },
      { status: 500 }
    )
  }
}
