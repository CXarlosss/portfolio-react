// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/home/callToAction.module.css';
import Button from '../common/Button';

function CallToAction() {
  return (
    <section className={styles.callToAction}>
      <h2>¿Listo para trabajar juntos?</h2>
      <p>
        Si tienes alguna pregunta o quieres discutir un proyecto, no dudes en ponerte
        en contacto conmigo. ¡Estoy emocionado de colaborar contigo!
      </p>
      <Button link="/contact" className={`${styles.ctaButton} my-custom-button`}>
        Contáctame
      </Button>
    </section>
  );
}

export default CallToAction;
