import React from "react";
import axios from "axios";

// prettier-ignore
const OurCollection = () => {

    const price = 0.5;
    const total_supply = 3333;
    const [data, setData] = React.useState();
    const [leftToMint, setLeftToMint] = React.useState<number>();

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "https://api.elrond.com/nfts/count?collection=EWIZZ-1e8ddb",
            );

            setData(result.data);
            setLeftToMint(total_supply - result.data);
        };
        fetchData();
    }, []);

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

                    <div className=" blob ball-top">
                        <div className="bubble-text">
                            <h4>{price} <span>EGLD</span></h4>
                            <h5>Minting Price</h5>
                        </div>
                        <img className="img-fluid" src="/ball-top.svg" alt="bubbles"/>
                    </div>
                    <div className=" blob ball-bottom">
                        <div className="bubble-text">
                            <h4>{data}</h4>
                            <h5>Items in Collection</h5>
                        </div>
                        <img className="img-fluid" src="/ball-bottom.svg" alt="bubbles"/>
                    </div>
                    <div className=" blob ball-left">
                        <div className="bubble-text">
                            <h4>{leftToMint}</h4>
                            <h5>Left to mint</h5>
                        </div>
                        <img className="img-fluid" src="/ball-left.png" alt="bubbles"/>
                    </div>
                    <div className=" blob ball-right">
                        <div className="bubble-text">
                            <h4>{total_supply}</h4>
                            <h5>Total Supply</h5>
                        </div>

                        <img className="img-fluid" src="/ball-right.png" alt="bubbles"/>
                    </div>

                    <div className="balls-mobile">
                        <div className="row d-flex d-md-none">
                            <div className="col-6">
                                <div className="wrap-ball-mobile ballm-1">
                                    <div className="wrap-text-mobile">
                                        <h4>0.5 <span>EGLD</span></h4>
                                        <h5>Minting Price</h5>
                                    </div>

                                    <img className="img-fluid" src="/ball-left.png" alt="bubbles"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="wrap-ball-mobile ballm-2">
                                    <div className="wrap-text-mobile">
                                        <h4>1110</h4>
                                        <h5>Items in Collection</h5>
                                    </div>

                                    <img className="img-fluid" src="/ball-left.png" alt="bubbles"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="wrap-ball-mobile ballm-3">
                                    <div className="wrap-text-mobile">
                                        <h4>2223</h4>
                                        <h5>Left to mint</h5>
                                    </div>

                                    <img className="img-fluid" src="/ball-left.png" alt="bubbles"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="wrap-ball-mobile ballm-4">
                                    <div className="wrap-text-mobile">
                                        <h4>3333</h4>
                                        <h5>Total Supply</h5>
                                    </div>

                                    <img className="img-fluid" src="/ball-left.png" alt="bubbles"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default OurCollection;
