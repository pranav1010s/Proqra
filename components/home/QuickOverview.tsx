'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Factory, ShieldCheck, ClipboardCheck, ArrowRight } from 'lucide-react'

const pillars = [
  {
    icon: Factory,
    title: 'Suitable Supplier Discovery',
    summary:
      'We match your manufacturing drawings, materials, and batch volumes directly with verified precision facilities in India’s leading industrial hubs.',
    highlights: ['Direct CAD & drawing review', 'Targeted cluster shortlisting', 'Machine-capacity verification'],
    linkText: 'Explore manufacturing capabilities',
    href: '/capabilities'
  },
  {
    icon: ShieldCheck,
    title: 'In-Factory Audits & Safety Checks',
    summary:
      'We visit the factory floor in person to check capability, quality, and safety standards. You can also join us on a live video call to see the shop floor firsthand.',
    highlights: ['In-person shop-floor visits', 'Live video call access on request', 'Capability & safety verification'],
    linkText: 'See our qualification standards',
    href: '/quality'
  },
  {
    icon: ClipboardCheck,
    title: 'First-Run Setup & Full Dossier',
    summary:
      'We oversee the production of your initial materials, verify first articles, and document everything from start to finish, sharing full records directly with you.',
    highlights: ['First-article inspection sign-off', 'Initial material run oversight', 'Complete client documentation pack'],
    linkText: 'Read our 7-step qualification process',
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
            We operate as your on-the-ground sourcing partner in India, visiting factories in person to verify supplier capability before you commit.
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
