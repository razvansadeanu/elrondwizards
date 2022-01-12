import React, { useEffect, useRef } from "react";
import { textScale, videoFade } from "../animations/video";
import TypewriterComponent from "typewriter-effect";
import Countdown from "react-countdown";

function Video() {
  let title = useRef(null);
  let video = useRef(null);
  let text = useRef(null);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      textScale(title);
      videoFade(video);
      textScale(text);
    }
    return function cleanup() {
      mounted = false;
    };
  }, []);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <>Complete</>;
    } else {
      // Render a countdown
      return (
        <div className="countDownContainer" ref={(el) => (text = el)}>
          <div className="countDownText">
            <p style={{ color: "white" }}>Days </p>
            <p style={{ marginTop: "10px" }}>{days}</p>
          </div>
          <div className="countDownText">
            <p style={{ color: "white" }}>Hours</p>
            <p style={{ marginTop: "10px" }}>{hours}</p>
          </div>
          <div className="countDownText">
            <p style={{ color: "white" }}>Minutes</p>
            <p style={{ marginTop: "10px" }}>{minutes}</p>
          </div>
          <div className="countDownText">
            <p style={{ color: "white" }}>Seconds</p>
            <p style={{ marginTop: "10px" }}>{seconds}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="video">
      <div className="introText">
        <div className="title" ref={(el) => (title = el)}>
          ARE YOU READY FOR OUR <span style={{ color: "#0bd2f5" }}>MAGIC?</span>
        </div>
        <div className="releaseText">
          <p className="releaseSpan">
            <TypewriterComponent
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
            />
          </p>
          <Countdown
            className="countDown"
            renderer={renderer}
            date={"2022-01-14T20:00:00"}
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
