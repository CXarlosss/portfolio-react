// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/about/introduction.module.css';

export default function Introduction() {
  return (
    <section className={styles.introduction} aria-labelledby="about-title">
      <div className={styles.textContent}>
        <h2 id="about-title" className={styles.sectionTitle}>Sobre mí</h2>

        <p className={styles.lead}>
          Soy <span className={styles.highlight}>Carlos de Petronila Rodríguez</span>, 
          desarrollador web <strong>Full Stack</strong> con pasión por transformar ideas en soluciones digitales eficientes y atractivas.
        </p>

        <p className={styles.body}>
          Mi enfoque está en construir productos <strong>rápidos, accesibles y fáciles de usar</strong>. 
          Trabajo con <span className={styles.highlight}>React</span>, 
          <span className={styles.highlight}> TypeScript</span>, 
          <span className={styles.highlight}> Node.js</span> y 
          <span className={styles.highlight}> MongoDB</span>, 
          siguiendo patrones de diseño, buenas prácticas de versionado y aplicando testing básico para asegurar calidad.
        </p>

        <p className={styles.body}>
          Me defino como alguien <strong>curioso y constante</strong>, 
          que disfruta resolver problemas, colaborar en equipo y mantener una mentalidad de aprendizaje continuo. 
          Actualmente profundizo en <strong>Next.js</strong>, <strong>Tailwind CSS</strong> y <strong>CI/CD</strong> 
          para llevar mis proyectos a un nivel más profesional.
        </p>

        <ul className={styles.bullets}>
          <li>Experiencia en <strong>código limpio</strong> y optimización para UX.</li>
          <li>Colaboración y <strong>metodologías ágiles</strong> (Scrum, Kanban).</li>
          <li>Visión a medio plazo: especializarme en <strong>arquitecturas escalables</strong> y <strong>DevOps</strong>.</li>
        </ul>

        <div className={styles.nowWrap} aria-label="Enfoque actual">
          <span className={styles.nowChip}>React + TypeScript</span>
          <span className={styles.nowChip}>Node.js / Express</span>
          <span className={styles.nowChip}>MongoDB</span>
          <span className={styles.nowChip}>Next.js (SSR/SSG)</span>
          <span className={styles.nowChip}>Tailwind</span>
        </div>

        <p className={styles.note}>
          Proyectos destacados: <strong>LocalMarket</strong> (e-commerce local), 
          <strong> Portfolio personal</strong> y la <strong>web de Nutricionista</strong>.  
          Cuando no estoy programando, encontrarás mi lado creativo en la música, el deporte o la cocina.
        </p>
      </div>
    </section>
  );
}
