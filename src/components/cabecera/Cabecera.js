import React from "react";
import Menu from "../menu/Menu";
import "./Cabecera.css";

const Cabecera = () => {
  return (
    <div className="cabecera">
      <div className="left"><a href="/">
        <img src="img/cabalgata.jpg" alt="logo"></img>
      </a>
      </div>
      <div className="center">
        <h1>Cabalgatas y dias de campo</h1>
      </div>
      <div className="right">
        <img src="img/Redes sociales.png" alt="redes sociales"/>        
      </div>
      <Menu />
    </div>
  );
};

export default Cabecera;
