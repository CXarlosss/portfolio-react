// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/about/introduction.css'; // Create a CSS Module for About page

function Introduction() {
  return (
    <div className={styles.introduction}>
      <h2>Sobre Mí</h2>
      <p>
        Hola, soy Carlos de Petronila Rodríguez, un desarrollador web apasionado por crear
        experiencias digitales innovadoras. Desde que comencé mi viaje en el mundo de la
        programación, me ha fascinado la capacidad de transformar ideas en aplicaciones
        web funcionales y atractivas.
      </p>
      <p>
        Mi enfoque principal es desarrollar soluciones web eficientes y centradas en el
        usuario. Soy una persona motivada, con ganas de aprender constantemente y
        comprometida con mi crecimiento profesional. Siempre busco mantenerme al día
        con las últimas tecnologías y tendencias en el desarrollo web.
      </p>
      <p>
        Con experiencia en Front-end (HTML, CSS, JavaScript, React) y Back-end
        (Node.js, Express, MongoDB), me siento cómodo trabajando en todo el ciclo de
        vida del desarrollo web. Además, valoro mucho el trabajo en equipo y la
        comunicación efectiva para lograr los mejores resultados.
      </p>
      <p>
        Si quieres conocer más sobre mis habilidades técnicas, experiencia y formación,
        ¡te invito a explorar las siguientes secciones!
      </p>
    </div>
  );
}

export default Introduction;