// @ts-nocheck
import React from 'react';
import styles from "../../styles/components/curriculum/experience.css";


function ExperienceList() {
  const experience = [
    {
      title: 'Logistica Inditex',
      date: '2024',
    },
    {
      title: 'Instalador Paneles Solares en SIPAMA',
      date: '2024',
    },
    {
      title: 'Informatico de Plenum-ingenieros',
      date: '2023',
    },
  ];

  return (
    <div className={styles.experience}>
      <h2>Experiencia Laboral</h2>
      {experience.map((item, index) => (
        <div key={index} className={styles.experienceItem}>
          <h3>{item.title}</h3>
          <p className={styles.date}>{item.date}</p>
        </div>
      ))}
    </div>
  );
}

export default ExperienceList;