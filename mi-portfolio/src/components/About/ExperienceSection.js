// @ts-nocheck
import React from "react";
import styles from "../../styles/components/about/experienceSection.module.css";
import experience from "../../data/About-experience";

function ExperienceItem({ item }) {
  return (
    <div className={styles.experienceItem}>
      <h3 className={styles.experienceTitle}>{item.title}</h3>
      <p className={styles.experienceCompany}>{item.company}</p>
      <p className={styles.experienceDates}>
        <time dateTime={item.start.dateTime}>{item.start.label}</time> –{" "}
        <time dateTime={item.end.dateTime}>{item.end.label}</time>
      </p>
      <ul className={styles.experienceList}>
        {item.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section className={styles.experienceSection}>
      <h2>Experiencia Laboral</h2>
      {experience.map((item) => (
        <ExperienceItem key={item.id} item={item} />
      ))}
    </section>
  );
}
