import React from "react";
import "./image-card.css";


function ImageCard({image1, image2, text, paragraph}) {
  return (
    <>
      <a className="image-item">
        <div className="img">
          <img src={image1} alt="" />
        </div>
        <div className="description">
          <div className="icon">
          <img src={image2}/>
          </div>
          
          <p>{paragraph}</p>
        </div>
        <h2>{text}</h2>
      </a>
    </>
  );
}

export default ImageCard;
