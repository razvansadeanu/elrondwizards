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
  "erd1qqqqqqqqqqqqqpgqnnh9wnda0frj0cj2r9wfgstxqhn9pgq9lwfqsfen4y";

export const network: Dapp.NetworkType = {
  id: "mainnet",
  name: "MainNet",
  egldLabel: "EGLD",
  walletAddress: "https://wallet.elrond.com/dapp/init",
  apiAddress: "https://api.elrond.com",
  gatewayAddress: "https://gateway.elrond.com",
  explorerAddress: "http://explorer.elrond.com/",
};
