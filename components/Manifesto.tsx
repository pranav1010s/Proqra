'use client'

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef } from 'react'

const paragraph1 =
  'Large enterprises spend millions building global hubs to handle routine suppliers and tactical purchasing. Not to replace their core team, but to give them operational leverage.'

const paragraph2 =
  'The remote capability centers we build for SMEs do exactly the same, designed to handle the daily procurement grind, drastically reduce overhead, and free your business to focus on strategy.'

interface WordProps {
  children: string
  progress: MotionValue<number>
  range: [number, number]
  activeColor?: string
}

const Word = ({ children, progress, range, activeColor = 'text-slate-900' }: WordProps) => {
  const opacity = useTransform(progress, range, [0.25, 1])

  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-2 lg:mr-3 mt-1 transition-colors duration-200 ${activeColor}`}
    >
      {children}
    </motion.span>
  )
}

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress across the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 55%'],
  })

  const p1Words = paragraph1.split(' ')
  const p2Words = paragraph2.split(' ')
  const totalWords = p1Words.length + p2Words.length

  return (
    <section
      ref={containerRef}
      className="bg-slate-50/80 border-t border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto pt-24 pb-20 px-6 flex flex-col gap-10 text-left font-normal text-2xl md:text-3xl lg:text-[38px] leading-[1.3] tracking-tight">
        {/* Paragraph 1 */}
        <p className="text-slate-900 font-medium">
          {p1Words.map((word, i) => {
            const start = i / totalWords
            const end = Math.min(1, start + 1.5 / totalWords)
            return (
              <Word key={`p1-${i}`} progress={scrollYProgress} range={[start, end]} activeColor="text-slate-900">
                {word}
              </Word>
            )
          })}
        </p>

        {/* Paragraph 2 */}
        <p className="text-slate-600">
          {p2Words.map((word, i) => {
            const globalIndex = p1Words.length + i
            const start = globalIndex / totalWords
            const end = Math.min(1, start + 1.5 / totalWords)
            return (
              <Word key={`p2-${i}`} progress={scrollYProgress} range={[start, end]} activeColor="text-slate-600">
                {word}
              </Word>
            )
          })}
        </p>
      </div>
    </section>
  )
}


