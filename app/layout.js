import localFont from 'next/font/local'
import './globals.css'
import 'primereact/resources/themes/saga-blue/theme.css' // Theme
import 'primereact/resources/primereact.min.css' // Core CSS
// import "primeicons/primeicons.css"; // Icons
// import "primeflex/primeflex.css"; // Flex utilities
import Header from './components/Header'

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
