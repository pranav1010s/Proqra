'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Daily Order Execution',
    description:
      'We take over the manual PR-to-PO grind and routine supplier follow-ups so your team can focus purely on strategy and negotiation.',
  },
  {
    num: '02',
    title: 'ERP Data Management',
    description:
      'We clean your master data, fix outdated material records, and maintain your vendor database so your team can finally trust the system.',
  },
  {
    num: '03',
    title: 'Live MI Reporting',
    description:
      'We replace outdated spreadsheets with custom, real-time dashboards that show exactly where your money is going and where delays are happening.',
  },
]

export default function WhatWeDo() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress on the parent container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  // Smooth spring physics for editorial feel
  const springValue = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section
      id="services"
      ref={containerRef}
      className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 pt-24 pb-32 flex flex-col lg:flex-row gap-16 lg:gap-24 relative bg-white text-slate-900"
    >
      {/* Left Column (Sticky) */}
      <div className="lg:w-1/3 lg:sticky h-fit" style={{ top: '120px' }}>
        <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.25em] mb-4 flex items-center gap-2">
          WHAT WE DO
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
        </p>
        <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold tracking-tighter text-slate-900 leading-[0.98]">
          Less administration.{' '}
          <span className="italic-accent text-blue-600 font-normal">
            More execution.
          </span>
        </h2>
      </div>

      {/* Right Column (Scrolling content) */}
      <div className="lg:w-2/3 pl-6 sm:pl-10 relative">
        {/* Background line */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-200" />

        {/* Animated fill line */}
        <motion.div
          style={{ scaleY: springValue, transformOrigin: 'top' }}
          className="absolute left-0 top-0 bottom-0 w-[2px] bg-blue-600"
        />

        {/* Steps */}
        <div className="space-y-20 sm:space-y-24">
          {steps.map((step) => (
            <div key={step.num} className="relative pl-6 sm:pl-10">
              {/* Centered Dot Indicator */}
              <div className="absolute left-0 -translate-x-1/2 top-[10px] w-3.5 h-3.5 rounded-full bg-blue-600 border-2 border-white shadow-sm z-10" />

              {/* Number and Step details */}
              <span className="italic-accent text-3xl text-blue-600/70 block mb-2 font-normal">
                {step.num}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                {step.description}
              </p>
            </div>
          ))}

          {/* Bridge link to Capabilities Page */}
          <div className="pt-6 pl-6 sm:pl-10">
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2.5 text-slate-900 font-bold text-base hover:text-blue-600 hover:gap-3.5 transition-all duration-300 group"
            >
              Explore our full capabilities
              <ArrowRight size={18} className="text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
