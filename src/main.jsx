import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Nosotros from "./pages/nosotros.jsx";
import Contacto from "./pages/contact.jsx";
import Scroll from "./components/scroll.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/rockmachinemx">
      <Scroll />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
