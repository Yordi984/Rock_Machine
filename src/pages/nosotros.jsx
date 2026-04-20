import React from "react";
import Header from "../components/header";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500 selection:text-black">
      <Header />
      <WhatsAppButton />
      <main>
        <section className="relative py-24 px-8 border-b border-white/5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <span className="text-yellow-500 text-[10px] font-black uppercase tracking-[0.5em]">
                Sede Cancún, Q. Roo
              </span>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mt-4 leading-none">
                Forjando <br />
                <span className="text-yellow-500">El Futuro</span>
              </h1>
              <p className="text-gray-400 mt-8 leading-relaxed tracking-wide text-lg">
                Rock Machine nació con el objetivo de cerrar la brecha entre los
                grandes proyectos de infraestructura y el acceso a maquinaria de
                alto nivel en el sureste mexicano. Con sede en Cancún, Quintana
                Roo, hemos facilitado el crecimiento urbano de la región
                mediante equipos que garantizan potencia y rentabilidad.
              </p>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="aspect-square rounded-[10px] overflow-hidden border border-white/10 shadow-2xl">
                <video
                  src="/Entrega.mp4"
                  autoPlay
                  muted
                  loop
                  alt="Maquinaria Pesada"
                  className="w-full h-full object-cover"
                ></video>
              </div>
              {/* Badge de Años */}
              {/* <div className="absolute -bottom-6 -left-6 bg-yellow-500 p-8 rounded-2xl">
                <p className="text-black font-black text-4xl leading-none">
                  08+
                </p>
                <p className="text-black font-bold text-[10px] uppercase tracking-widest mt-1">
                  Años de Exp.
                </p>
              </div> */}
            </div>
          </div>
        </section>

        {/* MISIÓN Y VISIÓN - GRID DE IMPACTO */}
        <section className="py-24 px-8 bg-[#080808]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Misión */}
            <div className="p-12 rounded-[3rem] bg-neutral-900/50 border border-white/5">
              <h3 className="text-yellow-500 text-[10px] font-black uppercase tracking-[0.5em] mb-6">
                Misión
              </h3>
              <p className="text-2xl font-bold leading-snug tracking-tight">
                Suministrar soluciones de maquinaria pesada que optimicen la
                productividad de nuestros clientes, bajo estándares de
                integridad técnica y logística impecable.
              </p>
            </div>
            {/* Visión */}
            <div className="p-12 rounded-[3rem] bg-neutral-900/50 border border-white/5">
              <h3 className="text-yellow-500 text-[10px] font-black uppercase tracking-[0.5em] mb-6">
                Visión
              </h3>
              <p className="text-2xl font-bold leading-snug tracking-tight">
                Consolidarnos como el socio estratégico número uno en el Caribe
                Mexicano para 2030, siendo referentes en la comercialización de
                flota de última generación.
              </p>
            </div>
          </div>
        </section>

        {/* VALORES / UBICACIÓN */}
        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-16">
              {/* Valor 1 */}
              <div>
                <h4 className="text-white font-black uppercase tracking-widest text-sm mb-4">
                  Confianza
                </h4>
                <p className="text-gray-500 text-xs leading-loose tracking-widest uppercase">
                  Cada equipo en nuestro inventario pasa por una revisión
                  rigurosa antes de ser entregado.
                </p>
              </div>
              {/* Valor 2 */}
              <div>
                <h4 className="text-white font-black uppercase tracking-widest text-sm mb-4">
                  Logística
                </h4>
                <p className="text-gray-500 text-xs leading-loose tracking-widest uppercase">
                  Entregas programadas en todo el territorio nacional
                </p>
              </div>
              {/* Ubicación Detallada */}
              <div className="bg-yellow-500 p-8 rounded-[2rem] text-black">
                <h4 className="font-black uppercase tracking-widest text-sm mb-4">
                  Ubicación
                </h4>
                <p className="font-bold text-sm leading-relaxed">
                  Cancún, Quintana Roo
                  <br />
                  México, CP 77500
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
