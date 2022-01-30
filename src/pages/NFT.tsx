import React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import axios from "axios";

const NFT = () => {
  const [nfts, setNFTS] = React.useState<any[]>([]);
  const [nftsNumber, setNFTSNumber] = React.useState<any[]>([]);
  const {
    address,
    account: { balance },
  } = Dapp.useContext();

  const address1 =
    "erd1dehtfljwnyk885kavnlhmt9f2kek0qm5epk0wv5t987x9jfy6qcqn2vnrs";
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.elrond.com/accounts/${address}/nfts?identifiers=&creator=erd1qqqqqqqqqqqqqpgqnnh9wnda0frj0cj2r9wfgstxqhn9pgq9lwfqsfen4y`,
      );
      setNFTS(result.data);
    };
    fetchData();
    console.log(nfts);
  }, []);

  React.useEffect(() => {
    const fetchMetadata = async (nftNumber: string) => {
      const result = await axios(
        `https://func-wizards-backend.azurewebsites.net/api/NFT?id=${nftNumber}`,
      ).then((res) => setNFTSNumber((nftsNumber) => [...nftsNumber, res.data]));
    };
    for (let index = 0; index < nfts.length; index++) {
      const nftNum = nfts[index].name.split(" ");
      fetchMetadata(nftNum[1]);
    }
  }, [nfts]);

  return (
    <div className="row">
      <div className="col-12 mx-auto">
        <div className="card shadow-sm rounded border-0">
          <div className="card-body p-1">
            <div className="rounded border-0">
              <div className="nft_row">
                {nfts.map((nft, index) => (
                  <div className="nft_row_cont" key={index}>
                    <div className="nft_container">
                      <img src={nft.url} alt="" />
                      <div className="nft_props">
                        <div className="nft_info">
                          <h3>Details</h3>
                          <div className="nft_text">
                            <span> Name</span> <span>{nft.name}</span>
                          </div>

                          <div className="nft_text">
                            <span>Rarity score</span>
                            <span>
                              {" "}
                              {nftsNumber[index]?.rarity.rarityScore}
                            </span>
                          </div>
                          <div className="nft_text">
                            <span>Identifier</span>{" "}
                            <span className="nft_prop">{nft.identifier}</span>
                          </div>
                        </div>

                        <div className="nft_att">
                          <h3>Properties:</h3>
                          <div className="nft_att_table">
                            <div className="nft_att_col">
                              {nftsNumber[index]?.attributes
                                .slice(0, 10)
                                .map((attribute: any, index: any) => (
                                  <div key={index} className="nft_text">
                                    <span>{attribute.trait_type}</span>
                                    <span>{attribute.value}</span>
                                  </div>
                                ))}
                            </div>
                            <div className="nft_att_col">
                              {nftsNumber[index]?.attributes
                                .slice(10, 20)
                                .map((attribute: any, index: any) => (
                                  <div key={index} className="nft_text">
                                    <span>{attribute.trait_type}</span>
                                    <span>{attribute.value}</span>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nft_responsive">
                      {/* <h3>Details</h3> */}
                      <div className="nft_text">
                        <span> Name</span> <span>{nft.name}</span>
                      </div>
                      <div className="nft_text">
                        <span>Rarity score</span>
                        <span> {nftsNumber[index]?.rarity.rarityScore}</span>
                      </div>
                      <div className="nft_text">
                        <span>Identifier</span>{" "}
                        <span className="nft_prop">{nft.identifier}</span>
                      </div>
                    </div>
                    <div className="nft_att_responsive">
                      {/* <h3>Properties:</h3> */}

                      <div className="nft_att_col">
                        {nftsNumber[index]?.attributes
                          .slice(0, 7)
                          .map((attribute: any, index: any) => (
                            <div key={index} className="nft_text">
                              <span>{attribute.trait_type}</span>
                              <span>{attribute.value}</span>
                            </div>
                          ))}
                      </div>
                      <div className="nft_att_col">
                        {nftsNumber[index]?.attributes
                          .slice(7, 14)
                          .map((attribute: any, index: any) => (
                            <div key={index} className="nft_text">
                              <span>{attribute.trait_type}</span>
                              <span>{attribute.value}</span>
                            </div>
                          ))}
                      </div>
                      <div className="nft_att_col">
                        {nftsNumber[index]?.attributes
                          .slice(14, 20)
                          .map((attribute: any, index: any) => (
                            <div key={index} className="nft_text">
                              <span>{attribute.trait_type}</span>
                              <span>{attribute.value}</span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFT;
