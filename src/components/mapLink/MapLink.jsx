import React from "react";
import "./MapLink.scss";
import mapLink from "../../assets/images/map.svg";
const MapLink = () => {
  return (
    <a
      className="map-link"
      href="https://www.google.com/maps?q=Київська+область+м.+Біла+Церква,+вул.+Таращанська,+191"
      target="_blank"
    >
      <img src={mapLink} alt="map-link" />
      <span>Київщина</span>
    </a>
  );
};

export default MapLink;
