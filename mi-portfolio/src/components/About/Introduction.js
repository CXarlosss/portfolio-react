// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/about/introduction.module.css';

function Introduction() {
  return (
    <section className={styles.introduction}>
      {/* Imagen o avatar futura */}
      {/* <div className={styles.avatarContainer}>
        <img
          className={styles.avatar}
          src="/path-to-avatar.jpg"
          alt="Carlos de Petronila Rodríguez"
        />
      </div> */}

      <div className={styles.textContent}>
        <h2>Sobre Mí</h2>
        <p>
          Hola, soy <span className={styles.highlight}>Carlos de Petronila Rodríguez</span>, un desarrollador web
          apasionado por crear experiencias digitales innovadoras. Desde que comencé mi viaje en la programación,
          me ha fascinado la capacidad de transformar ideas en aplicaciones web funcionales y atractivas.
        </p>
        <p>
          Mi enfoque principal es desarrollar soluciones web eficientes y centradas en el usuario. Soy una persona
          motivada, con ganas de aprender constantemente y comprometida con mi crecimiento profesional. Siempre
          busco mantenerme al día con las últimas tecnologías y tendencias en desarrollo.
        </p>
        <p>
          Con experiencia en <span className={styles.highlight}>Front-end</span> (HTML, CSS, JavaScript, React) y
          <span className={styles.highlight}> Back-end</span> (Node.js, Express, MongoDB), me siento cómodo trabajando
          en todo el ciclo de vida del desarrollo web. Además, valoro mucho el trabajo en equipo y la comunicación efectiva.
        </p>
        <p>
          Si quieres conocer más sobre mis habilidades técnicas, experiencia y formación,
          ¡te invito a explorar las siguientes secciones!
        </p>
      </div>
    </section>
  );
}

export default Introduction;
