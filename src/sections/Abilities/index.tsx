import Timeline from 'components/Timeline'
import React from 'react'
import styles from './Abilities.module.css'

type Props = {}

function Abilities({}: Props) {

  return (
    <section id="experience">
        <div className="container">
            <h2 className={styles.experienceHeader}>Experience</h2>
            <Timeline  />
        </div>
    </section>
  )
}

export default Abilities