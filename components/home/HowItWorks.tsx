const steps = [
  {
    num: '1',
    title: 'Send your drawing',
    desc: 'PDF or STEP file, with quantity, material grade, and required lead time.',
  },
  {
    num: '2',
    title: 'We quote',
    desc: 'Within 5 working days: landed cost to your door, lead time, and inspection scope.',
  },
  {
    num: '3',
    title: 'Produce & verify',
    desc: 'Approved fabricator, raw material cert check, and in-process drawing verification.',
  },
  {
    num: '4',
    title: 'Inspect & ship',
    desc: 'Dimensional report and certificate of origin released with the goods.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-slate-200 3xl:py-32 4xl:py-40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
        <div className="mb-10 3xl:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2 3xl:text-sm 4xl:text-base">
            Process
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 3xl:text-4xl 4xl:text-5xl">
            From drawing to delivered goods
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 3xl:gap-12 4xl:gap-16">
          {steps.map((s) => (
            <div key={s.num} className="border-t border-slate-200 pt-4 3xl:pt-7 4xl:pt-9">
              <span className="text-xs font-mono text-slate-400 block mb-1 3xl:text-sm 4xl:text-base">{`Step ${s.num}`}</span>
              <h3 className="text-sm font-bold text-slate-900 mb-1 3xl:text-base 3xl:mb-2 4xl:text-lg 4xl:mb-3">{s.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed 3xl:text-sm 4xl:text-base">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
