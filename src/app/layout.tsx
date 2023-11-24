import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from 'sections/Footer';
import MainNavbar from 'components/MainNavbar';



//fontawesomeicon
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload, fas, faBackwardStep, faCode, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faFontAwesome, faLinkedin, faReact, fab } from '@fortawesome/free-brands-svg-icons'
import ActiveSectionContextProvider from './context/active-section-context';

library.add(fas, faCode, faGithub, faTwitter, faFontAwesome, faLinkedin, faReact, faDownload ,faBackwardStep, fab, faPeopleGroup)

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
      <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" crossOrigin="anonymous" />
        </head>
      <body>
        <ActiveSectionContextProvider>
          <MainNavbar />
            {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
