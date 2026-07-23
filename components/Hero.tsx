'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 sm:px-12 md:px-20 bg-black pt-32 pb-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/3 top-1/3 -translate-x-1/2 -translate-y-1/2 bg-blue-600/20 blur-[120px] w-[50vw] h-[50vw] rounded-full pointer-events-none z-0" />

      {/* Stark typographic headline */}
      <div className="my-auto w-full relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-[clamp(4.5rem,8.5vw,7.8rem)] font-extrabold tracking-tighter text-white leading-[0.95] text-left max-w-[1300px] text-balance"
        >
          We build your <br className="hidden md:inline" />
          remote <span className="italic-accent text-blue-600 font-normal tracking-normal">procurement team.</span>
        </motion.h1>
      </div>

      {/* Architectural bottom footer grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end w-full mt-8 relative z-10"
      >
        {/* Subheadline pushed to the left bottom */}
        <div className="max-w-md">
          <p className="text-neutral-400 text-xs sm:text-[13px] font-normal leading-relaxed">
            Large enterprises use Global Capability Centers to slash procurement overhead. We build you the exact same dedicated remote team, with zero infrastructure costs.
          </p>
        </div>

        {/* CTA pushed to the right bottom */}
        <div className="flex md:justify-end">
          <Link
            href="/get-started"
            id="hero-cta"
            className="group inline-flex items-center gap-3 bg-white text-black font-bold text-xs tracking-widest px-10 py-5 rounded-none hover:bg-neutral-200 transition-colors duration-300 w-full sm:w-auto justify-center"
          >
            Build Your Team
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
