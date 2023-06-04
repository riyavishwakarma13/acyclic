export const detectCurrentProvider = () => {
  let provider;
  console.log(window.drip);
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

