import react from "react";
import "./Content.css";
import ReactPlayer from "react-player"

const Content = ({ imagen, title, children, video}) => {
  return (
    <div className="content">
      <div>
        <img src={imagen}/>
        <h2>{title}</h2>        
      <div className="video">
        <p>{children}</p>
        <video controls src={video}/> 
      </div>
      </div>      
    </div>
  );
};

export default Content;
