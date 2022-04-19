import axios from "axios";
import React, { useState } from "react";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Countdown from "react-countdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contractAddress } from "config";
import { RawTransactionType } from "helpers/types";
import * as Dapp from "@elrondnetwork/dapp";
import {
  ContractFunction,
  ContractCallPayloadBuilder,
  U64Value,
} from "@elrondnetwork/erdjs";
import useNewTransaction from "pages/Transaction/useNewTransaction";
import BigNumber from "bignumber.js";
import { routeNames } from "routes";

function Voucher({ walletStatus, timeDifference }: any) {
  const [voucher, setVoucher] = useState("");
  const [inputVoucher, setInputVoucher] = React.useState("#############");
  const [isCopy, setIsCopy] = useState<boolean>(false);
  const sendTransaction = Dapp.useSendTransaction();
  const { address, dapp } = Dapp.useContext();
  const newTransaction = useNewTransaction();
  const contractCallBuilder = new ContractCallPayloadBuilder().setFunction(
    new ContractFunction("mint_nft"),
  );
  const [walletNFTcount, setWalletNFTcount] = useState("");
  let nonce = 1;
  const total_supply = 3333;
  const prime = 110503;
  let shuffled = ((nonce * prime) % total_supply) + 1;
  contractCallBuilder.addArg(new U64Value(new BigNumber(shuffled)));
  let payload = contractCallBuilder.build();
  const Completionist = () => <span>You are good to go!</span>;

  React.useEffect(() => {
    const getVoucher = async () => {
      await axios
        .post("https://func-wizards-backend.azurewebsites.net/api/voucher?", {
          wallet: address,
        })
        .then(function (response) {
          setVoucher(response.data);
          navigator.clipboard.writeText(response.data);
          setInputVoucher(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    if (isCopy === true) {
      getVoucher();
      setIsCopy(false);
    }
  }, [isCopy]);

  const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span className="timer">
          {hours}h {minutes}m {seconds}s
        </span>
      );
    }
  };

  const handleCopyVoucher = async (e: any) => {
    e.preventDefault();
    if (voucher === "") {
      //call api and generate a new one
      setIsCopy(true);
      // setVoucher("WIZZ-251-TWD-D23");
      toast.dark("Copied to clipboard !", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: "#CA3ADA", color: "white" },
        progressClassName: "white-progressbar",
      });
    } else {
      navigator.clipboard.writeText(voucher);
      toast.dark("Already copied to clipboard!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: "#CA3ADA", color: "white" },
      });
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const result = await axios(
      "https://api.elrond.com/nfts/count?collection=EWIZZ-1e8ddb",
    );
    nonce = result.data + 1;
    shuffled = ((nonce * prime) % total_supply) + 1;
    contractCallBuilder.addArg(new U64Value(new BigNumber(shuffled)));
    payload = contractCallBuilder.build();
  };

  const send = (transaction: RawTransactionType) => (e: React.MouseEvent) => {
    e.preventDefault();
    sendTransaction({
      transaction: newTransaction(transaction),
      callbackRoute: routeNames.transaction,
    });
  };

  const mintTransaction: RawTransactionType = {
    data: payload,
    receiver: contractAddress,
    value: "0.5",
    gasLimit: 500000000,
  };

  return (
    <>
      <ToastContainer />
      <div className="row nft-tab">
        <div className="col-12 mx-auto">
          <div className="card shadow-sm rounded border-0">
            <div className="card-body p-1">
              <div className="rounded border-0">
                <div className="nft_row">
                  <div className="sponsor">
                    <img
                      className="img-fluid"
                      alt="magician"
                      src="/gastro.png"
                    />
                    <button
                      className="btn-main link-btn"
                      onClick={() => window.open("https://www.gastrosibiu.ro/")}
                    >
                      Go to gastro
                      <img
                        className="img-fluid btn-arrow"
                        src="/arrow-right.svg"
                        alt="arrow"
                      />
                    </button>
                  </div>
                  <div>
                    <div className="sponsor-info">
                      <p>
                        In collaboration with our friends from Gastro Bistro we
                        decided that everyone with at least one wizzard in their
                        wallet is eligible for a 20 % discount. Feel free to
                        check the offers and details of our partners. Please
                        keep in mind that you can generate just one voucher once
                        at 24h.
                      </p>
                      {(() => {
                        if (walletStatus.notEligible)
                          return (
                            <>
                              <p className="sponsor-info">
                                Unfortunately your wallet is not eligible, you
                                must have at least one wizzard to receive the
                                daily voucher
                              </p>
                              <p>
                                <button
                                  className="btn-main "
                                  onClick={send(mintTransaction)}
                                >
                                  Buy now
                                  <img
                                    className="img-fluid btn-arrow"
                                    src="/arrow-right.svg"
                                    alt="arrow"
                                  />
                                </button>
                              </p>
                            </>
                          );
                        if (walletStatus.outOfTime)
                          return (
                            <>
                              <div className="timer-container">
                                <p>Next voucher will be available in:</p>
                                <Countdown
                                  date={Date.now() + timeDifference}
                                  renderer={renderer}
                                />
                              </div>
                            </>
                          );
                        if (walletStatus.eligible)
                          return (
                            <div>
                              <p className="success-text">
                                You are eligible for 1 voucher
                              </p>
                              <div className="voucher">
                                <input
                                  type="text"
                                  placeholder="##############"
                                  value={inputVoucher}
                                  readOnly
                                />
                                <button onClick={handleCopyVoucher}>
                                  Copy
                                </button>
                              </div>
                              <p className="info-messsage">
                                <span>
                                  <FontAwesomeIcon
                                    icon={faExclamationTriangle}
                                    className="text-white"
                                  />
                                </span>
                                Make sure you have saved the code, once
                                revealed/copied it will take 24 hours to
                                generate a new one, the current voucher can be
                                copied/revealed only once.
                              </p>
                            </div>
                          );
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Voucher;
