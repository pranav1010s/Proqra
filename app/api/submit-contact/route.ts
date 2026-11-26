import { NextResponse } from 'next/server'
import { sendNotificationEmail } from '@/lib/sendEmail'
import {
  escapeHtml,
  getFormString,
  getJsonString,
  isValidEmail,
  stripCrlf,
  validateStringLength,
  validateUploadedFile,
} from '@/lib/formSecurity'

export async function POST(req: Request) {
  try {
    const contentType = (req.headers.get('content-type') || '').toLowerCase()
    const isMultipart = contentType.includes('multipart/form-data')
    const isJson = contentType.includes('application/json')

    if (!isMultipart && !isJson) {
      return NextResponse.json(
        { error: 'Unsupported Content-Type. Expected multipart/form-data or application/json.' },
        { status: 400 }
      )
    }

    let name = ''
    let email = ''
    let company = ''
    let phone = ''
    let requirement = ''
    let source = 'Website Contact Form'
    let honeypot = ''
    let attachedFileName = ''
    let attachedFileSize = ''
    let fileAttachment: { filename: string; content: Buffer } | null = null

    if (isMultipart) {
      let formData: FormData
      try {
        formData = await req.formData()
      } catch {
        return NextResponse.json({ error: 'Invalid form submission.' }, { status: 400 })
      }

      honeypot = getFormString(formData, 'faxNumber')
      if (honeypot) {
        return NextResponse.json({ success: true }, { status: 200 })
      }

      name = getFormString(formData, 'name') || getFormString(formData, 'fullName')
      email = getFormString(formData, 'email')
      company = getFormString(formData, 'company') || getFormString(formData, 'companyName')
      phone = getFormString(formData, 'phone')
      requirement =
        getFormString(formData, 'manufacturingRequirement') ||
        getFormString(formData, 'requirement') ||
        getFormString(formData, 'notes') ||
        getFormString(formData, 'message')
      source = getFormString(formData, 'source') || 'Website Contact Form'

      const rawFile = formData.get('drawing') ?? formData.get('file') ?? formData.get('attachment')
      const fileResult = await validateUploadedFile(rawFile)
      if (!fileResult.ok) {
        return NextResponse.json({ error: fileResult.error }, { status: fileResult.status })
      }
      if (fileResult.file) {
        attachedFileName = fileResult.file.filename
        attachedFileSize = fileResult.file.sizeLabel
        fileAttachment = {
          filename: fileResult.file.filename,
          content: fileResult.file.content,
        }
      }
    } else {
      let body: unknown
      try {
        body = await req.json()
      } catch {
        return NextResponse.json({ error: 'Malformed JSON request body.' }, { status: 400 })
      }
      if (!body || typeof body !== 'object' || Array.isArray(body)) {
        return NextResponse.json({ error: 'Invalid request payload.' }, { status: 400 })
      }

      const payload = body as Record<string, unknown>
      honeypot = getJsonString(payload.faxNumber)
      if (honeypot) {
        return NextResponse.json({ success: true }, { status: 200 })
      }

      name = getJsonString(payload.name) || getJsonString(payload.fullName)
      email = getJsonString(payload.email)
      company = getJsonString(payload.company) || getJsonString(payload.companyName)
      phone = getJsonString(payload.phone)
      requirement =
        getJsonString(payload.manufacturingRequirement) ||
        getJsonString(payload.requirement) ||
        getJsonString(payload.notes) ||
        getJsonString(payload.message)
      source = getJsonString(payload.source) || 'Website Contact Form'
    }

    if (!name || !email || !requirement) {
      return NextResponse.json(
        { error: 'Please provide your name, work email, and a description of your requirement.' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid work email address.' },
        { status: 400 }
      )
    }

    const lengthError =
      validateStringLength(name, 120, 'Name') ||
      validateStringLength(company, 160, 'Company') ||
      validateStringLength(phone, 40, 'Phone') ||
      validateStringLength(source, 160, 'Source') ||
      validateStringLength(requirement, 5000, 'Requirement')

    if (lengthError) {
      return NextResponse.json({ error: lengthError }, { status: 400 })
    }

    const safeReplyTo = stripCrlf(email)
    const subjectName = stripCrlf(name)
    const subjectCompany = stripCrlf(company)

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(safeReplyTo)
    const safeCompany = escapeHtml(company)
    const safePhone = escapeHtml(phone)
    const safeSource = escapeHtml(source)
    const safeRequirement = escapeHtml(requirement)
    const safeFileName = escapeHtml(attachedFileName)
    const safeFileSize = escapeHtml(attachedFileSize)

    const htmlContent = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;max-width:620px;margin:0 auto;color:#0f172a;line-height:1.6;padding:20px;border:1px solid #e2e8f0;border-radius:8px">
        <div style="border-bottom:2px solid #2563eb;padding-bottom:12px;margin-bottom:20px">
          <h2 style="color:#0f172a;margin:0;font-size:20px">New Client Requirement Submitted</h2>
          <p style="font-size:13px;color:#64748b;margin:4px 0 0 0">Source: ${safeSource}</p>
        </div>

        <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
          <tr>
            <td style="padding:8px 0;width:140px;color:#64748b;font-size:14px;vertical-align:top"><strong>Client Name:</strong></td>
            <td style="padding:8px 0;color:#0f172a;font-size:14px;font-weight:600">${safeName}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#64748b;font-size:14px;vertical-align:top"><strong>Work Email:</strong></td>
            <td style="padding:8px 0;font-size:14px"><a href="mailto:${safeEmail}" style="color:#2563eb;text-decoration:none">${safeEmail}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#64748b;font-size:14px;vertical-align:top"><strong>Company:</strong></td>
            <td style="padding:8px 0;color:#0f172a;font-size:14px">${safeCompany || 'Not provided'}</td>
          </tr>
          ${safePhone ? `
          <tr>
            <td style="padding:8px 0;color:#64748b;font-size:14px;vertical-align:top"><strong>Phone:</strong></td>
            <td style="padding:8px 0;color:#0f172a;font-size:14px">${safePhone}</td>
          </tr>
          ` : ''}
          ${safeFileName ? `
          <tr>
            <td style="padding:8px 0;color:#64748b;font-size:14px;vertical-align:top"><strong>Attached File:</strong></td>
            <td style="padding:8px 0;color:#16a34a;font-size:14px;font-weight:600">✓ ${safeFileName} (${safeFileSize})</td>
          </tr>
          ` : ''}
        </table>

        <div style="margin-top:20px">
          <h3 style="font-size:14px;text-transform:uppercase;letter-spacing:0.05em;color:#475569;margin-bottom:8px">Manufacturing Requirement / Scope:</h3>
          <div style="background:#f8fafc;padding:16px;border-radius:6px;border:1px solid #e2e8f0;font-size:14px;line-height:1.6;color:#1e293b;white-space:pre-wrap">${safeRequirement}</div>
        </div>

        <div style="margin-top:28px;padding-top:16px;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8">
          Hit 'Reply' directly to respond to ${safeName} (${safeEmail}).
        </div>
      </div>
    `

    const result = await sendNotificationEmail({
      replyTo: safeReplyTo,
      subject: `New Client Inquiry: ${subjectCompany ? `${subjectCompany} (${subjectName})` : subjectName}${attachedFileName ? ' [File Attached]' : ''}`,
      html: htmlContent,
      attachments: fileAttachment ? [fileAttachment] : undefined,
    })

    if (!result.success) {
      console.error('Failed to send client inquiry email:', result.error)
      return NextResponse.json(
        { error: 'Unable to send your message right now. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: result.id, routedViaBackup: result.routedViaBackup })
  } catch (error) {
    console.error('Error handling contact submission:', error)
    return NextResponse.json(
      { error: 'Unable to send your message right now. Please try again later.' },
      { status: 500 }
    )
  }
}
