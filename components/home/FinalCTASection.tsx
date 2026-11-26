import Link from 'next/link'

export default function FinalCTASection() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-28 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight text-balance">
                Who’s behind this
              </h2>

              <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-6 sm:p-7">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-pretty">
                  We’re a new company, built after working in purchasing and seeing first-hand how much time is lost to manual document checks, supplier chasing and spreadsheet admin in direct procurement. We’re building software to automate that repetitive work, starting by doing it alongside UK manufacturers.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <span>
                Email{' '}
                <a
                  href="mailto:Pranav@proqra.co.uk"
                  className="text-slate-900 font-semibold underline underline-offset-4 hover:text-blue-600 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Pranav@proqra.co.uk
                </a>
              </span>
              <span>
                Call{' '}
                <a
                  href="tel:+447436968414"
                  className="text-slate-900 font-semibold underline underline-offset-4 hover:text-blue-600 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  +44 7436 968414
                </a>
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-900 text-white rounded-xl p-8 sm:p-10 lg:p-12 flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white text-balance">
                Got a supplier task eating your team’s time?
              </h3>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-pretty">
                Send us a short note or attach a drawing. We’ll reply within one working day, agree a fixed price before starting, and sign an NDA on request.
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[48px] bg-white hover:bg-blue-50 text-slate-900 font-semibold text-sm sm:text-base px-8 py-3.5 rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
