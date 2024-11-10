import Link from 'next/link'
import Image from 'next/image'
export default function Home() {
  const links = [
    { href: '/login', label: 'Login' },
    { href: '/register', label: 'Register' },
    { href: '/starter', label: 'Starter' },
    { href: '/profile', label: 'Profile' },
    { href: '/profile-view', label: 'Profile View' },
  ]

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-extrabold capitalize text-slate-800">
        Welcome to Link Sharing App !
      </h1>

      <nav className="mt-8 flex flex-col items-start space-y-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center text-lg text-slate-700 hover:text-slate-900"
          >
            <Image
              src="/assets/images/icon-arrow-right.svg"
              alt="Arrow Right"
              width={20}
              height={20}
              className="mr-2 invert filter"
            />
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
