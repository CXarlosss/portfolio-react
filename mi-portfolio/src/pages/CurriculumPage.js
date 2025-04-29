// @ts-nocheck
import React from 'react';
import PersonalInfo from '../components/Curriculum/PersonalInfo';
import SummaryObjective from '../components/Curriculum/SumaryObjective';
import ExperienceList from '../components/Curriculum/ExperienceList';
import EducationList from '../components/Curriculum/EducationList';
import SkillsList from '../components/Curriculum/SkillList';
import LanguagesList from '../components/Curriculum/LanguagesList';
import styles from '../styles/pages/CurriculumPage.module.css'; // Create CurriculumPage.module.css

function CurriculumPage() {
  return (
    <div className={styles.curriculumPage}>
      <div className={styles.leftColumn}>
        <PersonalInfo />
        <SkillsList />
        <LanguagesList />
      </div>
      <div className={styles.rightColumn}>
        <SummaryObjective />
        <EducationList />
        <ExperienceList />
        
      </div>
    </div>
  );
}


export default CurriculumPage;