'use client'

import Link from 'next/link'
import { motion, MotionConfig } from 'framer-motion'
import { ArrowRight, CheckCircle2, FileText } from 'lucide-react'

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1]

type DeliveryOwner = 'PROQRA' | 'PROQRA + partner in India' | 'Independent inspector'

interface ServiceItem {
  id: string
  title: string
  owner: DeliveryOwner
  description: string
  youGet: string
  price?: string
  featured?: boolean
}

const ownerBadgeStyles: Record<DeliveryOwner, string> = {
  PROQRA: 'bg-blue-50 text-blue-700 border-blue-200/80',
  'PROQRA + partner in India': 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
  'Independent inspector': 'bg-amber-50 text-amber-800 border-amber-200/80',
}

const services: ServiceItem[] = [
  {
    id: 'service-shortlisting',
    title: 'Supplier shortlisting',
    owner: 'PROQRA',
    description:
      'Send us a drawing, the material and the quantity. We find Indian suppliers that make that kind of part, check their certificates and references, and give you a short list with notes on each.',
    youGet: 'a shortlist of 3-5 suppliers, with certificate checks and notes.',
    // price: 'from £[X] per part.',
  },
  {
    id: 'service-approval-pack',
    title: 'Supplier approval pack',
    owner: 'PROQRA',
    description:
      'We collect and review everything needed to approve a supplier: quality certificates, material certificates, calibration records, first-article report and photos. We check nothing is missing or out of date and put it in one pack.',
    youGet: 'one pack and a short summary of any concerns.',
    // price: 'from £[X] per supplier.',
    featured: true,
  },
  {
    id: 'service-site-check',
    title: 'Visual site check',
    owner: 'PROQRA + partner in India',
    description:
      'Our team in India visits the factory, takes photos and video, and does a live video walkthrough with you. It’s a look around, not a technical audit.',
    youGet: 'a photo and video report and the live call.',
    // price: 'from £[X] per visit.',
  },
  {
    id: 'service-independent-inspection',
    title: 'Independent inspection',
    owner: 'Independent inspector',
    description:
      'For technical checks, we book a qualified independent inspector, who measures, inspects and reports. We manage the booking and make sure the report reaches you.',
    youGet: 'the inspector’s report, and our summary of it.',
    price: 'inspector’s fee at cost, plus our coordination fee.',
  },
  {
    id: 'service-follow-up',
    title: 'Supplier follow-up',
    owner: 'PROQRA',
    description:
      'Once you’re ordering, we chase open orders and missing paperwork, log quality issues, and send you a regular update.',
    youGet: 'a monthly or weekly status report.',
    // price: 'from £[X] a month.',
  },
  {
    id: 'service-quality-data',
    title: 'Supplier quality data',
    owner: 'PROQRA',
    description:
      'We pull your supplier lists, certificate dates and complaint logs into one clean place, with simple scorecards.',
    youGet: 'an organised spreadsheet, kept up to date if you want.',
    // price: 'from £[X] per project.',
  },
]

const packSampleRows = [
  { label: '01. ISO 9001:2015 Certificate (Verified)', status: 'In date' },
  { label: '02. EN 10204 3.1 Mill Test Cert', status: 'Matched' },
  { label: '03. CMM Calibration Log', status: 'Valid' },
  { label: '04. First-Article Report (14/14 dims)', status: 'Checked' },
  { label: '05. Shop-Floor Photos (12)', status: 'Attached' },
  { label: '06. Summary of Concerns', status: '1 note' },
]

const guidanceRows = [
  {
    situation: 'Looking for a new supplier',
    service: 'Shortlisting',
    href: '#service-shortlisting',
  },
  {
    situation: 'Already have one and need them approved',
    service: 'Approval pack',
    href: '#service-approval-pack',
  },
  {
    situation: 'Already ordering',
    service: 'Follow-up',
    href: '#service-follow-up',
  },
]

const partPills = [
  'Machined parts',
  'Fabrication',
  'Sheet metal',
  'Castings and forgings',
  'Batches: a few dozen to a few thousand',
]

export default function ServicesContent() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative bg-white">
        {/* Top Header - Clean & Direct, No Stock Photos */}
        <section className="pt-28 sm:pt-36 pb-10 sm:pb-14">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-4">
                What we do
              </h1>
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed text-pretty">
                Pick one service or combine them. Each has a fixed price, agreed before we start.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Six Service Cards - 2 Columns x 3 Rows */}
        <section className="pb-14 sm:pb-20">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, idx) => {
                const contactHref = `/?service=${encodeURIComponent(service.title)}#contact`

                if (service.featured) {
                  return (
                    <motion.div
                      key={service.id}
                      id={service.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.45, delay: idx * 0.05, ease: EASE_OUT_EXPO }}
                      className="scroll-mt-28 rounded-2xl border-2 border-blue-600 bg-gradient-to-br from-blue-50/35 via-white to-white p-7 sm:p-9 shadow-[0_8px_28px_rgba(37,99,235,0.08)] flex flex-col justify-between"
                    >
                      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch h-full">
                        {/* Left side: Service Copy, Deliverables, Price, CTA */}
                        <div className="xl:col-span-7 flex flex-col justify-between">
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-4">
                              <span
                                className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold border ${ownerBadgeStyles[service.owner]}`}
                              >
                                {service.owner}
                              </span>
                              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-blue-600 text-white">
                                Start here
                              </span>
                            </div>

                            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                              {service.title}
                            </h2>

                            <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-pretty mb-5">
                              {service.description}
                            </p>
                          </div>

                          <div className="space-y-4 pt-4 border-t border-blue-100">
                            <p className="text-sm text-slate-800 leading-relaxed">
                              <span className="font-semibold text-slate-900">You get:</span>{' '}
                              {service.youGet}
                            </p>

                            <div
                              className={`flex flex-wrap items-center gap-3 pt-1 ${
                                service.price ? 'justify-between' : 'justify-start'
                              }`}
                            >
                              {service.price && (
                                <p className="text-sm font-semibold text-slate-900">
                                  Price: {service.price}
                                </p>
                              )}
                              <Link
                                href={contactHref}
                                className="inline-flex items-center gap-1.5 min-h-[40px] bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm px-4 py-2 rounded-lg transition-colors shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                              >
                                <span>Ask about this</span>
                                <ArrowRight size={14} aria-hidden="true" />
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Right side: Sample Approval Pack Mock-up */}
                        <div
                          aria-label="Sample approval pack contents preview"
                          className="xl:col-span-5 relative bg-slate-50 border border-slate-200/90 rounded-xl p-4 shadow-inner flex flex-col justify-between overflow-hidden"
                        >
                          {/* Clear diagonal SAMPLE watermark stamp */}
                          <div
                            aria-hidden="true"
                            className="pointer-events-none select-none absolute inset-0 flex items-center justify-center z-10"
                          >
                            <span className="border-2 border-blue-600/35 text-blue-700/35 font-black text-xl tracking-[0.22em] uppercase px-3 py-1 rounded -rotate-12 bg-white/40 backdrop-blur-[1px]">
                              SAMPLE
                            </span>
                          </div>

                          <div className="relative z-0">
                            <div className="flex items-start justify-between gap-2 pb-2.5 mb-2.5 border-b border-slate-200">
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600">
                                  <FileText size={11} aria-hidden="true" />
                                  <span>Approval Pack Contents</span>
                                </div>
                                <p className="text-xs font-bold text-slate-900 mt-1 truncate">
                                  Rajkot Precision Components Pvt Ltd
                                </p>
                                <p className="text-[11px] font-mono text-slate-500">
                                  Part #UK-4092
                                </p>
                              </div>
                            </div>

                            <ul className="space-y-1.5">
                              {packSampleRows.map((row) => (
                                <li
                                  key={row.label}
                                  className="flex items-center justify-between gap-2 text-[11px] bg-white border border-slate-200/70 rounded px-2 py-1.5"
                                >
                                  <span className="flex items-center gap-1.5 text-slate-700 font-medium truncate">
                                    <CheckCircle2
                                      size={11}
                                      className="text-emerald-600 shrink-0"
                                      aria-hidden="true"
                                    />
                                    <span className="truncate">{row.label}</span>
                                  </span>
                                  <span className="text-[10px] font-mono text-slate-500 shrink-0">
                                    {row.status}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <p className="relative z-0 text-[10px] font-mono text-slate-400 mt-2.5 pt-2 border-t border-slate-200/80 text-right">
                            Mock-up for illustration
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                }

                return (
                  <motion.div
                    key={service.id}
                    id={service.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: idx * 0.05, ease: EASE_OUT_EXPO }}
                    className="scroll-mt-28 rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 p-7 sm:p-9 shadow-sm flex flex-col justify-between transition-colors"
                  >
                    <div>
                      <div className="mb-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold border ${ownerBadgeStyles[service.owner]}`}
                        >
                          {service.owner}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                        {service.title}
                      </h2>

                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-pretty mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <p className="text-sm text-slate-800 leading-relaxed">
                        <span className="font-semibold text-slate-900">You get:</span>{' '}
                        {service.youGet}
                      </p>

                      <div
                        className={`flex flex-wrap items-center gap-3 pt-1 ${
                          service.price ? 'justify-between' : 'justify-start'
                        }`}
                      >
                        {service.price && (
                          <p className="text-sm font-semibold text-slate-900">
                            Price: {service.price}
                          </p>
                        )}
                        <Link
                          href={contactHref}
                          className="inline-flex items-center gap-1.5 min-h-[40px] bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-900 text-slate-800 font-medium text-xs sm:text-sm px-4 py-2 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                          <span>Ask about this</span>
                          <ArrowRight size={14} aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* "Which one do I need?" Strip with 3 short rows */}
        <section className="py-10 sm:py-14">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
              className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-9"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-5">
                Which one do I need?
              </h2>

              <div className="divide-y divide-slate-200/90 bg-white border border-slate-200/80 rounded-xl overflow-hidden">
                {guidanceRows.map((row) => (
                  <a
                    key={row.situation}
                    href={row.href}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-4 hover:bg-blue-50/40 transition-colors group"
                  >
                    <span className="text-sm sm:text-base text-slate-700 font-medium">
                      {row.situation}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors shrink-0">
                      <span aria-hidden="true" className="text-slate-400 group-hover:text-blue-600">
                        →
                      </span>
                      <span>{row.service}</span>
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Parts we work with - Pill labels row */}
        <section className="py-10 sm:py-14">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
              className="bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-10 shadow-sm"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                Parts we work with
              </h2>

              <div className="flex flex-wrap gap-2.5 mb-5">
                {partPills.map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-slate-100 text-slate-800 border border-slate-200/80"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl text-pretty">
                We mostly work with machined parts, fabricated and welded metalwork, sheet metal, and castings and forgings, usually in batches from a few dozen to a few thousand. If your part is different, ask. We’ll tell you honestly whether it’s something we can do.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who does what & What we don't do - Plain Grey Box */}
        <section className="py-6 sm:py-10">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
              className="bg-slate-100 border border-slate-200/90 rounded-2xl p-7 sm:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2.5">
                    Who does what
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-pretty">
                    We manage the process, check the paperwork and talk to your suppliers. Independent inspectors, labs and freight specialists do the technical work. We tell you before we start which is which.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2.5">
                    What we don’t do
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-pretty">
                    We don’t certify suppliers, carry out engineering sign-off or guarantee quality. Technical inspections are done by qualified independent inspectors. The decision to approve a supplier is always yours.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Dark Navy Closing Band */}
        <section className="pt-8 pb-20 sm:pb-28">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
              className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
            >
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3 text-balance">
                  Not sure which service you need?
                </h2>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-pretty">
                  Tell us what’s going on, and we’ll suggest where to start.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2.5 min-h-[48px] bg-white hover:bg-blue-50 text-slate-900 font-semibold text-sm sm:text-base px-8 py-3.5 rounded transition-colors shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  <span>Send us your requirement</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MotionConfig>
  )
}
