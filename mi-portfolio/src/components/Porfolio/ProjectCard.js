// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/portfolio/projectCard.module.css'; // Use Portfolio.module.css
import Button from '../common/Button'; // Assuming you have a Button component
import { Link } from 'react-router-dom'; // If using ProjectDetailPage

function ProjectCard({ project }) {
  return (
    <div className={styles.projectCard}>
      <img
        src={project.thumbnail}
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
        {/* Option 1: Link to ProjectDetailPage */}
        <Link to={`/portfolio/${project.id}`}>
          <Button>Ver Detalles</Button>
        </Link>

        {/* Option 2: Button to open ProjectDetailModal */}
        {/* <Button onClick={() => openModal(project.id)}>Ver Detalles</Button> */}
      </div>
    </div>
  );
}

export default ProjectCard;