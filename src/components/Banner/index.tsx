import React from "react";
import { routeNames } from "routes";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner">
      <div className="textContainer">
        <div className="introText">
          ELROND WIZARDS is a collection of{" "}
          <span style={{ color: "#0bd2f5" }}>3,333</span> Unique NFTs shining on
          the elrond blockchain
        </div>
        {/* <button className="claimButton">
          <p>TEMPORARILY LOCKED</p>
        </button> */}
        <Link
          to={routeNames.unlock}
          className="claimButton"
          data-testid="loginBtn"
        >
          <p>BUY NOW</p>
        </Link>
      </div>
      <div className="imageContainer">
        <div className="mosaicImage">
          <div className="mosaicItem5">
            <img
              src="https://stelrondwizardsweb.blob.core.windows.net/static/3.jpeg"
              alt=""
            />
          </div>
          <div className="mosaicItem4 ">
            <img
              src="https://stelrondwizardsweb.blob.core.windows.net/static/17.jpeg"
              alt=""
            />
          </div>
          <div className="mosaicItem3">
            <img
              src="https://stelrondwizardsweb.blob.core.windows.net/static/16.jpeg"
              alt=""
            />
          </div>
          <div className="mosaicItem2">
            <img
              src="https://stelrondwizardsweb.blob.core.windows.net/static/13.jpeg"
              alt=""
            />
          </div>
          <div className="mosaicItem">
            <img
              src="https://stelrondwizardsweb.blob.core.windows.net/static/11.jpeg"
              alt=""
            />
          </div>
          <Link
            to={routeNames.unlock}
            className="claimButton"
            data-testid="loginBtn"
          >
            <p>BUY NOW</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
