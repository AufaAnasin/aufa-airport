  "use client"

  import { useSectionInView } from 'app/hooks/hooks'
  import TransparantButton from 'components/TransparantButton'
  import React, { useRef, useState } from 'react'
  import { toast, ToastContainer } from 'react-toastify'
  import styles from './ContactMe.module.css'
  import 'react-toastify/dist/ReactToastify.css';
  import emailjs from "@emailjs/browser";
  import { motion } from 'framer-motion'
  import { PropagateLoader } from 'react-spinners'

  type Props = {}

  function ContactMe({}: Props) {

    const [loading, setLoading] = useState(false);
    const [loadingAnimation, setLoadingAnimation] = useState(false);
    

    // for sending email
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent) => {
      e.preventDefault();

      const inputs = form.current?.querySelectorAll('input[required]');
      if (inputs) {
        let hasEmptyField = false;
        inputs.forEach((input) => {
          const inputElement = input as HTMLInputElement;
          if (!inputElement.value.trim()) {
            hasEmptyField = true;
          }
        });

        if (hasEmptyField) {
          showToastFailed();
          return;
        }
      }


      if (form.current) {
        setLoadingAnimation(true)
        emailjs
        .sendForm(
          "service_jd477h8",
          "template_ytjppi8",
          form.current,
          "u3avUpvjWP3kCXacd"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            showToast();
            setLoadingAnimation(false)
            setLoading(true)
          },
          (error) => {
            showToastFailed();
            console.log(error.text);
          }
        );
      }
    };

    const { ref } = useSectionInView("Contact", 0.5)
    const showToast = () => {
      toast.success('Email sent successfully! 🚀', {
        position: "top-right",
        autoClose: 3000, // Set the duration for the toast to be visible
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    };
    const showToastFailed = () => {
      toast.error('There was an error 😿', {
        position: "top-right",
        autoClose: 3000, // Set the duration for the toast to be visible
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    };

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

    return (
      <section id="contact" ref={ref}>
        <div className={`container ${styles.customContainer}`}>
          <div className="row">
            <h2 className={styles.letsTalk}>Lets Talk! 😁</h2>
            {loading ? (
              <motion.p 
              className={styles.letsTalkDesc}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              >
                Thank you for reaching out! 😺
              </motion.p>
            ) : (
              <p className={styles.letsTalkDesc}>
                If you are interested in my work or have any questions, do not hesitate to write to me! 🐱
              </p>
            )}
            <div className={styles.formplate}>
              <form ref={form}>
                <div className={styles.inputBox}>
                  <input type="text" name='name' required />
                  <span>Name</span>
                  <i></i>
                </div>
                <div className={styles.inputBox}>
                  <input type="text" name='email' required />
                  <span>Email</span>
                  <i></i>
                </div>
                <div className={styles.inputBox}>
                  <input type="text" name='subject' required />
                  <span>Subject</span>
                  <i></i>
                </div>
                <div className={styles.inputBox}>
                  <input type="text" name='message' required />
                  <span>Message</span>
                  <i></i>
                </div>
                <div className={styles.buttonWrapper}>
                {loadingAnimation ? ( <motion.div className={styles.spinnerContainer}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                >
                <PropagateLoader color={'#123abc'} loading={loadingAnimation} />
              </motion.div> ) : (
                <motion.div variants={fadeInAnimationVariants} initial="initial" whileInView="animate">
                  <TransparantButton onClick={sendEmail} iconButton='fas fa-envelope' textButton='Send Email' goTo='#contact'></TransparantButton>
                </motion.div>
               ) }
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    )
  }

  export default ContactMe