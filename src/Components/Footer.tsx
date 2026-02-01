import React from "react";
import styles from "../styles/Landing.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner} style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
        <div className={styles.footerLeft}>
          <strong>ShopCenter</strong>
          <div className={styles.socials}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">Telegram</a>
          </div>
        </div>

        <div style={{textAlign:"right"}}>
          <div>Phone: <a href="tel:+982112345678">+98 21 1234 5678</a></div>
          <div>Email: <a href="mailto:info@shopcenter.example">info@shopcenter.example</a></div>
          <div style={{marginTop:8}}> {new Date().getFullYear()} ShopCenter. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
