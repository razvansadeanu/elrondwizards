import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
// prettier-ignore

const About = () => {

    const [style, setStyle] = useState("clasa1");
    const changeStyle = () => {

        setStyle("clasa2");

        if(style == "clasa2"){
            setStyle("clasa1");
        }

    };

    const [style2, setStyle2] = useState("clasa3");
    const changeStyle2 = () => {

        setStyle2("clasa4");

        if(style2 == "clasa4"){
            setStyle2("clasa3");
        }

    };

    const [style3, setStyle3] = useState("clasa5");
    const changeStyle3 = () => {

        setStyle3("clasa6");

        if(style3 == "clasa6"){
            setStyle3("clasa5");
        }

    };

    const [style4, setStyle4] = useState("clasa7");
    const changeStyle4 = () => {

        setStyle4("clasa8");

        if(style4 == "clasa8"){
            setStyle4("clasa7");
        }

    };

    return (
    <div>
      <div className="wrapper-team container" id="team-link">
        <h2>Our team</h2>
        <p>Young and ambitious team that promises to always deliver, we are here on the long term for our community and our common goals. Let&#39;s spread some magic together!</p>
        <div className="wrapper-cards-team">
            <div className="row">
                <div className="col-xl-3 col-sm-6">
                    <div className="wrapper-card">
                        <img className="img-fluid person-avatar" src="/Cosmin-Puscas.png" alt="Cosmin Puscas"/>
                        <p className="name-person">
                            Cosmin P.
                        </p>
                        <p className="function-person">
                            Co-Founder, CEO
                        </p>
                        <div className="row social-icons-person">
                            <div className="col-12 text-left">

                                <Accordion>
                                    <Accordion.Item eventKey="3" className={style4}>
                                        <Accordion.Body>
                                            <p>Humans managed to achieve incredible things in the last decade, amazing discoveries, achievements that we only dreamed of and as future unfolds in front of us, let&apos;s aim towards a better future. Passionate about anything tech related, digital drawing and design and aviation which is my full time job.</p>
                                        </Accordion.Body>
                                        <Accordion.Header  onClick={changeStyle4}>
                                            <a target="_blank" rel="noreferrer"  href="https://twitter.com/cosminpuskas">
                                                <img src="/twitter-icon.svg" alt="twitter" className="img-fluid"/>
                                            </a>
                                            <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/cosmin-puscas-00315113b/ ">
                                                <img src="/linkedin-icon.svg" alt="linkedin" className="img-fluid"/>
                                            </a>

                                            <svg className="arrow-expand" width="38" height="38" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                <path fill="#CA3ADA" d="M33 22.0001L33.7071 21.293L34.4142 22.0001L33.7071 22.7072L33 22.0001ZM11 23.0001C10.4477 23.0001 10 22.5524 10 22.0001C10 21.4478 10.4477 21.0001 11 21.0001V23.0001ZM26.3738 13.9596L33.7071 21.293L32.2929 22.7072L24.9596 15.3739L26.3738 13.9596ZM33.7071 22.7072L26.3738 30.0405L24.9596 28.6263L32.2929 21.293L33.7071 22.7072ZM33 23.0001L11 23.0001V21.0001L33 21.0001V23.0001Z" >

                                                </path>
                                            </svg>

                                        </Accordion.Header>
                                    </Accordion.Item>
                                </Accordion>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="wrapper-card">
                        <img className="img-fluid person-avatar" src="/Alex-Puscas.png" alt="Alex Puscas"/>
                        <p className="name-person">
                            Alex P.
                        </p>
                        <p className="function-person">
                            Co-Founder, CISO
                        </p>
                        <div className="row social-icons-person">
                            <div className="col-12 text-left">

                                <Accordion>
                                    <Accordion.Item eventKey="1" className={style2}>
                                        <Accordion.Body>
                                            <p>I think that we are in a perfect time frame for humanity, we have technology, we have advanced medical science and soon web 3.0. However at the same time, we are drifting away from our roots, we look less and less outside, we don&apos;t experience nature as we used to.</p>
                                        </Accordion.Body>
                                        <Accordion.Header  onClick={changeStyle2}>
                                            <a target="_blank" rel="noreferrer"  href="https://twitter.com/PuscasAlex1">
                                                <img src="/twitter-icon.svg" alt="twitter" className="img-fluid"/>
                                            </a>
                                            <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/alexandru-puscas-930253229">
                                                <img src="/linkedin-icon.svg" alt="linkedin" className="img-fluid"/>
                                            </a>

                                            <svg className="arrow-expand" width="38" height="38" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                <path fill="#CA3ADA" d="M33 22.0001L33.7071 21.293L34.4142 22.0001L33.7071 22.7072L33 22.0001ZM11 23.0001C10.4477 23.0001 10 22.5524 10 22.0001C10 21.4478 10.4477 21.0001 11 21.0001V23.0001ZM26.3738 13.9596L33.7071 21.293L32.2929 22.7072L24.9596 15.3739L26.3738 13.9596ZM33.7071 22.7072L26.3738 30.0405L24.9596 28.6263L32.2929 21.293L33.7071 22.7072ZM33 23.0001L11 23.0001V21.0001L33 21.0001V23.0001Z" >

                                                </path>
                                            </svg>

                                        </Accordion.Header>
                                    </Accordion.Item>
                                </Accordion>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="wrapper-card">
                        <img className="img-fluid person-avatar" src="/Flavius-Eremia.png" alt="Flavius Eremia"/>
                        <p className="name-person">
                            Flavius E.
                        </p>
                        <p className="function-person">
                            Co-Founder, CSO
                        </p>
                        <div className="row social-icons-person">
                            <div className="col-12 text-left">

                                <Accordion>
                                    <Accordion.Item eventKey="0" className={style}>
                                        <Accordion.Body>
                                            <p>Passionate about everything related to computers, especially programming. Ferm believer that crypto will replace traditional currency in the future. IT Programmer and NFT creator. Today is the day when future starts!</p>
                                        </Accordion.Body>
                                        <Accordion.Header  onClick={changeStyle}>
                                            <a target="_blank" rel="noreferrer" href="https://twitter.com/flavius_eremia">
                                                <img src="/twitter-icon.svg" alt="twitter" className="img-fluid"/>
                                            </a>
                                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/flavius-eremia-36a9341ab">
                                                <img src="/linkedin-icon.svg" alt="linkedin" className="img-fluid"/>
                                            </a>

                                            <svg className="arrow-expand" width="38" height="38" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                <path fill="#CA3ADA" d="M33 22.0001L33.7071 21.293L34.4142 22.0001L33.7071 22.7072L33 22.0001ZM11 23.0001C10.4477 23.0001 10 22.5524 10 22.0001C10 21.4478 10.4477 21.0001 11 21.0001V23.0001ZM26.3738 13.9596L33.7071 21.293L32.2929 22.7072L24.9596 15.3739L26.3738 13.9596ZM33.7071 22.7072L26.3738 30.0405L24.9596 28.6263L32.2929 21.293L33.7071 22.7072ZM33 23.0001L11 23.0001V21.0001L33 21.0001V23.0001Z" >

                                                </path>
                                            </svg>

                                        </Accordion.Header>
                                    </Accordion.Item>
                                </Accordion>

                            </div>
                        </div>


                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="wrapper-card">
                        <img className="img-fluid person-avatar" src="/Razvan-Sadeanu.png" alt="Razvan Sadeanu"/>
                        <p className="name-person">
                            Razvan S.
                        </p>
                        <p className="function-person">
                            CWO
                        </p>
                        <div className="row social-icons-person">
                            <div className="col-12 text-left">

                                <Accordion>
                                    <Accordion.Item eventKey="2" className={style3}>
                                        <Accordion.Body>
                                            <p>Crypto is my hobby, programming is my passion. Perfectionist by nature, I want to perfectly adapt technology to help nature.</p>
                                        </Accordion.Body>
                                        <Accordion.Header  onClick={changeStyle3}>
                                            <a target="_blank" rel="noreferrer"  href="https://twitter.com/razvansad?s=11">
                                                <img src="/twitter-icon.svg" alt="twitter" className="img-fluid"/>
                                            </a>
                                            <a target="_blank" rel="noreferrer"  href="https://ro.linkedin.com/in/razvan-sadeanu-b81208173">
                                                <img src="/linkedin-icon.svg" alt="linkedin" className="img-fluid"/>
                                            </a>

                                            <svg className="arrow-expand" width="38" height="38" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                <path fill="#CA3ADA" d="M33 22.0001L33.7071 21.293L34.4142 22.0001L33.7071 22.7072L33 22.0001ZM11 23.0001C10.4477 23.0001 10 22.5524 10 22.0001C10 21.4478 10.4477 21.0001 11 21.0001V23.0001ZM26.3738 13.9596L33.7071 21.293L32.2929 22.7072L24.9596 15.3739L26.3738 13.9596ZM33.7071 22.7072L26.3738 30.0405L24.9596 28.6263L32.2929 21.293L33.7071 22.7072ZM33 23.0001L11 23.0001V21.0001L33 21.0001V23.0001Z" >

                                                </path>
                                            </svg>

                                        </Accordion.Header>
                                    </Accordion.Item>
                                </Accordion>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        <div className="row">
            <div className="col-12 text-center">
                <a href="/our-story" className="btn-main">
                    See our story
                    <img className="img-fluid btn-arrow" src="/arrow-right.svg" alt="arrow"/>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
