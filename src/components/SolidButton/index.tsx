import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Solidbutton.module.css'
import Link from 'next/link'


type Props = {
    icon: string,
    buttonText: string,
    goTo: string, 
    
}

function SolidButton({icon, buttonText, goTo}: Props) {
  return (
    <Link href={goTo} style={{textDecoration: "none"}}>
      <button type="button" className={`btn btn-primary ${styles.customBtn}`}>
        <span>
          <FontAwesomeIcon className={styles.customIcon} icon={icon} />
        </span>{buttonText}
      </button>
    </Link>
  )
}

export default SolidButton