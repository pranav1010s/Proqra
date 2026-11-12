'use client'

import { motion, MotionConfig } from 'framer-motion'

const whoItems = [
  {
    tag: 'PROQRA',
    text: 'We manage the process, review the paperwork, talk to your suppliers and report back to you.',
  },
  {
    tag: 'Specialists',
    text: 'For technical inspections, audits, lab testing, freight and customs, we bring in specialists. We’ll always tell you which is which.',
  },
  {
    tag: 'On the ground',
    text: 'If you’d like eyes on the shop floor, our team in India can visit, take photos and video, and do a live walkthrough. That’s a look around, not a technical audit.',
  },
]

export default function WhoDoesWhat() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="who-does-what" className="py-20 sm:py-28 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight text-balance">
              Who does what
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {whoItems.map((item, idx) => (
              <motion.div
                key={item.tag}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-7 sm:p-9 flex flex-col justify-start hover:border-slate-300 transition-colors"
              >
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 mb-4 block">
                  {item.tag}
                </span>
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium text-pretty">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}
