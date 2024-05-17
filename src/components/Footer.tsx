'use client';

import React from 'react';
import styles from '@/src/styles/footer.module.css'; // Import the CSS module
import logo from "@/public/logo-single.png"
import Image from 'next/image';

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Image
          src={logo}
          alt="Akdeniz Üniversitesi Logo"
          className={styles.footerImage}
        />
        <p className={styles.footerText}>cart curt</p>
      </div>
    </footer>
  );
};

export default Footer;
