// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/common/footer.css'; // Use Common.module.css
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Example icons

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {year} Carlos de Petronila Rodríguez</p>
        <div className={styles.socialLinks}>
          <a href="TU_LINKEDIN_URL" aria-label="LinkedIn"><FaLinkedin />https://www.linkedin.com/in/carlos-de-petronila-rodriguez/</a>
          <a href="TU_GITHUB_URL" aria-label="GitHub"><FaGithub />https://github.com/CXarlosss</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;