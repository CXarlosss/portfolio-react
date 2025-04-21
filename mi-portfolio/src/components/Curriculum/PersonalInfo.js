// @ts-nocheck
import React from 'react';
import styles from "../../styles/components/curriculum/personalinfo.css";


function PersonalInfo() {
  return (
    <div className={styles.personalInfo}>
      <h1>CARLOS DE PETRONILA RODRÍGUEZ</h1>
      <p className={styles.title}>DESARROLLADOR WEB</p>
      <div className={styles.contact}>
        <p>Email: carlosdepet@gmail.com</p>
        <p>Teléfono: +34 628 19 22 53</p>
        <p>
          <a href="TU_LINKEDIN_URL">https://www.linkedin.com/in/carlos-de-petronila-rodriguez/</a> | <a href="TU_GITHUB_URL">https://github.com/CXarlosss</a>
        </p>
      </div>
    </div>
  );
}

export default PersonalInfo;