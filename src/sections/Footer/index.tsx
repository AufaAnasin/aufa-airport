import React from 'react'
import styles from './Footer.module.css'

type Props = {}

function Footer({}: Props) {
  return (
    <section>
    <footer className={styles.footer}>
      <small className={styles.small}>&copy; 2023 Aufa Anasin. All right reserved. </small>
      <p className={styles.paragraph}><span className={styles.span}>About this website:</span> build with React & NextJS (App Router & Server Actions), Typescript, Bootstrap, CSS Module, Framer Motion.</p>
    </footer>
    </section>
  )
}

export default Footer