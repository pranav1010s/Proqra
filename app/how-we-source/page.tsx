import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Check, ArrowRight, Search, Eye, ShieldCheck, Wrench, FileCheck2, Cpu, ClipboardCheck, Video, PhoneCall } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How We Source | PROQRA',
  description:
    'Our 7-step qualification framework: finding suitable suppliers in India, in-person factory visits, live shop-floor video calls, UK-based reassurance, and full documentation.',
}

const sevenStages = [
  {
    num: '01',
    name: 'Find',
    title: 'Requirements-led supplier discovery',
    icon: Search,
    summary:
      'We match your 2D drawings, tolerances, material grades, and batch volumes directly with proven machine shops in India’s specialized industrial hubs.',
    deliverables: [
      'Drawing and tolerance analysis (2D & 3D CAD)',
      'Machine capacity pre-match against spindle & press envelope',
      'Targeted cluster shortlisting (Pune, Rajkot, Coimbatore, Chennai)'
    ]
  },
  {
    num: '02',
    name: 'Audit',
    title: 'In-person factory visits & shop-floor inspection',
    icon: Eye,
    summary:
      'We visit the factory floor in person. We inspect active machines, operator setups, and raw material storage firsthand.',
    highlight: 'Live video call available: You can join us on a video call to view the machines and shop floor in real time.',
    deliverables: [
      'Physical on-site inspection of running machines and setups',
      'Preventative maintenance and machine age review',
      'Raw material storage and scrap segregation audit'
    ]
  },
  {
    num: '03',
    name: 'Qualify',
    title: 'Capability, quality, and safety checks',
    icon: ShieldCheck,
    summary:
      'Our focus is verifying that the supplier can actually deliver what is promised before you commit to production.',
    deliverables: [
      'Achievable tolerance and machine capability checks',
      'Traceable digital gauge and CMM calibration verification',
      'Workplace safety, machine guarding, and housekeeping review'
    ]
  },
  {
    num: '04',
    name: 'Develop',
    title: 'Closing procedural and setup gaps',
    icon: Wrench,
    summary:
      'Where a factory needs alignment with UK expectations, we work with their management to put standard operating procedures in place.',
    deliverables: [
      'Standard Operating Procedure (SOP) formalization',
      'In-process inspection log and sign-off templates',
      'Material heat-number and mill certificate traceability setup'
    ]
  },
  {
    num: '05',
    name: 'Validate',
    title: 'First-article inspection & sign-off',
    icon: FileCheck2,
    summary:
      'The supplier produces initial samples. We verify critical dimensions against your drawings and check mill test certificates before authorizing production.',
    deliverables: [
      '100% Critical dimension check on first-article samples',
      'Direct mill test certificate (MTC 3.1) verification',
      'Written First Article Inspection (FAI) approval sign-off'
    ]
  },
  {
    num: '06',
    name: 'Launch',
    title: 'Getting started on initial production materials',
    icon: Cpu,
    summary:
      'We supervise the start of production for your first few materials on the shop floor to ensure setups and cycle times remain consistent.',
    deliverables: [
      'On-site production line setup check and tooling sign-off',
      'Initial material run dimensional consistency check',
      'Process stability and cycle time confirmation'
    ]
  },
  {
    num: '07',
    name: 'Document',
    title: 'Full documentation shared from start to finish',
    icon: ClipboardCheck,
    summary:
      'We document everything from start to finish and hand over the complete dossier. You get full transparency and direct contact with the verified supplier.',
    deliverables: [
      'Full factory audit and safety compliance report',
      'First-article metrology and mill test certificates',
      'Direct supplier contact details and technical handover pack'
    ]
  }
]

const supplierStandards = [
  'ISO 9001 certified or auditable quality management system',
  'Traceable material test certificates (MTC 3.1) from verified mills',
  'Documented calibration logs for digital metrology, CMM, and gauges',
  'Transparent production scheduling and open communication',
  'Full shop-floor access for in-person visits and live video calls',
  'Adherence to workplace safety, machine guarding, and worker welfare standards'
]

export default function HowWeSourcePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Blended Video with Text & Ambient Dissolve */}
      <section className="relative bg-white pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-slate-200 overflow-hidden">
        {/* Blended Shop-Floor Video on the Right (No box, no captions, soft dissolve) */}
        <div 
          className="absolute top-0 right-0 w-full lg:w-[60%] xl:w-[54%] h-full overflow-hidden pointer-events-none select-none z-0"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 12%, rgba(0,0,0,0.6) 30%, black 48%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 12%, rgba(0,0,0,0.6) 30%, black 48%, black 100%)'
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source src="/videos/imtex_03.webm" type="video/webm" />
            <source src="/videos/imtex_06.webm" type="video/webm" />
          </video>
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/60 to-transparent" />
        </div>

        {/* Light color shade in the back behind the text on the left, spreading to the right */}
        <div 
          className="absolute top-0 left-0 w-full lg:w-[72%] h-full pointer-events-none select-none z-0"
          style={{
            background: 'radial-gradient(ellipse 95% 80% at 15% 35%, rgba(219, 234, 254, 0.75) 0%, rgba(224, 238, 255, 0.45) 35%, rgba(239, 246, 255, 0.15) 60%, transparent 85%)',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-5">
              Anyone can find a factory. <br />
              <span className="text-blue-600 font-normal italic-accent">
                The work is proving they can deliver what is promised.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              We help UK manufacturing and engineering companies find suitable suppliers in India, qualify them through in-person factory visits, supervise the production of the first few materials, and document everything from start to finish.
            </p>

            {/* Two Reassurance Badges: UK Team + Live Video Calls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/90 backdrop-blur-sm border border-slate-200/90 rounded-xl p-4 flex items-start gap-3 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <PhoneCall size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    UK-Based Team & Reassurance
                  </p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    You always have a team based in the UK to contact directly at any time for continuous communication and peace of mind.
                  </p>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm border border-slate-200/90 rounded-xl p-4 flex items-start gap-3 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Video size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Live Shop-Floor Video Calls
                  </p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Join us live on a video call while we walk the factory floor in India to see the running machines and setups firsthand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Sourcing Stages Breakdown - Responsive 2-Column Wide Grid */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto 3xl:max-w-[1800px]">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Our 7-step qualification framework.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              From drawing analysis to on-site visits, initial material runs, and complete handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {sevenStages.map((stage) => {
              const StageIcon = stage.icon
              return (
                <div
                  key={stage.num}
                  className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0">
                          <StageIcon size={18} />
                        </div>
                        <div>
                          <span className="font-mono text-xs font-bold text-blue-600 block">
                            STAGE {stage.num}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                            {stage.name}: {stage.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed mb-4">
                      {stage.summary}
                    </p>

                    {stage.highlight && (
                      <div className="mb-4 p-3 bg-blue-50 border border-blue-100 rounded-lg flex items-center gap-2.5 text-xs font-medium text-blue-900">
                        <Video size={14} className="text-blue-600 shrink-0" />
                        <span>{stage.highlight}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-200/80">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                      Key Deliverables:
                    </p>
                    <ul className="space-y-2">
                      {stage.deliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
                        >
                          <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Supplier Standards & Reassurance Section */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24 border-b border-slate-200 bg-slate-50">
        <div className="max-w-[1440px] mx-auto 3xl:max-w-[1800px]">
          <div className="max-w-4xl mx-auto bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              What we require from Indian suppliers.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-8">
              Before any factory is introduced to a UK client, they must meet our baseline standards.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {supplierStandards.map((std, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                  <Check size={16} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>{std}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs font-mono text-slate-500">
                Are you an Indian precision manufacturing supplier?
              </p>
              <a
                href="mailto:suppliers@proqra.co.uk?subject=Supplier%20Registration"
                className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Submit factory profile</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Row with UK Team Reassurance */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Looking for a suitable supplier in India?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mb-8">
            Speak directly with our UK-based team. We will review your drawings, visit the factory in person in India, and coordinate everything with full transparency.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded transition-colors shadow-sm"
          >
            Talk to our UK team
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
