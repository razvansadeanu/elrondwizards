import React from "react";

const Video = () => {
  return (
    <div className="video">
      <div className="introText">
        <div className="title">
          ARE YOU READY FOR OUR <span style={{ color: "#0bd2f5" }}>MAGIC?</span>
        </div>
        <div className="releaseText">
          <p className="releaseSpan">
            {/* <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2000)
              .typeString("Launching soon")
              .pauseFor(300)
              .deleteChars(14)
              .typeString("Stay tuned")
              .pauseFor(2000)
              .start();
          }}
          options={{ autoStart: true, loop: true }}
        /> */}
          </p>
        </div>
      </div>
      <div className="videoCover">
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
};

export default Video;
