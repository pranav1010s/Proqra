'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between px-6 sm:px-12 md:px-20 bg-white pt-32 sm:pt-40 pb-16 overflow-hidden">
      {/* Soft Ambient Glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 blur-[130px] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none z-0" />

      {/* Clean typographic headline */}
      <div className="my-auto w-full relative z-10 py-8">
        <motion.h1
          initial={{ opacity: 0.9, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-[clamp(4.2rem,8vw,7.5rem)] font-extrabold tracking-tighter text-slate-900 leading-[0.98] text-left max-w-[1300px] text-balance"
        >
          We build your <br className="hidden md:inline" />
          remote <span className="italic-accent text-blue-600 font-normal tracking-normal">procurement team.</span>
        </motion.h1>
      </div>

      {/* Architectural bottom footer grid */}
      <motion.div
        initial={{ opacity: 0.9, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end w-full mt-8 relative z-10"
      >
        {/* Subheadline */}
        <div className="max-w-md">
          <p className="text-slate-600 text-sm sm:text-[15px] font-normal leading-relaxed">
            Large enterprises use Global Capability Centers to slash procurement overhead. We build you the exact same dedicated remote team, with zero infrastructure costs.
          </p>
        </div>

        {/* CTA */}
        <div className="flex md:justify-end">
          <Link
            href="/get-started"
            id="hero-cta"
            className="group inline-flex items-center gap-3 bg-slate-900 text-white font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-lg hover:bg-slate-800 transition-all duration-300 shadow-md shadow-slate-900/10 w-full sm:w-auto justify-center"
          >
            Build Your Team
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}


