import Abilities from 'sections/Abilities'
import AboutMe from 'sections/AboutMe'
import Hero from 'sections/Hero'
import Introduction from 'sections/Introduction'
import Skills from 'sections/Skills'
import MyProject from 'sections/MyProject'
import TechImUsed from 'sections/TechImUsed'
import ContactMe from 'sections/ContactMe'

export default function Home() {
  return (
    <main>
    <Hero />
    <Introduction />
    <AboutMe />
    <Skills />
    <Abilities />
    <MyProject />
    <TechImUsed />
    <ContactMe />
    </main>
  )
}
