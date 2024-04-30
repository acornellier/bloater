import type { WowClass, WowSpec } from './classes.ts'

export interface Cast {
  name: string
  guid: number
  icon: string
  count: number
}

export interface ReportCasts {
  code: string
  fightId: number
  playerName: string
  playerId: number
  casts: Cast[]
}

export interface SpecData {
  class: WowClass
  spec: WowSpec
  reports: ReportCasts[]
}
