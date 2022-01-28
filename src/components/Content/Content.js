import React from "react";
import "./Content.css";

const renderImage = (imagen) => {
  if (imagen){
    return <img src={imagen} alt="Foto"/>
  }else{
    return null;
  }
}

const Content = ({ imagen, title, id}) => {
  return (
    <div id={id} className="content">
      <div>
        {renderImage(imagen)}

        {title && <h2>{title}</h2>}

      </div>      
    </div>
  );
};

export default Content;
