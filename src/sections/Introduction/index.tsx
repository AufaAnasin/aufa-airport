import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './Introduction.module.css'

// component
import SolidButton from 'components/SolidButton'
import TransparantButton from 'components/TransparantButton'

type Props = {}

function Introduction({}: Props) {
  return (
    <section id="about" className={styles.aboutsection}>
      <div className="container">
        <div className={styles.containerWrapper}>
            <div className={styles.typographyWrapper}>
                <h2 className={styles.enthustasticTypo}>Enthusiastic <span>in</span></h2>
                <h1 className={styles.highTagline}>Frontend Engineer</h1>
                <p className={styles.description}>This website is created with NextJS and Typescript, here you can see my project that mostly using <span className={styles.enthustasticTypoSec}>React(Vite)JS</span></p>
                <div className={styles.buttonWrapper}>
                  <SolidButton icon="fa-solid fa-download" buttonText='Download for CV' goTo='https://drive.google.com/file/d/1er_wXIsIbm2fTXpWyexjIN5WP8QGP1-r/view?usp=share_link' />
                  <TransparantButton iconButton='fa-brands fa-linkedin' textButton='View Linkedin' goTo='https://www.linkedin.com/in/aufaanasin/' /> 
                </div>
            </div>

        </div>
    </div>
    </section>
  )
}

export default Introduction