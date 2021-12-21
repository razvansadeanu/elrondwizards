import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import RoadMap from "./components/RoadMap";
import UseOfFunds from "./components/UseOfFunds";
import Footer from "./components/Footer";
import Video from "./components/Video";

function HomePage() {
  return (
    <>
      <div className="homePage">
        <video
          className="backVideo"
          src="https://stelrondwizardsweb.blob.core.windows.net/static/Background.mp4"
          playsInline
          autoPlay
          loop
          muted
        >
          <source
            src="https://stelrondwizardsweb.blob.core.windows.net/static/Background.mp4"
            type="video/mp4"
          />
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
