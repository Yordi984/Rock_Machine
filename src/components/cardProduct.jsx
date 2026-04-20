import React from "react";

export default function CardProduct({
  image,
  title,
  subtitle,
  description,
  tag = "Equipo Disponible",
}) {
  return (
    // h-full asegura que si están en un grid, todas estiren al mismo tamaño
    // flex flex-col permite controlar la distribución del contenido interno
    <div className="w-full max-w-[400px] h-full flex flex-col glass shadow-2xl rounded-[40px] overflow-hidden border border-white/10 relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-black pointer-events-none"></div>

      {/* card-body con flex-1 para empujar el botón hacia abajo */}
      <div className="card-body p-8 gap-6 relative z-10 flex flex-col flex-1">
        {/* Imagen con altura fija para que no varíe el layout */}
        <div className="relative max-h-68 w-full flex items-center justify-center flex-shrink-0 overflow-hidden rounded-t-[40px]">
          {/* Overlay sutil para integrar la foto con el diseño oscuro */}
          <div className="absolute inset-0 bg-black/20 z-10"></div>

          <img
            src={image}
            alt={title}
            className="relative z-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-110 contrast-110"
          />
        </div>

        <header className="space-y-3">
          <div>
            <span className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[9px] font-black tracking-[0.3em] uppercase py-1 px-3 rounded-full">
              {tag}
            </span>
          </div>

          <div className="relative">
            {/* Altura fija en título para evitar saltos de línea asimétricos */}
            <h2 className="text-3xl font-black uppercase leading-none tracking-tighter text-white h-[64px] flex items-center line-clamp-2">
              {title}
            </h2>
            <div className="h-1.5 w-12 bg-yellow-500 mt-3 group-hover:w-20 transition-all duration-500"></div>
          </div>
        </header>

        {/* Contenedor de texto con flex-1 y altura controlada */}
        <div className="space-y-3 flex-1">
          <p className="text-lg text-white leading-tight font-bold line-clamp-2 min-h-[56px]">
            {subtitle}
          </p>
          {/* line-clamp-4 limita el texto a 4 líneas para que no crezca infinitamente */}
          <p className="text-xs text-gray-400 leading-relaxed font-medium line-clamp-4 h-[72px] overflow-hidden">
            {description}
          </p>
        </div>

        {/* Botón siempre pegado al borde inferior gracias al flex-1 de arriba */}
        <div className="card-actions mt-auto pt-4">
          <a
            href="https://wa.me/529984187535"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn btn rounded-2xl w-full h-14 border-none bg-yellow-500 text-black hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="group-hover/btn:scale-110 transition-transform duration-300"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03a11.85 11.85 0 001.592 5.952L0 24l6.135-1.61a11.816 11.816 0 005.915 1.594h.005c6.637 0 12.032-5.391 12.035-12.027a11.762 11.762 0 00-3.522-8.508z" />
            </svg>
            <span className="font-black tracking-widest text-xs uppercase">
              Cotizar Ahora
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
