import React, { useEffect, useRef } from "react";
import { imagesFade, buttonFade } from "../animations/banner";
import { gsap } from "gsap";

function Banner() {
  let introText = useRef(null);
  let image1 = useRef(null);
  let image2 = useRef(null);
  let image3 = useRef(null);
  let image4 = useRef(null);
  let image5 = useRef(null);
  let secondButton = useRef(null);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      //prevent flashing
      gsap.to(".banner", 0, { css: { visibility: "visible" } });
      imagesFade(image4, image5, image1, image2, image3);
      buttonFade(secondButton);
    }
    return function cleanup() {
      mounted = false;
    };
  }, []);

  return (
    <div className="banner">
      <div className="textContainer">
        <div className="introText" ref={(el) => (introText = el)}>
          ELROND WIZARDS is a collection of{" "}
          <span style={{ color: "#0bd2f5" }}>3,333</span> Unique NFTs shining on
          the elrond blockchain
        </div>
        <button className="claimButton"  onClick={() => window.open("https://isengard.market/collection/EWIZZ-1e8ddb")}>
          <p>BUY NOW</p>
        </button>
      </div>
      <div className="imageContainer">
        <div className="mosaicImage">
          <div className="mosaicItem5" ref={(el) => (image1 = el)}>
            <img
              src="https://stelrondwizardsweb.blob.core.windows.net/static/3.jpeg"
              alt=""
            />
          </div>
          <div className="mosaicItem4 " ref={(el) => (image2 = el)}>
            <img
              src="https://stelrondwizardsweb.blob.core.windows.net/static/17.jpeg"
              alt=""
            />
          </div>
          <div className="mosaicItem3" ref={(el) => (image3 = el)}>
            <img
              src="https://stelrondwizardsweb.blob.core.windows.net/static/16.jpeg"
              alt=""
            />
          </div>
          <div className="mosaicItem2" ref={(el) => (image4 = el)}>
            <img
              src="https://stelrondwizardsweb.blob.core.windows.net/static/13.jpeg"
              alt=""
            />
          </div>
          <div className="mosaicItem" ref={(el) => (image5 = el)} style={{}}>
            <img
              src="https://stelrondwizardsweb.blob.core.windows.net/static/11.jpeg"
              alt=""
            />
          </div>
          <button
            className="secondClaimButton"
            ref={(el) => (secondButton = el)}
            onClick={() => window.open("https://isengard.market/collection/EWIZZ-1e8ddb")}
          >
            <p>BUY NOW</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
