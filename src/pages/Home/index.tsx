import * as React from "react";
import { Link } from "react-router-dom";
import { dAppName } from "config";
import { routeNames } from "routes";
import Banner from "components/Banner";
import Video from "components/Video";
import About from "components/About";
import RoadMap from "components/RoadMap";
import UseOfFounds from "components/UseOfFounds";
import Footer from "components/Footer";

const Home = () => {
  return (
    <div className="home-page">
      <Video />
      <Banner />
      <About />
      <RoadMap />
      <UseOfFounds />
      <Footer />
    </div>
  );
};
export default Home;
