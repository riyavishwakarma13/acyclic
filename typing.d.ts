export declare global {
  interface Window {
    drip: any;

    ethereum: any;
    // ethereum: import("ethers").providers.ExternalProvider;
    // drip: import("ethers").providers.ExternalProvider;
    web3: any;
  }
}
