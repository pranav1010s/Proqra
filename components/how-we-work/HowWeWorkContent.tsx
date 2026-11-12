'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, MotionConfig, useScroll, useSpring } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1]

const steps = [
  {
    id: 'step-1',
    number: '01',
    shortLabel: 'Your requirement',
    title: '1. You tell us what you need',
    body: 'We start with a call. Send us the drawing, the material, how many you need, and any standards your own customer requires. We’ll ask about deadlines and what’s gone wrong with suppliers in the past. If we can’t help, we’ll say so on the call.',
  },
  {
    id: 'step-2',
    number: '02',
    shortLabel: 'Shortlisting',
    title: '2. We find and shortlist suppliers',
    body: 'We look for Indian suppliers who make parts like yours and contact them to confirm they’re interested and can handle your volumes. You get a short list, with notes on each one.',
  },
  {
    id: 'step-3',
    number: '03',
    shortLabel: 'Paperwork checks',
    title: '3. We check their paperwork',
    body: 'For each shortlisted supplier we ask for the usual documents: quality certificates, material test certificates, calibration records for their measuring equipment, and references from other customers. We check that each certificate is real and in date, by looking it up with the issuing body where possible, and flag anything missing or odd.',
  },
  {
    id: 'step-4',
    number: '04',
    shortLabel: 'Arrange checks',
    title: '4. We arrange the checks',
    body: 'Paperwork only tells you so much. Depending on what you need, we can:',
    bullets: [
      'Book an independent inspector to visit the factory and report back. This is the right choice for anything technical or high-risk.',
      'Arrange a visual site check. Our team in India visits, takes photos and video, and does a live video walkthrough with you. It’s a look around, not a technical audit.',
      'Collect first-article samples and reports from the supplier, and check the report is complete and matches your drawing’s requirements. Measuring is done by the supplier and, if you want, an independent inspector.',
    ],
  },
  {
    id: 'step-5',
    number: '05',
    shortLabel: 'Approval pack',
    title: '5. You get an approval pack',
    body: 'Everything goes into one pack: the shortlist notes, certificates, inspection reports, first-article report, photos and a short summary of any concerns. You decide whether to approve the supplier. We make sure you have what you need to decide.',
  },
  {
    id: 'step-6',
    number: '06',
    shortLabel: 'Ongoing follow-up',
    title: '6. We keep following up (optional)',
    body: 'Once you’re ordering, we can chase open orders and missing paperwork, log quality problems, and send you regular updates.',
  },
]

const supplierRequirements = [
  'ISO 9001 certification, or a clear plan to work to that standard',
  'Material test certificates with each batch',
  'Calibration records for their measuring equipment',
  'Photos, video and a live walkthrough on request',
  'Honest, quick answers when we ask questions',
]

export default function HowWeWorkContent() {
  const [activeStep, setActiveStep] = useState<number>(0)
  const isClickScrolling = useRef(false)
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  // Continuous GPU-composited scaleY progress line tied to scroll
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 55%', 'end 65%'],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    restDelta: 0.001,
  })

  // Bidirectional Scroll-Spy
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return
      const viewportTarget = window.innerHeight * 0.38
      let closestIdx = 0
      let minDistance = Infinity

      stepRefs.current.forEach((el, idx) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const cardCenter = rect.top + rect.height * 0.35
        const distance = Math.abs(cardCenter - viewportTarget)
        if (distance < minDistance) {
          minDistance = distance
          closestIdx = idx
        }
      })

      setActiveStep(closestIdx)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToStep = (idx: number, id: string) => {
    isClickScrolling.current = true
    setActiveStep(idx)

    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current)
    }

    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    clickTimeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false
    }, 850)
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative bg-white">
        {/* Distinct Editorial Hero: Split Header on Top + Wide Panoramic Video Frame below (Not a clone of Home Page) */}
        <section className="relative bg-white min-h-[calc(100dvh-70px)] pt-28 sm:pt-32 pb-8 sm:pb-10 flex flex-col justify-between overflow-hidden">
          {/* Subtle top ambient wash */}
          <div
            aria-hidden="true"
            className="absolute top-0 inset-x-0 h-[420px] pointer-events-none select-none z-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 70% at 50% 0%, rgba(219, 234, 254, 0.55) 0%, rgba(239, 246, 255, 0.25) 55%, transparent 90%)',
            }}
          />

          <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36 relative z-10 flex-1 flex flex-col justify-between gap-8">
            {/* Top Editorial Row: Heading on Left, Intro Description on Right */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pt-2 sm:pt-4"
            >
              <div className="lg:col-span-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight text-slate-900 leading-[1.05] 3xl:text-7xl">
                  How it works
                </h1>
              </div>

              <div className="lg:col-span-6">
                <p className="text-lg sm:text-xl lg:text-[1.35rem] text-slate-700 leading-relaxed text-pretty">
                  Approving a new supplier takes more steps than most people expect. Here’s what we do at each one, and where specialists come in.
                </p>
              </div>
            </motion.div>

            {/* Native 16:9 Dual Video Showcase - Zero zoom, full uncropped frames */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: EASE_OUT_EXPO }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            >
              <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-slate-900">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center"
                >
                  <source src="/videos/imtex_03.webm" type="video/webm" />
                </video>
              </div>

              <div className="hidden md:block relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-slate-900">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center"
                >
                  <source src="/videos/imtex_06.webm" type="video/webm" />
                </video>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sticky Sub-Header Step Bar - Aligned left-to-right with the 1440px screen container */}
        <div className="sticky top-[65px] sm:top-[69px] z-30 py-3.5 bg-white/90 backdrop-blur-md border-y border-slate-200/80">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <div
              role="tablist"
              aria-label="Approval process steps"
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2"
            >
              {steps.map((step, idx) => {
                const isActive = activeStep === idx
                return (
                  <button
                    key={step.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => scrollToStep(idx, step.id)}
                    className={`relative px-4 py-3 rounded-xl text-left transition-colors duration-200 flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${
                      isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeStepPill"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 32,
                          mass: 0.8,
                        }}
                        className="absolute inset-0 bg-slate-900 rounded-xl shadow-sm"
                        style={{ zIndex: 0 }}
                      />
                    )}

                    <span
                      className={`relative z-10 text-xs font-mono font-bold px-2 py-0.5 rounded transition-colors duration-200 shrink-0 ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {step.number}
                    </span>
                    <span className="relative z-10 text-xs sm:text-sm font-semibold truncate">
                      {step.shortLabel}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Full-Width Aligned Steps Section (1440px) with Dual-Layer Line-Draw & Progressive Focus */}
        <section className="py-14 sm:py-20 relative z-10">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <div ref={timelineRef} className="relative pl-6 sm:pl-12">
              {/* Dual-Layer Vertical Progress Track */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-4 bottom-4 w-[3px] bg-slate-200/80 rounded-full overflow-hidden"
              >
                <motion.div
                  className="w-full h-full bg-blue-600 origin-top rounded-full"
                  style={{ scaleY }}
                />
              </div>

              <div className="space-y-6 sm:space-y-8">
                {steps.map((step, idx) => {
                  const isActive = activeStep === idx
                  return (
                    <motion.div
                      key={step.id}
                      id={step.id}
                      ref={(el) => {
                        stepRefs.current[idx] = el
                      }}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                      onClick={() => setActiveStep(idx)}
                      className="relative scroll-mt-36 cursor-pointer"
                    >
                      {/* Node dot on the vertical line */}
                      <span
                        aria-hidden="true"
                        className={`-left-6 sm:-left-12 -translate-x-[5px] top-9 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 absolute ${
                          isActive
                            ? 'bg-blue-600 border-blue-600 scale-125 shadow-[0_0_0_5px_rgba(37,99,235,0.15)]'
                            : idx < activeStep
                            ? 'bg-blue-600 border-blue-600'
                            : 'bg-white border-slate-300'
                        }`}
                      />

                      {/* Card with Progressive Focus State */}
                      <div
                        style={{
                          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                        }}
                        className={`rounded-2xl p-7 sm:p-10 transition-all duration-400 border ${
                          isActive
                            ? 'opacity-100 bg-white border-blue-600/70 shadow-[0_8px_24px_rgba(0,0,0,0.06)]'
                            : 'opacity-55 hover:opacity-90 bg-slate-50/40 border-[#E5E7EB] shadow-none'
                        }`}
                      >
                        <h2 className="text-xl sm:text-2xl lg:text-[1.65rem] font-bold text-slate-900 tracking-tight mb-3">
                          {step.title}
                        </h2>

                        <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-pretty max-w-4xl">
                          {step.body}
                        </p>

                        {step.bullets && (
                          <div className="mt-7 grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {step.bullets.map((bullet, bIdx) => (
                              <div
                                key={bIdx}
                                className="bg-slate-50/90 border border-slate-200/90 rounded-xl p-5 sm:p-6 flex flex-col justify-start transition-colors hover:border-blue-300 hover:bg-blue-50/30"
                              >
                                <span
                                  className="inline-block w-2 h-2 rounded-full bg-blue-600 mb-3"
                                  aria-hidden="true"
                                />
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                  {bullet}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* What we ask of suppliers - Full 1440px Left-to-Right Fit */}
        <section className="py-12 sm:py-16 relative z-10">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
              className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border border-slate-200/90 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                      What we ask of suppliers
                    </h2>
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
                      Before we introduce a supplier to you, we ask for:
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-600 rounded-r-xl p-5 sm:p-6 shadow-sm border border-slate-200/80">
                    <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
                      A certificate on a wall doesn’t prove what happens on the shop floor. That’s why we offer inspections as well as paperwork checks.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <ul className="space-y-3.5">
                    {supplierRequirements.map((req, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: idx * 0.05,
                          ease: EASE_OUT_EXPO,
                        }}
                        className="bg-white border border-slate-200/90 hover:border-blue-600/40 rounded-xl p-4 sm:p-5 flex items-center gap-4 text-base text-slate-800 font-medium shadow-sm transition-colors"
                      >
                        <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <Check size={16} aria-hidden="true" />
                        </span>
                        <span>{req}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Practical Details: What we don’t do / How long does it take? / What does it cost? */}
        <section className="py-12 sm:py-16 relative z-10">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: 'What we don’t do',
                  body: 'We don’t certify suppliers, carry out engineering sign-off or guarantee quality. Technical inspections are done by qualified independent inspectors. The decision to approve a supplier is always yours.',
                },
                {
                  title: 'How long does it take?',
                  body: 'It depends on the part and how quickly suppliers respond. After the first call, we’ll give you a realistic timeline for your project rather than a number that sounds good.',
                },
                {
                  title: 'What does it cost?',
                  body: 'We quote a fixed price after the first call, so you know the cost before we start. Inspector fees are passed through at cost.',
                },
              ].map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.07,
                    ease: EASE_OUT_EXPO,
                  }}
                  className="bg-slate-50/60 hover:bg-white border border-slate-200/90 hover:border-blue-600/40 rounded-2xl p-7 sm:p-9 transition-all duration-300 shadow-sm hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                    {card.title}
                  </h2>
                  <p className="text-base text-slate-700 leading-relaxed text-pretty">
                    {card.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA - Full 1440px Left-to-Right Fit */}
        <section className="pt-8 pb-20 sm:pb-28 relative z-10">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
              className="bg-gradient-to-r from-blue-50/60 via-slate-50 to-blue-50/40 border border-blue-200/80 rounded-3xl p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
            >
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-3 text-balance">
                  Not sure where you are in the process?
                </h2>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-pretty">
                  Tell us what you’re dealing with, and we’ll tell you honestly whether we can help.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2.5 min-h-[48px] bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm sm:text-base px-8 py-4 rounded-lg transition-colors shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <span>Send us your requirement</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MotionConfig>
  )
}
