import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Quality & Inspection | PROQRA',
  description:
    'What gets checked, what gets documented, and who carries the risk. Full pre-shipment inspection on every order.',
}

const checks = [
  {
    title: 'Dimensional',
    desc: 'Key dimensions and tolerances checked against your drawing (standard ISO 2768-m or tighter). Sample size agreed prior to production.',
  },
  {
    title: 'Material',
    desc: 'Mill certificates traced directly to the batch and heat number used, never generic grade certs.',
  },
  {
    title: 'Welds',
    desc: 'Visual inspection to specified standards (MIG/TIG), with weld throat, penetration, and placement checked against drawing.',
  },
  {
    title: 'Finish',
    desc: 'Coating type, micron thickness, coverage, and surface condition verified prior to crating.',
  },
  {
    title: 'Packing',
    desc: 'Piece count verification, VCI moisture-barrier wrapping, and heat-treated export crating suited for ocean transit.',
  },
]

const documentation = [
  {
    title: 'Dimensional Inspection Report',
    desc: 'Measured values recorded against drawing dimensions and agreed tolerances.',
  },
  {
    title: 'Material Test Certificates',
    desc: 'Official mill test certs matching the exact plates and tubes used in production.',
  },
  {
    title: 'Certificate of Origin',
    desc: 'Official trade documentation required to claim preferential duty under the UK–India trade agreement.',
  },
  {
    title: 'Photographs Before Sealing',
    desc: 'High-resolution photo log of packed parts and container seal before departure.',
  },
]

export default function QualityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 sm:pt-40 pb-16 px-5 sm:px-8 lg:px-12 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
            Quality Assurance
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
            The parts are checked before they ship, <br />
            <span className="text-blue-600 font-normal italic-accent">
              and you get the paperwork to prove it.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Overseas sourcing goes wrong quietly. Nobody tells you material was substituted or a weld was ground back until the crate arrives on your yard. Everything below is completed before goods leave India, while corrections are immediate and cheap.
          </p>
        </div>
      </section>

      {/* What Gets Checked */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8">
            What gets inspected on every order
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {checks.map((c) => (
              <div key={c.title} className="border-t border-slate-200 pt-4">
                <h3 className="text-sm font-bold text-slate-900 mb-1">{c.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Pack */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            What ships with your order
          </h2>
          <p className="text-sm text-slate-600 mb-8">
            Full documentation pack released with the goods before arrival.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {documentation.map((d) => (
              <div key={d.title} className="border-t border-slate-200 pt-4">
                <h3 className="text-sm font-bold text-slate-900 mb-1">{d.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-slate-100 text-xs text-slate-600">
            <strong>Independent inspection:</strong> Third-party inspection through SGS, Intertek, or Bureau Veritas can be arranged at cost for high-value orders.
          </div>
        </div>
      </section>

      {/* Defect Policy (Clean white background, no dark blue) */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            Our position on defects, stated plainly.
          </h2>
          <div className="space-y-4 text-sm text-slate-600 max-w-3xl leading-relaxed">
            <p>
              If parts fail inspection in India, they do not ship. They are reworked or remade by the supplier before dispatch at their expense.
            </p>
            <p>
              If parts reach you and do not meet the agreed drawing, tell us with evidence and we handle it directly: rework, replacement, or credit. You will not have to argue with an overseas factory about parts you have already paid for.
            </p>
            <p className="font-semibold text-slate-900 pt-2">
              Overseas sourcing carries risk. Our process catches issues while they cost hundreds of pounds to fix, rather than thousands after arrival.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-5 sm:px-8 lg:px-12 text-center">
        <div className="max-w-xl mx-auto">
          <Link
            href="/get-started"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-6 py-3 rounded transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
