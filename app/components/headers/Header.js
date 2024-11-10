import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex flex-row items-start gap-2 xl:justify-center">
      <Image
        src="./assets/images/logo-devlinks-small.svg"
        width={40}
        height={40}
        alt="logo dev"
      />
      <h1 className="text-4xl font-bold lowercase tracking-tight text-slateBlack">
        DevLinks
      </h1>
    </div>
  )
}
