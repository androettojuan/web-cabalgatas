import React from "react";
import "./Piepagina.css";

const Piepagina = () => {
  return (
    <div className="pie-pagina">
      <div className="info">
        <ul>
          <li>Reglas y recomendaciones</li>
          <li>Politicas de cancelacion</li>
          <li>Preguntas frecuentes</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div className="redes">
      <img src="img/Redes sociales.png" alt="Redes sociales"/>
      </div>
      <div className="derechos">
      <p>Todos los derechos reservados | Carla Zarate | Alta Gracias, Cordoba, Argentina</p>
      </div>
    </div>
  );
};

export default Piepagina;
