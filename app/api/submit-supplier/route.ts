import { NextResponse } from 'next/server'
import { sendNotificationEmail } from '@/lib/sendEmail'
import {
  escapeHtml,
  getFormString,
  getJsonString,
  isValidEmail,
  parseSafeHttpUrl,
  stripCrlf,
  validateStringArray,
  validateStringLength,
  validateUploadedFile,
} from '@/lib/formSecurity'

function parseFormList(raw: string): unknown {
  if (!raw) return []
  try {
    return JSON.parse(raw)
  } catch {
    return raw.split(',').map((s) => s.trim())
  }
}

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

    let companyName = ''
    let location = ''
    let website = ''
    let yearEstablished = ''
    let contactName = ''
    let role = ''
    let email = ''
    let phone = ''
    let rawCapabilities: unknown = []
    let machinerySummary = ''
    let rawCertifications: unknown = []
    let exportExperience = ''
    let monthlyCapacity = ''
    let notes = ''
    let honeypot = ''
    let profileFileName = ''
    let profileFileSize = ''
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

      companyName = getFormString(formData, 'companyName')
      location = getFormString(formData, 'location')
      website = getFormString(formData, 'website')
      yearEstablished = getFormString(formData, 'yearEstablished')
      contactName = getFormString(formData, 'contactName')
      role = getFormString(formData, 'role')
      email = getFormString(formData, 'email')
      phone = getFormString(formData, 'phone')
      machinerySummary = getFormString(formData, 'machinerySummary')
      exportExperience = getFormString(formData, 'exportExperience')
      monthlyCapacity = getFormString(formData, 'monthlyCapacity')
      notes = getFormString(formData, 'notes')

      rawCapabilities = parseFormList(getFormString(formData, 'capabilities'))
      rawCertifications = parseFormList(getFormString(formData, 'certifications'))

      const fileResult = await validateUploadedFile(formData.get('profileFile'))
      if (!fileResult.ok) {
        return NextResponse.json({ error: fileResult.error }, { status: fileResult.status })
      }
      if (fileResult.file) {
        profileFileName = fileResult.file.filename
        profileFileSize = fileResult.file.sizeLabel
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

      companyName = getJsonString(payload.companyName)
      location = getJsonString(payload.location)
      website = getJsonString(payload.website)
      yearEstablished = getJsonString(payload.yearEstablished)
      contactName = getJsonString(payload.contactName)
      role = getJsonString(payload.role)
      email = getJsonString(payload.email)
      phone = getJsonString(payload.phone)
      rawCapabilities = payload.capabilities ?? []
      machinerySummary = getJsonString(payload.machinerySummary)
      rawCertifications = payload.certifications ?? []
      exportExperience = getJsonString(payload.exportExperience)
      monthlyCapacity = getJsonString(payload.monthlyCapacity)
      notes = getJsonString(payload.notes)
    }

    if (!companyName || !location || !contactName || !email || !phone) {
      return NextResponse.json(
        { error: 'Please fill in all required fields (Company Name, Factory Location, Contact Name, Email, Phone).' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid work email address.' },
        { status: 400 }
      )
    }

    let safeWebsiteUrl: string | null = null
    if (website) {
      safeWebsiteUrl = parseSafeHttpUrl(website)
      if (!safeWebsiteUrl) {
        return NextResponse.json(
          { error: 'Website URL must start with http:// or https://.' },
          { status: 400 }
        )
      }
    }

    const capResult = validateStringArray(rawCapabilities, 'Capabilities')
    if (!capResult.ok) {
      return NextResponse.json({ error: capResult.error }, { status: 400 })
    }
    if (capResult.values.length === 0) {
      return NextResponse.json(
        { error: 'Please select at least one manufacturing capability.' },
        { status: 400 }
      )
    }

    const certResult = validateStringArray(rawCertifications, 'Certifications')
    if (!certResult.ok) {
      return NextResponse.json({ error: certResult.error }, { status: 400 })
    }

    const lengthError =
      validateStringLength(companyName, 160, 'Company name') ||
      validateStringLength(location, 160, 'Location') ||
      validateStringLength(website, 300, 'Website') ||
      validateStringLength(yearEstablished, 20, 'Year established') ||
      validateStringLength(contactName, 120, 'Contact name') ||
      validateStringLength(role, 120, 'Role') ||
      validateStringLength(phone, 40, 'Phone') ||
      validateStringLength(monthlyCapacity, 160, 'Monthly capacity') ||
      validateStringLength(exportExperience, 160, 'Export experience') ||
      validateStringLength(machinerySummary, 5000, 'Key machinery') ||
      validateStringLength(notes, 5000, 'Notes')

    if (lengthError) {
      return NextResponse.json({ error: lengthError }, { status: 400 })
    }

    const safeReplyTo = stripCrlf(email)
    const subjectCompany = stripCrlf(companyName)
    const subjectLocation = stripCrlf(location)

    const safeCompanyName = escapeHtml(companyName)
    const safeLocation = escapeHtml(location)
    const safeWebsiteHtml = safeWebsiteUrl
      ? `<a href="${escapeHtml(safeWebsiteUrl)}">${escapeHtml(safeWebsiteUrl)}</a>`
      : 'Not provided'
    const safeYear = escapeHtml(yearEstablished)
    const safeCapacity = escapeHtml(monthlyCapacity)
    const safeExport = escapeHtml(exportExperience)
    const safeContactName = escapeHtml(contactName)
    const safeRole = escapeHtml(role)
    const safeEmail = escapeHtml(safeReplyTo)
    const safePhone = escapeHtml(phone)
    const safeCaps = capResult.values.map(escapeHtml).join(', ')
    const safeCerts = certResult.values.map(escapeHtml).join(', ')
    const safeMachinery = machinerySummary ? escapeHtml(machinerySummary).replace(/\n/g, '<br/>') : 'None provided'
    const safeFileName = escapeHtml(profileFileName)
    const safeFileSize = escapeHtml(profileFileSize)
    const safeNotes = notes ? escapeHtml(notes).replace(/\n/g, '<br/>') : 'None provided'

    const html = `
      <div style="font-family:sans-serif;max-width:640px;margin:0 auto;color:#111;line-height:1.6">
        <h2 style="color:#2563eb;margin-bottom:8px">New Supplier Network Application</h2>
        <p style="font-size:14px;color:#666">Submitted via proqra.co.uk/supplier-network</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
        
        <h3 style="font-size:16px;color:#0f172a;margin-bottom:8px">Company Profile</h3>
        <p><strong>Company Name:</strong> ${safeCompanyName}</p>
        <p><strong>Factory Location:</strong> ${safeLocation}</p>
        <p><strong>Website:</strong> ${safeWebsiteHtml}</p>
        <p><strong>Year Established:</strong> ${safeYear || 'Not specified'}</p>
        <p><strong>Monthly Capacity / Floor Area:</strong> ${safeCapacity || 'Not specified'}</p>
        <p><strong>Export Experience:</strong> ${safeExport || 'Not specified'}</p>

        <h3 style="font-size:16px;color:#0f172a;margin-top:20px;margin-bottom:8px">Contact Information</h3>
        <p><strong>Contact Person:</strong> ${safeContactName} (${safeRole || 'Representative'})</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p><strong>Phone / WhatsApp:</strong> ${safePhone}</p>
        
        <h3 style="font-size:16px;color:#0f172a;margin-top:20px;margin-bottom:8px">Capabilities & Machinery</h3>
        <p><strong>Core Capabilities:</strong> ${safeCaps}</p>
        <p><strong>Quality Certifications:</strong> ${safeCerts || 'None specified'}</p>
        <p><strong>Major Equipment:</strong></p>
        <p style="background:#f8fafc;padding:10px;border-radius:6px;border:1px solid #e2e8f0">${safeMachinery}</p>

        <p><strong>Machine List / Brochure:</strong> ${safeFileName || 'None'} ${safeFileSize ? `(${safeFileSize})` : ''} ${fileAttachment ? '<span style="color:#16a34a;font-weight:600">✓ Attached to this email</span>' : ''}</p>
        
        <h3 style="font-size:16px;color:#0f172a;margin-top:20px;margin-bottom:8px">Additional Notes</h3>
        <p style="background:#f8fafc;padding:12px;border-radius:6px;border:1px solid #e2e8f0">${safeNotes}</p>
      </div>
    `

    const result = await sendNotificationEmail({
      replyTo: safeReplyTo,
      subject: `New Supplier Application: ${subjectCompany} (${subjectLocation})`,
      html,
      attachments: fileAttachment ? [fileAttachment] : undefined,
    })

    if (!result.success) {
      console.error('Failed to send supplier application email:', result.error)
      return NextResponse.json(
        { error: 'Unable to submit your application right now. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: result.id, routedViaBackup: result.routedViaBackup })
  } catch (error) {
    console.error('Error handling supplier application submission:', error)
    return NextResponse.json(
      { error: 'Unable to submit your application right now. Please try again later.' },
      { status: 500 }
    )
  }
}
