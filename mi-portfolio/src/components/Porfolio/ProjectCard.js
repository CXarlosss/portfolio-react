// @ts-nocheck
import React, { useState, useEffect } from 'react';
import styles from '../../styles/components/portfolio/projectCard.module.css';
import Button from '../common/Button';

function ProjectCard({ project, onClick }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [project.thumbnail, project.thumbnailAlt || project.thumbnail];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.projectCard}>
      <img
        src={images[currentImageIndex]}
        alt={project.title}
        className={styles.projectThumbnail}
      />
      <div className={styles.projectDetails}>
        <h3>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <ul className={styles.projectTechnologies}>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <Button onClick={() => onClick(project)}>Ver Detalles</Button>
      </div>
    </div>
  );
}

export default ProjectCard;
