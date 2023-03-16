import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Components/Inicio/Inicio.jsx";
import Proyectos from "./Components/Proyectos/Proyectos";
import Servicios from "./Components/Servicios/Servicios";
import Gallery from "./Components/Gallery/Gallery";
import QuienesSomos from "./Components/QuienesSomos/QuieneSomos";
import Contactanos from "./Components/Contactanos/Contactanos";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/Proyectos" element={<Proyectos />} />
        <Route exact path="/Galería" element={<Gallery />} />
        <Route exact path="/QuienesSomos" element={<QuienesSomos />} />
        <Route exact path="/Contactanos" element={<Contactanos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
