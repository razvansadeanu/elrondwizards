import React, { useEffect, useRef } from "react";
import { textFade, imagesFade, buttonFade } from "../animations/banner";
import { gsap } from "gsap";

function Banner() {
  let title = useRef(null);
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
      textFade(title, introText);
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
        <div ref={(el) => (title = el)}>
          <p>ARE YOU READY </p>
          <p>
            FOR OUR <span style={{ color: "#0bd2f5" }}>MAGIC?</span>
          </p>
        </div>
        <div className="introText" ref={(el) => (introText = el)}>
          ELROND WIZARDS is a collection of{" "}
          <span style={{ color: "#0bd2f5" }}>3,333</span> Unique NFTs shining on
          the elrond blockcain
        </div>
        <button className="claimButton">
          <p>BUY NOW</p>
        </button>
      </div>
      <div className="imageContainer">
        <div className="mosaicImage">
          <div className="mosaicItem5" ref={(el) => (image1 = el)}>
            <img
              src="https://stamaliasharedpdf.blob.core.windows.net/test/CommingSoon.PNG"
              alt=""
            />
          </div>
          <div className="mosaicItem4 " ref={(el) => (image2 = el)}>
            <img
              src="https://stamaliasharedpdf.blob.core.windows.net/test/CommingSoon.PNG"
              alt=""
            />
          </div>
          <div className="mosaicItem3" ref={(el) => (image3 = el)}>
            <img
              src="https://stamaliasharedpdf.blob.core.windows.net/test/CommingSoon.PNG"
              alt=""
            />
          </div>
          <div className="mosaicItem2" ref={(el) => (image4 = el)}>
            <img
              src="https://stamaliasharedpdf.blob.core.windows.net/test/CommingSoon.PNG"
              alt=""
            />
          </div>
          <div className="mosaicItem" ref={(el) => (image5 = el)}>
            <img
              src="https://stamaliasharedpdf.blob.core.windows.net/test/CommingSoon.PNG"
              alt=""
            />
          </div>
          <button
            className="secondClaimButton"
            ref={(el) => (secondButton = el)}
          >
            <p>BUY NOW</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
