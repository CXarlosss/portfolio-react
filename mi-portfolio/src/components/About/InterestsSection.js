// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/about/interestsSection.module.css'; // Use the same CSS Module

function InterestsSection() {
  return (
    <div className={styles.interestsSection}>
      <h2>Lo que me apasiona fuera del código</h2>
      <p>
        Cuando no estoy programando, disfruto de hacer deporte de manera regular y explorar nuevos lugares. También me encanta el cine y pasar tiempo con amigos.
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