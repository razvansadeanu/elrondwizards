import * as React from "react";
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
      <div className="nft-info">
        <div className="nft-section">
          <p>{data}</p>
          <h4>Items in Collection</h4>
        </div>
        <div className="nft-section">
          <p>{total_supply}</p>
          <h4>Total Supply</h4>
        </div>
        <div className="nft-section">
          <p>{leftToMint}</p>
          <h4>Left to mint</h4>
        </div>
        <div
          className="nft-section"
          style={{ borderBottom: "none", borderRadius: "5px" }}
        >
          <p>0.75 EGLD</p>
          <h4>Minting Price</h4>
        </div>
      </div>
      <div className="nft-responsive">
        <div>
          <div className="nft-r-section" style={{ border: "none" }}>
            <p>{data}</p>
            <h4>Items in Collection</h4>
          </div>
          <div className="nft-r-section" style={{ borderLeft: "none" }}>
            <p>{total_supply}</p>
            <h4>Total Supply</h4>
          </div>
        </div>
        <div>
          <div className="nft-r-section" style={{ borderTop: "none" }}>
            <p>{leftToMint}</p>
            <h4>Left to mint</h4>
          </div>
          <div className="nft-r-section">
            <p>0.75 EGLD</p>
            <h4>Minting Price</h4>
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
