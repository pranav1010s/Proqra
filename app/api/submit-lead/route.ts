import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      fullName,
      companyName,
      email,
      phone,
      partDescription,
      quantity,
      materialFinish,
      targetLeadTime,
      notes,
      drawingFileName,
      drawingFileSize,
    } = body

    if (!fullName || !companyName || !email || !partDescription || !quantity) {
      return NextResponse.json(
        { error: 'Please fill in all required fields (Name, Company, Email, Part Description, Quantity).' },
        { status: 400 }
      )
    }

    const resendKey = process.env.RESEND_API_KEY

    if (resendKey) {
      const resend = new Resend(resendKey)
      const to = process.env.CONTACT_EMAIL || 'hello@proqra.co.uk'

      const data = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'PROQRA Quotations <hello@proqra.co.uk>',
        to,
        subject: `New Drawing Quote Request: ${companyName} (${partDescription})`,
        html: `
          <div style="font-family:sans-serif;max-width:640px;margin:0 auto;color:#111;line-height:1.6">
            <h2 style="color:#2563eb;margin-bottom:8px">New Fabrication Quote Request</h2>
            <p style="font-size:14px;color:#666">Submitted via proqra.co.uk/get-started</p>
            <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
            
            <h3 style="font-size:16px;color:#0f172a;margin-bottom:8px">Contact Details</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Company:</strong> ${companyName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            
            <h3 style="font-size:16px;color:#0f172a;margin-top:20px;margin-bottom:8px">Fabrication Specification</h3>
            <p><strong>Part Description:</strong> ${partDescription}</p>
            <p><strong>Quantity:</strong> ${quantity}</p>
            <p><strong>Material & Finish:</strong> ${materialFinish || 'As per drawing'}</p>
            <p><strong>Target Lead Time:</strong> ${targetLeadTime || 'Standard'}</p>
            <p><strong>Attached Drawing:</strong> ${drawingFileName || 'None'} ${drawingFileSize ? `(${drawingFileSize})` : ''}</p>
            
            <h3 style="font-size:16px;color:#0f172a;margin-top:20px;margin-bottom:8px">Additional Notes</h3>
            <p style="background:#f8fafc;padding:12px;border-radius:6px;border:1px solid #e2e8f0">${notes ? notes.replace(/\n/g, '<br/>') : 'None provided'}</p>
          </div>
        `,
      })

      return NextResponse.json({ success: true, data })
    } else {
      console.log('[DEV MODE] RESEND_API_KEY is not set in environment. Drawing quote data received:', {
        fullName,
        companyName,
        email,
        phone,
        partDescription,
        quantity,
        materialFinish,
        targetLeadTime,
        drawingFileName,
        drawingFileSize,
        notes,
      })
      return NextResponse.json({ success: true, devMode: true })
    }
  } catch (error: any) {
    console.error('Error handling drawing quote submission:', error)
    return NextResponse.json(
      { error: error?.message || 'Failed to submit drawing quote request.' },
      { status: 500 }
    )
  }
}