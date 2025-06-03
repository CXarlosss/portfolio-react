// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/home/heroSection.module.css'; // Create Home.module.css
import Button from '../common/Button'; // Assuming you have a Button component
import profileImage from '../../assets/images/2 (1).jpg'; // Import your image

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Carlos de Petronila Rodríguez</h1>
        <p className={styles.heroSubtitle}>Desarrollador Web</p>
        <div className={styles.imageContainer}> {/* Nuevo contenedor para la imagen */}
          <img src={profileImage} alt="Carlos de Petronila Rodríguez" className={styles.heroImage} />
        </div>
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