import React from "react";
import Actions from "./Actions";
import GifImage from "./GifImage";
import TopInfo from "./TopInfo";

const Buy = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-10 mx-auto">
        <div className="card shadow-sm rounded border-0">
          <div className="card-body p-1">
            <div className="card rounded border-0">
              <div className="card-body text-center p-4 container-flex">
                <div className="left-part">
                  <Actions />
                  <TopInfo />
                </div>
                <GifImage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
