// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/portfolio/projectGrid.module.css'; // Create Portfolio.module.css
import ProjectCard from './ProjectCard';
import { useState, useEffect } from 'react';
import ProjectDetailModal from './ProjectDetailModal';

// Import project images (replace with actual image paths)
import localMarketThumbnail from "../../assets/images/Proyecto1-2.png";
import productivityAppThumbnail from '../../assets/images/Proyecto2.png';
import movieAppThumbnail from '../../assets/images/Proyecto3.png';
import expenseTrackerThumbnail from '../../assets/images/Proyecto4.png';
import localMarketThumbnail2 from "../../assets/images/Proyecto1.png";
import productivityAppThumbnail2 from '../../assets/images/Proyecto2-1.png';
import movieAppThumbnail2 from '../../assets/images/Proyecto3-1.png';
import expenseTrackerThumbnail2 from '../../assets/images/Proyecto4-1.png';
function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'; // bloquea scroll
    } else {
      document.body.style.overflow = 'auto'; // lo vuelve a permitir
    }
  
    return () => {
      document.body.style.overflow = 'auto'; // por si se desmonta
    };
  }, [selectedProject]);
  const projects = [
    {
      id: 'localmarket',
      title: 'LocalMarket',
      description: 'Plataforma web innovadora para conectar pequeños comercios con clientes locales.',
      longDescription: 'LocalMarket es una plataforma completa con backend en Node.js y base de datos MongoDB. Permite registrar productos, gestionar inventario y conectar con usuarios finales mediante una interfaz amigable.',
      thumbnail: localMarketThumbnail,
      images: [localMarketThumbnail, localMarketThumbnail2], // puedes sustituir por más si tienes
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/CXarlosss/ProyectoFinal',
      liveDemoLink: 'https://flourishing-baklava-adefd3.netlify.app/'
    },
    {
      id: 'productivity',
      title: 'Página de Productividad',
      description: 'Aplicación web para guardar tareas y crear un calendario de productividad.',
      longDescription: 'Una app sencilla pero efectiva para la gestión diaria de tareas, hábitos y calendario. Construida con React y Node.js, y con funcionalidades de recordatorios, filtro por etiquetas y almacenamiento persistente.',
      thumbnail: productivityAppThumbnail,
      images: [productivityAppThumbnail,productivityAppThumbnail2],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/CXarlosss/Productividad-app',
      liveDemoLink: 'https://harmonious-fudge-8adaba.netlify.app/'
    },
    {
      id: 'movies',
      title: 'App de Películas',
      description: 'Aplicación para ver las películas actuales en el cine y obtener información de IBM.',
      longDescription: 'Esta app utiliza la API de IMDb para mostrar películas en cartelera, puntuaciones y trailers. Permite guardar favoritas y explorar por género. Backend hecho en Express y frontend con React.',
      thumbnail: movieAppThumbnail,
      images: [movieAppThumbnail,movieAppThumbnail2],
      technologies: ['React', 'HTML', 'CSS', 'Node.js', 'Express'],
      githubLink: 'https://github.com/CXarlosss/Cinema',
      liveDemoLink: 'https://chimerical-platypus-822400.netlify.app/'

    },
    {
      id: 'expenses',
      title: 'Calculadora de Gastos',
      description: 'Aplicación para calcular gastos de viajes o gastos compartidos (comunidad).',
      longDescription: 'Herramienta simple para dividir gastos de forma justa entre varios participantes. Muestra balances por persona y permite registrar pagos individuales. Hecha en React puro y Node.js.',
      thumbnail: expenseTrackerThumbnail,
      images: [expenseTrackerThumbnail,expenseTrackerThumbnail2],
      technologies: ['React', 'HTML', 'CSS', 'Node.js', 'Express'],
      githubLink: 'https://github.com/CXarlosss/TripCount',
      liveDemoLink: 'https://harmonious-quokka-4ca436.netlify.app/login'
    }
  ];
  ;

  return (
    <section className={styles.projectGrid}>
      <h2>Mi Portfolio</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default ProjectGrid;