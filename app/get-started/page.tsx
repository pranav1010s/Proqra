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
    <main className="min-h-screen px-6 sm:px-10 py-24 bg-black relative">
      <div className="relative z-10">
        {/* Back */}
        <div className="max-w-[580px] mx-auto mb-12">
          <Link
            href="/"
            id="back-to-home"
            className="inline-flex items-center gap-2 text-xs font-bold text-white/40 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={14} />
            Back
          </Link>
        </div>

        {/* Heading */}
        <div className="max-w-[580px] mx-auto mb-14">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Build your global team
          </h1>
          <p className="text-neutral-400 text-[15px] leading-relaxed">
            Tell us about the roles and capabilities you want to scale. We will review your goals and get back to you with a tailored operational roadmap within 1–2 business days.
          </p>
        </div>

        {/* Form */}
        <GetStartedForm />

        {/* Privacy */}
        <p className="text-center text-[10px] tracking-widest text-white/20 mt-16 uppercase">
          Your information is kept private and secure.
        </p>
      </div>
    </main>
  )
}
