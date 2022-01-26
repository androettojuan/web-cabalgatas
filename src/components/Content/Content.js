import react from "react";
import "./Content.css";

const Content = ({ imagen, title, id}) => {
  return (
    <div id={id} className="content">
      <div>
        <img src={imagen}/>
        <h2>{title}</h2>    
      </div>      
    </div>
  );
};

export default Content;
