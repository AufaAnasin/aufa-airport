"use client"

import React from 'react'
import Projects from 'components/ProjectsCard'
import { ProjectData } from 'data/data'
import styles from './MyProject.module.css'
import { useSectionInView } from 'app/hooks/hooks'

type Props = {}

function MyProject({}: Props) {
  const style: React.CSSProperties = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginBottom: "40px",
  }

  const { ref } = useSectionInView("Projects", 0.5)
  
  return (
    <section id="project" ref={ref}>
        <div className="container-fluid" style={style}>
            <h1 className={styles.projectHeader}>My Projects</h1>
            {ProjectData.map((item) => (
              <React.Fragment key={item.id}>
                <Projects id={item.id} images={item.images} projectnames={item.name} link={item.link} />
              </React.Fragment>
            ))}
        </div>
    </section>
  )
}

export default MyProject