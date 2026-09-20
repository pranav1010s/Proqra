export default function ProblemSection() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-slate-200 3xl:py-32 4xl:py-40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
        <div className="max-w-3xl mb-10 3xl:max-w-5xl 3xl:mb-16 4xl:mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3 3xl:text-sm 4xl:text-base">
            The Problem
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4 3xl:text-5xl 3xl:mb-6 4xl:text-6xl 4xl:mb-8">
            Most UK manufacturers know Indian suppliers are cheaper. That is not what stops them.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed 3xl:text-xl 4xl:text-2xl">
            What stops them is everything that can't be seen from 4,500 miles away: unverified shop floors, questionable certificates, and discovering weld defects only when the crate is on your yard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-200 3xl:gap-16 3xl:pt-12 4xl:gap-20 4xl:pt-14">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 3xl:text-lg 3xl:mb-3 4xl:text-xl 4xl:mb-4">
              The Overseas Dilemma
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed 3xl:text-base 4xl:text-lg">
              Online quoting portals and directories never visit the factory floor. When problems occur in transit, UK buyers either absorb the loss or return to expensive local suppliers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 3xl:text-lg 3xl:mb-3 4xl:text-xl 4xl:mb-4">
              The PROQRA Policy
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed 3xl:text-base 4xl:text-lg">
              No order enters production until the supplier has been checked in person. No order ships until dimensions and welds are verified against your drawing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
