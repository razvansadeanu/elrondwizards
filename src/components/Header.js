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
import { Element } from "react-scroll";
import logo from "../static/logo.jpeg";

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
    <Element className="header" id="home" name="home">
      <div className="headerContainer">
        <div className="logo">
          {/* <img src={logo} alt="" /> */}
          <div>
            <h1>elrond</h1>
            <h1 className="textSpace">wizards</h1>
          </div>
        </div>
        <div className="socialsMenu">
          <div className="socials">
            <span>
              <FontAwesomeIcon
                icon={faFacebook}
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/people/Elrond-Wizards/100075376672839/"
                  )
                }
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faGithub}
                onClick={() =>
                  window.open(
                    "https://github.com/razvansadeanu/elrondwizards/tree/master"
                  )
                }
              />
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
    </Element>
  );
}

export default Header;
