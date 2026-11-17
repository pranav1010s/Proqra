'use client'

import { useState, useRef } from 'react'
import { ChevronDown, Upload, Paperclip, X, CheckCircle2 } from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const CAPABILITY_OPTIONS = [
  'CNC Turning & Milling',
  'Sheet Metal & Laser Cutting',
  'Fabrication & Welding',
  'Stamping & Deep Drawing',
  'Castings (Sand, Investment, Die)',
  'Forgings',
  'Tube Cutting & Bending',
  'Surface Treatment & Coating',
  'Tool & Die Making',
  'Assemblies',
]

const CERTIFICATION_OPTIONS = [
  'ISO 9001:2015',
  'IATF 16949',
  'ISO 3834 / EN 15085 (Welding)',
  'ISO 14001',
  'Working towards ISO 9001',
]

const EXPORT_OPTIONS = [
  'Not specified',
  'Currently exporting to UK / Europe / North America',
  'Supplying domestic Tier-1 exporters',
  'Domestic focus, ready for export',
]

type SectionKey = 'company' | 'contact' | 'processes' | 'certificates'

export default function SupplierNetworkForm() {
  const [form, setForm] = useState({
    companyName: '',
    location: '',
    website: '',
    yearEstablished: '',
    contactName: '',
    role: '',
    email: '',
    phone: '',
    machinerySummary: '',
    exportExperience: 'Not specified',
    monthlyCapacity: '',
    notes: '',
  })

  const [selectedCapabilities, setSelectedCapabilities] = useState<string[]>([])
  const [selectedCertifications, setSelectedCertifications] = useState<string[]>([])
  const [file, setFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)
  const [status, setStatus] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>({
    company: true,
    contact: true,
    processes: true,
    certificates: false,
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

  const toggleSection = (key: SectionKey) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const toggleCapability = (cap: string) => {
    setSelectedCapabilities((prev) =>
      prev.includes(cap) ? prev.filter((c) => c !== cap) : [...prev, cap]
    )
  }

  const toggleCertification = (cert: string) => {
    setSelectedCertifications((prev) =>
      prev.includes(cert) ? prev.filter((c) => c !== cert) : [...prev, cert]
    )
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) {
      setFile(null)
      setFileName(null)
      return
    }
    if (selectedFile.size > 20 * 1024 * 1024) {
      setErrorMsg('File exceeds 20MB limit. Please upload a smaller file or add a link in notes.')
      setFile(null)
      setFileName(null)
      return
    }
    setErrorMsg('')
    setFile(selectedFile)
    setFileName(selectedFile.name)
  }

  // Progress calculation across required + optional sections
  const companyComplete = Boolean(form.companyName.trim() && form.location.trim())
  const contactComplete = Boolean(form.contactName.trim() && form.email.trim() && form.phone.trim())
  const processesComplete = selectedCapabilities.length > 0
  const certificatesStarted =
    selectedCertifications.length > 0 || Boolean(file) || Boolean(form.notes.trim())

  const completedSteps = [
    companyComplete,
    contactComplete,
    processesComplete,
    certificatesStarted,
  ].filter(Boolean).length
  const requiredCompleted = [companyComplete, contactComplete, processesComplete].filter(Boolean).length

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    if (!companyComplete) {
      setOpenSections((prev) => ({ ...prev, company: true }))
      setStatus('error')
      setErrorMsg('Please fill in company name and location.')
      return
    }

    if (!contactComplete) {
      setOpenSections((prev) => ({ ...prev, contact: true }))
      setStatus('error')
      setErrorMsg('Please fill in contact name, work email, and phone or WhatsApp.')
      return
    }

    if (!processesComplete) {
      setOpenSections((prev) => ({ ...prev, processes: true }))
      setStatus('error')
      setErrorMsg('Please select at least one process.')
      return
    }

    try {
      const formData = new FormData()
      formData.append('companyName', form.companyName.trim())
      formData.append('location', form.location.trim())
      formData.append('website', form.website.trim())
      formData.append('yearEstablished', form.yearEstablished.trim())
      formData.append('contactName', form.contactName.trim())
      formData.append('role', form.role.trim())
      formData.append('email', form.email.trim())
      formData.append('phone', form.phone.trim())
      formData.append('capabilities', JSON.stringify(selectedCapabilities))
      formData.append('certifications', JSON.stringify(selectedCertifications))
      formData.append('machinerySummary', form.machinerySummary.trim())
      formData.append(
        'exportExperience',
        form.exportExperience === 'Not specified' ? '' : form.exportExperience
      )
      formData.append('monthlyCapacity', form.monthlyCapacity.trim())
      formData.append('notes', form.notes.trim())

      if (file) {
        formData.append('profileFile', file)
      }

      const res = await fetch('/api/submit-supplier', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) {
        const errData = await res.json().catch(() => null)
        throw new Error(errData?.error || 'Submission failed. Please check your entries.')
      }

      setStatus('success')
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Submission failed.')
    }
  }

  const inputClass =
    'w-full min-h-[48px] bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus-visible:ring-2 focus-visible:ring-blue-600/30 transition-colors'

  const labelClass = 'block text-sm font-medium text-slate-800 mb-1.5'

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="max-w-3xl py-12 px-6 bg-slate-50 border border-slate-200 rounded-2xl text-center"
      >
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={24} aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Profile submitted</h3>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mx-auto mb-4">
          Thank you, {form.contactName}. We have received the details for{' '}
          <strong className="text-slate-800">{form.companyName}</strong>.
        </p>
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
          We review submissions as part of our supplier network and will reach out to{' '}
          <strong className="text-slate-700">{form.email}</strong> when we need photos, a short video call, or have a matching UK requirement.
        </p>
      </div>
    )
  }

  return (
    <form
      id="supplier-network-form"
      onSubmit={handleSubmit}
      className="max-w-3xl bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-8 space-y-5"
    >
      {/* Progress indicator */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
            Progress ({requiredCompleted}/3 required sections ready)
          </span>
          <span className="text-xs text-slate-500">
            {completedSteps} of 4 sections filled
          </span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${Math.max(12, (completedSteps / 4) * 100)}%` }}
          />
        </div>
      </div>

      {/* Section 1: Company Details */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <button
          type="button"
          onClick={() => toggleSection('company')}
          aria-expanded={openSections.company}
          className="w-full min-h-[56px] px-5 py-4 flex items-center justify-between gap-4 text-left hover:bg-slate-50/70 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-blue-600">01</span>
            <span className="text-base font-bold text-slate-900">Company details</span>
            {companyComplete && (
              <CheckCircle2 size={16} className="text-emerald-600" aria-hidden="true" />
            )}
          </div>
          <ChevronDown
            size={18}
            aria-hidden="true"
            className={`text-slate-500 transition-transform duration-200 ${
              openSections.company ? 'rotate-180' : ''
            }`}
          />
        </button>

        {openSections.company && (
          <div className="px-5 pb-6 pt-2 border-t border-slate-100 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="companyName" className={labelClass}>
                  Company name <span aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  placeholder="e.g. Precision Components Pvt Ltd"
                  value={form.companyName}
                  onChange={update}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="location" className={labelClass}>
                  Location (City, State) <span aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  placeholder="e.g. Pune, Maharashtra"
                  value={form.location}
                  onChange={update}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="website" className={labelClass}>
                  Website <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  placeholder="https://example.com"
                  value={form.website}
                  onChange={update}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="yearEstablished" className={labelClass}>
                  Year established <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="yearEstablished"
                  name="yearEstablished"
                  placeholder="e.g. 2012"
                  value={form.yearEstablished}
                  onChange={update}
                  className={inputClass}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 2: Primary Contact */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <button
          type="button"
          onClick={() => toggleSection('contact')}
          aria-expanded={openSections.contact}
          className="w-full min-h-[56px] px-5 py-4 flex items-center justify-between gap-4 text-left hover:bg-slate-50/70 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-blue-600">02</span>
            <span className="text-base font-bold text-slate-900">Primary contact</span>
            {contactComplete && (
              <CheckCircle2 size={16} className="text-emerald-600" aria-hidden="true" />
            )}
          </div>
          <ChevronDown
            size={18}
            aria-hidden="true"
            className={`text-slate-500 transition-transform duration-200 ${
              openSections.contact ? 'rotate-180' : ''
            }`}
          />
        </button>

        {openSections.contact && (
          <div className="px-5 pb-6 pt-2 border-t border-slate-100 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contactName" className={labelClass}>
                  Contact name <span aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  required
                  placeholder="e.g. Rajesh Sharma"
                  value={form.contactName}
                  onChange={update}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="role" className={labelClass}>
                  Role / Title <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="e.g. Director / Plant Head"
                  value={form.role}
                  onChange={update}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className={labelClass}>
                  Work email <span aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="rajesh@company.in"
                  value={form.email}
                  onChange={update}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone / WhatsApp <span aria-hidden="true">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={update}
                  className={inputClass}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 3: Processes & Capacity */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <button
          type="button"
          onClick={() => toggleSection('processes')}
          aria-expanded={openSections.processes}
          className="w-full min-h-[56px] px-5 py-4 flex items-center justify-between gap-4 text-left hover:bg-slate-50/70 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-blue-600">03</span>
            <span className="text-base font-bold text-slate-900">Processes & capacity</span>
            {processesComplete && (
              <CheckCircle2 size={16} className="text-emerald-600" aria-hidden="true" />
            )}
          </div>
          <ChevronDown
            size={18}
            aria-hidden="true"
            className={`text-slate-500 transition-transform duration-200 ${
              openSections.processes ? 'rotate-180' : ''
            }`}
          />
        </button>

        {openSections.processes && (
          <div className="px-5 pb-6 pt-3 border-t border-slate-100 space-y-5">
            <div>
              <p className="text-sm font-medium text-slate-800 mb-2.5">
                Processes done in-house <span aria-hidden="true">*</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CAPABILITY_OPTIONS.map((cap) => {
                  const checked = selectedCapabilities.includes(cap)
                  return (
                    <label
                      key={cap}
                      className={`min-h-[48px] flex items-center gap-3 px-3.5 py-2 rounded-lg border text-sm cursor-pointer select-none transition-colors ${
                        checked
                          ? 'bg-blue-50/70 border-blue-300 text-slate-900 font-medium'
                          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleCapability(cap)}
                        className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
                      />
                      <span>{cap}</span>
                    </label>
                  )
                })}
              </div>
            </div>

            <div>
              <label htmlFor="machinerySummary" className={labelClass}>
                Key machinery <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <textarea
                id="machinerySummary"
                name="machinerySummary"
                rows={3}
                placeholder="List main machines, bed sizes, or tolerances if handy..."
                value={form.machinerySummary}
                onChange={update}
                className={`${inputClass} min-h-[96px]`}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="monthlyCapacity" className={labelClass}>
                  Monthly capacity <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="monthlyCapacity"
                  name="monthlyCapacity"
                  placeholder="e.g. 40 tons/month or 12,000 sq ft"
                  value={form.monthlyCapacity}
                  onChange={update}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="exportExperience" className={labelClass}>
                  Export experience <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <select
                  id="exportExperience"
                  name="exportExperience"
                  value={form.exportExperience}
                  onChange={update}
                  className={inputClass}
                >
                  {EXPORT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 4: Certificates & Brochure (All Optional) */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <button
          type="button"
          onClick={() => toggleSection('certificates')}
          aria-expanded={openSections.certificates}
          className="w-full min-h-[56px] px-5 py-4 flex items-center justify-between gap-4 text-left hover:bg-slate-50/70 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-slate-400">04</span>
            <span className="text-base font-bold text-slate-900">
              Certificates & brochure <span className="text-slate-400 font-normal text-sm">(optional)</span>
            </span>
          </div>
          <ChevronDown
            size={18}
            aria-hidden="true"
            className={`text-slate-500 transition-transform duration-200 ${
              openSections.certificates ? 'rotate-180' : ''
            }`}
          />
        </button>

        {openSections.certificates && (
          <div className="px-5 pb-6 pt-3 border-t border-slate-100 space-y-5">
            <div>
              <p className={labelClass}>Certifications held</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CERTIFICATION_OPTIONS.map((cert) => {
                  const checked = selectedCertifications.includes(cert)
                  return (
                    <label
                      key={cert}
                      className={`min-h-[48px] flex items-center gap-3 px-3.5 py-2 rounded-lg border text-sm cursor-pointer select-none transition-colors ${
                        checked
                          ? 'bg-blue-50/70 border-blue-300 text-slate-900 font-medium'
                          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleCertification(cert)}
                        className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
                      />
                      <span>{cert}</span>
                    </label>
                  )
                })}
              </div>
            </div>

            <div>
              <label htmlFor="supplier-brochure-upload" className={labelClass}>
                Company brochure, machine list, or ISO certificates (up to 20MB)
              </label>
              <input
                id="supplier-brochure-upload"
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.zip,.rar,.png,.jpg,.jpeg"
                className="hidden"
              />
              {fileName ? (
                <div className="flex items-center justify-between min-h-[48px] px-4 py-2.5 bg-slate-50 border border-blue-200 rounded-lg text-sm text-slate-800">
                  <span className="flex items-center gap-2 truncate">
                    <Paperclip size={15} className="text-blue-600 shrink-0" aria-hidden="true" />
                    <span className="truncate font-medium">{fileName}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setFile(null)
                      setFileName(null)
                      if (fileInputRef.current) fileInputRef.current.value = ''
                    }}
                    aria-label="Remove uploaded file"
                    className="p-2 text-slate-500 hover:text-red-600"
                  >
                    <X size={16} aria-hidden="true" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full min-h-[52px] flex items-center justify-center gap-2 bg-slate-50 border border-dashed border-slate-300 hover:border-blue-400 rounded-lg text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <Upload size={16} aria-hidden="true" />
                  <span>Upload PDF, Word, ZIP, or image</span>
                </button>
              )}
            </div>

            <div>
              <label htmlFor="notes" className={labelClass}>
                Anything else we should know
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={2}
                placeholder="Materials you regularly work with, typical batch sizes, lead times..."
                value={form.notes}
                onChange={update}
                className={`${inputClass} min-h-[84px]`}
              />
            </div>
          </div>
        )}
      </div>

      {errorMsg && (
        <div
          role="alert"
          aria-live="polite"
          className="p-3.5 bg-red-50 border border-red-200 rounded-lg text-xs sm:text-sm text-red-700 font-medium"
        >
          {errorMsg}
        </div>
      )}

      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
        By submitting, you agree PROQRA can store this information and share your documents with UK buyers when a requirement matches.
      </p>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full min-h-[52px] bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm sm:text-base py-3.5 px-6 rounded-lg transition-colors shadow-sm disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        {status === 'loading' ? 'Submitting profile...' : 'Submit profile'}
      </button>

      <p className="text-center text-xs text-slate-500">
        No registration fees. Required fields: company name, location, contact name, work email, phone/WhatsApp, and processes.
      </p>
    </form>
  )
}

