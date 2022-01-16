import React from "react";
import ReadMore from "./ReadMore";

const About = () => {
  const Dragon =
    "https://stelrondwizardsweb.blob.core.windows.net/static/Dragon.mp4";

  return (
    <div id="about">
      <div className="aboutContainer">
        <div
          dangerouslySetInnerHTML={{
            __html: ` 
            <video
            autoplay
            loop
            muted
            playsinline
            >
            <source src=${Dragon} type="video/mp4" />
            </video>`,
          }}
        />
        <div className="caption">
          <div className="titleText">
            <span></span>LEGEND OF...
          </div>
        </div>
      </div>
      <div className="aboutText">
        <p>
          Once upon a time in a magical forest, the legend says that in this
          mystical place 3 High Wizards ruled the land and created 3333 magical
          keys, keys that have the power to change the future and were hidden
          away so that only a few chosen souls would be able to get them when
          the time was right.
        </p>
        <br />
        <p className="desktopText">
          However, after many moons passed, people slowly became greedy, wanting
          more for themselves, forgetting about Mother Nature. Villages became
          Cities; friends became enemies; brothers became strangers. During this
          decaying process, the marks left on nature seemed permanent, but then
          a powerful force awakened from its deep sleep; they decided that
          something needed to be done to save the world and redeem the innocence
          of human souls. They went out of the forest looking for the special
          ones, spreading the word around all corners of the world.
          <br />
          <br />
          Wizards opened the magical chest; the keys were set free to find their
          future holders; once they did, a bridge would be made between the
          past, present, and future; it was the way...the only way to save
          humankind. The question that you could hear everybody whispering
          through the shadows was: &quot; Are you among the chosen ones?
          <br />
          <br />
          &quot; ...So are you?
        </p>
        <ReadMore text="ceva">
          However, after many moons passed, people slowly became greedy, wanting
          more for themselves, forgetting about Mother Nature. Villages became
          Cities; friends became enemies; brothers became strangers.During this
          decaying process, the marks left on nature seemed permanent, but then
          a powerful force awakened from its deep sleep; they decided that
          something needed to be done to save the world and redeem the innocence
          of human souls. They went out of the forest looking for the special
          ones, spreading the word around all corners of the world.
        </ReadMore>
      </div>
    </div>
  );
};

export default About;