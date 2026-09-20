import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'How We Source | PROQRA',
  description:
    'The 6-stage supplier vetting process every fabricator goes through before they are approved to quote your work.',
}

const stages = [
  {
    num: '01',
    title: 'Cluster shortlisting',
    summary: 'Sourcing is focused within established industrial clusters: Pune, Coimbatore, and Rajkot. Working inside clusters ensures alternatives are nearby when a supplier is at capacity or unsuitable.',
    detail: 'Shortlists are built from trade bodies, export council records, and direct referral rather than open web directories.',
  },
  {
    num: '02',
    title: 'Documentation check',
    summary: 'Before discussing your parts, registrations are verified against official records.',
    detail: 'ISO 9001 checked against the issuing body (not accepted as an unverified PDF), plus GST, Import Export Code, and directors verified.',
  },
  {
    num: '03',
    title: 'Capability review',
    summary: 'An audit of machinery age, in-house vs subcontracted processes, routine materials, and realistic capacity.',
    detail: 'Inspection equipment is verified on site, including calibration validity and environmental controls.',
  },
  {
    num: '04',
    title: 'Physical verification',
    summary: 'Someone walks the factory floor unannounced. Not a showcase visit, but a check on active work in progress, material storage, housekeeping, and whether inspection is actually happening.',
    detail: 'A factory tells you the truth in twenty minutes if you are standing in it.',
  },
  {
    num: '05',
    title: 'Sample against a real drawing',
    summary: 'Suppliers quote and produce a sample against an actual drawing with real tolerances.',
    detail: 'We evaluate technical queries raised, dimensional accuracy, and how the supplier responds if something requires adjustment.',
  },
  {
    num: '06',
    title: 'Ongoing performance',
    summary: 'Continuous review on on-time delivery, first-pass quality, and communication transparency.',
    detail: 'A supplier that flags schedule slips early is kept; one that conceals delays is removed.',
  },
]

export default function HowWeSourcePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 sm:pt-40 pb-16 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
            Vetting Process
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
            Anyone can find a factory. <br />
            <span className="text-blue-600 font-normal italic-accent">
              The work is proving it can do your job.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            There are thousands of fabricators in India. A directory listing or an ISO logo tells you almost nothing about whether a shop can hold your tolerances or hit your date. This is the process every supplier undergoes before quoting your work.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="divide-y divide-slate-200">
            {stages.map((stage) => (
              <div key={stage.num} className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                <div className="md:col-span-2">
                  <span className="text-xs font-mono text-slate-400">Stage {stage.num}</span>
                </div>
                <div className="md:col-span-4">
                  <h2 className="text-lg font-bold text-slate-900">{stage.title}</h2>
                </div>
                <div className="md:col-span-6 space-y-2">
                  <p className="text-sm text-slate-700 leading-relaxed">{stage.summary}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{stage.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
            Test our vetting on a single drawing
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Send a drawing and we will assess fit and provide a landed quote with full inspection scope.
          </p>
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
