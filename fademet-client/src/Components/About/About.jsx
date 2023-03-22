import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <section className="about__container m-snav animate__animated animate__fadeIn">
        <div className="section-title">
          <h1>Quiénes Somos</h1>
        </div>
        <div className="about__content">
          <div className="about__text">
            <h3>Misión</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae asperiores architecto accusantium possimus, est autem, et perspiciatis error animi beatae excepturi. Molestiae aliquid obcaecati commodi nisi aliquam distinctio cupiditate sint.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequatur laborum? Consequatur labore accusantium eveniet eligendi? Alias repellendus sit saepe molestias perferendis, iure vero quo quia voluptatibus libero accusantium cupiditate at, ad, magnam incidunt! Aspernatur doloremque velit odit nihil, tempora porro quia eius? Accusantium eius nesciunt asperiores fugit enim tempora?</p>
          </div>
          <div className="about__text">
            <h3>Visión</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae asperiores architecto accusantium possimus, est autem, et perspiciatis error animi beatae excepturi. Molestiae aliquid obcaecati commodi nisi aliquam distinctio cupiditate sint.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default About;