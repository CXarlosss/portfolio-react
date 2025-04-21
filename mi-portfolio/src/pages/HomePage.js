// @ts-nocheck
import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import SkillsHighlight from '../components/Home/SkillBadge';
import RecentWorkPreview from '../components/Home/RecentWorkPreview';
import CallToAction from '../components/Home/CallToAction';
import styles from '../styles/pages/HomePage.module.css'; // Create HomePage.module.css

function HomePage() {
  return (
    <div className={styles.homePage}>
      <HeroSection />
      <SkillsHighlight />
      <RecentWorkPreview />
      <CallToAction />
    </div>
  );
}

export default HomePage;