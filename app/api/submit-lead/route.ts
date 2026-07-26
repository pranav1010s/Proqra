import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { fullName, companyName, email, phone, painPoints, erpSystem, timeline, notes } = body

    if (!fullName || !companyName || !email || !painPoints) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    const resendKey = process.env.RESEND_API_KEY

    if (resendKey) {
      const resend = new Resend(resendKey)
      const to = process.env.CONTACT_EMAIL || 'hello@proqra.co.uk'

      const data = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'Proqra Leads <onboarding@resend.dev>',
        to,
        subject: `New Data Audit Request: ${companyName}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
            <h2 style="color:#2563eb">New Lead from PROQRA Website</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Company:</strong> ${companyName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <br/>
            <p><strong>Primary ERP System:</strong> ${erpSystem || 'Not specified'}</p>
            <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
            <p><strong>Pain Points:</strong> ${painPoints}</p>
            <p><strong>Notes:</strong> ${notes || 'None'}</p>
          </div>
        `,
      })

      return NextResponse.json({ success: true, data })
    } else {
      console.log('[DEV MODE] RESEND_API_KEY is not set in environment. Lead data received:', body)
      return NextResponse.json({ success: true, devMode: true })
    }
  } catch (error: any) {
    console.error('Error sending lead email:', error)
    return NextResponse.json(
      { error: error?.message || 'Failed to submit form.' },
      { status: 500 }
    )
  }
}
