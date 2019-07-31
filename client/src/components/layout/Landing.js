import React from "react";
import Iconsbar from "../iconsbar/Iconsbar";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import crespo1 from "../../img/crespo1.jpg";
import crespo2 from "../../img/crespo2.jpg";
import crespo3 from "../../img/crespo3.jpg";

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
      <Iconsbar />
    </div>
  );
};

export default Landing;
