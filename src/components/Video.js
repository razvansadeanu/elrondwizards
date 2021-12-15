import React, { useEffect, useRef, useState } from "react";
import ModalVideo from "react-modal-video";
import PlayVideo from "../static/Video.mp4";
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
      <ModalVideo
        channel="custom"
        url={PlayVideo}
        allowFullScreen
        ratio="16:9"
        autoplay
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
      <div className="videoCover" ref={(el) => (video = el)}>
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
