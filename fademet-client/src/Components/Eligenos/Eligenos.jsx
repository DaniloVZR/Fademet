import { motion } from "framer-motion";
import "./Eligenos.css";

const Eligenos = () => {
  return (
    <section className="eligenos" id="eligenos">
      <div className="servicios-container">
        <div className="section-title">
          <h1>Por qué Elegirnos</h1>
          <h3>En Fademet contamos con los siguientes servicios:</h3>
        </div>
        <div className="eligenos__panels">
          <div className="box">
            <span></span>
            <div className="content">
              <h2>Hover me!</h2>
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content">
              <h2>Hover me!</h2>
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content">
              <h2>Hover me!</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Eligenos;