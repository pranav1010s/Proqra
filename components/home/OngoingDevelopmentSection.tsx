'use client'

import { motion } from 'framer-motion'

const monitoringTracks = [
  {
    title: 'Quality',
    tag: 'Defect Control',
    items: [
      { metric: 'Defects', desc: 'Continuous PPM (parts-per-million) tracking and scrap reduction' },
      { metric: 'NCRs', desc: 'Formal non-conformance logging for any dimensional variance' },
      { metric: 'Corrective actions', desc: '8D root cause analysis and fixture adjustments to prevent recurrence' },
    ],
  },
  {
    title: 'Delivery',
    tag: 'Schedule Discipline',
    items: [
      { metric: 'Lead time', desc: 'Monitoring raw material procurement and machine queue durations' },
      { metric: 'On-time delivery', desc: 'Strict tracking against agreed factory-gate and UK port dates' },
      { metric: 'Production delays', desc: 'Early warning protocols for maintenance, power, or transit bottlenecks' },
    ],
  },
  {
    title: 'Process',
    tag: 'Operational Rigor',
    items: [
      { metric: 'Documentation', desc: 'Ensuring all batch logs, revision histories, and inspection sheets are current' },
      { metric: 'Inspection', desc: 'Routine verification of calibration schedules and tool wear wear-down' },
      { metric: 'Traceability', desc: 'Guaranteed heat numbers from raw billet to finished machined part' },
    ],
  },
  {
    title: 'Commercial',
    tag: 'Long-Term Stability',
    items: [
      { metric: 'Pricing', desc: 'Transparent raw material indexation and cost stabilization over volume runs' },
      { metric: 'Capacity', desc: 'Securing dedicated machine hours as your production requirements scale up' },
      { metric: 'Changes', desc: 'Engineering change notice (ECN) management without production disruption' },
    ],
  },
]

export default function OngoingDevelopmentSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 font-semibold mb-3">
            Long-Term Partnership
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Supplier development doesn&apos;t stop after the first order
          </h2>
          <p className="mt-4 text-xl sm:text-2xl text-slate-900 font-semibold">
            The first order is the start, not the finish.
          </p>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Once production begins, we monitor how the supplier performs.
          </p>
        </div>

        {/* 4 Monitoring Tracks Grid with Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {monitoringTracks.map((track, idx) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 rounded p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="border-b border-slate-100 pb-3 mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">
                    {track.title}
                  </h3>
                  <span className="text-[10px] font-mono uppercase text-slate-400">
                    {track.tag}
                  </span>
                </div>

                <div className="space-y-4">
                  {track.items.map((item) => (
                    <div key={item.metric} className="text-xs">
                      <p className="font-bold text-slate-900 font-mono text-[13px] mb-0.5">
                        {item.metric}
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                ACTIVE MONITORING
              </div>
            </motion.div>
          ))}
        </div>

        {/* Agency Value Summary Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="bg-white border-l-4 border-slate-900 p-6 sm:p-8 rounded-r border-t border-r border-b border-slate-200 max-w-4xl"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 font-bold mb-2">
            The Relationship Model
          </p>
          <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
            This gives the UK customer a supplier that can develop over time, rather than simply receiving a new factory contact and being left to manage it themselves.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
