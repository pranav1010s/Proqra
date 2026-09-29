'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    name: 'Find',
    headline: 'Requirements-led supplier discovery',
    description:
      'We identify Indian manufacturers that match your product, process and volume requirements.',
    detail: 'We do not rely on static catalogs. We source specifically around your manufacturing drawings, materials, and batch quantities.',
  },
  {
    num: '02',
    name: 'Qualify',
    headline: 'In-person shop floor evaluation',
    description:
      "We assess the supplier's factory, equipment, capability, quality systems and commercial position.",
    detail: 'Physical inspection of machinery, production flow, material storage, calibration equipment, and business stability before any commitment.',
  },
  {
    num: '03',
    name: 'Develop',
    headline: 'Closing capability and process gaps',
    description:
      'Where a supplier needs to meet a specific requirement, we work with them to close the gaps.',
    detail: 'This could mean improving documentation, inspection processes, production controls or technical capability to align with UK standards.',
  },
  {
    num: '04',
    name: 'Validate',
    headline: 'First-article & specification check',
    description:
      'Samples and first production are checked against the agreed specification.',
    detail: 'Comprehensive dimensional reports, material certificates, and visual inspection before production authorization.',
  },
  {
    num: '05',
    name: 'Produce',
    headline: 'Governed transition to regular runs',
    description:
      'Once the supplier is approved, we support the transition into regular production.',
    detail: 'Active milestone oversight on the production line, ensuring tooling setups, cycle times, and parameters remain stable.',
  },
  {
    num: '06',
    name: 'Control',
    headline: 'Active oversight on every batch',
    description:
      'We monitor quality, delivery and supplier performance as the relationship develops.',
    detail: 'Ongoing tracking of defect rates, non-conformance reports (NCRs), lead-time discipline, and preventive corrective actions.',
  },
  {
    num: '07',
    name: 'Deliver',
    headline: 'Coordinated export to UK facility',
    description:
      'We coordinate the necessary documentation and shipment process to get the goods to the UK.',
    detail: 'End-to-end management of bills of lading, packing lists, inspection dossiers, customs clearance, and landed UK delivery.',
  },
]

export default function SevenStepsSection() {
  return (
    <section id="process" className="bg-slate-50 py-20 sm:py-28 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 font-semibold mb-3">
            The Sourcing Model
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            From supplier search to established supply.
          </h2>
          <p className="mt-4 text-lg text-slate-700 font-medium">
            Finding a factory is only the first step.
          </p>
          <p className="mt-2 text-base text-slate-600 leading-relaxed">
            We identify suitable suppliers, assess their capability, develop them against your requirements and stay involved as production gets established.
          </p>
        </div>

        {/* 7-Step Architectural Grid with Scroll Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-px bg-slate-200 border border-slate-200 overflow-hidden shadow-sm">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white p-6 sm:p-7 flex flex-col justify-between hover:bg-slate-50/80 transition-colors duration-200"
            >
              <div>
                {/* Step Number & Title */}
                <div className="flex items-baseline justify-between border-b border-slate-100 pb-3 mb-4">
                  <span className="font-mono text-xs text-slate-400 font-semibold tracking-wider">
                    {step.num}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-blue-600 font-bold">
                    STEP
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                  {step.name}
                </h3>

                <p className="text-sm font-semibold text-slate-800 leading-snug mb-3">
                  {step.headline}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <p className="text-[11px] text-slate-500 leading-normal">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Sequence Flow Bar */}
        <div className="mt-10 bg-white border border-slate-200 p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
            Execution Progression:
          </span>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-medium text-slate-700">
            <span>Find</span>
            <span className="text-slate-300">→</span>
            <span>Qualify</span>
            <span className="text-slate-300">→</span>
            <span className="text-blue-600 font-bold">Develop</span>
            <span className="text-slate-300">→</span>
            <span>Validate</span>
            <span className="text-slate-300">→</span>
            <span>Produce</span>
            <span className="text-slate-300">→</span>
            <span>Control</span>
            <span className="text-slate-300">→</span>
            <span>Deliver</span>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            Zero Hand-off Until Established
          </span>
        </div>
      </div>
    </section>
  )
}
