// @ts-nocheck
import React from 'react';
import ProjectGrid from '../components/Porfolio/ProjectGrid';
import styles from '../styles/pages/PortfolioPage.css'; // Create PortfolioPage.module.css

function PortfolioPage() {
  return (
    <div className={styles.portfolioPage}>
      <ProjectGrid />
    </div>
  );
}

export default PortfolioPage;