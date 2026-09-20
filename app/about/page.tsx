import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Why PROQRA Exists | PROQRA',
  description:
    'Closing the overseas sourcing and quality assurance gap for UK engineering and manufacturing SMEs.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 sm:pt-40 pb-20 px-5 sm:px-8 lg:px-12 border-b border-slate-200 3xl:pt-52 3xl:pb-28 3xl:px-28 4xl:pt-60 4xl:pb-36 4xl:px-36">
        <div className="max-w-4xl mx-auto 3xl:max-w-5xl 4xl:max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3 3xl:text-sm 4xl:text-base">
            About PROQRA
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-8 3xl:text-6xl 3xl:mb-10 4xl:text-7xl 4xl:mb-14">
            Why PROQRA <span className="text-blue-600 font-normal italic-accent">exists.</span>
          </h1>

          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed 3xl:space-y-8 3xl:text-xl 4xl:space-y-10 4xl:text-2xl">
            <p>
              Most UK manufacturers who buy fabricated metalwork face the same choice: pay a premium to a UK supplier for the certainty of a phone call and a site visit, or try an overseas supplier and hope the certificate is real and the weld is right.
            </p>

            <p>
              Large manufacturers solve this with entire procurement functions dedicated to managing overseas supply — supplier audits, resident quality engineers, documented approval processes. Smaller manufacturers buy the same kinds of parts and carry the same risks, without the resources to manage them the same way.
            </p>

            <div className="border-l-2 border-slate-900 pl-5 py-1 3xl:pl-7 4xl:pl-8">
              <p className="font-medium text-slate-900">
                PROQRA is built to close that gap for smaller manufacturers specifically. The model is simple: no supplier is used until they've been checked in person, no order ships until it's been inspected against your drawing, and no risk is quietly passed on to you without you knowing about it first.
              </p>
            </div>

            <p className="text-sm text-slate-600 3xl:text-base 4xl:text-lg">
              This is a young company. Rather than dress that up, the approach is to be direct about what's true today, what's being built, and what we'd rather tell you honestly than oversell. As the supplier network and the team behind it grow, this page will grow with it.
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200 flex items-center gap-4 3xl:mt-14 3xl:pt-8 3xl:gap-6 4xl:mt-18 4xl:pt-10">
            <Link
              href="/get-started"
              className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-6 py-3 rounded transition-colors 3xl:text-base 3xl:px-8 3xl:py-4 4xl:text-lg 4xl:px-10 4xl:py-5"
            >
              Request a Quote
            </Link>
            <Link
              href="/how-we-source"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 underline 3xl:text-base 4xl:text-lg"
            >
              How we vet suppliers →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
