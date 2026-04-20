import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo / Marca */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-black uppercase tracking-[0.4em]">
            Rock <span className="text-yellow-500">Machine</span>
          </h2>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-1">
            Potencia Industrial
          </p>
        </div>

        {/* Copyright y Ubicación */}
        <div className="text-center md:text-right ">
          <p className="text-[16px] font-black tracking-tighter">
            +52 998 418 7535
          </p>
          <p className="text-[9px] text-gray-600 font-bold uppercase tracking-[0.2em] mt-1">
            © 2026 Rock Machine. Cancún, Q. Roo
          </p>
        </div>
      </div>
    </footer>
  );
}
