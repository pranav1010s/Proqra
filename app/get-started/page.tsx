import type { Metadata } from 'next'
import GetStartedForm from './GetStartedForm'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Request Data Audit | PROQRA',
  description:
    'Tell us about your ERP setup and data bottlenecks to receive a free operational diagnostic.',
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
            Request a Free Data Audit
          </h1>
          <p className="text-slate-600 text-[15px] leading-relaxed">
            Tell us about your current systems and operational bottlenecks. We will review your setup and reach out to map exactly how much manual work we can take off your plate.
          </p>
        </div>

        {/* Form */}
        <GetStartedForm />

        {/* Privacy */}
        <p className="text-center text-[11px] tracking-widest text-slate-400 font-medium mt-14 uppercase">
          Your information and systems data are kept strictly confidential.
        </p>
      </div>
    </main>
  )
}