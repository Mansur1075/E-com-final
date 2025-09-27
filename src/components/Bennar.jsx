import Slider from "react-slick";
import row from  "../assets/row.png"
import React from 'react'
// import { useSelector } from "react-redux";

const Bennar = () => {

  
  

  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    slidesToShow: 1,
     autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    
    appendDots: dots => (
     
      <div
        style={{
          borderRadius: "10px",
          position: "absolute",
          padding: "10px",
          left:"10%",
          top:"50%",
          transform:"translatey(-50%)"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "transparent",
          borderRight: "2px white solid ",
          padding:"20px 0"
        }}
      >
        0{i + 1}
      </div>
    )
  };
   


   
  return (
    <div>

        <Slider {...settings}>

        <div className="">
          <img src={row} alt="" />
        </div>
        <div className="">
          <img src={row} alt="" />
        </div>
        <div className="">
          <img src={row} alt="" />
        </div>
        <div className="">
          <img src={row} alt="" />
        </div>
        </Slider>
    </div>
  )
}

export default Bennar