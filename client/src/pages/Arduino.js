import React from "react";
import Water from "../components/Sensores/Water.js"
import BarRed from "../components/Sensores/BarRed.js"
import BarWhite from "../components/Sensores/BarWhite.js"
import Reloj1 from "../components/Sensores/Reloj1.js"
import Reloj2 from "../components/Sensores/Reloj2.js"
import Icon from "../components/Sensores/Icon.js"
import "../css/Arduino.css";

const Arduino = () => {
  return (
      <div className="style-2">
      <div className="frame-parent">
        <div className="actividad-sensorial-wrapper">
          <div className="actividad-sensorial">Actividad Sensorial:</div>
        </div>
        <div className="sensor-de-humedad-parent">
          <div className="sensor-de-humedad">
            <div className="humedad-ambiental">Humedad Ambiental</div>
            <div className="sensor-de-humedad-inner">
              <div className="vector-parent">
                <div className="vector-icon3">
                  <Reloj1/>
                </div>
                <div className="vector-group">
                  <div className="vector-icon4">
                    <BarRed/>
                  </div>
                  <div className="wrapper">
                    <div className="div">%</div>
                  </div>
                  <b className="b">75</b>
                </div>
              </div>
            </div>
            <div className="actualizado-wrapper">
              <div className="actualizado">Actualizado</div>
            </div>
          </div>
          <div className="frame-group">
            <div className="nivel-de-agua-wrapper">
              <div className="nivel-de-agua">Nivel de Agua</div>
            </div>
            <Water className="frame-child" />
            <div className="frame-wrapper">
              <div className="frame-container">
                <div className="container">
                  <b className="b1">75</b>
                </div>
                <div className="div1">%</div>
              </div>
            </div>
          </div>
          <div className="widget-wrapper">
            <div className="widget">
              <div className="humedad-wrapper">
                <div className="humedad">Humedad</div>
              </div>
              <div className="icon">
                <Icon/>
              </div>
              <div className="frame-div">
                <div className="value-parent">
                  <div className="value">50</div>
                  <div className="subtract-icon">
                    <BarWhite/>
                  </div>
                </div>
                    {/*substract-1 */}
                <div className="subtract-icon1">
                  <Reloj2/>
                </div>
                <div className="frame-item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arduino;
