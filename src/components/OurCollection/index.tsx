import React from "react";

// prettier-ignore
const OurCollection = () => {

  return (
    <div>

        <div className="wrapper-bubbles container">
            <div className="row our-collection">
                <div className="col-lg-6 d-flex align-items-center">
                    <div>
                        <h2>Our collection</h2>
                        <p>ELROND WIZARDS is a collection of 3,333 Unique NFTs shining on the elrond blockchain</p>
                        <a href="/dashboard" className="btn-main">
                            Mint here
                            <img className="img-fluid btn-arrow" src="/arrow-right.svg" alt="arrow"/>
                        </a>
                        <a href="https://isengard.market/collection/EWIZZ-1e8ddb" className="btn-main-inverted">
                            Mint on Isengard
                            <img className="img-fluid btn-arrow" src="/arrow-right.svg" alt="arrow"/>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 position-relative balls-collection text-center">


                    <img className="img-fluid blob ball-top" src="/ball-top.svg" alt="bubbles"/>
                    <img className="img-fluid blob ball-bottom" src="/ball-bottom.svg" alt="bubbles"/>
                    <img className="img-fluid blob ball-left" src="/ball-left.png" alt="bubbles"/>
                    <img className="img-fluid blob ball-right" src="/ball-right.png" alt="bubbles"/>



                    <img className="img-fluid d-block d-md-none" src="/balls-grouped.png" alt="bubbles"/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default OurCollection;
