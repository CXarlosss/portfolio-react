// @ts-nocheck
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/components/common/navbar.module.css';
// Importamos un icono de hamburguesa (puedes usar Heroicons, Font Awesome, etc.)
// Por ejemplo, de react-icons/fa si ya lo tienes instalado
import { FaBars, FaTimes } from 'react-icons/fa'; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      document.body.classList.remove('nav-open');
    } else {
      document.body.classList.add('nav-open');
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    document.body.classList.remove('nav-open');
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        {/* Optional Logo */}
        Carlos de Petronila
      </div>

      {/* Botón de hamburguesa para móviles */}
      <button
  className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ''}`}
  onClick={toggleMenu}
  aria-label="Toggle navigation menu"
>
        {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Cambia el icono según el estado */}
      </button>

      {/* Lista de enlaces de navegación */}
      {/* Añadimos una clase condicional para mostrar/ocultar el menú en móviles */}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : undefined} onClick={closeMenu}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : undefined} onClick={closeMenu}>
            Sobre Mí
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? styles.active : undefined} onClick={closeMenu}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/curriculum" className={({ isActive }) => isActive ? styles.active : undefined} onClick={closeMenu}>
            Curriculum
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : undefined} onClick={closeMenu}>
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
