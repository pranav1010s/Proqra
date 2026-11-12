'use client'

import Link from 'next/link'
import { motion, MotionConfig } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Finding suppliers',
    description:
      'Send us a drawing, the material and how many you need. We’ll look for Indian suppliers that make that kind of part, check their certificates and references, and give you a short list.',
  },
  {
    title: 'Getting them approved',
    description:
      'Approving a supplier means a lot of documents: quality certificates, material certificates, first-article reports. We collect them, check nothing is missing, and put them in one pack. If you want someone to inspect on site, we book an independent inspector.',
  },
  {
    title: 'Following up',
    description:
      'Once you’re ordering, we chase open orders and missing paperwork, log quality problems as they come up, and send you an update so you don’t have to do it yourself.',
  },
]

export default function WhatWeDo() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="what-we-do" className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight text-balance">
              What we do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-9 shadow-sm"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed text-pretty max-w-prose">
                  {service.description}
                </p>
              </motion.div>
            ))}

            {/* Fourth service: Light background with clean blue accent */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="relative bg-gradient-to-br from-blue-50/50 via-white to-white border-2 border-blue-600/40 hover:border-blue-600 rounded-2xl p-7 sm:p-9 flex flex-col justify-between shadow-md shadow-blue-500/5 transition-all duration-300"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  Sorting out your supplier data
                </h3>
                <p className="text-base text-slate-700 leading-relaxed text-pretty max-w-prose mb-3">
                  Supplier lists in three different spreadsheets. Certificates nobody knows the expiry date of. Complaints sitting in someone’s inbox. We pull it into one place you can actually use.
                </p>
                <p className="text-base text-slate-900 font-medium leading-relaxed text-pretty max-w-prose mb-7">
                  You get one clean spreadsheet of your suppliers, with certificate dates, open issues and a simple score for each, and we keep it up to date if you want.
                </p>
              </div>

              <div>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base px-6 py-3 rounded transition-colors shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <span>Tell us about your supplier data</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}
