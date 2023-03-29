import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/images/slider/1.jpg";
import image2 from "../../assets/images/slider/2.jpg";
import image3 from "../../assets/images/slider/3.jpg";
import image4 from "../../assets/images/slider/4.jpg";

const sliderItems = [
  { img: image1, text: "Порошкове фарбування металу" },
  { img: image2, text: "Корпуси терміналу самообслуговювання" },
  { img: image3, text: "Self Service Box B" },
  { img: image4, text: "Self Service Box A" },
];

export default function GallerySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1386,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {sliderItems.map((item, idx) => {
        return (
          <div key={idx} className="slider__wrapper">
            <div className="slider__item">
              <img src={item.img} alt={item.text} />
              <h3>{item.text}</h3>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
