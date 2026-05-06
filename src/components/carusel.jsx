import React, { useState, useEffect, useCallback } from "react";

const imagenes = [
  "carusel.jpeg",
  "carusel1.jpeg",
  "carusel2.jpeg",
  "carusel3.jpeg",
  "carusel4.jpeg",
  "carusel5.jpeg",
  "carusel6.jpeg",
];

export default function CarouselSmall() {
  const [indice, setIndice] = useState(0);

  const siguienteFoto = useCallback(() => {
    setIndice((prev) => (prev >= imagenes.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    if (!imagenes.length) return;
    const intervalo = setInterval(siguienteFoto, 4000);
    return () => clearInterval(intervalo);
  }, [siguienteFoto]);

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-4">
      {/* Alturas adaptables: h-64 (móvil), h-80 (tablet), h-[500px] (desktop) */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full overflow-hidden rounded-3xl border border-white/10 bg-black shadow-xl">
        {/* Renderizado de Imágenes */}
        {imagenes.map((img, i) => (
          <div
            key={img}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              i === indice
                ? "opacity-100 z-10 scale-100"
                : "opacity-0 z-0 scale-105"
            }`}
          >
            <img
              src={img}
              alt={`Rock Machine ${i}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/800x600/000000/EAB308?text=Rock+Machine";
              }}
            />
            {/* Gradiente más suave para móviles */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>
        ))}

        {/* Indicadores: Más delgados para móviles */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/40 backdrop-blur-sm p-1.5 rounded-full">
          {imagenes.map((_, i) => (
            <button
              key={`dot-${i}`}
              onClick={() => setIndice(i)}
              className={`h-1 transition-all duration-500 rounded-full ${
                i === indice
                  ? "w-6 sm:w-8 bg-yellow-500"
                  : "w-1.5 sm:w-2 bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Contador pequeño en la esquina */}
        <div className="absolute top-4 right-4 z-20 bg-black/60 px-2 py-1 rounded-lg border border-white/5">
          <p className="text-[10px] font-black text-yellow-500 tracking-tighter">
            {indice + 1} / {imagenes.length}
          </p>
        </div>
      </div>
    </div>
  );
}
