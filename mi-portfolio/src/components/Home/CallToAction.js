// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/home/callToAction.css'; // Create Home.module.css
import Button from '../common/Button';

function CallToAction() {
  return (
    <section className={styles.callToAction}>
      <h2>¿Listo para trabajar juntos?</h2>
      <p>
        Si tienes alguna pregunta o quieres discutir un proyecto, no dudes en ponerte
        en contacto conmigo. ¡Estoy emocionado de colaborar contigo!
      </p>
      <Button link="/contact">Contáctame</Button>
    </section>
  );
}

export default CallToAction;