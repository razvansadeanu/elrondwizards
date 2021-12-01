import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import Menu from "./Menu";
import { useStateValue } from "./../context/StateProvider";
import { actionTypes } from "./../context/reducer";

function Header() {
  const [{}, dispatch] = useStateValue();

  const handleOpenMenu = (e) => {
    e.preventDefault();
    const menu = { status: true };
    dispatch({
      type: actionTypes.SET_OPENMENU,
      openedMenu: menu,
    });
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="logo">
          <h1>elrond</h1>
          <h1 className="textSpace">wizards</h1>
        </div>
        <div className="socialsMenu">
          <div className="socials">
            <span>
              <FontAwesomeIcon icon={faFacebook} />
            </span>
            <span>
              <FontAwesomeIcon icon={faGithub} />
            </span>
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span>
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            <span>
              <FontAwesomeIcon icon={faDiscord} />
            </span>
          </div>
          <div className="menuButton" onClick={handleOpenMenu}>
            <h2>Menu.</h2>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default Header;
