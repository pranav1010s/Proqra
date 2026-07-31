'use client'

import { motion } from 'framer-motion'

export default function GlobalDelivery() {
  return (
    <section className="py-24 px-6 sm:px-12 md:px-16 lg:px-24 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto border-t border-slate-200/80 pt-16 sm:pt-20 text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start"
        >
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Global Delivery & Cost Advantage
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-slate-600 text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-balance">
              Our delivery team is based primarily in India, combining deep supply chain expertise with specialized engineering. This hybrid model provides you with flexible, high-quality execution at a highly competitive cost—allowing you to increase capacity without expanding your in-house headcount.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
