import React from "react";

export default function PromocionRetroAnimada() {
  // Silueta detallada de una retroexcavadora (puntos corregidos)
  const retroPath = "polygon()";

  return (
    <div className="flex items-center justify-center p-4 md:p-10 min-h-[400px] md:min-h-[600px] w-full">
      <div className="relative group scale-90 sm:scale-100 md:scale-110 transition-all duration-500">
        {/* CONTENEDOR CON LUZ GIRATORIA */}
        <div
          className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[400px] flex items-center justify-center overflow-hidden rounded-3xl"
          style={{ clipPath: retroPath }}
        >
          {/* Luz Amarilla Giratoria */}
          <div
            className="absolute w-[200%] h-[200%] animate-[spin_4s_linear_infinite] opacity-30"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 70%, #eab308 90%, transparent 100%)",
            }}
          ></div>

          {/* CUERPO DEL CONTENEDOR */}
          <div
            className="absolute inset-[2px] bg-black/80 backdrop-blur-xl border border-white/5 flex flex-col items-center justify-center rounded-3xl"
            style={{ clipPath: retroPath }}
          >
            {/* Contenido centrado */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 md:p-12 text-center gap-4 md:gap-6">
              <div className="inline-block bg-yellow-500 text-black text-[8px] md:text-[9px] font-black tracking-[0.4em] uppercase py-1 px-4 transform -rotate-1 shadow-lg">
                Oferta Limitada
              </div>

              <div className="space-y-1">
                <h1 className="text-3xl md:text-5xl font-black uppercase leading-[0.8] tracking-tighter text-yellow-500">
                  Financiamiento <br />
                  <span className="text-white drop-shadow-2xl">Directo</span>
                </h1>
                <div className="h-1.5 w-16 md:w-20 bg-yellow-500 mx-auto mt-4"></div>
              </div>

              <div className="mt-2 space-y-5">
                <a
                  href="https://wa.me/529984187535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 hover:bg-white text-black px-8 md:px-10 py-2.5 md:py-3 font-black uppercase text-[10px] md:text-xs tracking-widest transition-all duration-300 shadow-xl inline-block group-hover:scale-105 active:scale-95 rounded-2xl"
                >
                  Cotizar
                </a>
              </div>

              <p className="text-[8px] md:text-[9px] text-yellow-500/70 font-black uppercase tracking-[0.1em] italic mt-2">
                Sujeto a aprobación de crédito
              </p>
            </div>
          </div>
        </div>

        {/* Glow estático de fondo para dar profundidad a la silueta */}
        <div
          className="absolute -inset-10 bg-transparent blur-3xl -z-10  transition-all duration-700"
          style={{ clipPath: retroPath }}
        ></div>
      </div>
    </div>
  );
}
