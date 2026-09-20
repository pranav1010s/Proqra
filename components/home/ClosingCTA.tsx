import Link from 'next/link'

export default function ClosingCTA() {
  return (
    <section className="bg-white py-16 sm:py-24 3xl:py-36 4xl:py-44">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 text-center 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4 text-balance 3xl:text-5xl 3xl:mb-6 4xl:text-6xl 4xl:mb-8">
          Start with one part, not your whole supply chain.
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed text-balance 3xl:text-xl 3xl:max-w-3xl 3xl:mb-10 4xl:text-2xl 4xl:max-w-4xl 4xl:mb-12">
          The sensible way to test an overseas supplier is a single low-risk part in a modest quantity. Send us a drawing and we will tell you honestly whether it suits Indian fabrication.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 3xl:gap-5">
          <Link
            href="/get-started"
            id="closing-cta-btn"
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-6 py-3 rounded transition-colors 3xl:text-base 3xl:px-8 3xl:py-4 4xl:text-lg 4xl:px-10 4xl:py-5"
          >
            Request a Quote
          </Link>
          <a
            href="mailto:hello@proqra.co.uk"
            className="w-full sm:w-auto text-slate-700 hover:text-slate-900 border border-slate-300 font-medium text-sm px-6 py-3 rounded transition-colors 3xl:text-base 3xl:px-8 3xl:py-4 4xl:text-lg 4xl:px-10 4xl:py-5"
          >
            hello@proqra.co.uk
          </a>
        </div>
      </div>
    </section>
  )
}
