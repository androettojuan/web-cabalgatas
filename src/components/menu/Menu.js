import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <a href="/Contacto">Contacto</a>
        </li>
        <li>
          <a href="/Reserva">Reservar</a>
        </li>
        <li>
          <a href="/Experiencias">Experiencias</a>
        </li>
        <li>
          <a href="/Nosotros">Quienes somos</a>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
