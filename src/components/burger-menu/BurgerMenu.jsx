import React from "react";
import "./BurgerMenu.scss";
import close from "../../assets/images/close.svg";
const navigation = [
  { title: "Головна", link: "/" },
  { title: "Послуги", link: "#services" },
  { title: "Галерея", link: "#gallery" },
  { title: "Про компанію", link: "#about" },
  { title: "Контакти", link: "#contacts" },
];
const BurgerMenu = ({ open, setOpen }) => {
  return (
    <div className="burger__menu">
      <img
        onClick={() => setOpen(!open)}
        className="burger__menu-close"
        src={close}
        alt="close"
      />
      <div className="burger__menu-wrapper">
        <ul>
          {navigation.map((item, idx) => {
            return (
              <a href={item.link} key={idx}>
                {" "}
                <li onClick={() => setOpen(!open)} key={idx}>
                  {item.title}
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
