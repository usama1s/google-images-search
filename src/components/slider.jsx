import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Sliderdata( {data}) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };
 
  return (
    
      
           <Slider {...settings}>
      {data.map((content)=><div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
        <img src={content.image} width={200} height={100} alt="" />
        <p>{content.title}</p>
      
      </div>)}
    </Slider>
    
  
  );
}

export default Sliderdata;
