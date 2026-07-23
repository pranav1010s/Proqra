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
}

const Word = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0.15, 1])
  const filter = useTransform(progress, range, ['blur(8px)', 'blur(0px)'])

  return (
    <motion.span style={{ opacity, filter }} className="inline-block mr-2 lg:mr-3 mt-1">
      {children}
    </motion.span>
  )
}

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress across the container with optimized offset trigger range
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 90%', 'end 65%'],
  })

  const p1Words = paragraph1.split(' ')
  const p2Words = paragraph2.split(' ')
  const totalWords = p1Words.length + p2Words.length

  return (
    <section
      ref={containerRef}
      className="bg-black border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-3xl mx-auto pt-32 pb-24 px-6 flex flex-col gap-12 bg-black text-left text-white font-normal text-2xl md:text-3xl lg:text-[40px] leading-[1.2] tracking-tight">
        {/* Paragraph 1 */}
        <p>
          {p1Words.map((word, i) => {
            const start = i / totalWords
            const end = Math.min(1, start + 1.5 / totalWords)
            return (
              <Word key={`p1-${i}`} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </p>

        {/* Paragraph 2 */}
        <p className="text-neutral-400">
          {p2Words.map((word, i) => {
            const globalIndex = p1Words.length + i
            const start = globalIndex / totalWords
            const end = Math.min(1, start + 1.5 / totalWords)
            return (
              <Word key={`p2-${i}`} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </p>
      </div>
    </section>
  )
}
