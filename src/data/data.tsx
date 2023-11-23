import { faReact, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGraduationCap, faSuitcase, faUsers } from "@fortawesome/free-solid-svg-icons"

type AbiltiesType = {
    id: number,
    icon: string, 
    tagline: string,
    description: string
}
type ExperienceType = {
    id: number
    title: string, 
    company: string,
    description: string, 
    date: string,
    icon: string,
}

type ProjectType = {
    id: number,
    images: string,
    name: string,
    link: string,
}

type SkillType = {
    id: number,
    icon: string,
    name: string
}

type NavbarType = {
    name: string, 
    hash: string
}

export const NavbarData: NavbarType[] = [
    {
        name: "Home",
        hash: "#home"
    },
    {
        name: "About",
        hash: "#about"
    },
    {
        name: "Abilities",
        hash: "#abilities"
    },
    {
        name: "Experience",
        hash: "#experience"
    },
    {
        name: "Projects",
        hash: "#project"
    },
    {
        name: "Skills",
        hash: "#skills"
    },
    {
        name: "Contact",
        hash: "#contact"
    },
]

export const SkillData: SkillType[] = [
    {
        id: 1, 
        icon: 'fa-brands fa-react',
        name: 'ReactJS'
    },
    {
        id: 2, 
        icon: 'fa-brands fa-html5',
        name: 'HTML'
    },
    {
        id: 3, 
        icon: 'fa-brands fa-css3-alt',
        name: 'CSS'
    },
    {
        id: 4, 
        icon: 'fa-brands fa-html5',
        name: 'HTML'
    },
    {
        id: 5, 
        icon: 'fa-brands fa-bootstrap',
        name: 'Bootstrap'
    },
    {
        id: 6, 
        icon: 'fa-brands fa-js',
        name: 'Javascript'
    },
    {
        id: 7, 
        icon: 'fa-brands fa-java',
        name: 'Java'
    },
    {
        id: 8, 
        icon: 'fa-brands fa-github',
        name: 'Github'
    },
    {
        id: 9, 
        icon: 'fa-brands fa-docker',
        name: 'Docker'
    },
]

export const iconMap: any = {
    twitter: faTwitter,
    react: faReact,
    suitcase: faSuitcase,
    community: faUsers,
    education: faGraduationCap,
}

export const ProjectData: ProjectType[] = [
    {
        id: 1,
        images: '/images/github.png',
        name: "Github Clone",
        link: 'https://github.com/AufaAnasin/githubreadme'
    },
    {
        id: 2,
        images: '/images/rentcar.png',
        name: "Rentcar App",
        link: 'https://github.com/AufaAnasin/9900949-11-MAA-rentcar-Gold'
    },
]

export const AbiltiesCardData: AbiltiesType[] = [
    {   
        id: 1, 
        icon: "fa-brands fa-react", 
        tagline: "Proficient React/Next.js Developer", 
        description: "A highly skilled React/Next.js developer, proficient in crafting scalable and efficient applications, leveraging the latest technologies and best practices to deliver top-notch solutions."
    },
    {   
        id: 2, 
        icon: "fa-solid fa-code", 
        tagline: "Emphasis on Clean Code and Design", 
        description: "Known for emphasizing clean code and meticulous design principles, ensuring the development of maintainable and aesthetically pleasing software, contributing to a positive user experience."
    },
    {   
        id: 3, 
        icon: "fas fa-handshake",     
        tagline: "Strong Team Player", 
        description: "A dedicated team player with strong collaborative skills, fostering effective communication and cooperation within the team, thereby enhancing overall project success and team synergy."
    },
]

export const ExperienceData: ExperienceType[] = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "Telkom Indonesia",
        description: "Creating some Internal Super App with my team using Material-UI, Typescript. The apps is able to display the data using the graph by React Apex, and the details of the data using the Table.",
        date: 'Jul 2022 - Dec 2022',
        icon: 'suitcase'
    },
    {
        id: 2,
        title: "React Developer",
        company: "Automate All",
        description: "Page internationalization using i18next and Making page using ReactJS and styled-component",
        date: 'Oct 2021 - Nov 2021 ',
        icon: 'suitcase'
    },
    {
        id: 3,
        title: "Coach",
        company: "AIESEC in UNHAS",
        description: "Page internationalization using i18next and Making page using ReactJS and styled-component",
        date: 'Agu 2021 - Nov 2021',
        icon: 'community'
    },
    {
        id: 4,
        title: "Short Course",
        company: "UTHM Malaysia",
        description: "Joining Short Course program from Telkom University and learn how to manage your mind using mind-mapping for Global Knowledge and Information Technology Course",
        date: 'Okt 2019',
        icon: 'education'
    },
]