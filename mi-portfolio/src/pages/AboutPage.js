// @ts-nocheck
import React from 'react';
import Introduction from '../components/About/Introduction';
import SkillsSection from '../components/About/SkillsSection';
import ExperienceSection from '../components/About/ExperienceSection';
import EducationSection from '../components/About/EducationSection';
import InterestsSection from '../components/About/InterestsSection';
import styles from '../styles/pages/AboutPage.module.css'; // Create AboutPage.module.css

function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <Introduction />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <InterestsSection />
    </div>
  );
}

export default AboutPage;