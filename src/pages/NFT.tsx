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

  const rarityScore = "null";

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.elrond.com/accounts/${address}/nfts?identifiers=&creator=erd1qqqqqqqqqqqqqpgqnnh9wnda0frj0cj2r9wfgstxqhn9pgq9lwfqsfen4y`,
      );
      setNFTS(result.data);
    };
    fetchData();
  }, []);
  //https://func-wizards-backend.azurewebsites.net/api/NFT?id=${nftNumber}
  // React.useEffect(() => {
  //   const fetchMetadata = async (nftNumber: string) => {
  //     const result = await axios(
  //       `http://localhost:7071/api/NFT?id=${nftNumber}`,
  //     ).then((res) => setNFTSNumber((nftsNumber) => [...nftsNumber, res.data]));
  //   };
  //   for (let index = 0; index < nfts.length; index++) {
  //     const nftNum = nfts[index].name.split(" ");
  //     fetchMetadata(nftNum[1]);
  //     // console.log(nftNum[1]);
  //     console.log(nftsNumber);
  //   }
  // }, [nfts]);
  // prettier-ignore
  return (
    <div className="row nft-tab">
      <div className="col-12 mx-auto">
        <div className="card shadow-sm rounded border-0">
          <div className="card-body p-1">
            <div className="rounded border-0">
              <div className="nft_row">
                {nfts.map((nft: any, index: any) => (
                  <div className="nft_row_cont w-100" key={index}>
                    <div className="nft_container w-100">

                      <div className="row">
                        <div className="col-md-4 text-center">
                          <img className="img-fluid" src={nft.url} alt="" />
                        </div>
                        <div className="col-md-8">
                          <div className="nft_props">

                            <div className="nft_info">
                              <h3>{nft.name}</h3>


                              <div className="nft_text">
                                <span className="green-text">Rarity: </span>
                                <span>{nft?.metadata.rarity?.rarityScore ? nft?.metadata.rarity?.rarityScore.toFixed(3) : rarityScore}</span>
                              </div>

                              <div className="nft_text">
                                <span className="green-text">Identifier:</span>{" "}
                                <span className="nft_prop">{nft.identifier}</span>
                              </div>

                            </div>

                            <div className="nft_att">
                              <div className="nft_att_table">
                                <div className="nft_att_col">
                                  {nft?.metadata.attributes
                                      .slice(0, 10)
                                      .map((attribute: any, index: any) => (
                                          <div key={index} className="nft_text">
                                            <div className="text-wrapper">
                                              <span className="green-text">{attribute.trait_type}</span>
                                              <span>{attribute.value}</span>
                                            </div>
                                          </div>
                                      ))}

                                  {nft?.metadata.attributes
                                      .slice(10, 20)
                                      .map((attribute: any, index: any) => (
                                          <div key={index} className="nft_text">
                                            <div className="text-wrapper">
                                              <span className="green-text">{attribute.trait_type}</span>
                                              <span>{attribute.value}</span>
                                            </div>
                                          </div>
                                      ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
