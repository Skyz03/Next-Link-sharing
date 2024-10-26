import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-extrabold text-slate-800">
        Welcome to MyApp
      </h1>

      <nav className="mt-8 flex flex-col items-start space-y-4">
        <Link
          href="/login"
          className="flex items-center text-lg text-slate-700 hover:text-slate-900"
        >
          <Image
            src="assets/images/icon-arrow-right.svg"
            alt="Arrow Right"
            width={20}
            height={20}
            className="mr-2 invert filter"
          />
          <span>Login</span>
        </Link>

        <Link
          href="/register"
          className="flex items-center text-lg text-slate-700 hover:text-slate-900"
        >
          <Image
            src="/assets/images/icon-arrow-right.svg"
            alt="Arrow Right"
            width={20}
            height={20}
            className="mr-2 invert filter"
          />
          <span>Register</span>
        </Link>

        <Link
          href="/starter"
          className="flex items-center text-lg text-slate-700 hover:text-slate-900"
        >
          <Image
            src="/assets/images/icon-arrow-right.svg"
            alt="Arrow Right"
            width={20}
            height={20}
            className="mr-2 invert filter"
          />
          <span>Starter</span>
        </Link>

        <Link
          href="/profile"
          className="flex items-center text-lg text-slate-700 hover:text-slate-900"
        >
          <Image
            src="/assets/images/icon-arrow-right.svg"
            alt="Arrow Right"
            width={20}
            height={20}
            className="mr-2 invert filter"
          />
          <span>Profile</span>
        </Link>

        <Link
          href="/profile-view"
          className="flex items-center text-lg text-slate-700 hover:text-slate-900"
        >
          <Image
            src="/assets/images/icon-arrow-right.svg"
            alt="Arrow Right"
            width={20}
            height={20}
            className="mr-2 invert filter"
          />
          <span>Profile View</span>
        </Link>
      </nav>
    </div>
  )
}
