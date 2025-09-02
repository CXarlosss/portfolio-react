// @ts-nocheck
import React from "react";
import Introduction from "../components/About/Introduction";
import SkillsSection from "../components/About/SkillsSection";
import ExperienceSection from "../components/About/ExperienceSection";
import EducationSection from "../components/About/EducationSection";
import InterestsSection from "../components/About/InterestsSection";
import styles from "../styles/pages/AboutPage.module.css";

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <main className={styles.aboutMain}>
        {/* Columna izquierda (contenido largo) */}
        <section className={styles.colContent} aria-label="Contenido principal">
          <div id="intro" className={styles.block}><Introduction /></div>
          <div id="education" className={styles.block}><EducationSection /></div>
          <div id="experience" className={styles.block}><ExperienceSection /></div>
        </section>

        {/* Sidebar (ahora con 2+ bloques) */}
        <aside className={styles.colSidebar} aria-label="Sidebar">
          <div className={styles.sidebarCard}><SkillsSection /></div>
          <div className={styles.sidebarCard}><InterestsSection /></div>

          {/* Tarjeta opcional de enlaces/CTA */}
          
        </aside>
      </main>
    </div>
  );
}
