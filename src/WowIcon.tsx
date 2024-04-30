import { ZamIcon } from './ZamIcon.tsx'

interface Props {
  icon: string
  size: number
}

function getIconLink(icon: string) {
  if (!icon.endsWith('.jpg')) icon += '.jpg'
  return `https://wow.zamimg.com/images/wow/icons/large/${icon}`
}

export function WowIcon({ icon, size }: Props) {
  return (
    <ZamIcon
      className="rounded border border-gray-500"
      size={size}
      src={getIconLink(icon)}
      alt={icon}
    />
  )
}
