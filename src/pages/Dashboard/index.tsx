import * as React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageState from "components/PageState";
import { contractAddress } from "config";
import { useContext, useDispatch } from "context";
import { getTransactions } from "./helpers/asyncRequests";
import Buy from "./Buy";
import NFT from "pages/NFT";
import Explore from "pages/Explore";
import Voucher from "pages/Voucher";
import axios from "axios";

const Dashboard = () => {
  const ref = React.useRef(null);
  const { apiAddress, address } = Dapp.useContext();
  const { transactionsFetched } = useContext();
  const [activeTab, setActiveTab] = React.useState({
    tab1: true,
    tab2: false,
    tab3: false,
    tab4: false,
  });
  const dispatch = useDispatch();
  const [timeDifference, setTimeDifference] = React.useState<any>();
  const [walletStatus, setWalletStatus] = React.useState({
    eligible: true,
    notEligible: false,
    outOfTime: false,
  });

  React.useEffect(() => {
    voucherTimer();
    walletNfTs();
    // if (!walletStatus.notEligible && !walletStatus.outOfTime) {
    //   setWalletStatus({
    //     eligible: true,
    //     notEligible: false,
    //     outOfTime: false,
    //   });
  }, [activeTab]);

  const walletNfTs = async () => {
    const result = await axios(
      `https://api.elrond.com/accounts/${address}/nfts?identifiers=&creator=erd1qqqqqqqqqqqqqpgqnnh9wnda0frj0cj2r9wfgstxqhn9pgq9lwfqsfen4y`,
    );
    if (result.data.length === 0) {
      setWalletStatus({
        eligible: false,
        notEligible: true,
        outOfTime: false,
      });
    }
  };

  const voucherTimer = async () => {
    const result = await axios.post(
      "https://func-wizards-backend.azurewebsites.net/api/checkWallet?",
      { id: address },
    );
    const response = result.status;
    if (response === 200 || response === 202) {
      setWalletStatus({
        eligible: false,
        notEligible: false,
        outOfTime: true,
      });
      const voucherDate = new Date(result.data);
      const today = new Date();
      const msBetweenDates = Math.abs(voucherDate.getTime() - today.getTime());
      const getCountdownDate = 86400000 - msBetweenDates;
      setTimeDifference(getCountdownDate);
      if (msBetweenDates > 86400000) {
        setWalletStatus({
          eligible: true,
          notEligible: false,
          outOfTime: false,
        });
      }
    }
  };

  const fetchData = () => {
    getTransactions({
      apiAddress,
      address,
      timeout: 3000,
      contractAddress,
    }).then(({ data, success }) => {
      dispatch({
        type: "setTransactions",
        transactions: data,
        transactionsFetched: success,
      });
    });
  };

  const handleTabSwitch = (e: any) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (value.includes("Explore"))
      setActiveTab({
        tab1: false,
        tab2: false,
        tab3: true,
        tab4: false,
      });
    if (value.includes("NFT"))
      setActiveTab({
        tab1: false,
        tab2: true,
        tab3: false,
        tab4: false,
      });
    if (value.includes("Buy"))
      setActiveTab({
        tab1: true,
        tab2: false,
        tab3: false,
        tab4: false,
      });
    if (value.includes("Voucher"))
      setActiveTab({
        tab1: false,
        tab2: false,
        tab3: false,
        tab4: true,
      });
  };
  React.useEffect(fetchData, []);
  if (transactionsFetched === undefined) {
    return <PageState svgComponent={<></>} spin />;
  }
  if (transactionsFetched === false) {
    return (
      <PageState
        svgComponent={
          <FontAwesomeIcon icon={faBan} className="text-secondary fa-3x" />
        }
        title="Unavailable"
        className="dapp-icon icon-medium"
      />
    );
  }
  return (
    <div className="container py-4 dashboard-nft" ref={ref}>
      <div
        className="wrap-dashboard"
        style={{ backgroundImage: "url(/nft-list-bg.png)" }}
      >
        <div className="row">
          <div className="col-12">
            <div className="navs">
              <div
                className={`nav-buy nft-tab ${
                  activeTab.tab1 ? "tab-active" : ""
                }`}
                onClick={handleTabSwitch}
              >
                <span>Buy</span>
              </div>
              <div
                className={`nav-nft nft-tab ${
                  activeTab.tab2 ? "tab-active" : ""
                }`}
                onClick={handleTabSwitch}
              >
                <span>My NFT</span>
              </div>
              <div
                className={`nav-explore nft-tab ${
                  activeTab.tab3 ? "tab-active" : ""
                }`}
                onClick={handleTabSwitch}
              >
                <span>Explore</span>
              </div>
              <div
                className={`nav-explore nft-tab ${
                  activeTab.tab4 ? "tab-active" : ""
                }`}
                onClick={handleTabSwitch}
              >
                <span>Voucher</span>
              </div>
            </div>
          </div>
        </div>
        {(() => {
          if (activeTab.tab1) return <Buy />;
          if (activeTab.tab2) return <NFT />;
          if (activeTab.tab3) return <Explore />;
          if (activeTab.tab4)
            return (
              <Voucher
                walletStatus={walletStatus}
                timeDifference={timeDifference}
              />
            );
        })()}
      </div>
    </div>
  );
};

export default Dashboard;
