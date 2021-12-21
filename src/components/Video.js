import React, { useEffect, useRef } from "react";
import { textScale, videoFade } from "../animations/video";
import TypewriterComponent from "typewriter-effect";

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

  const text = () => {
    return <strong style={{ color: "white" }}>early 2022</strong>;
  };

  return (
    <div className="video">
      <div className="introText">
        <div className="title" ref={(el) => (title = el)}>
          ARE YOU READY FOR OUR <span style={{ color: "#0bd2f5" }}>MAGIC?</span>
        </div>
        <div className="releaseText">
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .pauseFor(2000)
                .typeString(
                  'Release date <span style="color: white;">late 2021</span>'
                )
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(300)
                .deleteChars(9)
                .typeString('<strong style="color: white;">early 2022</strong>')
                .pauseFor(2000)
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
            options={{ autoStart: true, loop: true }}
          />
        </div>
      </div>
      <div className="videoCover" ref={(el) => (video = el)}>
        <video
          className="intoVideo"
          poster="https://stelrondwizardsweb.blob.core.windows.net/static/VideoCover.png"
          controls
        >
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
