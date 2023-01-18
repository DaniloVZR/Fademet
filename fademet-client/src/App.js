import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Components/Inicio/Inicio.jsx";
import Servicios from "./Components/Servicios/Servicios";
import Trabajos from "./Components/Trabajos/Trabajos";
import QuienesSomos from "./Components/QuienesSomos/QuieneSomos";
import Contactanos from "./Components/Contactanos/Contactanos";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Inicio/>}/>
        <Route exact path="/Servicios" element={<Servicios/>}/>
        <Route exact path="/Trabajos" element={<Trabajos/>}/>
        <Route exact path="/QuienesSomos" element={<QuienesSomos/>}/>
        <Route exact path="/Contactanos" element={<Contactanos/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
