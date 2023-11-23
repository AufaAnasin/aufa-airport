"use client"

import Image from 'next/image'
import React, { useRef } from 'react'
import styles from './About.module.css'
import aufaimg from '../../components/img/aufa.png'
// component
import TransparantButton from 'components/TransparantButton'
import { motion, useScroll, useTransform } from 'framer-motion'

type Props = {}

function AboutMe({}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  })
  const scaleProgress = useTransform(scrollYProgress, [0,1],  [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0,1],  [0.6, 1])

  return (
    <section>
        <div className="container">
        <div className="row">
            <div className={`col ${styles.aboutMe}`}>
                <div className={`${styles.aboutmeCard}`} 
                >
                <motion.div className={styles.imgWrapper}
                          ref={ref}
                          style={{
                            scale: scaleProgress,
                            opacity: opacityProgress
                          }}
                        >
                            <Image src={aufaimg} alt="Aufa" className={styles.aufaimage} />
                        </motion.div>
                        <motion.div className={styles.textWrapper}
                          ref={ref}
                          style={{
                            scale: scaleProgress,
                            opacity: opacityProgress
                          }}
                        >
                                <p>I&apos;m an enthusiastic <b>Frontend Developer</b> with a passion for creating dynamic and interactive user interfaces using React. Highly skilled in HTML, CSS, JavaScript, and modern frontend libraries and frameworks. Strong ability to turn design concepts into functional and responsive web applications. Committed to staying up-to-date with the latest industry trends and technologies.</p>
                                <TransparantButton iconButton='fa-brands fa-linkedin' textButton='View Linkedin' goTo='https://www.linkedin.com/in/aufaanasin/' /> 
                        </motion.div>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default AboutMe