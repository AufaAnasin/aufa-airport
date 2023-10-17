import AbilitiesCard from 'components/AbilitiesCard'
import React from 'react'
import styles from './Skills.module.css'
import { AbiltiesCardData } from '../../data/data'

//
import SolidButton from 'components/SolidButton'


type Props = {}

function Skills({}: Props) {
  
  return (
    <div className="container">
      <div className={`row ${styles.abilities}`}>
        <h1 className='mb-2'>My Abilities</h1>
      </div>
      <div className={`row ${styles.rowCustom}`}>
        <div className={styles.cardWrapper}>
          {AbiltiesCardData.map((item) => (
            <AbilitiesCard key={item.id} icon={item.icon} tagline={item.tagline} description={item.description} />
          ))}
        </div>
        <div className={styles.buttonWrapper}>
          <SolidButton icon='fa-solid fa-person' buttonText='About Me' goTo='aboutme'/>
        </div>
      </div>
    </div>
  )
}

export default Skills