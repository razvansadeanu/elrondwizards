import * as React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { contractAddress } from "config";
import Denominate from "./../../components/Denominate";
import axios from "axios";

const TopInfo = () => {
  const [data, setData] = React.useState();
  const total_supply = 3333;
  const [leftToMint, setLeftToMint] = React.useState<number>();
  // const {
  //   address,
  //   account: { balance },
  // } = Dapp.useContext();

  // const data = Dapp.useContext();
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
    <div className="text-white" data-testid="topInfo">
      {/* <div className="mb-1">
        <span className="opacity-6 mr-1">:</span>
        <span data-testid="accountAddress"> {address}</span>
      </div>
      <div className="mb-4">
        <span className="opacity-6 mr-1">Contract address:</span>
        <span data-testid="contractAddress"> {contractAddress}</span>
      </div> */}
      <div className="nft-info">
        <div className="nft-section">
          <p>Items in Collection:</p>
          <p>{data}</p>
        </div>
        <div className="nft-section">
          <p>Total Supply:</p>
          <p>{total_supply}</p>
        </div>
        <div className="nft-section">
          <p>Left to mint:</p>
          <p>{leftToMint}</p>
        </div>
        <div
          className="nft-section"
          style={{ borderBottom: "none", borderRadius: "5px" }}
        >
          <p>Minting Price:</p>
          <p>0.5 EGLD</p>
        </div>
      </div>
      <div className="nft-responsive">
        <div>
          <div className="nft-r-section" style={{ border: "none" }}>
            <p>Items in Collection:</p>
            <p>444</p>
          </div>
          <div className="nft-r-section" style={{ borderLeft: "none" }}>
            <p>Total Supply:</p>
            <p>3333</p>
          </div>
        </div>
        <div>
          <div className="nft-r-section" style={{ borderTop: "none" }}>
            <p>Left to mint:</p>
            <p>3170</p>
          </div>
          <div className="nft-r-section">
            <p>Minting Price:</p>
            <p>0.5 EGLD</p>
          </div>
        </div>
      </div>
      {/* <div>
        <h3 className="py-2">
          <Denominate value={balance} dataTestId="balance" />
        </h3>
      </div> */}
    </div>
  );
};

export default TopInfo;
