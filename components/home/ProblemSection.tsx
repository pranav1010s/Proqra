export default function ProblemSection() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
            The Problem
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
            Most UK manufacturers know Indian suppliers are cheaper. That is not what stops them.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            What stops them is everything that can't be seen from 4,500 miles away: unverified shop floors, questionable certificates, and discovering weld defects only when the crate is on your yard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-200">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              The Overseas Dilemma
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Online quoting portals and directories never visit the factory floor. When problems occur in transit, UK buyers either absorb the loss or return to expensive local suppliers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              The PROQRA Policy
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              No order enters production until the supplier has been checked in person. No order ships until dimensions and welds are verified against your drawing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
