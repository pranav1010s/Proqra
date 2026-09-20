'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, FileCheck, Percent } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center bg-white pt-32 sm:pt-44 pb-20 sm:pb-28 overflow-hidden select-none">
      {/* Soft Ambient Background Glow */}
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 bg-blue-500/5 blur-[140px] w-[70vw] h-[40vw] max-w-[800px] max-h-[400px] rounded-full pointer-events-none z-0" />

      {/* Centered Hero Headline & Dual CTA Buttons */}
      <div className="w-full relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-5"
        >
          UK–INDIA SOURCING FOR FABRICATED METALWORK
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight text-slate-900 leading-[1.08] text-balance max-w-4xl mx-auto"
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
          className="mt-6 text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto text-balance"
        >
          PROQRA sources sheet metal fabrication and welded assemblies from India. Every supplier is verified in person before they’re approved to quote your work, and every order is inspected against your drawing before it ships.
        </motion.p>

        {/* Dual CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/get-started"
            id="hero-request-quote-cta"
            className="group inline-flex items-center gap-2.5 bg-blue-600 text-white font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md shadow-blue-500/20 w-full sm:w-auto justify-center"
          >
            Request a Quote
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
          <Link
            href="/how-we-source"
            id="hero-see-vetting-cta"
            className="inline-flex items-center justify-center font-bold text-xs tracking-wider uppercase text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 px-8 py-4 rounded-lg transition-all duration-200 border border-slate-200 w-full sm:w-auto"
          >
            See how we vet suppliers
          </Link>
        </motion.div>

        {/* Understated Trust Pillars Strip (No carousel, pure editorial trust) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-18 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
              <ShieldCheck size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Verified in Person</p>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Shop floor audit before any quote is issued</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
              <FileCheck size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Inspected to Drawing</p>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Dimensional & mill test certs with every crate</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
              <Percent size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Preferential Tariffs</p>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Duty-free or reduced duty under UK–India CETA</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
