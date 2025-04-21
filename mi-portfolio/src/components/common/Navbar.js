// @ts-nocheck
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/components/common/navbar.css';
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        {/* Optional Logo */}
        Carlos de Petronila
      </div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/" activeClassName={styles.active}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName={styles.active}>
            Sobre Mí
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName={styles.active}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/curriculum" activeClassName={styles.active}>
            Curriculum
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName={styles.active}>
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;