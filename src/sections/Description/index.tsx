import React from 'react'
import PreviousButton from 'components/PreviousButton'
import AufaAnasin from 'components/img/aufa.png'
import Image from 'next/image'
import styles from './Description.module.css'

type Props = {}

function Description({}: Props) {
  return (
    <div className="container">
      <div className={`row ${styles.rowfirst}`}>
        <div className={`col ${styles.customCol}`}>
          <Image src={AufaAnasin} alt='Aufa' className={styles.aufa}/>
        </div>
        <div className={`col ${styles.customCol}`}>
          <div className="textWrapper">
            <h1><span className={styles.fullName}>Muhammad Aufa Anasin,</span> <span className={styles.titleName}>B.Cs</span></h1>
            <p>Welcome to my Airport! I am a recent graduate from Telkom University, specializing in Computer Science, and I call the vibrant city of Bandung my home. With a strong foundation in HTML, CSS, JavaScript, and ReactJS/NextJS, I'm well-equipped to bring your web development projects to life. Currently, I'm on a journey to master Java and Spring Boot, adding to my repertoire of skills. What sets me apart is my passion for rapid learning and my eagerness to embrace new technologies and challenges.<br /><br /> I thrive in collaborative team environments, as I believe in the power of synergy. If you're looking for a dedicated, versatile, and quick-learning web developer, I'm the one you need. Feel free to get in touch with me for consultation or to explore opportunities for collaboration!</p>
            <p><a className={styles.mailto}href="mailto:anasinaufa@gmail.com">anasinaufa@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description