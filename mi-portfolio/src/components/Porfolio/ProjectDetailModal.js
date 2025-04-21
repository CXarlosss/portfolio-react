// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/portfolio/projectDetailModal.module.css'; // Use Portfolio.module.css
import Button from '../common/Button'; // Assuming you have a Button component

function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>{project.title}</h2>
        <p>{project.longDescription}</p>
        {/* Display images/videos */}
        <div className={styles.modalImages}>
          {project.images &&
            project.images.map((img, index) => (
              <img key={index} src={img} alt={`${project.title} - ${index + 1}`} />
            ))}
        </div>
        <ul className={styles.modalTechnologies}>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className={styles.modalLinks}>
          {project.githubLink && (
            <Button link={project.githubLink}>GitHub</Button>
          )}
          {project.liveDemoLink && (
            <Button link={project.liveDemoLink} variant="secondary">
              Live Demo
            </Button>
          )}
        </div>
        <button onClick={onClose} className={styles.modalCloseButton}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default ProjectDetailModal;