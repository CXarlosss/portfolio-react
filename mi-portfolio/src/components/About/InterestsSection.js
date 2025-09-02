// @ts-nocheck
import React from "react";
import styles from "../../styles/components/about/interestsSection.module.css";
import interests from "../../data/About-interest";

export default function InterestsSection() {
  return (
    <section className={styles.interestsSection} aria-labelledby="interests-title">
      <h2 id="interests-title" className={styles.sectionTitle}>
        Lo que me apasiona fuera del código
      </h2>

      <p className={styles.introText}>
        Me gusta equilibrar la parte técnica con actividades que impulsan la creatividad, 
        la constancia y el bienestar. Estos intereses refuerzan habilidades clave como la 
        organización, el trabajo en equipo y el pensamiento crítico.
      </p>

      <div className={styles.interestsGrid} role="list">
        {interests.map(({ name, icon: Icon, desc }) => (
          <article key={name} className={styles.interestCard} role="listitem" tabIndex={0}>
            <figure className={styles.iconWrap} aria-hidden="true">
              <Icon className={styles.interestIcon} />
            </figure>
            <h3 className={styles.interestName}>{name}</h3>
            <p className={styles.interestDescription}>{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
