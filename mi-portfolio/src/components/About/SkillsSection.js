// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/about/skillsSection.module.css';

export default function SkillsSection() {
  return (
    <section className={styles.skillsSection} aria-labelledby="skills-title">
      <h2 id="skills-title" className={styles.sectionTitle}>Habilidades Técnicas</h2>

      <div className={styles.skillsGrid}>
        
        <article className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Front-end</h3>
          <ul className={styles.skillList}>
            <li className={styles.skillItem}>HTML &amp; CSS</li>
            <li className={styles.skillItem}>JavaScript (ES6+)</li>
            <li className={styles.skillItem}>React · Redux</li>
            <li className={styles.skillItem}>Web Components (LitElement)</li>
            <li className={styles.skillItem}>Vue.js · Svelte</li>
          </ul>
        </article>

        <article className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Back-end</h3>
          <ul className={styles.skillList}>
            <li className={styles.skillItem}>Node.js · Express</li>
            <li className={styles.skillItem}>MongoDB (Mongoose)</li>
            <li className={styles.skillItem}>SQL &amp; ORM básicos</li>
          </ul>
        </article>

        <article className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Control de Versiones</h3>
          <ul className={styles.skillList}>
            <li className={styles.skillItem}>Git</li>
            <li className={styles.skillItem}>GitHub (proyectos colaborativos)</li>
          </ul>
        </article>

        <article className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Otros</h3>
          <ul className={styles.skillList}>
            <li className={styles.skillItem}>Bootstrap 5</li>
            <li className={styles.skillItem}>Firebase (Auth & Firestore)</li>
            <li className={styles.skillItem}>Metodologías Ágiles (Scrum/Kanban)</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
