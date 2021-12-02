import React from "react";
import testImg from "./../static/Test.PNG";
import testImg2 from "./../static/Test2.png";

function Banner() {
  return (
    <div className="banner">
      <div className="textContainer">
        <div>
          <p>ARE YOU READY </p>
          <p>
            FOR OUR <span style={{ color: "#41f2dd" }}>MAGIC?</span>
          </p>
        </div>
        <div className="introText">
          ELROND WIZARDS is a collection of{" "}
          <span style={{ color: "#41f2dd" }}>3,333</span> Unique NFTs shining on
          the elrond blockcain
        </div>
        <button className="claimButton">
          <p>BUY NOW</p>
        </button>
      </div>
      <div className="imageContainer">
        <div className="mosaicImage">
          <div className="mosaicItem5">
            <img src={testImg} alt="" />
          </div>
          <div className="mosaicItem4">
            <img src={testImg2} alt="" />
          </div>
          <div className="mosaicItem3">
            <img src={testImg} alt="" />
          </div>
          <div className="mosaicItem2">
            <img src={testImg2} alt="" />
          </div>
          <div className="mosaicItem">
            <img src={testImg} alt="" />
          </div>
          <button className="secondClaimButton">
            <p>BUY NOW</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
