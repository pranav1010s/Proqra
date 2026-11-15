export interface TimelineStage {
  stage: string
  chip: string
  chipTone: 'active' | 'planned' | 'later'
  description: string
}

const defaultStages: TimelineStage[] = [
  {
    stage: 'Now',
    chip: 'In progress',
    chipTone: 'active',
    description: 'The work is done by hand with early partners.',
  },
  {
    stage: 'Next',
    chip: 'Planned',
    chipTone: 'planned',
    description: 'A shared tracker for documents and supplier status.',
  },
  {
    stage: 'Later',
    chip: 'Later',
    chipTone: 'later',
    description: 'A portal with automated chasing and scorecards.',
  },
]

const chipClasses: Record<TimelineStage['chipTone'], string> = {
  active: 'bg-blue-50 text-blue-700 border-blue-200',
  planned: 'bg-slate-100 text-slate-700 border-slate-200',
  later: 'bg-white text-slate-500 border-slate-200',
}

const dotClasses: Record<TimelineStage['chipTone'], string> = {
  active: 'bg-blue-600 ring-4 ring-blue-100',
  planned: 'bg-slate-400 ring-4 ring-slate-100',
  later: 'bg-white border-2 border-slate-300',
}

export default function StageTimeline({
  stages = defaultStages,
  compact = false,
}: {
  stages?: TimelineStage[]
  compact?: boolean
}) {
  return (
    <div className="relative">
      {/* Desktop horizontal connecting rail */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute top-[11px] left-6 right-6 h-px bg-slate-200 z-0"
      />

      <div className={`grid grid-cols-1 md:grid-cols-3 ${compact ? 'gap-4 sm:gap-5' : 'gap-6 lg:gap-8'}`}>
        {stages.map((item) => (
          <div key={item.stage} className="relative z-10 flex md:flex-col gap-4 md:gap-3">
            {/* Step marker on the rail */}
            <div className="flex flex-col md:flex-row items-center md:items-center gap-3 shrink-0">
              <span
                aria-hidden="true"
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${dotClasses[item.chipTone]}`}
              >
                {item.chipTone === 'active' && (
                  <span className="w-2 h-2 rounded-full bg-white" />
                )}
              </span>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${chipClasses[item.chipTone]}`}
              >
                {item.chip}
              </span>
            </div>

            {/* Card body */}
            <div
              className={`flex-1 rounded-2xl border p-5 sm:p-6 ${
                item.chipTone === 'active'
                  ? 'border-blue-200 bg-blue-50/30 shadow-sm'
                  : 'border-slate-200/90 bg-white'
              }`}
            >
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 tracking-tight">
                {item.stage}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed text-pretty">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

