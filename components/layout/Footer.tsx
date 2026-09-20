import Link from 'next/link'
import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white pt-16 pb-12 px-6 sm:px-12 md:px-16 lg:px-24 text-slate-600">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Info & Links Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 pb-12 border-b border-slate-100">
          <div className="md:col-span-6 flex flex-col gap-3">
            <Link href="/" className="font-black text-xl tracking-tighter text-slate-900 uppercase select-none flex items-center gap-2">
              PROQRA
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600"></span>
            </Link>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              Sourcing fabricated metalwork from India for UK manufacturers.
            </p>
            <p className="text-sm font-semibold text-slate-900 mt-1">
              <a href="mailto:hello@proqra.co.uk" className="hover:text-blue-600 transition-colors">
                hello@proqra.co.uk
              </a>
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.25em] mb-4">Navigation</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/how-we-source" className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors">How We Source</Link>
              <Link href="/quality" className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors">Quality & Inspection</Link>
              <Link href="/capabilities" className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors">Capabilities</Link>
              <Link href="/about" className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors">About</Link>
              <Link href="/get-started" className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors">Request a Quote</Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.25em] mb-4">Connect</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/proqra/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 hover:text-white hover:bg-blue-600 border border-slate-200/80 hover:border-blue-600 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md hover:shadow-blue-500/20"
                aria-label="Proqra LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/Proqra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 hover:text-white hover:bg-slate-900 border border-slate-200/80 hover:border-slate-900 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md hover:shadow-slate-900/20"
                aria-label="Proqra X / Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row: Wordmark and Legal details */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-[clamp(2.5rem,8vw,5.5rem)] font-black tracking-tighter text-slate-200/70 leading-none select-none uppercase">
              proqra
            </p>
            <p className="text-xs text-slate-400 font-medium">
              Registered in England and Wales. [Company number once registered]
            </p>
          </div>
          <p className="text-slate-400 text-xs font-medium">
            © 2026 PROQRA
          </p>
        </div>
      </div>
    </footer>
  )
}
