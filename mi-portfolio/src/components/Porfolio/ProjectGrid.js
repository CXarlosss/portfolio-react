// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/portfolio/projectGrid.css'; // Create Portfolio.module.css
import ProjectCard from './ProjectCard';

// Import project images (replace with actual image paths)
import localMarketThumbnail from "../../assets/images/Proyecto1-2.png";
import productivityAppThumbnail from '../../assets/images/Proyecto2.png';
import movieAppThumbnail from '../../assets/images/Proyecto3.png';
import expenseTrackerThumbnail from '../../assets/images/Proyecto4.png';

function ProjectGrid() {
  const projects = [
    {
      id: 'localmarket',
      title: 'LocalMarket',
      description:
        'Plataforma web innovadora para conectar pequeños comercios con clientes locales.',
      thumbnail: localMarketThumbnail,
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node.js',
        'Express',
        'MongoDB',
      ],
    },
    {
      id: 'productivity',
      title: 'Página de Productividad',
      description: 'Aplicación web para guardar tareas y crear un calendario de productividad.',
      thumbnail: productivityAppThumbnail,
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      id: 'movies',
      title: 'App de Películas',
      description:
        'Aplicación para ver las películas actuales en el cine y obtener información de IBM.',
      thumbnail: movieAppThumbnail,
      technologies: ['React', 'Node.js', 'Express'],
    },
    {
      id: 'expenses',
      title: 'Calculadora de Gastos',
      description:
        'Aplicación para calcular gastos de viajes o gastos compartidos (comunidad).',
      thumbnail: expenseTrackerThumbnail,
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  return (
    <section className={styles.projectGrid}>
      <h2>Mi Portfolio</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectGrid;