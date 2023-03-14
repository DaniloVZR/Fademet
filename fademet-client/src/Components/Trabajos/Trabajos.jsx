import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import images from "../../utils/images";
import "./Trabajos.css"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useEffect, useState } from "react";

const Trabajos = () => {

  const [data, setData] = useState({
    img: '',
    title: '',
    location: '',
    desc: '',
    i: 0
  })

  const viewImage = (img, title, location, desc, i) => {
    setData({ img, title, location, desc, i })
  }

  const imgAction = (action) => {
    let i = data.i;
    if (action === "next-img") {
      setData({
        img: images[i + 1].photo,
        title: images[i + 1].title,
        location: images[i + 1].location,
        desc: images[i + 1].description,
        i: i + 1
      });
    }
    if (action === "prev-img") {
      setData({
        img: images[i - 1].photo,
        title: images[i - 1].title,
        location: images[i - 1].location,
        desc: images[i - 1].description,
        i: i - 1
      })
    }
    if (!action) {
      setData({ img: "", title: "", location: "", desc: "", i: 0 })
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 37) { // left arrow
        imgAction("prev-img");
      } else if (event.keyCode === 39) { // right arrow
        imgAction("next-img");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [data.i]);


  return (
    <div className="trabajos">
      <Navbar />
      {
        data.img &&
        <div className="trabajos__img-selected">
          <div className="trabajos__image-menu">
            <img
              src={data.img}
              className="trabajos__img"
            />

            <div className="trabajos__img-panel">
              <div className="trabajos__img-btn">
                <button
                  className="trabajos__btns"
                  disabled={data.i === 0}
                  onClick={() => imgAction("prev-img")}
                >
                  <i class="fa-solid fa-arrow-left"></i>
                </button>

                <button
                  className="trabajos__btns"
                  disabled={data.i === images.length - 1}
                  onClick={() => imgAction("next-img")}
                >
                  <i class="fa-solid fa-arrow-right"></i>
                </button>

                <button
                  className="trabajos__btns"
                  onClick={() => imgAction()}
                >
                  <i class="fa-solid fa-x"></i>
                </button>
              </div>
              <div className="trabajos__img-info">
                <h2>{data.title}</h2>
                <div className="trabajos__info-location">
                  <i className="fa-sharp fa-solid fa-location-dot" />
                  <span>{data.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      <div className="trabajos-wrapper m-snav animate__animated animate__fadeIn">
        <div className="trabajos-container">
          <div className="section-title">
            <h1>Trabajos</h1>
            <h3>Estos fueron algunos de los trabajos realizados:</h3>
          </div>
        </div>
        <div className="trabajos__gallery-container">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry gutter="15px">
              {images.map((image, i) => (
                <img
                  key={i}
                  src={image.photo}
                  style={{ width: "100%", display: "block", cursor: "pointer" }}
                  alt={image.title}
                  onClick={() => viewImage(image.photo, image.title, image.location, image.description, i)}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default Trabajos;