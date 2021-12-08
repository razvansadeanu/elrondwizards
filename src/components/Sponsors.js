import React from "react";

function Sponsors() {
  return (
    <div className="sponsorsContainer">
      <div className="sponsorsTitle">
        <p> TRUSTED BY </p>
        <span></span>
      </div>
      <div
        className="sponsorsLogo"
        onClick={() => window.open("https://www.unitedgroup.capital")}
      >
        <img
          src="https://stamaliasharedpdf.blob.core.windows.net/test/UnitedGroupLogo.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Sponsors;
