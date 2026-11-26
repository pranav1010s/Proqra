import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Talk to Us | PROQRA',
  description:
    'Share a direct procurement task, supplier approval requirement, or drawing with PROQRA. Direct UK contact with a reply within one working day.',
  openGraph: {
    title: 'Talk to Us | PROQRA',
    description:
      'Share a direct procurement task, supplier approval requirement, or drawing with PROQRA. Direct UK contact with a reply within one working day.',
    type: 'website',
  },
}

const nextSteps = [
  {
    number: '01',
    text: 'We review your message and reply within one working day.',
  },
  {
    number: '02',
    text: 'A short call to agree the scope and a fixed price before we start.',
  },
  {
    number: '03',
    text: 'We handle the supplier work by hand and keep you updated throughout.',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />

      <main>
        <section className="pt-28 sm:pt-36 pb-10 sm:pb-12 border-b border-slate-200 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-4 text-balance">
                Talk to us
              </h1>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-pretty">
                Tell us the supplier task taking up your team’s time. We work directly with UK manufacturers on real procurement work, starting with sourcing from India.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-5">
                    What happens next
                  </h2>
                  <ol className="space-y-4">
                    {nextSteps.map((step) => (
                      <li key={step.number} className="flex items-start gap-3.5">
                        <span className="text-xs font-mono font-bold text-blue-600 pt-1 shrink-0">
                          {step.number}
                        </span>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                          {step.text}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="pt-8 border-t border-slate-200 space-y-4">
                  <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
                    Direct contact
                  </h2>

                  <ul className="space-y-2.5 text-sm sm:text-base">
                    <li>
                      <a
                        href="mailto:Pranav@proqra.co.uk"
                        className="min-h-[44px] sm:min-h-0 inline-flex items-center gap-3 font-medium text-slate-900 hover:text-blue-600 transition-colors rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        <Mail size={16} className="text-slate-600 shrink-0" aria-hidden="true" />
                        <span>Pranav@proqra.co.uk</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+447436968414"
                        className="min-h-[44px] sm:min-h-0 inline-flex items-center gap-3 font-medium text-slate-900 hover:text-blue-600 transition-colors rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        <Phone size={16} className="text-slate-600 shrink-0" aria-hidden="true" />
                        <span>+44 7436 968414</span>
                      </a>
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 pt-1">
                      <MapPin size={16} className="text-slate-600 shrink-0" aria-hidden="true" />
                      <span>Portsmouth, UK</span>
                    </li>
                  </ul>

                  <p className="pt-2 text-xs text-slate-600 leading-relaxed">
                    NDA available on request before you share any drawings or specifications.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7">
                <Suspense fallback={<div className="min-h-[380px]" />}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
