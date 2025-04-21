// @ts-nocheck
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import CurriculumPage from './pages/CurriculumPage';
import ContactPage from './pages/ContactPage';
import styles from './App.css';

function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
        <Navbar />
        <main className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<HomePage />} />  {/* Correcto: Sin 'exact' */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} /> {/* Correcto: Sin 'exact' */}
            <Route path="/curriculum" element={<CurriculumPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;