import Image from 'next/image'
import Link from 'next/link'

export default function InsideHeader() {
  return (
    <div className="flex flex-row items-center justify-between gap-6 bg-pureWhite p-4">
      <Image
        src="assets/images/logo-devlinks-small.svg"
        width={32}
        height={32}
      />
      <div className="flex flex-row items-center justify-center gap-6">
        <Link href="/starter">
          <div className="rounded-md bg-primaryLighter px-5 py-2">
            <Image src="assets/images/icon-link.svg" width={20} height={20} />
          </div>
        </Link>
        <Link href="/profile">
          <div className="cursor-pointer rounded-md px-5 py-2">
            <Image
              src="assets/images/icon-profile-details-header.svg"
              width={20}
              height={20}
            />
          </div>
        </Link>
      </div>

      <div className="rounded-md border border-primaryLight p-2">
        <Image
          src="assets/images/icon-preview-header.svg"
          width={20}
          height={20}
        />
      </div>
    </div>
  )
}
