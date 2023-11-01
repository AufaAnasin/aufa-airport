import React from 'react'
import styles from './MyProject.module.css'
import Projects from 'components/ProjectsCard'

type Props = {}

function MyProject({}: Props) {
    const style: React.CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "40px",
    }
  return (
    <section>
        <div className="container-fluid" style={style}>
            <h1>My Project</h1>
            <Projects />
        </div>
    </section>
  )
}

export default MyProject