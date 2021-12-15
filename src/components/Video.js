import React, { useEffect, useRef, useState } from "react";
import ModalVideo from "react-modal-video";
import VideoCover from "../static/Cover.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { textScale, videoFade } from "../animations/video";

function Video() {
  const [isOpen, setOpen] = useState(false);
  let title = useRef(null);
  let video = useRef(null);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      //prevent flashing
      //   gsap.to(".videoCover", 0, { css: { visibility: "visible" } });
      textScale(title);
      videoFade(video);
    }
    return function cleanup() {
      mounted = false;
    };
  }, []);

  return (
    <div className="video">
      <div className="introText">
        <div className="title" ref={(el) => (title = el)}>
          ARE YOU READY FOR OUR <span style={{ color: "#0bd2f5" }}>MAGIC?</span>
        </div>
      </div>
      <div className="videoCover" ref={(el) => (video = el)}>
        <video className="intoVideo" poster={VideoCover} controls>
          <source
            src="https://stelrondwizardsweb.blob.core.windows.net/static/Video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}

export default Video;
