// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/about/educationSection.module.css'; // Use the same CSS Module

function EducationSection() {
  return (
    <div className={styles.educationSection}>
      <h2>Formación Académica</h2>
      <div className={styles.educationItem}>
        <h3>Bootcamp de Neoland de Web Development</h3>
        <p className={styles.educationDate}>ENERO 2025 - MARZO 2025</p>
        <p className={styles.educationDescription}>
          Trabajado con HTML, CSS, Javascript, REDUX, web components, Lit Element,
          VueJS, React, Svelte, NodeJS, Express, MongoDB
        </p>
      </div>
      <div className={styles.educationItem}>
        <h3>Front-End Web Development Foundation Course</h3>
        <p className={styles.educationDate}>MARZO 2024 - JUNIO 2024</p>
        <p className={styles.educationDescription}>
          Bootstrap 5 HTML CSS Flexbox Crear páginas web Responsives adaptables a
          celulares, tablet y computadoras de escritorio Subir páginas web a hosting
          gratuitos Trabajar con Firebase, Autenticación con Google y Firestore
          (bases de datos en tiempo real) Utilizar componentes de Bootstrap y
          entender su funcionamiento
        </p>
      </div>
      <div className={styles.educationItem}>
        <h3>Programación orientada a objetos y Bases de datos relacionales</h3>
        <p className={styles.educationDate}>SEPTIEMBRE 2023 - MARZO 2024</p>
        <p className={styles.educationDescription}>
          Bases de Datos Relacionales, incluyendo modelado, normalización y
          consultas SQL avanzadas. Se enseña la integración de aplicaciones con
          bases de datos mediante ORM y frameworks. Finalmente, se profundiza en
          pruebas, depuración, seguridad y metodologias ágiles para el desarrollo
          de software.
        </p>
      </div>
    </div>
  );
}

export default EducationSection;