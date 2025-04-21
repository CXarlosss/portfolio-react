// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/about/skillsSection.module.css'; // Use the same CSS Module

function SkillsSection() {
  return (
    <div className={styles.skillsSection}>
      <h2>Habilidades Técnicas</h2>
      <div className={styles.skillCategory}>
        <h3>Front-end</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li> 
          <li>Web Components</li> 
          <li>LitElement</li> 
          <li>VueJS</li> 
          <li>Svelte</li> 
        </ul>
      </div>
      <div className={styles.skillCategory}>
        <h3>Back-end</h3>
        <ul>
          <li>NodeJS</li>
          <li>Express.js</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div className={styles.skillCategory}>
        <h3>Control de Versiones</h3>
        <ul>
          <li>Git</li>
          <li>Github</li>
        </ul>
      </div>
      <div className={styles.skillCategory}>
        <h3>Otros</h3> 
        <ul>
          <li>Bootstrap 5</li>
          <li>Firebase</li>
          <li>SQL</li>
          <li>ORM</li>
          <li>Metodologías Ágiles</li>
        </ul>
      </div>
    </div>
  );
}

export default SkillsSection;