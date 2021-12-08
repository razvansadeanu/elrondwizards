import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import RoadMap from "./components/RoadMap";
import Sponsors from "./components/Sponsors";
import UseOfFunds from "./components/UseOfFunds";
import BackgroundVideo from "./static/Background.mp4";

function HomePage() {
  return (
    <>
      <div className="homePage">
        <video src={BackgroundVideo} playsInline autoPlay loop muted>
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <Header />
        <Banner />
        <About />
        <RoadMap />
        <UseOfFunds />
        <Sponsors />
      </div>
    </>
  );
}

export default HomePage;
