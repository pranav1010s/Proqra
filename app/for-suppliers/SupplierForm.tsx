'use client'

import { useState, useRef } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const CAPABILITY_OPTIONS = [
  'Fiber Laser Cutting',
  'CNC Press Brake Bending',
  'TIG & MIG Welding (Certified)',
  'CNC Milling & Turning',
  'Stamping & Deep Drawing',
  'Tube Cutting & Bending',
  'Powder Coating & Surface Treatment',
  'Welded Structural Assemblies',
  'Tool & Die Making',
  'Hardware Insertion & Finishing',
]

const CERTIFICATION_OPTIONS = [
  'ISO 9001:2015',
  'IATF 16949',
  'ISO 3834 / EN 15085 (Welding)',
  'ISO 14001',
  'In progress / working to standard',
]

const EXPORT_OPTIONS = [
  'Currently exporting to UK / Europe / North America',
  'Indirect exporter via domestic Tier-1 manufacturers',
  'Domestic focus, looking to establish export contracts',
]

export default function SupplierForm() {
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
    exportExperience: 'Currently exporting to UK / Europe / North America',
    monthlyCapacity: '',
    notes: '',
  })

  const [selectedCapabilities, setSelectedCapabilities] = useState<string[]>([])
  const [selectedCertifications, setSelectedCertifications] = useState<string[]>([])
  const [file, setFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)
  const [status, setStatus] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

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
      setErrorMsg('File exceeds 20MB limit. Please upload a smaller file or provide a cloud link in notes.')
      setFile(null)
      setFileName(null)
      return
    }
    setErrorMsg('')
    setFile(selectedFile)
    setFileName(selectedFile.name)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    if (!form.companyName || !form.location || !form.contactName || !form.email || !form.phone) {
      setStatus('error')
      setErrorMsg('Please fill in all required fields.')
      return
    }

    if (selectedCapabilities.length === 0) {
      setStatus('error')
      setErrorMsg('Please select at least one primary manufacturing capability.')
      return
    }

    try {
      const formData = new FormData()
      formData.append('companyName', form.companyName)
      formData.append('location', form.location)
      formData.append('website', form.website)
      formData.append('yearEstablished', form.yearEstablished)
      formData.append('contactName', form.contactName)
      formData.append('role', form.role)
      formData.append('email', form.email)
      formData.append('phone', form.phone)
      formData.append('capabilities', JSON.stringify(selectedCapabilities))
      formData.append('certifications', JSON.stringify(selectedCertifications))
      formData.append('machinerySummary', form.machinerySummary)
      formData.append('exportExperience', form.exportExperience)
      formData.append('monthlyCapacity', form.monthlyCapacity)
      formData.append('notes', form.notes)

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
    'w-full bg-white border border-slate-300 rounded px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors'

  const labelClass = 'block text-xs font-semibold text-slate-800 mb-1'

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto py-10 px-6 bg-white border border-slate-200 rounded text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Application Received</h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Thank you, {form.contactName}. We have received the facility details for <strong className="text-slate-800">{form.companyName}</strong>.
        </p>
        <p className="text-xs text-slate-500 leading-relaxed">
          Our technical review team will evaluate your machinery list and contact you at <strong className="text-slate-700">{form.email}</strong> within three working days.
        </p>
      </div>
    )
  }

  return (
    <form
      id="supplier-join-form"
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white border border-slate-200 rounded p-6 sm:p-8"
    >
      <div className="space-y-6">
        {/* Section 1: Company Information */}
        <div>
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">
            1. Company & Facility Profile
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="companyName" className={labelClass}>
                Company / Works Name *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                placeholder="e.g. Apex Precision Engineering Ltd"
                value={form.companyName}
                onChange={update}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="location" className={labelClass}>
                Factory Location (City, State) *
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="website" className={labelClass}>
                Company Website (optional)
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
                Year Established
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

        {/* Section 2: Contact Information */}
        <div className="pt-2">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">
            2. Primary Contact Person
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contactName" className={labelClass}>
                Full Name *
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
                Role / Title
              </label>
              <input
                type="text"
                id="role"
                name="role"
                placeholder="e.g. Managing Director / Plant Head"
                value={form.role}
                onChange={update}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="email" className={labelClass}>
                Work Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="rajesh@apexeng.com"
                value={form.email}
                onChange={update}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone / WhatsApp *
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

        {/* Section 3: Manufacturing Capabilities */}
        <div className="pt-2">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 pb-2 border-b border-slate-100">
            3. In-House Capabilities & Equipment
          </h3>
          <p className="text-xs text-slate-500 mb-3">
            Select in-house processes (non-subcontracted):
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
            {CAPABILITY_OPTIONS.map((cap) => (
              <label
                key={cap}
                className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  checked={selectedCapabilities.includes(cap)}
                  onChange={() => toggleCapability(cap)}
                  className="rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                />
                <span>{cap}</span>
              </label>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="machinerySummary" className={labelClass}>
                Key Machinery & Specifications
              </label>
              <textarea
                id="machinerySummary"
                name="machinerySummary"
                rows={3}
                placeholder="e.g. 6kW Fiber Laser (3000x1500mm), 160T 7-axis Press Brake, 3x VMC, 8x MIG/TIG stations."
                value={form.machinerySummary}
                onChange={update}
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="monthlyCapacity" className={labelClass}>
                  Monthly Capacity / Shop Floor Area
                </label>
                <input
                  type="text"
                  id="monthlyCapacity"
                  name="monthlyCapacity"
                  placeholder="e.g. 15,000 sq ft / 50 tons/month"
                  value={form.monthlyCapacity}
                  onChange={update}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="exportExperience" className={labelClass}>
                  Export Experience
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
        </div>

        {/* Section 4: Certifications & Machine List Upload */}
        <div className="pt-2">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 pb-2 border-b border-slate-100">
            4. Quality Certifications & Machine List
          </h3>

          <div className="mb-4">
            <label className={labelClass}>Certifications Held</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-1.5">
              {CERTIFICATION_OPTIONS.map((cert) => (
                <label
                  key={cert}
                  className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    checked={selectedCertifications.includes(cert)}
                    onChange={() => toggleCertification(cert)}
                    className="rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                  />
                  <span>{cert}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>
              Equipment Inventory or Profile (PDF, Word, or ZIP up to 20MB)
            </label>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.zip,.rar,.png,.jpg,.jpeg"
              className="w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded file:border file:border-slate-300 file:text-xs file:font-semibold file:bg-slate-50 hover:file:bg-slate-100 cursor-pointer"
            />
            {fileName && <p className="text-xs text-slate-600 mt-1 font-mono">Selected: {fileName}</p>}
          </div>

          <div className="mt-4">
            <label htmlFor="notes" className={labelClass}>
              Additional Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={2}
              placeholder="Specific tolerances, raw materials kept in inventory, spare capacity..."
              value={form.notes}
              onChange={update}
              className={inputClass}
            />
          </div>
        </div>

        {errorMsg && (
          <p className="text-xs text-red-600">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm py-3 rounded transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? 'Submitting Application...' : 'Submit Supplier Application'}
        </button>

        <p className="text-center text-xs text-slate-500">
          No registration or listing fees. We work on completed customer purchase orders.
        </p>
      </div>
    </form>
  )
}
