import React from "react";
import video from "../static/Video/test2.mp4";

function About() {
  return (
    <div className="aboutContainer">
      <video src={video} playsInline autoPlay loop muted></video>
      <div class="caption">{/* <h2>Your caption here</h2> */}</div>
    </div>
  );
}

export default About;
