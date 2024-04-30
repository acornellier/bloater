import fs from 'fs/promises'
import { getDirname } from './wcl/files.ts'
import * as path from 'node:path'
import { getCasts, getPlayerId, getRankings } from './fetch.ts'
import type { ReportCasts } from '../common/types.ts'
import type { WowClass, WowSpec } from '../common/classes.ts'

const dirname = getDirname(import.meta.url)

const wowClass = process.argv[2] as WowClass
const spec = process.argv[3] as WowSpec

const rankings = await getRankings(wowClass, spec)

const file = `${dirname}/../data/${wowClass}/${spec}.json`

const reports: ReportCasts[] = []
let i = 0
for (const ranking of rankings) {
  console.log(`Fetching ${wowClass} ${spec} ${++i}/${rankings.length}`)
  const playerId = await getPlayerId(ranking)
  if (playerId === null) continue

  const casts = await getCasts(ranking, playerId)

  reports.push({
    code: ranking.report.code,
    fightId: ranking.report.fightID,
    playerName: ranking.name,
    playerId,
    casts,
  })
}

await fs.mkdir(path.dirname(file), { recursive: true })
await fs.writeFile(file, JSON.stringify(reports, null, 2), 'utf-8')
