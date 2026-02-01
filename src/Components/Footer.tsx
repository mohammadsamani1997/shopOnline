import React from 'react';
import styles from '../styles/Landing.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.footerLeft}>
          <strong>Business Name</strong>
          <div className={styles.socials}>
            <a href="#">Instagram</a>
            <a href="#">Telegram</a>
          </div>
        </div>

        <div className={styles.footerRight}>© {new Date().getFullYear()} Business Name. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
