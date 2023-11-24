"use client"

import AbilitiesCard from 'components/AbilitiesCard'
import React, { useEffect } from 'react'
import styles from './Skills.module.css'
import { AbiltiesCardData } from '../../data/data'
import { useSectionInView } from 'app/hooks/hooks'

type Props = {}

function Skills({}: Props) {
  // for scrolling in view
  const { ref } = useSectionInView("Abilities")

  return (
    <section id='abilities' className={styles.customSection} ref={ref}>
    <div className="container">
      <div className={`row ${styles.abilities}`}>
        <h1 className={`mb-2 ${styles.abilitiesHeader}`}>My Abilities</h1>
      </div>
      <div className={`row ${styles.rowCustom}`}>
        <div className={styles.cardWrapper}>
          {AbiltiesCardData.map((item) => (
            <React.Fragment key={item.id}>
              <AbilitiesCard icon={item.icon} tagline={item.tagline} description={item.description} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
    </section>
  )
}

export default Skills