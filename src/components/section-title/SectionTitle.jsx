import React from "react";
import "./SectionTitle.scss";
const SectionTitle = ({ title }) => {
  return (
    <div className="section__title">
      <h2 className="section__title-item">{title}</h2>
    </div>
  );
};

export default SectionTitle;
