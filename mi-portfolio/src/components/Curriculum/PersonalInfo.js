// @ts-nocheck // You might not need this if your setup is correct
import React from 'react';
import styles from "../../styles/components/curriculum/personalinfo.module.css"; // Corrected import (using .module.css)
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function PersonalInfo() {
  return (
    <div className={styles.personalInfo}>
      <header> {/* Or <section>, depending on your overall structure */}
        <h1>CARLOS DE PETRONILA RODRÍGUEZ</h1>
        <p className={styles.title}>DESARROLLADOR WEB</p>
      </header>
      <div className={styles.contact}>
        <p>Email: carlosdepet@gmail.com</p>
        <p>Teléfono: +34 628 19 22 53</p>
        <p>
          <a
            href="https://www.linkedin.com/in/carlos-de-petronila-rodriguez/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} color="#0077b5" /> {/* Example styling */}
          </a>
          |
          <a
            href="https://github.com/CXarlosss"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} color="#171515" /> {/* Example styling */}
          </a>
        </p>
      </div>
    </div>
  );
}

export default PersonalInfo;