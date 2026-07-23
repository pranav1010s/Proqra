'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, ArrowRight } from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const teamSizeOptions = [
  '1–5 employees',
  '5–15 employees',
  '15–50 employees',
  '50+ employees',
  'Not sure yet',
]

const timelineOptions = [
  'As soon as possible',
  'Within 1 month',
  '1–3 months',
  '3–6 months',
  'Flexible',
]

export default function GetStartedForm() {
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    requirements: '',
    software: '',
    budget: '',
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

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  // Polished glass inputs as per directive
  const inputClass =
    'w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-white/20 transition-all duration-300 focus:ring-1 focus:ring-blue-600 focus:border-blue-600 focus:outline-none'

  const labelClass = 'block text-[12px] font-bold text-white/40 mb-2 tracking-wide'

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-[580px] mx-auto py-16 text-center"
        id="success-message"
      >
        <p className="text-white text-4xl font-extrabold mb-6 tracking-tight">Done.</p>
        <p className="text-white text-lg font-bold mb-3">Requirements received.</p>
        <p className="text-white/40 text-sm leading-relaxed max-w-sm mx-auto">
          Thank you, {form.fullName}. We will review your staffing goals and get back to you
          at {form.email} within 1–2 business days.
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
      className="max-w-[580px] mx-auto space-y-6"
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
          <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={update} className={inputClass} />
        </div>
      </div>

      {/* Requirements */}
      <div>
        <label htmlFor="requirements" className={labelClass}>What roles, skills, or operational teams are you looking to build? *</label>
        <textarea id="requirements" name="requirements" required rows={4} placeholder="E.g., Sourcing Analysts, Tactical Buyers, Supplier Data Managers..." value={form.requirements} onChange={update} className={`${inputClass} resize-none`} />
      </div>

      {/* Software & ERP Systems */}
      <div>
        <label htmlFor="software" className={labelClass}>Current Software & ERP Systems (Optional)</label>
        <input id="software" name="software" type="text" placeholder="E.g., SAP (ECC or S/4HANA), Snowflake, Power BI, Tableau..." value={form.software} onChange={update} className={inputClass} />
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="budget" className={labelClass}>Target team size</label>
          <select id="budget" name="budget" value={form.budget} onChange={update} className={`${inputClass} cursor-pointer`}>
            <option value="" disabled>Select</option>
            {teamSizeOptions.map((o) => (<option key={o} value={o} className="bg-black text-white">{o}</option>))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>Target timeline to start hiring</label>
          <select id="timeline" name="timeline" value={form.timeline} onChange={update} className={`${inputClass} cursor-pointer`}>
            <option value="" disabled>Select</option>
            {timelineOptions.map((o) => (<option key={o} value={o} className="bg-black text-white">{o}</option>))}
          </select>
        </div>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className={labelClass}>Any preferred regions or operational compliance needs?</label>
        <textarea id="notes" name="notes" rows={3} placeholder="E.g., Latin America / Europe, remote-first setup..." value={form.notes} onChange={update} className={`${inputClass} resize-none`} />
      </div>

      {/* Error */}
      <AnimatePresence>
        {status === 'error' && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-500 text-xs font-bold tracking-wider" id="form-error">
            {errorMsg}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Submit */}
      <button
        type="submit"
        id="submit-requirements"
        disabled={status === 'loading'}
        className="group w-full bg-blue-600 text-white font-bold text-xs tracking-wider px-6 py-4 rounded-sm hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.5)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
      >
        {status === 'loading' ? (
          <><Loader2 size={14} className="animate-spin" /> Submitting…</>
        ) : (
          <>
            Submit request
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </>
        )}
      </button>
    </motion.form>
  )
}
