export interface TimelineStage {
  stage: string
  chipTone: 'active' | 'planned' | 'later'
  description: string
}

const defaultStages: TimelineStage[] = [
  {
    stage: 'Now',
    chipTone: 'active',
    description:
      'The work is done by hand with early partners, and each supplier’s details are recorded as we go.',
  },
  {
    stage: 'Next',
    chipTone: 'planned',
    description: 'A shared tracker for documents and supplier status, with supplier records.',
  },
  {
    stage: 'Later',
    chipTone: 'later',
    description: 'Automated chasing, scorecards, and a supplier database buyers can search.',
  },
]

export default function StageTimeline({
  stages = defaultStages,
  compact = false,
}: {
  stages?: TimelineStage[]
  compact?: boolean
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 ${compact ? 'gap-4 sm:gap-5' : 'gap-6 lg:gap-8'}`}>
      {stages.map((item) => (
        <div
          key={item.stage}
          className={`rounded-xl border p-6 sm:p-7 ${
            item.chipTone === 'active'
              ? 'border-blue-200 bg-blue-50/30'
              : 'border-slate-200/90 bg-white'
          }`}
        >
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 tracking-tight">
            {item.stage}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed text-pretty">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  )
}

