import { WowIcon } from './Icons/WowIcon.tsx'
import type { ReportCasts } from '../common/types.ts'

interface Props {
  report: ReportCasts
}

function DetailedCasts({ report }: Props) {
  const sortedCasts = report.casts.toSorted((a, b) => b.count - a.count)
  return (
    <div className="flex gap-2">
      {sortedCasts.map((cast) => (
        <div key={cast.guid} className="flex">
          <WowIcon icon={cast.icon} size={24} />: {cast.count}
        </div>
      ))}
    </div>
  )
}
