'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, FileCheck, Percent } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-between items-center bg-white pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 lg:pb-10 3xl:pt-36 3xl:pb-16 4xl:pt-44 4xl:pb-20 overflow-hidden select-none">
      {/* Soft Ambient Background Glow */}
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 bg-blue-500/5 blur-[140px] w-[70vw] h-[40vw] max-w-[800px] max-h-[400px] 3xl:max-w-[1100px] 3xl:max-h-[550px] rounded-full pointer-events-none z-0" />

      {/* Centered Hero Content & Trust Pillars */}
      <div className="w-full relative z-10 flex-1 flex flex-col justify-between items-center px-5 sm:px-8 lg:px-12 max-w-6xl mx-auto 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
        <div className="my-auto flex flex-col items-center text-center w-full">
          {/* Space to add eyebrow text here in the future if needed */}
        
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight text-slate-900 leading-[1.08] text-balance max-w-5xl mx-auto 3xl:text-[96px] 3xl:max-w-[1400px] 4xl:text-[112px] 4xl:max-w-[1700px]"
          >
            Fabricated metalwork from India,{' '}
            <span className="italic-accent text-blue-600 font-normal tracking-normal">
              without the risk of finding out too late.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-4xl mx-auto text-balance 3xl:text-2xl 3xl:mt-10 3xl:max-w-[1200px] 4xl:text-[1.75rem] 4xl:mt-12 4xl:max-w-[1500px]"
          >
            PROQRA sources sheet metal fabrication and welded assemblies from India. Every supplier is verified in person before they're approved to quote your work, and every order is inspected against your drawing before it ships.
          </motion.p>

          {/* Dual CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 3xl:mt-12 3xl:gap-5 4xl:mt-14"
          >
            <Link
              href="/get-started"
              id="hero-request-quote-cta"
              className="group inline-flex items-center gap-2.5 bg-blue-600 text-white font-bold text-xs tracking-wider uppercase px-8 py-3.5 sm:py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md shadow-blue-500/20 w-full sm:w-auto justify-center 3xl:text-sm 3xl:px-10 3xl:py-5 4xl:text-base 4xl:px-12 4xl:py-6"
            >
              Request a Quote
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <Link
              href="/how-we-source"
              id="hero-see-vetting-cta"
              className="inline-flex items-center justify-center font-bold text-xs tracking-wider uppercase text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 px-8 py-3.5 sm:py-4 rounded-lg transition-all duration-200 border border-slate-200 w-full sm:w-auto 3xl:text-sm 3xl:px-10 3xl:py-5 4xl:text-base 4xl:px-12 4xl:py-6"
            >
              See how we vet suppliers
            </Link>
          </motion.div>
        </div>

        {/* Understated Trust Pillars Strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-7 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-left max-w-4xl mx-auto 3xl:mt-20 3xl:pt-9 3xl:gap-14 3xl:max-w-[1300px] 4xl:mt-24 4xl:gap-20 4xl:max-w-[1600px]"
        >
          <div className="flex items-start gap-3 3xl:gap-4">
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 3xl:w-11 3xl:h-11 4xl:w-12 4xl:h-12">
              <ShieldCheck className="w-4 h-4 3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 3xl:text-sm 4xl:text-base">Verified in Person</p>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed 3xl:text-sm 4xl:text-base">Shop floor audit before any quote is issued</p>
            </div>
          </div>

          <div className="flex items-start gap-3 3xl:gap-4">
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 3xl:w-11 3xl:h-11 4xl:w-12 4xl:h-12">
              <FileCheck className="w-4 h-4 3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 3xl:text-sm 4xl:text-base">Inspected to Drawing</p>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed 3xl:text-sm 4xl:text-base">Dimensional & mill test certs with every crate</p>
            </div>
          </div>

          <div className="flex items-start gap-3 3xl:gap-4">
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 3xl:w-11 3xl:h-11 4xl:w-12 4xl:h-12">
              <Percent className="w-4 h-4 3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 3xl:text-sm 4xl:text-base">Preferential Tariffs</p>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed 3xl:text-sm 4xl:text-base">Duty-free or reduced duty under UK–India CETA</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
