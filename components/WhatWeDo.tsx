'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Dedicated Procurement Talent',
    description: 'We source high-performing strategic buyers, sourcing analysts, and supply chain coordinators tailored to your exact operational needs.',
  },
  {
    num: '02',
    title: 'Remote EOR & Compliance',
    description: 'We handle full-service international payroll, benefits, and strict local labor compliance, acting as your seamless Employer of Record.',
  },
  {
    num: '03',
    title: 'System Integration',
    description: 'Your remote team is provisioned with secure hardware and embeds directly into your existing ERP systems and daily corporate workflows.',
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
      className="max-w-7xl mx-auto px-6 pt-12 pb-32 flex flex-col lg:flex-row gap-20 relative bg-black text-white"
    >
      {/* Left Column (Sticky) - Using style top to ensure no overlap under fixed header */}
      <div className="lg:w-1/3 lg:sticky h-fit" style={{ top: '120px' }}>
        <p className="text-neutral-400 text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
          Capabilities
        </p>
        <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold tracking-tighter text-white leading-[0.95]">
          Built to scale your operations.
        </h2>
      </div>

      {/* Right Column (Scrolling content) */}
      <div className="lg:w-2/3 pl-10 relative">
        {/* Background line */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-neutral-800" />

        {/* Animated fill line */}
        <motion.div
          style={{ scaleY: springValue, transformOrigin: 'top' }}
          className="absolute left-0 top-0 bottom-0 w-[2px] bg-blue-600"
        />

        {/* Steps */}
        <div className="space-y-32">
          {steps.map((step) => (
            <div key={step.num} className="relative pl-6 sm:pl-10">
              {/* Centered Dot Indicator */}
              <div className="absolute left-0 -translate-x-1/2 top-[10px] w-3 h-3 rounded-full bg-blue-600 border-2 border-black z-10" />

              {/* Number and Step details */}
              <span className="italic-accent text-3xl text-blue-600/40 block mb-2 font-normal">
                {step.num}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-400 text-[15px] sm:text-base leading-relaxed max-w-xl">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
