import "../css/NavBar.css";
import image from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse,faBook,faMicrochip} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className="nav-bar">
      <div className="logo-74">
          <img
              src={image}
              alt="Hidro Crep"
              className="logo"
              width="60"
              height="60"
            />
        <h3 className="hidrocrep">Hidro Crep</h3>
      </div>
      <div className="pages">
        <div className="icon-home">
          <Link className="nav-link" to='/'><FontAwesomeIcon className="vector-icon" icon={faHouse} />
          <div className="inicio">
            Inicio
          </div>
          </Link>
        </div>
        <div className="icon-book">
          <Link className="nav-link" to='/Catalogo'>
            <FontAwesomeIcon className="vector-icon1" icon={faBook} />
            <div className="catalogo">
              Catalogo
            </div>
          </Link>
        </div>
        <div className="icon-arduino">
          <Link className="nav-link" to='/Arduino'><FontAwesomeIcon className="vector-icon2" icon={faMicrochip} />
            <div className="arduino">
              Arduino
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
