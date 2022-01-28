import React from "react";
import "./Content-video.css";

const Contentvideo = ({ children, video }) => {
  return (
    <div className="contentvideo">
      <div className="video">
        <p>{children}</p>
        <video controls src={video} />
      </div>
    </div>
  );
};

export default Contentvideo;
