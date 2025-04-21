// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/common/projectThumbnail.css'; // Use Common.module.css

function ProjectThumbnail({ image, title, description, link }) {
  return (
    <a href={link} className={styles.projectThumbnail}>
      <img src={image} alt={title} />
      <div className={styles.projectInfo}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default ProjectThumbnail;