// @ts-nocheck
import React, { useState, useEffect, useMemo } from 'react';
import styles from '../../styles/components/portfolio/projectCard.module.css';
import Button from '../common/Button';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

function ProjectCard({ project, onClick }) {
  const allImages = useMemo(() => {
    return (project.images && project.images.length > 0)
      ? project.images
      : [project.thumbnail];
  }, [project.images, project.thumbnail]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (allImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [allImages]);

  return (
    <motion.div
      className={styles.projectCard}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.img
        key={currentImageIndex}
        src={allImages[currentImageIndex]}
        alt={project.title}
        className={styles.projectThumbnail}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/400x300/e0e0e0/333333?text=Imagen+no+disponible";
        }}
      />

      <div className={styles.projectDetails}>
        <h3>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>

        {project.technologies?.length > 0 && (
          <ul className={styles.projectTechnologies}>
            {project.technologies.map((tech) => (
              <li key={tech} className={styles.techPill}>{tech}</li>
            ))}
          </ul>
        )}

        <div className={styles.projectActions}>
          <Button onClick={() => onClick(project)}>Ver Detalles</Button>
          <div className={styles.externalLinks}>
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                <FaGithub size={20} />
              </a>
            )}
            {project.liveDemoLink && (
              <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                <FaExternalLinkAlt size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
