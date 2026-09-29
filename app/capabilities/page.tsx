import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { PhoneCall, Video } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Manufacturing Capabilities | PROQRA',
  description:
    'Processes, materials, tolerances, and operational parameters we evaluate and qualify across precision suppliers in India. UK-based team for continuous reassurance.',
}

const processes = [
  { name: 'Laser & plasma cutting', desc: 'Precision 2D cutting of plate, sheet, and tube with tight kerf control.' },
  { name: 'CNC bending & forming', desc: 'Multi-axis CNC press braking for repeatable flange angles and bend tolerances.' },
  { name: 'MIG & TIG welding', desc: 'Certified manual and robotic welding to drawing weld preps and penetration standards.' },
  { name: 'Welded & bolted assemblies', desc: 'Fabricated sub-assemblies fitted with stiffeners, hardware, and surface prep.' },
  { name: 'Precision CNC machining', desc: 'Turning, milling, drilling, and tapping on 3-axis and 5-axis CNC machining centers.' },
  { name: 'Castings & forgings', desc: 'Investment and sand casting, closed-die forging, and secondary CNC machining.' },
  { name: 'Surface finishing', desc: 'Powder coating, hot-dip galvanizing, electroplating, wet spray, and passivation.' },
]

const specs = [
  { label: 'Batch sizes', value: '25 to 10,000+ pieces', note: 'Suited for tooling setup, in-person audit, and repeatable batch runs.' },
  { label: 'Part size', value: 'Up to ~3m longest dimension', note: 'Suited to standard CNC machine beds, press brakes, and export packing.' },
  { label: 'Tolerances', value: 'ISO 2768-m / CNC to ±0.01mm', note: 'Fabrication standard ISO 2768-m; precision machined features to drawing.' },
  { label: 'Qualification timeline', value: '3 to 6 weeks for FAI', note: 'Includes in-person factory visit, tooling check, and first-article validation.' },
  { label: 'Client documentation', value: 'Complete technical dossier', note: 'Audit scores, gauge calibration certs, MTC 3.1 mill certs, and FAIR.' },
]

const materials = [
  { name: 'Mild Steel', detail: 'S275, S355, CR4, HR4' },
  { name: 'Stainless Steel', detail: '304, 316, 316L (mill cert traceable)' },
  { name: 'Aluminium', detail: '5083, 6082-T6 sheet, plate, and extrusion' },
  { name: 'Cast Iron & Steel', detail: 'SG iron, grey iron, carbon steel forgings' },
  { name: 'Galvanised Sheet', detail: 'Pre-galvanised and electro-galvanised' },
  { name: 'Copper & Brass', detail: 'Precision machined turned components' },
]

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Clean Editorial & Quick Parameter Strip (No top-right image repetition) */}
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
              Manufacturing capabilities <br />
              <span className="text-blue-600 font-normal italic-accent">
                we evaluate and qualify.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              We focus our on-site evaluations where precision, material traceability, and process discipline matter most. We help UK manufacturers identify, visit, and qualify suppliers across fabricated metalwork, CNC machining, castings, and sub-assemblies.
            </p>

            {/* Reassurance Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-xl p-4 flex items-start gap-3 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <PhoneCall size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    UK-Based Team & Reassurance
                  </p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    You always have a team based in the UK to contact directly, ensuring continuous reassurance and easy communication.
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
                    Join us live on a video call while we inspect the machines and tooling setups in India.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Batch Range</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">25 to 10,000+ Pcs</p>
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Tolerances</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">Down to ±0.01mm</p>
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Setup Lead Time</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">3 to 6 Weeks FAI</p>
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Traceability</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">EN 10204 3.1 MTC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processes We Inspect - Responsive 3-Column Grid */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto 3xl:max-w-[1800px]">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Processes we inspect and qualify
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Verified through in-person factory visits and live shop-floor inspections.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processes.map((p) => (
              <div key={p.name} className="bg-slate-50 border border-slate-200/90 rounded-xl p-6 hover:border-slate-300 transition-colors">
                <h3 className="text-base font-bold text-slate-900 mb-2">{p.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Operational Parameters - Unique Blended Visual Placement on the Right Flank */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24 border-b border-slate-200 bg-slate-50 overflow-hidden">
        {/* Blended Machined Parts Visual (Seamlessly dissolving behind the specs, no box, no captions) */}
        <div 
          className="absolute top-0 right-0 w-full lg:w-[48%] h-full overflow-hidden pointer-events-none select-none z-0"
          style={{
            maskImage: 'radial-gradient(ellipse 90% 85% at 75% 50%, black 45%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 75% 50%, black 45%, transparent 95%)'
          }}
        >
          <Image
            src="/images/machined_parts.jpg"
            alt="Precision machined components"
            fill
            className="object-cover object-center opacity-30 lg:opacity-50"
          />
        </div>

        <div className="max-w-[1440px] mx-auto 3xl:max-w-[1800px] relative z-10">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Materials with verified mill certificates
            </h2>
            <p className="text-sm text-slate-600">
              Every batch is traced directly to official EN 10204 3.1 mill test certificates.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {materials.map((m) => (
              <div key={m.name} className="bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-xl p-4 shadow-sm">
                <p className="text-sm font-bold text-slate-900">{m.name}</p>
                <p className="text-xs text-slate-500 font-mono mt-1">{m.detail}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Qualification Parameters
            </h2>
            <p className="text-sm text-slate-600">
              Realistic parameters for on-site audits, first articles, and batch setups.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-slate-200/90 divide-y divide-slate-200 overflow-hidden shadow-sm max-w-4xl">
            {specs.map((s) => (
              <div key={s.label} className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-12 gap-2 text-sm">
                <div className="sm:col-span-3 font-semibold text-slate-900">{s.label}</div>
                <div className="sm:col-span-4 font-mono text-blue-600 font-medium">{s.value}</div>
                <div className="sm:col-span-5 text-xs text-slate-500">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest Stance: When overseas sourcing is not the right choice */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            When overseas sourcing is not the right choice
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            We are practical and direct. Overseas sourcing does not suit every requirement. It is usually the wrong choice for:
          </p>
          <ul className="space-y-2 text-sm text-slate-700 mb-6 list-disc list-inside">
            <li>Any requirement needed in under four weeks (qualification and shipping need scheduled lead times).</li>
            <li>One-off prototypes or very small quantities where tooling and audit costs dominate.</li>
            <li>Parts under active experimental design change where drawings shift mid-production.</li>
            <li>Projects requiring specialized defense certifications that require domestic-only suppliers.</li>
          </ul>
          <p className="text-xs font-semibold text-slate-900">
            We would rather be honest with you upfront than recommend an overseas supplier that does not fit your schedule.
          </p>
        </div>
      </section>

      {/* CTA Row */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Discuss your manufacturing requirements.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mb-8">
            Tell us about your batch quantities, materials, and processes. Our UK-based team is available to discuss your specifications directly.
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
