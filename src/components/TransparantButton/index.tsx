import React from 'react'
import styles from './TransparantButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

type Props = {
    iconButton: string,
    textButton: string,
    goTo: string,
}

function TransparantButton({iconButton, textButton, goTo}: Props) {
  return (
    <>
    <Link href={goTo} style={{textDecoration: "none"}}>
    <button type="button" className={`btn btn-outline-primary ${styles.linkedinButton}`}><span><FontAwesomeIcon className={styles.customIcon} icon={iconButton} /></span>{textButton}</button>
    </Link>
    </>
  )
}

export default TransparantButton