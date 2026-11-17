'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, MotionConfig } from 'framer-motion'
import { ArrowRight, FileCheck2, Clock, Table2, Eye, CheckCircle2 } from 'lucide-react'
import StageTimeline from '@/components/shared/StageTimeline'

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1]

const flowSteps = [
  { label: 'Request', highlighted: false },
  { label: 'Documents', highlighted: true },
  { label: 'Chasing', highlighted: true },
  { label: 'Approval', highlighted: false },
  { label: 'Follow-up', highlighted: true },
]

const problemCards = [
  {
    title: 'Documents',
    description: 'Collecting, checking and filing certificates and reports from suppliers.',
    Icon: FileCheck2,
  },
  {
    title: 'Chasing',
    description: 'Following up open orders, missing paperwork and late replies.',
    Icon: Clock,
  },
  {
    title: 'Data',
    description: 'Supplier details in several spreadsheets that never match.',
    Icon: Table2,
  },
  {
    title: 'Visibility',
    description: 'No single place to see where each supplier or order stands.',
    Icon: Eye,
  },
]

const platformCapabilities = [
  {
    number: '01',
    title: 'Supplier onboarding',
    description: 'One request out, all documents back, in one place.',
  },
  {
    number: '02',
    title: 'Document tracking and checks',
    description:
      'What’s received, what’s missing, what’s about to expire, and what needs a person to look at.',
  },
  {
    number: '03',
    title: 'Automatic chasing',
    description: 'Reminders sent for you, and flagged if ignored.',
  },
  {
    number: '04',
    title: 'Supplier records and scorecards',
    description: 'Consistent data and a simple view of performance.',
  },
  {
    number: '05',
    title: 'One view',
    description: 'The status of every supplier and order.',
  },
]

export default function PlatformContent() {
  const [notifyEmail, setNotifyEmail] = useState('')
  const [notifyLoading, setNotifyLoading] = useState(false)
  const [notifyDone, setNotifyDone] = useState(false)
  const [notifyError, setNotifyError] = useState('')

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!notifyEmail.trim()) return

    setNotifyLoading(true)
    setNotifyError('')

    try {
      const res = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Platform Update Subscriber',
          email: notifyEmail.trim(),
          requirement: 'Requested platform progress updates via /platform.',
          source: 'Platform Page - Notify Me',
        }),
      })

      const data = await res.json().catch(() => null)
      if (res.ok && data?.success) {
        setNotifyDone(true)
        setNotifyEmail('')
      } else {
        setNotifyError(data?.error || 'Could not subscribe. Please try again or email hello@proqra.co.uk.')
      }
    } catch {
      setNotifyError('Network error. Please try again or email hello@proqra.co.uk.')
    } finally {
      setNotifyLoading(false)
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative bg-white">
        {/* Top Section (2 columns: Intro + Workflow Diagram) */}
        <section className="pt-28 sm:pt-36 pb-14 sm:pb-20 border-b border-slate-200">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                className="lg:col-span-6"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-5 text-balance">
                  What we’re building
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed text-pretty max-w-2xl">
                  We’re building a system that automates the repetitive tasks in direct procurement, with quality kept front and centre, so buyers and supply chain teams can spend their time on the decisions that matter. It’s early. This page tells you where we are.
                </p>
              </motion.div>

              {/* Flow Diagram */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08, ease: EASE_OUT_EXPO }}
                className="lg:col-span-6"
              >
                <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                      The procurement workflow
                    </span>
                    <span className="text-xs font-medium text-orange-800">
                      Highlighted steps show where time is lost today
                    </span>
                  </div>

                  <div
                    role="list"
                    aria-label="Direct procurement steps highlighting manual bottlenecks"
                    className="flex flex-wrap sm:flex-nowrap items-center gap-2"
                  >
                    {flowSteps.map((step, index) => (
                      <div key={step.label} role="listitem" className="flex items-center gap-2 flex-1 min-w-[100px] sm:min-w-0">
                        <div
                          className={`w-full rounded-xl px-3 py-3.5 text-center border text-xs sm:text-sm font-semibold transition-colors ${
                            step.highlighted
                              ? 'bg-orange-50 border-orange-200 text-orange-900 shadow-sm'
                              : 'bg-white border-slate-200 text-slate-800'
                          }`}
                        >
                          {step.label}
                        </div>
                        {index < flowSteps.length - 1 && (
                          <ArrowRight
                            size={14}
                            className="text-slate-400 shrink-0 hidden sm:block"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The problem (4 small cards in a single row) */}
        <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-8 sm:mb-10">
              The problem
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {problemCards.map(({ title, description, Icon }, idx) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.05, ease: EASE_OUT_EXPO }}
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-4">
                    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed text-pretty">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What the platform will do (Single-column numbered list + fading right-side warehouse image) */}
        <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200 overflow-hidden">
          <div
            aria-hidden="true"
            className="hidden md:block absolute inset-y-0 right-0 w-full lg:w-[68%] xl:w-[64%] h-full overflow-hidden pointer-events-none select-none z-0"
            style={{
              maskImage:
                'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 18%, rgba(0,0,0,0.35) 42%, rgba(0,0,0,0.85) 70%, black 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 18%, rgba(0,0,0,0.35) 42%, rgba(0,0,0,0.85) 70%, black 100%)',
            }}
          >
            <Image
              src="/images/platform_warehouse.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 68vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white via-white/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/50 to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-8 sm:mb-10">
                What the platform will do
              </h2>

              <ol className="divide-y divide-slate-200 border-y border-slate-200">
                {platformCapabilities.map((item) => (
                  <li key={item.number} className="py-6 sm:py-7 flex items-start gap-5 sm:gap-7">
                    <span className="text-xs sm:text-sm font-mono font-bold text-blue-600 pt-1 shrink-0">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-pretty">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Quality stays with people + A growing supplier database */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-9 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-3">
                  Quality stays with people
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-pretty">
                  Automation handles the chasing, filing and reminders. It doesn’t decide whether a supplier is good enough. Checks that need judgement stay with people: your team, our reviewers and, where it matters, independent inspectors. The system makes sure those checks happen sooner and with the full picture.
                </p>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-9 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-3">
                  A growing supplier database
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-pretty">
                  Every supplier we work with adds to a database of vetted suppliers: documents, certificates, response times and quality history, each marked with who checked it and when. Over time that helps buyers find suppliers with a track record and spot where a supplier needs support to improve. We only record what we’ve checked, and one client’s information is never shown to another.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Where we are + Early prototype slot */}
        <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36 space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-8 sm:mb-10">
                Where we are
              </h2>
              <StageTimeline />
            </div>

            <p className="text-sm font-medium text-slate-600">
              Early prototype: not ready yet. Early partners see it first.
            </p>
            {/*
              Prototype screenshot container: uncomment when a real screenshot is ready:
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                ...
              </div>
            */}
          </div>
        </section>

        {/* How we’re learning */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                How we’re learning
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-pretty">
                Every early partner task gets written up: what was needed, how long each part took, what went wrong. The tasks that repeat across partners are the ones we build first.
              </p>
            </div>

            {/*
              What we've learned: enable when 2 to 3 real findings exist from early partner work.
              <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">What we’ve learned</h3>
                <ul className="space-y-3 text-sm sm:text-base text-slate-700">
                  <li>Finding 1...</li>
                  <li>Finding 2...</li>
                </ul>
              </div>
            */}
          </div>
        </section>

        {/* Help shape it (Dark navy closing band) */}
        <section className="pt-4 pb-20 sm:pb-28 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
              className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
                    Help shape it
                  </h2>
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-pretty">
                    Join as an early partner, or leave your email and we’ll send an update when something new is ready.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center gap-2 min-h-[48px] bg-white hover:bg-blue-50 text-slate-900 font-semibold text-sm sm:text-base px-7 py-3 rounded transition-colors shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                    >
                      <span>Become an early partner</span>
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  {notifyDone ? (
                    <div
                      role="status"
                      aria-live="polite"
                      className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 flex items-start gap-3"
                    >
                      <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <p className="text-sm sm:text-base font-semibold text-white">
                          You’re on the list. We’ll send an update when something new is ready.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleNotifySubmit}
                      className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-5 sm:p-6 space-y-3"
                    >
                      <label htmlFor="platform-notify-email" className="block text-sm font-medium text-slate-200">
                        Get platform progress updates
                      </label>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <input
                          id="platform-notify-email"
                          type="email"
                          required
                          value={notifyEmail}
                          onChange={(e) => setNotifyEmail(e.target.value)}
                          placeholder="Work email"
                          autoComplete="email"
                          className="flex-1 min-h-[48px] bg-slate-900 border border-slate-600 rounded px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:border-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
                        />
                        <button
                          type="submit"
                          disabled={notifyLoading}
                          className="min-h-[48px] bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-6 py-2.5 rounded transition-colors disabled:opacity-50 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                        >
                          {notifyLoading ? 'Saving...' : 'Notify me'}
                        </button>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        We’ll only email you about PROQRA updates. Unsubscribe any time.
                      </p>
                      {notifyError && (
                        <p role="alert" className="text-xs text-red-300">
                          {notifyError}
                        </p>
                      )}
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MotionConfig>
  )
}

