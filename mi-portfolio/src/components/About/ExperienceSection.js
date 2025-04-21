// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/about/experienceSection.module.css'; // Use the same CSS Module

function ExperienceSection() {
  return (
    <div className={styles.experienceSection}>
      <h2>Experiencia Laboral</h2>
      <div className={styles.experienceItem}>
        <h3>Logistica Inditex</h3>
        <p className={styles.experienceDate}>2024</p>
        <p className={styles.experienceDescription}>
          Trabajé en logística.
        </p>
      </div>
      <div className={styles.experienceItem}>
        <h3>Instalador Paneles Solares en SIPAMA</h3>
        <p className={styles.experienceDate}>2024</p>
        <p className={styles.experienceDescription}>
          Instalación de paneles solares.
        </p>
      </div>
      <div className={styles.experienceItem}>
        <h3>Informatico de Plenum-ingenieros</h3>
        <p className={styles.experienceDate}>2023</p>
        <p className={styles.experienceDescription}>
          Soporte informático.
        </p>
      </div>
    </div>
  );
}

export default ExperienceSection;