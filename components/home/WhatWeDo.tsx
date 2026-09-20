import Link from 'next/link'

const items = [
  {
    num: '01',
    title: 'Supplier vetting',
    body: 'Fabricators are shortlisted from established industrial clusters (Pune, Coimbatore, Rajkot), checked against official registrations, and verified in person on the shop floor before quoting.',
  },
  {
    num: '02',
    title: 'Quality & inspection',
    body: 'Every order is checked against your drawing before leaving India. You receive a dimensional inspection report and mill test certs with the shipment, not a generic assurance.',
  },
  {
    num: '03',
    title: 'Logistics & delivery',
    body: 'We manage production milestones, sea freight, customs clearance, and certificates of origin through to your door under a single point of contact and agreed delivery date.',
  },
]

export default function WhatWeDo() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
            What We Do
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            End-to-end sourcing, verification, and freight
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.num} className="border-t border-slate-200 pt-5">
              <span className="text-xs font-mono text-slate-400 block mb-2">{item.num}</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex gap-6 text-xs font-medium">
          <Link href="/how-we-source" className="text-slate-900 underline hover:text-blue-600">
            Read the full vetting process →
          </Link>
          <Link href="/quality" className="text-slate-900 underline hover:text-blue-600">
            See what gets inspected →
          </Link>
        </div>
      </div>
    </section>
  )
}
