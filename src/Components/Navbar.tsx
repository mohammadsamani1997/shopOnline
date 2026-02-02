import React, { useState, useEffect } from 'react';
import styles from '../styles/navbar.module.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const handleLinkClick = () => setOpen(false);
  const toggleOpen = () => setOpen(v => !v);

  const onHamburgerKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleOpen();
    }
  };

  return (
    <nav className={styles.nav} role="navigation" aria-label="Main">
      <div className={styles.logo}>Darchin</div>

      

      <div className={styles.links}>
        <ul>
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/gallery" onClick={handleLinkClick}>Gallery</Link></li>
          <li><Link to="/why-us" onClick={handleLinkClick}>Why Us</Link></li>
          <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
      </div>

      <button
        className={styles.hamburger}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={toggleOpen}
        onKeyDown={onHamburgerKey}
      >
        <span className={open ? styles.hamburgerLineOpen : styles.hamburgerLine} />
        <span className={open ? styles.hamburgerLineOpen : styles.hamburgerLine} />
        <span className={open ? styles.hamburgerLineOpen : styles.hamburgerLine} />
      </button>

      <div
        className={`${styles.mobileMenu} ${open ? styles.open : ''}`}
        role="menu"
        aria-hidden={!open}
      >
        <ul>
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/gallery" onClick={handleLinkClick}>Gallery</Link></li>
          <li><Link to="/why-us" onClick={handleLinkClick}>Why Us</Link></li>
          <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
