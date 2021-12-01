import React from "react";
import testImg from "./../static/Test.PNG";
import testImg2 from "./../static/Test2.png";

function Banner() {
  return (
    <div className="banner">
      <div className="textContainer">
        <p>ARE YOU READY </p>
        <p>FOR OUR MAGIC? </p>
        <div className="introText">
          ELROND WIZARDS is a collection of 3,333 Unique NFTs shining on the
          elrond blockcain
        </div>
        <button className="claimButton">
          <p>Claim now</p>
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
        </div>
      </div>
    </div>
  );
}

export default Banner;
