'use client'

import { motion } from 'framer-motion'

export default function CapabilitiesHero() {
  return (
    <section className="relative flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 bg-white pt-36 sm:pt-48 pb-20 overflow-hidden">
      {/* Soft Ambient Glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 blur-[130px] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1440px] mx-auto w-full relative z-10 text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[82px] font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-8 text-balance max-w-5xl"
        >
          Capabilities Built to{' '}
          <span className="italic-accent text-blue-600 font-normal tracking-normal">
            Scale Your Operations.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-slate-600 text-lg sm:text-xl md:text-2xl font-normal leading-relaxed max-w-3xl text-balance"
        >
          Custom data automation and ERP execution for mid-market teams.
        </motion.p>
      </div>
    </section>
  )
}
