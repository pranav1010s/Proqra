'use client'

import { motion } from 'framer-motion'

const docSections = [
  {
    category: 'Supplier',
    desc: 'Audit trail and credentials',
    records: [
      'Company information & incorporation',
      'Qualification records & scorecards',
      'Factory assessment & shop-floor audit',
      'Accredited certifications (ISO, EN)',
    ],
  },
  {
    category: 'Product',
    desc: 'Technical basis of manufacture',
    records: [
      'Approved engineering drawings & revisions',
      'Tolerancing & GD&T specifications',
      'Specific inspection requirements',
      'Material grade & alloy requirements',
    ],
  },
  {
    category: 'Production',
    desc: 'Batch traceability & compliance',
    records: [
      'First-article & in-process inspection records',
      'Dimensional & mechanical test certificates',
      'Raw material mill test certificates (MTC)',
      'NCRs & closed corrective action logs',
    ],
  },
  {
    category: 'Shipment',
    desc: 'Chain of custody & customs',
    records: [
      'Pre-dispatch final inspection sign-off',
      'Seaworthy packing & crating checklists',
      'Commercial invoice & packing lists',
      'Bill of lading & certificate of origin',
    ],
  },
]

export default function DocumentationSection() {
  return (
    <section className="bg-white py-20 sm:py-28 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 font-semibold mb-3">
            Traceability &amp; Records
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Documentation
          </h2>
          <p className="mt-4 text-xl sm:text-2xl text-slate-900 font-semibold">
            If it was checked, there should be a record.
          </p>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            We maintain documentation throughout the supplier and production process.
          </p>
        </div>

        {/* 4-Category Dossier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {docSections.map((sec, idx) => (
            <motion.div
              key={sec.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-50 border border-slate-200 rounded p-6 flex flex-col justify-between"
            >
              <div>
                <div className="border-b border-slate-200 pb-3 mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                    RECORD SECTION 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {sec.category}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    {sec.desc}
                  </p>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {sec.records.map((rec) => (
                    <li key={rec} className="flex items-start gap-2">
                      <span className="text-slate-400 font-mono text-xs mt-0.5">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200 text-[10px] font-mono text-slate-400 flex justify-between">
                <span>FORMAT: PDF / SPEC</span>
                <span className="text-slate-600 font-semibold">ARCHIVED</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* High-Impact Statement & Technical Drawing Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900 text-white rounded p-8 sm:p-12">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400 font-semibold">
              The PROQRA Archival Rule
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              One supplier. One project record.
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              You will never need to hunt through lost email threads or decipher scanned handwriting. Every batch has a unified, indexed project dossier containing exact mill test certs, dimensional inspection sheets, and shipping bills.
            </p>
          </div>

          <div className="lg:col-span-4 border border-slate-800 bg-slate-950 p-5 rounded font-mono text-xs text-slate-300 space-y-2">
            <div className="text-slate-400 text-[11px] border-b border-slate-800 pb-2 flex justify-between">
              <span>PROJECT DOSSIER SAMPLE</span>
              <span className="text-emerald-400">COMPLETE</span>
            </div>
            <p className="text-slate-400">PROQRA-DOC-2026-UK</p>
            <div className="space-y-1 text-[11px] pt-1">
              <p className="flex justify-between">
                <span>✓ Factory Audit Form</span>
                <span className="text-slate-500">REV 2.1</span>
              </p>
              <p className="flex justify-between">
                <span>✓ Material Test Cert</span>
                <span className="text-slate-500">EN 10204 3.1</span>
              </p>
              <p className="flex justify-between">
                <span>✓ CMM Dimensional Log</span>
                <span className="text-slate-500">100% PASS</span>
              </p>
              <p className="flex justify-between">
                <span>✓ Seaworthy Export Bill</span>
                <span className="text-slate-500">UK B/L</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
