import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import StageTimeline from '@/components/shared/StageTimeline'

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
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />

      <main>
        <section className="pt-28 sm:pt-36 pb-14 sm:pb-16 border-b border-slate-200">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              <div className="lg:col-span-7">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-5 text-balance">
                  About PROQRA
                </h1>
                <p className="text-lg sm:text-xl text-slate-700 leading-relaxed text-pretty max-w-2xl">
                  A small company building a platform to take the manual work out of direct procurement.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-7 grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">
                      Location
                    </p>
                    <p className="text-base sm:text-lg font-bold text-slate-900">
                      Portsmouth, UK
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">
                      Founded
                    </p>
                    <p className="text-base sm:text-lg font-bold text-slate-900">
                      2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-slate-200 pb-14 sm:pb-16">
              <div className="lg:col-span-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  Our mission
                </h2>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-base sm:text-lg text-slate-700 leading-relaxed">
                <p className="md:col-span-2 text-lg sm:text-xl text-slate-900 font-medium leading-relaxed">
                  Our mission is to take the manual admin out of direct procurement so buyers and supply chain teams can spend their time on the decisions that matter.
                </p>
                <p>
                  We’re working on a problem we’ve personally seen in the industry. Having worked in purchasing, supplier development and quality, we saw first-hand how much time and productivity went on documents, chasing suppliers and fixing data that didn’t match, when almost none of it was about the real decisions.
                </p>
                <p>
                  We believe most of that repetitive procurement task work can be automated, and that nobody can build the right system without doing the work first.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-slate-200 py-14 sm:py-16">
              <div className="lg:col-span-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  Why we do it by hand first
                </h2>
              </div>
              <div className="lg:col-span-8 text-base sm:text-lg text-slate-700 leading-relaxed">
                <p>
                  So we work with a small number of UK manufacturers on real supplier tasks. We do them manually, write down what takes the time and build from what we learn. It means you get paid-for, hands-on help while the product takes shape. It also means we build from real work, not guesses.
                </p>
              </div>
            </div>

            <div className="py-14 sm:py-16 space-y-12 sm:space-y-14">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-7 sm:p-9 space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                    Where we are
                  </h2>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    PROQRA started in 2026 in Portsmouth. We work with our contacts on the ground in India for site visits and independent partners for inspection, testing and freight. Most of the work is still manual. We’d rather say that plainly than pretend we’re bigger.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-7 sm:p-9 space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                    How we work
                  </h2>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    We’ll tell you honestly if we can’t help. You’ll know the price before we start. If something goes wrong with a supplier, you’ll hear it from us first.
                  </p>
                </div>
              </div>

              <StageTimeline />
            </div>
          </div>
        </section>

        <section className="pb-20 sm:pb-28 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <div className="bg-slate-900 text-white rounded-xl p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
                  Got a supplier problem? We read every message that comes in.
                </h2>
              </div>

              <div className="shrink-0">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center min-h-[48px] bg-white hover:bg-blue-50 text-slate-900 font-semibold text-sm sm:text-base px-8 py-3.5 rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  Become an early partner
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
