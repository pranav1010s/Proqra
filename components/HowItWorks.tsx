'use client'

import { motion, useScroll, useSpring, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Define your ideal profiles',
    description: 'Specify the roles, experience levels, tech stack, and target markets you want to recruit from.',
  },
  {
    num: '02',
    title: 'Talent acquisition & vetting',
    description: 'Our team sources, screens, and verifies technical capabilities so you only meet qualified candidates.',
  },
  {
    num: '03',
    title: 'Onboard & manage compliance',
    description: 'We handle local employment contracts, compliance registration, workstation setups, and payroll.',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })

  // Scroll progress targeting the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  // Smooth spring physics for editorial feel
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section
      id="process"
      data-theme="light"
      className="py-36 pb-56 bg-white relative overflow-hidden text-black"
      ref={sectionRef}
    >
      <div className="max-w-[900px] mx-auto relative z-10 px-6 sm:px-10">
        
        {/* Header */}
        <div className="mb-28 text-center max-w-xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="text-black/40 text-[11px] font-bold uppercase tracking-[0.25em] mb-4"
          >
            Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-tight text-black"
          >
            Three steps to your global team
          </motion.h2>
        </div>

        {/* Pipeline container */}
        <div ref={containerRef} className="relative max-w-xl mx-auto">
          {/* Static black line track */}
          <div className="absolute left-[7px] top-[14px] bottom-[14px] w-[1px] bg-black/[0.1]" />

          {/* Spring-linked solid black line */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-[7px] top-[14px] bottom-[14px] w-[1px] bg-black"
          />

          {/* Steps list */}
          <div className="space-y-28 pl-16">
            {steps.map((step) => (
              <StepItem key={step.num} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StepItem({ num, title, description }: { num: string; title: string; description: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -12 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {/* Pipeline Dot Indicator */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: 0.15, duration: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
        className="absolute -left-[61px] top-[9px] w-2.5 h-2.5 rounded-full bg-black border-2 border-white z-10"
      />

      {/* Huge Serif Italic Number */}
      <span className="italic-accent text-3xl sm:text-4xl text-black/20 block mb-2">{num}</span>
      <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight mb-3 uppercase">{title}</h3>
      <p className="text-black/50 text-[15px] leading-relaxed max-w-md">{description}</p>
    </motion.div>
  )
}
