import "./Eligenos.css";

const Eligenos = () => {
  return (
    <section className="eligenos" id="eligenos">
      <div className="eligenos__container">
        <div className="section-title">
          <h1>¿Por qué Elegirnos?</h1>
        </div>
        <ul className="eligenos__panels">
          <li className="content">
            <h3>Experiencia y compromiso con la calidad en cada proyecto.</h3>
          </li>
          <li className="content">
            <h3>Soluciones personalizadas para satisfacer las necesidades únicas de cada cliente.</h3>
          </li>
          <li className="content">
            <h3>Precios competitivos y atención al cliente excepcional.</h3>
          </li>
        </ul >
      </div >
      <div className="eligenos__photo">
        <div className="eligenos__photo-overlay">
          <div className="eligenos__photo-text">
            <div className="eligenos__element">
              <i class="fa-sharp fa-solid fa-pen fa-3x"></i>
              <h4>Diseño</h4>
              <p>Llevamos tus ideas a la realidad</p>
            </div>
            <div className="eligenos__element">
              <i class="fa-solid fa-screwdriver-wrench fa-3x"></i>
              <h4>Fabricación</h4>
              <p>Elaboramos con amor y dedicación</p>
            </div>
            <div className="eligenos__element">
              <i class="fa-sharp fa-solid fa-phone fa-3x"></i>
              <h4>Asesoría</h4>
              <p>Te orientamos en la elaboración de tu proyecto</p>
            </div>
            <div className="eligenos__element">
              <i class="fa-solid fa-helmet-safety fa-3x"></i>
              <h4>Reparación</h4>
              <p>Restauramos tus estructuras metálicas</p>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Eligenos;