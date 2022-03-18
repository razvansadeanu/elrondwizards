import React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import routes, { routeNames } from "routes";
import Navbar from "./Navbar";
import Banner from "components/Banner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { loggedIn } = Dapp.useContext();
  const refreshAccount = Dapp.useRefreshAccount();

  React.useEffect(() => {
    if (loggedIn) {
      refreshAccount();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);
  // prettier-ignore
  return (
    <div className="d-flex flex-column flex-fill wrapper">
      <Navbar />
      <main style={{ zIndex: 1 , backgroundImage: "url(/lines.png)"}} className="d-flex flex-column flex-grow-1 login-wrap">
        <Dapp.Authenticate routes={routes} unlockRoute={routeNames.unlock}>
          {children}
        </Dapp.Authenticate>
      </main>
    </div>
  );
};

export default Layout;
