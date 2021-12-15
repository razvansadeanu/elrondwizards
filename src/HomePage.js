import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import RoadMap from "./components/RoadMap";
import UseOfFunds from "./components/UseOfFunds";
import BackgroundVideo from "./static/Background.mp4";
import Footer from "./components/Footer";
import Video from "./components/Video";

function HomePage() {
  return (
    <>
      <div className="homePage">
       <video
          className="backVideo"
          src={BackgroundVideo}
          playsInline
          autoPlay
          loop
          muted
        >
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <Header />
        <Video />
        <Banner />
        <About />
        <RoadMap />
        <UseOfFunds />
        {/* <Sponsors /> */}
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
