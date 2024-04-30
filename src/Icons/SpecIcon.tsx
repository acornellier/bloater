import { ZamIcon } from './ZamIcon.tsx'
import { classSpecs, type WowClass, type WowSpec } from '../../common/classes.ts'

interface Props {
  wowClass: WowClass
  spec: WowSpec
  size: number
  className?: string
}

export function SpecIcon({ wowClass, spec, size, className }: Props) {
  console.log(wowClass, spec, classSpecs[wowClass][spec])
  return (
    <ZamIcon
      className={`rounded ${className}`}
      src={`https://wow.zamimg.com/images/wow/icons/large/${classSpecs[wowClass][spec]!.icon}.jpg`}
      size={size}
      alt={spec}
    />
  )
}
