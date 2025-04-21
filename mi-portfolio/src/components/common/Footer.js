// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/common/footer.module.css'; // Use Common.module.css
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Example icons

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {year} Carlos de Petronila Rodríguez</p>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/carlos-de-petronila-rodriguez/" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/CXarlosss" aria-label="GitHub"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;