import dkBlood from '../data/Death Knight/Blood.json'
import monkMw from '../data/Monk/Mistweaver.json'
import type { ReportCasts, SpecReports } from '../common/types.ts'

export const reports: SpecReports[] = [
  {
    class: 'Death Knight',
    spec: 'Blood',
    reports: dkBlood as ReportCasts[],
  },
  {
    class: 'Monk',
    spec: 'Mistweaver',
    reports: monkMw as ReportCasts[],
  },
]
