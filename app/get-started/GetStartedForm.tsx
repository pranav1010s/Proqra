'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, ArrowRight } from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const erpOptions = [
  'SAP (ECC or S/4HANA)',
  'Oracle / NetSuite',
  'Microsoft Dynamics',
  'Coupa',
  'Other / Multiple Systems',
]

const timelineOptions = [
  'Immediate priority',
  'Within 1 month',
  '1–3 months',
  'Just exploring options',
]

export default function GetStartedForm() {
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    painPoints: '',
    erpSystem: '',
    timeline: '',
    notes: '',
  })
  const [status, setStatus] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      let data: any = {}
      try {
        data = await res.json()
      } catch {
        throw new Error('Server error occurred. Please try again.')
      }

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  // Polished clean light inputs
  const inputClass =
    'w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-all duration-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:outline-none'

  const labelClass = 'block text-[12px] font-bold text-slate-700 mb-1.5 tracking-wide'

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-[580px] mx-auto py-12 px-8 bg-white border border-slate-200 rounded-2xl shadow-sm text-center"
        id="success-message"
      >
        <p className="text-slate-900 text-4xl font-extrabold mb-4 tracking-tight">Received.</p>
        <p className="text-slate-900 text-lg font-bold mb-2">Your audit request is in motion.</p>
        <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto">
          Thank you, {form.fullName}. We will review your system details and reach out to 
          at {form.email} within 1–2 business days to schedule your diagnostic.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit}
      className="max-w-[580px] mx-auto space-y-5 bg-white p-8 sm:p-10 border border-slate-200/80 rounded-2xl shadow-sm"
      id="requirements-form"
      noValidate
    >
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className={labelClass}>Full name *</label>
          <input id="fullName" name="fullName" type="text" required placeholder="Jane Smith" value={form.fullName} onChange={update} className={inputClass} />
        </div>
        <div>
          <label htmlFor="companyName" className={labelClass}>Company *</label>
          <input id="companyName" name="companyName" type="text" required placeholder="Acme Inc" value={form.companyName} onChange={update} className={inputClass} />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClass}>Work email *</label>
          <input id="email" name="email" type="email" required placeholder="jane@acme.com" value={form.email} onChange={update} className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone number</label>
          <input id="phone" name="phone" type="tel" placeholder="+44 (0) 7000 000000" value={form.phone} onChange={update} className={inputClass} />
        </div>
      </div>

      {/* Pain Points */}
      <div>
        <label htmlFor="painPoints" className={labelClass}>What are your biggest data or operational bottlenecks? *</label>
        <textarea id="painPoints" name="painPoints" required rows={4} placeholder="E.g., Too many duplicate vendors, messy material masters, PO exceptions..." value={form.painPoints} onChange={update} className={`${inputClass} resize-none`} />
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="erpSystem" className={labelClass}>Primary ERP System</label>
          <select id="erpSystem" name="erpSystem" value={form.erpSystem} onChange={update} className={`${inputClass} cursor-pointer`}>
            <option value="" disabled>Select System</option>
            {erpOptions.map((o) => (<option key={o} value={o} className="bg-white text-slate-900">{o}</option>))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>Target timeline to resolve</label>
          <select id="timeline" name="timeline" value={form.timeline} onChange={update} className={`${inputClass} cursor-pointer`}>
            <option value="" disabled>Select</option>
            {timelineOptions.map((o) => (<option key={o} value={o} className="bg-white text-slate-900">{o}</option>))}
          </select>
        </div>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className={labelClass}>Any specific compliance or reporting needs?</label>
        <textarea id="notes" name="notes" rows={3} placeholder="E.g., Need live dashboards, ISO compliance tracking..." value={form.notes} onChange={update} className={`${inputClass} resize-none`} />
      </div>

      {/* Error */}
      <AnimatePresence>
        {status === 'error' && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-600 text-xs font-bold tracking-wide" id="form-error">
            {errorMsg}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Submit */}
      <button
        type="submit"
        id="submit-requirements"
        disabled={status === 'loading'}
        className="group w-full bg-blue-600 text-white font-bold text-xs tracking-wider uppercase px-6 py-4 rounded-lg hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
      >
        {status === 'loading' ? (
          <><Loader2 size={14} className="animate-spin" /> Submitting…</>
        ) : (
          <>
            Request Free Audit
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </>
        )}
      </button>
    </motion.form>
  )
}