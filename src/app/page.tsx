import Image from 'next/image'
import AboutMe from 'sections/AboutMe'
import Hero from 'sections/Hero'
import Introduction from 'sections/Introduction'
import Skills from 'sections/Skills'
import styles from './page.module.css'



export default function Home() {
  return (
    <>
    <main>
    <Hero />
    <Introduction />
    <AboutMe />
    <Skills />
    </main>
    </>
  )
}
