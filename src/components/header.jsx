import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Importamos NavLink

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Clase base para los links
  const baseStyle =
    "relative transition-colors duration-300 font-black text-[11px] tracking-[0.3em] uppercase";

  // Función para manejar los estilos activos vs inactivos
  const linkStyles = ({ isActive }) =>
    isActive
      ? `${baseStyle} text-yellow-500`
      : `${baseStyle} text-gray-500 hover:text-yellow-500`;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 py-5 bg-black text-white shadow-2xl border-b border-white/5">
      {/* Contenedor del Logo */}
      <div className="h-10 md:h-12">
        <NavLink to="/">
          <img
            src="/logoN.png"
            alt="Logo"
            className="h-full w-auto object-contain brightness-110"
          />
        </NavLink>
      </div>

      {/* Navegación central (Desktop) */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-12">
          <li>
            <NavLink to="/" className={linkStyles}>
              {({ isActive }) => (
                <>
                  Inicio
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500 transition-all"></span>
                  )}
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/nosotros" className={linkStyles}>
              {({ isActive }) => (
                <>
                  Nosotros
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500 transition-all"></span>
                  )}
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className={linkStyles}>
              {({ isActive }) => (
                <>
                  Contacto
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500 transition-all"></span>
                  )}
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Botón de acción y Hamburguesa */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:block">
          <a
            href="https://wa.me/529984187535"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-black px-5 md:px-7 py-2 md:py-2.5 rounded-sm font-black text-[9px] md:text-[10px] tracking-[0.15em] uppercase hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/10 active:scale-95"
          >
            Cotizar
          </a>
        </div>

        {/* Hamburguesa para móvil */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Menú móvil (Dropdown) */}
      <div
        className={`absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/5 transition-all duration-300 md:hidden overflow-hidden ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-8 gap-6">
          <li>
            <NavLink
              to="/"
              className={linkStyles}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nosotros"
              className={linkStyles}
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={linkStyles}
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </NavLink>
          </li>
          <li className="sm:hidden">
            <a
              href="https://wa.me/529984187535"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black px-7 py-2.5 rounded-sm font-black text-[10px] tracking-[0.15em] uppercase"
            >
              Cotizar Ahora
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
