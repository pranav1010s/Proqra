import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Lock, FileText, ArrowLeft, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Client Confidentiality | PROQRA',
  description:
    'Our commitment to protecting your intellectual property, CAD drawings, manufacturing specifications, and commercial data.',
}

export default function ClientConfidentialityPage() {
  const lastUpdated = 'September 2026'

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-6"
            >
              <ArrowLeft size={14} />
              <span>Back to Home</span>
            </Link>

            <div className="flex items-center gap-2.5 text-blue-600 mb-3">
              <Lock size={20} />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                Confidentiality Policy
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Client Confidentiality
            </h1>

            <p className="text-sm sm:text-base text-slate-600">
              Last updated: {lastUpdated}. How we safeguard your engineering drawings, intellectual property, and commercial specifications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              1. Our Core Commitment
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              At PROQRA, we understand that sharing component drawings, tolerances, material grades, and CAD models requires absolute trust. Your engineering designs and manufacturing drawings represent proprietary intellectual property and commercial advantage.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              We treat all client technical documentation, CAD files, commercial targets, and project communications with strict confidentiality from the moment you initiate contact with PROQRA.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              2. Non-Disclosure Agreements (NDAs)
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              We gladly execute standard mutual or client-specific Non-Disclosure Agreements before receiving any drawings or proprietary technical information.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              If you have your own standard corporate NDA, PROQRA’s founder will review and sign it promptly. Alternatively, we can provide our standard mutual NDA governed by English law.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              3. Controlled Supplier Disclosure
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              We never upload drawings to open directories, online marketplaces, or broadcast portals. Supplier access is tightly controlled:
            </p>
            <ul className="space-y-2.5 pl-4 text-sm sm:text-base text-slate-700 list-disc">
              <li>
                <strong className="text-slate-900">Need-to-Know Basis:</strong> Drawings and specifications are shared only with specific Indian manufacturers that we have reviewed and matched to the required process capability.
              </li>
              <li>
                <strong className="text-slate-900">Supplier Confidentiality Commitments:</strong> Before sensitive drawings are shared with a shortlisted supplier, we require written confidentiality commitments restricting use strictly to preparing a quotation or fulfilling the requirement.
              </li>
              <li>
                <strong className="text-slate-900">Redaction Upon Request:</strong> If preferred, we can work with anonymised drawings where title blocks, end-customer brand names, or project codes have been removed prior to factory review.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              4. 100% Client IP Ownership
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              You retain sole and exclusive ownership of all intellectual property rights in your designs, 2D/3D CAD models, tooling, fixtures, and specifications.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              Neither PROQRA nor any supplier gains any ownership rights, licenses, or claims to your designs by virtue of reviewing, quoting, or producing initial trial materials.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              5. Secure Handling & Data Purging
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              Technical files are stored in access-restricted, encrypted cloud environments accessible only to PROQRA’s founder and the team members directly assisting with your task.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              If an inquiry does not progress to qualification or production, or upon your written request at any time, we will permanently delete all local and cloud copies of your drawings and CAD models.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Request an NDA before sharing drawings
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Speak directly with PROQRA to put an NDA in place before sharing drawings.
              </p>
            </div>
            <a
              href="mailto:hello@proqra.co.uk?subject=Request%20NDA"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded transition-colors shrink-0"
            >
              <FileText size={15} />
              <span>Request NDA</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
