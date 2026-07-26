'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ContactInfo() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" className="py-32 px-6 sm:px-10 bg-slate-50/80 relative border-t border-slate-200/80 overflow-hidden" ref={ref}>
      {/* Background Depth Glow */}
      <div className="bg-blue-500/10 blur-[100px] absolute inset-0 pointer-events-none z-0" />

      <div className="max-w-[800px] mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="py-8"
        >
          <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            We manage the background data. <span className="italic-accent text-blue-600 font-normal">You drive the strategy.</span>
          </h2>
          <p className="text-slate-600 text-[15px] leading-relaxed mb-10 max-w-lg mx-auto">
            Stop losing time to repetitive supply chain tasks and ERP hygiene. <br />Book a quick discovery call to discuss your current supply chain bottlenecks, and let's map out exactly how much manual work we can take off your plate..
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/get-started"
              id="contact-cta"
              className="group inline-flex items-center gap-2 bg-slate-900 text-white font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md shadow-slate-900/10"
            >
              Get Started
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <a
              href="mailto:hello@proqra.com"
              className="text-slate-500 hover:text-slate-900 text-xs tracking-wider font-bold border-b border-slate-300 hover:border-slate-900 transition-all duration-300 py-1"
            >
              hello@proqra.co.uk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

