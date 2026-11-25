'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import { CheckCircle2, FileText, ChevronDown } from 'lucide-react'

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

const howItWorksSteps = [
  {
    number: '01',
    title: 'Tell us the task.',
    description: 'A short call about what’s taking your time.',
  },
  {
    number: '02',
    title: 'Agree scope and price.',
    description: 'Fixed, and agreed before we start.',
  },
  {
    number: '03',
    title: 'We do it.',
    description: 'By hand, with regular updates.',
  },
  {
    number: '04',
    title: 'We review together.',
    description: 'What worked, what didn’t and what should be automated.',
  },
]

const approvalSteps = [
  '(1) We shortlist and contact suppliers.',
  '(2) We ask for their documents and check each certificate is real and in date, by looking it up with the issuing body where possible.',
  '(3) We arrange further checks if you want them.',
  '(4) You get the approval pack and decide.',
]

const services: ServiceItem[] = [
  {
    id: 'service-shortlisting',
    title: 'Supplier shortlisting',
    owner: 'PROQRA',
    description:
      'Send us a drawing, the material and the quantity. We find Indian suppliers that make that kind of part, check their certificates and references, and give you a short list with notes on each.',
    youGet: 'a shortlist of 3 to 5 suppliers, with certificate checks and notes.',
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
    youGet: 'the inspector’s report and our summary of it.',
    price: 'inspector’s fee at cost plus a coordination fee.',
  },
  {
    id: 'service-follow-up',
    title: 'Supplier chasing and follow-up',
    owner: 'PROQRA',
    description:
      'Once you’re ordering, we chase open orders and missing paperwork, log quality issues and send you a regular update.',
    youGet: 'a weekly or monthly status report.',
    // price: 'from £[X] a month.',
  },
  {
    id: 'service-data-cleanup',
    title: 'Supplier data clean-up',
    owner: 'PROQRA',
    description:
      'Supplier lists in three spreadsheets, certificates nobody knows the expiry date of, complaints in someone’s inbox. We pull it into one place with simple scorecards.',
    youGet: 'an organised spreadsheet, kept up to date if you want.',
    // price: 'from £[X] per project.',
  },
]

const packSampleRows = [
  { label: '01. ISO 9001:2015 Certificate (Checked)', status: 'In date' },
  { label: '02. EN 10204 3.1 Mill Test Cert', status: 'Checked' },
  { label: '03. CMM Calibration Log', status: 'In date' },
  { label: '04. First-Article Report (14/14 dims)', status: 'Checked' },
  { label: '05. Shop-Floor Photos (12)', status: 'Attached' },
  { label: '06. Summary of Concerns', status: '1 note' },
]

const guidanceRows = [
  {
    situation: 'New supplier',
    service: 'Shortlisting',
    href: '#service-shortlisting',
  },
  {
    situation: 'Need one approved',
    service: 'Approval pack',
    href: '#service-approval-pack',
  },
  {
    situation: 'Already ordering',
    service: 'Follow-up',
    href: '#service-follow-up',
  },
  {
    situation: 'Messy data',
    service: 'Data clean-up',
    href: '#service-data-cleanup',
  },
]

const partPills = [
  'Machined parts',
  'Fabrication',
  'Sheet metal',
  'Castings and forgings',
]

const whoColumns = [
  {
    role: 'PROQRA',
    description: 'manages the process, checks paperwork, talks to your suppliers.',
  },
  {
    role: 'Specialists',
    description: 'technical inspection, audits, lab testing, freight and customs.',
  },
  {
    role: 'On the ground',
    description: 'our team in India for site visits, photos and video.',
  },
]

const faqs = [
  {
    question: 'How long does it take?',
    answer:
      'It depends on the part and how fast suppliers respond. After the first call, we’ll give you a realistic timeline.',
  },
  {
    question: 'What does it cost?',
    answer:
      'Fixed price after the first call. Inspector fees are passed through at cost.',
  },
  {
    question: 'What if you can’t help?',
    answer: 'We’ll say so on the call.',
  },
  {
    question: 'Is my drawing safe?',
    answer: 'We sign an NDA on request before seeing any drawings.',
  },
]

export default function WorkWithUsContent() {
  const [approvalOpen, setApprovalOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative bg-white">
        {/* Top Section (No hero photo) + How it works 4-step row */}
        <section className="pt-28 sm:pt-36 pb-14 sm:pb-18 border-b border-slate-200">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <div className="max-w-3xl mb-12 sm:mb-14">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-5 text-balance">
                Work with us early
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed text-pretty">
                We take on a small number of UK manufacturers at a time, do real supplier work for them and learn from it. You get the job done. We get to build something useful.
              </p>
            </div>

            {/* How it works (4 steps in a row, vertical on mobile) */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-5">
                How it works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {howItWorksSteps.map((step) => (
                  <div
                    key={step.number}
                    className="bg-slate-50 border border-slate-200/90 rounded-xl p-6"
                  >
                    <span className="text-xs font-mono font-bold text-blue-600 block mb-2.5">
                      {step.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed text-pretty">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What you can hand us (2 columns x 3 rows = 6 cards) */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <div className="max-w-2xl mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                What you can hand us
              </h2>
            </div>

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
                      className="scroll-mt-28 rounded-xl border-2 border-blue-600 bg-white p-7 sm:p-9 flex flex-col justify-between gap-6"
                    >
                      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">
                        {/* Left side: Service Copy, Deliverables, CTA */}
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

                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                              {service.title}
                            </h3>

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
                                className="inline-flex items-center justify-center min-h-[44px] bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm px-4 py-2 rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                              >
                                Ask about this
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Right side: Sample Approval Pack Mock-up */}
                        <div
                          aria-label="Sample approval pack contents preview"
                          className="xl:col-span-5 relative bg-slate-50 border border-slate-200/90 rounded-xl p-4 shadow-inner flex flex-col justify-between overflow-hidden"
                        >
                          {/* Large diagonal SAMPLE watermark */}
                          <div
                            aria-hidden="true"
                            className="pointer-events-none select-none absolute inset-0 flex items-center justify-center z-10"
                          >
                            <span className="border-2 border-blue-600/35 text-blue-700/35 font-black text-2xl tracking-[0.26em] uppercase px-4 py-1.5 rounded -rotate-12 bg-white/80">
                              SAMPLE
                            </span>
                          </div>

                          <div className="relative z-0">
                            <div className="pb-2.5 mb-2.5 border-b border-slate-200">
                              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600">
                                <FileText size={11} aria-hidden="true" />
                                <span>Approval Pack Contents</span>
                              </div>
                              <p className="text-xs font-bold text-slate-900 mt-1 truncate">
                                Example Metalworks Pvt Ltd
                              </p>
                              <p className="text-[11px] font-mono text-slate-500">
                                Sample Part #001
                              </p>
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

                          <p className="relative z-0 text-[10px] font-mono text-slate-600 mt-2.5 pt-2 border-t border-slate-200/80 text-right">
                            Sample layout, fictional supplier
                          </p>
                        </div>
                      </div>

                      {/* Expandable step-by-step approval workflow inside card */}
                      <div className="border-t border-blue-200/70 pt-4">
                        <button
                          type="button"
                          onClick={() => setApprovalOpen((prev) => !prev)}
                          aria-expanded={approvalOpen}
                          aria-controls="approval-step-by-step"
                          className="w-full min-h-[44px] flex items-center justify-between gap-3 text-left text-sm font-semibold text-blue-900 hover:text-blue-700 py-2 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                          <span>How an approval works, step by step</span>
                          <ChevronDown
                            size={16}
                            aria-hidden="true"
                            className={`shrink-0 transition-transform duration-200 ${
                              approvalOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {approvalOpen && (
                            <motion.div
                              id="approval-step-by-step"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.22 }}
                              className="overflow-hidden"
                            >
                              <ol className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700 bg-white/90 border border-blue-100 rounded-xl p-4">
                                {approvalSteps.map((stepText) => (
                                  <li key={stepText} className="leading-relaxed">
                                    {stepText}
                                  </li>
                                ))}
                              </ol>
                            </motion.div>
                          )}
                        </AnimatePresence>
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
                    className="scroll-mt-28 rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 p-7 sm:p-9 flex flex-col justify-between transition-colors"
                  >
                    <div>
                      <div className="mb-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold border ${ownerBadgeStyles[service.owner]}`}
                        >
                          {service.owner}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                        {service.title}
                      </h3>

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
                          className="inline-flex items-center justify-center min-h-[44px] bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-900 text-slate-800 font-medium text-xs sm:text-sm px-4 py-2 rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                          Ask about this
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Which one do I need? (Jump strip) */}
        <section className="py-8 sm:py-12">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
              className="bg-slate-50 border border-slate-200/90 rounded-xl p-6 sm:p-9"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-5">
                Which one do I need?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {guidanceRows.map((row) => (
                  <a
                    key={row.situation}
                    href={row.href}
                    className="min-h-[48px] flex items-center justify-between gap-3 bg-white border border-slate-200/90 hover:border-blue-400 hover:bg-blue-50/30 rounded-lg px-5 py-4 transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    <span className="text-sm text-slate-600 font-medium">
                      {row.situation}
                    </span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 shrink-0">
                      {row.service}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Parts we work with */}
        <section className="py-8 sm:py-12">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
              className="bg-white border border-slate-200/90 rounded-xl p-7 sm:p-10"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                Parts we work with
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
                {partPills.map((pill) => (
                  <div
                    key={pill}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900"
                  >
                    {pill}
                  </div>
                ))}
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl text-pretty">
                If your part is different, ask. We’ll tell you honestly whether we can help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who does what (3 columns) */}
        <section className="py-8 sm:py-12">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-5">
              Who does what
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
              {whoColumns.map((col) => (
                <div
                  key={col.role}
                  className="bg-slate-50 border border-slate-200/90 rounded-xl p-6 sm:p-8"
                >
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2.5">
                    {col.role}
                  </span>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-pretty">
                    {col.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we don’t do (plain grey box) */}
        <section className="py-6 sm:py-10">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <div className="bg-slate-100 border border-slate-200/90 rounded-xl p-7 sm:p-10">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2.5">
                What we don’t do
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-pretty max-w-4xl">
                We don’t certify suppliers, sign off engineering or guarantee quality. Technical inspections are done by qualified independent inspectors. The decision to approve a supplier is always yours.
              </p>
            </div>
          </div>
        </section>

        {/* Questions (Interactive accordion) */}
        <section className="py-10 sm:py-14">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6">
              Questions
            </h2>

            <div className="divide-y divide-slate-200 border-y border-slate-200 max-w-4xl">
              {faqs.map((item, idx) => {
                const isOpen = openFaq === idx
                return (
                  <div key={item.question}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${idx}`}
                      className="w-full min-h-[56px] py-4 flex items-center justify-between gap-4 text-left text-base sm:text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={`shrink-0 text-slate-500 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${idx}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 text-sm sm:text-base text-slate-700 leading-relaxed text-pretty max-w-3xl">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Closing (Dark navy band) */}
        <section className="pt-8 pb-20 sm:pb-28">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
              className="bg-slate-900 text-white rounded-xl p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
            >
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2 text-balance">
                  Not sure where to start? Tell us what’s going on.
                </h2>
              </div>

              <div className="shrink-0">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center min-h-[48px] bg-white hover:bg-blue-50 text-slate-900 font-semibold text-sm sm:text-base px-8 py-3.5 rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  Become an early partner
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MotionConfig>
  )
}

