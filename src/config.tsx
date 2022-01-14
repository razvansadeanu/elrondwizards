import * as Dapp from "@elrondnetwork/dapp";

export const dAppName = "Wizards";
export const decimals = 2;
export const denomination = 18;
export const gasPrice = 1000000000;
export const version = 1;
export const gasLimit = 50000;
export const gasPerDataByte = 1500;

export const walletConnectBridge = "https://bridge.walletconnect.org";
export const walletConnectDeepLink =
  "https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/";

export const contractAddress =
  "erd1qqqqqqqqqqqqqpgq9qxa94es8hx9499e2fe7pfyrlt4sz3g6lwfq3xkh0x";

export const network: Dapp.NetworkType = {
  id: "testnet",
  name: "Testnet",
  egldLabel: "XeGLD",
  walletAddress: "https://testnet-wallet.elrond.com/dapp/init",
  apiAddress: "https://testnet-api.elrond.com",
  gatewayAddress: "https://testnet-gateway.elrond.com",
  explorerAddress: "http://testnet-explorer.elrond.com/",
};
