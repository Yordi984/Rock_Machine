import React from "react";

export default function BannerCard() {
  return (
    <div className="flex items-start justify-center md:justify-end p-4 md:p-6 min-h-[500px] md:min-h-[600px] w-full">
      <div className="card w-full max-w-[480px] glass shadow-2xl rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/20 relative">
        {/* Fondo oscuro con gradiente para resaltar el efecto cristal */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-black pointer-events-none"></div>

        <div className="card-body p-8 md:p-12 gap-6 md:gap-8 relative z-10">
          <header className="space-y-4">
            {/* Tag de Promoción */}
            <div>
              <span className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase py-1.5 px-4 rounded-full">
                Promoción Exclusiva
              </span>
            </div>

            <div className="relative pt-4">
              <h1 className="text-4xl md:text-6xl font-black uppercase leading-[0.8] tracking-tighter text-white">
                MARTILLO <br />
                <span className="text-yellow-500">GRATIS</span>
              </h1>
              {/* Detalle decorativo industrial */}
              <div className="h-2 w-16 md:w-20 bg-yellow-500 mt-6"></div>
            </div>
          </header>

          <div className="space-y-4">
            <p className="text-lg md:text-xl text-white leading-tight font-bold">
              En la compra de una <br />
              <span className="text-yellow-500 uppercase tracking-wider text-xs md:text-sm font-bold">
                Excavadora o Retroexcavadora
              </span>
            </p>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-medium max-w-full md:max-w-[90%]">
              No solo compres una máquina, adquiere una solución completa. El
              estándar de oro en maquinaria pesada, ahora con equipamiento extra
              incluido
            </p>
          </div>

          <div className="card-actions mt-4">
            <a
              href="https://wa.me/529984187535"
              target="_blank"
              rel="noopener noreferrer"
              className="group btn rounded-2xl w-full h-14 md:h-16 border-none bg-yellow-500 text-black hover:bg-yellow-400 transition-all duration-300 shadow-xl shadow-yellow-500/10 flex items-center justify-center gap-3"
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
              <span className="font-black tracking-[0.1em] text-sm uppercase">
                Cotizar por WhatsApp
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
