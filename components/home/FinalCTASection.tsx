'use client'

import { useState, useRef } from 'react'
import { motion, MotionConfig } from 'framer-motion'
import { Upload, Paperclip, X } from 'lucide-react'

export default function FinalCTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    manufacturingRequirement: '',
  })
  const [file, setFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) {
      setFile(null)
      return
    }
    if (selectedFile.size > 25 * 1024 * 1024) {
      setErrorMsg('File exceeds 25MB limit. Please upload a smaller file or send via email.')
      setFile(null)
      return
    }
    setErrorMsg('')
    setFile(selectedFile)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')
    try {
      const fd = new FormData()
      fd.append('name', formData.name)
      fd.append('email', formData.email)
      fd.append('company', formData.company)
      fd.append('manufacturingRequirement', formData.manufacturingRequirement)
      fd.append('source', 'Home Final CTA - Work with us early')
      if (file) {
        fd.append('drawing', file)
      }

      const res = await fetch('/api/submit-contact', {
        method: 'POST',
        body: fd,
      })

      const data = await res.json().catch(() => null)

      if (res.ok && data?.success) {
        setSubmitted(true)
      } else {
        setErrorMsg(data?.error || 'Failed to send. Please email hello@proqra.co.uk directly.')
      }
    } catch {
      setErrorMsg('Network error. Please try again or email hello@proqra.co.uk directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <section id="contact" className="bg-white py-20 sm:py-28 scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Work with us early */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight text-balance">
                Work with us early
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-pretty max-w-prose">
                We’re new, so we want to work closely with a few UK manufacturers. If you’ve got a supplier backlog, a pile of unorganised quality data or an approval that’s dragging on, tell us. We’ll quote a fixed price after a short call, so you know the cost before we start.
              </p>

              <div className="pt-4 border-t border-slate-200 text-sm text-slate-600">
                Or email us directly at{' '}
                <a
                  href="mailto:hello@proqra.co.uk"
                  className="text-slate-900 font-semibold underline underline-offset-4 hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  hello@proqra.co.uk
                </a>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  role="status"
                  aria-live="polite"
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-12 h-12 bg-slate-900 text-white font-mono flex items-center justify-center mx-auto text-sm font-bold rounded">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Got it, thank you.
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    We’ll reply within one working day, and we’ll talk about what you need before anything is quoted.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-600 underline hover:text-slate-900 min-h-[44px] px-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Send another message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  aria-labelledby="contact-form-heading"
                  className="space-y-4"
                >
                  <div className="border-b border-slate-200 pb-4 mb-4">
                    <h3 id="contact-form-heading" className="text-xl sm:text-2xl font-bold text-slate-900">
                      What’s the problem?
                    </h3>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-requirement"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Tell us what you need help with. <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-requirement"
                      name="manufacturingRequirement"
                      required
                      rows={4}
                      value={formData.manufacturingRequirement}
                      onChange={(e) =>
                        setFormData({ ...formData, manufacturingRequirement: e.target.value })
                      }
                      placeholder="A supplier approval dragging on, spreadsheets that need sorting out, or a part you need sourced in India..."
                      className="w-full text-base sm:text-sm bg-white border border-slate-300 rounded px-3.5 py-2.5 text-slate-900 focus:border-slate-900 focus-visible:ring-2 focus-visible:ring-blue-600/30 focus-visible:border-blue-600 transition-colors resize-y"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. David Campbell"
                        className="w-full min-h-[48px] text-base sm:text-sm bg-white border border-slate-300 rounded px-3.5 py-2.5 text-slate-900 focus:border-slate-900 focus-visible:ring-2 focus-visible:ring-blue-600/30 focus-visible:border-blue-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Work email <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        autoCorrect="off"
                        autoCapitalize="none"
                        spellCheck={false}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="david@company.co.uk"
                        className="w-full min-h-[48px] text-base sm:text-sm bg-white border border-slate-300 rounded px-3.5 py-2.5 text-slate-900 focus:border-slate-900 focus-visible:ring-2 focus-visible:ring-blue-600/30 focus-visible:border-blue-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Company
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Precision Ltd"
                      className="w-full min-h-[48px] text-base sm:text-sm bg-white border border-slate-300 rounded px-3.5 py-2.5 text-slate-900 focus:border-slate-900 focus-visible:ring-2 focus-visible:ring-blue-600/30 focus-visible:border-blue-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="client-drawing-file"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Attach a drawing or spec (optional)
                    </label>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.dwg,.dxf,.step,.stp,.iges,.igs,.zip,.png,.jpg,.jpeg"
                      className="hidden"
                      id="client-drawing-file"
                    />
                    {file ? (
                      <div className="flex items-center justify-between min-h-[48px] p-3 bg-white border border-blue-200 rounded text-xs text-slate-800">
                        <div className="flex items-center gap-2 truncate">
                          <Paperclip size={14} className="text-blue-600 shrink-0" aria-hidden="true" />
                          <span className="truncate font-medium">{file.name}</span>
                          <span className="text-slate-400 shrink-0">
                            ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setFile(null)
                            if (fileInputRef.current) fileInputRef.current.value = ''
                          }}
                          className="text-slate-500 hover:text-red-600 ml-2 p-1.5 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                          aria-label="Remove attached file"
                        >
                          <X size={14} aria-hidden="true" />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full flex items-center justify-center gap-2 min-h-[48px] p-3 bg-white border border-dashed border-slate-300 hover:border-blue-400 cursor-pointer rounded text-xs text-slate-600 hover:text-blue-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        <Upload size={14} className="text-slate-400" aria-hidden="true" />
                        <span>2D drawing, STEP, CAD model, or PDF (up to 25MB)</span>
                      </button>
                    )}
                  </div>

                  {errorMsg && (
                    <div
                      role="alert"
                      aria-live="polite"
                      className="p-3 bg-red-50 border border-red-200 rounded text-xs text-red-700 font-medium"
                    >
                      {errorMsg}
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full min-h-[48px] bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm py-3.5 px-6 rounded transition-colors shadow-sm disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      {loading ? 'Sending...' : 'Send'}
                    </button>
                  </div>

                  <div className="pt-2 text-center space-y-1.5">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      We’ll reply within one working day, and we’ll talk about what you need before anything is quoted.
                    </p>
                    <p className="text-xs text-slate-500">
                      NDA available on request.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}
