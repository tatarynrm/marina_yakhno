import React, { useState } from "react";
import Burger from "../burger/Burger";
import BurgerMenu from "../burger-menu/BurgerMenu";
import Logo from "../Logo/Logo";
import Nav from "../nav/Nav";
import "./Header.scss";
function Header({ open, setOpen }) {
  return (
    <header className="header">
      <Logo />
      <Nav />
      <Burger open={open} setOpen={setOpen} />
    </header>
  );
}

export default Header;
