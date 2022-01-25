import React from "react";
import "./Button.css";

const Button = (props) => {
  return <div className="boton-centro">
    <button class="button">{props.children}</button>
  </div>
}

export default Button