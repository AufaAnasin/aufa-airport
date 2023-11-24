import React from 'react'
import styles from './TransparantButton.module.css'
import Link from 'next/link'

type Props = {
    iconButton: string,
    textButton: string,
    goTo: string,
    onClick: any
}

function TransparantButton({iconButton, textButton, goTo, onClick}: Props) {
  return (
    <>
    <Link href={goTo} style={{textDecoration: "none"}}>
    <button type="submit" onClick={onClick} className={`btn btn-outline-primary ${styles.linkedinButton}`}><i className={`${iconButton} ${styles.customIcon}`}></i>{textButton}</button>
    </Link>
    </>
  )
}

export default TransparantButton