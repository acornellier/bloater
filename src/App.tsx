import { specData } from '../data/specData.ts'
import { SpecSummary } from './SpecSummary.tsx'

export function App() {
  return (
    <div className="p-4">
      <div className="text-2xl font-bold">Bloater</div>
      <div className="flex flex-col gap-2">
        {specData.map((specReports) => (
          <SpecSummary
            key={`${specReports.class}-${specReports.spec}`}
            specReports={specReports}
          />
        ))}
      </div>
    </div>
  )
}
