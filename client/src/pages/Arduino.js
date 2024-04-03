import React from "react";
import "../css/Arduino.css";

const Arduino = () => {
  return (
    <div>
      <div className="clocks">
        <div className="temperatura_ambiental"></div>
        <div className="presion_atmosferica"></div>
        <div className="humedad_ambiental"></div>
        <div className="humedad_modulo1"></div>
        <div className="humedad_modulo2"></div>
        <div className="humedad_modulo3"></div>
        <div className="nivel_agua"></div>
        <div className="nivel_agua"></div>
        <div className="MODULOS_ABIERTO?"></div>
      </div>
    </div>
  );
};

export default Arduino;
