'use client'

import { useState, useRef } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const leadTimeOptions = [
  'Standard (8–12 weeks sea freight)',
  'Urgent (4–6 weeks air freight at cost)',
  'Flexible / exploratory',
]

export default function GetStartedForm() {
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    partDescription: '',
    quantity: '',
    materialFinish: '',
    targetLeadTime: 'Standard (8–12 weeks sea freight)',
    notes: '',
  })

  const [fileName, setFileName] = useState<string | null>(null)
  const [status, setStatus] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 25 * 1024 * 1024) {
      setErrorMsg('File exceeds 25MB limit. Please upload a smaller file or link in notes.')
      return
    }
    setFileName(file.name)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    if (!form.fullName || !form.companyName || !form.email || !form.partDescription || !form.quantity) {
      setStatus('error')
      setErrorMsg('Please fill in all required fields.')
      return
    }

    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, drawingFileName: fileName || 'None' }),
      })

      if (!res.ok) throw new Error('Submission failed. Please try again.')
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
      <div className="max-w-xl mx-auto py-10 px-6 bg-white border border-slate-200 rounded text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Drawing Received</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Thank you, {form.fullName}. We will review your drawing and get back to <strong className="text-slate-800">{form.email}</strong> within five working days with a landed cost and lead time.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white border border-slate-200 rounded p-6 sm:p-8">
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className={labelClass}>
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={form.fullName}
              onChange={update}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="companyName" className={labelClass}>
              Company *
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              value={form.companyName}
              onChange={update}
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className={labelClass}>
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={update}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone (optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={update}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>
            Drawing Upload (PDF, STEP, DWG, DXF, or photo)
          </label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.step,.stp,.dwg,.dxf,.png,.jpg,.jpeg"
            className="w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded file:border file:border-slate-300 file:text-xs file:font-semibold file:bg-slate-50 hover:file:bg-slate-100 cursor-pointer"
          />
          {fileName && <p className="text-xs text-slate-600 mt-1 font-mono">Selected: {fileName}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <label htmlFor="partDescription" className={labelClass}>
              Part Description *
            </label>
            <input
              type="text"
              id="partDescription"
              name="partDescription"
              required
              placeholder="e.g. Mild steel bracket / welded chassis"
              value={form.partDescription}
              onChange={update}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="quantity" className={labelClass}>
              Quantity *
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              required
              placeholder="e.g. 250 pcs"
              value={form.quantity}
              onChange={update}
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="materialFinish" className={labelClass}>
              Material & Finish (optional)
            </label>
            <input
              type="text"
              id="materialFinish"
              name="materialFinish"
              placeholder="e.g. 304 SS, Powder coat"
              value={form.materialFinish}
              onChange={update}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="targetLeadTime" className={labelClass}>
              Target Lead Time
            </label>
            <select
              id="targetLeadTime"
              name="targetLeadTime"
              value={form.targetLeadTime}
              onChange={update}
              className={inputClass}
            >
              {leadTimeOptions.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="notes" className={labelClass}>
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            placeholder="Critical tolerances, cosmetic requirements, etc."
            value={form.notes}
            onChange={update}
            className={inputClass}
          />
        </div>

        {errorMsg && (
          <p className="text-xs text-red-600">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm py-3 rounded transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? 'Submitting...' : 'Request a Quote'}
        </button>
      </div>
    </form>
  )
}