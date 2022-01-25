import React, { useState } from "react";
import Menu from "../menu/Menu";
import "./Cabecera.css";

const Cabecera = (props) => {
  const nombreTitulo = props.children;

  return (
    <div className="cabecera">
      <div className="left">
        <img src="img/cabalgata.jpg" />
      </div>
      <div className="center">
        <h1>Cabalgatas y dias de campo</h1>
      </div>
      <div className="right">        
      </div>
      <Menu />
    </div>
  );
};

export default Cabecera;
