import React from "react";
import Logo from "../static/Logo.png";
import unitedGroupImg from "../static/UnitedGroup.jpeg";

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="sponsor">
          <p>Trusted by</p>
          <img src={unitedGroupImg} alt="" />
        </div>
        <div className="wizardLogo">
          <img src={Logo} alt="" />
          <p>© 2021 Elrond Wizards</p>
        </div>
        <div className="links">Link</div>
      </div>
    </div>
  );
}

export default Footer;
