import React from "react";
import "./Nav.scss";
import MapLink from "../mapLink/MapLink";
const navigation = [
  { title: "Головна", link: "/" },
  { title: "Послуги", link: "#services" },
  { title: "Галерея", link: "#gallery" },
  { title: "Про компанію", link: "#about" },
  { title: "Контакти", link: "#contacts" },
];
const Nav = () => {
  return (
    <nav className="header__nav">
      <div className="header__nav-container">
        <ul className="header__nav-menu">
          {navigation.map((item, idx) => {
            return (
              <a href={item.link} key={idx}>
                <li>{item.title}</li>
              </a>
            );
          })}
        </ul>
        <MapLink />
      </div>
    </nav>
  );
};

export default Nav;
