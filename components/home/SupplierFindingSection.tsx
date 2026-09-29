'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const processFlow = [
  { step: '01', title: 'Your requirement', desc: 'Engineering drawings, specs, volumes & tolerances' },
  { step: '02', title: 'Indian supplier search', desc: 'Targeted search across specialized industrial clusters' },
  { step: '03', title: 'Initial screening', desc: 'Capability matching, machinery verification & capacity check' },
  { step: '04', title: 'Shortlist', desc: 'Direct engagement with top matched manufacturers' },
  { step: '05', title: 'Qualification', desc: 'On-site factory audit and quality system review' },
]

const evaluationCriteria = [
  { label: 'Manufacturing process', detail: 'Specific fabrication, CNC, stamping, or welding methodologies matching your drawing' },
  { label: 'Materials', detail: 'Sourcing traceability for steel, stainless, aluminium, alloys, and mill test certificates' },
  { label: 'Machinery', detail: 'Make, age, precision tolerances, and maintenance records of shop-floor equipment' },
  { label: 'Production capacity', detail: 'Available machine hours and shift scalability without compromising your order' },
  { label: 'Previous experience', detail: 'Proven track record producing equivalent components for export markets' },
  { label: 'Quality systems', detail: 'Formal ISO compliance, calibration schedules, and internal defect quarantine' },
  { label: 'Certifications', detail: 'ISO 9001, AS9100, IATF 16949, EN 1090 or industry-specific credentials' },
  { label: 'Export capability', detail: 'Customs registration, seaworthy export packing, and international freight experience' },
  { label: 'Commercial suitability', detail: 'Financial stability, sustainable landed pricing, and clear payment terms' },
]

export default function SupplierFindingSection() {
  return (
    <section className="bg-white py-20 sm:py-28 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 font-semibold mb-3">
            Phase 01 / Discovery
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Supplier finding
          </h2>
          <p className="mt-4 text-xl sm:text-2xl text-slate-900 font-semibold">
            We start with the requirement, not a supplier list.
          </p>
          <p className="mt-3 text-base text-slate-600 leading-relaxed max-w-2xl">
            We look at what you need to manufacture and identify suppliers around those requirements.
          </p>
        </div>

        {/* Process Flow Ribbon with Scroll Animations */}
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 font-bold mb-4">
            Search & Selection Progression
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {processFlow.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative bg-slate-50 border border-slate-200 p-5 rounded hover:border-slate-400 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-blue-600 font-bold">
                    STEP {item.step}
                  </span>
                  {index < processFlow.length - 1 && (
                    <span className="hidden lg:inline text-slate-400 text-xs font-mono">→</span>
                  )}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Two-Column Technical Matrix + Authentic Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: What We Look At (9 criteria) */}
          <div className="lg:col-span-7">
            <div className="border border-slate-200 rounded overflow-hidden">
              <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Assessment Parameters: What We Look At
                </span>
                <span className="font-mono text-xs text-slate-400">9 Core Criteria</span>
              </div>

              <div className="divide-y divide-slate-100 bg-white">
                {evaluationCriteria.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-6 hover:bg-slate-50 transition-colors"
                  >
                    <div className="sm:w-1/3 shrink-0">
                      <span className="text-xs font-mono text-slate-400 mr-2">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <strong className="text-sm font-bold text-slate-900">
                        {item.label}
                      </strong>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed sm:w-2/3">
                      {item.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Industrial Photography & Context */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="border border-slate-200 rounded overflow-hidden bg-slate-100">
              <div className="relative aspect-[4/3] w-full">
                <img
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80"
                  alt="Precision CNC tooling and machinery assessment"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-5 bg-white border-t border-slate-200">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
                  Cluster-Based Sourcing
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  We look directly within India's premier engineering hubs, including Pune, Rajkot, Coimbatore, and Chennai, where established machine shops operate high-precision Japanese and German CNC equipment.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-slate-900 pl-4 py-1">
              <p className="text-xs sm:text-sm text-slate-800 italic">
                &ldquo;Because we start with your drawing rather than an existing factory agreement, we remain completely objective in selecting the best matched facility for your part.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
