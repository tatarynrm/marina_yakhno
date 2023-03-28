import React from "react";
import "./Logo.scss";
import logo from "../../assets/images/logo-white.svg";
// import logo from "../../assets/images/logo-black.svg";
const Logo = () => {
  return (
    <a id="main" href="/">
      <img src={logo} alt="logo" />
    </a>
  );
};

export default Logo;
