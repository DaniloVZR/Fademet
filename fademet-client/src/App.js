import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Components/Inicio/Inicio.jsx";
import Proyecto_id from "./Components/Proyecto_id/Proyecto_id";
import Gallery from "./Components/Gallery/Gallery";
import About from "./Components/About/About";
import Contactanos from "./Components/Contactanos/Contactanos";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/Proyectos/:id" element={<Proyecto_id />} />
        <Route exact path="/Galería" element={<Gallery />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contactanos" element={<Contactanos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
