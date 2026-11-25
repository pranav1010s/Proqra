'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncPlayback = () => {
      if (mediaQuery.matches) {
        video.pause()
      } else {
        video.play().catch(() => {})
      }
    }

    syncPlayback()
    mediaQuery.addEventListener('change', syncPlayback)
    return () => mediaQuery.removeEventListener('change', syncPlayback)
  }, [])

  return (
    <section className="relative bg-white min-h-[100dvh] lg:h-[100dvh] lg:max-h-[100dvh] flex flex-col justify-center pt-24 pb-12 sm:pt-28 sm:pb-14 border-b border-slate-200 overflow-hidden">
      {/* Crisp Machining Video Blended with Layout - Full height to bottom edge */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-full lg:w-[60%] xl:w-[56%] h-full overflow-hidden pointer-events-none select-none z-0"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 12%, rgba(0,0,0,0.6) 30%, black 48%, black 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 12%, rgba(0,0,0,0.6) 30%, black 48%, black 100%)',
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center"
        >
          <source src="/videos/cnc_lathe.webm" type="video/webm" />
        </video>
      </div>

      {/* Soft ambient wash behind text on the left */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-full lg:w-[72%] h-full pointer-events-none select-none z-0"
        style={{
          background:
            'radial-gradient(ellipse 95% 80% at 15% 35%, rgba(219, 234, 254, 0.75) 0%, rgba(224, 238, 255, 0.45) 35%, rgba(239, 246, 255, 0.15) 60%, transparent 85%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-full lg:w-[65%] h-full pointer-events-none select-none z-0"
        style={{
          background:
            'linear-gradient(105deg, rgba(219, 234, 254, 0.5) 0%, rgba(239, 246, 255, 0.3) 35%, transparent 72%)',
        }}
      />

      <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08] max-w-2xl text-balance 3xl:text-7xl 4xl:text-8xl">
              Taking the manual work out of{' '}
              <span className="text-blue-600">direct procurement.</span>
            </h1>

            <p className="mt-6 sm:mt-7 max-w-xl text-slate-700 text-base sm:text-lg leading-relaxed text-pretty 3xl:text-xl 3xl:max-w-2xl">
              Buyers and supply chain teams lose hours to documents, supplier chasing and inconsistent data. We’re building a platform to take most of that on. We’re early, so we’re learning the work by doing it alongside UK manufacturers.
            </p>

            <p className="mt-3 max-w-xl text-slate-900 font-semibold text-base sm:text-lg leading-relaxed text-pretty 3xl:text-xl 3xl:max-w-2xl">
              We’re starting with UK manufacturers who buy from India.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#contact"
                id="hero-early-partner"
                className="inline-flex items-center justify-center min-h-[48px] bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded transition-colors text-center shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Become an early partner
              </Link>
              <Link
                href="#what-were-building"
                id="hero-what-were-building"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] bg-white border border-slate-300 hover:border-slate-900 text-slate-700 hover:text-slate-900 font-medium text-sm sm:text-base px-8 py-3.5 rounded transition-colors text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <span>What we’re building</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            {/* Three short lines */}
            <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-left">
              <p className="text-xs sm:text-sm font-semibold text-slate-800">
                Documents & approvals.
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-800">
                Supplier chasing.
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-800">
                Clean supplier data.
              </p>
            </div>
          </div>

          {/* Right Column: Open visual window for the blended video */}
          <div className="hidden lg:flex lg:col-span-5 min-h-[420px] items-center justify-center pointer-events-none" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
