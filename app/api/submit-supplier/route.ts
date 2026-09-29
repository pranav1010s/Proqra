import { NextResponse } from 'next/server'
import { sendNotificationEmail } from '@/lib/sendEmail'

export async function POST(req: Request) {
  try {
    let companyName = ''
    let location = ''
    let website = ''
    let yearEstablished = ''
    let contactName = ''
    let role = ''
    let email = ''
    let phone = ''
    let capabilities: string[] = []
    let machinerySummary = ''
    let certifications: string[] = []
    let exportExperience = ''
    let monthlyCapacity = ''
    let notes = ''
    let profileFileName = ''
    let profileFileSize = ''
    let fileAttachment: { filename: string; content: Buffer } | null = null

    const contentType = req.headers.get('content-type') || ''

    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData()
      companyName = (formData.get('companyName') as string) || ''
      location = (formData.get('location') as string) || ''
      website = (formData.get('website') as string) || ''
      yearEstablished = (formData.get('yearEstablished') as string) || ''
      contactName = (formData.get('contactName') as string) || ''
      role = (formData.get('role') as string) || ''
      email = (formData.get('email') as string) || ''
      phone = (formData.get('phone') as string) || ''
      machinerySummary = (formData.get('machinerySummary') as string) || ''
      exportExperience = (formData.get('exportExperience') as string) || ''
      monthlyCapacity = (formData.get('monthlyCapacity') as string) || ''
      notes = (formData.get('notes') as string) || ''

      const capsRaw = formData.get('capabilities') as string
      if (capsRaw) {
        try {
          capabilities = JSON.parse(capsRaw)
        } catch {
          capabilities = capsRaw.split(',').map((s) => s.trim())
        }
      }

      const certsRaw = formData.get('certifications') as string
      if (certsRaw) {
        try {
          certifications = JSON.parse(certsRaw)
        } catch {
          certifications = certsRaw.split(',').map((s) => s.trim())
        }
      }

      const file = formData.get('profileFile') as File | null
      if (file && file.size > 0) {
        profileFileName = file.name
        profileFileSize = `${(file.size / (1024 * 1024)).toFixed(2)} MB`
        const buffer = Buffer.from(await file.arrayBuffer())
        fileAttachment = {
          filename: file.name,
          content: buffer,
        }
      }
    } else {
      const body = await req.json()
      companyName = body.companyName || ''
      location = body.location || ''
      website = body.website || ''
      yearEstablished = body.yearEstablished || ''
      contactName = body.contactName || ''
      role = body.role || ''
      email = body.email || ''
      phone = body.phone || ''
      capabilities = Array.isArray(body.capabilities) ? body.capabilities : []
      machinerySummary = body.machinerySummary || ''
      certifications = Array.isArray(body.certifications) ? body.certifications : []
      exportExperience = body.exportExperience || ''
      monthlyCapacity = body.monthlyCapacity || ''
      notes = body.notes || ''
      profileFileName = body.profileFileName || ''
      profileFileSize = body.profileFileSize || ''
    }

    if (!companyName || !location || !contactName || !email || !phone) {
      return NextResponse.json(
        { error: 'Please fill in all required fields (Company Name, Factory Location, Contact Name, Email, Phone).' },
        { status: 400 }
      )
    }

    const html = `
      <div style="font-family:sans-serif;max-width:640px;margin:0 auto;color:#111;line-height:1.6">
        <h2 style="color:#2563eb;margin-bottom:8px">New Supplier Network Application</h2>
        <p style="font-size:14px;color:#666">Submitted via proqra.co.uk/for-suppliers</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
        
        <h3 style="font-size:16px;color:#0f172a;margin-bottom:8px">Company Profile</h3>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Factory Location:</strong> ${location}</p>
        <p><strong>Website:</strong> ${website ? `<a href="${website}">${website}</a>` : 'Not provided'}</p>
        <p><strong>Year Established:</strong> ${yearEstablished || 'Not specified'}</p>
        <p><strong>Monthly Capacity / Floor Area:</strong> ${monthlyCapacity || 'Not specified'}</p>
        <p><strong>Export Experience:</strong> ${exportExperience || 'Not specified'}</p>

        <h3 style="font-size:16px;color:#0f172a;margin-top:20px;margin-bottom:8px">Contact Information</h3>
        <p><strong>Contact Person:</strong> ${contactName} (${role || 'Representative'})</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone / WhatsApp:</strong> ${phone}</p>
        
        <h3 style="font-size:16px;color:#0f172a;margin-top:20px;margin-bottom:8px">Capabilities & Machinery</h3>
        <p><strong>Core Capabilities:</strong> ${capabilities.length > 0 ? capabilities.join(', ') : 'None selected'}</p>
        <p><strong>Quality Certifications:</strong> ${certifications.length > 0 ? certifications.join(', ') : 'None specified'}</p>
        <p><strong>Major Equipment:</strong></p>
        <p style="background:#f8fafc;padding:10px;border-radius:6px;border:1px solid #e2e8f0">${machinerySummary ? machinerySummary.replace(/\n/g, '<br/>') : 'None provided'}</p>

        <p><strong>Machine List / Brochure:</strong> ${profileFileName || 'None'} ${profileFileSize ? `(${profileFileSize})` : ''} ${fileAttachment ? '<span style="color:#16a34a;font-weight:600">✓ Attached to this email</span>' : ''}</p>
        
        <h3 style="font-size:16px;color:#0f172a;margin-top:20px;margin-bottom:8px">Additional Notes</h3>
        <p style="background:#f8fafc;padding:12px;border-radius:6px;border:1px solid #e2e8f0">${notes ? notes.replace(/\n/g, '<br/>') : 'None provided'}</p>
      </div>
    `

    const result = await sendNotificationEmail({
      replyTo: email,
      subject: `New Supplier Application: ${companyName} (${location})`,
      html,
      attachments: fileAttachment ? [fileAttachment] : undefined,
    })

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: result.id, routedViaBackup: result.routedViaBackup })
  } catch (error: any) {
    console.error('Error handling supplier application submission:', error)
    return NextResponse.json(
      { error: error?.message || 'Failed to submit supplier application.' },
      { status: 500 }
    )
  }
}
