// @ts-nocheck
import React from 'react';
import PersonalInfo from '../components/Curriculum/PersonalInfo';
import SummaryObjective from '../components/Curriculum/SumaryObjective';
import ExperienceList from '../components/Curriculum/ExperienceList';
import EducationList from '../components/Curriculum/EducationList';
import SkillsList from '../components/Curriculum/SkillList';
import LanguagesList from '../components/Curriculum/LanguagesList';
import styles from '../styles/pages/CurriculumPage.module.css';

function CurriculumPage() {
  return (
    <div className={styles.curriculumPage}>
      <aside className={styles.leftColumn}>
        <section className={styles.cvBlock}>
          <PersonalInfo />
        </section>
        <section className={styles.cvBlock}>
          <SkillsList />
        </section>
        <section className={styles.cvBlock}>
          <LanguagesList />
        </section>
      </aside>

      <main className={styles.rightColumn}>
        <section className={styles.cvBlock}>
          <SummaryObjective />
        </section>
        <section className={styles.cvBlock}>
          <EducationList />
        </section>
        <section className={styles.cvBlock}>
          <ExperienceList />
        </section>
      </main>
    </div>
  );
}

export default CurriculumPage;
