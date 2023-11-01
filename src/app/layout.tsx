import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from 'sections/Footer';
import MainNavbar from 'components/MainNavbar';



//fontawesomeicon
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload, fas, faBackwardStep } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faLinkedin, faReact, fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome, faLinkedin, faReact, faDownload ,faBackwardStep, fab)

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aufa Airport',
  description: 'Aufa Anasin is Frontend Developer with 1 Years of Experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        {/* <MainNavbar /> */}
        {children}
      </body>
      {/* <Footer /> */}
    </html>
  )
}
