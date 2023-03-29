import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/images/slider/1.jpg";
import image2 from "../../assets/images/slider/2.jpg";

export default function GallerySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="slider__wrapper">
        <div className="slider__item">
          <img src={image2} alt="slider-image" />
          <h3>Порошкове фарбування</h3>
        </div>
      </div>

      <div className="slider__wrapper">
        <div className="slider__item">
          <img src={image1} alt="slider-image" />
          <h3>Порошкове фарбування</h3>
        </div>
      </div>

      <div>
        <div className="slider__item">
          <img src={image1} alt="slider-image" />
          <h3>Порошкове фарбування</h3>
        </div>
      </div>
      <div>
        <div className="slider__item">
          <img src={image1} alt="slider-image" />
          <h3>Порошкове фарбування</h3>
        </div>
      </div>
      <div>
        <div className="slider__item">
          <img src={image1} alt="slider-image" />
          <h3>Порошкове фарбування</h3>
        </div>
      </div>
      <div>
        <div className="slider__item">
          <img src={image1} alt="slider-image" />
          <h3>Порошкове фарбування</h3>
        </div>
      </div>
    </Slider>
  );
}
