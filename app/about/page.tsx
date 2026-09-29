
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Video, ShieldCheck, Eye, FileText, PhoneCall } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why PROQRA Exists | PROQRA',
  description:
    'Helping UK manufacturing and engineering companies find, qualify, and launch production with verified precision suppliers in India. UK-based team for continuous reassurance.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero & Story Section - Blended Visual with Text & Ambient Dissolve */}
      <section className="relative bg-white pt-28 sm:pt-36 pb-20 border-b border-slate-200 overflow-hidden">
        {/* Blended Facility Visual on the Right (No box, no captions, soft dissolve) */}
        <div 
          className="absolute top-0 right-0 w-full lg:w-[60%] xl:w-[54%] h-full overflow-hidden pointer-events-none select-none z-0"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 12%, rgba(0,0,0,0.6) 30%, black 48%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 12%, rgba(0,0,0,0.6) 30%, black 48%, black 100%)'
          }}
        >
          <Image
            src="/images/factory_warehouse.jpg"
            alt="Precision manufacturing facility in India"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/60 to-transparent" />
        </div>

        {/* Light color shade in the back behind the text on the left, spreading to the right */}
        <div 
          className="absolute top-0 left-0 w-full lg:w-[72%] h-full pointer-events-none select-none z-0"
          style={{
            background: 'radial-gradient(ellipse 95% 80% at 15% 35%, rgba(219, 234, 254, 0.75) 0%, rgba(224, 238, 255, 0.45) 35%, rgba(239, 246, 255, 0.15) 60%, transparent 85%)',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24 relative z-10">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Why PROQRA <span className="text-blue-600 font-normal italic-accent">exists.</span>
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              <p>
                Most UK manufacturing companies face the same dilemma when considering overseas suppliers: pay high domestic prices, or take an unverified gamble on overseas directories, hoping certificates are genuine and factory promises are real.
              </p>

              <p>
                Large corporations solve this by maintaining permanent offices in overseas manufacturing hubs. Smaller and mid-sized manufacturing firms require the same precision and reliability, but cannot justify full-time overseas audit branches.
              </p>

              <div className="border-l-4 border-blue-600 pl-5 py-3 bg-white/90 backdrop-blur-sm rounded-r-xl my-6 shadow-sm">
                <p className="font-semibold text-slate-900 text-base sm:text-lg leading-snug">
                  PROQRA provides that on-the-ground presence. We visit the factory in person, conduct full capability and safety checks, oversee initial production materials, and share the complete dossier directly with you.
                </p>
              </div>

              <p>
                Crucially, our clients always have a team based in the UK to contact directly at any time. You get local accountability, constant reassurance, and transparent communication, while we physically inspect the factory floor in India.
              </p>

              <p className="text-sm text-slate-600">
                We believe in ground-truth reality over sales promises. If a factory fails our capability checks, we tell you immediately with full documentation.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 flex items-center gap-4">
              <Link
                href="/#contact"
                className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-7 py-3.5 rounded transition-colors shadow-sm"
              >
                Talk to our UK team
              </Link>
              <Link
                href="/how-we-source"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 underline"
              >
                How we qualify suppliers →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24 border-b border-slate-200 bg-slate-50">
        <div className="max-w-[1440px] mx-auto 3xl:max-w-[1800px]">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              What makes our approach different:
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Local UK presence combined with direct physical verification in India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <PhoneCall size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">UK-Based Team</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Always available to speak with you directly for continuous reassurance and regular status updates.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Eye size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">In-Person Factory Visits</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We physically walk the shop floor to inspect running machines, calibration records, and tooling setups.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Video size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Live Shop-Floor Video Calls</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Join us virtually while we inspect the factory in India to see the machines and operations firsthand.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Capability & Safety Audits</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rigorously checking whether the factory can deliver what is promised before you make any commitment.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <FileText size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Complete Client Dossier</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Full audit scorecards, calibration certs, and first-article metrology shared transparently from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
