import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from 'sections/Footer';
import MainNavbar from 'components/MainNavbar';



//fontawesomeicon
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload, fas, faPerson ,faBackwardStep } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome, faLinkedin, faReact, faDownload ,faBackwardStep)

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aufa Airport',
  description: 'Aufa Anasin IT Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <MainNavbar />
    <main>{children}</main>
    {/* <Footer /> */}
    </>
  )
}
