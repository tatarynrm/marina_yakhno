import React from "react";
import "./Social.scss";
import telegramSocial from "../../assets/images/telegram.svg";
import whatsappSocial from "../../assets/images/whatsapp.svg";
import viberSvg from "../../assets/images/viber.svg";
const socials = [
  { img: telegramSocial, link: "https://t.me/+380968318989" },
  { img: whatsappSocial, link: "https://wa.me/+380968318989" },
  { img: viberSvg, link: "viber://chat?number=+380968318989" },
];
const Social = () => {
  return (
    <div className="socials">
      {socials.map((item, idx) => {
        return (
          <div key={idx} className="socials__item">
            <a href={item.link} target="_blank">
              <img src={item.img} alt="social" />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Social;
