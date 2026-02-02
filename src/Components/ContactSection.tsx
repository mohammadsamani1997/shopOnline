import React from "react";
import styles from "../styles/Landing.module.css";

const ContactSection: React.FC = () => {
  const phone = "+98 21 1234 5678";
  const whatsapp = "+98 912 345 6789";
  const email = "info@darchin.ir";

  return (
    <section className={styles.contact}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>Contact Darchin</h2>

        <div className={styles.contactGrid}>
          <div>
            <p className={styles.contactItem}><strong>Phone:</strong> <a href={`tel:${phone.replace(/\s+/g,"")}`}>{phone}</a></p>
            <p className={styles.contactItem}><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
            <p className={styles.contactItem}><strong>WhatsApp:</strong> <a href={`https://wa.me/98${whatsapp.replace(/[^\d]/g,"")}`} target="_blank" rel="noopener noreferrer">{whatsapp}</a></p>
            <div style={{ marginTop: 12 }}>
              <a className={styles.ctaPrimary} href="/contact">Send us a message</a>
            </div>
          </div>

          <div>
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Tehran+Iran&output=embed"
              width="100%"
              height="260"
              style={{ border: 0, borderRadius: 8 }}
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
