"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import styles from './Navbar.module.css'

type Props = {}

export default function MainNavbar({}: Props) {
  const [navbarClass, setNavbarClass] = useState<string>('');

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setNavbarClass(styles.frozen);
    } else {
      setNavbarClass(styles.solid);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar fixed="top" className={`navbar ${navbarClass}`} expand="lg">
      <Container>
      <Navbar.Brand href="#">Airport</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={`ml-auto`}>
          <div className={styles.buttonWrapper}>
          <p href="">Hallo</p>
          <p href="">Im </p>
          <p href="">Here</p>
          </div>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
