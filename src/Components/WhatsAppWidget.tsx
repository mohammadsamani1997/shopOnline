import React from "react";
import styles from "../styles/whatsapp.module.css";

const WhatsAppWidget: React.FC = () => {
  const phoneDigits = "989123456789"; // international digits, no plus
  const display = "+98 912 345 6789";
  const text = encodeURIComponent("Hello ShopCenter, I have a question about your products.");
  const href = `https://wa.me/${phoneDigits}?text=${text}`;

  return (
    <a
      className={styles.widget}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M20.52 3.48A11.86 11.86 0 0012.06.5C6 0.5 1.02 5.48 1.02 11.54c0 2.03.53 4.02 1.54 5.77L0.5 23.5l6.44-1.68a11.86 11.86 0 005.12 1.1c6.06 0 11.04-4.98 11.04-11.04a11.9 11.9 0 00-1.6-6.28z" fill="#25D366"/>
        <path d="M17.4 14.3c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.66.15s-.76.96-.93 1.16c-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.12-.61.12-.12.27-.34.4-.51.13-.17.17-.29.26-.49.09-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.19-.24-.58-.48-.5-.66-.51l-.56-.01c-.2 0-.52.07-.8.37-.28.3-1.08 1.05-1.08 2.56 0 1.51 1.11 2.97 1.27 3.18.16.2 2.2 3.4 5.34 4.77 3.14 1.37 3.14.91 3.7.85.56-.07 1.76-.72 2.01-1.41.25-.7.25-1.29.18-1.41-.07-.12-.27-.18-.57-.33z" fill="#fff"/>
      </svg>
      <span className={styles.label}>{display}</span>
    </a>
  );
};

export default WhatsAppWidget;
