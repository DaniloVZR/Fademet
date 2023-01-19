import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Servicios.css";

const Servicios = () => {
  return (
    <div className="servicios">
      <Navbar />
      <div className="servicios-container">
        <div className="servicios-title">
          <h1>Servicios</h1>
          <h3>En Fademet contamos con los siguientes servicios:</h3>
        </div>
        <div className="servicios-content">
          <div className="servicio-option">Casetas</div>
          <div className="servicio-option">Pérgolas</div>
          <div className="servicio-option">Cubiertas</div>
          <div className="servicio-option">Mezzanine</div>
          <div className="servicio-option">Plataformas</div>
          <div className="servicio-option">Cerramientos</div>
          <div className="servicio-option">Pisos en deck</div>
          <div className="servicio-option">Bases Metálicas</div>
          <div className="servicio-option">Techos Metálicos</div>
          <div className="servicio-option">Acero Inoxidable</div>
          <div className="servicio-option">Cárcamos Metálicos</div>
          <div className="servicio-option">Escaleras Metálicas</div>
          <div className="servicio-option">Ventanería en Aluminio</div>
          <div className="servicio-option">Fascia o áticos en aluminio</div>
          <div className="servicio-option">Soportes de acero en general</div>
          <div className="servicio-option">Pasamanos industriales y domésticos</div>
          <div className="servicio-option">Puertas fijas, batientes y corredizas con motor</div>
          <div className="servicio-option">Ingeniería, diseño, fabricación de estructuras metálicas</div>
          <div className="servicio-option">Montaje de cubiertas en placa de superboard o fibrocemento</div>
          <div className="servicio-option">Impermeabilización de superficies con soluciones asfálticas</div>
          <div className="servicio-option">Soldadura en general MIG-MAG en acero al carbono e inoxidable</div>
          <div className="servicio-option">Asesoría, diseño y fabricación de todo tipo de prototipos metálicos</div>
          <div className="servicio-option">Manifolds, spools y bypass de tuberías con accesorios completos, prefabricado de tuberías</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Servicios;