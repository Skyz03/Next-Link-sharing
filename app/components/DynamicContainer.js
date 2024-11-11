// app/components/DynamicContainer.js
'use client'

import { usePathname } from 'next/navigation'

export default function DynamicContainer({ children }) {
  const pathname = usePathname()

  // List of routes that should have the `xl:w-1/3` class
  const wideRoutes = ['/register', '/login']

  // Determine if the current route needs the specific class
  const containerClass = wideRoutes.includes(pathname)
    ? 'm-auto xl:w-1/3'
    : 'm-auto w-full'

  return <div className={containerClass}>{children}</div>
}
