import React from "react";
import video from "../static/Video/test2.mp4";

function About() {
  return (
    <>
      <div className="aboutContainer">
        <video src={video} playsInline autoPlay loop muted></video>
        <div class="caption">
          <div className="titleText">
            <span></span>LEGEND OF...
          </div>
        </div>
        <div className="aboutText">
          <p>
            Once upon a time in a magical forest, the legend says that in this
            mystical place 3 High Wizards ruled the land and created 3333
            magical keys, keys that have the power to change the future and were
            hidden away so that only a few chosen souls would be able to get
            them when the time was right.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
