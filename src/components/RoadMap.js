import React from "react";
import AliceCarousel from "react-alice-carousel";
import { Element } from "react-scroll";

// #commet
function RoadMap() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/ComingSoon.png"
      alt=""
      onDragStart={handleDragStart}
    />,
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/ComingSoon.png"
      alt=""
      onDragStart={handleDragStart}
    />,
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/ComingSoon.png"
      alt=""
      onDragStart={handleDragStart}
    />,
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/ComingSoon.png"
      alt=""
      onDragStart={handleDragStart}
    />,
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/ComingSoon.png"
      alt=""
      onDragStart={handleDragStart}
    />,
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/ComingSoon.png"
      alt=""
      onDragStart={handleDragStart}
    />,
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/ComingSoon.png"
      alt=""
      onDragStart={handleDragStart}
    />,
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/ComingSoon.png"
      alt=""
      onDragStart={handleDragStart}
    />,
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/ComingSoon.png"
      alt=""
      onDragStart={handleDragStart}
    />,
  ];

  const responsive = {
    0: { items: 1 },
    320: { items: 2 },
    530: { items: 3 },
    800: { items: 4 },
    1024: { items: 5 },
  };
  return (
    <>
      <div className="roadMapSeparator">
        <AliceCarousel
          disableButtonsControls
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          autoPlay
          autoPlayInterval="3000"
          infinite
          autoPlayStrategy="none"
        />
      </div>
      <Element className="roadMapContainer" id="roadMap" name="roadMap">
        <div className="roadMapTitle">
          <div className="roadMapTitleText">
            MILESTONES<span></span>
          </div>
        </div>
        <div className="roadMapText">
          <p>
            We build our future through the present. "Continuous improvement and
            innovation" is our motto, stay tuned for more.
          </p>
        </div>
      </Element>
      <div className="timeline">
        <div className="timelineImg">
          <img
            src="https://stelrondwizardsweb.blob.core.windows.net/static/RoadMap.png"
            className="desktopImage"
            alt=""
          />
          <img
            src="https://stelrondwizardsweb.blob.core.windows.net/static/RoadMap.png"
            className="phoneImage"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default RoadMap;
