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
              <FontAwesomeIcon
                icon={faInstagram}
                onClick={() =>
                  window.open("https://www.instagram.com/elrondwizards/")
                }
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faTwitter}
                onClick={() => window.open("https://twitter.com/ElrondWizards")}
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faDiscord}
                onClick={() =>
                  window.open(
                    "https://discord.com/channels/916259416641261579/916264363382435861"
                  )
                }
              />
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
