import React from "react";
import Iconsbar from "../iconsbar/Iconsbar";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import DisplayNews from "../newsInLanding/DisplayNews";
import DisplayEvents from "../eventsInLanding/DisplayEvents";
import LinksImportantes from "./LinksImportantes";

import crespo1 from "../../img/crespo1.jpg";
import crespo2 from "../../img/crespo2.jpeg";
import crespo3 from "../../img/crespo3.jpg";
import crespoMovil from "../../img/crespoMoviles.jpg";

const Landing = () => {
  const handleOnDragStart = e => e.preventDefault();
  return (
    <div>
      <AliceCarousel
        mouseDragEnabled
        dotsDisabled={true}
        buttonsDisabled={true}
        autoPlay={true}
        autoPlayInterval={7000}
        fadeOutAnimation={true}
      >
        <img
          src={crespo1}
          alt="Gobernador Crespo"
          onDragStart={handleOnDragStart}
          className="landing"
        />
        <img
          src={crespo2}
          alt="Gobernador Crespo"
          onDragStart={handleOnDragStart}
          className="landing"
        />
        <img
          src={crespo3}
          alt="Gobernador Crespo"
          onDragStart={handleOnDragStart}
          className="landing"
        />
      </AliceCarousel>
      <img
        src={crespoMovil}
        alt="Gobernador Crespo"
        className="landing-movil"
      />
      <Iconsbar />
      <DisplayNews />
      <DisplayEvents />
      <LinksImportantes />
    </div>
  );
};

export default Landing;
