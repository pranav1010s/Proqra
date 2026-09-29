'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Factory, ShieldCheck, Truck, ArrowRight } from 'lucide-react'

const pillars = [
  {
    icon: Factory,
    title: 'Factory-Direct Matching',
    summary:
      'We match your manufacturing drawings and volume requirements directly with specialized precision facilities across India’s core engineering clusters.',
    highlights: ['Zero open directory catalogs', 'Tolerances down to ±0.01mm', 'Direct machine-capacity match'],
    linkText: 'Explore manufacturing capabilities',
    href: '/capabilities'
  },
  {
    icon: ShieldCheck,
    title: 'Physical Shop-Floor Audits',
    summary:
      'No email-only vetting. Our resident technical engineers inspect running machinery, calibration logs, material storage, and management discipline in person.',
    highlights: ['100% on-site physical audits', 'Process gap resolution', 'Material certificate traceability'],
    linkText: 'See our 8-gate quality protocol',
    href: '/quality'
  },
  {
    icon: Truck,
    title: 'Governed UK Delivery',
    summary:
      'From first-article approval through production runs and customs clearance, we take full responsibility until goods arrive at your UK dock.',
    highlights: ['First-Article Inspection (FAI)', 'Pre-shipment sign-off', 'Landed UK logistics handled'],
    linkText: 'Read our 7-step sourcing process',
    href: '/how-we-source'
  }
]

export default function QuickOverview() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
        {/* Direct Section Header - NO Kicker heading above heading */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            How PROQRA works for UK manufacturers.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We operate as your dedicated technical sourcing partner on the ground in India, bridging the gap between UK engineering standards and Indian production capacity.
          </p>
        </div>

        {/* 3 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-7 sm:p-9 flex flex-col justify-between hover:shadow-lg hover:border-slate-300 transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {pillar.summary}
                  </p>

                  <ul className="space-y-2.5 mb-8 border-t border-slate-200/80 pt-5">
                    {pillar.highlights.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={pillar.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors pt-2"
                >
                  <span>{pillar.linkText}</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
