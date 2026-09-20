export default function WhyIndia() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
            Why India, Why Now
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
            The tariff position changed in <span className="text-blue-600 font-normal italic-accent">July 2026.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Under the UK–India Comprehensive Economic and Trade Agreement, most Indian fabricated metalwork now enters the UK duty-free or at reduced tariff. Parts that were marginal two years ago are now genuinely competitive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-200">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Preferential Duty
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              0% or reduced import duty on fabricated steel and aluminium with an official certificate of origin.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Established Clusters
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Mature manufacturing hubs in Pune, Coimbatore, and Rajkot with deep laser cutting, CNC forming, and welding capacity.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              On-Site Accountability
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Verification on the factory floor by someone accountable to you, ensuring what ships matches the agreed drawing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
