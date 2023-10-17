import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './AbilitiesCard.module.css'


type Props = {
  icon: string, 
  tagline: string, 
  description: string
}

function AbilitiesCard({icon, tagline, description}: Props) {
  return (
    <div className={`card ${styles.abilitiesCard}`}>
      <span><FontAwesomeIcon icon={icon} className={styles.iconFa}  /></span>
      <h5>{tagline}</h5>
      <p>{description}</p>
    </div>
  )
}

export default AbilitiesCard