import React from "react";
import CardProduct from "../components/cardProduct";

export default function catalago() {
  return (
    <section className="bg-black min-h-screen">
      {/* Encabezado */}
      <div className="flex flex-wrap gap-4 font-black p-10">
        <div className="relative inline-block pb-3">
          <h2 className="text-5xl font-extrabold text-white uppercase">
            CATALOGO
          </h2>
          <div className="absolute left-0 bottom-0 h-1 w-20 bg-yellow-500"></div>
        </div>
        <h2 className="text-5xl text-yellow-500 uppercase">INDUSTRIAL</h2>
      </div>

      {/* Grid de Productos: 3 columnas en desktop, 2 en tablet, 1 en móvil */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 pb-20 justify-items-center">
        <CardProduct
          image="/excavadora.jpeg"
          title="EXCAVADORA "
          tag="Precio Especial"
          subtitle="CAT 320GC"
          description="Gracias a su avanzado motor CAT C4.4 ACERT Turbo, este equipo de 22,000 kg ofrece una eficiencia de combustible inigualable"
        />
        <CardProduct
          image="/martillo.jpeg"
          title="EXCAVADORA"
          tag="Precio Especial"
          subtitle="CAT 320GX"
          description="Incluye pica nueva más una de regalo, tanque de nitrógeno para máxima potencia y caja de herramientas completa. Todo con garantía incluida"
        />
        <CardProduct
          image="/retroexcavadora.jpeg"
          title="EXCAVADORA"
          tag="Precio Especial"
          subtitle="XCMG XE215D"
          description="Retroexcavadora XCMG XC8-C2570: Motor Cummins de 74 kW de potencia y fuerza de excavación de 63 kN. Ideal para construcción en México"
        />
        <CardProduct
          image="/retroexcavadora.jpeg"
          title="RETROEXCAVADORA"
          tag="Precio Especial"
          subtitle="XCMG XC8 C2570"
          description="Retroexcavadora XCMG XC8-C2570: Motor Cummins de 74 kW de potencia y fuerza de excavación de 63 kN. Ideal para construcción en México"
        />

        <CardProduct
          image="/retroexcavadora.jpeg"
          title="MARTILLO HIDRAULICO"
          tag="Precio Especial"
          subtitle="GENERAL BREAKER SB 140"
          description="Retroexcavadora XCMG XC8-C2570: Motor Cummins de 74 kW de potencia y fuerza de excavación de 63 kN. Ideal para construcción en México"
        />
        <CardProduct
          image="/retroexcavadora.jpeg"
          title="MARTILLO HIDRAULICO"
          tag="Precio Especial"
          subtitle="SOOSAN SB 81"
          description="Retroexcavadora XCMG XC8-C2570: Motor Cummins de 74 kW de potencia y fuerza de excavación de 63 kN. Ideal para construcción en México"
        />
      </div>
    </section>
  );
}
