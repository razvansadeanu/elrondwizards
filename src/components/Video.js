import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Dragon from "../static/Dragon.mp4";
import VideoCover from "../static/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function Video() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="video">
      <div className="introText">
        <div className="title">
          ARE YOU READY FOR OUR <span style={{ color: "#0bd2f5" }}>MAGIC?</span>
        </div>
        {/* <div className="intro">
          ELROND WIZARDS is a collection of 3,333 Unique NFTs shining on the
          elrond blockchain
        </div> */}
      </div>
      <ModalVideo
        channel="custom"
        url={Dragon}
        allowFullScreen
        ratio="16:9"
        autoplay
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
      <div className="videoCover">
        <img src={VideoCover} onClick={() => setOpen(true)} />
        <div className="playButton">
          <span onClick={() => setOpen(true)}>
            <FontAwesomeIcon icon={faPlay} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Video;
