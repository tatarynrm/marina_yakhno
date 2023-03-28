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
      <div className="about__block">
        <div className="about__block-left">
          <div className="about__block-left-image">
            <img src={AboutImage} alt="about" />
          </div>
          <p className="about__block-left-text">
            Через воєнні дії та небезпеку були змушені виїхати з рідного міста
            та облаштували свої потужності на Київщині.
          </p>
          <div className="about__block-left-engineers">
            <img
              className="first-engineer"
              src={firstEngineer}
              alt="engineer"
            />
            <img
              className="second-engineer"
              src={secondEngineer}
              alt="engineer"
            />
          </div>
        </div>
        <div className="about__block-right"></div>
      </div>
    </section>
  );
};

export default About;
