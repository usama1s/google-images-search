import React from "react";
import "./image-card.css";

function ImageCard({ image1, image2, text, paragraph ,handleOnClick }) {

  return (
    <a className="image-item" onClick={handleOnClick}>
      <div className="img">
        <img src={image1} alt="Main visual" />
      </div>
      <div className="content">
        <div className="description">
          <div className="icon">
            <img src={image2} alt="Icon" />
          </div>
          <p>{paragraph}</p>
        </div>
        <h2>{text}</h2>
      </div>
    </a>
  );
}

export default ImageCard;
