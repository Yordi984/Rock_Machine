import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-10">
        {/* Logo / Marca */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-black uppercase tracking-[0.4em]">
            Rock <span className="text-yellow-500">Machine</span>
          </h2>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-1">
            Potencia Industrial
          </p>
        </div>

        {/* Ubicación y Dirección (Centro/Derecha) */}
        <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
          <a
            href="https://maps.app.goo.gl/C6upDpAKuqd3A6we8"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center md:items-end"
          >
            <div className="flex items-center gap-2 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">
                Dirección
              </p>
            </div>
            <p className="text-[11px] md:text-[12px] font-bold text-gray-300 uppercase tracking-tighter mt-1 group-hover:text-white transition-colors max-w-[250px] md:max-w-none">
              Mojarra Retorno 9 25, 77500 Cancún, Q.R.
            </p>
          </a>
        </div>

        {/* Contacto y Copyright */}
        <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-10 w-full md:w-auto">
          <p className="text-sm md:text-[16px] font-black tracking-tighter">
            +52 998 418 7535
          </p>
          <p className="text-[9px] text-gray-600 font-bold uppercase tracking-[0.2em] mt-1">
            © 2026 Rock Machine. México.
          </p>
        </div>
      </div>
    </footer>
  );
}
