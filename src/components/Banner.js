import React, { useEffect, useRef, useState } from "react";
import { imagesFade, buttonFade } from "../animations/banner";
import { gsap } from "gsap";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Countdown from "react-countdown";

function Banner() {
  let introText = useRef(null);
  let image1 = useRef(null);
  let image2 = useRef(null);
  let image3 = useRef(null);
  let image4 = useRef(null);
  let image5 = useRef(null);
  let secondButton = useRef(null);
  const [open, setOpen] = useState(true);

  const onCloseModal = () => setOpen(false);

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
    <>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="modalBody">
          <h2>We are lunching soon</h2>
          <Countdown className="countDown" date={"2022-01-14T20:00:00"} />
        </div>
      </Modal>
      <div className="banner">
        <div className="textContainer">
          <div className="introText" ref={(el) => (introText = el)}>
            ELROND WIZARDS is a collection of{" "}
            <span style={{ color: "#0bd2f5" }}>3,333</span> Unique NFTs shining
            on the elrond blockchain
          </div>
          <button className="claimButton">
            <p>TEMPORARILY LOCKED</p>
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
            >
              <p>TEMPORARILY LOCKED</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
