import type { Metadata } from 'next'
import GetStartedForm from './GetStartedForm'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Build Your Team | proqra',
  description:
    'Tell us about the roles you are looking to hire, target locations, team sizes, and timeline.',
}

export default function GetStartedPage() {
  return (
    <main className="min-h-screen px-6 sm:px-10 py-24 bg-slate-50/60 relative">
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Back */}
        <div className="max-w-[580px] mx-auto mb-10">
          <Link
            href="/"
            id="back-to-home"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors duration-300"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </div>

        {/* Heading */}
        <div className="max-w-[580px] mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            Build your global team
          </h1>
          <p className="text-slate-600 text-[15px] leading-relaxed">
            Tell us about the roles and capabilities you want to scale. We will review your goals and get back to you with a tailored operational roadmap within 1–2 business days.
          </p>
        </div>

        {/* Form */}
        <GetStartedForm />

        {/* Privacy */}
        <p className="text-center text-[11px] tracking-widest text-slate-400 font-medium mt-14 uppercase">
          Your information is kept private and secure.
        </p>
      </div>
    </main>
  )
}

