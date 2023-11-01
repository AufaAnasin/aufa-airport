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

export const iconMap: any = {
    twitter: faTwitter,
    react: faReact,
    suitcase: faSuitcase,
    community: faUsers,
    education: faGraduationCap,
}

export const AbiltiesCardData: AbiltiesType[] = [
    {   
        id: 1, 
        icon: "fa-brands fa-react", 
        tagline: "Proficient React/Next.js Developer", 
        description: "I excel in React and Next.js development, specializing in creating efficient and high-performing web applications."
    },
    {   
        id: 2, 
        icon: "fa-solid fa-code", 
        tagline: "Emphasis on Clean Code and Design", 
        description: "I prioritize clean and well-structured code, ensuring that projects are not only functional but also easy to maintain and understand."
    },
    {   
        id: 3, 
        icon: "fa-solid fa-people-group", 
        tagline: "Strong Team Player", 
        description: "I prioritize clean and well-structured code, ensuring that projects are not only functional but also easy to maintain and understand."
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