import React from "react";
import Actions from "./Actions";
import GifImage from "./GifImage";
import TopInfo from "./TopInfo";
// prettier-ignore
const Buy = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card shadow-sm rounded border-0 buy-nft" >
          <div className="card-body p-1">
            <div className="card rounded border-0">
              <div className="card-body text-center p-4 container-flex">

                <div className="wrap-buy">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="left-part">
                        <TopInfo />
                        <Actions />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <GifImage />
                    </div>
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

export default Buy;
