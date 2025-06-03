import React from 'react';
// @ts-ignore
import styles from '../../styles/components/curriculum/lenguages.module.css';

function LanguagesList() {
  const languages = [
    {
      language: 'ESPAÑOL',
      level: 'Nativo',
      description: 'Dominio completo del idioma, tanto oral como escrito, con capacidad para comunicarse de manera fluida y precisa en cualquier contexto.',
    },
    {
      language: 'INGLÉS',
      level: 'B2',
      description: 'Nivel intermedio-alto, con capacidad para comprender y producir textos complejos, así como mantener conversaciones fluidas sobre una variedad de temas.',
    },
    // Eliminado: {
    //   language: 'ALEMÁN',
    //   level: 'A1',
    // },
  ];

  return (
    <div className={styles.languagesSection}> {/* Contenedor principal de la sección */}
      <h2 className={styles.mainTitle}>Idiomas</h2> {/* Título principal */}
      <div className={styles.languagesGrid}> {/* Contenedor para la cuadrícula/píldoras */}
        {languages.map((lang, index) => (
          <div key={index} className={styles.languagePill}> {/* Cada idioma es una "píldora" */}
            <div className={styles.languageHeader}> {/* Nuevo contenedor para nombre y nivel */}
              <span className={styles.languageName}>{lang.language}</span>
              <span className={styles.languageLevel}>{lang.level}</span>
            </div>
            <p className={styles.languageDescription}>{lang.description}</p> {/* Nueva descripción */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LanguagesList;