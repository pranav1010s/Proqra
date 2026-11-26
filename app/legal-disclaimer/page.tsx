import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { AlertCircle, ArrowLeft, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Legal Disclaimer | PROQRA',
  description:
    'Legal disclaimer outlining the scope of PROQRA services, supplier qualification advisory, website content, and terms of engagement.',
}

export default function LegalDisclaimerPage() {
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
              <AlertCircle size={20} />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                Terms & Disclaimers
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Legal Disclaimer
            </h1>

            <p className="text-sm sm:text-base text-slate-600">
              Last updated: {lastUpdated}. Terms governing website information, supplier qualification services, and commercial scope.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              1. Nature of Our Services
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              PROQRA is building a procurement platform and works with UK manufacturing companies on supplier tasks, starting with sourcing from India. Our services include supplier discovery, document and certificate checks, supplier follow-up, supplier data organisation, visual site checks, and coordinating independent third-party inspections.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              PROQRA acts as a coordination and procurement support partner. Any third-party technical inspection, laboratory testing, or freight service is carried out by independent specialists.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              2. Independent Manufacturing Facilities
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              All recommended factories, machine shops, foundries, and fabrication plants in India are legally and operationally independent third-party commercial entities.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              While PROQRA checks supplier paperwork, coordinates visual site checks, and arranges independent third-party inspections where requested, commercial supply contracts, warranty obligations, credit terms, and delivery agreements are governed by the specific commercial contracts entered into between the client and the selected manufacturing entity.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              3. Website Information & Technical Quotations
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              Information provided on this website, including illustrative lead times, process capabilities, material grades, and tolerance ranges, is provided for general informational purposes.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              No material on this website constitutes a binding offer or contract. Exact lead times, tooling costs, piece prices, and dimensional tolerances are confirmed on an individual basis following drawing review, material specification confirmation, and formal quotation.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              4. Supplier Certifications & Standards
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              Mentions of third-party quality standards (such as ISO 9001, IATF 16949, AS9100, or ISO 13485) refer to certifications held by independent partner facilities. PROQRA checks the active registration, scope, and issuing body of supplier certificates where possible, but does not certify suppliers, sign off engineering, or issue accreditation credentials.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              5. Limitation of Liability
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              To the fullest extent permitted by applicable law, PROQRA excludes liability for any indirect, special, incidental, or consequential loss, loss of profits, production delays, or loss of business opportunity arising from reliance on general website content.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              Specific liabilities, inspection protocols, rejection criteria, and remedies for commercial engagements are strictly defined in signed service agreements.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              6. Governing Law & Jurisdiction
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              This legal disclaimer and all matters arising out of or related to this website are governed by and construed in accordance with the laws of England and Wales. The courts of England and Wales have exclusive jurisdiction to settle any dispute.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Questions regarding our legal terms?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Contact PROQRA directly to discuss our procurement framework and service scope.
              </p>
            </div>
            <a
              href="mailto:hello@proqra.co.uk"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded transition-colors shrink-0"
            >
              <Mail size={15} />
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
