"use client"

import SolidButton from 'components/SolidButton'
import Image from 'next/image'
import React, { useRef } from 'react'
import styles from './Projects.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

type Props = {
  images: string,
  projectnames: string,
  link: string,
  id: number
}



function Projects({images, projectnames, link, id}: Props) {

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  })
  const scaleProgress = useTransform(scrollYProgress, [0,1],  [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0,1],  [0.6, 1])

  return (
    <motion.div className={`container ${styles.customContainer}`}
    ref={ref}
    style={{
      scale: scaleProgress,
      opacity: opacityProgress
    }}
    >
      <div className={`${id % 2 !== 0 ? `${styles.bgColorBlue}` : `${styles.bgColorBlueLight}`}`}>
        <div className={styles.cardCustom}>
          <Image src={images}
          width={990} 
          height={600} 
          alt="Projects"
          className={styles.customImg} />
            <h2>{projectnames}</h2>
            <SolidButton buttonText='View Github' icon='fab fa-github' goTo={link} />
        </div>
      </div>
    </motion.div>
  )
}

export default Projects