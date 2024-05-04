import React from "react";
import image2 from "../images/recurso2.webp";
import Cuadritos from "../components/Cuadritos.js";
import Esponja from "../images/recurso5.webp";
import Instagram from "../images/instagram.png";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook} from "@fortawesome/free-brands-svg-icons";
import "../css/Inicio.css";

const Inicio = () => {
  return (
    <div className="init">
      <section className="primaria">
        <div className="modal3D">
          <div className="title-slogan">
            <div className="slogan">Agricultura Inteligente</div>
            <div className="title">Hidro Crop</div>
            <div className="slogan">
              <h2>"Cultivando el Futuro"</h2>
            </div>
          </div>
          <div className="tresD">
            <img src={image2} alt="imagen" />
            <div className="cuadro-puntos">
              <Cuadritos />
            </div>
          </div>
        </div>
      </section>
      <section className="oasis">
        <div className="frame2">
          <div className="title-oasis">Esponja Floral (OASIS)</div>
          <div className="descripcion-esponja">
            <h1>Descripcion:</h1>
            <br />
            <br />
            <p>
              La espuma floral, también conocida como OASIS, es un material
              utilizado en la industria floral como base para arreglos florales.
              Está compuesta principalmente de resina fenólica y otros aditivos
              que le permiten retener agua y sostener las flores en su lugar.
              Sin embargo, su uso excesivo ha generado preocupaciones
              ambientales debido a su contribución a la contaminación por
              microplásticos.
            </p>
          </div>
          <div className="img-esponja">
            <img width="300px" src={Esponja} alt="Esponja" />
          </div>
        </div>
      </section>
      <footer  className="slider">
        <section className="redes">
          <hr />
            <ul>
              <a href="https://www.facebook.com"><FontAwesomeIcon className="facebook" icon={faFacebook}></FontAwesomeIcon></a>
              <a href="http://www.instagram.com"><img className="instagram" src={Instagram} alt="" /></a>
            </ul>
        </section>
        <section className="copyright" center>
          <h1>Hidro Crop</h1>
          <p>Copyright © 2024 HubSpot, Inc.</p>
        </section>
      </footer>
    </div>
  );
};

export default Inicio;
