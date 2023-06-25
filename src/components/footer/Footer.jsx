import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/logo.svg";
import Form from "../form/Form";
import Social from "../social/Social";
import Nav from "../nav/Nav";
import MapLink from "../mapLink/MapLink";
import mapLink from "../../assets/images/map.svg";
const navigation = [
  { title: "Головна", link: "/" },
  { title: "Послуги", link: "#services" },
  { title: "Галерея", link: "#gallery" },
  { title: "Про компанію", link: "#about" },
  { title: "Контакти", link: "#contacts" },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__left">
          <a href="#main">
            <img src={logo} alt="logo" />
          </a>
          <div className="footer__socials-hidden">
            <Social />
          </div>
        </div>
        <div className="footer__contacts">
          <a href="tel:+380968318989" className="footer__left-contact">
            +380 96 831 89 89
          </a>
          <a
            href="mailto:emilytechmain@gmail.com"
            className="footer__left-contact"
          >
            emilytechmain@gmail.com
          </a>
        </div>
        <div className="footer__center">
          <Form />
        </div>
        <div className="footer__right">
          <div className="footer__right-top">
            <ul className="footer__right-top-menu">
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
          <div className="footer__right-bottom">
            <Social />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
