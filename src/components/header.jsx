import React from "react";
import { NavLink } from "react-router-dom"; // Importamos NavLink

export default function Header() {
  // Clase base para los links
  const baseStyle =
    "relative transition-colors duration-300 font-black text-[11px] tracking-[0.3em] uppercase";

  // Función para manejar los estilos activos vs inactivos
  const linkStyles = ({ isActive }) =>
    isActive
      ? `${baseStyle} text-yellow-500`
      : `${baseStyle} text-gray-500 hover:text-yellow-500`;

  return (
    <header className=" top-0 z-50 flex justify-between items-center px-12 py-5 bg-black text-white shadow-2xl border-b border-white/5">
      {/* Contenedor del Logo */}
      <div className="h-12">
        <NavLink to="/">
          <img
            src="/logoN.png"
            alt="Logo"
            className="h-full w-auto object-contain brightness-110"
          />
        </NavLink>
      </div>

      {/* Navegación central */}
      <nav>
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

      {/* Botón de acción */}
      <div>
        <a
          href="https://wa.me/529984187535"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 text-black px-7 py-2.5 rounded-sm font-black text-[10px] tracking-[0.15em] uppercase hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/10 active:scale-95"
        >
          Solicitar Cotización
        </a>
      </div>
    </header>
  );
}
