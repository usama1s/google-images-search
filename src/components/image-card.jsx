import React from "react";
import "./image-card.css";

function ImageCard({ image, icon, text, url_title, url ,handleOnClick }) {

  return (
    <a className="image-item" >
      <div className="img" onClick={handleOnClick}>
        <img src={image} alt="Main visual" />
      </div>
      <a target="_blank" href={url} className="content">
        <div className="description">
          <div className="icon">
            <img src={icon} alt="Icon" />
          </div>
          <p>{url_title}</p>
        </div>
        <h2>{text}</h2>
      </a>
    </a>
  );
}

export default ImageCard;
