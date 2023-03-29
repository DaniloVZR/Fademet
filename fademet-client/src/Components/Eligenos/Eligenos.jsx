import "./Eligenos.css";

const Eligenos = () => {
  return (
    <section className="eligenos" id="eligenos">
      <div className="eligenos__container">
        <div className="section-title">
          <h1>¿Por qué Elegirnos?</h1>
        </div>
        <div className="eligenos__panels">
          <p><i className="fa-sharp fa-solid fa-star fa-beat" />&nbsp; Experiencia y compromiso con la calidad en cada proyecto.</p>
          <p><i className="fa-sharp fa-solid fa-star fa-beat" />&nbsp; Soluciones personalizadas para satisfacer las necesidades únicas de cada cliente.</p>
          <p><i className="fa-sharp fa-solid fa-star fa-beat" />&nbsp; Precios competitivos y atención al cliente excepcional.</p>
        </div >
      </div >

      <div className="eligenos__photo">
        <div className="eligenos__photo-overlay">
          <div className="eligenos__photo-text">
            <div className="eligenos__element">
              <i className="fa-sharp fa-solid fa-pen fa-3x"></i>
              <h4>Diseño</h4>
              <p>Llevamos tus ideas a la realidad</p>
            </div>
            <div className="eligenos__element">
              <i className="fa-solid fa-screwdriver-wrench fa-3x"></i>
              <h4>Fabricación</h4>
              <p>Elaboramos con amor y dedicación</p>
            </div>
            <div className="eligenos__element">
              <i className="fa-sharp fa-solid fa-phone fa-3x"></i>
              <h4>Asesoría</h4>
              <p>Te orientamos en la elaboración de tu proyecto</p>
            </div>
            <div className="eligenos__element">
              <i className="fa-solid fa-helmet-safety fa-3x"></i>
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