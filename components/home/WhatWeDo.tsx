'use client'

import Link from 'next/link'
import { motion, MotionConfig } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const buildingStages = [
  {
    stage: 'Now',
    highlight: true,
    description: 'Done by hand with early partners, using trackers and templates.',
  },
  {
    stage: 'Next',
    highlight: false,
    description: 'A shared tracker for documents and supplier status, with expiry reminders.',
  },
  {
    stage: 'Later',
    highlight: false,
    description: 'A portal with automated chasing and supplier scorecards.',
  },
]

export default function WhatWeDo() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="where-the-time-goes"
        className="py-20 sm:py-24 bg-slate-50/70 border-b border-slate-200 scroll-mt-20"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight text-balance">
                Where the time goes
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed text-pretty max-w-3xl">
                Direct procurement runs on documents: certificates, test reports, drawings, order updates, complaint logs. They sit in inboxes and spreadsheets, someone has to chase them, and the data never quite matches. Buyers and supply chain teams end up spending their days on admin when they should be on the decisions that matter.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="what-were-building"
        className="py-20 sm:py-28 bg-white border-b border-slate-200 scroll-mt-20"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-4 text-balance">
                What we’re building
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-pretty">
                A platform that handles most of that work: collecting documents from suppliers, chasing what’s missing, keeping supplier data consistent and flagging problems early.
              </p>
            </div>

            <Link
              href="/platform"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <span>See the platform</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {buildingStages.map((item, idx) => (
              <motion.div
                key={item.stage}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className={`rounded-xl p-7 sm:p-9 border transition-colors ${
                  item.highlight
                    ? 'border-blue-200 bg-blue-50/35'
                    : 'border-slate-200/90 bg-slate-50/70'
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                  {item.stage}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-pretty">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-sm sm:text-base text-slate-600">
            We’re early. Most of this is still done by hand, and we’ll say so when that changes.
          </p>
        </div>
      </section>
    </MotionConfig>
  )
}
