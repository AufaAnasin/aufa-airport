import React from 'react'
import styles from './Projects.module.css'

type Props = {}

function Projects({}: Props) {
  return (
    <>
    <div className={`container ${styles.customContainer}`}>
      <div className={styles.cardCustom}>
        Test
      </div>
    </div>
    </>
  )
}

export default Projects