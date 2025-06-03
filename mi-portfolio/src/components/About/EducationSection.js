// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/about/educationSection.module.css';

function EducationSection() {
  return (
    <section className={styles.educationSection}>
      <h2 className={styles.sectionTitle}>Formación Académica</h2>
      <div className={styles.timeline}>
        <div className={styles.educationItem}>
          <div className={styles.educationHeader}>
            <h3 className={styles.educationTitle}>Bootcamp de Neoland de Web Development</h3>
            <span className={styles.educationDate}>ENERO 2025 - MARZO 2025</span>
          </div>
          <div className={styles.educationContent}>
            <p className={styles.educationDescription}>
              Trabajado con HTML, CSS, Javascript, REDUX, web components, Lit Element,
              VueJS, React, Svelte, NodeJS, Express, MongoDB
            </p>
            <div className={styles.skills}>
              {['HTML', 'CSS', 'JavaScript', 'React', 'VueJS', 'NodeJS', 'MongoDB'].map(skill => (
                <span key={skill} className={styles.skillPill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className={styles.educationItem}>
          <div className={styles.educationHeader}>
            <h3 className={styles.educationTitle}>Front-End Web Development Foundation Course</h3>
            <span className={styles.educationDate}>MARZO 2024 - JUNIO 2024</span>
          </div>
          <div className={styles.educationContent}>
            <p className={styles.educationDescription}>
              Bootstrap 5 HTML CSS Flexbox Crear páginas web Responsives adaptables a
              celulares, tablet y computadoras de escritorio Subir páginas web a hosting
              gratuitos Trabajar con Firebase, Autenticación con Google y Firestore
              (bases de datos en tiempo real) Utilizar componentes de Bootstrap y
              entender su funcionamiento
            </p>
            <div className={styles.skills}>
              {['Bootstrap', 'Responsive Design', 'Firebase', 'Flexbox'].map(skill => (
                <span key={skill} className={styles.skillPill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className={styles.educationItem}>
          <div className={styles.educationHeader}>
            <h3 className={styles.educationTitle}>Programación orientada a objetos y Bases de datos relacionales</h3>
            <span className={styles.educationDate}>SEPTIEMBRE 2023 - MARZO 2024</span>
          </div>
          <div className={styles.educationContent}>
            <p className={styles.educationDescription}>
              Bases de Datos Relacionales, incluyendo modelado, normalización y
              consultas SQL avanzadas. Se enseña la integración de aplicaciones con
              bases de datos mediante ORM y frameworks. Finalmente, se profundiza en
              pruebas, depuración, seguridad y metodologias ágiles para el desarrollo
              de software.
            </p>
            <div className={styles.skills}>
              {['OOP', 'SQL', 'ORM', 'Agile'].map(skill => (
                <span key={skill} className={styles.skillPill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;