'use client'

import { motion } from 'framer-motion'

const qualificationCategories = [
  {
    category: 'Factory',
    subtitle: 'Physical infrastructure & layout',
    items: [
      { name: 'Machines', note: 'Model, age, maintenance history, and spindle repeatability' },
      { name: 'Production areas', note: 'Shop-floor organization, 5S standards, and safety compliance' },
      { name: 'Capacity', note: 'Real machine availability vs claimed capacity across shifts' },
      { name: 'Material storage', note: 'Raw stock handling, segregation of scrap, and environmental controls' },
      { name: 'Production flow', note: 'Bottleneck prevention, tooling staging, and routing efficiency' },
    ],
  },
  {
    category: 'Quality',
    subtitle: 'Metrology & defect control systems',
    items: [
      { name: 'Inspection equipment', note: 'CMM, vernier calipers, micrometers, roughness testers' },
      { name: 'Calibration', note: 'Third-party calibration certificates and internal verification dates' },
      { name: 'Traceability', note: 'Heat batch numbers, raw material certs linked to finished lots' },
      { name: 'Quality records', note: 'First-article reports, in-process logs, and sign-offs' },
      { name: 'NCR process', note: 'Non-conformance isolation, scrap quarantine, and root cause analysis' },
    ],
  },
  {
    category: 'Business',
    subtitle: 'Commercial viability & export standing',
    items: [
      { name: 'Company information', note: 'Directorship, financial stability, and corporate registration' },
      { name: 'Export experience', note: 'Familiarity with UK/EU standards, freight forwarders, and incoterms' },
      { name: 'Current workload', note: 'Client portfolio balance to ensure your job receives priority' },
      { name: 'Commercial capability', note: 'Transparent costing models, packaging standards, and payment terms' },
    ],
  },
]

export default function SupplierQualificationSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 font-semibold mb-3">
            Phase 02 / Verification
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Supplier qualification
          </h2>
          <p className="mt-4 text-xl sm:text-2xl text-slate-900 font-semibold">
            Before we recommend a supplier, we know what we&apos;re recommending.
          </p>
          <p className="mt-3 text-base text-slate-600 leading-relaxed max-w-2xl">
            We assess the supplier at the factory rather than relying only on information provided over email.
          </p>
        </div>

        {/* 3 Main Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {qualificationCategories.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-white border border-slate-200 rounded p-6 sm:p-8 flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Pillar Header */}
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                    AUDIT CATEGORY 0{idx + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    {group.category}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1">
                    {group.subtitle}
                  </p>
                </div>

                {/* Audit Items */}
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item.name} className="border-b border-slate-50 pb-3">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-slate-900 text-sm font-sans">{item.name}</span>
                        <span className="text-slate-400">AUDITED</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>ON-SITE INSPECTION</span>
                <span className="text-emerald-600 font-semibold">VERIFIED REPORT</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image & Recorded Takeaway Strip */}
        <div className="bg-white border border-slate-200 rounded overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-5 h-64 md:h-full min-h-[240px] relative bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=80"
              alt="Shop floor technical audit in India"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="md:col-span-7 p-6 sm:p-10">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 font-bold mb-2">
              The Quality Standard
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Everything relevant is recorded.
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Our audit team visits the facility to physically observe running machines, check instrument calibration logs, inspect raw material storage racks, and evaluate the factory's management discipline. We compile an exhaustive dossier before any quote is issued.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left border-t border-slate-100 pt-4 font-mono text-xs text-slate-500">
              <div>
                <p className="font-bold text-slate-900">100%</p>
                <p className="text-[10px]">Physical Audits</p>
              </div>
              <div>
                <p className="font-bold text-slate-900">Zero</p>
                <p className="text-[10px]">Email-Only Vetting</p>
              </div>
              <div>
                <p className="font-bold text-slate-900">Direct</p>
                <p className="text-[10px]">Machine Capacity</p>
              </div>
              <div>
                <p className="font-bold text-slate-900">Signed</p>
                <p className="text-[10px]">NCR Protocols</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
