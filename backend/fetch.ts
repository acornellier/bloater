import { fetchWcl } from './wcl/wcl.ts'
import type { WowClass, WowSpec } from '../common/classes.ts'
import type { Cast } from '../common/types.ts'

const terrosEncounterId = 2639

interface Ranking {
  name: string
  report: {
    code: string
    fightID: number
  }
}

interface RankingsResult {
  worldData: { encounter: { characterRankings: { rankings: Ranking[] } } }
}

interface MasterDataResult {
  reportData: { report: { masterData: { actors: { name: string; id: number }[] } } }
}

interface WclCast {
  name: string
  guid: number
  abilityIcon: string
  total: number
}

interface CastsResult {
  reportData: { report: { table: { data: { entries: WclCast[] } } } }
}

const isHealer = (spec: WowSpec) =>
  ['Restoration', 'Holy', 'Mistweaver', 'Preservation', 'Discipline'].includes(spec)

export async function getRankings(wowClass: WowClass, spec: WowSpec) {
  const data = await fetchWcl<RankingsResult>(`
query {
  worldData {
    encounter(id: ${terrosEncounterId}) {
      characterRankings(
        className: "${wowClass.replace(' ', '')}"
        specName: "${spec}"
        metric: ${isHealer(spec) ? 'hps' : 'dps'}
        difficulty: 5
      )
    }
  }
}`)

  return data.worldData.encounter.characterRankings.rankings
}

export async function getPlayerId(ranking: Ranking) {
  if (ranking.name === 'Anonymous') return null

  const masterData = await fetchWcl<MasterDataResult>(`
query {
  reportData {
    report(code: "${ranking.report.code}") {
      masterData {
        actors(type:"Player") {
          name
          id
        }
      }
    }
  }
}`)

  const playerId = masterData.reportData.report.masterData.actors.find(
    ({ name }) => name === ranking.name,
  )?.id

  if (!playerId) {
    throw new Error(
      `Could not find player ID for ${ranking.name} ${ranking.report.code} ${ranking.report.fightID}`,
    )
  }

  return playerId
}

export async function getCasts(ranking: Ranking, playerId: number) {
  const data = await fetchWcl<CastsResult>(`
query {
  reportData {
    report(code: "${ranking.report.code}") {
      table(
        fightIDs: ${ranking.report.fightID}
        dataType: Casts
        hostilityType: Friendlies
        sourceID: ${playerId}
      )
    }
  }
}`)

  return data.reportData.report.table.data.entries.map<Cast>(
    ({ name, guid, abilityIcon, total }) => ({
      name,
      guid,
      icon: abilityIcon,
      count: total,
    }),
  )
}
