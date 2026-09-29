'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative bg-white pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-slate-200 overflow-hidden">
      {/* Crisp Machining Video Blended with Layout */}
      <div 
        className="absolute top-0 right-0 w-full lg:w-[60%] xl:w-[56%] h-full overflow-hidden pointer-events-none select-none z-0"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 12%, rgba(0,0,0,0.6) 30%, black 48%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 12%, rgba(0,0,0,0.6) 30%, black 48%, black 100%)'
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/videos/cnc_lathe.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Soft bottom dissolve so it transitions neatly above the ethos statement */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      {/* Light color shade in the back behind the text on the left, spreading to the right */}
      <div 
        className="absolute top-0 left-0 w-full lg:w-[72%] h-full pointer-events-none select-none z-0"
        style={{
          background: 'radial-gradient(ellipse 95% 80% at 15% 35%, rgba(219, 234, 254, 0.75) 0%, rgba(224, 238, 255, 0.45) 35%, rgba(239, 246, 255, 0.15) 60%, transparent 85%)',
        }}
      />
      <div 
        className="absolute top-0 left-0 w-full lg:w-[65%] h-full pointer-events-none select-none z-0"
        style={{
          background: 'linear-gradient(105deg, rgba(219, 234, 254, 0.5) 0%, rgba(239, 246, 255, 0.3) 35%, transparent 72%)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36 relative z-10">
        {/* Main Grid: Headline & Agency Positioning on Left, Blended Machining Backdrop on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Core Agency Message */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08] max-w-2xl 3xl:text-7xl 4xl:text-8xl"
            >
              Find the right supplier.{' '}
              <span className="text-blue-600">Build the relationship.</span>{' '}
              Control the supply.
            </motion.h1>

            {/* Subhead & Agency Description */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 sm:mt-8 space-y-4 max-w-xl text-slate-600 text-base sm:text-lg leading-relaxed 3xl:text-xl 3xl:max-w-2xl"
            >
              <p className="font-medium text-slate-800">
                PROQRA helps UK manufacturers find, qualify and develop suppliers in India.
              </p>
              <p>
                We work with suppliers from the first assessment through production, quality control and ongoing supply.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link
                href="#contact"
                id="hero-talk-to-us"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded transition-colors text-center shadow-sm"
              >
                Talk to us
              </Link>
              <Link
                href="#process"
                className="inline-flex items-center justify-center border border-slate-300 hover:border-slate-900 text-slate-700 hover:text-slate-900 font-medium text-sm sm:text-base px-8 py-3.5 rounded transition-colors text-center"
              >
                How we work (7 Steps) ↓
              </Link>
            </motion.div>

            {/* Micro spec row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 text-left"
            >
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Territory</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">UK ⇄ India</p>
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Engagement</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">Shop Floor to Dock</p>
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Accountability</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">Full Documentation</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Open visual window for the blended video */}
          <div className="hidden lg:flex lg:col-span-5 min-h-[460px] items-center justify-center" aria-hidden="true" />
        </div>

        {/* The repeating ethos statement in clean, bold technical typography */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-slate-200 relative z-10"
        >
          <div className="bg-slate-50/95 backdrop-blur-sm border-l-4 border-blue-600 p-6 sm:p-8 rounded-r">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mb-2">
              The PROQRA Principle
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-slate-900 leading-snug">
              &ldquo;Finding the supplier is only the beginning. We qualify them, develop them to your requirements and support the supply relationship through production.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
