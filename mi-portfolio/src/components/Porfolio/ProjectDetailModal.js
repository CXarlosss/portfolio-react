// @ts-nocheck
import React, { useEffect, useRef, useState, useCallback } from 'react';
import styles from '../../styles/components/portfolio/projectDetailModal.module.css';
import Button from '../common/Button';

const ProjectDetailModal = ({ project, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef();

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  }, [onClose]);

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') handleClose();
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [handleClose]);

  if (!project) return null;

  return (
    <div
      className={`${styles.modalOverlay} ${isClosing ? styles.fadeOut : ''}`}
      onClick={handleClose}
    >
      <div className={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalInner} ref={modalRef}>
          <button onClick={handleClose} className={styles.modalCloseButton}>
            ×
          </button>

          <div className={styles.headerSection}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.longDescription}</p>
          </div>

          {project.images?.length > 0 && (
            <div className={styles.carousel}>
              <button className={styles.navButton} onClick={handlePrev}>‹</button>
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - ${currentImageIndex + 1}`}
                className={styles.carouselImage}
              />
              <button className={styles.navButton} onClick={handleNext}>›</button>
            </div>
          )}

          <div className={styles.technologiesSection}>
            <h3 className={styles.subheading}>Tecnologías utilizadas</h3>
            <ul className={styles.modalTechnologies}>
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className={styles.modalLinks}>
            {project.githubLink && (
              <Button link={project.githubLink}>GitHub</Button>
            )}
            {project.liveDemoLink && (
              <Button link={project.liveDemoLink} variant="secondary">
                Ver Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
