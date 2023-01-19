import "./Logo.css";
import logo from "../../img/logo_fm.png";

const Logo = () => {
  return (
    <div className="navbar-logo">
      <div className="nv">
        <img className="navbar-logo__img" src={logo} alt="Logo" />
      </div>
      <h1 className="navbar-logo__text">FADEMET</h1>
    </div>
  )
}

export default Logo;