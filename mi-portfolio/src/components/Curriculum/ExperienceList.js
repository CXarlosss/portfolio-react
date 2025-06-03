import React from 'react';
// @ts-ignore
import styles from "../../styles/components/curriculum/experience.module.css";


function ExperienceList() {
  const experience = [
    {
      title: 'Desarrollador FullStack', // Título del puesto
      company: 'Logistica Inditex', // Nombre de la empresa
      date: 'ENERO 2024 - DICIEMBRE 2024', // Rango de fechas
      description: 'Responsable del desarrollo y mantenimiento de sistemas logísticos internos, implementando soluciones con NodeJS y React para optimizar la cadena de suministro y mejorar la eficiencia operativa.',
    },
    {
      title: 'Técnico Instalador de Paneles Solares',
      company: 'SIPAMA',
      date: 'MARZO 2024 - JUNIO 2024',
      description: 'Instalación y configuración de sistemas fotovoltaicos en diversas ubicaciones, asegurando el cumplimiento de normativas de seguridad y eficiencia energética. Colaboración en equipos multidisciplinares para proyectos a gran escala.',
    },
    {
      title: 'Soporte Informático',
      company: 'Plenum-ingenieros',
      date: 'SEPTIEMBRE 2023 - FEBRERO 2024',
      description: 'Provisión de soporte técnico de primer y segundo nivel a usuarios internos, resolución de incidencias de hardware y software, y mantenimiento de la infraestructura de red. Gestión de tickets y documentación de soluciones.',
    },
    {
      title: 'Desarrollador Web Freelance',
      company: 'Autónomo',
      date: '2023 - Presente',
      description: 'Desarrollo de sitios web y aplicaciones a medida para clientes, desde la conceptualización hasta el despliegue. Especializado en la creación de interfaces de usuario intuitivas y experiencias de usuario optimizadas.',
    },
  ];

  return (
    <div className={styles.experience}>
      <h2 className={styles.mainTitle}>Experiencia Laboral</h2> {/* Añadida clase para el título principal */}
      <div className={styles.experienceItemsContainer}> {/* Nuevo contenedor para la cuadrícula de ítems */}
        {experience.map((item, index) => (
          <div key={index} className={styles.experienceItem}>
            <h3 className={styles.experienceTitle}>{item.title}</h3> {/* Clase específica para el título del puesto */}
            <p className={styles.experienceCompany}>{item.company}</p> {/* Clase para el nombre de la empresa */}
            <p className={styles.experienceDate}>{item.date}</p> {/* Clase específica para la fecha */}
            <p className={styles.experienceDescription}>{item.description}</p> {/* Clase específica para la descripción */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceList;
