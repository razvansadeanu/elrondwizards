import { FC } from "react";
import React, { useState } from "react";

interface Props {
  text: string;
}

const ReadMore: FC<Props> = ({ children, ...props }) => {
  const text =
    "However, after many moons passed, people slowly became greedy, wanting more for themselves, forgetting about Mother Nature. Villages became Cities; friends became enemies; brothers became strangers.During this decaying process, the marks left on nature seemed permanent, but then a powerful force awakened from its deep sleep; they decided that something needed to be done to save the world and redeem the innocence of human souls. They went out of the forest looking for the special ones, spreading the word around all corners of the world.";
  const [isReadMore, setIsReadMore] = useState(true);
  //   const text = children;
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="phoneText">
      {isReadMore ? text.slice(0, 197) : text}
      {isReadMore ? (
        ""
      ) : (
        <span>
          <br />
          <br />
          Wizards opened the magical chest; the keys were set free to find their
          future holders; once they did, a bridge would be made between the
          past, present, and future; it was the way...the only way to save
          humankind. The question that you could hear everybody whispering
          through the shadows was: &quot; Are you among the chosen ones?
          <br />
          <br />
          &quot; ...So are you?&quot;
        </span>
      )}
      <span
        onClick={toggleReadMore}
        style={{ color: "#0bd2f5", cursor: "pointer" }}
        className="read-or-hide"
      >
        {isReadMore ? " Read more ..." : " Show less"}
      </span>
    </p>
  );
};

export default ReadMore;
