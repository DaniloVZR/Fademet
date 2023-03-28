import "./Logo.css";
import logo from "../../img/logo_fm.png";

const Logo = () => {
  return (
    <div className="navbar-logo">
      <div className="nv">
        <img
          onMouseOver={(e) => e.currentTarget.classList.add("fa-spin")}
          onMouseOut={(e) => e.currentTarget.classList.remove("fa-spin")}
          className="navbar-logo__img" src={logo} alt="Logo" />
      </div>
      <h1 className="navbar-logo__text"><span>FADE</span>MET</h1>
    </div>
  )
}

export default Logo;