// @ts-nocheck
import React from "react";
import styles from "../../styles/components/about/educationSection.module.css";
import education from "../../data/About-experience";

function EducationItem({ item }) {
  return (
    <article
      className={styles.educationItem}
      itemScope
      itemType="https://schema.org/EducationalOccupationalCredential"
    >
      <header className={styles.educationHeader}>
        <h3 className={styles.educationTitle} itemProp="name">
          {item.title}
        </h3>
        <span className={styles.educationDate}>
          <time dateTime={item.start.dateTime}>{item.start.label}</time> –{" "}
          <time dateTime={item.end.dateTime}>{item.end.label}</time>
        </span>
      </header>

      <div className={styles.educationContent}>
        <p className={styles.educationOrg} itemProp="recognizedBy">
          <em>{item.org}</em>
        </p>

        <ul className={styles.educationList}>
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        {item.skills?.length > 0 && (
          <div className={styles.skills} aria-label="Competencias adquiridas">
            {item.skills.map((skill) => (
              <span key={skill} className={styles.skillPill}>
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function EducationSection() {
  return (
    <section
      className={styles.educationSection}
      aria-labelledby="education-title"
    >
      <h2 id="education-title" className={styles.sectionTitle}>
        Formación Académica
      </h2>

      <div className={styles.timeline}>
        {education.map((item) => (
          <EducationItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
