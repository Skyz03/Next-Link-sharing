import './globals.css'
import 'primereact/resources/themes/md-light-deeppurple/theme.css'
import 'primereact/resources/primereact.min.css'
import localFont from 'next/font/local'

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
    <html lang="en">
      <body
        className={`${instrumentSans.variable} flex h-full w-full flex-col bg-offWhite`}
      >
        {/* <Header /> */}
        {children}
      </body>
    </html>
  )
}
