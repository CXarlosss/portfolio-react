// @ts-nocheck
import React from 'react';
import { FaMusic, FaRunning, FaPlane, FaFilm, FaUtensils, FaGamepad, FaBook, FaHiking } from 'react-icons/fa';
import styles from '../../styles/components/about/interestsSection.module.css';

function InterestsSection() {
  const interests = [
    {
      name: "Música",
      icon: <FaMusic />,
      description: "Disfruto explorando nuevos géneros musicales y asistiendo a conciertos. "
    },
    {
      name: "Deporte",
      icon: <FaRunning />,
      description: "Mantener un estilo de vida activo es importante para mí. Nado 2 veces por semana y practico hipertrofia los demas dias de semana."
    },
    {
      name: "Viajar",
      icon: <FaPlane />,
      description: "Me encanta descubrir nuevas culturas y paisajes. Mi último viaje fue a Huesca donde hice senderismo con la familia."
    },
    {
      name: "Cine",
      icon: <FaFilm />,
      description: "Soy un apasionado del cine, especialmente del género de ciencia ficción y documentales."
    },
    {
      name: "Cocina",
      icon: <FaUtensils />,
      description: "Experimentar con nuevas recetas es uno de mis hobbies favoritos."
    },
    {
      name: "Videojuegos",
      icon: <FaGamepad />,
      description: "Juego ocasionalmente, prefiriendo títulos indie con narrativas interesantes."
    },
    {
      name: "Lectura",
      icon: <FaBook />,
      description: "Leo principalmente libros de no ficción sobre tecnología, psicología y desarrollo personal."
    },
    {
      name: "Senderismo",
      icon: <FaHiking />,
      description: "Conectar con la naturaleza caminando por montañas y bosques es mi forma de recargar energías."
    }
  ];

  return (
    <section className={styles.interestsSection}>
      <h2 className={styles.sectionTitle}>Lo que me apasiona fuera del código</h2>
      
      <p className={styles.introText}>
        Cuando no estoy programando, me dedico a actividades que equilibran mi vida y estimulan mi creatividad. 
        Creo firmemente que tener intereses diversos fuera del ámbito técnico me hace un mejor profesional, 
        aportando perspectivas únicas y manteniendo un balance saludable entre trabajo y vida personal.
      </p>
      
      <div className={styles.interestsGrid}>
        {interests.map((interest, index) => (
          <div key={index} className={styles.interestCard}>
            <div className={styles.interestIcon}>
              {interest.icon}
            </div>
            <h3 className={styles.interestName}>{interest.name}</h3>
            <p className={styles.interestDescription}>{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InterestsSection;