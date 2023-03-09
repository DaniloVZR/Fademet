import { motion } from "framer-motion";
import "./Eligenos.css";

const Eligenos = () => {
  return (
    <section className="eligenos" id="eligenos">
      <div className="servicios-container">
        <div className="section-title">
          <h1>¿Por qué Elegirnos?</h1>
        </div>
        <div className="eligenos__panels">
          <div className="box">
            <span></span>
            <div className="content">
              <h2>Experiencia y compromiso con la calidad en cada proyecto.</h2>
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content">
              <h2>Soluciones personalizadas para satisfacer las necesidades únicas de cada cliente.</h2>
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content">
              <h2>Precios competitivos y atención al cliente excepcional.</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Eligenos;