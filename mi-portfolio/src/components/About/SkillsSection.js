// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/about/skillsSection.module.css'; // Use the same CSS Module

function SkillsSection() {
  return (
    <div className={styles.skillsSection}>
      <h2>Habilidades Técnicas</h2>
      
      {/* Nuevo contenedor para la cuadrícula de habilidades */}
      <div className={styles.skillsGrid}>
        
        {/* Cada skillCategory se convierte en una 'tarjeta' */}
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Front-end</h3>
          <ul className={styles.skillList}>
            <li className={styles.skillItem}>HTML</li>
            <li className={styles.skillItem}>CSS</li>
            <li className={styles.skillItem}>JavaScript</li>
            <li className={styles.skillItem}>React</li>
            <li className={styles.skillItem}>Redux</li> 
            <li className={styles.skillItem}>Web Components</li> 
            <li className={styles.skillItem}>LitElement</li> 
            <li className={styles.skillItem}>VueJS</li> 
            <li className={styles.skillItem}>Svelte</li> 
          </ul>
        </div>
        
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Back-end</h3>
          <ul className={styles.skillList}>
            <li className={styles.skillItem}>NodeJS</li>
            <li className={styles.skillItem}>Express.js</li>
            <li className={styles.skillItem}>MongoDB</li>
          </ul>
        </div>
        
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Control de Versiones</h3>
          <ul className={styles.skillList}>
            <li className={styles.skillItem}>Git</li>
            <li className={styles.skillItem}>Github</li>
          </ul>
        </div>
        
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Otros</h3> 
          <ul className={styles.skillList}>
            <li className={styles.skillItem}>Bootstrap 5</li>
            <li className={styles.skillItem}>Firebase</li>
            <li className={styles.skillItem}>SQL</li>
            <li className={styles.skillItem}>ORM</li>
            <li className={styles.skillItem}>Metodologías Ágiles</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;