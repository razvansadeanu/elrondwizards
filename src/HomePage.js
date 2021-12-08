import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import RoadMap from "./components/RoadMap";
import Sponsors from "./components/Sponsors";
import UseOfFunds from "./components/UseOfFunds";

function HomePage() {
  return (
    <>
      <div className="homePage">
        <video
          src="https://stamaliasharedpdf.blob.core.windows.net/test/backgroundVideo.mp4"
          playsInline
          autoPlay
          loop
          muted
        ></video>
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
