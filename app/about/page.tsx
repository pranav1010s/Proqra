import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import StageTimeline from '@/components/shared/StageTimeline'
import { ArrowRight, User } from 'lucide-react'

// Set founder's name here when ready (e.g. 'Sanju') so intro reads "I'm <Name>, the founder."
const FOUNDER_NAME = ''

export const metadata: Metadata = {
  title: 'About | PROQRA',
  description:
    'PROQRA is a small Portsmouth company building a platform to take the manual work out of direct procurement.',
  openGraph: {
    title: 'About | PROQRA',
    description:
      'PROQRA is a small Portsmouth company building a platform to take the manual work out of direct procurement.',
    type: 'website',
  },
}

export default function AboutPage() {
  const founderOpening = FOUNDER_NAME
    ? `I’m ${FOUNDER_NAME}, the founder.`
    : 'I’m the founder.'

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />

      {/* Top Section: 2 columns (Heading + Intro on left, Founder portrait frame on right) */}
      <section className="pt-28 sm:pt-36 pb-14 sm:pb-18 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-5 text-balance">
                About PROQRA
              </h1>
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed text-pretty max-w-2xl">
                A small company building a platform to take the manual work out of direct procurement.
              </p>
            </div>

            <div className="lg:col-span-5 flex lg:justify-end">
              {/* Founder photo slot — replace interior with <Image src="/images/founder.jpg" ... /> when photo is ready */}
              <div
                aria-label="Founder portrait slot"
                className="w-full max-w-[320px] aspect-[4/5] rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col items-center justify-center gap-3 text-slate-400 shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center">
                  <User size={28} strokeWidth={1.6} aria-hidden="true" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Founder portrait
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Story Section: Letter-style typography (~650px column, no cards) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
          <div className="max-w-[650px] space-y-12 text-base sm:text-lg text-slate-700 leading-relaxed">
            {/* Why I started this */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Why I started this
              </h2>
              <p>
                {founderOpening} I’m originally from India and now based in Portsmouth.
              </p>
              <p>
                I spent a year in supplier development and quality at a large industrial manufacturer. What stayed with me was how much time went on documents, chasing suppliers and fixing data that didn’t match. Almost none of it was about the real decisions.
              </p>
              {/* Note for founder: add 1-2 sentences here about a specific moment or project from that year (without naming the employer if you prefer not to). */}
              <p>
                I think most of that work can be automated. I also think nobody can build the right tool without doing the work first.
              </p>
            </div>

            {/* Pull-quote */}
            <blockquote className="border-l-2 border-blue-600 pl-6 py-2">
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug">
                “Most of that work can be automated.”
              </p>
            </blockquote>

            {/* Why we do it by hand first */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Why we do it by hand first
              </h2>
              <p>
                So we work with a small number of UK manufacturers on real supplier tasks. We do them manually, write down what takes the time and build from what we learn. It means you get paid-for, hands-on help while the product takes shape. It also means we build from real work, not guesses.
              </p>
            </div>

            {/* Where we are */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Where we are
              </h2>
              <p>
                PROQRA started in 2026. It’s me, contacts in India for site visits and independent partners for inspection, testing and freight. Most of the work is still manual. I’d rather say that plainly than pretend we’re bigger.
              </p>
            </div>
          </div>

          {/* Same 3-step timeline as Platform page */}
          <div className="max-w-4xl my-10 sm:my-12">
            <StageTimeline compact />
          </div>

          <div className="max-w-[650px] space-y-12 text-base sm:text-lg text-slate-700 leading-relaxed">
            {/* How I work */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                How I work
              </h2>
              <p>
                I’ll tell you honestly if we can’t help. You’ll know the price before we start. If something goes wrong with a supplier, you’ll hear it from us first.
              </p>
            </div>

            {/* At a glance box */}
            <div className="border-t border-b border-slate-200 py-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-slate-900">
              <span>Portsmouth</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Founded 2026</span>
              {/* · Company no. [when registered] */}
            </div>
          </div>
        </div>
      </section>

      {/* Closing Dark Navy Band */}
      <section className="pb-20 sm:pb-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
                Got a supplier problem? I read every message myself.
              </h2>
            </div>

            <div className="shrink-0">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2.5 min-h-[48px] bg-white hover:bg-blue-50 text-slate-900 font-semibold text-sm sm:text-base px-8 py-3.5 rounded transition-colors shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              >
                <span>Become an early partner</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
