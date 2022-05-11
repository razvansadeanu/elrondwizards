import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

const Navbar = () => {
  const scrollToAnchor = (
    e: { preventDefault: () => void },
    id: string,
    mobile = false,
  ) => {
    e.preventDefault();
    id = "#" + id;
    if (!document.querySelector(id)) {
      window.location.href = "/" + id;
    }
    if (mobile) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      document.getElementById("react-burger-cross-btn").click();
    }
    const section = document.querySelector(id);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      {/* prettier-ignore */}
      <div>


        <div className="menu-bg" style={{ backgroundImage: "url(/menu-bg.png)" }}>
          <div className="container menu-container">
            <nav className="navbar navbar-expand-md p-0">
              <a className="navbar-brand p-0 m-0" href="/">
                <img width="140" className="img-fluid" src="/elrond-wizards-logo.png" />
              </a>

              <Menu right>
                <a className="menu-item" href="#" onClick={ e => scrollToAnchor(e,"swiper-collection", true) }>Collections</a>
                <a className="menu-item" href="#" onClick={ e => scrollToAnchor(e,"team-link", true) }>Despre noi</a>
                <a className="menu-item" href="#" onClick={ e => scrollToAnchor(e,"roadmap-link", true) }>Roadmap</a>
                <a className="menu-item" href="#" onClick={ e => scrollToAnchor(e,"blog-link", true) }>Blog</a>
                <a className="menu-item" href="#" onClick={ e => scrollToAnchor(e,"contact-link", true) }>Contact</a>
                <a className="menu-item" href="#">Whitepaper</a>
              </Menu>


              <div className="collapse navbar-collapse d-none d-md-block" id="navbarSupportedContent">
                <ul className="navbar-nav ">
                  <li><a href="#" className="nav-link" onClick={ e => scrollToAnchor(e,"swiper-collection") }>Collections</a></li>
                  <li><a href="#" className="nav-link" onClick={ e => scrollToAnchor(e,"team-link") }>About Us</a></li>
                  <li><a href="#" className="nav-link" onClick={ e => scrollToAnchor(e,"roadmap-link") }>Roadmap</a></li>
                  <li><a href="#" className="nav-link" onClick={ e => scrollToAnchor(e,"blog-link") }>Blog</a></li>
                  <li><a href="#" className="nav-link" onClick={ e => scrollToAnchor(e,"contact-link") }>Contact</a></li>
                  <li><a href="/dashboard" className="nav-link">Wallet</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
