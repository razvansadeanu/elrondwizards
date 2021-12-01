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
              <p>About</p>
            </li>
            <li ref={(el) => (teamLink = el)}>
              <p>Team</p>
            </li>
            <li ref={(el) => (roadLink = el)}>
              <p>RoadMap</p>
            </li>
            <li ref={(el) => (faqLink = el)}>
              <p>FAQ</p>
            </li>
          </ul>
        </nav>
        <div className="socialsMenu">
          <span ref={(el) => (socialFb = el)}>
            <FontAwesomeIcon icon={faFacebook} />
          </span>
          <span ref={(el) => (socialIn = el)}>
            <FontAwesomeIcon icon={faGithub} />
          </span>
          <span ref={(el) => (socialTw = el)}>
            <FontAwesomeIcon icon={faInstagram} />
          </span>
          <span ref={(el) => (socialGit = el)}>
            <FontAwesomeIcon icon={faTwitter} />
          </span>
          <span ref={(el) => (socialDis = el)}>
            <FontAwesomeIcon icon={faDiscord} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
