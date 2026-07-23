'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ContactInfo() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" className="py-36 px-6 sm:px-10 bg-black relative border-t border-white/10 overflow-hidden" ref={ref}>
      {/* Background Depth Glow */}
      <div className="bg-blue-600/10 blur-[100px] absolute inset-0 pointer-events-none z-0" />

      <div className="max-w-[800px] mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="py-10"
        >
          <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold tracking-tight text-white mb-6 leading-tight">
            Ready to scale your team <span className="italic-accent text-blue-600 font-normal">globally?</span>
          </h2>
          <p className="text-neutral-400 text-[15px] leading-relaxed mb-12 max-w-lg mx-auto">
            Tell us about the roles you are looking to hire. We will outline a customized plan for talent sourcing, compliance, and local payroll setup.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/get-started"
              id="contact-cta"
              className="group inline-flex items-center gap-2 bg-white text-black font-bold text-xs tracking-wider px-8 py-4 rounded-sm hover:bg-neutral-200 transition-colors duration-300 shadow-sm"
            >
              Build Your Team
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <a
              href="mailto:hellos@proqra.com"
              className="text-white/40 hover:text-white text-xs tracking-wider font-bold border-b border-white/20 hover:border-white transition-all duration-300 py-1"
            >
              hello@proqra.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
