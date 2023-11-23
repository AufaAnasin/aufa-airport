import AbilitiesCard from 'components/AbilitiesCard'
import React from 'react'
import styles from './Skills.module.css'
import { AbiltiesCardData } from '../../data/data'

type Props = {}

function Skills({}: Props) {
  
  return (
    <section id='abilities' className={styles.customSection}>
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
        <div className={styles.buttonWrapper}>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Skills