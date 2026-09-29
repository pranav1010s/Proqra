'use client'

import { useState, useRef, MouseEvent } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  Eye, 
  ShieldCheck, 
  Wrench, 
  FileCheck2, 
  Cpu, 
  ClipboardCheck,
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
    summary: 'We identify Indian engineering manufacturers that match your product, process, and volume specifications.',
    detail: 'We evaluate manufacturing drawings, materials, and batch quantities to shortlist matching machine shops in specialized engineering hubs.',
    icon: Search,
    deliverables: [
      'Drawing and tolerance analysis (2D & 3D CAD)',
      'Cluster shortlisting across Pune, Rajkot, and Coimbatore',
      'Machine specification and capacity pre-match'
    ],
    milestone: 'Shortlist of Suitable Suppliers'
  },
  {
    num: '02',
    name: 'Audit',
    action: 'In-Factory Visits',
    headline: 'In-person shop-floor evaluation',
    summary: "We visit the factory in person to check machinery, running setups, and workplace safety, with live video call access for your team.",
    detail: 'We walk the factory floor in person to observe running equipment, verify calibration validity, and assess operator setups.',
    icon: Eye,
    deliverables: [
      'Unannounced physical factory walk',
      'Machine age, condition, and maintenance logs',
      'Material storage and scrap segregation audit'
    ],
    milestone: 'On-Site Factory Audit'
  },
  {
    num: '03',
    name: 'Qualify',
    action: 'Capability & Safety Checks',
    headline: 'Verifying what the supplier can deliver',
    summary: 'Our specialty lies in full capability, quality, and safety checks to make sure the supplier can deliver what is promised.',
    detail: 'We audit management discipline, safety standards, inspection tools, and business stability before any production commitment.',
    icon: ShieldCheck,
    deliverables: [
      'Machine capability and tolerance limits check',
      'Inspection instrument calibration audit',
      'Workplace safety protocols and compliance'
    ],
    milestone: 'Formal Supplier Qualification'
  },
  {
    num: '04',
    name: 'Develop',
    action: 'Process Alignment',
    headline: 'Closing capability and process gaps',
    summary: 'Where a supplier needs to meet a specific requirement, we work with them directly to close the gaps.',
    detail: 'We help the supplier formalize standard operating procedures, custom tooling setups, and quality records to align with UK expectations.',
    icon: Wrench,
    deliverables: [
      'Standard Operating Procedure (SOP) alignment',
      'Tooling setup and fixture validation',
      'Custom customer requirements implementation'
    ],
    milestone: 'Approved Manufacturing Protocol'
  },
  {
    num: '05',
    name: 'Validate',
    action: 'First-Article Sign-Off',
    headline: 'First-article & specification verification',
    summary: 'Initial samples and test pieces are inspected rigorously against your agreed drawing.',
    detail: 'We verify dimensional reports, check mill test certificates, and complete physical sample checks before authorizing initial production.',
    icon: FileCheck2,
    deliverables: [
      '100% Critical dimension metrology check',
      'Mill test certificate (MTC 3.1) chemical validation',
      'Written First Article Inspection (FAI) approval'
    ],
    milestone: 'Signed First-Article Approval'
  },
  {
    num: '06',
    name: 'Launch',
    action: 'First-Run Production',
    headline: 'Getting started on first production materials',
    summary: 'We oversee the setup and running of your initial production materials on the shop floor.',
    detail: 'We check cycle times, machine parameters, and in-process checkpoints to ensure the supplier runs smoothly from day one.',
    icon: Cpu,
    deliverables: [
      'Setup verification on the production line',
      'Initial material batch dimensional checks',
      'Cycle time and process stability confirmation'
    ],
    milestone: 'Successful First Material Run'
  },
  {
    num: '07',
    name: 'Document',
    action: 'Complete Client Dossier',
    headline: 'Full documentation shared from start to finish',
    summary: 'We document everything from starting point to completion and share the full dossier with your team.',
    detail: 'You receive complete audit reports, calibration certs, first-article sign-offs, and factory contacts for a transparent, direct relationship.',
    icon: ClipboardCheck,
    deliverables: [
      'Comprehensive in-factory audit dossier',
      'First-article metrology and material certificates',
      'Direct supplier contact and handover pack'
    ],
    milestone: 'Complete Handover Dossier'
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
              How we qualify and launch your supplier.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              From initial discovery to in-person factory visits, first-article sign-off, and first-run production oversight, our 7-step framework ensures your supplier can deliver what is promised.
            </p>
          </div>

          <Link
            href="/how-we-source"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group transition-colors"
          >
            <span>Explore full 7-step process in detail</span>
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
