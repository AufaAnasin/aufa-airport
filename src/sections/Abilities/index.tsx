"use client"

import { useSectionInView } from 'app/hooks/hooks'
import Timeline from 'components/Timeline'
import React from 'react'
import styles from './Abilities.module.css'

type Props = {}

function Abilities({}: Props) {
  const { ref } = useSectionInView("Experience", 0.3)

  return (
    <section id="experience">
        <div className="container">
            <h2 className={styles.experienceHeader} ref={ref}>Experience</h2>
            <Timeline  />
        </div>
    </section>
  )
}

export default Abilities