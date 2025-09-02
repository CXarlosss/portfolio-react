// @ts-nocheck
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/components/common/navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuId = 'primary-navigation';

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(v => !v);

  // Bloquear scroll y clase en <body> cuando el menú móvil está abierto
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
    return () => document.body.classList.remove('nav-open');
  }, [isMenuOpen]);

  // Cerrar con tecla Esc
  React.useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className={styles.header}>
      <nav
        className={styles.navbar}
        role="navigation"
        aria-label="Menú principal"
      >
        <div className={styles.logo} aria-label="Inicio">
          Carlos de Petronila
        </div>

        {/* Toggle hamburguesa */}
        <button
          className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
        >
          {isMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        {/* Lista de enlaces */}
        <ul
          id={menuId}
          className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}
          aria-hidden={!isMenuOpen}
        >
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => isActive ? styles.active : undefined}
              onClick={closeMenu}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? styles.active : undefined}
              onClick={closeMenu}
            >
              Sobre Mí
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => isActive ? styles.active : undefined}
              onClick={closeMenu}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/curriculum"
              className={({ isActive }) => isActive ? styles.active : undefined}
              onClick={closeMenu}
            >
              Curriculum
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? styles.active : undefined}
              onClick={closeMenu}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Overlay móvil para cerrar al hacer click fuera */}
      {isMenuOpen && (
        <button
          className={styles.backdrop}
          aria-label="Cerrar menú"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
