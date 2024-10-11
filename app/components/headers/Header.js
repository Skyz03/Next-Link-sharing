import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex flex-row items-center gap-2">
      <Image
        src="./assets/images/logo-devlinks-small.svg"
        width={35}
        height={35}
      />
      <h1 className="text-4xl font-bold lowercase tracking-tight text-slateBlack">
        DevLinks
      </h1>
    </div>
  )
}
