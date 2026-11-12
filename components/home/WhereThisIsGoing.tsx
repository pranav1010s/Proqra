'use client'

import { motion, MotionConfig } from 'framer-motion'

export default function WhereThisIsGoing() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="where-this-is-going" className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45 }}
            className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-12 lg:p-14 shadow-sm"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-5 sm:mb-6 text-balance">
              Where this is going
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 leading-relaxed text-pretty font-normal max-w-5xl">
              We’re a small company at the start. Right now most of this is done by hand, with spreadsheets and templates. As we spot jobs we keep repeating, we’ll turn them into software: a shared tracker, certificate expiry reminders, and eventually a portal where you can see it all. We’ll always be clear about what exists today and what doesn’t.
            </p>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  )
}
