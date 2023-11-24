"use client"
import { useSectionInView } from 'app/hooks/hooks'
import React, { useEffect } from 'react'
import styles from './Hero.module.css'

type Props = {}

function Hero({}: Props) {

  const { ref } = useSectionInView("Home", 0.75)
  return (
    <>
    <section id='home' ref={ref}>
    <div className={styles.backgroundImage}>
        <div className="container-fluid">
            <div className={styles.containerWrapper}>
                <div className={styles.typographyWrapper}>
                  <div className={styles.swipe}>
                   <h1 className={styles.helloTagline}>Hello!</h1>
                  </div>
                <p className={styles.nameTagline}>I&apos;m Aufa <span className={styles.anas}>Anas</span>in;</p>
                </div>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Hero