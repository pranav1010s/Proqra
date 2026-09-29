'use client'

import { useState, useRef, MouseEvent } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  ShieldCheck, 
  Wrench, 
  FileCheck2, 
  Cpu, 
  Activity, 
  Truck,
  ArrowRight,
  ChevronRight,
  CheckCircle2
} from 'lucide-react'

const steps = [
  {
    num: '01',
    name: 'Find',
    action: 'Supplier Discovery',
    headline: 'Requirements-led supplier discovery',
    summary: 'We identify Indian manufacturers that match your product, process and volume requirements.',
    detail: 'We source specifically around your manufacturing drawings, materials, and batch quantities, rather than relying on open catalogs.',
    icon: Search,
    deliverables: [
      'Drawing and tolerance analysis (2D & 3D CAD)',
      'Cluster shortlisting across Pune, Rajkot, and Coimbatore',
      'Machine specification and capacity pre-match'
    ],
    milestone: 'Verified Supplier Shortlist'
  },
  {
    num: '02',
    name: 'Qualify',
    action: 'Shop Floor Audit',
    headline: 'In-person shop floor evaluation',
    summary: "We assess the supplier's factory, equipment, capability, quality systems and commercial position.",
    detail: 'Physical inspection of running machinery, production flow, material storage, calibration logs, and business stability before any commitment.',
    icon: ShieldCheck,
    deliverables: [
      'Unannounced physical factory walk',
      'Inspection instrument calibration audit',
      'Material traceability and storage verification'
    ],
    milestone: 'Comprehensive Audit Dossier'
  },
  {
    num: '03',
    name: 'Develop',
    action: 'Process Engineering',
    headline: 'Closing capability and process gaps',
    summary: 'Where a supplier needs to meet a specific requirement, we work with them to close the gaps.',
    detail: 'We help suppliers improve technical documentation, inspection processes, and production controls to align strictly with UK engineering standards.',
    icon: Wrench,
    deliverables: [
      'Standard Operating Procedure (SOP) alignment',
      'Tooling setup and fixture validation',
      'Custom customer requirements implementation'
    ],
    milestone: 'Approved Manufacturing Protocol'
  },
  {
    num: '04',
    name: 'Validate',
    action: 'First-Article Sign-Off',
    headline: 'First-article & specification check',
    summary: 'Samples and first production are checked against the agreed specification.',
    detail: 'Comprehensive dimensional reports, material certificates, and visual inspection before mass production authorization.',
    icon: FileCheck2,
    deliverables: [
      '100% Critical dimension metrology check',
      'Mill test certificate (MTC 3.1) chemical validation',
      'Formal First Article Inspection (FAI) approval'
    ],
    milestone: 'Signed Production Release'
  },
  {
    num: '05',
    name: 'Produce',
    action: 'Production Oversight',
    headline: 'Governed transition to regular runs',
    summary: 'Once the supplier is approved, we support the transition into regular production.',
    detail: 'Active milestone oversight on the production line, ensuring tooling setups, cycle times, and process parameters remain consistent.',
    icon: Cpu,
    deliverables: [
      'Line cycle time and parameter monitoring',
      'In-process visual and dimensional checkpoints',
      'Tool wear tracking and replacement schedule'
    ],
    milestone: 'Stable Production Run'
  },
  {
    num: '06',
    name: 'Control',
    action: 'Batch Inspection',
    headline: 'Active oversight on every batch',
    summary: 'We monitor quality, delivery and supplier performance as the relationship develops.',
    detail: 'Continuous tracking of defect rates, non-conformance reports, lead-time discipline, and pre-dispatch inspection protocols.',
    icon: Activity,
    deliverables: [
      'Pre-dispatch random sampling (AQL standards)',
      'Defect logging and preventive action plans',
      'Quarterly supplier scorecards and reviews'
    ],
    milestone: 'Pre-Shipment Authorization'
  },
  {
    num: '07',
    name: 'Deliver',
    action: 'Export Logistics',
    headline: 'Coordinated export to UK facility',
    summary: 'We coordinate the necessary documentation and shipment process to get the goods to the UK.',
    detail: 'End-to-end management of bills of lading, packing lists, inspection dossiers, customs clearance, and landed UK delivery.',
    icon: Truck,
    deliverables: [
      'Export crating and corrosion-protection packing',
      'Customs clearance and UK duty handling',
      'Landed delivery directly to your facility'
    ],
    milestone: 'Landed UK Delivery'
  }
]

export default function InteractiveProcessSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const currentStep = steps[activeIdx]
  const IconComponent = currentStep.icon

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <section id="process" className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
        {/* Clean, Direct Section Header - NO Kicker heading above heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              The 7-step sourcing journey.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Finding a factory is only the beginning. We qualify them, develop them to your drawing, and support the supply relationship through landed UK delivery.
            </p>
          </div>

          <Link
            href="/how-we-source"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group transition-colors"
          >
            <span>Read full sourcing methodology</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Interactive Step Track - Horizontal selector with hover and active indicators */}
        <div className="relative mb-8 bg-white border border-slate-200/90 rounded-xl p-2 shadow-sm overflow-x-auto scrollbar-none">
          <div className="flex items-center min-w-[700px] lg:min-w-0 justify-between gap-1">
            {steps.map((step, idx) => {
              const isActive = idx === activeIdx
              const isPassed = idx < activeIdx
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveIdx(idx)}
                  className={`relative flex-1 py-3 px-3 rounded-lg text-left transition-all duration-200 flex items-center gap-3 group ${
                    isActive 
                      ? 'bg-slate-900 text-white shadow-sm' 
                      : 'hover:bg-slate-100/70 text-slate-700'
                  }`}
                >
                  <span className={`text-xs font-mono font-bold ${
                    isActive ? 'text-blue-400' : isPassed ? 'text-blue-600' : 'text-slate-400'
                  }`}>
                    {step.num}
                  </span>
                  <div className="min-w-0">
                    <p className={`text-xs sm:text-sm font-bold truncate ${
                      isActive ? 'text-white' : 'text-slate-900 group-hover:text-blue-600'
                    }`}>
                      {step.name}
                    </p>
                    <p className={`text-[10px] truncate hidden md:block ${
                      isActive ? 'text-slate-300' : 'text-slate-400'
                    }`}>
                      {step.action}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Main Interactive Showcase Card with Cursor Light Interaction */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className="relative bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xl shadow-slate-200/40 overflow-hidden"
        >
          {/* Subtle cursor-following spotlight glow */}
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-60"
            style={{
              background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.num}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Stage Details & Narrative */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-3">
                  <span className="font-bold text-blue-600">STAGE {currentStep.num} OF 07</span>
                  <span>·</span>
                  <span>{currentStep.action.toUpperCase()}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
                  {currentStep.headline}
                </h3>

                <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed mb-3">
                  {currentStep.summary}
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {currentStep.detail}
                </p>

                {/* Progress bar inside the active stage */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">STAGE PROGRESSION</span>
                  <div className="flex items-center gap-1.5">
                    {steps.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === activeIdx
                            ? 'w-6 bg-blue-600'
                            : i < activeIdx
                            ? 'w-3 bg-slate-300'
                            : 'w-1.5 bg-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Deliverables & Verification Points */}
              <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center">
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      Key Deliverables
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      {currentStep.milestone}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {currentStep.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center justify-between">
                  <button
                    onClick={() => setActiveIdx((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => setActiveIdx((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <span>Next Stage</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
