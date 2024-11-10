import './globals.css'
import 'primereact/resources/themes/md-light-deeppurple/theme.css'
import 'primereact/resources/primereact.min.css'
import localFont from 'next/font/local'
import { AuthProvider } from './context/authContext'

const instrumentSans = localFont({
  src: './fonts/InstrumentSans-VariableFont2.ttf',
  variable: '--font-instrument-sans',
  weight: '100 900',
  style: 'normal',
})

export const metadata = {
  title: 'Next - Link Sharing App',
  description: 'Developed by Skyz03',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`${instrumentSans.variable} flex h-full w-full flex-col bg-offWhite`}
      >
        <div className="m-auto xl:w-1/3">
          <AuthProvider>{children}</AuthProvider>
        </div>
      </body>
    </html>
  )
}
