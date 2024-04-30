import type { ReportCasts } from '../common/types.ts'
import { WowIcon } from './WowIcon.tsx'
import { reports } from '../data/reports.ts'

interface Props {
  report: ReportCasts
}

function Casts({ report }: Props) {
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

export function App() {
  return (
    <div>
      {reports.map((specReports) => (
        <div key={`${specReports.class}-${specReports.spec}`}>
          {specReports.spec} {specReports.class}
          {specReports.reports.map((report) => (
            <Casts key={`${report.code}-${report.playerId}`} report={report} />
          ))}
        </div>
      ))}
    </div>
  )
}
