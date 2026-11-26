'use client'

import Link from 'next/link'
import { motion, MotionConfig } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const todayTasks = [
  'Finding and shortlisting suppliers',
  'Approval paperwork',
  'Supplier chasing and follow-up',
  'Supplier data clean-up',
]

export default function WhereThisIsGoing() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="what-we-can-take-on"
        className="py-20 sm:py-28 bg-white border-b border-slate-200 scroll-mt-20"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36 space-y-12 sm:space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45 }}
          >
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight text-balance">
                What we can take on today
              </h2>

              <Link
                href="/work-with-us"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <span>See everything we can take on</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {todayTasks.map((task) => (
                <div
                  key={task}
                  className="bg-slate-50 border border-slate-200/90 rounded-xl p-5 sm:p-6 flex items-center"
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                    {task}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="bg-slate-50 border border-slate-200/90 rounded-xl p-8 sm:p-10 lg:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
              <div className="lg:col-span-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight text-balance">
                  Where we’re starting
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-pretty max-w-3xl">
                  One of the places we work is India. We have people on the ground there, so we can help UK manufacturers find suppliers, check their paperwork and coordinate independent inspection and site visits. It’s where we’re starting, not where we’ll stop.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  )
}
