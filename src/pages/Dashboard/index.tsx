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

const Dashboard = () => {
  const ref = React.useRef(null);
  const { apiAddress, address } = Dapp.useContext();
  const { transactionsFetched } = useContext();
  const [activeTab, setActiveTab] = React.useState({
    tab1: true,
    tab2: false,
    tab3: false,
  });
  const dispatch = useDispatch();

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
      });
    if (value.includes("NFT"))
      setActiveTab({
        tab1: false,
        tab2: true,
        tab3: false,
      });
    if (value.includes("Buy"))
      setActiveTab({
        tab1: true,
        tab2: false,
        tab3: false,
      });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  // prettier-ignore
  return (
    <div className="container py-4 dashboard-nft" ref={ref}>
      <div className="wrap-dashboard" style={{ backgroundImage: "url(/nft-list-bg.png)" }}>
        <div className="row">
          <div className="col-12">
            <div className="navs">
              <div
                  className={`nav-buy nft-tab ${activeTab.tab1 ? "tab-active" : ""}`}
                  onClick={handleTabSwitch}
              >
                <span>Buy</span>
              </div>
              <div
                  className={`nav-nft nft-tab ${activeTab.tab2 ? "tab-active" : ""}`}
                  onClick={handleTabSwitch}
              >
                <span>My NFT</span>
              </div>
              <div
                  className={`nav-explore nft-tab ${activeTab.tab3 ? "tab-active" : ""}`}
                  onClick={handleTabSwitch}
              >
                <span>Explore</span>
              </div>
            </div>
          </div>
        </div>
        {(() => {
          if (activeTab.tab1) return <Buy />;
          if (activeTab.tab2) return <NFT />;
          if (activeTab.tab3) return <Explore />;
        })()}
      </div>
    </div>
  );
};

export default Dashboard;
