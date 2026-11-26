'use client'

import { useState, useRef, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Upload, Paperclip, X } from 'lucide-react'

export default function ContactForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirement: '',
  })
  const [selectedService, setSelectedService] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const serviceParam = searchParams.get('service')
    if (serviceParam) {
      setSelectedService(serviceParam.trim())
    }
  }, [searchParams])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) {
      setFile(null)
      return
    }
    if (selectedFile.size > 4 * 1024 * 1024) {
      setErrorMsg('File exceeds the 4MB limit. Please upload a smaller file or email Pranav@proqra.co.uk directly.')
      setFile(null)
      if (fileInputRef.current) fileInputRef.current.value = ''
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
      fd.append('company', formData.company)
      fd.append('email', formData.email)
      if (formData.phone.trim()) {
        fd.append('phone', formData.phone.trim())
      }
      fd.append('faxNumber', honeypot)

      const requirementBody =
        selectedService &&
        !formData.requirement.toLowerCase().includes(selectedService.toLowerCase())
          ? `Service: ${selectedService}\n\n${formData.requirement}`
          : formData.requirement

      fd.append('manufacturingRequirement', requirementBody)
      fd.append(
        'source',
        selectedService ? `Contact Page - ${selectedService}` : 'Contact Page'
      )

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
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          requirement: '',
        })
        setFile(null)
        if (fileInputRef.current) fileInputRef.current.value = ''
      } else {
        setErrorMsg(
          data?.error || 'Could not send your message. Please email Pranav@proqra.co.uk directly.'
        )
      }
    } catch {
      setErrorMsg('Network error. Please try again or email Pranav@proqra.co.uk directly.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full min-h-[48px] text-base sm:text-sm bg-white border border-slate-300 rounded px-3.5 py-2.5 text-slate-900 placeholder-slate-500 focus:border-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 transition-colors'

  const labelClass = 'block text-sm font-medium text-slate-800 mb-1.5'

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border-t border-slate-200 pt-8 space-y-4"
      >
        <h2 className="text-xl font-bold text-slate-900">Message received</h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
          Thank you. We will reply within one working day. For anything urgent, call +44 7436 968414 or email Pranav@proqra.co.uk.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="min-h-[44px] text-sm font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Send another message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="border-b border-slate-200 pb-5 mb-6">
        <h2 id="contact-form-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Send us a note
        </h2>
        <p className="text-sm text-slate-600 mt-1.5">
          Keep it brief. We reply within one working day.
        </p>

        {selectedService && (
          <div className="mt-3.5 inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-900 rounded-md px-3.5 py-1.5 text-xs font-semibold">
            <span>Asking about: {selectedService}</span>
            <button
              type="button"
              onClick={() => {
                setSelectedService('')
                const url = new URL(window.location.href)
                if (url.searchParams.has('service')) {
                  url.searchParams.delete('service')
                  window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
                }
              }}
              aria-label={`Remove ${selectedService} service selection`}
              className="min-w-[44px] min-h-[44px] -my-2 -mr-2.5 flex items-center justify-center text-blue-700 hover:text-blue-950 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
            >
              <X size={13} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        aria-labelledby="contact-form-heading"
        className="space-y-5 relative"
      >
        <div
          aria-hidden="true"
          className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden"
        >
          <label htmlFor="contact-fax-number">Fax number</label>
          <input
            id="contact-fax-number"
            name="faxNumber"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Your name <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="contact-company" className={labelClass}>
              Company <span className="text-slate-600 font-normal">(optional)</span>
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              autoComplete="organization"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Your company"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-email" className={labelClass}>
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
              placeholder="you@company.com"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className={labelClass}>
              Phone <span className="text-slate-600 font-normal">(optional)</span>
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+44 ..."
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-requirement" className={labelClass}>
            What do you need help with? <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-requirement"
            name="requirement"
            required
            rows={4}
            value={formData.requirement}
            onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
            placeholder="Supplier approval paperwork, chasing missing certificates, cleaning up supplier data, or sourcing parts from India..."
            className={`${inputClass} min-h-[112px] resize-y`}
          />
        </div>

        <div>
          <label htmlFor="contact-attachment" className={labelClass}>
            Attach a PDF, drawing, or spec <span className="text-slate-600 font-normal">(optional)</span>
          </label>
          <input
            id="contact-attachment"
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.png,.jpg,.jpeg,.doc,.docx,.xls,.xlsx,.csv,.step,.stp,.dxf"
            className="hidden"
          />
          {file ? (
            <div className="flex items-center justify-between min-h-[48px] px-3.5 py-2.5 bg-slate-50 border border-blue-200 rounded text-xs sm:text-sm text-slate-800">
              <div className="flex items-center gap-2 truncate">
                <Paperclip size={15} className="text-blue-600 shrink-0" aria-hidden="true" />
                <span className="truncate font-medium">{file.name}</span>
                <span className="text-slate-600 shrink-0">
                  ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setFile(null)
                  if (fileInputRef.current) fileInputRef.current.value = ''
                }}
                aria-label="Remove attached file"
                className="min-w-[44px] min-h-[44px] -my-2 -mr-2 flex items-center justify-center text-slate-600 hover:text-red-600 ml-2 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <X size={15} aria-hidden="true" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full min-h-[48px] flex items-center justify-center gap-2 px-4 py-3 bg-white border border-dashed border-slate-300 hover:border-blue-600 rounded text-xs sm:text-sm text-slate-700 hover:text-blue-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <Upload size={15} className="text-slate-600" aria-hidden="true" />
              <span>PDF, PNG, JPG, Word, Excel, CSV, STEP, or DXF (up to 4MB)</span>
            </button>
          )}
        </div>

        {errorMsg && (
          <div
            role="alert"
            aria-live="polite"
            className="p-3.5 bg-red-50 border border-red-200 rounded text-xs sm:text-sm text-red-700 font-medium"
          >
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="min-h-[48px] bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm sm:text-base py-3.5 px-8 rounded transition-colors disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {loading ? 'Sending...' : 'Send message'}
        </button>
      </form>
    </div>
  )
}
