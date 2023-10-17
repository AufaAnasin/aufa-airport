import Image from 'next/image'
import React from 'react'
import styles from './About.module.css'
import aufaimg from '../../components/img/aufa.png'

// component
import TransparantButton from 'components/TransparantButton'

type Props = {}

function AboutMe({}: Props) {
  return (
    <section>
        <div className="container">
        <div className="row">
            <div className={`col ${styles.aboutMe}`}>
                <div className={`card ${styles.aboutmeCard}`}>
                        <div className={styles.imgWrapper}>
                            <Image src={aufaimg} alt="Aufa" className={styles.aufaimage} />
                        </div>
                        <div className={styles.textWrapper}>
                                <h1>About Me</h1>
                                <p>Enthusiastic Frontend Developer with a passion for creating dynamic and interactive user interfaces using React. Highly skilled in HTML, CSS, JavaScript, and modern frontend libraries and frameworks. Strong ability to turn design concepts into functional and responsive web applications. Committed to staying up-to-date with the latest industry trends and technologies.</p>
                                <TransparantButton iconButton='fa-brands fa-linkedin' textButton='View Linkedin' goTo='https://www.linkedin.com/in/aufaanasin/' /> 
                        </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default AboutMe