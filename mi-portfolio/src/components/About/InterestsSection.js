// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/about/interestsSection.module.css'; // Use the same CSS Module

function InterestsSection() {
  return (
    <div className={styles.interestsSection}>
      <h2>Lo que me apasiona fuera del código</h2>
      <p>
        Cuando no estoy programando, disfruto de [Menciona un interés principal,
        ej: tocar la guitarra] y explorar nuevos lugares. También me encanta [Otro
        interés, ej: el cine] y pasar tiempo con amigos.
      </p>
      <ul>
        <li>Música</li>
        <li>Deporte</li>
        <li>Viajar</li>
        <li>Cine</li>
      </ul>
    </div>
  );
}

export default InterestsSection;