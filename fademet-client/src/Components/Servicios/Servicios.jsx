import servicesList from "../../utils/Services";
import { motion } from "framer-motion";
import "./Servicios.css";

const Servicios = () => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
  }


  return (
    <section className="servicios" id="servicios">
      <div className="servicios-container">
        <div className="section-title">
          <h1>Nuestros Servicios</h1>
          <h3>En Fademet contamos con los siguientes servicios:</h3>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="servicios-content">
          {
            servicesList.map((service, i) => {
              // const isFirstColumn = i < servicesList.length / 2
              // const className = `servicio-option ${isFirstColumn ? 'column-1' : 'column-2'}`;
              return (
                <motion.div key={i} className={`servicio-option`} variants={item}>{service}</motion.div>
              )
            })
          }
        </motion.div>
      </div>
    </section>
  )
}

export default Servicios;