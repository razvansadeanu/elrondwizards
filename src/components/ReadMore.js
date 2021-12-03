import React, { useState } from "react";

function ReadMore({ children }) {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
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
          through the shadows was: "Are you among the chosen ones?
          <br />
          <br />" ...So are you?
        </span>
      )}
      <span
        onClick={toggleReadMore}
        style={{ color: "#Fd4246", cursor: "pointer" }}
        className="read-or-hide"
      >
        {isReadMore ? " Read more ..." : " Show less"}
      </span>
    </p>
  );
}

export default ReadMore;
