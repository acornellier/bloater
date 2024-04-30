import dkBlood from '../data/Death Knight/Blood.json'
import druidRestoration from '../data/Druid/Restoration.json'
import evokerPres from '../data/Evoker/Preservation.json'
import monkMw from '../data/Monk/Mistweaver.json'
import paladinHoly from '../data/Paladin/Holy.json'
import priestDiscipline from '../data/Priest/Holy.json'
import priestHoly from '../data/Priest/Holy.json'
import shamanRestoration from '../data/Shaman/Restoration.json'
import type { ReportCasts, SpecData } from '../common/types.ts'

export const specData: SpecData[] = [
  {
    class: 'Death Knight',
    spec: 'Blood',
    reports: dkBlood as ReportCasts[],
  },
  {
    class: 'Druid',
    spec: 'Restoration',
    reports: druidRestoration as ReportCasts[],
  },
  {
    class: 'Evoker',
    spec: 'Preservation',
    reports: evokerPres as ReportCasts[],
  },
  {
    class: 'Monk',
    spec: 'Mistweaver',
    reports: monkMw as ReportCasts[],
  },
  {
    class: 'Paladin',
    spec: 'Holy',
    reports: paladinHoly as ReportCasts[],
  },
  {
    class: 'Priest',
    spec: 'Discipline',
    reports: priestDiscipline as ReportCasts[],
  },
  {
    class: 'Priest',
    spec: 'Holy',
    reports: priestHoly as ReportCasts[],
  },
  {
    class: 'Shaman',
    spec: 'Restoration',
    reports: shamanRestoration as ReportCasts[],
  },
]
