'use client'

import { motion } from 'framer-motion'

const qualityStages = [
  { step: '01', title: 'Supplier qualification', timing: 'Pre-engagement', desc: 'Baseline operational & machinery verification' },
  { step: '02', title: 'Factory assessment', timing: 'Pre-engagement', desc: 'Shop-floor audit of production areas & material storage' },
  { step: '03', title: 'Capability review', timing: 'Quotation stage', desc: 'Technical feasibility check against drawing tolerances' },
  { step: '04', title: 'Quality-system review', timing: 'Contract stage', desc: 'Calibration records, NCR procedures & traceability review' },
  { step: '05', title: 'Sample / first article', timing: 'Pre-production', desc: 'CMM dimensional inspection & customer sign-off' },
  { step: '06', title: 'Production monitoring', timing: 'In-process', desc: 'Batch check-ins, tool wear monitoring & schedule audits' },
  { step: '07', title: 'Final inspection', timing: 'Pre-dispatch', desc: 'AQL 100% drawing compliance & packaging verification' },
  { step: '08', title: 'Shipment', timing: 'Dispatch & Landed', desc: 'Bill of lading, mill test certs & customs clearance dossier' },
]

export default function QualityControlSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 font-semibold mb-3">
            Quality Assurance Protocol
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Quality control
          </h2>
          <p className="mt-4 text-xl sm:text-2xl text-slate-900 font-semibold">
            Quality is built into the supplier relationship.
          </p>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Quality checks don&apos;t begin when the container is ready to ship. They start during supplier qualification and continue through production.
          </p>
        </div>

        {/* 8-Stage Progressive Gate Flow with Scroll Animations */}
        <div className="mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {qualityStages.map((stage, idx) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white border border-slate-200 p-5 rounded hover:border-slate-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2 pb-2 border-b border-slate-100">
                    <span className="text-blue-600 font-bold">GATE {stage.step}</span>
                    <span className="text-slate-400 text-[10px] uppercase">{stage.timing}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>STATUS</span>
                  <span className="text-slate-700 font-semibold">MANDATORY PASS</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Inspection In Action: Image + Technical Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 rounded overflow-hidden">
          <div className="lg:col-span-6 relative aspect-[16/10] w-full bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
              alt="Quality engineer performing precision metrology inspection"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="lg:col-span-6 p-6 sm:p-10">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 font-bold mb-2">
              Gate-Controlled Accountability
            </p>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">
              No surprises at the UK port.
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              By separating quality into eight distinct verification gates, we catch discrepancies at the machining or fixture stage, weeks before goods reach shipping containers. Every dimensional deviation is investigated and corrected before dispatch authorization.
            </p>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded text-xs font-mono space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-500">First-Article Inspection (FAI):</span>
                <span className="text-slate-900 font-bold">100% Critical Dimensions</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Material Composition:</span>
                <span className="text-slate-900 font-bold">Direct Mill Test Verification</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Pre-Shipment Sign-Off:</span>
                <span className="text-emerald-700 font-bold">Written Inspector Approval</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
