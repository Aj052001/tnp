import React from "react";
import Slider from "react-slick";

import "./MySlider.css";

import goldmansachs from "./images/goldman.png"

const MySlider = () => {
 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,

    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 521,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="sliderContainer">
      <div className="SliderHeading">
        <h2>Past Recruiters</h2>
        <h3>
          <hr />
        </h3>
      </div>
      <Slider className="my-slider" {...settings}>
        {/* {slides.map((slide) => (
            <div key={slide.img} className='slide'>
                <img
                src={slide.img}
                alt={slide.title}
                className='slide-image'
                />
               
            </div>
        ))} */}

        <div className="companyCard card1"  ></div>
        <div className="companyCard card2" ></div>
        <div className="companyCard card3"></div>
        <div className="companyCard card4" ></div>
        <div className="companyCard card5" ></div>
        <div className="companyCard card6" ></div>
        <div className="companyCard card7" ></div>
        <div className="companyCard card8" ></div>
        <div className="companyCard card9" ></div>
      </Slider>
    </div>
  );
};

export default MySlider;
