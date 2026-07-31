'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress of the section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 35%'],
  })

  // Smooth scroll-driven MotionValue transforms
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.35], [0.25, 1])
  const headlineY = useTransform(scrollYProgress, [0, 0.35], [18, 0])
  const headlineBlur = useTransform(scrollYProgress, [0, 0.35], ['blur(6px)', 'blur(0px)'])

  const paragraphOpacity = useTransform(scrollYProgress, [0.15, 0.5], [0.25, 1])
  const paragraphY = useTransform(scrollYProgress, [0.15, 0.5], [18, 0])
  const paragraphBlur = useTransform(scrollYProgress, [0.15, 0.5], ['blur(5px)', 'blur(0px)'])

  // Targeted Highlight color transition driven by MotionValue scroll progress
  const highlightColor = useTransform(
    scrollYProgress,
    [0.2, 0.45],
    ['#0f172a', '#2563eb']
  )

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-slate-50/60 border-t border-b border-slate-200/60 py-20 sm:py-28 md:py-36 px-5 sm:px-8 md:px-12 overflow-hidden"
    >
      {/* Subtle 1px Grid Pattern Background (3% Opacity) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none z-0" />

      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.025)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-6 sm:gap-8 text-left">
        {/* Scroll-Driven Headline */}
        <motion.h2
          style={{
            opacity: headlineOpacity,
            y: headlineY,
            filter: headlineBlur,
          }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold text-slate-900 tracking-tight leading-[1.2] text-balance"
        >
          Clean procurement data shouldn't require a{' '}
          <motion.span
            style={{ color: highlightColor }}
            className="italic-accent font-normal tracking-normal inline-block"
          >
            bloated headcount
          </motion.span>{' '}
          or overpriced consultants.
        </motion.h2>

        {/* Scroll-Driven Sub-statement */}
        <motion.p
          style={{
            opacity: paragraphOpacity,
            y: paragraphY,
            filter: paragraphBlur,
          }}
          className="text-lg sm:text-xl md:text-2xl text-slate-600 font-normal leading-relaxed text-balance"
        >
          PROQRA pairs deep supply chain expertise with custom software automation. We maintain your ERP data flawlessly in real-time, giving your team their time back while keeping systems perfectly clean.
        </motion.p>
      </div>
    </section>
  )
}
