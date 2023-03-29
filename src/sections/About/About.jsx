import React from "react";
import "./About.scss";
import SectionTitle from "../../components/section-title/SectionTitle";
import AboutImage from "../../assets/images/About1.jpg";
import firstEngineer from "../../assets/images/FirstEngineer.jpg";
import secondEngineer from "../../assets/images/SecondEngineer.jpg";
// import AboutImage from "../../assets/images/About1.jpg";
const About = () => {
  return (
    <section className="about section">
      <SectionTitle title={"Про компанію"} />
      <div className="about__block container">
        <div className="about__block-top">
          <div className="about__block-top-image">
            <img src={AboutImage} alt="about" />
          </div>
          <div className="about__block-top-text">
            <p>
              Компанія "Emitech"- команда професіоналів у сфері конструювання,
              металообробки та порошкового фарбування металу. Працюємо на
              українському ринку з 2020 року.
            </p>
            <br />
            <p>
              Ми спеціалізуємося на виробництві складних корпусних конструкцій з
              металу.
            </p>
            <br />
            <p>
              Без перебільшення <b>90</b> відсотків громадян нашої країни
              користувалися пристроями які зібрані в корпусах нашого
              виробництва. Один із прикладів є такі звичні нам платіжні
              термінали самообслуговування.
            </p>
          </div>
        </div>

        <div className="about__block-center"></div>
        <div className="about__block-bottom">
          <div className="about__block-bottom-left"></div>
          <div className="about__block-bottom-right"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
