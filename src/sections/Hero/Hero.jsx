import React, { useEffect, useState } from "react";
import "./Hero.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "../../components/header/Header";
import BurgerMenu from "../../components/burger-menu/BurgerMenu";
import decor from "../../assets/images/decor.svg";
import HeroCards from "../../components/hero-cards/HeroCards";
const Hero = () => {
  const [open, setOpen] = useState(true);
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);
  return (
    <section className="hero">
      <div className="hero__container">
        <Header open={open} setOpen={setOpen} />
        {open ? null : <BurgerMenu open={open} setOpen={setOpen} />}
        <div className="hero__main-info">
          <h1 className="hero__main-info-title">
            Команда професіоналів у сфері
            <br /> конструювання та <br />
            металообробки
          </h1>
          <p className="hero__main-info-p">
            Зконструюємо та втілимо ваше <br /> бажання з металу будь-якої
            складності.
          </p>
          <button className="hero__main-info-button">
            <a href="#contacts">Отримати консультацію</a>
          </button>
        </div>
        <HeroCards />
      </div>
    </section>
  );
};

export default Hero;
