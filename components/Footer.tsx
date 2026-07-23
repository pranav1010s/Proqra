import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white pt-14 pb-10 px-5 text-slate-600">
      <div className="max-w-[1200px] mx-auto">
        {/* Links row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-16">
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.25em] mb-3">Company</p>
            <div className="flex gap-6">
              <a href="#services" className="text-[13px] text-slate-600 hover:text-slate-900 font-medium transition-colors duration-300">Services</a>
              <Link href="/get-started" className="text-[13px] text-slate-600 hover:text-slate-900 font-medium transition-colors duration-300">Get started</Link>
            </div>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.25em] mb-3">Contact</p>
            <a href="mailto:hello@proqra.com" className="text-[13px] text-slate-600 hover:text-slate-900 font-medium transition-colors duration-300">
              hello@proqra.com
            </a>
          </div>
        </div>

        {/* Big wordmark */}
        <div className="border-t border-slate-100 pt-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <p className="text-[clamp(3rem,10vw,7rem)] font-black tracking-tighter text-slate-200/70 leading-none select-none uppercase">
            proqra
          </p>
          <p className="text-slate-400 text-xs pb-2 font-medium">
            © {new Date().getFullYear()} proqra
          </p>
        </div>
      </div>
    </footer>
  )
}

