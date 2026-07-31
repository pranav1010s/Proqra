import Link from 'next/link'
import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white pt-14 pb-10 px-6 sm:px-12 md:px-16 lg:px-24 text-slate-600">
      <div className="max-w-[1440px] mx-auto">
        {/* Links row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-16">
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.25em] mb-3">Company</p>
            <div className="flex gap-6">
              <Link href="/capabilities" className="text-[13px] text-slate-600 hover:text-slate-900 font-medium transition-colors duration-300">Capabilities</Link>
              <a href="/#services" className="text-[13px] text-slate-600 hover:text-slate-900 font-medium transition-colors duration-300">Services</a>
              <Link href="/get-started" className="text-[13px] text-slate-600 hover:text-slate-900 font-medium transition-colors duration-300">Get started</Link>
            </div>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.25em] mb-3">Contact</p>
            <a href="mailto:hello@proqra.co.uk" className="text-[13px] text-slate-600 hover:text-slate-900 font-medium transition-colors duration-300">
              hello@proqra.co.uk
            </a>
          </div>
        </div>

        {/* Big wordmark */}
        <div className="border-t border-slate-100 pt-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <p className="text-[clamp(3rem,10vw,7rem)] font-black tracking-tighter text-slate-200/70 leading-none select-none uppercase">
              proqra
            </p>
            <div className="flex items-center gap-3 mt-1">
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
          <p className="text-slate-400 text-xs pb-2 font-medium">
            © {new Date().getFullYear()} proqra
          </p>
        </div>
      </div>
    </footer>
  )
}
