// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/contact/contactInfo.module.css'; // Use Contact.module.css
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'; // Example icons

function ContactInfo() {
  return (
    <div className={styles.contactInfo}>
      <h2>Mi Información de Contacto</h2>
      <p>
        <FaEnvelope /> Email: <a href="mailto:carlosdepet@gmail.com">carlosdepet@gmail.com</a>
      </p>
      <p>
        <FaPhone /> Teléfono: +34 628 19 22 53
      </p>
      <p>
        <FaLinkedin /> LinkedIn: <a href="https://www.linkedin.com/in/carlos-de-petronila-rodriguez/" target="_blank" rel="noopener noreferrer">Mi Perfil de LinkedIn</a>
      </p>
      <p>
        <FaGithub /> GitHub: <a href="https://github.com/CXarlosss" target="_blank" rel="noopener noreferrer">Mi Perfil de GitHub</a>
      </p>
      {/* Optional:
      <p>Ubicación: [Tu Ciudad, Tu País]</p>
      <p>Otra Red Social: <a href="...">...</p>
      */}
    </div>
  );
}

export default ContactInfo;