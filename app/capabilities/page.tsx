import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Capabilities | PROQRA',
  description:
    'Processes, materials, sizes, volumes, and lead times for fabricated metalwork and welded assemblies from India.',
}

const processes = [
  { name: 'Laser & plasma cutting', desc: 'Precision 2D cutting of plate, sheet, tube, and section.' },
  { name: 'CNC bending & forming', desc: 'Multi-axis CNC press braking for repeatable flange tolerances.' },
  { name: 'MIG & TIG welding', desc: 'Manual and semi-automated welding to drawing weld preps.' },
  { name: 'Welded & bolted assemblies', desc: 'Fabricated structures fitted with stiffeners and hardware.' },
  { name: 'Secondary machining', desc: 'Drilling, tapping, milling, and turning on fabricated parts.' },
  { name: 'Surface finishing', desc: 'Powder coating, hot-dip galvanising, wet spray, and passivation.' },
]

const specs = [
  { label: 'Batch sizes', value: '25 to 5,000 pieces', note: 'Below 25 is rarely economic with sea freight.' },
  { label: 'Part size', value: 'Up to ~3m in longest dimension', note: 'Suited to standard freight containers and machine beds.' },
  { label: 'Tolerances', value: 'ISO 2768-m default', note: 'Standard fabrication tolerances; tighter quoted case-by-case.' },
  { label: 'Lead time', value: '8 to 12 weeks door-to-door', note: 'Sea freight included. Air freight available at cost when urgent.' },
  { label: 'Documentation', value: 'Full QA pack on every order', note: 'Dimensional report, mill test certs, and certificate of origin.' },
]

const materials = [
  { name: 'Mild Steel', detail: 'S275, S355, CR4, HR4' },
  { name: 'Stainless Steel', detail: '304, 316, 316L (mill cert traceable)' },
  { name: 'Aluminium', detail: '5083, 6082-T6 sheet and extrusion' },
  { name: 'Galvanised Sheet', detail: 'Pre-galv and electro-galvanised' },
]

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 sm:pt-40 pb-16 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
            Capabilities
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
            What we <span className="text-blue-600 font-normal italic-accent">currently source.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            We have deliberately kept this narrow. We source fabricated metalwork and closely related parts, because that is where sourcing effort is concentrated, and where the vetting process can genuinely stand behind quality.
          </p>
        </div>
      </section>

      {/* Processes */}
      <section className="py-16 sm:py-20 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8">
            Processes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {processes.map((p) => (
              <div key={p.name} className="border-t border-slate-200 pt-4">
                <h3 className="text-sm font-bold text-slate-900 mb-1">{p.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-slate-500">
            * Standalone CNC machined components available on request where the part suits our vetted supplier base.
          </p>
        </div>
      </section>

      {/* Materials & Operational Parameters */}
      <section className="py-16 sm:py-20 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            Materials
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {materials.map((m) => (
              <div key={m.name} className="border-t border-slate-200 pt-3">
                <p className="text-sm font-bold text-slate-900">{m.name}</p>
                <p className="text-xs text-slate-500 font-mono mt-0.5">{m.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            Operational Parameters
          </h2>
          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {specs.map((s) => (
              <div key={s.label} className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 text-sm">
                <div className="sm:col-span-3 font-semibold text-slate-900">{s.label}</div>
                <div className="sm:col-span-4 font-mono text-slate-800">{s.value}</div>
                <div className="sm:col-span-5 text-xs text-slate-500">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When India is Not the Right Answer */}
      <section className="py-16 sm:py-20 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            When India is not the right answer
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Overseas sourcing does not suit every job. It is usually the wrong choice for:
          </p>
          <ul className="space-y-2 text-sm text-slate-700 mb-6 list-disc list-inside">
            <li>Anything required in under four weeks.</li>
            <li>Very low volumes where freight dominates total cost.</li>
            <li>Parts under active design change where drawings move mid-production.</li>
            <li>Work requiring specialised aerospace/nuclear approvals we do not support.</li>
          </ul>
          <p className="text-xs font-semibold text-slate-900">
            We would rather tell you this up front than take an order that goes badly for both of us.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
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
