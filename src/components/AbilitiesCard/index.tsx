"use client"

import { motion } from 'framer-motion'
import React from 'react'
import styles from './AbilitiesCard.module.css'


type Props = {
  icon: string,
  tagline: string, 
  description: string
}

function AbilitiesCard({ icon, tagline, description}: Props) {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 100,
      y: 0
    }
  }

  return (
    <motion.div
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    >
      <div className={`card ${styles.abilitiesCard}`}>
      <span><i className={icon} style={{fontSize: "50px"}}></i></span>
      <h5>{tagline}</h5>
      <p>{description}</p>
      </div>
    </motion.div>
  )
}

export default AbilitiesCard