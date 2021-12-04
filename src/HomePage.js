import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import RoadMap from "./components/RoadMap";

function HomePage() {
  return (
    <div className="homePage">
      <Header />
      <Banner />
      <About />
      <RoadMap />
    </div>
  );
}

export default HomePage;
