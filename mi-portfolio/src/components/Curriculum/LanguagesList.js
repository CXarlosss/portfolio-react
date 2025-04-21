// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/curriculum/lenguages.module.css';

function LanguagesList() {
  const languages = [
    {
      language: 'ESPAÑOL',
      level: 'Nativo', // You might want to specify "Nativo"
    },
    {
      language: 'INGLÉS',
      level: 'B2',
    },
  ];

  return (
    <div className={styles.languages}>
      <h2>Idiomas</h2>
      <ul>
        {languages.map((lang, index) => (
          <li key={index}>
            {lang.language} - {lang.level}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguagesList;