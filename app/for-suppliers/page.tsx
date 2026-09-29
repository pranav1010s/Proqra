import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SupplierForm from './SupplierForm'
import { Building2, ArrowLeft, CheckCircle2, ShieldCheck, Video } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Supplier Registration | PROQRA',
  description:
    'Register your Indian precision engineering or fabrication facility with PROQRA. Access long-term UK manufacturing contracts with structured on-site qualification.',
}

export default function ForSuppliersPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-6"
            >
              <ArrowLeft size={14} />
              <span>Back to Home</span>
            </Link>

            <div className="flex items-center gap-2.5 text-blue-600 mb-3">
              <Building2 size={20} />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                Indian Manufacturing Network
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Register your manufacturing facility.
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We help UK engineering and manufacturing firms find and qualify suitable suppliers in India. If your facility has strong precision machining, fabrication, or casting capabilities, submit your machine list and factory profile below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area: Overview + Supplier Form */}
      <section className="py-12 sm:py-20 px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Requirements & What We Look For */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-7 space-y-5">
              <h2 className="text-lg font-bold text-slate-900">
                What we look for in partner factories
              </h2>
              
              <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Modern CNC & Fabrication:</strong> Japanese, European, or modern Indian machine tools with documented maintenance logs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>In-House Quality Metrology:</strong> Calibrated verniers, CMM, height gauges, profile projectors, and surface roughness testers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Material Traceability:</strong> Mill test certificates (MTRs) and batch heat-number tracking for all raw metals.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>On-Site Audit Access:</strong> Willingness to host in-person facility audits and join live shop-floor video walk-throughs with UK clients.
                  </span>
                </li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <ShieldCheck size={16} className="text-emerald-600" />
                <span>Direct UK Engineering Contracts</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We work directly with serious UK manufacturing clients. We do not broadcast drawings or squeeze prices unsustainably; we match capabilities with recurring technical demand.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Video size={16} className="text-blue-600" />
                <span>Questions before registering?</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Contact our supplier relations team directly at{' '}
                <a href="mailto:hello@proqra.co.uk" className="text-blue-600 font-semibold underline">
                  hello@proqra.co.uk
                </a>
              </p>
            </div>
          </div>

          {/* Right Column: Supplier Registration Form with Machine List File Upload */}
          <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-10">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Supplier Profile & Machine List Submission
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Please complete all fields and attach your equipment list, company brochure, or ISO certificates.
              </p>
            </div>

            <SupplierForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
