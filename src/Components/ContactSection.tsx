import React from 'react';
import styles from '../styles/Landing.module.css';

const ContactSection: React.FC = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>Contact</h2>

        <div className={styles.contactGrid}>
          <div>
            <p className={styles.contactItem}><strong>Phone:</strong> +98 XXXXXXXXXX</p>
            <a href="https://wa.me/98XXXXXXXXXX" className={styles.ctaPrimary}>WhatsApp / Telegram</a>
          </div>

          <div>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1169650179!2d72.5797427!3d33.684422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQxJzUxLjAiTiA3MsKwMzQnNDYuMCJF!5e0!3m2!1sen!2sus!4v1610000000000"
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>

        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className={styles.contactForm}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required />
          <button type="submit" className={styles.ctaPrimary}>Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
