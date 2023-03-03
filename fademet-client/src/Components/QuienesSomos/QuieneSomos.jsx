import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./QuienesSomos.css";

const QuienesSomos = () => {
  return (
    <div className="somos">
      <Navbar />
      <div className="somos__container">
        <div className="trabajos-title">
          <h1>Quiénes Somos</h1>
          <h3>Conócenos un poco más</h3>
        </div>
        <div className="somos__content">
          <div className="somos__text">
            <h3>Misión</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae asperiores architecto accusantium possimus, est autem, et perspiciatis error animi beatae excepturi. Molestiae aliquid obcaecati commodi nisi aliquam distinctio cupiditate sint.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequatur laborum? Consequatur labore accusantium eveniet eligendi? Alias repellendus sit saepe molestias perferendis, iure vero quo quia voluptatibus libero accusantium cupiditate at, ad, magnam incidunt! Aspernatur doloremque velit odit nihil, tempora porro quia eius? Accusantium eius nesciunt asperiores fugit enim tempora?</p>
          </div>
          <div className="somos__text">
            <h3>Visión</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae asperiores architecto accusantium possimus, est autem, et perspiciatis error animi beatae excepturi. Molestiae aliquid obcaecati commodi nisi aliquam distinctio cupiditate sint.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default QuienesSomos;