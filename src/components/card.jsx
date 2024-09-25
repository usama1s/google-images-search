import React from "react";
import "./card.css";

const Card = ({ image, text }) => {
  return (
    <>
      <div className="slider-img">
        <div className="img">
          <img src={image} alt="" />
        </div>
        <div className="text">
          <h1>{text}</h1>
        </div>
      </div>
    </>
  );
};

export default Card;
