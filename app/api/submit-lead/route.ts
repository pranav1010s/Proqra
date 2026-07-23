import { NextRequest, NextResponse } from 'next/server'
import type { Lead } from '@/types/lead'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, companyName, email, requirements } = body

    // Basic validation
    if (!fullName || !companyName || !email || !requirements) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    const lead: Lead = {
      fullName,
      companyName,
      email,
      phone: body.phone || undefined,
      requirements,
      budget: body.budget || undefined,
      timeline: body.timeline || undefined,
      notes: body.notes || undefined,
      software: body.software || undefined,
      submittedAt: new Date(),
    }

    const mongoUri = process.env.MONGODB_URI
    const resendKey = process.env.RESEND_API_KEY

    // ── MongoDB ──────────────────────────────────────────────────────────────
    if (mongoUri) {
      try {
        const clientPromise = (await import('@/lib/mongodb')).default
        const client = await clientPromise
        const db = client.db('proqra')
        await db.collection('leads').insertOne(lead)
      } catch (dbErr) {
        console.error('MongoDB write failed:', dbErr)
        // Non-fatal: continue to email
      }
    } else {
      console.log('[DEV] MongoDB URI not set - skipping DB write. Lead:', lead)
    }

    // ── Resend email ─────────────────────────────────────────────────────────
    if (resendKey) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(resendKey)
        const to = process.env.CONTACT_EMAIL || 'hello@proqra.com'

        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
          to,
          subject: `New lead from ${fullName} at ${companyName}`,
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
              <h2 style="color:#00c875">New GCC/EOR Lead</h2>
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:8px 0;color:#555;width:180px">Name</td><td><strong>${lead.fullName}</strong></td></tr>
                <tr><td style="padding:8px 0;color:#555">Company</td><td>${lead.companyName}</td></tr>
                <tr><td style="padding:8px 0;color:#555">Email</td><td><a href="mailto:${lead.email}">${lead.email}</a></td></tr>
                <tr><td style="padding:8px 0;color:#555">Phone</td><td>${lead.phone || 'N/A'}</td></tr>
                <tr><td style="padding:8px 0;color:#555">Target Team Size</td><td>${lead.budget || 'N/A'}</td></tr>
                <tr><td style="padding:8px 0;color:#555">Timeline</td><td>${lead.timeline || 'N/A'}</td></tr>
                <tr><td style="padding:8px 0;color:#555;vertical-align:top">Roles & Requirements</td><td>${lead.requirements}</td></tr>
                <tr><td style="padding:8px 0;color:#555;vertical-align:top">Software & ERP</td><td>${lead.software || 'N/A'}</td></tr>
                <tr><td style="padding:8px 0;color:#555;vertical-align:top">Regions & Compliance</td><td>${lead.notes || 'N/A'}</td></tr>
              </table>
              <p style="margin-top:24px;color:#888;font-size:12px">Submitted at ${lead.submittedAt.toISOString()}</p>
            </div>
          `,
        })
      } catch (emailErr) {
        console.error('Resend email failed:', emailErr)
        // Non-fatal
      }
    } else {
      console.log('[DEV] RESEND_API_KEY not set - skipping email.')
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('submit-lead error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
