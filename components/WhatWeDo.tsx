'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'PR-to-PO Execution & Follow-Ups',
    description: 'We turn your purchase requisitions into accurate orders and handle all the back-and-forth with suppliers. No more chasing emails or delayed shipments, we make sure things get ordered and delivered on time',
  },
  {
    num: '02',
    title: 'ERP & Cloud Data Management',
    description: 'We work directly within your ERP and data architecture to clean up duplicate vendors, fix outdated material records, and keep everything organized so your team can actually trust the numbers.',
  },
  {
    num: '03',
    title: 'Live Insights & MI Reporting',
    description: 'Stop digging through outdated spreadsheets. We build simple, live dashboards that show your team exactly where your money is going, where the delays are, and what needs your attention today.',
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
      className="max-w-7xl mx-auto px-6 pt-24 pb-32 flex flex-col lg:flex-row gap-20 relative bg-white text-slate-900"
    >
      {/* Left Column (Sticky) */}
      <div className="lg:w-1/3 lg:sticky h-fit" style={{ top: '120px' }}>
        <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.25em] mb-4">
          Capabilities
        </p>
        <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold tracking-tighter text-slate-900 leading-[0.98]">
          Built to scale your operations.
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
        <div className="space-y-28">
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
              <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed max-w-xl">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

