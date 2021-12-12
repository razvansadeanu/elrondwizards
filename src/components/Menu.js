import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
import { useStateValue } from "./../context/StateProvider";
import { actionTypes } from "./../context/reducer";
import { socialFade, staggerText } from "../animations/menu";
import { NavHashLink as NavLink } from "react-router-hash-link";

function Menu() {
  const [{ openedMenu }, dispatch] = useStateValue();
  let menuLayer = useRef(null);
  let socialFb = useRef(null);
  let socialIn = useRef(null);
  let socialTw = useRef(null);
  let socialGit = useRef(null);
  let socialDis = useRef(null);
  let aboutLink = useRef(null);
  let teamLink = useRef(null);
  let roadLink = useRef(null);
  let faqLink = useRef(null);

  const handleCloseMenu = (e) => {
    e.preventDefault();
    const menu = { status: false };
    dispatch({
      type: actionTypes.SET_OPENMENU,
      openedMenu: menu,
    });
  };
  const handleNavigate = (e) => {
    const menu = { status: false };
    dispatch({
      type: actionTypes.SET_OPENMENU,
      openedMenu: menu,
    });
    console.log(e);
  };

  useEffect(() => {
    let mounted = true;
    if (openedMenu.status && mounted) {
      gsap.to(menuLayer, { duration: 0, css: { visibility: "visible" } });
      gsap.to(menuLayer, { duration: 0.5, opacity: 1, ease: "power3.inOut" });
      staggerText(aboutLink, teamLink, roadLink, faqLink);
      socialFade(socialFb, socialIn, socialTw, socialGit, socialDis);
    } else {
      gsap.to(menuLayer, {
        duration: 0.5,
        opacity: 0,
        ease: "power3.inOut",
      });
      gsap.to(menuLayer, {
        duration: 0,
        delay: 0.5,
        css: { visibility: "hidden" },
      });
    }
    return function cleanup() {
      mounted = false;
    };
  }, [openedMenu]);

  return (
    <div ref={(el) => (menuLayer = el)} className="menu">
      <div className="closeButton" onClick={handleCloseMenu}>
        <h2>Close</h2>
      </div>
      <div className="containerMenu">
        <nav>
          <ul>
            <li ref={(el) => (aboutLink = el)}>
              <NavLink to="/#about" onClick={handleNavigate}>
                About
              </NavLink>
            </li>
            <li ref={(el) => (teamLink = el)}>
              <NavLink to="/#roadMap" onClick={handleNavigate}>
                RoadMap
              </NavLink>
            </li>
            <li ref={(el) => (roadLink = el)}>
              <NavLink to="/#funds" onClick={handleNavigate}>
                Funds
              </NavLink>
            </li>
            <li ref={(el) => (faqLink = el)}>
              <NavLink to="/" onClick={handleNavigate}>
                Team
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="socialsMenu">
          <span ref={(el) => (socialFb = el)}>
            <FontAwesomeIcon
              icon={faFacebook}
              onClick={() =>
                window.open(
                  "https://www.facebook.com/people/Elrond-Wizards/100075376672839/"
                )
              }
            />
          </span>
          <span ref={(el) => (socialIn = el)}>
            <FontAwesomeIcon
              icon={faGithub}
              onClick={() =>
                window.open(
                  "https://github.com/razvansadeanu/elrondwizards/tree/master"
                )
              }
            />
          </span>
          <span ref={(el) => (socialTw = el)}>
            <FontAwesomeIcon
              icon={faInstagram}
              onClick={() =>
                window.open("https://www.instagram.com/elrondwizards/")
              }
            />
          </span>
          <span ref={(el) => (socialGit = el)}>
            <FontAwesomeIcon
              icon={faTwitter}
              onClick={() => window.open("https://twitter.com/ElrondWizards")}
            />
          </span>
          <span ref={(el) => (socialDis = el)}>
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
      </div>
    </div>
  );
}

export default Menu;
