import React from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import Catolago from "./components/catalago";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black  ">
      <Header />
      <Banner />
      <Catolago />
      <Footer />

      {/* El botón se coloca aquí para que flote sobre toda la app */}
      <WhatsAppButton />
    </div>
  );
}
