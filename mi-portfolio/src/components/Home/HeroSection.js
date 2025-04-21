// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/home/heroSection.css'; // Create Home.module.css
import Button from '../common/Button'; // Assuming you have a Button component
import profileImage from '../../assets/images/1 (4).jpg'; // Import your image

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Carlos de Petronila Rodríguez</h1>
        <p className={styles.heroSubtitle}>Desarrollador Web</p>
        <img src={profileImage} alt="Carlos de Petronila Rodríguez" className={styles.heroImage} />
        <p className={styles.heroDescription}>
          Soy un desarrollador web apasionado por crear soluciones innovadoras y
          eficientes. Con experiencia en Front-end y Back-end, me encanta transformar
          ideas en experiencias web interactivas. Mi motivación, ganas de aprender y
          compromiso me impulsan a buscar constantemente nuevos desafíos.
        </p>
        <div className={styles.heroButtons}>
          <Button link="/portfolio">Ver Portfolio</Button>
          <Button link="/contact" variant="secondary">
            Contáctame
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;