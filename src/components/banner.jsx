import React from "react";
import BannerCard from "./bannerCard";
import Promocion from "./promocion";

export default function Banner() {
  return (
    <section className="relative min-h-screen md:h-screen w-full overflow-hidden bg-black flex flex-col md:block">
      {/* 1. Capa de la Imagen de fondo */}
      <div className="absolute inset-0 bg-[url('/fondo.png')] bg-cover bg-center">
        {/* 2. Capa de degradado: de transparente arriba a negro sólido abajo */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      {/* 3. Contenedor del Contenido (BannerCard) */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] w-full px-4 md:px-12 pt-10 md:pt-14 gap-8 md:gap-12 md:-mt-10">
        <Promocion />
        <BannerCard />
      </div>
    </section>
  );
}
