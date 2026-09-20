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
    <section className="bg-white py-16 sm:py-20 border-b border-slate-200 3xl:py-32 4xl:py-40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
        <div className="mb-10 3xl:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2 3xl:text-sm 4xl:text-base">
            What We Do
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 3xl:text-4xl 4xl:text-5xl">
            End-to-end sourcing, verification, and freight
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 3xl:gap-14 4xl:gap-20">
          {items.map((item) => (
            <div key={item.num} className="border-t border-slate-200 pt-5 3xl:pt-8 4xl:pt-10">
              <span className="text-xs font-mono text-slate-400 block mb-2 3xl:text-sm 4xl:text-base">{item.num}</span>
              <h3 className="text-base font-bold text-slate-900 mb-2 3xl:text-xl 3xl:mb-3 4xl:text-2xl 4xl:mb-4">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed 3xl:text-base 4xl:text-lg">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex gap-6 text-xs font-medium 3xl:mt-14 3xl:pt-8 3xl:gap-10 3xl:text-sm 4xl:text-base">
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
