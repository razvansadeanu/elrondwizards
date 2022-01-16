import React from "react";
import AliceCarousel from "react-alice-carousel";

function RoadMap() {
  const handleDragStart = (e: React.MouseEvent) => e.preventDefault();
  const items = [
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/1.jpeg"
      alt=""
      onDragStart={handleDragStart}
      key="1"
    />,
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/2.jpeg"
      alt=""
      onDragStart={handleDragStart}
      key="2"
    />,
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/16.jpeg"
      alt=""
      onDragStart={handleDragStart}
      key="3"
    />,
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/19.jpeg"
      alt=""
      onDragStart={handleDragStart}
      key="4"
    />,
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/7.jpeg"
      alt=""
      onDragStart={handleDragStart}
      key="5"
    />,
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/12.jpeg"
      alt=""
      onDragStart={handleDragStart}
      key="6"
    />,
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/21.jpeg"
      alt=""
      onDragStart={handleDragStart}
      key="7"
    />,
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/17.jpeg"
      alt=""
      onDragStart={handleDragStart}
      key="8"
    />,
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/14.jpeg"
      alt=""
      onDragStart={handleDragStart}
      key="9"
    />,
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/11.jpeg"
      alt=""
      onDragStart={handleDragStart}
      key="10"
    />,
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/2.jpeg"
      alt=""
      onDragStart={handleDragStart}
      key="11"
    />,
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/22.jpeg"
      alt=""
      onDragStart={handleDragStart}
      key="12"
    />,
    <img
      src="https://stelrondwizardsweb.blob.core.windows.net/static/3.jpeg"
      alt=""
      onDragStart={handleDragStart}
      key="13"
    />,
  ];

  const responsive = {
    0: { items: 1 },
    320: { items: 2 },
    530: { items: 3 },
    650: { items: 4 },
    800: { items: 5 },
    1024: { items: 6 },
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
          autoPlay={true}
          autoPlayInterval={3000}
          infinite
          autoPlayStrategy="none"
        />
      </div>

      <div className="roadMapContainer" id="roadMap">
        <div className="roadMapTitle">
          <div className="roadMapTitleText">
            MILESTONES<span></span>
          </div>
        </div>
        <div className="roadMapText">
          <p>
            We build our future through the present. &quot;Continuous
            improvement and innovation&quot; is our motto, stay tuned for more.
          </p>
        </div>
      </div>
      <div className="timeline">
        <div className="timelineImg">
          <img
            src="https://stelrondwizardsweb.blob.core.windows.net/static/RoadMap.png"
            className="desktopImage"
            alt=""
          />
          <img
            src="https://stelrondwizardsweb.blob.core.windows.net/static/Neon.png"
            className="phoneImage"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default RoadMap;
