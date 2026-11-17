import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SupplierNetworkForm from './SupplierNetworkForm'
import { CheckCircle2, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Supplier Network | PROQRA',
  description:
    'Join PROQRA’s network of Indian manufacturers and get introduced to UK manufacturers as requirements come in.',
  openGraph: {
    title: 'Supplier Network | PROQRA',
    description:
      'Join PROQRA’s network of Indian manufacturers and get introduced to UK manufacturers as requirements come in.',
    type: 'website',
  },
}

const buyerRequirements = [
  'ISO 9001 certification, or a clear plan to work to it',
  'Material test certificates with each batch',
  'Calibration records for measuring equipment',
  'Photos, video and a live walkthrough on request',
  'Quick, honest answers',
]

const nextSteps = [
  {
    number: '1',
    text: 'You submit your profile.',
  },
  {
    number: '2',
    text: 'We review your documents.',
  },
  {
    number: '3',
    text: 'We may ask for photos or a short video call.',
  },
  {
    number: '4',
    text: 'We introduce you when a requirement matches.',
  },
]

export default function SupplierNetworkPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />

      {/* Top Section */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 border-b border-slate-200 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
          <div className="max-w-3xl mb-8 sm:mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-4 text-balance">
              Supplier network
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed text-pretty">
              For Indian manufacturers: submit your profile and we’ll introduce you to UK manufacturers when a requirement matches.
            </p>
          </div>

          {/* Pale blue box: What to know first */}
          <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-6 sm:p-8 max-w-4xl">
            <div className="flex items-start gap-3.5">
              <Info size={20} className="text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                  What to know first
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-pretty">
                  There’s no fee to register. We can’t promise orders. Introductions depend on what our UK partners need, and we only share drawings with suppliers who’ve agreed to keep them confidential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Section: What UK buyers usually ask for + What happens next */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36 space-y-12">
          {/* What UK buyers usually ask for (2-column checklist with ticks) */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-5">
              What UK buyers usually ask for
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 max-w-4xl">
              {buyerRequirements.map((item) => (
                <li
                  key={item}
                  className="bg-white border border-slate-200/90 rounded-xl p-4 sm:p-5 flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm sm:text-base text-slate-800 font-medium leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* What happens next (4 steps in a row) */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-5">
              What happens next
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
              {nextSteps.map((step) => (
                <div
                  key={step.number}
                  className="bg-white border border-slate-200/90 rounded-xl p-5 flex items-start gap-3"
                >
                  <span className="text-xs font-mono font-bold text-blue-600 pt-0.5 shrink-0">
                    0{step.number}
                  </span>
                  <p className="text-sm font-semibold text-slate-800 leading-snug">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
              Register your company
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Fill in the essentials below. Optional fields help us match you faster when a requirement fits your plant.
            </p>
          </div>

          <SupplierNetworkForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}

