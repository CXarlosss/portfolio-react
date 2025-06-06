// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/curriculum/education.module.css';

function EducationList() {
  const education = [
    {
      title: 'Bootcamp de Neoland de Web Development',
      date: 'ENERO 2025 - MARZO 2025',
      description: 'Trabajado con HTML, CSS, Javascript, REDUX, web components, Lit Element, VueJS, React, Svelte, NodeJS, Express, MongoDB',
    },
    {
      title: 'Front-End Web Development Foundation Course',
      date: 'MARZO 2024 - JUNIO 2024',
      description: 'Bootstrap 5 HTML CSS Flexbox Crear páginas web Responsives adaptables a celulares, tablet y computadoras de escritorio Subir páginas web a hosting gratuitos Trabajar con Firebase, Autenticación con Google y Firestore (bases de datos en tiempo real) Utilizar componentes de Bootstrap y entender su funcionamiento',
    },
    {
      title: 'Programación orientada a objetos y Bases de datos relacionales',
      date: 'SEPTIEMBRE 2023 - MARZO 2024',
      description: 'Bases de Datos Relacionales, incluyendo modelado, normalización y consultas SQL avanzadas. Se enseña la integración de aplicaciones con bases de datos mediante ORM y frameworks. Finalmente, se profundiza en pruebas, depuración, seguridad y metodologias ágiles para el desarrollo de software.',
    },
  ];

  return (
    <div className={styles.education}>
      <h2 className={styles.mainTitle}>Formación Académica</h2> {/* Añadida clase para el título principal */}
      <div className={styles.educationItemsContainer}> {/* Nuevo contenedor para la cuadrícula/lista de ítems */}
        {education.map((item, index) => (
          <div key={index} className={styles.educationItem}>
            <h3 className={styles.educationTitle}>{item.title}</h3> {/* Clase específica para el título del curso */}
            <p className={styles.educationDate}>{item.date}</p> {/* Clase específica para la fecha */}
            <p className={styles.educationDescription}>{item.description}</p> {/* Clase específica para la descripción */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationList;