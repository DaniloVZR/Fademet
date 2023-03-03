import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import images from "../../utils/images";
import "./Trabajos.css"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useEffect, useState } from "react";

const Trabajos = () => {

  const [data, setData] = useState({
    img: '',
    i: 0
  })

  const viewImage = (img, i) => {
    setData({ img, i })
  }

  const imgAction = (action) => {
    let i = data.i;
    if (action === "next-img") {
      setData({ img: images[i + 1].photo, i: i + 1 });
    }
    if (action === "prev-img") {
      setData({ img: images[i - 1].photo, i: i - 1 })
    }
    if (!action) {
      setData({ img: "", i: 0 })
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
      <div className="trabajos-wrapper">
        <div className="trabajos-container">
          <div className="trabajos-title">
            <h1>Trabajos</h1>
            <h3>Estos fueron algunos de los trabajos realizados:</h3>
          </div>
        </div>
        {
          data.img &&
          <div className="trabajos__img-selected">
            <button
              onClick={() => imgAction()}
              style={{ position: "absolute", top: 0, right: 0 }}
            >
              X
            </button>
            <img src={data.img} style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }} />
            <button
              disabled={data.i === 0}
              onClick={() => imgAction("prev-img")}
            >
              Prev
            </button>
            <button
              disabled={data.i === images.length - 1}
              onClick={() => imgAction("next-img")}
            >
              Next
            </button>
          </div>
        }
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
                  onClick={() => viewImage(image.photo, i)}
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