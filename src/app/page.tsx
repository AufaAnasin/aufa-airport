import Image from 'next/image'
import Abilities from 'sections/Abilities'
import AboutMe from 'sections/AboutMe'
import Description from 'sections/Description'
import Hero from 'sections/Hero'
import Introduction from 'sections/Introduction'
import Skills from 'sections/Skills'
import MyProject from 'sections/MyProject'



export default function Home() {
  return (
    <main>
    <Hero />
    <Introduction />
    <AboutMe />
    <Skills />
    {/* <Description /> */}
    <Abilities />
    <MyProject />
    </main>
  )
}
