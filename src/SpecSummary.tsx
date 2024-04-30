import type { SpecData } from '../common/types.ts'
import { SpecIcon } from './Icons/SpecIcon.tsx'

interface Props {
  specReports: SpecData
}

export function SpecSummary({ specReports }: Props) {
  const averageAbilityCount = Math.round(
    specReports.reports.reduce((sum, report) => sum + report.casts.length, 0) /
      specReports.reports.length,
  )

  const averageAbilityCountAtLeast3Casts = Math.round(
    specReports.reports.reduce(
      (sum, report) => sum + report.casts.filter(({ count }) => count >= 3).length,
      0,
    ) / specReports.reports.length,
  )

  return (
    <div className="flex items-center gap-2">
      <SpecIcon wowClass={specReports.class} spec={specReports.spec} size={32} />
      Average of {averageAbilityCount} different abilities,{' '}
      {averageAbilityCountAtLeast3Casts} with at least 3 casts
    </div>
  )
}
