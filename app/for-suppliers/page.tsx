import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SupplierForm from './SupplierForm'

export const metadata: Metadata = {
  title: 'For Suppliers & Manufacturers | PROQRA',
  description:
    'Partner with PROQRA to access recurring fabricated metalwork and machining contracts from UK engineering buyers. Zero overseas marketing overhead, clear specifications, and reliable commercial terms.',
}

const benefits = [
  {
    title: 'Direct UK Export Demand',
    desc: 'Access verified UK original equipment manufacturers and engineering SMEs without setting up a UK sales office, attending overseas trade shows, or paying international marketing retainers.',
  },
  {
    title: 'Engineering-First RFQs',
    desc: 'Every quote request comes with complete 2D drawings, 3D STEP files, specified tolerances, and defined inspection standards. We filter out vague inquiries so your estimators focus on real work.',
  },
  {
    title: 'Dependable Commercial Terms',
    desc: 'Clear, agreed milestone payment structures. No unexpected penalties or arbitrary deductions. We value long-term partnerships with fabricators who consistently meet quality benchmarks.',
  },
  {
    title: 'Local On-The-Ground Support',
    desc: 'Our engineers collaborate directly with your shop floor team on technical queries, pre-dispatch inspection protocols, and export packaging specifications.',
  },
]

const capabilitiesSought = [
  {
    title: 'Sheet Metal Fabrication',
    detail: 'Fiber laser cutting (up to 20mm+ steel), CNC press brake bending (multi-axis), turret punching, and precision deburring.',
  },
  {
    title: 'Welding & Structural Assembly',
    detail: 'Certified TIG/MIG welding for carbon steel, stainless steel (304/316), and aluminium. Coded welders and WPS/PQR documentation preferred.',
  },
  {
    title: 'CNC Machining & Turning',
    detail: 'Precision 3-axis to 5-axis vertical machining centres, CNC lathes with live tooling, holding tight tolerances down to ±0.01mm where specified.',
  },
  {
    title: 'Tube Fabrication & Presswork',
    detail: 'CNC rotary draw tube bending, laser tube cutting, progressive stamping, and deep-drawn metal pressings.',
  },
  {
    title: 'Surface Finishing & Treatment',
    detail: 'In-house or qualified subcontracted powder coating, electroplating (zinc passivate), wet spraying, anodising, and hot-dip galvanising.',
  },
  {
    title: 'Quality & Metrology Standards',
    detail: 'ISO 9001 certified facilities with calibrated inspection instruments, digital height gauges, CMM, and full material test certificate (MTC 3.1) traceability.',
  },
]

const onboardingSteps = [
  {
    step: '01',
    title: 'Application & Machine List',
    desc: 'Submit the supplier form below with your equipment inventory, shop floor footprint, and quality certifications.',
  },
  {
    step: '02',
    title: 'Desk Capability Assessment',
    desc: 'Our technical evaluation team reviews your machinery specs, materials routinely processed, and documentation within three working days.',
  },
  {
    step: '03',
    title: 'Shop Floor Audit',
    desc: 'A PROQRA engineer visits your factory to inspect machine conditions, ongoing work-in-progress, tool calibration, and inspection discipline.',
  },
  {
    step: '04',
    title: 'Pilot Part & Active RFQs',
    desc: 'Approved fabricators quote on active drawings. Following a successful pilot production batch, you unlock recurring series supply contracts.',
  },
]

const faqs = [
  {
    q: 'Are there any registration or subscription fees to join?',
    a: 'None. PROQRA never charges suppliers any joining fees, listing fees, or bidding subscriptions. We operate on a transparent commercial margin on completed customer orders.',
  },
  {
    q: 'How are payment terms managed?',
    a: 'We establish written commercial terms before any metal is cut. Payment is tied to verified milestones and pre-dispatch inspection sign-off, ensuring you are paid reliably and on time.',
  },
  {
    q: 'Who manages international shipping and UK customs?',
    a: 'PROQRA coordinates ocean and air freight logistics, UK import customs clearance, and delivery to the buyer facility. Orders are typically placed on mutually agreed terms (such as FOB or Ex-Works).',
  },
  {
    q: 'What if we do not currently hold ISO 9001 certification?',
    a: 'While ISO 9001:2015 is preferred, we also evaluate well-equipped workshops that operate disciplined internal inspection procedures and are actively working towards certification.',
  },
  {
    q: 'What kind of volume can our workshop expect?',
    a: 'Our UK clients purchase repeat series production runs (typically 50 to 5,000+ pieces per batch) for machinery chassis, enclosures, brackets, and structural fabrications.',
  },
]

export default function ForSuppliersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 px-5 sm:px-8 lg:px-12 border-b border-slate-200 3xl:pt-52 3xl:pb-22 3xl:px-28 4xl:pt-60 4xl:pb-28 4xl:px-36">
        <div className="max-w-6xl mx-auto 3xl:max-w-[1900px] 4xl:max-w-[2200px]">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3 3xl:text-sm 4xl:text-base">
            For Suppliers
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-6 3xl:text-6xl 3xl:mb-8 4xl:text-7xl 4xl:mb-10">
            Direct UK engineering contracts. <br />
            <span className="text-blue-600 font-normal italic-accent">
              Without the overseas sales overhead.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed 3xl:text-xl 3xl:max-w-3xl 4xl:text-2xl 4xl:max-w-4xl">
            We connect certified Indian metal fabricators and CNC machine shops with verified UK industrial buyers. Get clear engineering drawings, on-time payments, and on-the-ground support.
          </p>

          <div className="mt-8 flex items-center gap-4 3xl:mt-10">
            <a
              href="#apply"
              className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-6 py-3 rounded transition-colors 3xl:text-base 3xl:px-8 3xl:py-4 4xl:text-lg 4xl:px-10 4xl:py-5"
            >
              Apply to Join Network
            </a>
            <a
              href="#standards"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 underline 3xl:text-base 4xl:text-lg"
            >
              Partner standards →
            </a>
          </div>
        </div>
      </section>

      {/* Metrics / Terms Overview */}
      <section className="py-12 px-5 sm:px-8 lg:px-12 border-b border-slate-200 3xl:py-16 3xl:px-28 4xl:py-20 4xl:px-36">
        <div className="max-w-6xl mx-auto 3xl:max-w-[1900px] 4xl:max-w-[2200px]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 3xl:gap-10 4xl:gap-14">
            <div className="border-t border-slate-200 pt-3 3xl:pt-5 4xl:pt-6">
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono">£0</p>
              <p className="text-xs text-slate-500 mt-1 3xl:text-sm">Listing or joining fees</p>
            </div>
            <div className="border-t border-slate-200 pt-3 3xl:pt-5 4xl:pt-6">
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono">100%</p>
              <p className="text-xs text-slate-500 mt-1 3xl:text-sm">Verified UK engineering buyers</p>
            </div>
            <div className="border-t border-slate-200 pt-3 3xl:pt-5 4xl:pt-6">
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono">CAD / 3D</p>
              <p className="text-xs text-slate-500 mt-1 3xl:text-sm">Complete drawings with every RFQ</p>
            </div>
            <div className="border-t border-slate-200 pt-3 3xl:pt-5 4xl:pt-6">
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono">Prompt</p>
              <p className="text-xs text-slate-500 mt-1 3xl:text-sm">Agreed milestone payment settlement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With PROQRA */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 border-b border-slate-200 3xl:py-32 3xl:px-28 4xl:py-40 4xl:px-36">
        <div className="max-w-6xl mx-auto 3xl:max-w-[1900px] 4xl:max-w-[2200px]">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8 3xl:text-3xl 3xl:mb-12 4xl:text-4xl 4xl:mb-14">
            Why partner with PROQRA
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 3xl:gap-14 4xl:gap-18">
            {benefits.map((b) => (
              <div key={b.title} className="border-t border-slate-200 pt-4 3xl:pt-6 4xl:pt-8">
                <h3 className="text-sm font-bold text-slate-900 mb-1 3xl:text-base 3xl:mb-2 4xl:text-lg 4xl:mb-3">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed 3xl:text-sm 4xl:text-base">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Sought Section */}
      <section id="standards" className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 border-b border-slate-200 3xl:py-32 3xl:px-28 4xl:py-40 4xl:px-36">
        <div className="max-w-6xl mx-auto 3xl:max-w-[1900px] 4xl:max-w-[2200px]">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 3xl:text-3xl 3xl:mb-3 4xl:text-4xl 4xl:mb-4">
            Capabilities we onboard
          </h2>
          <p className="text-sm text-slate-600 mb-8 3xl:text-base 3xl:mb-12 4xl:text-lg 4xl:mb-14">
            We seek well-run, quality-focused manufacturing facilities equipped for export-grade precision metalwork and assemblies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 3xl:gap-12 4xl:gap-16">
            {capabilitiesSought.map((c) => (
              <div key={c.title} className="border-t border-slate-200 pt-4 3xl:pt-6 4xl:pt-8">
                <h3 className="text-sm font-bold text-slate-900 mb-1 3xl:text-base 3xl:mb-2 4xl:text-lg 4xl:mb-3">
                  {c.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed 3xl:text-sm 4xl:text-base">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Journey */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 border-b border-slate-200 3xl:py-32 3xl:px-28 4xl:py-40 4xl:px-36">
        <div className="max-w-6xl mx-auto 3xl:max-w-[1900px] 4xl:max-w-[2200px]">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 3xl:text-3xl 3xl:mb-3 4xl:text-4xl 4xl:mb-4">
            The onboarding process
          </h2>
          <p className="text-sm text-slate-600 mb-8 3xl:text-base 3xl:mb-12 4xl:text-lg 4xl:mb-14">
            How to become an approved manufacturing partner with PROQRA.
          </p>
          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {onboardingSteps.map((step) => (
              <div
                key={step.step}
                className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline 3xl:py-10"
              >
                <div className="md:col-span-2">
                  <span className="text-xs font-mono text-slate-400 3xl:text-sm">Step {step.step}</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-base font-bold text-slate-900 3xl:text-lg">{step.title}</h3>
                </div>
                <div className="md:col-span-6">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed 3xl:text-base">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 border-b border-slate-200 3xl:py-32 3xl:px-28 4xl:py-40 4xl:px-36">
        <div className="max-w-2xl mx-auto mb-8 text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
            Supplier Application
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
            Submit your factory profile.
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Provide your workshop capacity, core equipment list, and certifications. Our technical team reviews each application within three working days.
          </p>
        </div>

        <SupplierForm />
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8">
            Frequently asked questions
          </h2>
          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {faqs.map((faq, i) => (
              <div key={i} className="py-6">
                <h3 className="text-sm font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact Callout */}
      <section className="py-16 px-5 sm:px-8 lg:px-12 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
            Questions before applying?
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Speak directly with our technical sourcing team before submitting an application.
          </p>
          <a
            href="mailto:hello@proqra.co.uk"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-6 py-3 rounded transition-colors"
          >
            Contact Supplier Operations
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
