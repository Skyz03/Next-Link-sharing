import './globals.css' // Your global styles
import 'primereact/resources/themes/md-light-deeppurple/theme.css' // Theme CSS
import 'primereact/resources/primereact.min.css'
import localFont from 'next/font/local'
import { Button } from 'primereact/button'

import Header from './components/headers/Header'

const instrumentSans = localFont({
  src: './fonts/InstrumentSans-VariableFont2.ttf',
  variable: '--font-instrument-sans', // Use a CSS variable for the font
  weight: '100 900', // Range of supported weights
  style: 'normal', // Since this is a non-italic variant
})

export const metadata = {
  title: 'Next - Link Sharing App',
  description: 'Developed by Skyz03',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} flex h-full w-full flex-col bg-pureWhite p-4`}
      >
        {/* <Header /> */}
        {children}
      </body>
    </html>
  )
}
