'use client'

import { motion } from 'framer-motion'

export default function SupplierDevelopmentSection() {
  return (
    <section className="bg-white py-20 sm:py-32 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-blue-600 font-bold mb-3">
            Core Differentiator
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Supplier development
          </h2>
          <p className="mt-4 text-xl sm:text-2xl text-slate-800 font-semibold">
            Good suppliers aren&apos;t always ready on day one.
          </p>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Sometimes a capable manufacturer needs to develop its processes to meet a customer&apos;s requirements. We work with the supplier to identify and close those gaps.
          </p>
        </div>

        {/* Transformation Architecture: Current State -> PROQRA Development -> Target State */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-16">
          {/* Box 1: Current State */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                  BASELINE
                </span>
                <span className="font-mono text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 border border-amber-200">
                  CURRENT STATE
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Supplier has the right machinery, but:
              </h3>
              <p className="text-xs text-slate-500 mb-6 font-mono">
                Capable machinery, but missing UK-spec procedural controls
              </p>

              <ul className="space-y-3.5 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 text-xs mt-0.5">•</span>
                  <span>Limited inspection records</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 text-xs mt-0.5">•</span>
                  <span>Inconsistent documentation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 text-xs mt-0.5">•</span>
                  <span>No formal first-article process</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 text-xs mt-0.5">•</span>
                  <span>Missing material traceability</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 text-xs mt-0.5">•</span>
                  <span>Customer-specific requirements not yet established</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs font-mono text-slate-500">
              RISK: High defect rate if unmanaged
            </div>
          </motion.div>

          {/* Box 2: PROQRA Development Intervention (The Bridge) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 bg-slate-900 text-white rounded p-6 sm:p-8 flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                  PROQRA INTERVENTION
                </span>
                <span className="font-mono text-xs font-semibold text-blue-400 bg-blue-950 px-2 py-0.5 border border-blue-800">
                  DEVELOPMENT
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                We work through the requirements with the supplier.
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Hands-on technical development on the ground
              </p>

              <div className="space-y-4 text-sm text-slate-300">
                <p className="leading-relaxed">
                  We don&apos;t just send an audit checklist and leave. Our engineering team sits down with the supplier&apos;s quality managers and machinists.
                </p>
                <div className="space-y-2 border-t border-slate-800 pt-4 text-xs font-mono text-slate-300">
                  <p className="text-slate-400 uppercase tracking-wider">Active Workstreams:</p>
                  <p className="text-blue-300">1. Draft custom inspection templates</p>
                  <p className="text-blue-300">2. Institute FAI (First Article Inspection)</p>
                  <p className="text-blue-300">3. Standardize batch traceability tags</p>
                  <p className="text-blue-300">4. Train staff on customer drawings & GD&amp;T</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-xs font-mono text-emerald-400">
              ROLE: Engineering partner, not an email broker
            </div>
          </motion.div>

          {/* Box 3: Target State */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                  OUTCOME
                </span>
                <span className="font-mono text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                  TARGET STATE
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Production-ready &amp; compliant to your exact standard:
              </h3>
              <p className="text-xs text-slate-500 mb-6 font-mono">
                Stable, dependable UK supply relationship
              </p>

              <ul className="space-y-3.5 text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-mono text-xs mt-0.5">✓</span>
                  <span>Agreed inspection plan</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-mono text-xs mt-0.5">✓</span>
                  <span>Defined quality records</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-mono text-xs mt-0.5">✓</span>
                  <span>Material traceability</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-mono text-xs mt-0.5">✓</span>
                  <span>First-article process</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-mono text-xs mt-0.5">✓</span>
                  <span>Clear documentation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-mono text-xs mt-0.5">✓</span>
                  <span>Customer requirements built into production</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs font-mono text-emerald-700 font-semibold">
              RESULT: Repeatable, low-risk manufacturing
            </div>
          </motion.div>
        </div>

        {/* The Brand Anchor Sentence in Monumental Editorial Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="border-y-2 border-slate-900 py-12 sm:py-16 text-center my-6"
        >
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400 mb-4">
            The PROQRA Brand Anchor
          </p>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            &ldquo;The aim isn&apos;t simply to find a supplier. <br className="hidden sm:inline" />
            <span className="text-blue-600">It&apos;s to develop one that can work to your requirements.</span>&rdquo;
          </blockquote>
          <p className="mt-4 text-xs font-mono text-slate-500 uppercase tracking-widest">
            PROQRA Supplier Development Philosophy
          </p>
        </motion.div>
      </div>
    </section>
  )
}
