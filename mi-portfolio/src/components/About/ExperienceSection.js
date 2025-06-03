// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/about/experienceSection.module.css'; // Use the same CSS Module

function ExperienceSection() {
  return (
    <div className={styles.experienceSection}>
      <h2>Experiencia Laboral</h2>
      <div className={styles.experienceItem}>
        <h3 className={styles.experienceTitle}>Logistica Inditex</h3> {/* CORREGIDO: Añadida clase experienceTitle */}
        {/* Asumo que "Logistica Inditex" es la empresa, y "2024" la fecha.
            Si quieres separar empresa y puesto, puedes añadir un <p> para el puesto. */}
        <p className={styles.experienceCompany}>Inditex</p> {/* AÑADIDO: para usar experienceCompany */}
        <p className={styles.experienceDates}>2024</p> {/* CORREGIDO: experienceDates */}
        <p className={styles.experienceDescription}>
          Trabajé en logística.
        </p>
      </div>
      <div className={styles.experienceItem}>
        <h3 className={styles.experienceTitle}>Instalador Paneles Solares</h3> {/* CORREGIDO: Añadida clase experienceTitle */}
        <p className={styles.experienceCompany}>SIPAMA</p> {/* AÑADIDO: para usar experienceCompany */}
        <p className={styles.experienceDates}>2024</p> {/* CORREGIDO: experienceDates */}
        <p className={styles.experienceDescription}>
          Instalación de paneles solares.
        </p>
      </div>
      <div className={styles.experienceItem}>
        <h3 className={styles.experienceTitle}>Informatico</h3> {/* CORREGIDO: Añadida clase experienceTitle */}
        <p className={styles.experienceCompany}>Plenum-ingenieros</p> {/* AÑADIDO: para usar experienceCompany */}
        <p className={styles.experienceDates}>2023</p> {/* CORREGIDO: experienceDates */}
        <p className={styles.experienceDescription}>
          Soporte informático.
        </p>
      </div>
    </div>
  );
}

export default ExperienceSection;