import React, { useEffect, useRef } from "react";
import VideoCover from "../static/Cover.PNG";
import { textScale, videoFade } from "../animations/video";

function Video() {
  let title = useRef(null);
  let video = useRef(null);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
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
