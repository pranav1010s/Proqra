'use client'

import { motion } from 'framer-motion'

const sections = [
  {
    title: 'ERP Data Management & Visualization',
    italicSummary: 'Clear the clutter and turn your supply chain data into actionable insights.',
    services: [
      {
        title: 'Master Data Cleansing',
        description:
          'We audit, deduplicate, and maintain your supplier and material records to ensure your ERP runs on clean, accurate information.',
      },
      {
        title: 'Live MI Reporting',
        description:
          'We build and maintain custom Management Information (MI) dashboards to give your team clear, real-time visibility into operational performance.',
      },
      {
        title: 'Centralized Tracking',
        description:
          'We connect your daily supply chain feeds directly into visual dashboards, eliminating the need for manual spreadsheet updates.',
      },
    ],
  },
  {
    title: 'Daily Order Execution',
    italicSummary: 'We handle the tactical procurement grind so your team can focus on strategic sourcing.',
    services: [
      {
        title: 'PR-to-PO Processing',
        description:
          'We take ownership of converting confirmed purchase requisitions into accurate purchase orders directly within your system.',
      },
      {
        title: 'Delivery & Lead Time Tracking',
        description:
          'We actively monitor open orders and handle direct supplier follow-ups to track late deliveries and protect your lead times.',
      },
      {
        title: 'NCR Management',
        description:
          'We manage the administrative follow-up for Non-Conformance Reports (NCRs), ensuring supplier quality issues are logged and resolved efficiently.',
      },
    ],
  },
]

export default function CapabilityPillars() {
  return (
    <section className="py-24 px-6 sm:px-12 md:px-16 lg:px-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-24 sm:gap-32">
        {sections.map((section, idx) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: idx * 0.12 }}
            className="border-t border-slate-200/80 pt-14 sm:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start"
          >
            {/* Left Column (1/3 width, 33%): Large bold heading + short italic summary */}
            <div className="lg:col-span-5 flex flex-col text-left">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4">
                {section.title}
              </h3>
              <p className="italic text-slate-500 text-base sm:text-lg font-normal leading-relaxed text-balance">
                {section.italicSummary}
              </p>
            </div>

            {/* Right Column (2/3 width, 66%): Stacked list with generous breathing room & horizontal dividers */}
            <div className="lg:col-span-7 flex flex-col">
              {section.services.map((item, itemIdx) => (
                <div
                  key={item.title}
                  className={`py-8 sm:py-9 text-left ${
                    itemIdx === 0 ? 'border-t-0 pt-0' : 'border-t border-slate-200/60'
                  }`}
                >
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-base sm:text-lg font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
