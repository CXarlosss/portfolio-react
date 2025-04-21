// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/common/projectThumbnail.module.css'; // Use Common.module.css


function ProjectThumbnail({ images, title, description, link }) {
  return (
    <a href={link} className={styles.projectThumbnail}>
      <div className={styles.imageContainer}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`${title} - ${index + 1}`} />
        ))}
      </div>
      <div className={styles.projectInfo}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default ProjectThumbnail;