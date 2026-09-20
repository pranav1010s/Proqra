import type { Metadata } from 'next'
import GetStartedForm from './GetStartedForm'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Request a Quote | Send Us a Drawing | PROQRA',
  description:
    'Send us a drawing for sheet metal fabrication or welded assemblies. Landed cost, lead time, and inspection scope within five working days.',
}

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-between">
      <Navbar />

      <div className="pt-32 sm:pt-40 pb-20 px-5 sm:px-8 lg:px-12">
        <div className="max-w-xl mx-auto mb-8">
          <Link
            href="/"
            className="text-xs text-slate-500 hover:text-slate-900 underline"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="max-w-xl mx-auto mb-8 text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
            Quotation
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Send us a drawing.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We will respond within five working days with a landed cost to your door, a lead time, and an honest view on whether this part suits Indian fabrication.
          </p>
        </div>

        <GetStartedForm />

        <div className="max-w-xl mx-auto mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
            What happens next
          </h2>

          <div className="space-y-4 text-xs text-slate-600">
            <div>
              <strong className="text-slate-800">1. Drawing review:</strong> We confirm whether we can quote it within two working days.
            </div>
            <div>
              <strong className="text-slate-800">2. Sourcing & pricing:</strong> We identify and price with suitable fabricators, drawing from suppliers already vetted where possible and vetting new ones where needed, with inspection included.
            </div>
            <div>
              <strong className="text-slate-800">3. Written terms:</strong> Before any work starts, we agree delivery dates, inspection scope, and terms in writing.
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between text-xs text-slate-500 gap-2">
            <span>No obligation. No mailing lists.</span>
            <span>Prefer to talk first? <a href="mailto:hello@proqra.co.uk" className="text-slate-800 underline">hello@proqra.co.uk</a></span>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}