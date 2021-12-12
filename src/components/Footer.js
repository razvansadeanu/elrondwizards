import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="introContainer">
          <p className="introTitle">
            Elrond Wizards<span className="underline"></span>
          </p>
          <p className="footerText">
            A collection of 3,333 unique NFTs algorithmically generated living
            on Elrond blockchain
          </p>
          <p className="socialLinks">
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
          </p>
        </div>
        <div className="contactContainer">
          <div className="contactText">
            <p className="contactTitle">
              Contact us
              <span className="underlineContact"></span>
            </p>
            <p
              className="footerText"
              onClick={() => window.open("mailto:contact@elrondwizards.com")}
            >
              contact@elrondwizards.com
            </p>
          </div>
        </div>
        <div className="menuLinksContainer">
          <p className="linksTitle">
            Links<span className="underlineLinks"></span>
          </p>
          <div className="menuLinks">
            <Link to="home" spy={true} smooth={true} duration={600}>
              Home
            </Link>
            <Link to="about" spy={true} smooth={true} duration={600}>
              About
            </Link>
            <Link to="roadMap" spy={true} smooth={true} duration={600}>
              RoadMap
            </Link>
            <Link to="funds" spy={true} smooth={true} duration={600}>
              Use of Funds
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
