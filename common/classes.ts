export type WowClass =
  | 'Death Knight'
  | 'Demon Hunter'
  | 'Druid'
  | 'Evoker'
  | 'Hunter'
  | 'Mage'
  | 'Monk'
  | 'Paladin'
  | 'Priest'
  | 'Rogue'
  | 'Shaman'
  | 'Warlock'
  | 'Warrior'

export type ClassSpec = { class: WowClass; spec: WowSpec }

export type WowSpec = string

export const classSpecs: Record<WowClass, Record<WowSpec, { icon: string }>> = {
  'Death Knight': {
    Blood: { icon: 'spell_deathknight_bloodpresence' },
    Frost: { icon: 'spell_deathknight_frostpresence' },
    Unholy: { icon: 'spell_deathknight_unholypresence' },
  },
  'Demon Hunter': {
    Havoc: { icon: 'ability_demonhunter_specdps' },
    Vengeance: { icon: 'ability_demonhunter_spectank' },
  },
  Druid: {
    Balance: { icon: 'spell_nature_starfall' },
    Feral: { icon: 'ability_druid_catform' },
    Guardian: { icon: 'ability_racial_bearform' },
    Restoration: { icon: 'spell_nature_healingtouch' },
  },
  Evoker: {
    Augmentation: { icon: 'classicon_evoker_augmentation' },
    Devastation: { icon: 'classicon_evoker_devastation' },
    Preservation: { icon: 'classicon_evoker_preservation' },
  },
  Hunter: {
    'Beast Mastery': { icon: 'ability_hunter_bestialdiscipline' },
    Marksmanship: { icon: 'ability_hunter_focusedaim' },
    Survival: { icon: 'ability_hunter_camouflage' },
  },
  Mage: {
    Arcane: { icon: 'spell_holy_magicalsentry' },
    Fire: { icon: 'spell_fire_firebolt02' },
    Frost: { icon: 'spell_frost_frostbolt02' },
  },
  Monk: {
    Brewmaster: { icon: 'spell_monk_brewmaster_spec' },
    Mistweaver: { icon: 'spell_monk_mistweaver_spec' },
    Windwalker: { icon: 'spell_monk_windwalker_spec' },
  },
  Paladin: {
    Holy: { icon: 'spell_holy_holybolt' },
    Retribution: { icon: 'spell_holy_auraoflight' },
    Protection: { icon: 'ability_paladin_shieldofthetemplar' },
  },
  Priest: {
    Discipline: { icon: 'spell_holy_powerwordshield' },
    Holy: { icon: 'spell_holy_guardianspirit' },
    Shadow: { icon: 'spell_shadow_shadowwordpain' },
  },
  Rogue: {
    Assassination: { icon: 'ability_rogue_eviscerate' },
    Outlaw: { icon: 'ability_rogue_waylay' },
    Subtlety: { icon: 'ability_stealth' },
  },
  Shaman: {
    Enhancement: { icon: 'spell_shaman_improvedstormstrike' },
    Elemental: { icon: 'spell_nature_lightning' },
    Restoration: { icon: 'spell_nature_magicimmunity' },
  },
  Warlock: {
    Affliction: { icon: 'spell_shadow_deathcoil' },
    Demonology: { icon: 'spell_shadow_metamorphosis' },
    Destruction: { icon: 'spell_shadow_rainoffire' },
  },
  Warrior: {
    Arms: { icon: 'ability_warrior_savageblow' },
    Fury: { icon: 'ability_warrior_innerrage' },
    Protection: { icon: 'ability_warrior_defensivestance' },
  },
} as const

export const classes = Object.keys(classSpecs) as WowClass[]
