// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/home/skillBadge.css'; // Create Home.module.css
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'; // Example icons

function SkillBadge() {
  return (
    <section className={styles.skillsHighlight}>
      <h2>Habilidades Destacadas</h2>
      <div className={styles.skillsGrid}>
        <div className={styles.skillItem}>
          <FaHtml5 className={styles.skillIcon} />
          <p>HTML5</p>
        </div>
        <div className={styles.skillItem}>
          <FaCss3 className={styles.skillIcon} />
          <p>CSS3</p>
        </div>
        <div className={styles.skillItem}>
          <FaJs className={styles.skillIcon} />
          <p>JavaScript</p>
        </div>
        <div className={styles.skillItem}>
          <FaReact className={styles.skillIcon} />
          <p>React</p>
        </div>
        <div className={styles.skillItem}>
          <FaNodeJs className={styles.skillIcon} />
          <p>Node.js</p>
        </div>
        {/* ... other skills ... */}
      </div>
      <p className={styles.skillsDescription}>
        Soy un desarrollador versátil con un enfoque en crear interfaces de usuario
        atractivas y funcionales, así como en desarrollar soluciones robustas del lado
        del servidor.
      </p>
    </section>
  );
}

export default SkillBadge;