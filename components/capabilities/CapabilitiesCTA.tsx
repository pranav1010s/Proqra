'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

export default function CapabilitiesCTA() {
  return (
    <section className="py-32 px-6 sm:px-10 bg-slate-50/80 relative border-t border-slate-200/80 overflow-hidden">
      {/* Background Depth Glow */}
      <div className="bg-blue-500/10 blur-[120px] absolute inset-0 pointer-events-none z-0" />

      <div className="max-w-[800px] mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-8 flex flex-col items-center"
        >
          <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold tracking-tight text-slate-900 mb-6 leading-tight text-balance">
            Offload your <span className="italic-accent text-blue-600 font-normal">manual procurement tasks.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto text-balance">
            Book a quick call to discuss your current ERP data and daily workload. We will show you exactly how our team takes over the execution so your core team can get back to strategy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <Link
              href="/get-started"
              id="capabilities-cta-btn"
              className="group inline-flex items-center gap-3 bg-slate-900 text-white font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md shadow-slate-900/10 w-full sm:w-auto justify-center"
            >
              Get Started
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>

            <a
              href="mailto:hello@proqra.co.uk"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-xs tracking-wider font-bold border-b border-slate-300 hover:border-slate-900 transition-all duration-300 py-1"
            >
              <Mail size={14} className="text-slate-400" />
              hello@proqra.co.uk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
