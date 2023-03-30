import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import image1 from "../../assets/images/slider/1.jpg";
import image2 from "../../assets/images/slider/2.jpg";
import image3 from "../../assets/images/slider/3.jpg";
import image4 from "../../assets/images/slider/4.jpg";
import image10 from "../../assets/images/slider/10.jpg";
import image11 from "../../assets/images/slider/11.jpg";
import image12 from "../../assets/images/slider/12.jpg";
import image13 from "../../assets/images/slider/13.jpg";
import image14 from "../../assets/images/slider/14.jpg";

const sliderItems = [
  // { img: image1, text: "Порошкове фарбування металу" },
  { img: image2, text: "Корпуси терміналу самообслуговювання" },
  { img: image3, text: "Self Service Box B" },
  { img: image4, text: "Self Service Box A" },
  { img: image10, text: "Приклад викраски" },
  { img: image11, text: "Приклад викраски" },
  { img: image12, text: "Приклад викраски" },
  { img: image13, text: "Приклад викраски" },
  { img: image14, text: "Приклад викраски" },
];

export default function GallerySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
