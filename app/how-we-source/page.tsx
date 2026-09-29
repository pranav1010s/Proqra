import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Check, ShieldCheck, Factory, FileText, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How We Source | PROQRA',
  description:
    'The end-to-end 7-step sourcing and technical development process every supplier undergoes for UK manufacturers.',
}

const sevenStages = [
  {
    num: '01',
    name: 'Find',
    title: 'Requirements-led supplier discovery',
    summary:
      'We do not search generic B2B web directories. Sourcing is concentrated directly within specialized engineering clusters (Pune, Rajkot, Coimbatore, and Chennai), matching your exact 2D drawing, material grades, and batch volumes.',
    deliverables: [
      'Drawing and tolerance analysis (2D & 3D CAD)',
      'Direct machine-capacity pre-match',
      'Local cluster shortlisting based on verified historical output'
    ]
  },
  {
    num: '02',
    name: 'Qualify',
    title: 'In-person shop-floor evaluation',
    summary:
      'We walk the physical factory floor unannounced. Not a boardroom presentation, but an active inspection of running machines, calibration logs, material storage racks, and housekeeping.',
    deliverables: [
      'Unannounced physical factory walk',
      'Inspection instrument calibration validity check',
      'Material storage and segregation audit'
    ]
  },
  {
    num: '03',
    name: 'Develop',
    title: 'Closing capability and procedural gaps',
    summary:
      'Capable machinery often lacks UK-spec procedural controls. We embed directly with the supplier’s engineering team to implement standard operating procedures, custom tooling setups, and traceability systems.',
    deliverables: [
      'Standard Operating Procedure (SOP) formalization',
      'Inspection record standardization',
      'Material mill test certificate (MTC 3.1) traceability setup'
    ]
  },
  {
    num: '04',
    name: 'Validate',
    title: 'First-article & specification sign-off',
    summary:
      'Suppliers produce first articles checked against your exact tolerance callouts. We inspect dimensional reports, verify material mill certificates, and authorise production only after written sign-off.',
    deliverables: [
      '100% Critical dimension metrology report',
      'Direct mill test composition verification',
      'Written First Article Inspection (FAI) approval'
    ]
  },
  {
    num: '05',
    name: 'Produce',
    title: 'Governed transition to regular production',
    summary:
      'Once authorized, we maintain milestone oversight on the active production line to ensure tooling setups, cycle times, and operator discipline remain consistent.',
    deliverables: [
      'Milestone production tracking',
      'In-process visual and dimensional checkpoints',
      'Tool wear monitoring and maintenance protocols'
    ]
  },
  {
    num: '06',
    name: 'Control',
    title: 'Active oversight on every batch',
    summary:
      'Quality is managed at the machine, not at the UK port. Random pre-dispatch sampling according to AQL standards ensures dimensional deviations are caught and corrected before container sealing.',
    deliverables: [
      'Pre-dispatch random batch inspection',
      'Non-conformance root cause corrective actions',
      'Quarterly supplier performance scorecards'
    ]
  },
  {
    num: '07',
    name: 'Deliver',
    title: 'Coordinated export to your UK facility',
    summary:
      'We manage the full commercial and export logistics chain: VCI moisture-barrier export crating, customs clearance, duty management, and landed delivery directly to your facility door.',
    deliverables: [
      'Export-grade crating and rust protection',
      'Customs clearance and preferential duty handling',
      'Fully documented delivery to your UK dock'
    ]
  }
]

const supplierStandards = [
  'ISO 9001 certified or auditable quality management system',
  'Traceable material test certificates (MTC 3.1) from verified mills',
  'Documented calibration logs for digital metrology and gauges',
  'Transparent production scheduling and open communication on delays',
  'Willingness to accommodate unannounced on-site resident engineers'
]

export default function HowWeSourcePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 px-5 sm:px-8 lg:px-12 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
            Anyone can find a factory. <br />
            <span className="text-blue-600 font-normal italic-accent">
              The work is proving it can do your job.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            There are thousands of machine shops in India. A website or an unverified certificate tells you nothing about whether a facility can hold your tolerances. This is our end-to-end execution framework.
          </p>
        </div>
      </section>

      {/* 7 Sourcing Stages Breakdown */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-12">
          {sevenStages.map((stage) => (
            <div
              key={stage.num}
              className="bg-slate-50 border border-slate-200/90 rounded-2xl p-7 sm:p-10 transition-all hover:border-slate-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200/80 pb-4 mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-bold text-blue-600">
                    STAGE {stage.num}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {stage.name}: {stage.title}
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 font-medium">
                {stage.summary}
              </p>

              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Key Verification Deliverables:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {stage.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200/80 rounded-lg p-3 text-xs sm:text-sm text-slate-700 flex items-start gap-2"
                    >
                      <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Supplier Quality Standards & Onboarding */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 border-b border-slate-200 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              What we require from Indian suppliers.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              We work with serious, export-ready precision engineering firms. Our commercial arrangements reward high-discipline fabricators with recurring UK manufacturing contracts.
            </p>

            <div className="space-y-3 mb-8">
              {supplierStandards.map((std, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-800">
                  <Check size={16} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>{std}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs font-mono text-slate-500">
                Are you an Indian precision engineering supplier?
              </p>
              <a
                href="mailto:suppliers@proqra.co.uk?subject=Supplier%20Registration"
                className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Submit factory profile</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Row */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Test our process on a single drawing.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mb-8">
            Send us a manufacturing drawing with tolerances and batch quantities. We will assess factory match and return a landed quote with full inspection scope.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded transition-colors shadow-sm"
          >
            Talk to our engineering team
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
