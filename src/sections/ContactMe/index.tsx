import React from 'react'
import styles from './ContactMe.module.css'

type Props = {}

function ContactMe({}: Props) {
  return (
    <section id="contact">
      <div className={`container ${styles.customContainer}`}>
        <div className="row">
          <h2 className={styles.letsTalk}>Lets Talk! 😁</h2>
          <p className={styles.letsTalkDesc}>If you are interested in my work or have any questions, do not hesitate to write to me!</p>
          <div className={styles.formplate}>
            <form>
              <div className={styles.inputBox}>
                <input type="text" required />
                <span>Name</span>
                <i></i>
              </div>
              <div className={styles.inputBox}>
                <input type="email" required />
                <span>Email</span>
                <i></i>
              </div>
              <div className={styles.inputBox}>
                <input type="text" required />
                <span>Message</span>
                <i></i>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMe