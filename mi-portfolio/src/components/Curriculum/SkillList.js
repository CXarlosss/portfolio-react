// @ts-nocheck
import React from 'react';
import styles from "../../styles/components/curriculum/skillList.css";

function SkillsList() {
  const skills = {
    'Front-end': ['HTML', 'CSS', 'JavaScript', 'React'],
    'Back-end': ['NodeJS', 'Express.js', 'MongoDB'],
    'Control de Versiones': ['Git', 'Github'],
  };

  return (
    <div className={styles.skills}>
      <h2>Competencias Técnicas</h2>
      {Object.keys(skills).map((category, index) => (
        <div key={index} className={styles.skillsCategory}>
          <h3>{category}</h3>
          <ul className={styles.skillsList}>
            {skills[category].map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default SkillsList;