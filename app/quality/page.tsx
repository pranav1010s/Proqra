import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ShieldCheck, Eye, FileText, CheckCircle2, Wrench, AlertTriangle, Video, PhoneCall } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Quality & Qualification Standards | PROQRA',
  description:
    'How PROQRA evaluates Indian precision suppliers: in-person visits, machine capability audits, safety standards, UK-based team reassurance, and complete client documentation.',
}

const auditCategories = [
  {
    title: 'Machinery & Spindle Capability',
    icon: Wrench,
    summary: 'Checking physical machine condition, spindle precision, and true repeatable tolerances.',
    points: [
      'Physical inspection of machine age, CNC controllers, and axis condition',
      'Spindle runout and toolholder maintenance review',
      'Preventative maintenance logs and service history',
      'Tool wear management and insert replacement protocols'
    ]
  },
  {
    title: 'Metrology & Gauge Calibration',
    icon: Eye,
    summary: 'Checking that measuring instruments are actively calibrated against traceable standards.',
    points: [
      'Calibration records for CMM, height gauges, micrometers, and calipers',
      'Inspection room temperature and cleanliness verification',
      'Gauge repeatability checks and master setting standards',
      'Digital metrology records and inspection logbook review'
    ]
  },
  {
    title: 'Quality Systems & Traceability',
    icon: ShieldCheck,
    summary: 'Ensuring shop-floor operating discipline matches UK drawing requirements.',
    points: [
      'ISO 9001 quality systems actively practiced on the floor',
      'Raw material test certificates (MTC 3.1) linked to heat numbers',
      'Clear segregation of non-conforming or rejected parts',
      'Standard operating procedures followed at each machine'
    ]
  },
  {
    title: 'Workplace Safety & Standards',
    icon: AlertTriangle,
    summary: 'A factory with poor safety culture cannot consistently deliver precision quality.',
    points: [
      'Machine guarding, emergency stops, and electrical safety',
      'Personal Protective Equipment (PPE) use across the shop floor',
      'Housekeeping, clear gangways, and safe material handling',
      'Compliance with workplace safety and fair working conditions'
    ]
  }
]

const documentationDossier = [
  {
    title: 'In-Factory Audit Report',
    desc: 'Detailed scorecard, machine register, shop-floor photos, and verified capability limits.'
  },
  {
    title: 'Gauge Calibration Records',
    desc: 'Copies of calibration certificates for all digital gauges, micrometers, and CMM equipment.'
  },
  {
    title: 'Material Mill Certificates (MTC 3.1)',
    desc: 'EN 10204 3.1 mill test certificates matching the exact heat numbers of the raw material.'
  },
  {
    title: 'First Article Inspection (FAIR)',
    desc: '100% measured values of critical dimensions against your approved 2D drawings.'
  },
  {
    title: 'Initial Material Run Setup Log',
    desc: 'Machine parameter records, tooling data, cycle times, and early batch dimensional stability.'
  },
  {
    title: 'Direct Factory Contact Pack',
    desc: 'Direct factory leadership contacts, escalation hierarchy, and agreed production protocols.'
  }
]

export default function QualityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Clean Editorial & UK Reassurance (No top-right image repetition) */}
      <section className="relative bg-white pt-28 sm:pt-36 pb-16 sm:pb-20 border-b border-slate-200 overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none select-none z-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 20% 30%, rgba(219, 234, 254, 0.6) 0%, rgba(239, 246, 255, 0.25) 45%, transparent 75%)',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-5">
              In-factory qualification, capability audits, <br />
              <span className="text-blue-600 font-normal italic-accent">
                and first-article validation.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Finding a supplier online is easy. The real challenge is making sure they have the machinery, discipline, and safety standards to deliver what was promised. We visit the factory floor in person, supervise the first few materials, and document everything from start to finish.
            </p>

            {/* Reassurance Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-xl p-4 flex items-start gap-3 shadow-sm">
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

              <div className="bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-xl p-4 flex items-start gap-3 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Video size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Live Shop-Floor Video Calls
                  </p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Join us live on a video call while we inspect the factory in India to see the running machines and setups firsthand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Gets Audited In-Factory - Asymmetric Layout with Blended Visual on the Left */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24 border-b border-slate-200 relative overflow-hidden bg-white">
        <div className="max-w-[1440px] mx-auto 3xl:max-w-[1800px]">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Our in-factory qualification criteria.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              We visit the factory in person to review running machinery, calibration logs, and safety practices firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Blended Metrology & Inspection Visual (No box, no captions) */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] lg:min-h-[500px]">
              <div 
                className="relative w-full h-[380px] lg:h-[500px] rounded-2xl overflow-hidden pointer-events-none select-none bg-slate-50"
                style={{
                  maskImage: 'radial-gradient(ellipse 90% 88% at 45% 50%, black 50%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 90% 88% at 45% 50%, black 50%, transparent 100%)'
                }}
              >
                <Image
                  src="/images/quality_metrology.jpg"
                  alt="Quality inspection and calibrated metrology"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right: The 4 Qualification Categories Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {auditCategories.map((cat) => {
                const Icon = cat.icon
                return (
                  <div
                    key={cat.title}
                    className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {cat.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 mb-4 font-medium">
                      {cat.summary}
                    </p>

                    <ul className="space-y-2 border-t border-slate-200/80 pt-3.5">
                      {cat.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Dossier Pack - Wide Responsive Grid */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24 border-b border-slate-200 bg-slate-50">
        <div className="max-w-[1440px] mx-auto 3xl:max-w-[1800px]">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Documented from start to finish. Shared with you.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              We compile and share a complete technical dossier so you have full transparency and a direct relationship with the qualified factory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentationDossier.map((d) => (
              <div
                key={d.title}
                className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <FileText size={16} />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                    {d.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Plain Stance */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Our position on supplier accountability, stated plainly.
          </h2>

          <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              We do not sell parts from a warehouse. We help UK manufacturing companies find suitable suppliers in India and qualify them on the ground before commercial orders are placed.
            </p>
            <p>
              If a supplier fails our in-factory capability checks or safety standards, we do not approve them. We share our findings transparently with you so you never commit resources to an incapable facility.
            </p>
            <p>
              By supervising the initial run of first production materials and signing off on first articles on the shop floor, we catch issues early when they are quick and simple to correct.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Row with UK Team */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Have a supplier or drawing you need qualified?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mb-8">
            Tell us about your drawing tolerances and first-run production needs. Our UK-based team is always here to speak with you directly.
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
