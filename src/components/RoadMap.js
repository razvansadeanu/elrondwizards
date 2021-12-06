import React from "react";
import testImg from "./../static/Test.PNG";
import RoadMapImg from "./../static/RoadMap4.PNG";
import RoadMapImgPhone from "./../static/Phone.png";
import AliceCarousel from "react-alice-carousel";

function RoadMap() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <img src={testImg} alt="" onDragStart={handleDragStart} />,
    <img src={testImg} alt="" onDragStart={handleDragStart} />,
    <img src={testImg} alt="" onDragStart={handleDragStart} />,
    <img src={testImg} alt="" onDragStart={handleDragStart} />,
    <img src={testImg} alt="" onDragStart={handleDragStart} />,
    <img src={testImg} alt="" onDragStart={handleDragStart} />,
    <img src={testImg} alt="" onDragStart={handleDragStart} />,
    <img src={testImg} alt="" onDragStart={handleDragStart} />,
    <img src={testImg} alt="" onDragStart={handleDragStart} />,
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
      <div className="roadMapContainer">
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
      </div>
      <div className="timeline">
        <div className="timelineImg">
          <img src={RoadMapImg} className="desktopImage" alt="" />
          <img src={RoadMapImgPhone} className="phoneImage" alt="" />
        </div>
      </div>
    </>
  );
}

export default RoadMap;
