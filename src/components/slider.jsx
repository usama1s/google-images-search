import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

// Custom next arrow component
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
};

// Custom previous arrow component
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "10px",
        zIndex: 1,
        color: "#000",
      }}
      onClick={onClick}
    />
  );
};

function Sliderdata({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 9,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {data.map((content) => (
        <div className="slider-container min-w-[38px] flex flex-row flex-wrap justify-start items-center gap-2">
          <img
            src={content.image}
            width={200}
            className="img-slider max-h-12"
            alt=""
          />
          <p>{content.title}</p>
        </div>
      ))}
    </Slider>
  );
}

export default Sliderdata;
