export const detectCurrentProvider = () => {
  let provider;

  // For nextjs server-side rendering
  if (typeof window === "undefined") return null;

  if (window.drip) {
    provider = window.drip;
  } else if (window.ethereum) {
    provider = window.ethereum;
  } else if (window.web3) {
    provider = window.web3.currentProvider;
  } else {
    console.log(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
  return provider;
};
