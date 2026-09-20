import Link from 'next/link'

export default function ClosingCTA() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4 text-balance">
          Start with one part, not your whole supply chain.
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed text-balance">
          The sensible way to test an overseas supplier is a single low-risk part in a modest quantity. Send us a drawing and we will tell you honestly whether it suits Indian fabrication.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/get-started"
            id="closing-cta-btn"
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-6 py-3 rounded transition-colors"
          >
            Request a Quote
          </Link>
          <a
            href="mailto:hello@proqra.co.uk"
            className="w-full sm:w-auto text-slate-700 hover:text-slate-900 border border-slate-300 font-medium text-sm px-6 py-3 rounded transition-colors"
          >
            hello@proqra.co.uk
          </a>
        </div>
      </div>
    </section>
  )
}
