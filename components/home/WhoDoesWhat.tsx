'use client'

import Link from 'next/link'
import { motion, MotionConfig } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function WhoDoesWhat() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="how-were-getting-there"
        className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200 scroll-mt-20"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* How we’re getting there */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-6 bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight mb-4 text-balance">
                  How we’re getting there
                </h2>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-pretty max-w-prose">
                  We learn the work first. We take on real supplier tasks for a small number of UK manufacturers, do them by hand and write down what takes the time. The tasks that keep coming up become the product. Because it’s real work, it’s paid work.
                </p>
              </div>
            </motion.div>

            {/* Early partners */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="lg:col-span-6 relative bg-gradient-to-br from-blue-50/50 via-white to-white border-2 border-blue-600/40 hover:border-blue-600 rounded-2xl p-8 sm:p-10 shadow-md shadow-blue-500/5 flex flex-col justify-between transition-colors"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight mb-4 text-balance">
                  Early partners
                </h2>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-pretty max-w-prose mb-6">
                  Tell us the supplier task that’s eating your time. We’ll agree a scope and a fixed price, do the work over a few weeks and give you the result plus a clear record of what was involved. Your feedback shapes what we build.
                </p>
                {/* <p className="text-sm font-semibold text-slate-900 mb-6">Early partner pilots start from £[X].</p> */}
              </div>

              <div>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm sm:text-base px-6 py-3 rounded transition-colors shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <span>Become an early partner</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}
