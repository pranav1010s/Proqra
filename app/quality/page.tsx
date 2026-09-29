import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ShieldCheck, Eye, Wrench, AlertTriangle, CheckCircle2, FileCheck2, ArrowRight, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Quality & Supplier Approval | PROQRA',
  description:
    'How PROQRA audits, inspects, and approves precision manufacturing suppliers in India so UK engineering companies can procure with complete confidence.',
}

const evaluatedProcesses = [
  {
    name: 'Precision CNC Machining',
    desc: '3-axis, 4-axis, and 5-axis milling, precision turning, and mill-turn centers for complex geometries.',
    tolerance: 'Tolerances to ±0.01mm',
  },
  {
    name: 'Laser Cutting & Press Braking',
    desc: 'Fiber laser cutting of plate and sheet, multi-axis CNC press braking with tight bend angle repeatability.',
    tolerance: 'ISO 2768-m standards',
  },
  {
    name: 'Certified Welding & Fabrication',
    desc: 'MIG and TIG welding to WPS/PQR specifications, welded sub-assemblies, and structural frames.',
    tolerance: 'Weld penetration & NDT inspection',
  },
  {
    name: 'Castings & Secondary Machining',
    desc: 'Investment castings, sand castings, and forgings with in-house CNC secondary machining.',
    tolerance: 'Foundry metallurgy verification',
  },
  {
    name: 'Surface Treatment & Finishing',
    desc: 'Powder coating, hot-dip galvanizing, electroplating, anodising, and chemical passivation.',
    tolerance: 'Coating thickness & adhesion tests',
  },
  {
    name: 'Traceable Engineering Materials',
    desc: 'Stainless steel (304, 316, 316L), carbon steels (S275, S355), aluminium alloys (6082-T6, 5083), and brass.',
    tolerance: 'EN 10204 3.1 Mill Test Certs',
  },
]

const auditPillars = [
  {
    title: 'CapEx & Machine Infrastructure',
    icon: Wrench,
    summary: 'We inspect capital equipment investment, machine age, spindle runout, and true repeatable tolerances.',
    checks: [
      'CNC axis condition, backlash, and controller capabilities',
      'Spindle runout, toolholder condition, and machine age verification',
      'Preventative maintenance schedules and OEM service records',
      'Tool wear management and insert replacement protocols',
    ],
  },
  {
    title: 'Supplier Production Lead Time & Capacity',
    icon: Clock,
    summary: 'We audit active machine loading, shift capacity, and material lead times to ensure dependable delivery.',
    checks: [
      'Active machine shop loading schedules and available spindle hours',
      'Raw material procurement cycles and certified mill lead times',
      'Cycle time validation against UK batch volume requirements',
      'Buffer planning and committed dispatch milestone tracking',
    ],
  },
  {
    title: 'Quality Systems & Traceability',
    icon: ShieldCheck,
    summary: 'Ensuring shop-floor operating discipline matches UK drawing requirements.',
    checks: [
      'ISO 9001 systems actively practiced on the machine floor',
      'Digital metrology, CMM, and gauge calibration records',
      'Raw material test certificates (MTC 3.1) tied to heat numbers',
      'Strict quarantine segregation of non-conforming parts',
    ],
  },
  {
    title: 'Workplace Safety & Discipline',
    icon: AlertTriangle,
    summary: 'A factory with poor safety culture cannot consistently deliver precision quality.',
    checks: [
      'Machine interlocking, emergency stops, and electrical safety',
      'Mandatory PPE compliance across all operational bays',
      'Clear gangways, 5S floor discipline, and safe handling of workpieces',
      'Fair, compliant, and dignified working conditions',
    ],
  },
]

const approvalDeliverables = [
  {
    title: 'On-Site Factory Audit Scorecard',
    desc: 'Machine registry, physical condition scores, operator skill evaluation, and verified capability limits.',
  },
  {
    title: 'First Article Inspection Report (FAIR)',
    desc: '100% measured values of all critical and nominal dimensions against your approved engineering drawings.',
  },
  {
    title: 'Material Mill Test Certificates (MTC 3.1)',
    desc: 'EN 10204 3.1 certificates directly matched to the batch heat numbers of the raw metal.',
  },
  {
    title: 'Initial Production Setup Log',
    desc: 'Recorded feeds, speeds, tool paths, cycle times, and dimensional stability across the first batch.',
  },
  {
    title: 'Direct Supplier Handover Pack',
    desc: 'Direct factory leadership contacts, escalation hierarchy, and agreed production protocols for ongoing supply.',
  },
]

export default function QualityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Focused on Quality & Supplier Approval with Blended Visual */}
      <section className="relative bg-white pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-slate-200 overflow-hidden">
        {/* Blended Metrology Inspection Visual on the Right (No box, no captions, soft dissolve) */}
        <div 
          className="absolute top-0 right-0 w-full lg:w-[60%] xl:w-[54%] h-full overflow-hidden pointer-events-none select-none z-0"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 12%, rgba(0,0,0,0.6) 30%, black 48%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 12%, rgba(0,0,0,0.6) 30%, black 48%, black 100%)'
          }}
        >
          <Image
            src="/images/quality_metrology.jpg"
            alt="Quality metrology and precision inspection on factory floor"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center"
            priority
          />
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
          <div className="max-w-2xl xl:max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-5">
              Approved suppliers. <br />
              <span className="text-blue-600 font-normal italic-accent">
                Verified on the factory floor before you procure.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              The purpose of PROQRA is straightforward: we audit Indian precision engineering facilities in person, verify CapEx, machine condition, lead times, and materials, and oversee initial production so UK manufacturers can approve and procure from them with complete confidence.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium text-slate-700">
              <span className="flex items-center gap-1.5 bg-slate-100/90 backdrop-blur-sm px-3 py-1.5 rounded">
                <CheckCircle2 size={15} className="text-blue-600" />
                In-person factory audits
              </span>
              <span className="flex items-center gap-1.5 bg-slate-100/90 backdrop-blur-sm px-3 py-1.5 rounded">
                <CheckCircle2 size={15} className="text-blue-600" />
                CapEx & spindle verification
              </span>
              <span className="flex items-center gap-1.5 bg-slate-100/90 backdrop-blur-sm px-3 py-1.5 rounded">
                <CheckCircle2 size={15} className="text-blue-600" />
                Production lead time audits
              </span>
              <span className="flex items-center gap-1.5 bg-slate-100/90 backdrop-blur-sm px-3 py-1.5 rounded">
                <CheckCircle2 size={15} className="text-blue-600" />
                First-article sign-off (FAIR)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: The 4-Pillar Quality Audit Framework */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Our 4-pillar on-site audit framework.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Certificates on a wall do not guarantee precision. We audit what is happening at the spindle, on the surface table, and on the shop floor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {auditPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0">
                        <PillarIcon size={20} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed mb-5">
                      {pillar.summary}
                    </p>

                    <div className="pt-4 border-t border-slate-200/80">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                        On-Site Inspection Checks:
                      </p>
                      <ul className="space-y-2">
                        {pillar.checks.map((item, cIdx) => (
                          <li
                            key={cIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                          >
                            <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Manufacturing Processes & Capabilities We Qualify */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto">
          {/* Production Capabilities Hero Card with Blended Machined Parts Visual */}
          <div className="relative rounded-2xl bg-white border border-slate-200/90 overflow-hidden mb-12 shadow-sm">
            {/* Blended machined parts visual on the right */}
            <div 
              className="hidden lg:block absolute top-0 right-0 w-[48%] xl:w-[44%] h-full overflow-hidden pointer-events-none select-none z-0"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.12) 15%, rgba(0,0,0,0.6) 40%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.12) 15%, rgba(0,0,0,0.6) 40%, black 100%)'
              }}
            >
              <Image
                src="/images/machined_parts.jpg"
                alt="Precision CNC machined and turned metal parts"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/60 to-transparent" />
            </div>

            <div className="relative z-10 p-6 sm:p-10 max-w-2xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2 block">
                Manufacturing Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
                Processes & capabilities we qualify.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                We focus our supplier approvals on precision mid-volume manufacturing where capital investment, machine tool stability, and raw material certification matter most.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                  <span>Precision CNC Milling & Turning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                  <span>Fiber Laser & Multi-Axis Press Braking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                  <span>Certified Welding (WPS/PQR)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                  <span>EN 10204 3.1 Traceable Alloys</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evaluatedProcesses.map((proc, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {proc.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {proc.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-blue-700">
                  <span className="font-semibold">{proc.tolerance}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Core Operational Envelope */}
          <div className="mt-12 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
              Baseline Procurement Parameters
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-700 text-xs sm:text-sm">
              <div>
                <p className="text-slate-400 font-mono text-[11px] uppercase">Batch Quantities</p>
                <p className="font-bold text-slate-900 mt-1">25 to 10,000+ pieces</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Suited for repeatable runs</p>
              </div>
              <div>
                <p className="text-slate-400 font-mono text-[11px] uppercase">Tolerances</p>
                <p className="font-bold text-slate-900 mt-1">Down to ±0.01mm</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Fabrication ISO 2768-m</p>
              </div>
              <div>
                <p className="text-slate-400 font-mono text-[11px] uppercase">Approval Timeline</p>
                <p className="font-bold text-slate-900 mt-1">3 to 6 weeks for FAI</p>
                <p className="text-[11px] text-slate-500 mt-0.5">On-site audit to sample sign-off</p>
              </div>
              <div>
                <p className="text-slate-400 font-mono text-[11px] uppercase">Supplier Relationship</p>
                <p className="font-bold text-slate-900 mt-1">Direct Procurement</p>
                <p className="text-[11px] text-slate-500 mt-0.5">No ongoing broker margin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Getting the Supplier Approved - The Documentation Dossier */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
              The approval dossier handed to your team.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              When a supplier is approved, you receive the full technical proof before approving commercial production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approvalDeliverables.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-600/10 text-emerald-700 flex items-center justify-center font-mono text-xs font-bold mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* On-Site Verification Callout Banner with Blended Shop Floor Image */}
          <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-sm">
            {/* Blended factory inspection visual on the right */}
            <div 
              className="absolute top-0 right-0 w-full lg:w-[48%] xl:w-[42%] h-full overflow-hidden pointer-events-none select-none z-0 opacity-40 lg:opacity-60"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 15%, rgba(0,0,0,0.7) 45%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 15%, rgba(0,0,0,0.7) 45%, black 100%)'
              }}
            >
              <Image
                src="/images/factory_inspection.jpg"
                alt="Engineer inspecting components on the shop floor"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent lg:hidden" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-2 block">
                On-Site Verification
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                Zero blind procurement. You approve the supplier based on physical data.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Every measurement in the dossier is collected directly from the machine shop floor. We ensure spindle runout, material heat numbers, production lead times, and dimensional tolerances are verified in person before you authorize volume production.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-mono text-slate-300">
                <span className="bg-slate-800/90 px-3 py-1.5 rounded border border-slate-700">100% FAIR Dimensions Recorded</span>
                <span className="bg-slate-800/90 px-3 py-1.5 rounded border border-slate-700">Direct Mill Heat Numbers Checked</span>
                <span className="bg-slate-800/90 px-3 py-1.5 rounded border border-slate-700">Lead Times & Capacity Audited</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Simple CTA */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Have a drawing or part to qualify?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
            Send us your drawing and batch requirements. We will assess manufacturing feasibility in India and outline the on-site qualification scope.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded transition-colors shadow-sm"
          >
            Submit drawing for qualification review
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
