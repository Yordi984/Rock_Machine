import React from "react";
import BannerCard from "./bannerCard";

export default function Banner() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* 1. Capa de la Imagen de fondo */}
      <div className="absolute inset-0 bg-[url('/fondo.png')] bg-cover bg-center">
        {/* 2. Capa de degradado: de transparente arriba a negro sólido abajo */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      {/* 3. Contenedor del Contenido (BannerCard) */}

      <div className="relative z-10 flex items-start justify-end h-full w-full px-2 p-7">
        <BannerCard />
      </div>
    </section>
  );
}
