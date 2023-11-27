"use client"
import { motion } from 'framer-motion'
import React from 'react'
import styles from './SkillCard.module.css'


type Props = {
  icon: string, 
  name: string,
}

function SkillCard({ icon, name}: Props) {
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

  const iconStyle: React.CSSProperties = {
    fontSize: "70px"
  }
  return (
    <>
    <motion.div className={`card ${styles.skillCard}`}
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{
      once: true,
    }}
    >
        <i className={`${icon}`} style={iconStyle}></i>
        <h2>{name}</h2>
    </motion.div>
    </>
  )
}

export default SkillCard