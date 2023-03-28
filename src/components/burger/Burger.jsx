import React from "react";
import "./Burger.scss";
import openBurger from "../../assets/images/burger-menu.svg";
import closeBurger from "../../assets/images/close.svg";
const Burger = ({ open, setOpen }) => {
  return (
    <>
      {open ? (
        <img
          onClick={() => setOpen(!open)}
          className="burger-menu"
          src={openBurger}
          alt="open-menu"
        />
      ) : (
        <img
          onClick={() => setOpen(!open)}
          className="burger-menu"
          src={closeBurger}
          alt="close-menu"
        />
      )}
    </>
  );
};

export default Burger;
