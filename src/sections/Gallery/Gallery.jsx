import React from "react";
import "./Gallery.scss";
import SectionTitle from "../../components/section-title/SectionTitle";
import GallerySlider from "../../components/slider/GallerySlider";

const Gallery = () => {
  return (
    <section id="gallery" className="gallery section">
      <SectionTitle title={"Галерея"} />
      <div className="gallery__card container">
        <div className="gallery__card-section">
          <GallerySlider />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
