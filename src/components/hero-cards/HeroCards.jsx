import React from "react";
import "./HeroCards.scss";
import people from "../../assets/images/peoples.svg";
import years from "../../assets/images/year.svg";
import project from "../../assets/images/project.svg";
const cards = [
  {
    img: people,
    title: "2+",
    desc: "Роки на ринку у сфері конструювання та металообробки",
  },
  {
    img: years,
    title: "20",
    desc: "Повномаштабних проектів по всій Україні",
  },
  {
    img: project,
    title: "1000",
    desc: "Виконаних замовлень з відзнакою якості та довіри",
  },
];
const HeroCards = () => {
  return (
    <div className="hero__cards">
      {cards.map((item, idx) => {
        return (
          <div key={idx} className={`hero__cards-card`}>
            <img src={item.img} alt="card-logo" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HeroCards;
