import React from "react";
import "./About.scss";
import SectionTitle from "../../components/section-title/SectionTitle";
import AboutImage from "../../assets/images/About1.jpg";
import firstEngineer from "../../assets/images/FirstEngineer.jpg";
import secondEngineer from "../../assets/images/SecondEngineer.jpg";
import ukrainePhoto from "../../assets/images/Ukraine.jpg";
const About = () => {
  return (
    <section id="about" className="about section">
      <SectionTitle title={"Про компанію"} />

      <div className="about__block container">
        <div className="about__block-section about-section">
          <div className="about__block-section-img about-section-img">
            <img src={AboutImage} alt="about" />
          </div>
          <div className="about__block-section-text about-section-text">
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
        <div className="about__block-section about-section">
          <div className="about__block-section-text about-section-text">
            <p>
              Через воєнні дії та небезпеку були змушені виїхати з рідного міста
              та облаштували свої потужності на Київщині.
            </p>
          </div>
          <div className="about__block-section-img about-section-img">
            <img src={ukrainePhoto} alt="about" />
          </div>
        </div>
        <div className="about__block-section about-section">
          <div className="about__block-section-img about-section-img">
            <div className="double__photo">
              <img src={secondEngineer} alt="about" />
              <img
                className="absolute__photo"
                src={firstEngineer}
                alt="about"
              />
            </div>
          </div>
          <div className="about__block-section-text about-section-text">
            <p>
              Через воєнні дії та небезпеку були змушені виїхати з рідного міста
              та облаштували свої потужності на Київщині.
            </p>
          </div>
        </div>

        {/* <div className="about__block-section about-sections">
          <div className="about__block-section-text about-text">
            <p className="about__block-section-desc">
              Через воєнні дії та небезпеку були змушені виїхати з рідного міста
              та облаштували свої потужності на Київщині.
            </p>
          </div>
          <div className="about__block-center-right">
            <div className="about__block-center-right-img">
              <img src={ukrainePhoto} alt="ukraine" />
            </div>
          </div>
        </div> */}
        {/* <div className="about__block-bottom about-sections">
          <div className="about__block-bottom-left">
            <div className="img__1">
              <img src={firstEngineer} alt="engineer" />
            </div>
            <div className="img__2">
              <img src={secondEngineer} alt="engineer" />
            </div>
          </div>
          <div className="about__block-bottom-right">
            <p className="about-text">
              Завдяки професійному обладнанню, компанія "Emitech" готова
              виконати широкий спектр послуг з конструювання, металообробки та
              порошкового фарбування.
            </p>
            <br />
            <p className="about-text">
              У нас доступний великий вибір кольорів за шкалою RAL.
            </p>
            <br />
            <p className="about-text">
              В роботі використовуємо порошкові фарби відомих європейських
              виробників.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
