"use client"

import React from 'react'
import styles from './Navbar.module.css'
import { motion } from 'framer-motion';
import { NavbarData } from 'data/data';
import Link from 'next/link';
import { useActiveSectionContext } from 'app/context/active-section-context';

type Props = {}

export default function MainNavbar({}: Props) {

 const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <header className={styles.navbarWrapper}>
      <motion.div className={styles.navbar} initial={{y : -100, x: "-50%", opacity: 0}} animate={{y : 0, x: "-50%", opacity: 1}}>
      </motion.div>
      <nav className={styles.navigation}>
        <ul className={styles.ulStyle}>
          {NavbarData.map((items) => (
            <motion.li 
            className={styles.liStyle} 
            key={items.hash}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
              <Link 
              onClick={() => {
                setActiveSection(items.name)
                setTimeOfLastClick(Date.now())
              }}
              className={activeSection === items.name ? `${styles.linkStyleSelected}` : `${styles.linkStyle}`} href={items.hash} style={{ textDecoration: 'none' }}>
                {items.name}
                {items.name === activeSection && (
                  // for rounded in navbar
                    <motion.span 
                    className={styles.roundedBackground}
                    // layout id value is got from the ustate of activesection
                    layoutId='activeSection'
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30
                    }}
                    />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
