import React from 'react'
import styles from './Hero.module.css'
// import image from 'components/img/hero-bg.jpg'

type Props = {}

function Hero({}: Props) {
  return (
    <>
    <section id='home'>
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