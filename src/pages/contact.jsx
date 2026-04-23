import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Contacto() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500 selection:text-black">
      <Header />
      <main className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* CABECERA */}
          <div className="mb-12 md:mb-20 text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mt-4">
              Hablemos de <br />
              <span className="text-yellow-500">Tu Proyecto</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* TARJETA PRINCIPAL WHATSAPP */}
            <div className="lg:col-span-2 p-[2px] bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-[2rem] md:rounded-[3rem]">
              <div className="bg-[#0f0f0f] h-full w-full rounded-[1.9rem] md:rounded-[2.9rem] p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 text-white">
                    Ventas y <br /> Asesoría Directa
                  </h3>
                  <p className="text-gray-400 font-medium tracking-wide max-w-md text-sm md:text-base">
                    ¿Necesitas una cotización inmediata o soporte técnico?
                    Nuestro asesor está disponible para atenderte
                  </p>
                </div>

                <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-6 md:gap-8 items-center md:items-start">
                  <a
                    href="https://wa.me/529984187535"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn rounded-full px-10 h-14 md:h-16 border-none bg-yellow-500 hover:bg-yellow-400 hover:text-black transition-all duration-300 w-full sm:w-auto flex items-center justify-center"
                  >
                    <span className="font-black tracking-[0.2em] text-[9px] md:text-[10px] uppercase text-black">
                      Abrir WhatsApp
                    </span>
                  </a>
                  <div className="flex flex-col items-center md:items-start">
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-600">
                      Llamada Directa
                    </span>
                    <span className="text-lg md:text-xl font-bold tracking-tighter text-white">
                      +52 998 418 7535
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMNA DE INFORMACIÓN Y REDES */}
            <div className="flex flex-col gap-6">
              {/* Ubicación */}
              <div className="bg-neutral-900/40 border border-white/5 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] flex items-start gap-4">
                <svg
                  className="w-5 h-5 text-yellow-500 mt-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <h4 className="font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] text-yellow-500 mb-2">
                    Ubicación
                  </h4>
                  <div className="flex flex-col items-start gap-2">
                    <a
                      href="https://maps.app.goo.gl/C6upDpAKuqd3A6we8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-start"
                    >
                      <p className="text-[11px] md:text-[12px] font-bold text-gray-300 uppercase tracking-tighter mt-1 group-hover:text-white transition-colors">
                        Mojarra Retorno 9 25, 77500 Cancún, Q.R.
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="bg-neutral-900/40 border border-white/5 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem]">
                <h4 className="font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] text-yellow-500 mb-6">
                  Síguenos
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/mxrockmachine/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 fill-currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </div>
                    <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white">
                      Facebook
                    </span>
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/mxrockmachine"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 fill-currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white">
                      Instagram
                    </span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-neutral-900/40 border border-white/5 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] flex items-start gap-4">
                <svg
                  className="w-5 h-5 text-yellow-500 mt-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h4 className="font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] text-yellow-500 mb-2">
                    Email
                  </h4>
                  <p className="text-xs md:text-sm font-bold text-gray-300 tracking-tighter">
                    contacto@mxrockmachine.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
