import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] pt-14 pb-10 px-5">
      <div className="max-w-[1200px] mx-auto">
        {/* Links row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-20">
          <div>
            <p className="text-[10px] text-white/20 uppercase tracking-[0.25em] mb-3">Company</p>
            <div className="flex gap-6">
              <a href="#services" className="text-[13px] text-white/30 hover:text-white transition-colors duration-300">Services</a>
              <Link href="/get-started" className="text-[13px] text-white/30 hover:text-white transition-colors duration-300">Get started</Link>
            </div>
          </div>
          <div>
            <p className="text-[10px] text-white/20 uppercase tracking-[0.25em] mb-3">Contact</p>
            <a href="mailto:hello@proqra.com" className="text-[13px] text-white/30 hover:text-white transition-colors duration-300">
              hello@proqra.com
            </a>
          </div>
        </div>

        {/* Big wordmark */}
        <div className="border-t border-white/[0.04] pt-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <p className="text-[clamp(3rem,10vw,7rem)] font-black tracking-tighter text-white/[0.05] leading-none select-none uppercase">
            proqra
          </p>
          <p className="text-white/15 text-xs pb-2">
            © {new Date().getFullYear()} proqra
          </p>
        </div>
      </div>
    </footer>
  )
}
