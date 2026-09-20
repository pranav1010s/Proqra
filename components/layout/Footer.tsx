import Link from 'next/link'
import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white pt-16 pb-12 px-5 sm:px-8 lg:px-12 text-slate-600 3xl:pt-24 3xl:pb-18 3xl:px-28 4xl:pt-28 4xl:pb-20 4xl:px-36">
      <div className="max-w-[1440px] mx-auto 3xl:max-w-[1900px] 4xl:max-w-[2200px]">
        {/* Top Info & Links Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 pb-12 border-b border-slate-100 3xl:gap-16 3xl:mb-20 3xl:pb-16 4xl:gap-20 4xl:mb-24 4xl:pb-20">
          <div className="md:col-span-6 flex flex-col gap-3 3xl:gap-4">
            <Link href="/" className="font-black text-xl tracking-tighter text-slate-900 uppercase select-none flex items-center gap-2 3xl:text-2xl 4xl:text-3xl">
              PROQRA
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600 3xl:w-2.5 3xl:h-2.5"></span>
            </Link>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed 3xl:text-base 4xl:text-lg">
              Sourcing fabricated metalwork from India for UK manufacturers.
            </p>
            <p className="text-sm font-semibold text-slate-900 mt-1 3xl:text-base 4xl:text-lg">
              <a href="mailto:hello@proqra.co.uk" className="hover:text-blue-600 transition-colors">
                hello@proqra.co.uk
              </a>
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.25em] mb-4 3xl:text-xs 3xl:mb-5">Navigation</p>
            <div className="flex flex-col gap-2.5 3xl:gap-3 4xl:gap-4">
              <Link href="/how-we-source" className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors 3xl:text-base 4xl:text-lg">How We Source</Link>
              <Link href="/quality" className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors 3xl:text-base 4xl:text-lg">Quality & Inspection</Link>
              <Link href="/capabilities" className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors 3xl:text-base 4xl:text-lg">Capabilities</Link>
              <Link href="/about" className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors 3xl:text-base 4xl:text-lg">About</Link>
              <Link href="/get-started" className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors 3xl:text-base 4xl:text-lg">Request a Quote</Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.25em] mb-4 3xl:text-xs 3xl:mb-5">Connect</p>
            <div className="flex items-center gap-3 3xl:gap-4">
              <a
                href="https://www.linkedin.com/company/proqra/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 hover:text-white hover:bg-blue-600 border border-slate-200/80 hover:border-blue-600 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md hover:shadow-blue-500/20 3xl:w-11 3xl:h-11 4xl:w-12 4xl:h-12"
                aria-label="Proqra LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/Proqra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 hover:text-white hover:bg-slate-900 border border-slate-200/80 hover:border-slate-900 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md hover:shadow-slate-900/20 3xl:w-11 3xl:h-11 4xl:w-12 4xl:h-12"
                aria-label="Proqra X / Twitter"
              >
                <svg className="w-4 h-4 fill-current 3xl:w-5 3xl:h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row: Wordmark and Legal details */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-[clamp(2.5rem,8vw,5.5rem)] font-black tracking-tighter text-slate-200/70 leading-none select-none uppercase 3xl:text-[7rem] 4xl:text-[8.5rem]">
              proqra
            </p>
            <p className="text-xs text-slate-400 font-medium 3xl:text-sm 4xl:text-base">
              Registered in England and Wales.
            </p>
          </div>
          <p className="text-slate-400 text-xs font-medium 3xl:text-sm 4xl:text-base">
            © 2026 PROQRA
          </p>
        </div>
      </div>
    </footer>
  )
}
