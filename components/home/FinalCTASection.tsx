'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function FinalCTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    manufacturingRequirement: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/submit-supplier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          notes: `Manufacturing requirement: ${formData.manufacturingRequirement}`,
          source: 'Home Final CTA - Talk to PROQRA',
        }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        window.location.href = `mailto:hello@proqra.co.uk?subject=Manufacturing%20Requirement%20from%20${encodeURIComponent(formData.company || formData.name)}&body=${encodeURIComponent(formData.manufacturingRequirement)}`
        setSubmitted(true)
      }
    } catch {
      window.location.href = `mailto:hello@proqra.co.uk?subject=Manufacturing%20Requirement&body=${encodeURIComponent(formData.manufacturingRequirement)}`
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-white py-20 sm:py-32">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Consultation Copy & Core Ethos */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Looking for a precision supplier in India?
            </h2>

            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              Tell us what you&apos;re trying to manufacture, the requirements you already have, and where you need support.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We&apos;ll assess the requirement and explain how we would approach the supplier search and development.
            </p>

            {/* Ethos Mantra */}
            <div className="mt-8 pt-8 border-t border-slate-200 space-y-4">
              <div className="font-mono text-xs uppercase tracking-widest text-blue-600 font-bold">
                Find. Qualify. Launch. Document.
              </div>
              <p className="text-sm text-slate-600 italic leading-relaxed">
                Finding the supplier is only the beginning. We conduct in-person factory visits, audit capability and safety, oversee initial production materials, and share the complete documentation dossier directly with you.
              </p>
              <div className="pt-2 text-xs font-mono text-slate-500">
                Direct inquiry: <a href="mailto:hello@proqra.co.uk" className="text-slate-900 font-bold underline hover:text-blue-600">hello@proqra.co.uk</a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Technical Inquiry Form */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded p-6 sm:p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-12 h-12 bg-slate-900 text-white font-mono flex items-center justify-center mx-auto text-sm font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Requirement received.
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  We will review your manufacturing requirements and respond with our initial approach within two working days.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-slate-500 underline hover:text-slate-900"
                  >
                    Submit another requirement
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-200 pb-3 mb-4">
                  <h3 className="text-lg font-bold text-slate-900">
                    Talk to PROQRA
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    Assess your requirement directly with us
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. David Campbell"
                      className="w-full text-sm bg-white border border-slate-300 rounded px-3.5 py-2.5 text-slate-900 focus:border-slate-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="david@company.co.uk"
                      className="w-full text-sm bg-white border border-slate-300 rounded px-3.5 py-2.5 text-slate-900 focus:border-slate-900 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Precision Ltd"
                    className="w-full text-sm bg-white border border-slate-300 rounded px-3.5 py-2.5 text-slate-900 focus:border-slate-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1">
                    What are you trying to manufacture? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.manufacturingRequirement}
                    onChange={(e) => setFormData({ ...formData, manufacturingRequirement: e.target.value })}
                    placeholder="Describe the component, process (CNC, fabrication, casting), materials, estimated volumes, and where you currently face challenges..."
                    className="w-full text-sm bg-white border border-slate-300 rounded px-3.5 py-2.5 text-slate-900 focus:border-slate-900 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm py-3.5 px-6 rounded transition-colors shadow-sm disabled:opacity-50"
                  >
                    {loading ? 'Submitting requirement...' : 'Talk to PROQRA'}
                  </button>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>NDA AVAILABLE ON REQUEST</span>
                  <Link href="/get-started" className="underline hover:text-slate-700">
                    Upload CAD / Drawings →
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
