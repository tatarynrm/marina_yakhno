import React from "react";
import "./Services.scss";
import SectionTitle from "../../components/section-title/SectionTitle";
import servicePhoto1 from "../../assets/images/services1.jpg";
import servicePhoto2 from "../../assets/images/services2.jpg";
import servicePhoto3 from "../../assets/images/services3.webp";
import servicePhoto4 from "../../assets/images/services4.jpg";
import servicePhoto5 from "../../assets/images/services5.jpg";

const servicesData = [
  { img: servicePhoto1, text: "Зварювання металу та металоконструкцій" },
  { img: servicePhoto2, text: "Порошкове фарбування металу" },
  { img: servicePhoto3, text: "Гнуття металу" },
  {
    img: servicePhoto4,
    text: "Лазерний розкрій/різка металу на лазерному верстаті",
  },
  {
    img: servicePhoto5,
    text: `Розробка та 3д моделювання пристроїв, деталей та механізмів будь-якої складності.`,
    text2: "Підготовка креслень та технічної документації",
  },
  {
    img: servicePhoto1,
    text: "Лазерне зварювання кольорових та чорних металів",
  },
];
const Services = () => {
  return (
    <section id="services" className="services section">
      <SectionTitle title={"Наші послуги"} />
      <div className="services__cards container">
        {servicesData.map((item, idx) => {
          return (
            <div key={idx} className="services__card">
              <div className="services__card-photo">
                <img src={item.img} alt="services" />
              </div>
              <p className="services__card-desc">{item.text}</p>
              {item.text2 ? (
                <p className="services__card-desc">{item.text2}</p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
