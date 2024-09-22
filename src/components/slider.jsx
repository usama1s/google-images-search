import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
function Sliderdata({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {data.map((content) => (
        <div className="slider-container flex flex-row flex-wrap items-center gap-2 " >
          <img src={content.image} width={200} className="img-slider max-h-12 " alt="" />
          <p>{content.title}</p>
        </div>
      ))}
    </Slider>
  );
}

export default Sliderdata;
